// Site PRIME 3D: catálogo (dados.js), central de suporte e orçamento pelo WhatsApp.
// Para trocar o número, altere ZAP aqui e os links "wa.me" do index.html.
const ZAP = '5519984197243';
const yt = id => 'https://www.youtube.com/watch?v=' + id;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Preço "a partir de" (à vista no Pix, sem frete), por id do modelo em dados.js. Atualizado em 04/10/2026.
const PRECO = {
  'a1m': 1952.07, 'a1m-combo': 3424.99, 'a1': 2995.05, 'a1-combo': 4441.50, 'a2l': 4528.63, 'a2l-combo': 6108.59,
  'p1s-combo': 7109.10, 'p2s-combo': 9233.90, 'x2d-combo': 12499.00, 'h2s-combo': 17000.00, 'h2d-combo': 23309.10,
  'h2dl-10w': 29699.10, 'h2dl-40w': 35854.72, 'h2c-combo': 29339.10,
};
const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Vídeos de canais brasileiros: id -> [título, canal, duração, resumo]
const V = {
  'RBvyBNvetu0': ['A1 mini: unboxing, montagem e primeira impressão', 'UpzitoBR', '14:29', 'Abertura da caixa, montagem e a primeira peça saindo da A1 mini.'],
  '-s4Emj1rvUc': ['A1: como montar e instalar do zero', 'Toricelli Smart Tech', '19:54', 'Guia completo passo a passo, da caixa à primeira impressão.'],
  'FI5FWWzgsjE': ['Como montar, configurar e imprimir na A1 (com e sem AMS)', 'David Silva', '13:21', 'Montagem da A1 e uso com e sem o AMS lite.'],
  'DVqVFSnzp4A': ['A2L: unboxing, montagem e testes', 'Fora Da Caixa', '27:02', 'Abertura da caixa, montagem e primeiros testes de impressão da A2L.'],
  'Jsf3yXJKltw': ['P1S Combo: unboxing e primeira impressão', 'ASX Loja Online', '21:45', 'Primeiros passos de montagem e configuração da P1S Combo até a primeira peça.'],
  'bjiBKUgLKf8': ['AMS 2 Pro: tutorial de montagem na P1S', '3D Prime', '9:11', 'Passo a passo detalhado para instalar o AMS 2 Pro em cima da P1S.'],
  'pjoIxaKblYU': ['P2S chegou! Unboxing completo e testes reais', 'Marcos Vinicios', '17:55', 'Unboxing, qualidade de construção, primeira camada e testes iniciais da P2S.'],
  'ND9r-QegYNE': ['P2S Combo: unboxing, review e primeiras impressões', 'Meninas Dopamina', '9:28', 'Unboxing da P2S com AMS 2 Pro e as primeiras peças.'],
  'PvhgjivzkPQ': ['Unboxing da X2D: o novo padrão da Bambu Lab?', 'Fora Da Caixa', '22:10', 'Abertura da caixa, montagem e primeiras impressões com os dois bicos.'],
  'OXRaNUTk9Dg': ['X2D: unboxing e primeiros testes', 'PH 3DMaker', '20:33', 'O que vem na caixa, preparação, configuração inicial e o primeiro teste.'],
  'ARXg7EKKwjM': ['H2S Combo: unboxing e primeiras impressões', 'Translaser', '19:25', 'Abertura da caixa e instalação da H2S com o AMS 2 Pro.'],
  'Nbo2Vfa1jGY': ['Unboxing e primeiras impressões da H2S', 'Hugo Lopes 3D', '7:44', 'Visão rápida da caixa, da instalação e das primeiras peças.'],
  'lt0o8m_OPsw': ['H2D Combo: unboxing e review completo', '3D Prime', '7:58', 'O que vem na caixa da H2D Combo e como ela fica pronta para uso.'],
  '1ynWmJDSltQ': ['Unboxing da H2D: primeira impressão com 2 bicos', 'Hugo Lopes 3D', '21:38', 'Unboxing completo e primeira peça usando os dois bicos.'],
  'YT-VgDKxcHY': ['H2D Laser: unboxing e guia inicial', 'Fora Da Caixa', '65:12', 'Guia longo: instalação da H2D Laser Combo e primeiros trabalhos de impressão, laser e corte.'],
  'HDCXyYqthjA': ['Imprimir, recortar, gravar e desenhar na série H', 'Pedaleria', '11:26', 'Uso real dos módulos de laser, corte e caneta na plataforma H.'],
  'Rdig9jvGmBc': ['H2C: unboxing e primeiras impressões', 'Fora Da Caixa', '25:20', 'Abertura da caixa da H2C e como o sistema Vortek imprime várias cores.'],
  'plXJZ_1h3Tg': ['H2C: unboxing completo, Vortek e primeira impressão', 'Hugo Lopes 3D', '10:17', 'Tudo o que vem na caixa e como o Vortek troca os bicos.'],
  'cvE8pJb27sE': ['Curso gratuito: Bambu Studio do zero (aula 1)', 'Meninas Dopamina', '39:12', 'Instalação e visão geral do Bambu Studio, o programa que prepara as peças.'],
  '_QjEfqDi0vs': ['Como fatiar sua primeira peça no Bambu Studio', 'Mecânica Explorada', '14:39', 'Do arquivo baixado até o envio para a impressora.'],
  'mTDKDNY2BiY': ['Bambu Studio: configurações básicas, brim, textos e troca de filamento', 'Ateliê Júpiter', '13:12', 'Ferramentas do dia a dia do fatiador, explicadas de forma prática.'],
  '9rSya-YHhDY': ['Fatiamento e impressão (curso, parte 8)', 'Marcelo 3D PRINT', '67:52', 'Aula longa sobre todos os ajustes de fatiamento até a impressão.'],
  'Y1f3JY4yWnY': ['Como colorir peças no Bambu Studio', 'Marco Garcia', '28:42', 'Usa a ferramenta de pintura para colocar várias cores no modelo.'],
  'OoPmYvn3Cko': ['Esquema de cores no Bambu Studio (curso, parte 7)', 'Marcelo 3D PRINT', '16:05', 'Como organizar as cores e os filamentos do AMS no projeto.'],
  'E4GQcg145CE': ['AMS lite e Bambu Studio: tutorial básico', 'Marcelo 3D PRINT', '55:44', 'Configuração do AMS lite na A1 e A1 mini e uso geral do fatiador.'],
  'L5GwG-97IJ8': ['Dicas para gerenciar filamentos no AMS lite', 'Cotrim 13D', '10:22', 'Como organizar, trocar e identificar os rolos no AMS lite.'],
  'BzxuX3wrk7Y': ['Filamento externo e AMS ao mesmo tempo (X2D)', 'Aventura na 3D', '9:18', 'Configuração para usar o rolo externo junto com as 4 cores do AMS.'],
  'IXDND1Pg-zA': ['Como vincular a impressora ao Bambu Handy', 'Dúvida Tech', '1:17', 'Ligação rápida da impressora ao aplicativo do celular.'],
  'zM8rNZW0zK4': ['Atualização e configuração inicial da A1 Combo', 'Vinicio Marzano', '19:10', 'Atualizar o firmware e deixar a impressora pronta depois da montagem.'],
  '5oas3-QcWYY': ['Como atualizar o Bambu Studio', '3D Curioso', '1:34', 'Mantém o programa em dia para ter os perfis das impressoras novas.'],
  'xYr65JPL4gE': ['Cortar a peça no Bambu Studio e adicionar conectores', 'Zoom Digital', '12:41', 'Divide peças grandes em partes que se encaixam.'],
  'B3ZZO8v_Lvg': ['Como trocar o bico da A1', 'Manual3D', '3:33', 'Troca do bico da A1 e A1 mini sem danificar a impressora.'],
  '3LcrQbb5u0U': ['Como trocar o hotend da A1', 'Nerd Marombeiro 3D', '16:35', 'A maneira mais simples de trocar o hotend da série A.'],
  'br6X7jrOF5M': ['Como trocar o bico da P1S', 'Flex3D Lab', '9:50', 'Guia completo para substituir o bico da P1S.'],
  'q65Rh_2-yi4': ['Primeira camada errada na A1? Corrija assim', '3D Legacy', '12:09', 'Camada esmagada, soltando da mesa ou irregular: causas e correções.'],
  'RjUikGtRWsA': ['Como resolver o problema da primeira camada (A1 / A1 mini)', 'Gustavo Prates 3D', '7:00', 'Uma causa comum da primeira camada ruim e como corrigir.'],
  '0zbRw7xMw0M': ['A mesa da A1 riscou, é normal?', 'Vandeko Technology', '12:28', 'O que significam os riscos na placa e quando se preocupar.'],
  'NMXtPHimRPA': ['Bambu Lab entupiu? Veja como resolver em minutos', '3D Geek Show', '7:49', 'Passo a passo para desentupir o bico sem desmontar tudo.'],
  'Y80Tqbm0Jq8': ['O filamento parou de sair? Saiba se é mesmo bico entupido', 'Marcelo 3D PRINT', '14:07', 'Três causas possíveis e o que fazer em cada uma (A1 e A1 mini).'],
  'yT0uSejgiSw': ['Como desentupir o bico da P1S', 'Flex3D Lab', '9:51', 'Passo a passo para a série P.'],
  'sPUUl6Pd47Y': ['Desentupindo o bico da A1 e A1 mini', '3D Fila', '2:28', 'Vídeo curto com o procedimento na série A.'],
  'tdx6E89WUZM': ['Erro "não foi possível alimentar a extrusora" (A1)', 'X-PERGAMES', '3:17', 'Como resolver o erro de alimentação de filamento na A1.'],
  '_AN1PiMwP74': ['Filamento úmido? Aprenda a secar e proteger', 'HiperFoco Lab', '10:35', 'Por que a umidade estraga a impressão e como secar e guardar os rolos.'],
  'WCMRhNVupkw': ['Ajustes para acabar com as teias (stringing)', 'Professor Daniel Lobão', '7:47', 'Ajustes de fatiador que reduzem os fiapos entre partes da peça.'],
  's47SNvR6fhQ': ['Erro de atualização na A1 mini', 'Dúvida Tech', '1:14', 'O que fazer quando a impressora não conclui a atualização.'],
  'c7cOajLTJJQ': ['Manutenção e lubrificação completa da A1', 'Manual3D', '33:09', 'Limpeza, lubrificação e revisão geral da série A.'],
  'uHTblaOWorE': ['Lubrificação dos eixos', 'Zoom Digital', '12:59', 'Manutenção preventiva dos eixos para evitar falhas no meio da impressão.'],
  '3_q8LfiBFEc': ['Ajustando o desperdício da troca de cor no Bambu Studio', 'Marcelo 3D PRINT', '14:28', 'Onde ficam os volumes de purga e como reduzi-los sem misturar cores.'],
  'H5u6BVD9QEw': ['Como reduzi em 70% o desperdício na impressão colorida', 'Hugo Lopes 3D', '20:18', 'Ajustes do Bambu Studio que cortam a maior parte do descarte.'],
  '1YJogyVEcbw': ['A1: limpeza e lubrificação passo a passo', 'PH 3DMaker', '7:51', 'Como limpar e lubrificar a A1 de forma correta e segura.'],
  '250pS8nytxE': ['Lubrificando o eixo Y da A1 e A1 mini', 'Tecnicologia ilimitada', '3:06', 'O trilho da mesa, com o óleo que vem na caixa de acessórios.'],
};

const INST = [
  { id: 'a1m', nome: 'A1 mini', vale: 'Vale para A1 mini e A1 mini Combo', img: 'a1m-combo-w.jpg',
    nota: 'Chega quase montada: fica pronta em cerca de 20 minutos. O Wi-Fi é só de 2,4 GHz.',
    passos: ['Retire espumas, fitas e travas de transporte', 'Encaixe a tela e o suporte do rolo', 'Combo: monte o AMS lite e ligue os 4 tubos ao cabeçote', 'Ligue, escolha o idioma e conecte ao Wi-Fi 2,4 GHz', 'Vincule no app Bambu Handy e atualize o firmware', 'Espere a calibração automática terminar antes de imprimir'],
    v: ['RBvyBNvetu0'] },
  { id: 'a1', nome: 'A1', vale: 'Vale para A1 e A1 Combo', img: 'a1-combo-w.jpg',
    nota: 'A mesa anda para frente e para trás: deixe uns 20 cm livres atrás e na frente da máquina.',
    passos: ['Retire espumas, fitas e travas de transporte', 'Fixe o pórtico na base com os parafusos do kit', 'Encaixe a tela e o suporte do rolo', 'Combo: monte o AMS lite ao lado e ligue os 4 tubos', 'Conecte ao Wi-Fi 2,4 GHz e vincule no Bambu Handy', 'Atualize o firmware e rode a calibração inicial'],
    v: ['-s4Emj1rvUc', 'FI5FWWzgsjE'] },
  { id: 'a2l', nome: 'A2L', vale: 'Vale para A2L e A2L Combo', img: 'a2l-combo.jpg',
    nota: 'Ocupa 54 × 53 cm de bancada e a mesa se move no eixo Y. Prefira um móvel firme, que não balance.',
    passos: ['Retire espumas, fitas e travas de transporte', 'Monte o pórtico e a tela conforme o guia rápido', 'Combo: posicione o AMS lite e ligue os tubos', 'Conecte ao Wi-Fi 2,4 GHz (não há cabo de rede)', 'Vincule no Bambu Handy e atualize o firmware', 'Deixe a calibração de vibração e de fluxo rodar'],
    v: ['DVqVFSnzp4A'] },
  { id: 'p1s', nome: 'P1S Combo', vale: 'Vale para P1S e P1S Combo', img: 'p1s-combo.jpg',
    nota: 'A tela tem botões, sem toque. A configuração fica mais fácil pelo app Bambu Handy.',
    passos: ['Solte os parafusos de transporte que prendem a mesa', 'Retire as espumas de dentro da câmara', 'Coloque o AMS em cima da tampa e ligue cabo e tubo atrás', 'Conecte ao Wi-Fi e vincule no Bambu Handy', 'Atualize o firmware', 'Rode a calibração inicial antes da primeira peça'],
    v: ['Jsf3yXJKltw', 'bjiBKUgLKf8'] },
  { id: 'p2s', nome: 'P2S Combo', vale: 'Vale para P2S e P2S Combo', img: 'p2s-combo.jpg',
    nota: 'Tela de toque de 5" com assistente. O Wi-Fi aceita 2,4 e 5 GHz.',
    passos: ['Retire travas, espumas e abraçadeiras de transporte', 'Coloque o AMS 2 Pro em cima e ligue cabo e tubo', 'Instale o buffer 2-em-1 conforme o guia rápido', 'Siga o assistente da tela: idioma, região e Wi-Fi', 'Vincule no Bambu Handy e atualize o firmware', 'Deixe a calibração automática de fluxo rodar'],
    v: ['pjoIxaKblYU', 'ND9r-QegYNE'] },
  { id: 'x2d', nome: 'X2D Combo', vale: 'Vale para X2D e X2D Combo', img: 'x2d-combo.jpg',
    nota: 'Tem dois bicos. Na calibração inicial a máquina ajusta os dois, então não interrompa.',
    passos: ['Retire travas, espumas e abraçadeiras de transporte', 'Coloque o AMS 2 Pro em cima e ligue cabo e tubos', 'Siga o assistente da tela: idioma, região e Wi-Fi', 'Vincule no Bambu Handy e atualize o firmware', 'Rode a calibração completa, que inclui os dois bicos', 'Imprima o modelo de teste do armazenamento interno'],
    v: ['PvhgjivzkPQ', 'OXRaNUTk9Dg'] },
  { id: 'h2s', nome: 'H2S Combo', vale: 'Vale para H2S e H2S Combo', img: 'h2s-combo.jpg',
    nota: 'Pesa 30 kg: tire da caixa em duas pessoas e use um móvel que aguente o peso e a vibração.',
    passos: ['Retire da caixa em duas pessoas, pelas laterais', 'Solte os parafusos de transporte indicados no guia', 'Coloque o AMS 2 Pro em cima e ligue cabo e tubo', 'Siga o assistente da tela e conecte ao Wi-Fi', 'Vincule no Bambu Handy e atualize o firmware', 'Rode a calibração inicial completa'],
    v: ['ARXg7EKKwjM', 'Nbo2Vfa1jGY'] },
  { id: 'h2d', nome: 'H2D Combo', vale: 'Vale para H2D e H2D Combo', img: 'h2d-combo.jpg',
    nota: 'Pesa 31 kg e tem dois bicos de 350 °C. Na primeira ligação a calibração demora mais: deixe terminar.',
    passos: ['Retire da caixa em duas pessoas, pelas laterais', 'Solte os parafusos de transporte indicados no guia', 'Coloque o AMS 2 Pro em cima e ligue cabo e tubo', 'Siga o assistente da tela e conecte ao Wi-Fi', 'Vincule no Bambu Handy e atualize o firmware', 'Rode a calibração completa dos dois bicos'],
    v: ['lt0o8m_OPsw', '1ynWmJDSltQ'] },
  { id: 'h2dl', nome: 'H2D Laser', vale: 'Vale para H2D Laser 10W e 40W', img: 'h2dl-10w.jpg',
    nota: 'O módulo laser é classe 4. Só funciona com a porta fechada e a chave de segurança no lugar. Nunca burle as travas.',
    passos: ['Instale a máquina como na H2D Combo', 'Ligue o tubo de ventilação de 100 mm e leve a saída para fora do ambiente', 'Encaixe a chave de segurança e deixe o botão de emergência ao alcance', 'Para gravar ou cortar, troque para a plataforma de laser', 'Encaixe o módulo laser no cabeçote', 'Posicione o material pela câmera de cima (BirdsEye)'],
    v: ['YT-VgDKxcHY', 'HDCXyYqthjA'] },
  { id: 'h2c', nome: 'H2C Combo', vale: 'Vale para H2C e H2C Combo', img: 'h2c-combo.jpg',
    nota: 'O Vortek troca sozinho entre até 6 bicos guardados na máquina. Confira os bicos de indução que vêm na caixa antes de começar.',
    passos: ['Retire da caixa em duas pessoas (32,5 kg)', 'Solte os parafusos de transporte indicados no guia', 'Confira o rack Vortek e os bicos de indução', 'Coloque o AMS 2 Pro em cima e ligue cabo e tubo', 'Conecte ao Wi-Fi, vincule no Bambu Handy e atualize', 'Rode a calibração inicial, que inclui os bicos do rack'],
    v: ['Rdig9jvGmBc', 'plXJZ_1h3Tg'] },
];
// modelo do catálogo -> guia de instalação
const PLAT_INST = { a1m: 'a1m', a1: 'a1', a2l: 'a2l', p1s: 'p1s', p2s: 'p2s', x2d: 'x2d', h2s: 'h2s', h2d: 'h2d', h2dl10: 'h2dl', h2dl40: 'h2dl', h2c: 'h2c' };

const SUP = [
  ['Primeiros passos no Bambu Studio', 'O programa gratuito que transforma o modelo 3D nas instruções da impressora.', ['cvE8pJb27sE', '_QjEfqDi0vs', 'mTDKDNY2BiY', '9rSya-YHhDY']],
  ['Cores e AMS', 'Pintar o modelo, organizar os rolos e usar o sistema automático de cores.', ['Y1f3JY4yWnY', 'OoPmYvn3Cko', 'E4GQcg145CE', 'L5GwG-97IJ8', 'BzxuX3wrk7Y']],
  ['Aplicativo, atualizações e recursos', 'Celular, firmware e ferramentas úteis do fatiador.', ['IXDND1Pg-zA', 'zM8rNZW0zK4', '5oas3-QcWYY', 'xYr65JPL4gE']],
  ['Troca de bico e hotend', 'Para trocar o diâmetro do bico ou substituir uma peça gasta.', ['B3ZZO8v_Lvg', '3LcrQbb5u0U', 'br6X7jrOF5M']],
];

const PROBS = [
  { t: 'A peça solta da mesa ou empena', sint: 'Cantos levantando, peça arrastada pelo bico, "espaguete".',
    causa: 'Gordura dos dedos na placa, placa errada no fatiador ou corrente de ar em material técnico.',
    sol: ['Lave a placa com água e detergente neutro e não toque na área de impressão', 'Confira se a placa escolhida no fatiador é a que está na máquina', 'Use borda (brim) em peças altas ou com pouca base', 'ABS e ASA: só em máquina fechada (P, X ou H), com a porta fechada'],
    v: ['q65Rh_2-yi4'] },
  { t: 'Bico entupido ou extrusão falhando', sint: 'Falhas nas paredes, linhas finas, estalos ou "clique" na extrusora.',
    causa: 'Sujeira ou material carbonizado dentro do bico, ou temperatura baixa para o filamento.',
    sol: ['Confira antes se o filamento não está preso no caminho (vídeo do Marcelo)', 'Aqueça e empurre o filamento manualmente pela tela', 'Faça a limpeza com a agulha que vem na caixa ou o "cold pull"', 'Se não resolver, troque o bico ou o hotend (aba Suporte)'],
    v: ['Y80Tqbm0Jq8', 'NMXtPHimRPA', 'sPUUl6Pd47Y', 'yT0uSejgiSw'] },
  { t: 'AMS não puxa ou não recolhe o filamento', sint: 'Erro de alimentação, rolo parado, filamento preso no tubo.',
    causa: 'Ponta quebrada ou amassada, filamento enroscado no rolo ou carretel de papelão patinando.',
    sol: ['Corte a ponta do filamento em diagonal antes de carregar', 'Confira se o rolo gira livre e não tem fio cruzado', 'Carretel de papelão: use um anel adaptador', 'Se sobrou um pedaço lá dentro, abra o caminho e retire'],
    v: ['tdx6E89WUZM', 'L5GwG-97IJ8'] },
  { t: 'Fios, bolhas e estalos na peça', sint: 'Teias entre partes da peça, superfície áspera, barulho de "pipoca" no bico.',
    causa: 'Filamento úmido. PETG, nylon e TPU absorvem umidade do ar em poucos dias.',
    sol: ['Seque o rolo: no AMS 2 Pro, até 65 °C; PLA costuma pedir de 50 a 55 °C', 'Guarde rolos abertos em pote fechado com sílica', 'Depois de seco, recalibre o fluxo', 'Se continuar, ajuste a retração no fatiador'],
    v: ['_AN1PiMwP74', 'WCMRhNVupkw'] },
  { t: 'Primeira camada feia ou irregular', sint: 'Linhas separadas, partes transparentes ou muito amassadas.',
    causa: 'Placa suja, placa trocada no fatiador ou nivelamento desatualizado.',
    sol: ['Lave a placa e deixe secar bem', 'Marque no fatiador a placa correta (Textured PEI, Cool Plate etc.)', 'Rode de novo a calibração de nivelamento', 'Ajuste a temperatura da mesa ao material'],
    v: ['RjUikGtRWsA', '0zbRw7xMw0M'] },
  { t: 'Não conecta ao Wi-Fi ou não atualiza', sint: 'Não aparece no Bambu Handy, cai a conexão ou a atualização trava.',
    causa: 'Na série A o Wi-Fi é só de 2,4 GHz. Redes de 5 GHz ou com o mesmo nome para as duas faixas confundem a máquina.',
    sol: ['Série A (A1 mini, A1, A2L): use uma rede de 2,4 GHz', 'Aproxime o roteador ou use um repetidor', 'Evite acentos e símbolos no nome da rede', 'Sem internet, use o modo de rede local (LAN) ou o cartão de memória'],
    v: ['s47SNvR6fhQ'] },
  { t: 'Camadas deslocadas ou barulho nos eixos', sint: 'A peça "dá um degrau" de lado; ruído de raspado ao mover.',
    causa: 'Eixos secos ou sujos, peça descolada batendo no bico ou algo no caminho do cabeçote.',
    sol: ['Desligue e mova o cabeçote à mão: deve deslizar sem pontos duros', 'Limpe e lubrifique os eixos (veja Manutenção, abaixo)', 'Rode a calibração de vibração', 'Confira se nenhum cabo ou tubo enrosca no movimento'],
    v: ['uHTblaOWorE', 'c7cOajLTJJQ'] },
  { t: 'Muita sobra de purga no coletor', sint: 'O descarte enche rápido em peças coloridas.',
    causa: 'Purga no padrão máximo e trocas de cor em todas as camadas.',
    sol: ['Baixe o multiplicador de purga para 0,6 a 0,8', 'Ative purga no preenchimento ou em um objeto', 'Junte mais peças na mesma placa', 'Veja os 8 ajustes logo abaixo'],
    v: ['3_q8LfiBFEc', 'H5u6BVD9QEw'] },
];

const HOW = [
  ['%', 'Reduza o multiplicador de purga', 'O padrão (1,0) é generoso; entre 0,6 e 0,8 costuma bastar. Cor clara depois de escura precisa de mais: teste antes em peça pequena.', 'Preparar › Volumes de purga › Multiplicador'],
  ['in', 'Purgue no preenchimento', 'A cor velha vai para o preenchimento interno, que ninguém vê.', 'Objeto › botão direito › Opções de purga'],
  ['ob', 'Purgue em um objeto de sacrifício', 'Imprima junto uma peça útil de uma cor só. Ela recebe a purga e vira produto.', 'Objeto › botão direito › Purgar neste objeto'],
  ['su', 'Purgue no suporte', 'O suporte será jogado fora de qualquer jeito: ele pode absorver a purga.', 'Opções de purga › Purgar no suporte'],
  ['×n', 'Imprima várias peças por placa', 'A purga acontece por camada, não por peça. Com 10 peças na mesa, o descarte por peça cai a quase um décimo.', 'Organize a placa antes de fatiar'],
  ['↑', 'Use cor só onde aparece', 'Em placas e letreiros, deixe a segunda cor só nas últimas camadas.', 'Pintura por camada / altura'],
  ['↻', 'Ative o reabastecimento automático', 'Com dois rolos iguais no AMS, a máquina termina um e continua no outro.', 'Tela da impressora › AMS'],
  ['✓', 'Evite a peça perdida', 'O maior desperdício é a impressão que falha. Filamento seco, placa limpa e calibração em dia.', 'Veja os problemas comuns acima'],
];

const MANT = [
  ['Toda impressão', 'Confira a placa limpa e esvazie o coletor de purga', 'Evita peça solta e restos caindo no mecanismo'],
  ['Toda semana', 'Lave a placa com água e detergente; guarde rolos abertos em pote com sílica', 'Recupera a aderência e evita filamento úmido'],
  ['A cada mês', 'Limpe os eixos com pano seco e lubrifique com o produto indicado no manual', 'Movimento suave evita camadas deslocadas e ruído'],
  ['A cada mês', 'Limpe a lâmina do cortador de filamento e a calha de purga', 'Evita troca de cor falhando e filamento preso'],
  ['A cada 3 meses', 'Revise correias, tubos PTFE e engrenagens da extrusora', 'Tubos gastos e engrenagens sujas causam falhas no AMS'],
  ['Conforme o uso', 'Troque o filtro de carvão (P1S, P2S) ou o conjunto de filtros (X2D, série H)', 'Mantém a filtragem de odores e partículas'],
  ['Ao trocar de material', 'Use bico de aço endurecido para filamentos com fibra (CF, GF)', 'A fibra desgasta bico de aço inox em poucas horas'],
];

const SERIE = { A: 'Série A · Entrada', P: 'Série P · Produção', X: 'Série X · Premium compacta', H: 'Série H · Profissional' };
const NIVEL = ['', 'Iniciante', 'Iniciante+', 'Intermediário', 'Avançado', 'Profissional'];
const foto = p => 'img/maq/' + p.split('/').pop();

// ------------------------------------------------------------ vídeos
function vid(id, mini) {
  const [t, c, d, r] = V[id];
  const th = `<span class="th"><img src="img/v/${id}.jpg" alt="" loading="lazy"><span class="play"><i></i></span>${mini ? '' : `<span class="dur">${d}</span>`}</span>`;
  const attrs = `href="${yt(id)}" target="_blank" rel="noopener" data-v="${id}"`;
  if (mini) return `<a ${attrs}>${th}<span><span class="vt">${esc(t)}</span><span class="vc">${esc(c)} · ${d}</span></span></a>`;
  return `<a class="vid" ${attrs}>${th}<span><span class="vt">${esc(t)}</span><span class="vc">${esc(c)}</span><span class="vd">${esc(r)}</span></span></a>`;
}

// Player embutido só no site publicado; em pré-visualizações o vídeo abre no YouTube.
const EMBED = /github\.io$|prime3d/i.test(location.hostname);
const dlg = $('#player');
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-v]');
  if (!a || !EMBED || !dlg.showModal) return;
  e.preventDefault();
  const id = a.dataset.v;
  $('#pl-t').textContent = V[id][0] + ' · ' + V[id][1];
  $('#pl-yt').href = yt(id);
  $('#pl-f').innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${esc(V[id][0])}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  dlg.showModal();
});
function fechar() { $('#pl-f').innerHTML = ''; if (dlg.open) dlg.close(); }
$('#pl-x').addEventListener('click', fechar);
dlg.addEventListener('close', () => { $('#pl-f').innerHTML = ''; });
dlg.addEventListener('click', e => { if (e.target === dlg) fechar(); });

// ------------------------------------------------------------ catálogo (impressoras.html)
const hash = location.hash.slice(1);
if ($('#cat')) {
$('#cat').innerHTML = MODELOS.map(m => {
  const n = m.numeros;
  return `<article class="card" data-s="${m.serie}" id="m-${m.id}">
    <div class="ph"><img src="${foto(m.img)}" alt="Bambu Lab ${esc(m.nome)}" loading="lazy"><span class="lvl">${NIVEL[m.nivel]}</span></div>
    <div class="bd">
      <div><div class="sr">${SERIE[m.serie]}</div><h3>${esc(m.nome)}</h3></div>
      <p class="fr">${esc(m.frase)}</p>
      <dl class="spec">
        <div><dt>Tamanho máx.</dt><dd>${n.tamanho}</dd></div>
        <div><dt>Cores</dt><dd>${esc(m.cores)}</dd></div>
        <div><dt>Fechada</dt><dd>${n.fechada}</dd></div>
        <div><dt>Bicos</dt><dd>${n.bicos}</dd></div>
        <div><dt>Velocidade</dt><dd>${n.vel}</dd></div>
        <div><dt>Materiais</dt><dd>${esc(n.materiais.replace("*", " (com bico endurecido)"))}</dd></div>
      </dl>
      <details><summary>Para quem é, o que faz e limites</summary><div class="in">
        <div><b>Para quem:</b> ${esc(m.paraQuem)}</div>
        <div><b>O que faz</b><ul>${m.faz.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div><b>Limites</b><ul>${m.limites.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div></details>
      ${PRECO[m.id] ? `<div class="preco"><span class="ap">a partir de</span><b>${brl(PRECO[m.id])}</b><span class="cond">à vista no Pix · frete por conta do cliente</span></div>` : ''}
      <div class="act">
        <a class="btn pri sm" href="orcamento.html#${m.id}">Pedir orçamento</a>
        <a class="btn sec sm" href="suporte.html#i-${PLAT_INST[m.plat]}">Instalação</a>
      </div>
    </div>
  </article>`;
}).join('');

const sbtn = document.querySelectorAll('.series button');
function filtrar(s) {
  sbtn.forEach(b => b.setAttribute('aria-pressed', b.dataset.s === s));
  let n = 0;
  document.querySelectorAll('.card').forEach(c => { c.hidden = !!s && c.dataset.s !== s; if (!c.hidden) n++; });
  $('#filttxt').textContent = s ? `${SERIE[s]}: ${n} ${n > 1 ? 'modelos' : 'modelo'}.` : 'Mostrando as 14 impressoras, da mais simples à mais completa.';
  $('#limpar').hidden = !s;
}
sbtn.forEach(b => b.addEventListener('click', () => filtrar(b.getAttribute('aria-pressed') === 'true' ? null : b.dataset.s)));
$('#limpar').addEventListener('click', () => filtrar(null));
const sh = hash.match(/^serie-([APXH])$/);
if (sh) filtrar(sh[1]);
}

// ------------------------------------------------------------ suporte: abas (suporte.html)
if ($('#inst')) {
const tabs = [...document.querySelectorAll('[role=tab]')];
function aba(id, foco) {
  tabs.forEach(t => {
    const on = t.id === id;
    t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    if (on && foco) t.focus();
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => aba(t.id));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (d) aba(tabs[(i + d + tabs.length) % tabs.length].id, true);
  });
});

// instalação
$('#inst-chips').innerHTML = INST.map((m, i) => `<button type="button" id="ic-${m.id}" data-i="${m.id}" aria-pressed="${i === 0}">${m.nome}</button>`).join('');
function inst(id) {
  const m = INST.find(x => x.id === id) || INST[0];
  document.querySelectorAll('#inst-chips button').forEach(b => b.setAttribute('aria-pressed', b.dataset.i === m.id));
  $('#inst').innerHTML = `<article class="inst">
    <div class="side">
      <div class="ph"><img src="img/maq/${m.img}" alt="Bambu Lab ${esc(m.nome)}"></div>
      <div><h3>${m.nome}</h3><div class="vale">${m.vale}</div></div>
      <div class="nota">${m.nota}</div>
    </div>
    <div class="main">
      <div><div class="lbl">Passo a passo</div><ol class="steps">${m.passos.map(p => `<li><span>${p}</span></li>`).join('')}</ol></div>
      <div><div class="lbl">${m.v.length > 1 ? 'Vídeos' : 'Vídeo'}</div><div class="vids">${m.v.map(x => vid(x)).join('')}</div></div>
    </div></article>`;
}
$('#inst-chips').addEventListener('click', e => { const b = e.target.closest('button'); if (b) inst(b.dataset.i); });
inst('a1m');

// suporte
$('#sup').innerHTML = SUP.map(([h, p, ids]) => `<div class="grp"><h3>${h}</h3><p>${p}</p><div class="vids">${ids.map(x => vid(x)).join('')}</div></div>`).join('');

// problemas e dicas
$('#probs').innerHTML = PROBS.map(p => `<article class="prob">
  <h4>${p.t}</h4><div class="sint">${p.sint}</div>
  <div class="row c"><span class="t">Causa</span><span>${p.causa}</span></div>
  <div class="row s"><span class="t">Solução</span><ol>${p.sol.map(s => `<li>${s}</li>`).join('')}</ol></div>
  ${p.v.length ? `<div class="mini">${p.v.map(x => vid(x, true)).join('')}</div>` : ''}
</article>`).join('');
$('#bars').innerHTML = [['H2S', 3917], ['H2D', 3032], ['H2C', 532]].map(([n, g]) =>
  `<div class="bar${g < 1000 ? ' low' : ''}"><b>${n}</b><div class="tr"><div class="fi" style="width:${(g / 3917 * 100).toFixed(1)}%"></div></div><span>${g.toLocaleString('pt-BR')} g</span></div>`).join('');
$('#how').innerHTML = HOW.map(([k, h, p, path]) => `<li><span class="k">${k}</span><div><h5>${h}</h5><p>${p}</p><span class="path">${path}</span></div></li>`).join('');
$('#mant').innerHTML = MANT.map(([q, o, p]) => `<tr><td class="q">${q}</td><td>${o}</td><td class="m">${p}</td></tr>`).join('');
$('#v-mant').innerHTML = ['1YJogyVEcbw', '250pS8nytxE', 'c7cOajLTJJQ', 'uHTblaOWorE'].map(x => vid(x)).join('');

// abre a aba certa pelo endereço: #instalacao, #ajuda, #problemas ou #i-<modelo>
const H = { instalacao: 't-inst', ajuda: 't-sup', problemas: 't-prob' };
if (H[hash]) aba(H[hash]);
if (hash.startsWith('i-')) { aba('t-inst'); inst(hash.slice(2)); }
}

// ------------------------------------------------------------ orçamento (orcamento.html)
if ($('#form')) {
$('#o-modelo').innerHTML = '<option value="">Ainda não sei, quero ajuda para escolher</option>' +
  MODELOS.map(m => `<option value="${m.id}">${m.nome}</option>`).join('');
const enviar = $('#enviar');
function mensagem() {
  const g = id => $('#' + id).value.trim();
  const m = MODELOS.find(x => x.id === g('o-modelo'));
  const linhas = [
    'Olá, PRIME 3D! Vim pelo site e quero um orçamento.',
    'Nome: ' + (g('o-nome') || '-'),
    g('o-cidade') && 'Cidade: ' + g('o-cidade'),
    'Impressora: ' + (m ? 'Bambu Lab ' + m.nome : 'quero ajuda para escolher'),
    m && PRECO[m.id] && 'Preço visto no site: a partir de ' + brl(PRECO[m.id]) + ' à vista no Pix (sem frete)',
    'Quantidade: ' + (g('o-qtd') || '1'),
    'Uso: ' + g('o-uso'),
    g('o-msg') && 'Mensagem: ' + g('o-msg'),
  ].filter(Boolean);
  return linhas.join('\n');
}
function atualiza() { enviar.href = `https://wa.me/${ZAP}?text=${encodeURIComponent(mensagem())}`; }
$('#form').addEventListener('input', () => { atualiza(); if ($('#o-nome').value.trim()) $('#e-nome').hidden = true; });
$('#form').addEventListener('submit', e => e.preventDefault());
enviar.addEventListener('click', e => {
  if (!$('#o-nome').value.trim()) { e.preventDefault(); $('#e-nome').hidden = false; $('#o-nome').focus(); }
});
if (MODELOS.some(m => m.id === hash)) $('#o-modelo').value = hash;
atualiza();
}

// links diretos com mensagem padrão
const padrao = encodeURIComponent('Olá, PRIME 3D! Vim pelo site e quero saber mais sobre as impressoras.');
document.querySelectorAll('a.zaplink').forEach(a => { a.href = `https://wa.me/${ZAP}?text=${padrao}`; });
