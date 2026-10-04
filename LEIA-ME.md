# Site PRIME 3D

Site estático (sem custo) publicado pelo GitHub Pages em https://prime3d-tecnologia.github.io. Manutenção feita pelo Claude nesta pasta.

Cada aba do cabeçalho é uma página separada: Início (`index.html`), Impressoras, Suporte e Orçamento.

- **Não edite as páginas da raiz à mão.** Edite as partes e rode `perl montar.pl`:
  - `partes/cabecalho.html` e `partes/rodape.html`: iguais em todas as páginas.
  - `paginas/<nome>.html`: conteúdo de cada página; a 1ª linha traz título, descrição, aba e scripts.
- `css/site.css`: visual (cores PRIME 3D: preto #0d0e10 e laranja #ff7a1a).
- `js/dados.js`: dados das 14 impressoras (cópia de `../Guia_Impressoras/dados.js`).
- `js/site.js`: número do WhatsApp (`ZAP`), vídeos (`V`), instalação (`INST`), suporte (`SUP`), problemas (`PROBS`).
- `img/maq/`: fotos das impressoras · `img/v/<id>.jpg`: miniatura de cada vídeo (`https://i.ytimg.com/vi/<id>/mqdefault.jpg`). Só vídeos de criadores brasileiros.
- `montar.pl` também gera `_preview.html` (prévia no Claude; não vai para o GitHub).
- Publicar: `git add -A && git commit -m "..." && git push` (o GitHub Pages atualiza em 1 a 2 minutos).
- Endereços diretos: `impressoras.html#serie-A`, `suporte.html#instalacao`, `#ajuda`, `#problemas`, `#i-h2c`, `orcamento.html#a1-combo`.
- Domínio próprio: criar o arquivo `CNAME` com o domínio e apontar o DNS no registro.br para o GitHub Pages.
