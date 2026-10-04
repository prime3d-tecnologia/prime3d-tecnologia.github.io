#!/bin/bash
# Gera _preview.html (versão para o artifact do Claude, sem <html>/<head>/<body>) a partir do index.html.
cd "$(dirname "$0")" && perl -0ne '
  my ($head) = /<head>(.*?)<\/head>/s; my ($body) = /<body>(.*?)<\/body>/s;
  my @keep = ($head =~ /(<title>.*?<\/title>|<link rel="(?:preconnect|stylesheet)"[^>]*>|<style>.*?<\/style>)/gs);
  print join("\n", @keep), "\n", $body;
' index.html > _preview.html && echo ok
