#!/usr/bin/perl
# Monta as páginas do site: perl montar.pl
# Junta partes/cabecalho.html + paginas/<nome>.html + partes/rodape.html em <nome>.html (inicio -> index.html)
# e gera _preview.html (página inicial sem <html>/<head>, para a prévia no Claude).
use strict; use warnings; use utf8;
use FindBin; chdir $FindBin::Bin;
binmode STDOUT, ':utf8';

sub ler { my ($f) = @_; open my $h, '<:utf8', $f or die "$f: $!"; local $/; my $t = <$h>; close $h; $t }
sub gravar { my ($f, $t) = @_; open my $h, '>:utf8', $f or die "$f: $!"; print $h $t; close $h }

my $cab = ler('partes/cabecalho.html');
my $rod = ler('partes/rodape.html');
my $fontes = qq{<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght\@400;500;600;700;800&family=Michroma&display=swap">\n<link rel="stylesheet" href="css/site.css">};

for my $pg (qw(inicio impressoras suporte orcamento trocas)) {
  my $c = ler("paginas/$pg.html");
  my ($meta) = $c =~ /^<!--(.*?)-->\n/s or die "$pg: sem cabeçalho de metadados";
  $c =~ s/^<!--.*?-->\n//s;
  my %m = map { /^\s*(\w+):\s*(.*?)\s*$/ ? ($1, $2) : () } split /\|/, $meta;
  my $titulo = $pg eq 'inicio' ? $m{titulo} : "$m{titulo} · PRIME 3D Tecnologia";
  (my $c2 = $cab) =~ s{(data-aba="$m{aba}")}{$1 aria-current="page"};
  my $scripts = join "\n", map { qq{<script src="js/$_"></script>} } split ' ', $m{scripts};
  my $head = qq{<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<title>$titulo</title>\n<meta name="description" content="$m{descricao}">\n<meta property="og:title" content="$titulo">\n<meta property="og:description" content="$m{descricao}">\n<meta property="og:type" content="website">\n<meta name="theme-color" content="#0d0e10">\n<link rel="icon" href="img/logo-mark-t.png">\n$fontes};
  my $corpo = "$c2\n\n$c\n$rod\n\n$scripts\n";
  my $arq = $pg eq 'inicio' ? 'index.html' : "$pg.html";
  gravar($arq, qq{<!doctype html>\n<html lang="pt-BR">\n<head>\n$head\n</head>\n<body data-pagina="$pg">\n$corpo</body>\n</html>\n});
  gravar('_preview.html', qq{<title>$titulo</title>\n$fontes\n<div data-pagina="$pg">\n$corpo</div>\n}) if $pg eq 'inicio';
  print "ok $arq\n";
}
