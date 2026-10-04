// Base de dados das 14 impressoras do portfólio PRIME 3D (Bambu Lab), usada pelos dois PDFs:
//   guia.html   -> "Guia para entender as diferenças" (linguagem simples)
//   fichas.html -> "Fichas técnicas completas"
// Fonte principal: páginas oficiais de especificações e lojas da Bambu Lab (consultadas em 04/10/2026).
// Dados de revendedores só entram onde o fabricante não informa, e são marcados com "(rev.)".

const CONSULTA = '04/10/2026';

// ---------------------------------------------------------------------------------------------
// Plataformas (o "motor" de cada impressora). Os modelos Combo usam a mesma plataforma + sistema multicor.
// ---------------------------------------------------------------------------------------------
const PLAT = {};

PLAT.a1m = {
  fonte: 'bambulab.com/en/a1-mini/tech-specs',
  secoes: [
    ['Corpo', [
      ['Tecnologia', 'FDM – fabricação por filamento fundido'],
      ['Volume de impressão', '180 × 180 × 180 mm'],
      ['Arquitetura', 'Aberta; mesa que se move para frente e para trás (eixo Y, "bed slinger")'],
      ['Chassi', 'Aço + alumínio extrudado'],
    ]],
    ['Cabeçote (toolhead)', [
      ['Hotend', 'All-metal (todo em metal)'],
      ['Engrenagens da extrusora', 'Aço endurecido'],
      ['Bico', 'Aço inox'],
      ['Temperatura máx. do bico', '300 °C'],
      ['Bico incluso', '0,4 mm'],
      ['Bicos opcionais', '0,2 · 0,6 · 0,8 mm'],
      ['Cortador de filamento', 'Sim'],
      ['Diâmetro do filamento', '1,75 mm'],
    ]],
    ['Mesa (heatbed)', [
      ['Placas compatíveis', 'Textured PEI, Smooth PEI, Dual-Texture PEI'],
      ['Temperatura máx. da mesa', '80 °C'],
      ['Nivelamento', 'Automático'],
    ]],
    ['Velocidade', [
      ['Velocidade máx. do cabeçote', '500 mm/s'],
      ['Aceleração máx.', '10.000 mm/s²'],
      ['Vazão máx. do hotend', '28 mm³/s (ABS a 280 °C; parede única de 150 × 150 mm)'],
    ]],
    ['Refrigeração', [
      ['Ventoinha da peça', 'Controle em malha fechada'],
      ['Ventoinha do hotend', 'Controle em malha fechada'],
      ['Ventoinha da placa de controle', 'Controle em malha fechada'],
    ]],
    ['Filamentos', [
      ['Ideais', 'PLA, PETG, TPU, PVA'],
      ['Não recomendados', 'ABS, ASA, PC, PA (nylon), PET e compostos com fibra de carbono/vidro'],
    ]],
    ['Sensores e câmera', [
      ['Câmera', 'Baixa taxa de quadros, até 1080p; timelapse'],
      ['Fim de filamento', 'Sim'],
      ['Odometria do filamento', 'Sim'],
      ['Filamento emaranhado', 'Sim'],
      ['Retomada após queda de energia', 'Sim'],
    ]],
    ['Elétrica', [
      ['Tensão', '100–240 V CA, 50/60 Hz (bivolt automático)'],
      ['Potência máxima', '150 W'],
    ]],
    ['Eletrônica', [
      ['Tela', '2,4" IPS sensível ao toque, 320 × 240'],
      ['Conectividade', 'Wi-Fi 2,4 GHz (802.11 b/g/n), Bambu-Bus'],
      ['Armazenamento', 'Cartão microSD'],
      ['Controle', 'Tela, aplicativo (Bambu Handy) e computador'],
      ['Controlador de movimento', 'Cortex-M4 dual-core'],
    ]],
    ['Software', [
      ['Fatiador', 'Bambu Studio; aceita OrcaSlicer, PrusaSlicer, Cura etc. (G-code), sem alguns recursos avançados'],
      ['Sistemas', 'Windows e macOS'],
    ]],
    ['Dimensões', [
      ['Medidas (L × P × A)', '347 × 315 × 365 mm'],
      ['Peso líquido', '5,5 kg'],
    ]],
    ['Recursos e automação', [
      ['Calibração', 'Totalmente automática: nivelamento, compensação de vibração e de fluxo'],
      ['Ruído', 'Cancelamento ativo de ruído dos motores; < 48 dB no modo silencioso (rev.)'],
      ['Montagem', 'Chega praticamente montada; pronta em cerca de 20 minutos'],
    ]],
  ],
};

PLAT.a1 = {
  fonte: 'bambulab.com/en/a1/tech-specs',
  secoes: [
    ['Corpo', [
      ['Tecnologia', 'FDM – fabricação por filamento fundido'],
      ['Volume de impressão', '256 × 256 × 256 mm'],
      ['Arquitetura', 'Aberta; mesa que se move para frente e para trás (eixo Y, "bed slinger")'],
      ['Chassi', 'Aço + alumínio extrudado'],
    ]],
    ['Cabeçote (toolhead)', [
      ['Hotend', 'All-metal (todo em metal)'],
      ['Engrenagens da extrusora', 'Aço endurecido'],
      ['Bico', 'Aço inox'],
      ['Temperatura máx. do bico', '300 °C'],
      ['Bico incluso', '0,4 mm'],
      ['Bicos opcionais', '0,2 · 0,6 · 0,8 mm'],
      ['Cortador de filamento', 'Sim'],
      ['Diâmetro do filamento', '1,75 mm'],
    ]],
    ['Mesa (heatbed)', [
      ['Placas compatíveis', 'Textured PEI, Cool Plate, High Temperature Plate, Dual-Texture PEI'],
      ['Temperatura máx. da mesa', '100 °C'],
      ['Nivelamento', 'Automático'],
    ]],
    ['Velocidade', [
      ['Velocidade máx. do cabeçote', '500 mm/s'],
      ['Aceleração máx.', '10.000 mm/s²'],
      ['Vazão máx. do hotend', '28 mm³/s (ABS a 280 °C; parede única de 150 × 150 mm)'],
    ]],
    ['Refrigeração', [
      ['Ventoinha da peça', 'Controle em malha fechada'],
      ['Ventoinha do hotend', 'Controle em malha fechada'],
    ]],
    ['Filamentos', [
      ['Ideais', 'PLA, PETG, TPU, PVA'],
      ['Não recomendados', 'ABS, ASA, PC, PA (nylon), PET e compostos com fibra de carbono/vidro'],
    ]],
    ['Sensores e câmera', [
      ['Câmera', 'Baixa taxa de quadros, até 1080p; timelapse'],
      ['Fim de filamento', 'Sim'],
      ['Odometria do filamento', 'Sim'],
      ['Filamento emaranhado', 'Sim'],
      ['Retomada após queda de energia', 'Sim'],
    ]],
    ['Elétrica', [
      ['Tensão', '100–240 V CA, 50/60 Hz (bivolt automático)'],
      ['Potência máxima', '1300 W em 220 V · 350 W em 110 V'],
    ]],
    ['Eletrônica', [
      ['Tela', '3,5" IPS sensível ao toque, 320 × 240'],
      ['Conectividade', 'Wi-Fi 2,4 GHz (802.11 b/g/n), Bambu-Bus'],
      ['Armazenamento', 'Cartão microSD'],
      ['Controle', 'Tela, aplicativo (Bambu Handy) e computador'],
      ['Controlador de movimento', 'Cortex-M4 dual-core'],
    ]],
    ['Software', [
      ['Fatiador', 'Bambu Studio; aceita OrcaSlicer, PrusaSlicer, Cura etc. (G-code), sem alguns recursos avançados'],
      ['Sistemas', 'Windows e macOS'],
    ]],
    ['Dimensões', [
      ['Medidas (L × P × A)', '465 × 410 × 430 mm'],
      ['Peso líquido', '8,3 kg'],
    ]],
    ['Recursos e automação', [
      ['Calibração', 'Totalmente automática: nivelamento, compensação de vibração e de fluxo'],
      ['Ruído', 'Cancelamento ativo de ruído dos motores; < 48 dB no modo silencioso (rev.)'],
    ]],
  ],
};

const CORTE_A2L = ['Módulo de corte e desenho (opcional, vendido à parte)', [
  ['Área de corte', '300 × 300 mm'],
  ['Área de desenho (caneta)', '300 × 255 mm'],
  ['Diâmetro de caneta aceito', '10,5 – 12,5 mm'],
  ['Lâmina', '45° × 0,35 mm; pressão de 50 a 600 gf'],
  ['Espessura máx. de corte', '0,5 mm'],
  ['Base de corte', 'LightGrip e StrongGrip (detecção automática do tipo)'],
  ['Reconhecimento de lâmina e caneta', 'Sim'],
  ['Imagens aceitas', 'Bitmap e vetor'],
  ['Materiais', 'Papel, PVC, vinil adesivo, couro e outros'],
]];

PLAT.a2l = {
  fonte: 'bambulab.com/en/a2l/specs',
  secoes: [
    ['Corpo', [
      ['Tecnologia', 'FDM – fabricação por filamento fundido'],
      ['Volume de impressão', '330 × 320 × 325 mm (105% mais espaço que a classe de 256 mm)'],
      ['Arquitetura', 'Aberta; mesa que se move no eixo Y ("bed slinger")'],
      ['Chassi / carcaça', 'Alumínio e aço / plástico'],
    ]],
    ['Cabeçote (toolhead)', [
      ['Motor da extrusora', 'Servo (detecta entupimento e moagem do filamento)'],
      ['Engrenagens da extrusora', 'Aço endurecido'],
      ['Bico', 'Aço inox (para fibras, trocar por bico de aço endurecido)'],
      ['Temperatura máx. do bico', '300 °C'],
      ['Bicos aceitos', '0,2 · 0,4 · 0,6 · 0,8 mm'],
      ['Cortador de filamento', 'Integrado'],
      ['Diâmetro do filamento', '1,75 mm'],
    ]],
    ['Mesa (heatbed)', [
      ['Material da placa', 'Aço flexível'],
      ['Placa inclusa', 'Textured PEI'],
      ['Placas compatíveis', 'Textured PEI, Engineering Plate, Cool Plate SuperTack'],
      ['Temperatura máx. da mesa', '80 °C'],
    ]],
    ['Velocidade', [
      ['Velocidade máx. do cabeçote', '500 mm/s'],
      ['Aceleração máx.', '10.000 mm/s²'],
      ['Vazão máx. do hotend', '28 mm³/s (PLA Basic a 220 °C; modelo redondo de 150 mm, parede única)'],
    ]],
    ['Refrigeração', [
      ['Ventoinha da peça', 'Controle em malha fechada'],
      ['Ventoinha do hotend', 'Controle em malha fechada'],
    ]],
    ['Filamentos', [
      ['Adequados', 'PLA, PETG, TPU, PVA'],
      ['Com bico de aço endurecido', 'PLA-CF, PETG-CF (com fibra de carbono)'],
    ]],
    ['Sensores e câmera', [
      ['Câmera', 'Baixa taxa de quadros, até 1080p; timelapse'],
      ['Fim de filamento', 'Sim'],
      ['Filamento emaranhado', 'Sim'],
      ['Odometria do filamento', 'Sim'],
      ['Retomada após queda de energia', 'Sim'],
      ['Detecção de bolota no bico (clumping)', 'Sim'],
    ]],
    ['Elétrica', [
      ['Tensão', 'Versão 220 V: 200–240 V CA · Versão 110 V: 100–120 V CA (50/60 Hz)'],
      ['Potência máxima', '1000 W (por cerca de 3 min, ao aquecer a mesa)'],
      ['Ambiente de uso', '15 – 30 °C'],
    ]],
    ['Eletrônica', [
      ['Tela', '3,5" sensível ao toque, 240 × 320'],
      ['Armazenamento', 'Cartão microSD de 32 GB'],
      ['Controle', 'Tela, aplicativo e computador'],
      ['Controladores de movimento', 'Cortex-M4 + Cortex-M7 (um núcleo cada)'],
      ['Rede', 'Wi-Fi 2,4 GHz (802.11 b/g/n), Bambu-Bus; sem Ethernet'],
    ]],
    ['Software', [
      ['Fatiador', 'Bambu Studio; aceita outros fatiadores (G-code), sem alguns recursos avançados'],
      ['Sistemas', 'Windows, macOS e Linux'],
      ['Privacidade', 'Nuvem Bambu ou modo somente rede local (LAN)'],
    ]],
    ['Dimensões', [
      ['Medidas (L × P × A)', '544 × 529 × 505 mm'],
      ['Peso líquido', '12,8 kg'],
    ]],
    ['Recursos e automação', [
      ['Estabilidade', 'Compensação adaptativa de vibração (recalculada camada a camada) + 2 amortecedores granulares no pórtico'],
      ['Calibração de fluxo', 'Automática antes de cada impressão (compensa bico gasto e filamento úmido)'],
      ['Ruído', '49 dB no modo silencioso (a 1 m)'],
      ['Qualidade do ar', 'Certificada UL 2904 (GREENGUARD) com filamentos oficiais PLA e PETG'],
      ['Módulo de corte e caneta', 'Opcional, vendido à parte: corta vinil, papel, PVC e couro até 0,5 mm (área 300 × 300 mm) — especificações no Apêndice A2'],
    ]],
  ],
};

PLAT.p1s = {
  fonte: 'us.store.bambulab.com/products/p1s · ficha técnica oficial da série P1 · wiki.bambulab.com',
  secoes: [
    ['Corpo', [
      ['Tecnologia', 'FDM – fabricação por filamento fundido'],
      ['Volume de impressão', '256 × 256 × 256 mm (o Bambu Studio limita a 250 mm de altura por padrão)'],
      ['Arquitetura', 'CoreXY fechada: a mesa só sobe e desce, o cabeçote corre em X e Y'],
      ['Carcaça', 'Fechada, plástico e vidro'],
    ]],
    ['Cabeçote (toolhead)', [
      ['Hotend', 'All-metal'],
      ['Bico', 'Aço inox, 0,4 mm incluso'],
      ['Bicos opcionais', '0,2 · 0,6 · 0,8 mm'],
      ['Temperatura máx. do bico', '300 °C'],
      ['Cortador de filamento', 'Sim'],
      ['Diâmetro do filamento', '1,75 mm'],
    ]],
    ['Mesa (heatbed)', [
      ['Placas compatíveis', 'Textured PEI, Cool Plate, Engineering Plate, High Temperature Plate'],
      ['Temperatura máx. da mesa', '100 °C'],
    ]],
    ['Velocidade', [
      ['Velocidade máx. do cabeçote', '500 mm/s'],
      ['Aceleração máx.', '20.000 mm/s²'],
      ['Vazão máx. do hotend', '32 mm³/s (ABS a 280 °C; parede única de 150 × 150 mm)'],
    ]],
    ['Refrigeração e filtragem', [
      ['Ventoinhas', 'Peça, hotend, auxiliar da peça, regulador de temperatura da câmara e placa de controle — todas em malha fechada'],
      ['Filtro de ar', 'Carvão ativado'],
      ['Aquecimento da câmara', 'Passivo (sem aquecedor; o calor da mesa aquece o interior)'],
    ]],
    ['Filamentos', [
      ['Ideais', 'PLA, PETG, TPU, PVA, PET, ABS, ASA'],
      ['Capaz', 'PA (nylon), PC'],
      ['Fibra de carbono/vidro', 'Não recomendado sem trocar extrusora e hotend por versões de aço endurecido'],
    ]],
    ['Sensores e câmera', [
      ['Câmera', '1280 × 720 a 0,5 quadro/s; timelapse'],
      ['Fim de filamento', 'Sim'],
      ['Odometria do filamento', 'Com AMS'],
      ['Retomada após queda de energia', 'Sim'],
    ]],
    ['Elétrica', [
      ['Tensão', '100–240 V CA, 50/60 Hz (bivolt automático)'],
      ['Potência máxima', '1000 W em 220 V · 350 W em 110 V'],
    ]],
    ['Eletrônica', [
      ['Tela', '2,7" monocromática 192 × 64, com botões (não é sensível ao toque)'],
      ['Conectividade', 'Wi-Fi, Bluetooth, Bambu-Bus'],
      ['Armazenamento', 'Cartão microSD'],
      ['Controle', 'Botões, aplicativo e computador'],
      ['Controlador de movimento', 'Cortex-M4 dual-core'],
    ]],
    ['Software', [
      ['Fatiador', 'Bambu Studio; aceita outros fatiadores (G-code), sem alguns recursos avançados'],
      ['Sistemas', 'Windows e macOS'],
    ]],
    ['Dimensões', [
      ['Medidas (L × P × A)', '389 × 389 × 458 mm'],
      ['Peso líquido', '12,95 kg'],
    ]],
  ],
};

PLAT.p2s = {
  fonte: 'bambulab.com/en/p2s/specs · bambulab.com/en/p2s',
  secoes: [
    ['Corpo', [
      ['Tecnologia', 'FDM – fabricação por filamento fundido'],
      ['Volume de impressão', '256 × 256 × 256 mm'],
      ['Arquitetura', 'CoreXY fechada'],
      ['Chassi / carcaça', 'Plástico e aço / plástico e vidro (vidro frontal com película anti-estilhaço)'],
    ]],
    ['Cabeçote (toolhead)', [
      ['Motor da extrusora', 'Servo PMSM de alta precisão (até 8,5 kg de força, 70% a mais que a geração anterior; mede resistência e posição 20 mil vezes por segundo)'],
      ['Engrenagens da extrusora', 'Aço endurecido'],
      ['Bico', 'Aço endurecido (pronto para fibras)'],
      ['Temperatura máx. do bico', '300 °C'],
      ['Bico incluso / aceitos', '0,4 mm / 0,2 · 0,4 · 0,6 · 0,8 mm'],
      ['Troca do hotend', 'Rápida, com uma trava, sem desconectar fios (~30 s)'],
      ['Cortador de filamento', 'Integrado'],
      ['Diâmetro do filamento', '1,75 mm'],
    ]],
    ['Mesa (heatbed)', [
      ['Material da placa', 'Aço flexível'],
      ['Placa inclusa', 'Textured PEI'],
      ['Placas compatíveis', 'Textured PEI, Smooth PEI, Cool Plate SuperTack'],
      ['Temperatura máx. da mesa', '110 °C'],
    ]],
    ['Velocidade', [
      ['Velocidade máx. do cabeçote', '600 mm/s'],
      ['Aceleração máx.', '20.000 mm/s²'],
      ['Vazão máx. do hotend', '40 mm³/s (ABS a 280 °C; modelo redondo de 250 mm, parede única)'],
    ]],
    ['Refrigeração e filtragem', [
      ['Ventoinhas', 'Peça, hotend e auxiliar da peça — em malha fechada'],
      ['Sistema de ar adaptativo', 'Puxa ar frio de fora (PLA com porta fechada) ou fecha as abas para reter calor (câmara até ~50 °C para filamentos de engenharia)'],
      ['Filtro', 'Carvão ativado (VOC e partículas)'],
    ]],
    ['Filamentos', [
      ['Suportados', 'PLA, PETG, ABS, ASA, TPU, PET, PA, PC, PVA, suportes solúveis/destacáveis (PLA, PLA/PETG, ABS)'],
      ['Com fibra', 'PLA-CF, PETG-CF, ABS-GF, ASA-CF, PA6-CF, PA6-GF, PAHT-CF, PPA-CF, PET-CF'],
    ]],
    ['Sensores, câmera e IA', [
      ['Câmera', '1920 × 1080 a 30 quadros/s, com iluminação de "palco"'],
      ['IA', 'NPU de 2 TOPS: detecta espaguete, bolota no bico, entupimento da calha de purga e confere a configuração antes de imprimir'],
      ['Sensor de fluxo', 'Sensor de corrente parasita (eddy current) para calibração automática de fluxo'],
      ['Outros', 'Porta, fim de filamento, emaranhado, odometria (com AMS), retomada após queda de energia'],
    ]],
    ['Elétrica', [
      ['Tensão', 'Versões 100–120 V ou 200–240 V CA, 50/60 Hz'],
      ['Potência máxima', '1200 W em 220 V · 1000 W em 110 V (3–5 min ao aquecer a mesa)'],
      ['Consumo típico com PLA', '200 W'],
      ['Ambiente de uso', '10 – 30 °C'],
    ]],
    ['Eletrônica', [
      ['Tela', '5" sensível ao toque, 854 × 480, interface de 2ª geração'],
      ['Armazenamento', '8 GB eMMC interno + porta USB'],
      ['Processadores', 'Movimento: Cortex-M4 dual-core + Cortex-M7 · Aplicação: ARM A7 quad-core 1,5 GHz · NPU 2 TOPS'],
      ['Rede', 'Wi-Fi dual-band 2,4/5 GHz (802.11 a/b/g/n); sem Ethernet'],
    ]],
    ['Software', [
      ['Fatiador', 'Bambu Studio; aceita outros fatiadores (G-code), sem alguns recursos avançados'],
      ['Sistemas', 'Windows, macOS e Linux'],
    ]],
    ['Dimensões', [
      ['Medidas (L × P × A)', '392 × 406 × 478 mm'],
      ['Peso líquido', '14,9 kg'],
      ['Detalhes', 'Alças de transporte integradas; base plana fácil de limpar; buffer 2-em-1 (no Combo) para alternar entre AMS e rolo externo'],
    ]],
  ],
};

const AR_H = ['Câmara e filtragem', [
  ['Aquecimento ativo da câmara', 'Sim, até 65 °C'],
  ['Filtragem em 3 estágios', 'Pré-filtro G3 + filtro HEPA H12 + carvão ativado granulado de casca de coco'],
  ['Filtragem de VOC / partículas', 'Sim / sim'],
]];

PLAT.x2d = {
  fonte: 'bambulab.com/en/x2d/specs · bambulab.com/en/x2d',
  secoes: [
    ['Corpo', [
      ['Tecnologia', 'FDM – fabricação por filamento fundido'],
      ['Volume (bico principal)', '256 × 256 × 260 mm'],
      ['Volume (bico auxiliar / dois bicos)', '235,5 × 256 × 256 mm'],
      ['Arquitetura', 'CoreXY fechada, bico duplo'],
      ['Chassi / carcaça', 'Plástico e aço / plástico, vidro e metal'],
    ]],
    ['Cabeçote (toolhead)', [
      ['Extrusora principal', 'Servo PMSM de alta precisão, engrenagem de aço endurecido'],
      ['Extrusora auxiliar', 'Motor de passo, engrenagem de aço endurecido'],
      ['Troca entre bicos', 'Mecânica (engrenagem + gatilho), sem motor extra; testada em mais de 1 milhão de trocas'],
      ['Bicos', 'Aço endurecido; 0,4 mm incluso; 0,2 · 0,4 · 0,6 · 0,8 mm; troca sem ferramentas'],
      ['Temperatura máx. do bico', '300 °C'],
      ['Cortador de filamento', 'Integrado'],
      ['Diâmetro do filamento', '1,75 mm'],
    ]],
    ['Mesa (heatbed)', [
      ['Placas compatíveis', 'Textured PEI, Smooth PEI, Cool Plate SuperTack, Engineering Plate'],
      ['Temperatura máx. da mesa', '120 °C'],
    ]],
    ['Velocidade', [
      ['Velocidade máx. do cabeçote', '1000 mm/s'],
      ['Aceleração máx.', '20.000 mm/s²'],
      ['Vazão máx. do hotend', '40 mm³/s padrão · 65 mm³/s com hotend de alto fluxo opcional (ABS a 280 °C)'],
    ]],
    AR_H,
    ['Refrigeração', [
      ['Ventoinhas', 'Peça, hotend, placa principal, exaustão da câmara, circulação de calor e auxiliar da peça — em malha fechada'],
      ['Entrada de ar', 'Dupla (esquerda e direita) para resfriar PLA rápido e manter balanços e pontes limpos'],
    ]],
    ['Filamentos', [
      ['Bico principal', 'PLA, PETG, ABS, ASA, TPU, PET, PA, PC, PVA, suportes (PLA, PLA/PETG, ABS, PA/PET) e versões com fibra de carbono/vidro de PLA, PETG, ABS, ASA, PA6, PAHT, PPA, PET'],
      ['Bico auxiliar', 'Quase os mesmos (exceto PLA Aero e PPA); PLA Silk, PETG-CF, ASA-CF, PA6-CF e TPU com cautela'],
    ]],
    ['Sensores, câmeras e IA', [
      ['Câmera ao vivo', '1920 × 1080'],
      ['Câmera do cabeçote', '1600 × 1200'],
      ['IA', 'Confere a mesa antes de imprimir; detecta espaguete, bolota no bico e entupimento da calha de purga'],
      ['Sensores', '31 no total: porta, fim de filamento, emaranhado, odometria (com AMS), 10 de temperatura, fluxo de ar, retomada após queda de energia'],
    ]],
    ['Elétrica', [
      ['Tensão', 'Versão 220 V: 200–240 V CA · versão 110 V: 100–120 V CA (50/60 Hz)'],
      ['Potência máxima', '1600 W em 220 V · 1100 W em 110 V'],
      ['Consumo em regime', 'PLA: 250 W · PC: 550 W'],
      ['Ambiente de uso', '10 – 30 °C'],
    ]],
    ['Eletrônica', [
      ['Tela', '5" sensível ao toque, 1280 × 720'],
      ['Armazenamento', '8 GB eMMC interno + porta USB'],
      ['Processadores', 'Movimento: Cortex-M4 dual-core + Cortex-M7 · Aplicação: ARM quad-core com NPU dedicada'],
      ['Rede', 'Wi-Fi dual-band 2,4/5 GHz (802.11 a/b/g/n); sem Ethernet'],
    ]],
    ['Software', [
      ['Fatiador', 'Bambu Studio; aceita outros fatiadores (G-code), sem alguns recursos avançados'],
      ['Sistemas', 'Windows, macOS e Linux'],
    ]],
    ['Dimensões', [
      ['Medidas (L × P × A)', '392 × 406 × 478 mm'],
      ['Peso líquido', '16,25 kg'],
    ]],
    ['Recursos e automação', [
      ['Precisão', 'Vision Encoder: precisão de 50 µm em todo o volume, compensando desgaste'],
      ['Encaixe de peças', 'Compensação automática de furos e contornos (Bambu Studio)'],
      ['Ruído', '< 50 dB no modo silencioso'],
      ['Qualidade do ar', 'Certificada UL 2904 com PLA Basic e PETG Basic'],
    ]],
  ],
};

const H_COMUM = (o) => [
  ['Corpo', [
    ['Tecnologia', 'FDM – fabricação por filamento fundido'],
    ...o.volume,
    ['Arquitetura', o.arq],
    ['Chassi / carcaça', 'Alumínio, aço, plástico e vidro'],
  ]],
  ['Cabeçote (toolhead)', o.cabecote],
  ['Mesa (heatbed)', o.mesa],
  ['Velocidade', [
    ['Velocidade máx. do cabeçote', '1000 mm/s'],
    ['Aceleração máx.', '20.000 mm/s²'],
    ['Vazão máx. do hotend', o.vazao],
  ]],
  AR_H,
  ['Refrigeração', [
    ['Ventoinhas', o.vent],
  ]],
  ['Filamentos', [
    ['Suportados', 'PLA, PETG, TPU, PVA, BVOH, ABS, ASA, PC, PA, PET, PPS'],
    ['Com fibra de carbono/vidro', 'PLA, PETG, PA, PET, PC, ABS, ASA, PPA, PPS'],
  ]],
  ['Sensores e câmeras', o.sensores],
  ['Elétrica', o.eletrica],
  ['Eletrônica', [
    ['Tela', '5" sensível ao toque, 720 × 1280'],
    ['Armazenamento', '8 GB eMMC interno + porta USB'],
    ['Processamento', o.proc],
    ['Rede', 'Wi-Fi dual-band 2,4/5 GHz (802.11 a/b/g/n)'],
  ]],
  ['Software', [
    ['Fatiador', 'Bambu Studio (e Bambu Suite para laser/corte); aceita fatiadores de terceiros (G-code), com recursos avançados limitados'],
    ['Sistemas', o.so],
  ]],
  ['Dimensões', [
    ['Medidas (L × P × A)', '492 × 514 × 626 mm'],
    ['Peso líquido', o.peso],
  ]],
];

const CAB_H = (extra = []) => [
  ['Hotend', 'All-metal'],
  ['Engrenagens da extrusora', 'Aço endurecido'],
  ['Motor da extrusora', 'Servo PMSM de alta precisão'],
  ['Bico', 'Aço endurecido'],
  ['Temperatura máx. do bico', '350 °C'],
  ['Bicos aceitos', '0,2 · 0,4 · 0,6 · 0,8 mm (0,4 mm incluso)'],
  ['Cortador de filamento', 'Integrado'],
  ['Diâmetro do filamento', '1,75 mm'],
  ...extra,
];
const VAZAO_H = '40 mm³/s padrão · 65 mm³/s com hotend de alto fluxo opcional (ABS a 280 °C)';
const VENT_H = 'Peça, auxiliar da peça, circulação de calor da câmara, hotend, placa principal e exaustão — todas em malha fechada';

PLAT.h2s = {
  fonte: 'bambulab.com/en/h2s/tech-specs',
  secoes: H_COMUM({
    volume: [['Volume de impressão', '340 × 320 × 340 mm (o maior de bico único da Bambu Lab)']],
    arq: 'CoreXY fechada, bico único',
    cabecote: CAB_H(),
    mesa: [['Placas compatíveis', 'Textured PEI, Smooth PEI'], ['Temperatura máx. da mesa', '120 °C']],
    vazao: VAZAO_H, vent: VENT_H,
    sensores: [
      ['Câmera ao vivo', '1920 × 1080'], ['Câmera do cabeçote', '1600 × 1200'],
      ['Outros', 'Porta, fim de filamento, emaranhado, odometria (com AMS), retomada após queda de energia'],
    ],
    eletrica: [['Tensão', 'Versões 100–120 V ou 200–240 V CA, 50/60 Hz'], ['Potência máxima', '2050 W em 220 V · 1170 W em 110 V (≈ 3 min ao aquecer a mesa)'], ['Ambiente de uso', '10 – 30 °C']],
    proc: 'NPU de 2 TOPS para detecção de falhas por IA', so: 'Windows, macOS e Linux', peso: '30 kg',
  }).concat([['Expansão', [
    ['Laser e corte', 'Aceita o kit de upgrade laser (10 W) e o módulo de corte; já sai de fábrica preparada'],
  ]]]),
};

const SENS_H2D = (laser) => [
  ['Câmera ao vivo', '1920 × 1080'], ['Câmera do bico', '1920 × 1080 (com IA)'], ['Câmera do cabeçote', '1920 × 1080'],
  ...(laser ? [['Câmera BirdsEye (vista de cima)', '3264 × 2448 — posiciona o laser e o corte pela imagem']] : []),
  ['Outros', 'Porta, fim de filamento, emaranhado, odometria (com AMS), retomada após queda de energia'],
];
const H2D_OPTS = (laser) => ({
  volume: [['Volume com um bico', '325 × 320 × 325 mm'], ['Volume com dois bicos juntos', '300 × 320 × 320 mm'], ['Volume total dos dois bicos', '350 × 320 × 320 mm']],
  arq: 'CoreXY fechada, bico duplo (dois hotends idênticos e intercambiáveis)',
  cabecote: CAB_H(),
  mesa: [['Placas compatíveis', 'Textured PEI, Smooth PEI'], ['Temperatura máx. da mesa', '120 °C']],
  vazao: VAZAO_H, vent: VENT_H, sensores: SENS_H2D(laser),
  eletrica: [['Tensão', 'Versões 100–120 V ou 200–240 V CA, 50/60 Hz'], ['Potência máxima', '2200 W em 220 V · 1320 W em 110 V (até 3 min ao aquecer a mesa)'], ['Ambiente de uso', '10 – 30 °C']],
  proc: 'NPU de 2 TOPS para detecção de falhas por IA', so: 'Windows e macOS', peso: '31 kg',
});

PLAT.h2d = { fonte: 'bambulab.com/en/h2d/tech-specs · us.store.bambulab.com/products/h2d', secoes: H_COMUM(H2D_OPTS(false)).concat([['Expansão', [
  ['Laser e corte', 'Aceita o kit de upgrade laser (bomba de ar externa) e o módulo de corte; após o upgrade, funciona igual à Laser Edition'],
  ['AMS suportados', 'Até 4 AMS 2 Pro + 8 AMS HT (12 unidades, 24 posições); AMS 1ª geração funciona (sem secagem); AMS lite não é compatível'],
]]]) };

const LASER = (w) => ['Módulo laser ' + w + ' W', [
  ['Tipo', 'Laser semicondutor (diodo), luz azul 455 nm ± 5 nm'],
  ['Laser de medição de altura', 'Infravermelho 850 nm ± 5 nm (Micro Lidar)'],
  ['Potência', w === 10 ? '10 W ± 1 W' : '40 W ± 2 W'],
  ['Tamanho do ponto do laser', w === 10 ? '0,03 × 0,14 mm (mais fino: melhor para detalhes)' : '0,14 × 0,20 mm'],
  ['Velocidade máx. de gravação', w === 10 ? '400 mm/s' : '1000 mm/s'],
  ['Espessura máx. de corte', w === 10 ? '5 mm (compensado de basswood)' : '15 mm (compensado de basswood)'],
  ['Área de trabalho', w === 10 ? '310 × 270 mm; altura máx. da peça 280 mm' : '310 × 250 mm; altura máx. da peça 265 mm'],
  ['Posicionamento', 'Visual (câmera BirdsEye), precisão XY < 0,3 mm; altura por Micro Lidar ± 0,1 mm'],
  ['Segurança', 'Módulo Classe 4; conjunto fechado Classe 1. Detecção de chama, de temperatura, de porta e de instalação do módulo; chave de segurança e botão de emergência'],
  ['Ar e fumaça', 'Bomba de ar assistido interna; saída para duto de ventilação de 100 mm'],
  ['Materiais', 'Madeira, borracha, chapa metálica (gravação), couro, acrílico escuro, pedra e outros'],
  ['Temperatura de trabalho', '0 – 35 °C'],
]];
const CORTE_H = ['Módulo de corte e desenho', [
  ['Área de corte', '300 × 285 mm'],
  ['Área de desenho (caneta)', '300 × 255 mm'],
  ['Diâmetro de caneta aceito', '10,5 – 12,5 mm'],
  ['Lâmina', '45° × 0,35 mm; pressão de 50 a 600 gf'],
  ['Espessura máx. de corte', '0,5 mm'],
  ['Base de corte', 'LightGrip e StrongGrip (detecção automática do tipo)'],
  ['Imagens aceitas', 'Bitmap e vetor'],
  ['Materiais', 'Papel, vinil, couro e outros'],
]];
PLAT.h2dl10 = { fonte: 'bambulab.com/en/h2d/tech-specs · us.store.bambulab.com/products/h2d', secoes: H_COMUM(H2D_OPTS(true)).concat([LASER(10), CORTE_H]) };
PLAT.h2dl40 = { fonte: 'bambulab.com/en/h2d/tech-specs · us.store.bambulab.com/products/h2d', secoes: H_COMUM(H2D_OPTS(true)).concat([LASER(40), CORTE_H]) };

PLAT.h2c = {
  fonte: 'bambulab.com/en/h2c/specs · bambulab.com/en/h2c · us.store.bambulab.com/products/h2c',
  secoes: H_COMUM({
    volume: [['Volume com bico esquerdo', '325 × 320 × 320 mm'], ['Volume com bico direito', '305 × 320 × 325 mm'], ['Volume com dois bicos juntos', '300 × 320 × 320 mm'], ['Volume total', '330 × 320 × 320 mm']],
    arq: 'CoreXY fechada, sistema Vortek de troca automática de hotends',
    cabecote: CAB_H([
      ['Sistema Vortek', 'Lado direito troca sozinho entre até 6 hotends de indução guardados na máquina; lado esquerdo com bico fixo (7º bico)'],
      ['Aquecimento por indução', 'O bico aquece em cerca de 8 s (PLA); sem contato elétrico, mais confiável'],
      ['Força da extrusora', 'Até 10 kg (70% a mais que motor de passo); detecta entupimento e moagem a 20 kHz'],
    ]),
    mesa: [['Material da placa', 'Aço flexível'], ['Placa inclusa', 'Textured PEI'], ['Placas compatíveis', 'Textured PEI, Engineering Plate'], ['Temperatura máx. da mesa', '120 °C']],
    vazao: '40 mm³/s (ABS a 280 °C; modelo redondo de 250 mm, parede única)',
    vent: VENT_H + ' + ventoinha de reforço do cabeçote',
    sensores: [
      ['Câmera ao vivo', '1920 × 1080'], ['Câmera do bico (macro, com IA)', '1920 × 1080'], ['Câmera do cabeçote', '1600 × 1200'],
      ['IA', 'Checagem antes de imprimir (mesa e configurações); detecta espaguete, bolota e "impressão no ar"'],
      ['Outros', 'Porta, fim de filamento, emaranhado, odometria (com AMS), retomada após queda de energia; até 59 sensores na versão mais completa'],
    ],
    eletrica: [['Tensão', 'Versões 100–120 V ou 200–240 V CA, 50/60 Hz'], ['Potência máxima', '1800 W em 220 V · 1250 W em 110 V'], ['Consumo típico (PLA, um bico)', '200 W'], ['Ambiente de uso', '10 – 30 °C']],
    proc: 'Movimento: Cortex-M4 dual-core + Cortex-M7 · Aplicação: ARM quad-core com NPU', so: 'Windows, macOS e Linux', peso: '32,5 kg',
  }).concat([['Recursos e segurança', [
    ['Economia de purga (exemplos do fabricante)', 'Dinossauro 6 cores: 532 g de descarte na H2C contra 3.032 g na H2D e 3.917 g na H2S; tempo 58% contra 88% e 100%'],
    ['Precisão', 'Vision Encoder opcional: precisão de movimento < 50 µm'],
    ['Câmara', 'Construída com material antichama UL94 V-0'],
    ['Rede', 'Nuvem ou totalmente offline; modo desenvolvedor (MQTT) para integrações'],
    ['Expansão', 'Existe versão Laser Edition (laser 10/40 W + corte); o Combo comum não traz laser'],
  ]]]),
};

// ---------------------------------------------------------------------------------------------
// Sistemas multicor (AMS)
// ---------------------------------------------------------------------------------------------
const AMS = {
  lite: { nome: 'AMS lite', linhas: [
    ['Posições', '4 rolos'],
    ['Formato', 'Aberto, suporte giratório com mola (aceita bem carretéis de papelão)'],
    ['Secagem', 'Não'],
    ['Compatível com', 'Série A (A1 mini, A1, A2L). Não funciona com séries P, X1 e H'],
    ['Carretéis aceitos (rev.)', 'Largura 40–68 mm; furo central 53–58 mm'],
  ] },
  ams2pro: { nome: 'AMS 2 Pro', linhas: [
    ['Posições', '4 rolos'],
    ['Formato', 'Fechado e vedado; respiro eletromagnético que abre para secar e fecha para guardar'],
    ['Secagem', 'Ativa até 65 °C (com ambiente acima de 25 °C); gira os rolos durante a secagem; 30% mais rápida que aquecimento selado'],
    ['Motor de alimentação', 'Servo PMSM sem escovas: alimenta 60% mais rápido (economiza ~10 min a cada 100 trocas)'],
    ['RFID', 'Reconhece filamentos oficiais e ajusta cor, tipo e secagem sozinho'],
    ['Sensores', 'Temperatura e umidade em tempo real (tela, Bambu Studio e Bambu Handy)'],
    ['Medidas / peso', '372 × 280 × 226 mm; 2,5 kg; carretéis de 50 a 68 mm de largura; entrada 24 V 4 A'],
    ['Compatível com', 'Todas as impressoras Bambu Lab (algumas precisam de acessórios de ligação)'],
  ] },
  amsht: { nome: 'AMS HT', linhas: [
    ['Posições', '1 rolo'],
    ['Secagem', 'Ativa até 85 °C — para nylon, PC e filamentos com fibra'],
    ['Medidas / peso', '114 × 280 × 245 mm; 1,21 kg (rev.)'],
    ['Uso típico', 'Complementa o AMS 2 Pro nas séries H e X para materiais técnicos'],
  ] },
};

// ---------------------------------------------------------------------------------------------
// Os 14 modelos, na ordem de aprendizado: do mais simples ao mais completo
// ---------------------------------------------------------------------------------------------
const MODELOS = [
  {
    id: 'a1m', nome: 'A1 mini', serie: 'A', plat: 'a1m', img: 'img/a1m-w.jpg',
    nivel: 1, cores: '1 (até 4 com AMS lite à parte)', ams: null,
    frase: 'A menor e mais simples da linha: chega praticamente montada e imprime peças de até 18 cm.',
    paraQuem: 'Quem nunca teve impressora 3D, quem tem pouco espaço, estudantes, presentes e quem quer fazer chaveiros, brinquedos e peças pequenas.',
    faz: ['Pronta para usar em cerca de 20 minutos', 'Calibra tudo sozinha: não precisa ajustar nada à mão', 'Silenciosa e com baixo consumo (até 150 W)', 'Imprime PLA, PETG, TPU (flexível) e PVA com ótima qualidade'],
    limites: ['Peças de no máximo 18 × 18 × 18 cm', 'Estrutura aberta: não serve para ABS, ASA, nylon nem filamentos com fibra', 'Imprime em uma cor por vez (para mais cores, é preciso o AMS lite)'],
    muda: 'É o ponto de partida da linha.',
    analogia: 'É como uma impressora de papel doméstica: compacta, fácil e faz o essencial muito bem.',
    numeros: { tamanho: '18 × 18 × 18 cm', fechada: 'Não', bicos: '1', vel: '500 mm/s', materiais: 'PLA, PETG, TPU' },
  },
  {
    id: 'a1m-combo', nome: 'A1 mini Combo', serie: 'A', plat: 'a1m', img: 'img/a1m-combo-w.jpg',
    nivel: 1, cores: 'Até 4', ams: 'lite',
    frase: 'A mesma A1 mini, agora com o AMS lite: troca de cor sozinha e imprime até 4 cores na mesma peça.',
    paraQuem: 'Quem quer começar já fazendo peças coloridas: chaveiros com nome, brinquedos, plaquinhas e lembrancinhas para vender.',
    faz: ['Até 4 cores ou materiais na mesma impressão, sem pintar', 'Deixa 4 rolos prontos: quando um acaba, pode continuar com outro igual', 'Mesma facilidade e calibração automática da A1 mini'],
    limites: ['Mesmo tamanho máximo de 18 cm', 'Cada troca de cor descarta um pouco de plástico (purga) e deixa a impressão mais lenta', 'O AMS lite é aberto: não seca nem protege o filamento da umidade'],
    muda: 'Ganha o AMS lite (sistema automático de 4 cores). A impressora é a mesma.',
    analogia: 'É a A1 mini com uma "caixa de lápis de cor" ligada nela.',
    numeros: { tamanho: '18 × 18 × 18 cm', fechada: 'Não', bicos: '1', vel: '500 mm/s', materiais: 'PLA, PETG, TPU' },
  },
  {
    id: 'a1', nome: 'A1', serie: 'A', plat: 'a1', img: 'img/a1.png',
    nivel: 2, cores: '1 (até 4 com AMS lite à parte)', ams: null,
    frase: 'A "irmã maior" da A1 mini: mesma facilidade, com peças de até 25,6 cm.',
    paraQuem: 'Quem quer começar com uma impressora de tamanho padrão do mercado, para hobby sério ou primeiros produtos para vender.',
    faz: ['Volume quase 3 vezes maior que o da A1 mini', 'Mesa aquece até 100 °C (melhor aderência de peças maiores)', 'Tela de 3,5"', 'Calibração totalmente automática e baixo ruído'],
    limites: ['Estrutura aberta: continua sem ABS, ASA, nylon e fibras', 'Imprime em uma cor por vez sem o AMS lite', 'Ocupa mais espaço (46 × 41 × 43 cm)'],
    muda: 'Em relação à A1 mini: peças bem maiores (25,6 cm contra 18 cm), mesa mais quente e tela maior.',
    analogia: 'É a A1 mini em tamanho "família".',
    numeros: { tamanho: '25,6 × 25,6 × 25,6 cm', fechada: 'Não', bicos: '1', vel: '500 mm/s', materiais: 'PLA, PETG, TPU' },
  },
  {
    id: 'a1-combo', nome: 'A1 Combo', serie: 'A', plat: 'a1', img: 'img/a1-combo-w.jpg',
    nivel: 2, cores: 'Até 4', ams: 'lite',
    frase: 'A A1 com o AMS lite: tamanho padrão e até 4 cores. É o ponto de equilíbrio da linha de entrada.',
    paraQuem: 'Quem quer produzir peças coloridas de tamanho médio para vender: action figures, vasos, decoração, organizadores.',
    faz: ['Até 4 cores ou materiais na mesma peça', 'Volume de 25,6 cm', 'Troca automática de rolo e calibração automática'],
    limites: ['Purga a cada troca de cor (gasto extra de filamento e de tempo)', 'Aberta: sem ABS, ASA, nylon e fibras', 'AMS lite não seca filamento'],
    muda: 'Ganha o AMS lite. A impressora é a mesma A1.',
    analogia: 'É a A1 com a "caixa de lápis de cor".',
    numeros: { tamanho: '25,6 × 25,6 × 25,6 cm', fechada: 'Não', bicos: '1', vel: '500 mm/s', materiais: 'PLA, PETG, TPU' },
  },
  {
    id: 'a2l', nome: 'A2L', serie: 'A', plat: 'a2l', img: 'img/a2l.jpg',
    nivel: 2, cores: '1 (até 19 com AMS à parte)', ams: null,
    frase: 'A grandona para iniciantes: peças de até 33 × 32 × 32,5 cm, com a facilidade da série A.',
    paraQuem: 'Quem precisa de peças grandes sem dividir o modelo: capacetes, cosplay, maquetes, luminárias, lotes grandes de peças pequenas.',
    faz: ['105% mais volume que a classe de 25,6 cm (capacete inteiro em uma peça)', 'Extrusora servo que percebe entupimentos', 'Compensação de vibração que se reajusta a cada camada e amortecedores especiais: superfície lisa mesmo no alto', 'Recalibra o fluxo antes de cada impressão', 'Aceita módulo de corte com lâmina e caneta (vendido à parte)'],
    limites: ['Estrutura aberta e mesa até 80 °C: sem ABS, ASA e nylon', 'Ocupa bastante espaço (54 × 53 cm de base)', 'Para fibra de carbono é preciso trocar o bico por um de aço endurecido'],
    muda: 'Em relação à A1: volume bem maior, extrusora servo, mais sensores e a opção de virar plotter de corte.',
    analogia: 'É a série A em versão "tamanho GG".',
    numeros: { tamanho: '33 × 32 × 32,5 cm', fechada: 'Não', bicos: '1', vel: '500 mm/s', materiais: 'PLA, PETG, TPU, PLA-CF*' },
  },
  {
    id: 'a2l-combo', nome: 'A2L Combo', serie: 'A', plat: 'a2l', img: 'img/crop/a2l-combo.jpg',
    nivel: 3, cores: 'Até 4 (até 19 com AMS 2ª geração)', ams: 'lite',
    frase: 'A A2L com o AMS lite: peças grandes e coloridas. Também aceita o AMS de 2ª geração, chegando a 19 cores.',
    paraQuem: 'Quem quer peças grandes e coloridas para vender: placas, luminárias, decoração, brinquedos grandes.',
    faz: ['Até 4 cores com o AMS lite incluso', 'Aceita somar AMS de 2ª geração (com secagem) até 19 cores', 'Todo o tamanho e a estabilidade da A2L'],
    limites: ['Mesmos limites de material da A2L (aberta, mesa até 80 °C)', 'Purga a cada troca de cor'],
    muda: 'Ganha o AMS lite. A impressora é a mesma A2L.',
    analogia: 'É a A2L com a "caixa de lápis de cor" — e espaço para mais caixas.',
    numeros: { tamanho: '33 × 32 × 32,5 cm', fechada: 'Não', bicos: '1', vel: '500 mm/s', materiais: 'PLA, PETG, TPU, PLA-CF*' },
  },
  {
    id: 'p1s-combo', nome: 'P1S Combo', serie: 'P', plat: 'p1s', img: 'img/crop/p1s-combo.jpg',
    nivel: 3, cores: 'Até 4 (até 16 com 4 AMS)', ams: 'ams',
    frase: 'A primeira fechada da linha: uma "caixa" que protege a peça e permite imprimir ABS e ASA. Famosa pela confiabilidade.',
    paraQuem: 'Quem vai produzir com frequência (inclusive várias máquinas lado a lado) e precisa de peças mais resistentes ao calor e ao sol.',
    faz: ['Fechada, com filtro de carvão ativado contra odores', 'Imprime bem ABS e ASA (peças para carro, área externa, calor)', 'Estrutura CoreXY: a mesa só sobe e desce, o que dá mais estabilidade e o dobro de aceleração da série A', 'Vem com AMS para multicor (até 16 cores com 4 unidades)'],
    limites: ['Tela simples com botões (não é touch) e câmera de baixa resolução', 'Bico de aço inox: fibras de carbono/vidro exigem upgrade', 'Câmara não tem aquecedor próprio (nylon e PC funcionam, mas não são o ideal)'],
    muda: 'Em relação à série A: passa a ser fechada, ganha estrutura CoreXY e aceita ABS/ASA.',
    analogia: 'É o "carro popular confiável" das impressoras: simples, resistente e roda o dia inteiro.',
    numeros: { tamanho: '25,6 × 25,6 × 25,6 cm', fechada: 'Sim', bicos: '1', vel: '500 mm/s', materiais: '+ ABS, ASA' },
  },
  {
    id: 'p2s-combo', nome: 'P2S Combo', serie: 'P', plat: 'p2s', img: 'img/crop/p2s-combo.jpg',
    nivel: 3, cores: 'Até 4 (até 20 com mais AMS)', ams: 'ams2pro',
    frase: 'A evolução da P1S: tela touch de 5", inteligência artificial que vigia a impressão e AMS 2 Pro que seca o filamento.',
    paraQuem: 'Quem quer a robustez da série P com tecnologia atual: pequenas produções, fazendas de impressão, peças técnicas com fibra.',
    faz: ['Câmera Full HD e IA que pausa a impressão ao detectar falhas', 'Extrusora servo 70% mais forte, que percebe entupimentos', 'Bico e engrenagem de aço endurecido: imprime filamentos com fibra de carbono/vidro', 'Puxa ar frio de fora para PLA ou retém calor (~50 °C) para materiais técnicos', 'Troca de bico em cerca de 30 segundos', 'AMS 2 Pro: seca o filamento e guarda vedado'],
    limites: ['Volume igual ao da P1S (25,6 cm)', 'Câmara sem aquecedor ativo (retém o calor, mas não aquece sozinha como as séries X e H)', 'Bico até 300 °C'],
    muda: 'Em relação à P1S: tela touch, IA, extrusora servo, aço endurecido, 600 mm/s, AMS 2 Pro com secagem.',
    analogia: 'É o mesmo "carro confiável", agora com central multimídia, sensores e piloto automático.',
    numeros: { tamanho: '25,6 × 25,6 × 25,6 cm', fechada: 'Sim', bicos: '1', vel: '600 mm/s', materiais: '+ ABS, ASA, fibras' },
  },
  {
    id: 'x2d-combo', nome: 'X2D Combo', serie: 'X', plat: 'x2d', img: 'img/crop/x2d-combo.jpg',
    nivel: 4, cores: 'Até 4 (até 25 com mais AMS)', ams: 'ams2pro',
    frase: 'Bico duplo e câmara aquecida em tamanho compacto: um bico faz a peça e o outro faz o suporte, que sai fácil e limpo.',
    paraQuem: 'Quem busca acabamento premium, peças técnicas e combinações de materiais (rígido + flexível) sem ocupar o espaço de uma série H.',
    faz: ['Dois bicos: suporte de outro material que descola sem marcas', 'Combina materiais na mesma peça (ex.: PLA rígido + TPU flexível)', 'Trocas de cor mais rápidas e com bem menos desperdício', 'Câmara aquecida ativa a 65 °C e filtragem HEPA de 3 estágios', 'Até 1000 mm/s, 31 sensores e IA', 'Certificada para uso em casa (qualidade do ar) e < 50 dB'],
    limites: ['Volume de 25,6 cm (menor que a série H)', 'Bicos até 300 °C (a série H chega a 350 °C)', 'Bico auxiliar com algumas restrições de material'],
    muda: 'Em relação à P2S: segundo bico, câmara aquecida de verdade, filtragem HEPA, 1000 mm/s e tela de alta resolução.',
    analogia: 'É como ter duas canetas na mão: uma escreve, a outra faz o rascunho que depois se apaga.',
    numeros: { tamanho: '25,6 × 25,6 × 26 cm', fechada: 'Sim, aquecida', bicos: '2', vel: '1000 mm/s', materiais: '+ engenharia' },
  },
  {
    id: 'h2s-combo', nome: 'H2S Combo', serie: 'H', plat: 'h2s', img: 'img/crop/h2s-combo.jpg',
    nivel: 4, cores: 'Até 4 (mais com AMS adicionais)', ams: 'ams2pro',
    frase: 'A porta de entrada da série profissional H: o maior volume de bico único da marca (34 × 32 × 34 cm), bico a 350 °C e câmara aquecida.',
    paraQuem: 'Quem precisa de peças grandes e resistentes: peças funcionais, gabaritos, protótipos, produção de itens grandes.',
    faz: ['Maior volume de bico único da Bambu Lab', 'Bico até 350 °C: imprime até materiais de alta performance (PPS, PPA)', 'Câmara aquecida a 65 °C e filtragem HEPA', 'Pode receber kit laser e módulo de corte depois'],
    limites: ['Um bico só: trocar de cor gera purga (como nas séries A e P)', 'Grande e pesada (49 × 51 × 63 cm, 30 kg)', 'Consome até 2050 W no aquecimento'],
    muda: 'Em relação à X2D: volta a ter um bico só, mas ganha tamanho, 350 °C e a plataforma H, que aceita laser.',
    analogia: 'É a "picape" da linha: grande, forte e pronta para trabalho pesado.',
    numeros: { tamanho: '34 × 32 × 34 cm', fechada: 'Sim, aquecida', bicos: '1', vel: '1000 mm/s', materiais: '+ alta performance' },
  },
  {
    id: 'h2d-combo', nome: 'H2D Combo', serie: 'H', plat: 'h2d', img: 'img/crop/h2d-combo.jpg',
    nivel: 5, cores: 'Até 4 (até 25 com mais AMS)', ams: 'ams2pro',
    frase: 'A série H com bico duplo: dois bicos iguais de 350 °C, volume grande e 4 câmeras. Pode virar estação de laser.',
    paraQuem: 'Estúdios, empresas e produção profissional que combinam materiais de engenharia em peças grandes.',
    faz: ['Dois bicos idênticos de 350 °C', 'Menos desperdício nas trocas de material', 'Câmera do bico com IA, além de câmeras ao vivo e do cabeçote', 'Aceita até 4 AMS 2 Pro + 8 AMS HT (25 cores)', 'Pode receber laser e módulo de corte depois'],
    limites: ['Volume com os dois bicos juntos cai para 30 × 32 × 32 cm', 'Grande, pesada (31 kg) e consome até 2200 W', 'Não aceita o AMS lite'],
    muda: 'Em relação à H2S: ganha o segundo bico e a câmera do bico.',
    analogia: 'É a picape com cabine dupla: o mesmo trabalho pesado, com duas "equipes" ao mesmo tempo.',
    numeros: { tamanho: '35 × 32 × 32 cm (total)', fechada: 'Sim, aquecida', bicos: '2', vel: '1000 mm/s', materiais: '+ alta performance' },
  },
  {
    id: 'h2dl-10w', nome: 'H2D Laser 10W', serie: 'H', plat: 'h2dl10', img: 'img/crop/h2dl-10w.jpg',
    nivel: 5, cores: 'Até 4 (até 25 com mais AMS)', ams: 'ams2pro',
    frase: 'A H2D completa: impressora 3D de bico duplo + laser de 10 W para gravar e cortar + plotter de corte. Três máquinas em uma.',
    paraQuem: 'Quem vende personalizados: gravação em madeira, couro e metal, placas, brindes, adesivos e peças 3D, tudo no mesmo equipamento.',
    faz: ['Laser de 10 W: grava detalhes finos e corta compensado de até 5 mm', 'Plotter de corte com lâmina: vinil, adesivos, papel, couro fino', 'Câmera de 8 MP no teto posiciona o trabalho pela imagem', 'Segurança Classe 1 com a tampa fechada (janelas de proteção, detecção de chama, botão de emergência)'],
    limites: ['Corte a laser limitado a 5 mm', 'Gravação até 400 mm/s', 'Laser exige ventilação (duto de 100 mm para fora)'],
    muda: 'Em relação à H2D Combo: ganha o laser de 10 W, o módulo de corte, a câmera BirdsEye e a bomba de ar.',
    analogia: 'É uma pequena oficina de personalizados dentro de uma caixa.',
    numeros: { tamanho: '35 × 32 × 32 cm (total)', fechada: 'Sim, aquecida', bicos: '2 + laser', vel: '1000 mm/s', materiais: '+ madeira, couro, vinil' },
  },
  {
    id: 'h2dl-40w', nome: 'H2D Laser 40W', serie: 'H', plat: 'h2dl40', img: 'img/crop/h2dl-40w.jpg',
    nivel: 5, cores: 'Até 4 (até 25 com mais AMS)', ams: 'ams2pro',
    frase: 'A H2D Laser com laser de 40 W: corta até 15 mm de madeira e grava 2,5 vezes mais rápido que a de 10 W.',
    paraQuem: 'Quem faz produção de cortes e gravações em volume: MDF/compensado mais grosso, letreiros, caixas, peças maiores.',
    faz: ['Corta compensado de até 15 mm (3 vezes a de 10 W)', 'Grava a até 1000 mm/s', 'Tudo o que a H2D Laser 10W faz: impressão 3D de bico duplo + plotter de corte'],
    limites: ['Ponto do laser mais largo: para detalhes muito finos, o de 10 W é mais preciso', 'Área de laser um pouco menor (31 × 25 cm)', 'Exige ventilação para fora'],
    muda: 'Em relação à H2D Laser 10W: laser 4 vezes mais potente.',
    analogia: 'É a mesma oficina, trocando a "serra tico-tico" por uma serra de bancada.',
    numeros: { tamanho: '35 × 32 × 32 cm (total)', fechada: 'Sim, aquecida', bicos: '2 + laser', vel: '1000 mm/s', materiais: '+ madeira, couro, vinil' },
  },
  {
    id: 'h2c-combo', nome: 'H2C Combo', serie: 'H', plat: 'h2c', img: 'img/crop/h2c-combo.jpg',
    nivel: 5, cores: 'Até 7 bicos; multicor com quase nenhum desperdício', ams: 'ams2pro',
    frase: 'O topo da linha: troca de bicos automática (Vortek). Cada cor ou material pode ter o seu bico, quase sem desperdício.',
    paraQuem: 'Quem faz peças multicoloridas ou multimateriais complexas em escala e quer economizar filamento e tempo.',
    faz: ['Sistema Vortek: até 6 bicos trocados automaticamente + 1 fixo', 'Bicos aquecem por indução em cerca de 8 segundos', 'Em um exemplo do fabricante, descartou 532 g contra 3.032 g na H2D e terminou bem antes', 'Peças multimaterial em uma impressão (ex.: estrutura rígida + juntas de TPU)', 'Todos os bicos até 350 °C; câmara aquecida; câmara antichama'],
    limites: ['Para usar a troca completa de 6 bicos é preciso comprar hotends e AMS adicionais', 'O firmware ainda não mistura bicos de diâmetros diferentes na mesma impressão', 'Grande e pesada (32,5 kg)'],
    muda: 'Em relação à H2D: em vez de 2 bicos fixos, troca automaticamente entre até 7 bicos.',
    analogia: 'Em vez de lavar o pincel a cada cor, ela usa um pincel diferente para cada tinta.',
    numeros: { tamanho: '33 × 32 × 32 cm (total)', fechada: 'Sim, aquecida', bicos: 'Até 7 (Vortek)', vel: '1000 mm/s', materiais: '+ alta performance' },
  },
];

// O que vem na caixa (somente o que o fabricante detalha)
const CAIXA = {
  'p1s-combo': ['P1S, hotend inox com bico, placa, rolo de PLA (exceto versão AMS 2 Pro), ferramenta de desentupir, cabo e caixa de acessórios', 'Com AMS: AMS, 2 cortadores extras, cabos de 6 e 4 pinos, 2 rolos de amostra · Com AMS 2 Pro: AMS 2 Pro, cabo de 4 pinos, adaptador, buffer e acoplador PTFE'],
  'h2d-combo': ['Impressora H2D, placa Textured PEI, suporte de rolo, caixa de acessórios, chave de segurança e AMS 2 Pro'],
  'h2dl-10w': ['H2D Laser Edition, placa Textured PEI, suporte de rolo, caixa de acessórios, AMS 2 Pro, módulo laser 10 W, módulo de corte com porta-caneta, plataforma de laser, plataforma de corte, chave de segurança, tubo de ventilação, materiais de laser e corte e botão de emergência'],
  'h2dl-40w': ['H2D Laser Edition, placa Textured PEI, suporte de rolo, caixa de acessórios, AMS 2 Pro, módulo laser 40 W, módulo de corte com porta-caneta, plataforma de laser, plataforma de corte, chave de segurança, tubo de ventilação, materiais de laser e corte e botão de emergência'],
  'h2c-combo': ['Impressora H2C, placa, suporte de rolo, adaptador PTFE 4-em-1, caixa de acessórios e AMS 2 Pro', '8 hotends: 4 de indução de 0,4 mm (1 já instalado), 1 de indução de 0,2 mm, 1 de indução de 0,6 mm e 2 padrão de 0,4 mm em aço endurecido para o lado esquerdo (1 instalado)'],
};

const FONTES = [
  ['Especificações A1 mini', 'https://bambulab.com/en/a1-mini/tech-specs'],
  ['Especificações A1', 'https://bambulab.com/en/a1/tech-specs'],
  ['Especificações e apresentação A2L', 'https://bambulab.com/en/a2l/specs'],
  ['Loja e comparativo P1S', 'https://us.store.bambulab.com/products/p1s'],
  ['Ficha técnica oficial série P1 (PDF)', 'https://public-cdn.bambulab.com/store/bambulab-P1P-tech-specs.pdf'],
  ['Especificações e apresentação P2S', 'https://bambulab.com/en/p2s/specs'],
  ['Especificações e apresentação X2D', 'https://bambulab.com/en/x2d/specs'],
  ['Especificações H2S (inclui laser e corte)', 'https://bambulab.com/en/h2s/tech-specs'],
  ['Especificações H2D (inclui laser 10/40 W e corte)', 'https://bambulab.com/en/h2d/tech-specs'],
  ['Loja e perguntas frequentes H2D', 'https://us.store.bambulab.com/products/h2d'],
  ['Especificações e apresentação H2C', 'https://bambulab.com/en/h2c/specs'],
  ['Loja e perguntas frequentes H2C', 'https://us.store.bambulab.com/products/h2c'],
  ['AMS 2 Pro', 'https://us.store.bambulab.com/products/ams-2-pro'],
  ['AMS lite (dados de revendedor)', 'https://www.3djake.com/bambu-lab/ams-lite'],
  ['AMS HT (dados de revendedor)', 'https://www.3djake.com/bambu-lab/ams-ht'],
  ['Complementos de ruído (revendedor nacional)', 'https://belenus.com.br'],
];

// Dica prática de especialista por modelo (guia)
const DICA = {
  'a1m': 'Ótima para aprender: comece com PLA e com modelos prontos do MakerWorld, que já vêm com o perfil de impressão ajustado para a máquina.',
  'a1m-combo': 'Para gastar menos filamento nas trocas de cor, prefira modelos em que a cor muda poucas vezes (por exemplo, letras em relevo só no topo) e use a opção do Bambu Studio que joga a purga dentro do preenchimento da peça.',
  'a1': 'Como a mesa anda para frente e para trás, peças altas e finas podem balançar: imprima-as mais devagar ou com "brim" (uma aba na base) para firmar.',
  'a1-combo': 'Imprima várias peças iguais na mesma mesa: a purga acontece a cada troca de cor por camada, não por peça. Com muitas peças juntas, o desperdício por peça cai bastante.',
  'a2l': 'Peças grandes levam muitas horas: acompanhe pela câmera no app Bambu Handy e deixe a detecção de falhas ligada para não perder material.',
  'a2l-combo': 'Combine o AMS lite (cores do dia a dia) com um AMS de 2ª geração para os filamentos que precisam ficar secos e vedados, como o PETG e o TPU.',
  'p1s-combo': 'Para ABS e ASA, imprima de porta fechada e deixe a mesa aquecer a câmara por alguns minutos antes de começar. Para PLA, abra a tampa de cima para não superaquecer.',
  'p2s-combo': 'Deixe a própria máquina escolher o modo de ar: ar frio de fora para PLA (com a porta fechada) e retenção de calor para ABS, ASA e materiais técnicos.',
  'x2d-combo': 'Use o bico auxiliar só para o suporte, com um material de interface próprio (como o "Support for PLA"): ele descola limpo e a face de baixo da peça fica lisa.',
  'h2s-combo': 'Para nylon e PC, seque o filamento antes (AMS 2 Pro ou AMS HT) e espere a câmara chegar à temperatura: é isso que evita empenamento e camadas fracas.',
  'h2d-combo': 'Divida o trabalho entre os bicos: um com o material principal e o outro com o suporte ou com a segunda cor mais usada. Assim quase não há purga.',
  'h2dl-10w': 'Antes de cortar ou gravar um material novo, faça um teste de potência e velocidade (o software tem bibliotecas prontas) e sempre ligue o duto de ventilação para fora.',
  'h2dl-40w': 'Use o 40 W para cortes e produção. Em gravações de detalhe muito fino, reduza a potência — ou prefira o ponto mais estreito do laser de 10 W.',
  'h2c-combo': 'Monte o "mapa" de bicos no Bambu Studio: uma cor ou material por bico de indução. Por enquanto, todos os bicos de uma mesma impressão precisam ter o mesmo diâmetro.',
};
