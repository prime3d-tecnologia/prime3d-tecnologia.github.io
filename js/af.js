/* Vídeos de action figures (Shorts do YouTube, < 3 min), usados pela aba "O que imprimir" (o-que-imprimir.html)
   e pela página independente action-figures/index.html. Antes de trocar um vídeo, conferir playableInEmbed e a duração.
   Uso: afMontar(grade, filtros, base) — base = '' na raiz do site ou '../' na página independente. */
var AF = [
  // [id da impressora no site, nome, série (E = especial), id do vídeo, o que foi impresso, canal]
  ['a1m', 'A1 mini', 'A', 'QTGrkQu0zmc', 'Action figure impressa em casa', 'Xerife Tech'],
  ['a1m-combo', 'A1 mini Combo', 'A', '8MxyMhOCbQY', 'Goku', 'SIMONTECH DIY'],
  ['a1', 'A1', 'A', 'm6txlUQfnr0', 'Akuma, de Street Fighter', 'L&M 3D art'],
  ['a1-combo', 'A1 Combo', 'A', '2HA5OcExjAA', 'Hulk articulado', 'SIMONTECH DIY'],
  ['a2l', 'A2L', 'A', 'wg7h_Cla5Mk', 'Boneco do Ice Cube', 'Sargent Digital Design'],
  ['a2l-combo', 'A2L Combo', 'A', 'tQ7mxZsSwqQ', 'Rowdy Ruff Boys (impressos na A2L, X2D e H2C)', 'The Hoopty Hobby'],
  ['p1s-combo', 'P1S Combo', 'P', 'CMCXMLt5nG0', 'Tartarugas Ninja', 'Strand3DPrints'],
  ['p2s-combo', 'P2S Combo', 'P', 'a2nNIQU5mIo', 'Dummy 13 articulado', 'Bernardo Ferraz'],
  ['x2d-combo', 'X2D Combo', 'X', 'EIw5BPUffkc', 'Michael Myers', 'badbutfunnie'],
  ['h2d-combo', 'H2D Combo', 'H', 'bn4eE9cMoIQ', 'Donatello robô gigante (94 horas)', '3D Printing Doctor'],
  ['h2dl-10w', 'H2D Combo Full', 'H', 'jfnDPYNyF8A', 'Corte e gravação a laser + impressão 3D com AMS', 'Mano Jobs'],
  ['h2dl-40w', 'H2D Laser 40W', 'H', '9crx1-1cl2o', 'Guerreiro samurai', 'Spirit Technology'],
  ['h2s-combo', 'H2S Combo', 'H', 'Y1ZWT_fUW9c', 'Bonecos de Halloween', 'The Opinionated One'],
  ['h2c-combo', 'H2C Combo', 'H', 'wMv7YDzcaPI', 'Miles Morales multicolorido', 'Tol3do Labs'],
  // especiais
  ['', 'Pokémon', 'E', 'XkpB2T6i6xM', 'Bulbassauro em tamanho real', 'Felps'],
  ['p1s-combo', 'Marvel', 'E', '2rjYLA3iRAc', 'Homem-Aranha de 23 cm (P1S)', 'EveryDamnThing']
];

function afMontar(g, filtros, base) {
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  g.innerHTML = AF.map(function (v) {
    return '<article class="af-card" data-serie="' + v[2] + '">' +
      '<div class="af-top"><span class="af-serie">' + (v[2] === 'E' ? 'Especial' : 'Série ' + v[2]) + '</span><h2>' + esc(v[1]) + '</h2></div>' +
      '<div class="af-video"><iframe src="https://www.youtube.com/embed/' + v[3] + '?rel=0&amp;playsinline=1" title="' + esc(v[4] + ' · ' + v[1]) + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>' +
      '<div class="af-info"><p class="af-o">' + esc(v[4]) + '</p><p class="af-c">por ' + esc(v[5]) + '</p>' +
      '<div class="af-links"><a href="https://www.youtube.com/shorts/' + v[3] + '" target="_blank" rel="noopener">Assistir no YouTube</a>' +
      (v[0] ? '<a href="' + base + 'bambu-lab-' + v[0] + '.html">Ver a impressora</a>' : '<a href="' + base + 'impressoras.html">Ver as impressoras</a>') +
      '</div></div></article>';
  }).join('');
  var bts = filtros.querySelectorAll('button');
  Array.prototype.forEach.call(bts, function (b) {
    b.addEventListener('click', function () {
      var s = b.getAttribute('data-serie');
      Array.prototype.forEach.call(bts, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      Array.prototype.forEach.call(g.children, function (c) { c.hidden = !!s && c.getAttribute('data-serie') !== s; });
    });
  });
}
