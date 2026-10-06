#!/bin/bash
# Grava o conteúdo montado pelo js/produto.js direto em cada bambu-lab-<id>.html (ficha técnica, preço e dados
# Product para o Google), para que buscadores leiam a página sem depender de JavaScript.
# Roda sozinho no fim do montar.pl. Usa o Chrome (ou o Edge) sem janela (headless); não fecha o Edge do usuário.
cd "$(dirname "$0")" || exit 1
E="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
# o Edge sem janela parou de responder nesta máquina em 06/10/2026: usa o Chrome quando existir
C="/c/Program Files/Google/Chrome/Application/chrome.exe"; [ -x "$C" ] && E="$C"
[ -x "$E" ] || { echo "Navegador não encontrado: páginas de impressora ficam só com JavaScript"; exit 0; }
PERFIL="$TEMP/prime3d-estatico"
n=0
for f in bambu-lab-*.html; do
  W=$(cygpath -w "$PWD/$f")
  "$E" --headless --disable-gpu --user-data-dir="$PERFIL" --dump-dom "file:///$W" 2>/dev/null > "$TEMP/prime3d-dump.html"
  perl -e '
    open my $h, "<:raw", $ARGV[1] or die; local $/; my $d = <$h>; close $h;
    my ($main) = $d =~ m{(<main id="prod"[^>]*data-pronto="1"[^>]*>.*?</main>)}s or die "sem conteúdo montado\n";
    my ($ld) = $d =~ m{(<script type="application/ld\+json">.*?</script>)}s or die "sem dados Product\n";
    open $h, "<:raw", $ARGV[0] or die; my $t = <$h>; close $h;
    $t =~ s{<main id="prod" data-id="[^"]*"></main>}{$main} or die "main já preenchido?\n";
    $t =~ s{</head>}{$ld\n</head>};
    open $h, ">:raw", $ARGV[0] or die; print $h $t; close $h;
  ' "$f" "$TEMP/prime3d-dump.html" && n=$((n+1)) || echo "ERRO em $f"
done
echo "ok $n páginas de impressora com conteúdo no HTML"
