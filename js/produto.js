// Página de cada impressora (bambu-lab-<id>.html): ficha técnica completa, preço, instalação e perguntas.
// Usa MODELOS, PLAT, AMS, CAIXA, DICA (dados.js) e PRECO, brl, foto, esc, $, ZAP, SERIE, NIVEL, INST, PLAT_INST, vid, medidas (site.js).

const SITE = 'https://prime3d-tecnologia.github.io/';

(function () {
  const raiz = $('#prod');
  if (!raiz || raiz.dataset.pronto) return; // já vem montada no HTML (estatico.sh): não monta de novo
  const i = MODELOS.findIndex(x => x.id === raiz.dataset.id), m = MODELOS[i];
  const P = PLAT[m.plat], n = m.numeros, preco = PRECO[m.id];
  const linha = (k, ...nomes) => { for (const s of P.secoes) for (const r of s[1]) if (nomes.some(x => r[0].startsWith(x))) return r[1]; return ''; };
  const bico = linha('', 'Temperatura máx. do bico', 'Temperatura máx. dos bicos');
  const inst = INST.find(x => x.id === PLAT_INST[m.plat]);
  const ams = m.ams === 'lite' ? AMS.lite : m.ams === 'ams2pro' ? AMS.ams2pro : null;
  const amsP1 = m.ams === 'ams' ? 'AMS de 1ª geração (4 rolos, sem secagem) ou AMS 2 Pro (4 rolos, secagem até 65 °C), conforme a versão. Até 16 cores com 4 unidades.' : '';
  const msg = encodeURIComponent(`Olá, PRIME 3D! Vi no site a Bambu Lab ${m.nome} (a partir de ${brl(preco)} à vista no Pix) e quero um orçamento.`);
  const zap = `https://wa.me/${ZAP}?text=${msg}`;
  const ico = {
    zap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z"/></svg>',
    gar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    nf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
    env: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  };

  const kpis = [
    ['Maior peça', n.tamanho], ['Cores', m.cores], ['Velocidade', n.vel],
    ['Bico até', bico.replace(/ \(.*\)$/, '')], ['Câmara', n.fechada === 'Não' ? 'Aberta' : n.fechada === 'Sim' ? 'Fechada' : 'Fechada e aquecida'], ['Bicos', n.bicos],
  ];
  const tab = (t, linhas, cls = '') => `<div class="pd-sec ${cls}"><h3>${esc(t)}</h3><dl>${linhas.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`;
  let ficha = P.secoes.map(([t, l]) => tab(t, l, /laser|corte|Vortek/i.test(t) ? 'dest' : '')).join('');
  if (ams) ficha += tab('Sistema multicor incluso: ' + ams.nome, ams.linhas, 'dest');
  if (amsP1) ficha += tab('Sistema multicor incluso', [['AMS', amsP1]], 'dest');
  const vizinhos = [MODELOS[i - 1], MODELOS[i + 1], MODELOS[i + 2] && !MODELOS[i - 1] ? MODELOS[i + 2] : MODELOS[i - 2]].filter(Boolean).slice(0, 3);

  raiz.innerHTML = `
  <nav class="pd-trilha wrap" aria-label="Você está em"><a href="index.html">Início</a><span>›</span><a href="impressoras.html">Impressoras</a><span>›</span><b>${esc(m.nome)}</b></nav>

  <section class="pd-hero">
    <div class="wrap">
      <div class="pd-foto"><img src="${foto(m.img)}" alt="Impressora 3D Bambu Lab ${esc(m.nome)}"><span class="lvl">${NIVEL[m.nivel]}</span></div>
      <div class="pd-info">
        <div class="kick">${SERIE[m.serie]}</div>
        <h1>Bambu Lab ${esc(m.nome)}</h1>
        <p class="pd-frase">${esc(m.frase)}</p>
        <div class="pd-kpis">${kpis.map(([k, v]) => `<div><span>${k}</span><b>${esc(v)}</b></div>`).join('')}</div>
        <div class="pd-compra">
          <div class="pd-preco">${DISP(m)}<span>a partir de</span><b>${brl(preco)}<small>à vista no Pix</small></b><em>ou em até 12x no cartão de crédito · consulte a taxa</em></div>
          <div class="pd-btns">
            <a class="btn pri" href="${zap}" target="_blank" rel="noopener">${ico.zap}Quero esta impressora</a>
            <a class="btn sec" href="orcamento.html#${m.id}">Montar orçamento</a>
          </div>
          <ul class="pd-selos"><li>${ico.gar}Garantia de 1 ano do fabricante</li><li>${ico.nf}Original, com nota fiscal</li><li>${ico.env}Envio para todo o Brasil · frete à parte</li></ul>
        </div>
      </div>
    </div>
  </section>

  <div class="pd-menu"><div class="wrap"><a href="#visao">Visão geral</a><a href="#ficha">Ficha técnica</a>${CAIXA[m.id] ? '<a href="#caixa">Na caixa</a>' : ''}<a href="#instalacao">Instalação</a><a href="#duvidas">Dúvidas</a></div></div>

  <section id="visao" class="pd-bloco">
    <div class="wrap">
      <div class="sh"><div class="kick">Visão geral</div><h2>Para quem é a ${esc(m.nome)}</h2><p>${esc(m.paraQuem)}</p></div>
      <div class="pd-fl">
        <div class="pd-card ok"><h3>O que ela faz bem</h3><ul>${m.faz.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div class="pd-card no"><h3>Limites</h3><ul>${m.limites.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
      <div class="pd-duo">
        <div class="pd-quote"><span>“</span><p>${esc(m.analogia)}</p></div>
        <div class="pd-card"><h3>O que muda em relação ao modelo anterior</h3><p>${esc(m.muda)}</p></div>
      </div>
      ${DICA[m.id] ? `<div class="pd-dica"><b>Dica de especialista</b><p>${esc(DICA[m.id])}</p></div>` : ''}
    </div>
  </section>

  <section id="ficha" class="pd-bloco">
    <div class="wrap">
      <div class="sh"><div class="kick">Ficha técnica completa</div><h2>Todas as especificações</h2><p>Dados oficiais da Bambu Lab, traduzidos e organizados. "Maior peça" é o tamanho máximo do que a impressora imprime; "medidas" é o tamanho da própria máquina.</p></div>
      <div class="pd-secs">${ficha}</div>
      <p class="pd-fonte">Fonte: ${esc(P.fonte)} · consulta em ${CONSULTA}. Itens marcados "(rev.)" vêm de revendedores.</p>
    </div>
  </section>

  ${CAIXA[m.id] ? `<section id="caixa" class="pd-bloco"><div class="wrap"><div class="sh"><div class="kick">O que vem na caixa</div><h2>Itens inclusos</h2></div>
    <div class="pd-caixa">${CAIXA[m.id].map(t => `<p>${esc(t)}</p>`).join('')}</div></div></section>` : ''}

  <section id="instalacao" class="pd-bloco">
    <div class="wrap">
      <div class="sh"><div class="kick">Instalação</div><h2>Do desempacotar à primeira peça</h2><p>${esc(inst.nota)}</p></div>
      <div class="pd-inst">
        <ol class="steps">${inst.passos.map(p => `<li><span>${esc(p)}</span></li>`).join('')}</ol>
        <div class="vids">${inst.v.map(x => vid(x)).join('')}</div>
      </div>
      <p><a class="pd-link" href="suporte.html#i-${inst.id}">Ver a central de suporte completa →</a></p>
    </div>
  </section>

  <section id="duvidas" class="pd-bloco">
    <div class="wrap">
      <div class="sh"><div class="kick">Dúvidas frequentes</div><h2>Antes de comprar</h2></div>
      <div class="pd-faq">
        <details open><summary>Quais são as formas de pagamento?</summary><p>À vista no Pix pelo preço do site, ou parcelado em até 12x no cartão de crédito (consulte a taxa do cartão). Vendas a prazo estão sujeitas a verificação.</p></details>
        <details><summary>Quanto custa o frete e qual o prazo?</summary><p>O frete é por conta do cliente e é calculado no orçamento, conforme o endereço de entrega. Os modelos de entrada (série A) estão a pronta entrega; os demais são sob encomenda. Disponibilidade e prazo são confirmados pelo WhatsApp antes do fechamento.</p></details>
        <details><summary>A impressora tem garantia?</summary><p>Sim: garantia de 1 ano do fabricante contra defeitos de fabricação, somada à garantia legal do Código de Defesa do Consumidor.</p></details>
        <details><summary>Posso desistir da compra?</summary><p>Sim. Em compras pela internet ou pelo WhatsApp, você pode desistir em até 7 dias corridos após o recebimento. A coleta não tem custo. <a href="trocas.html">Veja a política completa</a>.</p></details>
        <details><summary>A impressora vem com nota fiscal?</summary><p>Sim. Todos os equipamentos são novos, originais Bambu Lab e vendidos com nota fiscal.</p></details>
      </div>
    </div>
  </section>

  <section class="pd-bloco">
    <div class="wrap">
      <div class="sh"><div class="kick">Compare</div><h2>Veja também</h2></div>
      <div class="pd-viz">${vizinhos.map(v => `<a href="${pagina(v)}"><span class="ph"><img src="${foto(v.img)}" alt="Bambu Lab ${esc(v.nome)}" loading="lazy"></span><span class="tx"><small>${SERIE[v.serie]}</small><b>${esc(v.nome)}</b><span>a partir de ${brl(PRECO[v.id])}</span></span></a>`).join('')}</div>
      <p class="pd-mais"><a class="btn sec" href="impressoras.html">Ver as 14 impressoras</a><a class="btn sec" href="qual-impressora.html">Qual impressora comprar?</a></p>
    </div>
  </section>

  <div class="pd-barra"><div><b>${brl(preco)}</b><span>à vista no Pix</span></div><a class="btn pri sm" href="${zap}" target="_blank" rel="noopener">Quero esta</a></div>`;

  raiz.dataset.pronto = '1';
  // título, descrição e dados para o Google
  const titulo = `Bambu Lab ${m.nome} | Preço no Pix e ficha técnica | PRIME 3D`;
  const desc = `Impressora 3D Bambu Lab ${m.nome} a partir de ${brl(preco)} à vista no Pix ou em até 12x. ${m.frase} Garantia de 1 ano e nota fiscal.`;
  document.title = titulo;
  const meta = (sel, attr, val) => { let e = document.head.querySelector(sel); if (!e) { e = document.createElement('meta'); const [k, v] = sel.match(/\[(.*?)="(.*?)"\]/).slice(1); e.setAttribute(k, v); document.head.appendChild(e); } e.setAttribute(attr, val); };
  meta('meta[name="description"]', 'content', desc);
  meta('meta[property="og:title"]', 'content', titulo);
  meta('meta[property="og:description"]', 'content', desc);
  meta('meta[property="og:image"]', 'content', SITE + foto(m.img));
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Product',
    name: 'Impressora 3D Bambu Lab ' + m.nome, sku: m.id, image: SITE + foto(m.img), description: m.frase + ' ' + m.paraQuem,
    brand: { '@type': 'Brand', name: 'Bambu Lab' },
    offers: { '@type': 'Offer', url: SITE + pagina(m), priceCurrency: 'BRL', price: preco.toFixed(2), availability: ESTOQUE(m) ? 'https://schema.org/InStock' : 'https://schema.org/BackOrder', itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'PRIME 3D Tecnologia' },
      hasMerchantReturnPolicy: { '@type': 'MerchantReturnPolicy', applicableCountry: 'BR', returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow', merchantReturnDays: 7, returnFees: 'https://schema.org/FreeReturn', returnMethod: 'https://schema.org/ReturnByMail' } },
  });
  document.head.appendChild(ld);
})();
