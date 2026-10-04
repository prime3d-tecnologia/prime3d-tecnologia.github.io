# Site PRIME 3D

Site estático (sem custo) publicado pelo GitHub Pages. Manutenção feita pelo Claude nesta pasta.

- `index.html`: estrutura e textos fixos (início, catálogo, suporte, orçamento, rodapé).
- `js/dados.js`: dados das 14 impressoras (cópia de `../Guia_Impressoras/dados.js`; ao mudar lá, copiar para cá).
- `js/site.js`: número do WhatsApp (`ZAP`), vídeos (`V`), guias de instalação (`INST`), abas de suporte e problemas.
- `img/maq/`: fotos das impressoras · `img/v/<id>.jpg`: miniatura de cada vídeo (`https://i.ytimg.com/vi/<id>/mqdefault.jpg`).
- `bash preview.sh` gera `_preview.html` para a prévia no Claude (não vai para o GitHub).
- Publicar: `git add -A && git commit -m "..." && git push` (o GitHub Pages atualiza em 1 a 2 minutos).
- Domínio próprio: criar o arquivo `CNAME` com o domínio e apontar o DNS no registro.br para o GitHub Pages.
