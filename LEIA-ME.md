# Site PRIME 3D

Site estático (sem custo) publicado pelo GitHub Pages em https://prime3d-tecnologia.github.io. Manutenção feita pelo Claude nesta pasta.

Cada aba do cabeçalho é uma página separada: Início (`index.html`), Impressoras, Qual impressora 3D comprar (`qual-impressora.html`), Suporte e Orçamento. A política de trocas (`trocas.html`) fica no rodapé.

Teste "Qual impressora 3D comprar": perguntas, pesos e textos do resultado em `js/qual.js` (usa MODELOS de `js/dados.js` e PRECO de `js/site.js`). Visual claro (fundo branco) desde 04/10/2026; topo e rodapé continuam pretos por causa do logo.

- **Não edite as páginas da raiz à mão.** Edite as partes e rode `perl montar.pl`:
  - `partes/cabecalho.html` e `partes/rodape.html`: iguais em todas as páginas.
  - `paginas/<nome>.html`: conteúdo de cada página; a 1ª linha traz título, descrição, aba e scripts.
- `css/site.css`: visual (cores PRIME 3D: preto #0d0e10 e laranja #ff7a1a).
- `js/dados.js`: dados das 14 impressoras (cópia de `../Guia_Impressoras/dados.js`).
- `js/site.js`: número do WhatsApp (`ZAP`), vídeos (`V`), instalação (`INST`), suporte (`SUP`), problemas (`PROBS`).
- `img/maq/`: fotos das impressoras · `img/v/<id>.jpg`: miniatura de cada vídeo (`https://i.ytimg.com/vi/<id>/mqdefault.jpg`). Só vídeos de criadores brasileiros.
- `montar.pl` também gera `_preview.html` (prévia no Claude; não vai para o GitHub).
- Páginas de cada impressora: `bambu-lab-<id>.html` (ex.: `bambu-lab-a1-combo.html`), geradas pelo `montar.pl` a partir de `js/dados.js` e montadas por `js/produto.js` (ficha técnica completa, preço, instalação, dúvidas e dados Product para o Google). No fim, o `montar.pl` roda `estatico.sh`, que usa o Edge sem janela para gravar esse conteúdo direto no HTML (o Google lê sem depender de JavaScript). Os cartões do catálogo e o resultado do teste levam a essas páginas.
- Disponibilidade (04/10/2026): série A (entrada) em **pronta entrega**, demais **sob encomenda**. Regra em `ESTOQUE` (`js/site.js`) e repetida na descrição do `montar.pl`; mudou o estoque, ajuste os dois e rode `perl montar.pl`.
- Google: `montar.pl` gera `sitemap.xml` e `robots.txt`, põe `canonical` em todas as páginas e os dados da empresa (OnlineStore, sem endereço físico) na página inicial.
- Publicar: `git add -A && git commit -m "..." && git push` (o GitHub Pages atualiza em 1 a 2 minutos).
- Endereços diretos: `impressoras.html#serie-A`, `suporte.html#instalacao`, `#ajuda`, `#problemas`, `#i-h2c`, `orcamento.html#a1-combo`, `impressoras.html#m-p2s-combo` (rola até o modelo e destaca o cartão).
- Domínio próprio: criar o arquivo `CNAME` com o domínio e apontar o DNS no registro.br para o GitHub Pages.
