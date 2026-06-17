export interface Product {
  id: string;
  categoryId: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  priceCard?: number;
  images: string[];
  specs: { label: string; value: string }[];
  tag?: string;
  related: string[];
}

export interface Category {
  id: string;
  name: string;
  desc: string;
  icon: string;
  heroImg: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "sinuca",
    name: "Mesas de Sinuca",
    desc: "Mesas de bilhar e sinuca profissionais para residências, clubes e salões",
    icon: "🎱",
    heroImg: "https://images.unsplash.com/photo-1770802938506-4ff457fb59c4?w=1400&h=600&fit=crop&auto=format",
  },
  {
    id: "ping-pong",
    name: "Ping Pong",
    desc: "Mesas, raquetes e acessórios de tênis de mesa para todos os níveis",
    icon: "🏓",
    heroImg: "https://images.unsplash.com/photo-1518928286447-dc161b7cd6fb?w=1400&h=600&fit=crop&auto=format",
  },
  {
    id: "pebolim",
    name: "Pebolim",
    desc: "Mesas de totó passante e fixo, ideais para festas e eventos",
    icon: "⚽",
    heroImg: "https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=1400&h=600&fit=crop&auto=format",
  },
  {
    id: "air-hockey",
    name: "Air Hockey",
    desc: "Mesas de air hockey para diversão garantida em família",
    icon: "🏒",
    heroImg: "https://images.unsplash.com/photo-1693214893238-b4af7c8f65a0?w=1400&h=600&fit=crop&auto=format",
  },
  {
    id: "carteado",
    name: "Mesa de Carteado",
    desc: "Mesas de baralho e jogos de cartas com feltro premium",
    icon: "🃏",
    heroImg: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=1400&h=600&fit=crop&auto=format",
  },
  {
    id: "acessorios",
    name: "Tacos e Acessórios",
    desc: "Tacos profissionais, bolas, triângulos e tudo mais",
    icon: "🎯",
    heroImg: "https://images.unsplash.com/photo-1599685315659-bc876da49fe5?w=1400&h=600&fit=crop&auto=format",
  },
];

export const PRODUCTS: Product[] = [
  // ── SINUCA ──
  {
    id: "sinuca-standard-220",
    categoryId: "sinuca",
    name: "Sinuca Standard 2,20m",
    shortDesc: "Mesa de bilhar tamanho padrão com feltro verde importado",
    fullDesc:
      "A Sinuca Standard 2,20m é ideal para quem busca qualidade e custo-benefício. Estrutura em MDF de alta densidade com revestimento em laminado amadeirado, pernas torneadas em madeira maciça, feltro verde importado e banda de borracha de alta precisão.",
    price: 2750,
    priceCard: 3200,
    images: [
      "https://images.unsplash.com/photo-1770802938506-4ff457fb59c4?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1762086091607-1dfd5fa60a67?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1599685315659-bc876da49fe5?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "2,20 m" },
      { label: "Largura", value: "1,10 m" },
      { label: "Altura", value: "0,80 m" },
      { label: "Feltro", value: "Verde importado" },
      { label: "Estrutura", value: "MDF + Madeira maciça" },
      { label: "Ardósia", value: "25 mm" },
    ],
    tag: "MAIS VENDIDO",
    related: ["sinuca-profissional-250", "sinuca-compacta-180", "taco-elite", "kit-bolas-americanas"],
  },
  {
    id: "sinuca-profissional-250",
    categoryId: "sinuca",
    name: "Sinuca Profissional 2,50m",
    shortDesc: "Mesa profissional de torneio com ardósia italiana",
    fullDesc:
      "Para o jogador que exige o melhor. A Sinuca Profissional 2,50m conta com ardósia italiana de 38mm, feltro championship importado, banda de borracha K-55 e estrutura em madeira maciça com acabamento premium. Utilizada em competições oficiais.",
    price: 4200,
    priceCard: 4900,
    images: [
      "https://images.unsplash.com/photo-1721838449374-722202a68197?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1759173084016-08b0fffd377c?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1624827637654-84cd4877717e?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "2,50 m" },
      { label: "Largura", value: "1,25 m" },
      { label: "Altura", value: "0,80 m" },
      { label: "Feltro", value: "Championship importado" },
      { label: "Estrutura", value: "Madeira maciça" },
      { label: "Ardósia", value: "38 mm italiana" },
    ],
    tag: "PROFISSIONAL",
    related: ["sinuca-standard-220", "taco-elite", "kit-bolas-americanas", "bolas-sinuca-pro"],
  },
  {
    id: "sinuca-compacta-180",
    categoryId: "sinuca",
    name: "Sinuca Compacta 1,80m",
    shortDesc: "Mesa compacta, perfeita para espaços menores",
    fullDesc:
      "A Sinuca Compacta 1,80m foi desenvolvida para quem não quer abrir mão da diversão mesmo em apartamentos ou quartos menores. Estrutura robusta em MDF, feltro verde, banda de borracha de boa performance e pernas desmontáveis para fácil transporte.",
    price: 1890,
    priceCard: 2200,
    images: [
      "https://images.unsplash.com/photo-1694616776418-697f7b73a164?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1686523090965-8d570b6cf68e?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1717768760414-13220a71c792?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "1,80 m" },
      { label: "Largura", value: "0,90 m" },
      { label: "Altura", value: "0,78 m" },
      { label: "Feltro", value: "Verde nacional" },
      { label: "Estrutura", value: "MDF 25mm" },
      { label: "Ardósia", value: "20 mm" },
    ],
    related: ["sinuca-standard-220", "sinuca-profissional-250", "taco-elite"],
  },

  // ── PING PONG ──
  {
    id: "mesa-pingpong-standard",
    categoryId: "ping-pong",
    name: "Mesa Ping Pong Standard",
    shortDesc: "Mesa oficial de tênis de mesa para uso doméstico e clubes",
    fullDesc:
      "Mesa de tênis de mesa com tampo em MDF de 18mm com pintura azul oficial, suporte de rede incluso, pernas com trava de segurança e rodízios para fácil movimentação. Dimensões oficiais ITTF (274 x 152,5 cm).",
    price: 1480,
    priceCard: 1750,
    images: [
      "https://images.unsplash.com/photo-1461748659110-16121c049d52?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1518928286447-dc161b7cd6fb?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1659303388076-de1535159d6c?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "274 cm" },
      { label: "Largura", value: "152,5 cm" },
      { label: "Altura", value: "76 cm" },
      { label: "Tampo", value: "MDF 18 mm" },
      { label: "Pintura", value: "Azul oficial ITTF" },
      { label: "Rede", value: "Incluída" },
    ],
    tag: "MAIS VENDIDO",
    related: ["mesa-pingpong-dobravel", "raquete-pro"],
  },
  {
    id: "mesa-pingpong-dobravel",
    categoryId: "ping-pong",
    name: "Mesa Ping Pong Dobrável",
    shortDesc: "Mesa dobrável com metade que abre para treino individual",
    fullDesc:
      "Mesa com sistema de abertura de metade para treino solo — um lado fica na vertical para devolver as bolas. Tampo em MDF de 22mm, pintura verde ITTF, estrutura de aço carbono e rodízios com trava. Ideal para quem treina em casa.",
    price: 2100,
    priceCard: 2450,
    images: [
      "https://images.unsplash.com/photo-1676827613262-5fba25cee5fd?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1636734909254-ff5c43927e10?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1659303388076-de1535159d6c?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "274 cm" },
      { label: "Largura", value: "152,5 cm" },
      { label: "Tampo", value: "MDF 22 mm" },
      { label: "Sistema", value: "Dobrável 1/2 para treino solo" },
      { label: "Estrutura", value: "Aço carbono" },
      { label: "Rede", value: "Incluída" },
    ],
    related: ["mesa-pingpong-standard", "raquete-pro"],
  },
  {
    id: "raquete-pro",
    categoryId: "ping-pong",
    name: "Raquete Pro Series",
    shortDesc: "Raquete profissional com borracha antitop de alta velocidade",
    fullDesc:
      "Raquete de nível avançado com madeira de 5 camadas, borracha antitop de alta velocidade e controle. Ideal para jogadores intermediários e avançados que buscam velocidade e efeito. Vendida individualmente.",
    price: 280,
    priceCard: 320,
    images: [
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1636734909254-ff5c43927e10?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1676827613262-5fba25cee5fd?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Madeira", value: "5 camadas" },
      { label: "Borracha", value: "Antitop 2,0 mm" },
      { label: "Velocidade", value: "Alta" },
      { label: "Controle", value: "Médio-Alto" },
      { label: "Nível", value: "Intermediário / Avançado" },
      { label: "Cabo", value: "Côncavo anatômico" },
    ],
    related: ["mesa-pingpong-standard", "mesa-pingpong-dobravel"],
  },

  // ── PEBOLIM ──
  {
    id: "pebolim-passante",
    categoryId: "pebolim",
    name: "Pebolim Passante 1,20m",
    shortDesc: "Pebolim com hastes passantes, estrutura em MDF reforçado",
    fullDesc:
      "O clássico Pebolim Passante com hastes que atravessam a mesa. Estrutura robusta em MDF de 25mm com acabamento laminado, jogadores em plástico ABS resistente, campo em fibra de vidro verde e pés antiderrapantes. Para 4 jogadores.",
    price: 2680,
    priceCard: 2998,
    images: [
      "https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1588318073076-7030f7040046?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1610723112396-868baffc3843?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "1,20 m" },
      { label: "Largura", value: "0,70 m" },
      { label: "Jogadores", value: "4 (2x2)" },
      { label: "Hastes", value: "Passantes em aço" },
      { label: "Estrutura", value: "MDF 25 mm" },
      { label: "Campo", value: "Fibra de vidro verde" },
    ],
    tag: "OFERTA",
    related: ["pebolim-fixo", "pebolim-mesa", "sinuca-compacta-180"],
  },
  {
    id: "pebolim-fixo",
    categoryId: "pebolim",
    name: "Pebolim Fixo Compacto",
    shortDesc: "Pebolim com hastes fixas, estrutura compacta e resistente",
    fullDesc:
      "O Pebolim Fixo é ideal para uso intenso em bares, clubes e salões de jogos. Hastes fixas em aço reforçado, jogadores em resina injetada, campo em MDF pintado e sistema de contagem lateral. Fácil manutenção.",
    price: 1400,
    priceCard: 1680,
    images: [
      "https://images.unsplash.com/photo-1588318073076-7030f7040046?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1610723112396-868baffc3843?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "1,10 m" },
      { label: "Largura", value: "0,65 m" },
      { label: "Jogadores", value: "4 (2x2)" },
      { label: "Hastes", value: "Fixas em aço galvanizado" },
      { label: "Estrutura", value: "MDF pintado" },
      { label: "Placar", value: "Lateral mecânico" },
    ],
    related: ["pebolim-passante", "pebolim-mesa"],
  },
  {
    id: "pebolim-mesa",
    categoryId: "pebolim",
    name: "Pebolim de Mesa Mini",
    shortDesc: "Versão compacta de mesa, para crianças e espaços pequenos",
    fullDesc:
      "O Pebolim de Mesa Mini é perfeito para crianças e ambientes menores. Estrutura em plástico resistente ABS com hastes metálicas, jogadores pintados e campo verde. Leve e fácil de carregar para qualquer lugar.",
    price: 380,
    priceCard: 450,
    images: [
      "https://images.unsplash.com/photo-1610723112396-868baffc3843?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1588318073076-7030f7040046?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "56 cm" },
      { label: "Largura", value: "30 cm" },
      { label: "Jogadores", value: "2 (1x1)" },
      { label: "Material", value: "Plástico ABS + Aço" },
      { label: "Idade", value: "6+ anos" },
      { label: "Peso", value: "1,8 kg" },
    ],
    related: ["pebolim-passante", "pebolim-fixo"],
  },

  // ── AIR HOCKEY ──
  {
    id: "air-hockey-klopf",
    categoryId: "air-hockey",
    name: "Aero Hockey Klopf",
    shortDesc: "Mesa de air hockey profissional com motor silencioso",
    fullDesc:
      "A melhor mesa de air hockey do mercado nacional. Motor silencioso de alta potência, superfície de alumínio polido, marcador eletrônico com LED e estrutura reforçada em MDF. Acompanha 2 discos e 2 batedores.",
    price: 4000,
    priceCard: 4680,
    images: [
      "https://images.unsplash.com/photo-1693214893231-22d3fc4be5ed?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1693214893238-b4af7c8f65a0?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1693214893250-e408f7f4e1ea?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "2,10 m" },
      { label: "Largura", value: "1,20 m" },
      { label: "Motor", value: "220V / silencioso" },
      { label: "Placar", value: "Eletrônico LED" },
      { label: "Superfície", value: "Alumínio polido" },
      { label: "Acompanha", value: "2 discos + 2 batedores" },
    ],
    tag: "OFERTA",
    related: ["air-hockey-compacto", "pebolim-passante"],
  },
  {
    id: "air-hockey-compacto",
    categoryId: "air-hockey",
    name: "Aero Hockey Compacto",
    shortDesc: "Air hockey compacto ideal para residências e festas",
    fullDesc:
      "Versão compacta do air hockey para quem quer diversão em casa sem abrir mão do espaço. Motor de 110/220V com chaveamento automático, placar mecânico lateral e estrutura em MDF reforçado com acabamento amadeirado.",
    price: 2200,
    priceCard: 2600,
    images: [
      "https://images.unsplash.com/photo-1693214893238-b4af7c8f65a0?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1693214893250-e408f7f4e1ea?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1693214893231-22d3fc4be5ed?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "1,50 m" },
      { label: "Largura", value: "0,80 m" },
      { label: "Motor", value: "110/220V bivolt" },
      { label: "Placar", value: "Mecânico lateral" },
      { label: "Estrutura", value: "MDF reforçado" },
      { label: "Acompanha", value: "2 discos + 2 batedores" },
    ],
    related: ["air-hockey-klopf", "pebolim-passante"],
  },

  // ── CARTEADO ──
  {
    id: "mesa-carteado-redonda",
    categoryId: "carteado",
    name: "Mesa de Carteado Redonda",
    shortDesc: "Mesa redonda 8 lugares com feltro e porta-fichas embutidos",
    fullDesc:
      "Mesa de carteado redonda com 8 lugares, feltro verde de alta qualidade, porta-fichas individuais embutidos, estrutura em MDF com acabamento amadeirado e pernas desmontáveis. Inclui porta-copos para cada jogador.",
    price: 890,
    priceCard: 1050,
    images: [
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1626775238053-4315516eedc9?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Diâmetro", value: "1,20 m" },
      { label: "Lugares", value: "8 jogadores" },
      { label: "Feltro", value: "Verde premium" },
      { label: "Porta-fichas", value: "8 unidades embutidas" },
      { label: "Porta-copos", value: "8 unidades" },
      { label: "Estrutura", value: "MDF amadeirado" },
    ],
    tag: "MAIS VENDIDO",
    related: ["mesa-carteado-oval", "sinuca-compacta-180"],
  },
  {
    id: "mesa-carteado-oval",
    categoryId: "carteado",
    name: "Mesa de Carteado Oval Premium",
    shortDesc: "Mesa oval estilo cassino para 10 jogadores com feltro flock",
    fullDesc:
      "Mesa oval no estilo Texas Hold'em de cassino, com feltro flock de alta durabilidade, marcador de dealer, porta-fichas e porta-copos individuais. Estrutura premium em MDF com tampo acolchoado lateral. Perfeita para noites de poker.",
    price: 1650,
    priceCard: 1950,
    images: [
      "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1626775238053-4315516eedc9?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "2,40 m" },
      { label: "Largura", value: "1,20 m" },
      { label: "Lugares", value: "10 jogadores" },
      { label: "Feltro", value: "Flock premium" },
      { label: "Lateral", value: "Acolchoada" },
      { label: "Inclui", value: "Marcador dealer + porta-fichas" },
    ],
    related: ["mesa-carteado-redonda"],
  },

  // ── ACESSÓRIOS ──
  {
    id: "taco-elite",
    categoryId: "acessorios",
    name: "Taco Elite Profissional",
    shortDesc: "Taco em bordo canadense com ponteira de couro importado",
    fullDesc:
      "Taco de bilhar em bordo canadense de alta qualidade, com encaixe de precisão de 3/8 x 10 UNF, ponteira de couro importado 13mm, grip em couro sintético e verniz de alta durabilidade. Indicado para jogadores avançados.",
    price: 350,
    priceCard: 420,
    images: [
      "https://images.unsplash.com/photo-1556329754-9420aeb663c5?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1738411186017-bbd1bf636c8b?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1777712673276-b79c063c6263?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Comprimento", value: "147 cm" },
      { label: "Madeira", value: "Bordo canadense" },
      { label: "Ponteira", value: "Couro 13 mm importado" },
      { label: "Encaixe", value: "3/8 x 10 UNF" },
      { label: "Grip", value: "Couro sintético" },
      { label: "Peso", value: "510 g" },
    ],
    tag: "PROFISSIONAL",
    related: ["sinuca-standard-220", "kit-bolas-americanas", "bolas-sinuca-pro"],
  },
  {
    id: "kit-bolas-americanas",
    categoryId: "acessorios",
    name: "Kit Bolas Americanas (16 un.)",
    shortDesc: "Jogo completo de bolas americanas em resina de alta qualidade",
    fullDesc:
      "Kit completo com 16 bolas americanas de bilhar em resina fenólica de alta densidade. Diâmetro padrão de 57,15mm, resistentes a impactos e com pigmentação viva que não desbota. Inclui bola branca, 7 sólidas, 7 listradas e bola 8.",
    price: 480,
    priceCard: 560,
    images: [
      "https://images.unsplash.com/photo-1599685315659-bc876da49fe5?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1624827637654-84cd4877717e?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1717768760414-13220a71c792?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Quantidade", value: "16 bolas" },
      { label: "Diâmetro", value: "57,15 mm" },
      { label: "Material", value: "Resina fenólica" },
      { label: "Peso unit.", value: "155 g" },
      { label: "Padrão", value: "Americano (8-ball)" },
      { label: "Inclui", value: "Estojo de transporte" },
    ],
    related: ["sinuca-standard-220", "taco-elite", "bolas-sinuca-pro"],
  },
  {
    id: "bolas-sinuca-pro",
    categoryId: "acessorios",
    name: "Bolas de Sinuca Profissional",
    shortDesc: "Jogo de bolas de snooker em resina de alta precisão",
    fullDesc:
      "Kit de bolas de snooker no padrão profissional. 22 bolas com 15 vermelhas, 6 coloridas e bola branca em resina cristal de alta densidade. Tolerância dimensional de ±0,05mm para um jogo sempre preciso.",
    price: 680,
    priceCard: 820,
    images: [
      "https://images.unsplash.com/photo-1694888409336-dd51291e99b1?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1642586021542-2e1b2479a759?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1686523090965-8d570b6cf68e?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Quantidade", value: "22 bolas" },
      { label: "Diâmetro", value: "52,5 mm" },
      { label: "Material", value: "Resina cristal" },
      { label: "Tolerância", value: "±0,05 mm" },
      { label: "Padrão", value: "Snooker profissional" },
      { label: "Inclui", value: "Embalagem individual" },
    ],
    tag: "PROFISSIONAL",
    related: ["sinuca-profissional-250", "sinuca-standard-220", "taco-elite"],
  },
  {
    id: "kit-triangulo",
    categoryId: "acessorios",
    name: "Kit Triângulo e Acessórios",
    shortDesc: "Kit completo com triângulo, suporte mural e giz de bilhar",
    fullDesc:
      "Kit de acessórios essenciais para bilhar: triângulo em ABS para bolas americanas (57mm), 2 suportes murais para tacos em madeira, 12 unidades de giz de bilhar azul, e escovinha para feltro. Tudo que você precisa para manter a mesa em ordem.",
    price: 120,
    priceCard: 150,
    images: [
      "https://images.unsplash.com/photo-1777712673276-b79c063c6263?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1760903192559-17dc111d31e3?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1666193183161-a13702ad9e6b?w=900&h=600&fit=crop&auto=format",
    ],
    specs: [
      { label: "Triângulo", value: "ABS para 57mm" },
      { label: "Suportes", value: "2 un. madeira" },
      { label: "Giz", value: "12 un. azul" },
      { label: "Escova", value: "Feltro e flanela" },
      { label: "Inclui", value: "Embalagem kit" },
    ],
    related: ["taco-elite", "kit-bolas-americanas", "sinuca-standard-220"],
  },
];

export function getCategoryById(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

export function getProductsByCategory(categoryId: string) {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function getRelatedProducts(ids: string[]) {
  return ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[];
}

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
