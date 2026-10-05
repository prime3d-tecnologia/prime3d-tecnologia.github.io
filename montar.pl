#!/usr/bin/perl
# Monta as páginas do site: perl montar.pl
# Junta partes/cabecalho.html + paginas/<nome>.html + partes/rodape.html em <nome>.html (inicio -> index.html)
# e gera _preview.html (página inicial sem <html>/<head>, para a prévia no Claude).
# Também gera as 14 páginas de impressora (bambu-lab-<id>.html), sitemap.xml e robots.txt,
# e no fim roda estatico.sh, que grava o conteúdo das páginas de impressora direto no HTML (para o Google).
use strict; use warnings; use utf8;
use FindBin; chdir $FindBin::Bin;
use POSIX 'strftime';
binmode STDOUT, ':utf8';

sub ler { my ($f) = @_; open my $h, '<:utf8', $f or die "$f: $!"; local $/; my $t = <$h>; close $h; $t }
sub gravar { my ($f, $t) = @_; open my $h, '>:utf8', $f or die "$f: $!"; print $h $t; close $h }

my $SITE = 'https://prime3d-tecnologia.github.io/';
my $cab = ler('partes/cabecalho.html');
my $rod = ler('partes/rodape.html');
my $fontes = qq{<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght\@400;500;600;700;800&family=Michroma&display=swap">\n<link rel="stylesheet" href="css/site.css">};
# dados da empresa para o Google (só na página inicial); sem endereço físico, por decisão da empresa
my $ORG = qq{<script type="application/ld+json">{"\@context":"https://schema.org","\@type":"OnlineStore","name":"PRIME 3D Tecnologia","legalName":"PRIME 3D TECNOLOGIA LTDA","url":"$SITE","logo":"${SITE}img/logo-mark-t.png","email":"prime3d.contabil\@gmail.com","telephone":"+55 19 98419-7243","sameAs":["https://www.instagram.com/prime3dtec"],"contactPoint":{"\@type":"ContactPoint","contactType":"sales","telephone":"+55 19 98419-7243","availableLanguage":"pt-BR","areaServed":"BR"}}</script>};
my @mapa;

for my $pg (qw(inicio impressoras qual-impressora suporte orcamento trocas)) {
  my $c = ler("paginas/$pg.html");
  my ($meta) = $c =~ /^<!--(.*?)-->\n/s or die "$pg: sem cabeçalho de metadados";
  $c =~ s/^<!--.*?-->\n//s;
  my %m = map { /^\s*(\w+):\s*(.*?)\s*$/ ? ($1, $2) : () } split /\|/, $meta;
  my $titulo = $pg eq 'inicio' ? $m{titulo} : "$m{titulo} · PRIME 3D Tecnologia";
  my $arq = $pg eq 'inicio' ? 'index.html' : "$pg.html";
  my $url = $SITE . ($pg eq 'inicio' ? '' : $arq);
  (my $c2 = $cab) =~ s{(data-aba="$m{aba}")}{$1 aria-current="page"};
  my $scripts = join "\n", map { qq{<script src="js/$_"></script>} } split ' ', $m{scripts};
  my $head = qq{<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<title>$titulo</title>\n<meta name="description" content="$m{descricao}">\n<link rel="canonical" href="$url">\n<meta property="og:title" content="$titulo">\n<meta property="og:description" content="$m{descricao}">\n<meta property="og:type" content="website">\n<meta property="og:url" content="$url">\n<meta name="theme-color" content="#0d0e10">\n<link rel="icon" href="img/logo-mark-t.png">\n$fontes};
  $head .= "\n$ORG" if $pg eq 'inicio';
  my $corpo = "$c2\n\n$c\n$rod\n\n$scripts\n";
  gravar($arq, qq{<!doctype html>\n<html lang="pt-BR">\n<head>\n$head\n</head>\n<body data-pagina="$pg">\n$corpo</body>\n</html>\n});
  gravar('_preview.html', qq{<title>$titulo</title>\n$fontes\n<div data-pagina="$pg">\n$corpo</div>\n}) if $pg eq 'inicio';
  push @mapa, $url;
  print "ok $arq\n";
}

# Páginas de cada impressora: bambu-lab-<id>.html (conteúdo montado por js/produto.js a partir de dados.js).
my $dados = ler('js/dados.js');
my %preco = ler('js/site.js') =~ /'([a-z0-9-]+)': ([\d.]+)/g;
my $brl = sub { my $v = sprintf '%.2f', shift; my ($i, $c) = split /\./, $v; 1 while $i =~ s/^(\d+)(\d{3})/$1.$2/; "R\$ $i,$c" };
my @prod;
while ($dados =~ /id: '([^']+)', nome: '([^']+)', serie: '([A-Z])', plat: '[^']+', img: '([^']+)',.*?frase: '([^']*)'/gs) {
  my ($id, $nome, $serie, $img, $frase) = ($1, $2, $3, $4, $5); $frase =~ s/"/&quot;/g;
  (my $foto = $img) =~ s{.*/}{img/maq/};
  my $titulo = "Bambu Lab $nome | Preço no Pix e ficha técnica | PRIME 3D";
  my $disp = $serie eq 'A' ? ' Pronta entrega.' : ' Sob encomenda.';  # mesma regra de ESTOQUE em js/site.js
  my $desc = "Impressora 3D Bambu Lab $nome a partir de " . $brl->($preco{$id}) . " à vista no Pix ou em até 12x.$disp $frase Garantia de 1 ano e nota fiscal.";
  my $url = "${SITE}bambu-lab-$id.html";
  (my $c2 = $cab) =~ s{(data-aba="impressoras")}{$1 aria-current="page"};
  my $head = qq{<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<title>$titulo</title>\n<meta name="description" content="$desc">\n<link rel="canonical" href="$url">\n<meta property="og:title" content="$titulo">\n<meta property="og:description" content="$desc">\n<meta property="og:type" content="product">\n<meta property="og:url" content="$url">\n<meta property="og:image" content="$SITE$foto">\n<meta name="theme-color" content="#0d0e10">\n<link rel="icon" href="img/logo-mark-t.png">\n$fontes};
  my $corpo = qq{$c2\n\n<main id="prod" data-id="$id"></main>\n$rod\n\n<script src="js/dados.js"></script>\n<script src="js/site.js"></script>\n<script src="js/produto.js"></script>\n};
  gravar("bambu-lab-$id.html", qq{<!doctype html>\n<html lang="pt-BR">\n<head>\n$head\n</head>\n<body data-pagina="produto">\n$corpo</body>\n</html>\n});
  push @prod, $id; push @mapa, $url;
}
print "ok ", scalar(@prod), " páginas de impressora\n";

# Mapa do site e robots.txt para o Google
my $hoje = strftime('%Y-%m-%d', localtime);
gravar('sitemap.xml', qq{<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n} . join('', map { "  <url><loc>$_</loc><lastmod>$hoje</lastmod></url>\n" } @mapa) . "</urlset>\n");
gravar('robots.txt', "User-agent: *\nDisallow: /_preview.html\n\nSitemap: ${SITE}sitemap.xml\n");
print "ok sitemap.xml (", scalar(@mapa), " endereços) e robots.txt\n";

system('bash', 'estatico.sh') == 0 or die "estatico.sh falhou\n";
