// "Qual impressora 3D comprar": perguntas do guia (pág. 23) + experiência e orçamento.
// Cada resposta elimina modelos (filtros) e dá pontos (preferências). Usa MODELOS (dados.js) e PRECO, brl, foto, esc, $, ZAP (site.js).

const PERG = [
  { k: 'uso', t: 'Para que você vai usar a impressora?', op: [
    ['hobby', 'Hobby e projetos pessoais', 'Presentes, decoração, brinquedos, peças para casa'],
    ['vender', 'Vender peças', 'Chaveiros, action figures, lembrancinhas, encomendas'],
    ['producao', 'Produção contínua', 'Imprimir o dia todo, muitas peças, fazenda de impressão'],
    ['tecnico', 'Empresa, engenharia ou estúdio', 'Protótipos, peças técnicas e funcionais'],
  ] },
  { k: 'exp', t: 'Você já usou uma impressora 3D?', op: [
    ['nunca', 'Nunca usei', 'Quero algo fácil, que funcione logo'],
    ['pouco', 'Já usei um pouco', 'Conheço o básico'],
    ['exp', 'Tenho experiência', 'Já imprimo e quero ir além'],
  ] },
  { k: 'tam', t: 'Qual o tamanho das maiores peças que você quer imprimir?', op: [
    ['p', 'Pequenas, até 18 cm', 'Chaveiros, miniaturas, peças de mesa'],
    ['m', 'Médias, até 25 cm', 'A maioria das peças: vasos, bonecos, organizadores'],
    ['g', 'Grandes, acima de 25 cm', 'Capacetes, cosplay, luminárias, maquetes'],
    ['n', 'Ainda não sei', 'Indicamos um tamanho que serve para quase tudo'],
  ] },
  { k: 'cor', t: 'Vai imprimir em várias cores na mesma peça?', op: [
    ['1', 'Não, uma cor por vez', 'Posso trocar o rolo à mão ou pintar depois'],
    ['4', 'Às vezes, até 4 cores', 'Nomes, logotipos, detalhes coloridos'],
    ['mx', 'Muitas cores, com frequência', 'Quero trocar de cor desperdiçando pouco filamento'],
  ] },
  { k: 'mat', t: 'Quais materiais você pretende usar?', op: [
    ['comum', 'PLA, PETG e TPU', 'Os mais usados. Na dúvida, escolha esta'],
    ['abs', 'Também ABS e ASA', 'Aguentam calor e sol: peças de carro, uso externo'],
    ['eng', 'Nylon, PC ou fibra de carbono', 'Engrenagens, peças mecânicas e estruturais'],
  ] },
  { k: 'extra', t: 'Além de imprimir em 3D, quer gravar ou cortar?', op: [
    ['nao', 'Não, só imprimir', 'Foco total na impressão 3D'],
    ['vinil', 'Cortar vinil, adesivo e papel', 'Plotter de corte com lâmina'],
    ['l10', 'Gravar e cortar a laser, com detalhe', 'Madeira, couro, acrílico escuro, personalizados'],
    ['l40', 'Cortes a laser grossos e rápidos', 'Chapas de até 15 mm, produção de cortes'],
  ] },
  { k: 'orc', t: 'Quanto você pretende investir?', sub: 'Valores à vista no Pix. Também parcelamos em até 12x no cartão.', op: [
    ['3500', 'Até R$ 3.500', ''],
    ['7500', 'Até R$ 7.500', ''],
    ['15000', 'Até R$ 15.000', ''],
    ['0', 'Acima disso', 'Quero a melhor opção para o que preciso'],
  ] },
];

// características usadas no cálculo
const CAR = {
  'a1m':       { tam: 18, cor: 1,    mat: 1 },
  'a1m-combo': { tam: 18, cor: 4,    mat: 1 },
  'a1':        { tam: 25.6, cor: 1,  mat: 1 },
  'a1-combo':  { tam: 25.6, cor: 4,  mat: 1 },
  'a2l':       { tam: 33, cor: 1,    mat: 1, vinil: 'à parte' },
  'a2l-combo': { tam: 33, cor: 4,    mat: 1, vinil: 'à parte' },
  'p1s-combo': { tam: 25.6, cor: 4,  mat: 2 },
  'p2s-combo': { tam: 25.6, cor: 4,  mat: 2.5 },
  'x2d-combo': { tam: 25.6, cor: 'duplo', mat: 3 },
  'h2s-combo': { tam: 34, cor: 4,    mat: 3 },
  'h2d-combo': { tam: 35, cor: 'duplo', mat: 3 },
  'h2dl-10w':  { tam: 35, cor: 'duplo', mat: 3, laser: 10, vinil: 'incluso' },
  'h2dl-40w':  { tam: 35, cor: 'duplo', mat: 3, laser: 40, vinil: 'incluso' },
  'h2c-combo': { tam: 33, cor: 'vortek', mat: 3 },
};

function pontos(m, r) {
  const c = CAR[m.id], p = PRECO[m.id], s = m.serie, id = m.id;
  // filtros: o que a máquina não consegue fazer
  if (r.tam === 'g' && c.tam < 30) return null;
  if (r.tam === 'm' && c.tam < 25) return null;
  if (r.mat === 'abs' && c.mat < 2) return null;
  if (r.mat === 'eng' && c.mat < 2.5) return null;
  if ((r.extra === 'l10' || r.extra === 'l40') && !c.laser) return null;
  let n = 0;
  const em = (...ids) => ids.includes(id);
  // uso
  n += { hobby: s === 'A' ? 2 : em('p1s-combo') ? .5 : s === 'H' ? -1.5 : 0,
         vender: em('a1-combo') ? 2.5 : em('p1s-combo', 'p2s-combo') ? 2 : em('a2l-combo') ? 1.5 : em('a1m-combo') ? 1 : 0,
         producao: em('p2s-combo') ? 3.5 : em('p1s-combo') ? 3 : em('x2d-combo', 'h2s-combo') ? 1 : 0,
         tecnico: em('x2d-combo', 'h2d-combo') ? 3 : em('h2s-combo') ? 2.5 : em('h2c-combo') ? 2 : em('p2s-combo', 'h2dl-10w', 'h2dl-40w') ? 1 : 0 }[r.uso];
  // experiência
  if (r.exp === 'nunca') n += s === 'A' ? 1.5 : s === 'P' ? .5 : s === 'H' ? -1 : 0;
  if (r.exp === 'exp') n += s === 'X' || s === 'H' ? 1 : 0;
  // tamanho
  if (r.tam === 'p') n += c.tam === 18 ? 2 : c.tam < 30 ? .5 : 0;
  if (r.tam === 'n') n += c.tam >= 25 && c.tam < 30 ? .5 : 0;
  // cores
  if (r.cor === '1') n += c.cor === 1 ? 3 : 0;
  if (r.cor === '4') n += c.cor === 1 ? -4 : 2;
  if (r.cor === 'mx') n += c.cor === 'vortek' ? 5 : c.cor === 'duplo' ? 3 : c.cor === 1 ? -6 : 0;
  // materiais
  if (r.mat === 'comum') n += s === 'A' ? 0 : -.5;
  if (r.mat === 'abs') n += s === 'P' ? 1.5 : 0;
  if (r.mat === 'eng') n += em('x2d-combo') ? 2 : em('h2d-combo', 'h2s-combo') ? 1.5 : em('h2c-combo') ? 1 : em('p2s-combo') ? -2 : 0;
  // laser e corte
  if (r.extra === 'nao') n += c.laser ? -5 : 0;
  if (r.extra === 'vinil') n += c.vinil ? 3 : -2;
  if (r.extra === 'l10') n += c.laser === 10 ? 4 : 1;
  if (r.extra === 'l40') n += c.laser === 40 ? 4 : 1;
  // orçamento: acima do limite perde muitos pontos; dentro dele, o mais em conta ganha um pouco
  const lim = +r.orc;
  if (lim) n += p > lim ? -(4 + (p - lim) / lim * 6) : -p / 20000;
  return n;
}

function porques(m, r) {
  const c = CAR[m.id], p = PRECO[m.id], out = [];
  out.push(`Imprime peças de até <b>${m.numeros.tamanho}</b>${r.tam === 'g' ? ', sem precisar dividir o modelo' : ''}.`);
  if (c.cor === 'vortek') out.push('<b>Vortek</b>: troca sozinha entre até 7 bicos, e cada cor tem o seu. Multicor com quase nenhum desperdício.');
  else if (c.cor === 'duplo') out.push('<b>Bico duplo</b>: troca de cor e de material com bem menos desperdício, e vem com o AMS 2 Pro para até 4 rolos.');
  else if (c.cor === 4) out.push(`Vem com o <b>${m.ams === 'lite' ? 'AMS lite' : 'AMS'}</b>: até 4 cores na mesma peça, sem pintar.`);
  else out.push('Uma cor por vez, pelo menor preço. Se mudar de ideia, dá para somar o AMS lite depois.');
  if (c.mat >= 3) out.push('<b>Câmara aquecida</b>: imprime de PLA a materiais de engenharia, como nylon, PC e fibra de carbono.');
  else if (c.mat >= 2) out.push(`<b>Fechada</b>: além de PLA e PETG, imprime ABS e ASA${c.mat > 2 ? ', e também filamentos com fibra' : ''}.`);
  else out.push('Imprime PLA, PETG e TPU, os materiais mais usados, com calibração automática.');
  if (c.laser) out.push(`<b>Laser de ${c.laser} W</b> e módulo de corte: grava e corta madeira, couro e acrílico escuro, além de cortar vinil.`);
  else if (r.extra === 'vinil' && c.vinil) out.push('Aceita o <b>módulo de corte</b> (vendido à parte): corta vinil, adesivo, papel e couro fino.');
  if (r.exp === 'nunca' && m.serie === 'A') out.push('Fácil para quem está começando: calibra tudo sozinha e fica pronta em pouco tempo.');
  const lim = +r.orc;
  if (lim && p <= lim) out.push(`Cabe no seu orçamento: a partir de <b>${brl(p)}</b> à vista no Pix.`);
  if (lim && p > lim) out.push(`Fica acima do valor que você indicou, mas é a opção que faz o que você pediu. Fale com a gente sobre as condições de pagamento.`);
  return out;
}

const resp = {};
let atual = 0;
const corpo = $('#qz-corpo');

function mostrar(i) {
  atual = i;
  const q = PERG[i];
  $('#qz-step').textContent = `Pergunta ${i + 1} de ${PERG.length}`;
  $('#qz-fill').style.width = ((i + 1) / PERG.length * 100) + '%';
  $('#qz-voltar').hidden = i === 0;
  corpo.innerHTML = `<h2 class="qz-q" tabindex="-1">${q.t}</h2>${q.sub ? `<p class="qz-sub">${q.sub}</p>` : ''}
    <div class="qz-ops">${q.op.map(([v, t, d]) => `<button type="button" class="qz-op" data-v="${v}" aria-pressed="${resp[q.k] === v}"><b>${t}</b>${d ? `<span>${d}</span>` : ''}</button>`).join('')}</div>`;
}

corpo.addEventListener('click', e => {
  const b = e.target.closest('.qz-op');
  if (!b) return;
  resp[PERG[atual].k] = b.dataset.v;
  b.setAttribute('aria-pressed', 'true');
  setTimeout(() => atual + 1 < PERG.length ? (mostrar(atual + 1), corpo.querySelector('.qz-q').focus({ preventScroll: true })) : resultado(), 180);
});
$('#qz-voltar').addEventListener('click', () => mostrar(Math.max(0, atual - 1)));

function cartao(m, cls) {
  return `<a class="qr-alt ${cls || ''}" href="${pagina(m)}"><span class="ph"><img src="${foto(m.img)}" alt="Bambu Lab ${esc(m.nome)}"></span>
    <span><b>${esc(m.nome)}</b><span class="pr">a partir de ${brl(PRECO[m.id])}</span><span class="vr">Ver detalhes →</span></span></a>`;
}

function resultado() {
  const lista = MODELOS.map(m => [m, pontos(m, resp)]).filter(x => x[1] !== null).sort((a, b) => b[1] - a[1]).map(x => x[0]);
  const top = lista[0], alt = lista.slice(1, 3);
  const nomeResp = k => { const q = PERG.find(x => x.k === k); return q.op.find(o => o[0] === resp[k])[1]; };
  const msg = ['Olá, PRIME 3D! Fiz o teste "Qual impressora 3D comprar" no site.',
    'Indicação: Bambu Lab ' + top.nome + ' (a partir de ' + brl(PRECO[top.id]) + ' à vista no Pix)',
    'Minhas respostas: ' + PERG.map(q => nomeResp(q.k)).join(' · '),
    'Quero confirmar o modelo, a disponibilidade e o prazo.'].join('\n');
  $('#qz').hidden = true;
  const qr = $('#qr');
  qr.hidden = false;
  qr.innerHTML = `<div class="qr-main">
      <div class="ph"><img src="${foto(top.img)}" alt="Bambu Lab ${esc(top.nome)}"></div>
      <div class="qr-txt">
        <div class="kick">A impressora ideal para você</div>
        <h2>Bambu Lab ${esc(top.nome)}</h2>
        <p class="fr">${esc(top.frase)}</p>
        <ul class="qr-pq">${porques(top, resp).map(x => `<li>${x}</li>`).join('')}</ul>
        <div class="qr-preco">${DISP(top)}<span>a partir de</span><b>${brl(PRECO[top.id])}<small>no Pix</small></b><em>ou em até 12x no cartão · consulte a taxa · frete à parte</em></div>
        <div class="qr-act">
          <a class="btn pri" href="${pagina(top)}">Ver a ${esc(top.nome)}</a>
          <a class="btn sec" href="https://wa.me/${ZAP}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">Falar no WhatsApp</a>
        </div>
      </div>
    </div>
    ${alt.length ? `<div class="qr-outras"><h3>Também combinam com você</h3><div class="qr-alts">${alt.map(m => cartao(m)).join('')}</div></div>` : ''}
    <div class="qr-fim"><button type="button" class="btn sec sm" id="qz-refazer">Refazer o teste</button><a class="btn sec sm" href="impressoras.html">Ver as 14 impressoras</a></div>`;
  $('#qz-refazer').addEventListener('click', () => { Object.keys(resp).forEach(k => delete resp[k]); qr.hidden = true; $('#qz').hidden = false; mostrar(0); $('#qz').scrollIntoView({ block: 'start' }); });
  qr.querySelector('h2').setAttribute('tabindex', '-1');
  qr.scrollIntoView({ block: 'start' });
  qr.querySelector('h2').focus({ preventScroll: true });
}

mostrar(0);
