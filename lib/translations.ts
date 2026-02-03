export type Locale = "en" | "es" | "fr" | "de" | "it" | "jp" | "br" | "kr" | "tw" | "in" | "ru";

export type FeaturedPromptEntry = {
  id: string;
  tag: string;
  tagIcon: string;
  prompt: string;
  gradient: string;
  videoUrl: string;
};

export type ComparisonRow = {
  feature: string;
  veo: string;
  sora: string;
  runway: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Translations = {
  nav: {
    features: string;
    gallery: string;
    pricing: string;
    api: string;
    logIn: string;
    getStarted: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    /** When set, H1 renders one line: titleOneLineBefore (white) + titleOneLineHighlight (purple) + titleOneLineAfter (white) */
    titleOneLineBefore?: string;
    titleOneLineHighlight?: string;
    titleOneLineAfter?: string;
    subtitle: string;
    placeholder: string;
    cta: string;
    trendingStyles: string;
    styleCyberpunk: string;
    styleGhibli: string;
    styleHyperRealistic: string;
    styleSynthwave: string;
    styleAnamorphic: string;
  };
  showcase: {
    title: string;
    subtitle: string;
    trending: string;
    cinematic: string;
    anime: string;
    videoLabel: (n: number) => string;
    exploreAll: string;
  };
  comparison: {
    title: string;
    titleSuffix?: string;
    titleEnd?: string;
    subtitle: string;
    tableFeature: string;
    tableVeo: string;
    tableVeoWinner: string;
    tableSora: string;
    tableRunway: string;
    rows: ComparisonRow[];
    cardVeoTitle: string;
    cardVeoBody: string;
    cardVeo1: string;
    cardVeo2: string;
    cardVeo3: string;
    cardSoraTitle: string;
    cardSoraBody: string;
    cardSora1: string;
    cardSora2: string;
    cardRunwayTitle: string;
    cardRunwayBody: string;
    cardRunway1: string;
    cardRunway2: string;
    bottomParagraph: string;
    cta: string;
  };
  featuredPrompts: {
    title: string;
    titleSuffix?: string;
    subtitle: string;
    copy: string;
    copied: string;
    copyAria: string;
    copiedAria: string;
    prompts: FeaturedPromptEntry[];
  };
  evolution: {
    title: string;
    titleSuffix?: string;
    subtitle: string;
    aspect: string;
    veo31: string;
    veo32: string;
    visualQuality: string;
    visualQuality31: string;
    visualQuality32: string;
    control: string;
    control31: string;
    control32: string;
    speed: string;
    speed31: string;
    speed32: string;
  };
  threeSteps: {
    title: string;
    titleSuffix?: string;
    subtitle: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  footer: {
    tagline: string;
    copyright: string;
    terms: string;
    privacy: string;
    cookies: string;
  };
  aria: {
    heroVideo: string;
    navVirax: string;
    showcaseVideo: (n: number, tab: string) => string;
    styleLabel: (style: string) => string;
    featuredPrompt: (tag: string) => string;
  };
};

const comparisonRowsEn: ComparisonRow[] = [
  { feature: "Max Resolution", veo: "4K (Upscaled)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Video Duration", veo: "60s+ (Continuous)", sora: "Up to 60s", runway: "10s – 40s" },
  { feature: "Prompt Adherence", veo: "98% (Deep Semantic)", sora: "90% (High Physics)", runway: "85% (Artistic)" },
  { feature: "Generation Speed", veo: "Near Real-time", sora: "Slow (Minutes)", runway: "Fast (Turbo mode)" },
  { feature: "Motion Control", veo: "Camera & Subject Control", sora: "Physics Simulation", runway: "Motion Brush" },
  { feature: "Availability", veo: "Open Access (Web)", sora: "Restricted / Pro", runway: "Subscription" },
  { feature: "Cost", veo: "Free Trial / Freemium", sora: "$20+/mo (Estimated)", runway: "Credit Based" },
];

const comparisonRowsEs: ComparisonRow[] = [
  { feature: "Resolución máxima", veo: "4K (escalado)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Duración del vídeo", veo: "60s+ (continuo)", sora: "Hasta 60s", runway: "10s – 40s" },
  { feature: "Fidelidad al prompt", veo: "98% (semántico profundo)", sora: "90% (física avanzada)", runway: "85% (artístico)" },
  { feature: "Velocidad de generación", veo: "Casi en tiempo real", sora: "Lenta (minutos)", runway: "Rápida (modo Turbo)" },
  { feature: "Control de movimiento", veo: "Cámara y sujeto", sora: "Simulación física", runway: "Motion Brush" },
  { feature: "Disponibilidad", veo: "Acceso abierto (web)", sora: "Restringido / Pro", runway: "Suscripción" },
  { feature: "Precio", veo: "Prueba gratis / Freemium", sora: "20 $/mes (aprox.)", runway: "Por créditos" },
];

const comparisonRowsFr: ComparisonRow[] = [
  { feature: "Résolution max", veo: "4K (upscalé)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Durée vidéo", veo: "60s+ (continu)", sora: "Jusqu'à 60s", runway: "10s – 40s" },
  { feature: "Fidélité au prompt", veo: "98% (sémantique profond)", sora: "90% (physique avancée)", runway: "85% (artistique)" },
  { feature: "Vitesse de génération", veo: "Quasi temps réel", sora: "Lent (minutes)", runway: "Rapide (mode Turbo)" },
  { feature: "Contrôle du mouvement", veo: "Caméra et sujet", sora: "Simulation physique", runway: "Motion Brush" },
  { feature: "Disponibilité", veo: "Accès ouvert (web)", sora: "Restreint / Pro", runway: "Abonnement" },
  { feature: "Prix", veo: "Essai gratuit / Freemium", sora: "20 $/mois (estim.)", runway: "Par crédits" },
];

const comparisonRowsDe: ComparisonRow[] = [
  { feature: "Max. Auflösung", veo: "4K (hochskaliert)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Videolänge", veo: "60s+ (durchgehend)", sora: "Bis 60s", runway: "10s – 40s" },
  { feature: "Prompt-Treue", veo: "98% (tiefe Semantik)", sora: "90% (hohe Physik)", runway: "85% (künstlerisch)" },
  { feature: "Generierungsgeschwindigkeit", veo: "Nahezu Echtzeit", sora: "Langsam (Minuten)", runway: "Schnell (Turbo-Modus)" },
  { feature: "Bewegungssteuerung", veo: "Kamera & Motiv", sora: "Physik-Simulation", runway: "Motion Brush" },
  { feature: "Verfügbarkeit", veo: "Offener Zugang (Web)", sora: "Eingeschränkt / Pro", runway: "Abonnement" },
  { feature: "Kosten", veo: "Kostenlose Testversion / Freemium", sora: "20 $/Monat (geschätzt)", runway: "Credits" },
];

const comparisonRowsIt: ComparisonRow[] = [
  { feature: "Risoluzione max", veo: "4K (upscaled)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Durata video", veo: "60s+ (continuo)", sora: "Fino a 60s", runway: "10s – 40s" },
  { feature: "Fedeltà al prompt", veo: "98% (semantica profonda)", sora: "90% (fisica avanzata)", runway: "85% (artistico)" },
  { feature: "Velocità di generazione", veo: "Quasi in tempo reale", sora: "Lenta (minuti)", runway: "Veloce (modalità Turbo)" },
  { feature: "Controllo movimento", veo: "Camera e soggetto", sora: "Simulazione fisica", runway: "Motion Brush" },
  { feature: "Disponibilità", veo: "Accesso aperto (web)", sora: "Limitato / Pro", runway: "Abbonamento" },
  { feature: "Costo", veo: "Prova gratuita / Freemium", sora: "20 $/mese (stim.)", runway: "A crediti" },
];

const comparisonRowsJp: ComparisonRow[] = [
  { feature: "最大解像度", veo: "4K（アップスケール）", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "動画の長さ", veo: "60秒以上（連続）", sora: "最大60秒", runway: "10秒〜40秒" },
  { feature: "プロンプト忠実度", veo: "98%（深層意味）", sora: "90%（高度物理）", runway: "85%（芸術的）" },
  { feature: "生成速度", veo: "ほぼリアルタイム", sora: "遅い（数分）", runway: "速い（Turboモード）" },
  { feature: "モーション制御", veo: "カメラ＆被写体", sora: "物理シミュレーション", runway: "Motion Brush" },
  { feature: "利用可否", veo: "オープンアクセス（Web）", sora: "制限 / Pro", runway: "サブスクリプション" },
  { feature: "料金", veo: "無料トライアル / フリーミアム", sora: "月20ドル以上（推定）", runway: "クレジット制" },
];

const comparisonRowsBr: ComparisonRow[] = [
  { feature: "Resolução máxima", veo: "4K (upscaled)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Duração do vídeo", veo: "60s+ (contínuo)", sora: "Até 60s", runway: "10s – 40s" },
  { feature: "Fidelidade ao prompt", veo: "98% (semântico profundo)", sora: "90% (física avançada)", runway: "85% (artístico)" },
  { feature: "Velocidade de geração", veo: "Quase em tempo real", sora: "Lento (minutos)", runway: "Rápido (modo Turbo)" },
  { feature: "Controle de movimento", veo: "Câmera e assunto", sora: "Simulação física", runway: "Motion Brush" },
  { feature: "Disponibilidade", veo: "Acesso aberto (web)", sora: "Restrito / Pro", runway: "Assinatura" },
  { feature: "Custo", veo: "Teste grátis / Freemium", sora: "R$ 20+/mês (estim.)", runway: "Por créditos" },
];

const comparisonRowsKr: ComparisonRow[] = [
  { feature: "최대 해상도", veo: "4K (업스케일)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "영상 길이", veo: "60초+ (연속)", sora: "최대 60초", runway: "10초 – 40초" },
  { feature: "프롬프트 충실도", veo: "98% (심층 의미)", sora: "90% (고급 물리)", runway: "85% (예술적)" },
  { feature: "생성 속도", veo: "거의 실시간", sora: "느림 (수 분)", runway: "빠름 (Turbo 모드)" },
  { feature: "모션 제어", veo: "카메라 및 피사체", sora: "물리 시뮬레이션", runway: "Motion Brush" },
  { feature: "이용 가능성", veo: "오픈 액세스 (웹)", sora: "제한 / Pro", runway: "구독" },
  { feature: "비용", veo: "무료 체험 / 프리미엄", sora: "월 $20+ (예상)", runway: "크레딧제" },
];

const comparisonRowsTw: ComparisonRow[] = [
  { feature: "最高解析度", veo: "4K（升頻）", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "影片長度", veo: "60秒以上（連續）", sora: "最長 60 秒", runway: "10 秒 – 40 秒" },
  { feature: "提示詞忠實度", veo: "98%（深層語義）", sora: "90%（進階物理）", runway: "85%（藝術風格）" },
  { feature: "生成速度", veo: "近即時", sora: "較慢（數分鐘）", runway: "快速（Turbo 模式）" },
  { feature: "動態控制", veo: "鏡頭與主體", sora: "物理模擬", runway: "Motion Brush" },
  { feature: "可用性", veo: "開放存取（網頁）", sora: "限制 / Pro", runway: "訂閱制" },
  { feature: "費用", veo: "免費試用 / 免費增值", sora: "月 $20+（估計）", runway: "點數制" },
];

const comparisonRowsIn: ComparisonRow[] = [
  { feature: "अधिकतम रिज़ॉल्यूशन", veo: "4K (अपस्केल)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "वीडियो अवधि", veo: "60s+ (निरंतर)", sora: "60s तक", runway: "10s – 40s" },
  { feature: "प्रॉम्प्ट अनुरूपता", veo: "98% (गहन अर्थ)", sora: "90% (उन्नत भौतिकी)", runway: "85% (कलात्मक)" },
  { feature: "जनरेशन गति", veo: "लगभग रियलटाइम", sora: "धीमा (मिनट)", runway: "तेज़ (Turbo मोड)" },
  { feature: "मोशन नियंत्रण", veo: "कैमरा और विषय", sora: "भौतिक सिमुलेशन", runway: "Motion Brush" },
  { feature: "उपलब्धता", veo: "ओपन एक्सेस (वेब)", sora: "सीमित / Pro", runway: "सब्सक्रिप्शन" },
  { feature: "लागत", veo: "मुफ्त ट्रायल / फ्रीमियम", sora: "$20+/माह (अनुमान)", runway: "क्रेडिट आधारित" },
];

const comparisonRowsRu: ComparisonRow[] = [
  { feature: "Макс. разрешение", veo: "4K (апскейл)", sora: "1080p", runway: "1080p / 4K (Turbo)" },
  { feature: "Длина видео", veo: "60с+ (непрерывно)", sora: "До 60с", runway: "10с – 40с" },
  { feature: "Соответствие промпту", veo: "98% (глубокая семантика)", sora: "90% (продвинутая физика)", runway: "85% (художественный)" },
  { feature: "Скорость генерации", veo: "Почти в реальном времени", sora: "Медленно (минуты)", runway: "Быстро (режим Turbo)" },
  { feature: "Управление движением", veo: "Камера и объект", sora: "Физическая симуляция", runway: "Motion Brush" },
  { feature: "Доступность", veo: "Открытый доступ (веб)", sora: "Ограниченный / Pro", runway: "Подписка" },
  { feature: "Стоимость", veo: "Бесплатный пробный / Freemium", sora: "$20+/мес (оценка)", runway: "По кредитам" },
];

const featuredPromptsEn: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Metallic Couture",
    tagIcon: "movie",
    prompt:
      "Cinematic fashion film: a model in a metallic silver gown under a single spotlight in a dark minimalist studio, glossy floor reflections, slow dolly-in, hyper-realistic 8k, volumetric haze, high-contrast lighting, anamorphic look.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Low-angle tracking shot of a biker racing down a sunlit desert highway, armored rider, roaring muscle trucks kicking up dust, Mad Max chase vibe, cinematic teal-orange grade, 4K, motion blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Space Drift",
    tagIcon: "grass",
    prompt:
      "Cinematic orbital shot: lone astronaut drifting by a damaged satellite above Earth's curved horizon, sunrise lens flare, floating debris, slow rotating camera, ultra-real 4K, deep space contrast.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Neon Cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Cinematic street-level shot of a lone hooded figure walking through a rain-soaked neon alley in Neo-Tokyo, steam vents, wet pavement reflections, cyberpunk vibe, ultra-real 8k, volumetric fog.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsEs: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Alta costura metálica",
    tagIcon: "movie",
    prompt:
      "Película de moda cinematográfica: una modelo con un vestido plateado metálico bajo un único foco en un estudio minimalista oscuro, reflejos en suelo brillante, lento avance de cámara, 8K hiperrealista, neblina volumétrica, iluminación de alto contraste, look anamórfico.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Plano de seguimiento en ángulo bajo de un motorista corriendo por una carretera desértica soleada, jinete acorazado, camiones rugiendo levantando polvo, ambiente persecución Mad Max, gradación cinematográfica teal-naranja, 4K, motion blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Deriva espacial",
    tagIcon: "grass",
    prompt:
      "Plano orbital cinematográfico: un astronauta solitario flotando junto a un satélite dañado sobre el horizonte curvo de la Tierra, destello de lente al amanecer, escombros flotantes, cámara girando lentamente, 4K ultra real, contraste del espacio profundo.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Neón cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Plano cinematográfico a nivel de calle de una figura encapuchada caminando por un callejón de neón bajo la lluvia en Neo-Tokyo, ventilaciones de vapor, reflejos en el pavimento mojado, ambiente cyberpunk, 8K ultra real, niebla volumétrica.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsFr: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Couture métallique",
    tagIcon: "movie",
    prompt:
      "Film de mode cinématographique : un mannequin en robe argentée métallique sous un seul spot dans un studio minimaliste sombre, reflets au sol, travelling lent, 8K hyperréaliste, brume volumétrique, éclairage haut contraste, look anamorphique.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Plan de suivi en contre-plongée d'un motard fonçant sur une autoroute désertique ensoleillée, pilote blindé, camions rugissants soulevant la poussière, ambiance poursuite Mad Max, étalonnage cinéma teal-orange, 4K, motion blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Dérive spatiale",
    tagIcon: "grass",
    prompt:
      "Plan orbital cinématographique : un astronaute solitaire dérivant près d'un satellite endommagé au-dessus de l'horizon courbe de la Terre, flare de lever de soleil, débris flottants, caméra en rotation lente, 4K ultra réaliste, contraste espace profond.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Néon cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Plan cinématographique au niveau de la rue : une silhouette encapuchonnée marchant dans une ruelle néon sous la pluie à Neo-Tokyo, bouches d'aération, reflets sur le pavé mouillé, ambiance cyberpunk, 8K ultra réaliste, brouillard volumétrique.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsDe: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Metallic Couture",
    tagIcon: "movie",
    prompt:
      "Kinofilm-Mode: ein Model in silbernem Metallkleid unter einem Spot in dunklem minimalistischem Studio, glänzende Bodenreflexionen, langsamer Dolly, hyperrealistisches 8K, volumetrischer Dunst, High-Contrast-Beleuchtung, anamorphischer Look.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Tiefwinkel-Fahrtszene: ein Biker rast über eine sonnige Wüstenstraße, gepanzerter Fahrer, brüllende Trucks mit Staubwolken, Mad-Max-Verfolgungsvibe, cinematisches Teal-Orange-Grading, 4K, Motion Blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Weltraum-Drift",
    tagIcon: "grass",
    prompt:
      "Cinematische Orbitaufnahme: einsamer Astronaut treibt an beschädigtem Satelliten über der gekrümmten Erde vorbei, Sonnenaufgang-Lens-Flare, schwebende Trümmer, langsam rotierende Kamera, ultrarealistisches 4K, Tiefraum-Kontrast.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Neon Cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Cinematische Straßenperspektive: einsame vermummte Figur geht durch eine regennasse Neon-Gasse in Neo-Tokyo, Dampfschächte, nasse Pflasterreflexionen, Cyberpunk-Vibe, ultrarealistisches 8K, volumetrischer Nebel.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsIt: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Alta moda metallica",
    tagIcon: "movie",
    prompt:
      "Film di moda cinematografico: una modella in abito argentato metallico sotto un unico spot in uno studio minimalista scuro, riflessi sul pavimento lucido, carrellata lenta, 8K iperrealistico, foschia volumetrica, illuminazione ad alto contrasto, look anamorfico.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Inquadratura in tracking a bassa angolazione: un motociclista corre su un'autostrada desertica soleggiata, pilota corazzato, camion ruggenti che sollevano polvere, atmosfera inseguimento Mad Max, grading cinematografico teal-arancione, 4K, motion blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Deriva spaziale",
    tagIcon: "grass",
    prompt:
      "Ripresa orbitale cinematografica: astronauta solitario che fluttua vicino a un satellite danneggiato sopra l'orizzonte curvo della Terra, lens flare dell'alba, detriti fluttuanti, camera in rotazione lenta, 4K ultrarealistico, contrasto spazio profondo.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Neon cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Ripresa cinematografica a livello strada: figura incappucciata che cammina in un vicolo neon sotto la pioggia a Neo-Tokyo, prese d'aria vaporose, riflessi sul selciato bagnato, atmosfera cyberpunk, 8K ultrarealistico, nebbia volumetrica.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsJp: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "メタリック・クチュール",
    tagIcon: "movie",
    prompt:
      "シネマティックなファッション映像：ダークなミニマルスタジオで単一スポットを浴びる銀色メタリックドレスのモデル、光沢フロアの反射、スローダリー、ハイパーリアル8K、体積霧、ハイコントラスト照明、アナモルフィックルック。",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "マッドマックス",
    tagIcon: "smart_toy",
    prompt:
      "ローアングル追跡ショット：陽光の砂漠ハイウェイを疾走するバイカー、装甲ライダー、砂塵を巻き上げる咆哮するマッスルトラック、マッドマックス追跡ムード、シネマティック・ティールオレンジグレード、4K、モーションブラー。",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "スペースドリフト",
    tagIcon: "grass",
    prompt:
      "シネマティックな軌道ショット：地球の曲線の水平線上で損傷した衛星のそばを漂う孤独な宇宙飛行士、日の出のレンズフレア、浮遊デブリ、ゆっくり回転するカメラ、超リアル4K、深宇宙コントラスト。",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "ネオン・サイバーパンク",
    tagIcon: "movie_filter",
    prompt:
      "ネオ東京の雨に濡れたネオン路地を歩く一人のフード姿のシネマティックストリートショット、蒸気の噴出口、濡れた舗道の反射、サイバーパンクの雰囲気、超リアル8K、体積霧。",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsBr: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Alta costura metálica",
    tagIcon: "movie",
    prompt:
      "Filme de moda cinematográfico: modelo em vestido prateado metálico sob um único holofote em estúdio minimalista escuro, reflexos no chão brilhante, dolly lento, 8K hiperrealista, névoa volumétrica, iluminação de alto contraste, look anamórfico.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Mad Max",
    tagIcon: "smart_toy",
    prompt:
      "Plano de acompanhamento em ângulo baixo: motociclista em alta velocidade em rodovia deserta ensolarada, piloto blindado, caminhões rugindo levantando poeira, clima de perseguição Mad Max, gradação cinematográfica teal-laranja, 4K, motion blur.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Deriva espacial",
    tagIcon: "grass",
    prompt:
      "Plano orbital cinematográfico: astronauta solitário flutuando junto a um satélite danificado acima do horizonte curvo da Terra, lens flare do nascer do sol, detritos flutuantes, câmera girando lentamente, 4K ultra realista, contraste do espaço profundo.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Neon cyberpunk",
    tagIcon: "movie_filter",
    prompt:
      "Plano cinematográfico de nível de rua: figura encapuzada caminhando por um beco de neon sob chuva em Neo-Tóquio, saídas de vapor, reflexos no asfalto molhado, clima cyberpunk, 8K ultra realista, névoa volumétrica.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsKr: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "메탈릭 쿠튀르",
    tagIcon: "movie",
    prompt:
      "시네마틱 패션 영상: 어두운 미니멀 스튜디오에서 단일 스포트라이트를 받는 은색 메탈릭 드레스의 모델, 반짝이는 바닥 반사, 슬로우 돌리, 하이퍼리얼 8K, 체적 안개, 고대비 조명, 아나모픽 룩.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "매드 맥스",
    tagIcon: "smart_toy",
    prompt:
      "로우앵글 추적 샷: 햇빛 비치는 사막 고속도로를 질주하는 바이커, 장갑 라이더, 먼지를 일으키는 포효하는 머슬 트럭, 매드 맥스 추격 분위기, 시네마틱 틸-오렌지 그레이딩, 4K, 모션 블러.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "스페이스 드리프트",
    tagIcon: "grass",
    prompt:
      "시네마틱 궤도 샷: 지구 곡선 수평선 위 손상된 위성 옆을 표류하는 외로운 우주비행사, 일출 렌즈 플레어, 떠다니는 잔해, 천천히 회전하는 카메라, 울트라 리얼 4K, 심우주 대비.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "네온 사이버펑크",
    tagIcon: "movie_filter",
    prompt:
      "네오 도쿄 비 오는 네온 골목을 걷는 후드 쓴 인물의 시네마틱 스트리트 샷, 증기 배출구, 젖은 포장 도로 반사, 사이버펑크 분위기, 울트라 리얼 8K, 체적 안개.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsTw: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "金屬高訂",
    tagIcon: "movie",
    prompt:
      "電影級時尚畫面：暗色極簡攝影棚中單一聚光燈下的銀色金屬禮服模特，光澤地板反射、緩慢推軌、超寫實 8K、體積霧、高對比照明、變形寬銀幕風格。",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "瘋狂麥斯",
    tagIcon: "smart_toy",
    prompt:
      "低角度跟拍：豔陽沙漠公路上疾馳的機車騎士、裝甲騎士、揚塵的咆哮肌肉卡車、瘋狂麥斯追逐氛圍、電影級青橙調色、4K、動態模糊。",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "太空漂流",
    tagIcon: "grass",
    prompt:
      "電影級軌道鏡頭：地球弧線地平線上受損衛星旁漂浮的孤獨太空人、日出鏡頭光暈、漂浮碎片、緩慢旋轉攝影機、超寫實 4K、深空對比。",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "霓虹賽博龐克",
    tagIcon: "movie_filter",
    prompt:
      "電影級街景鏡頭：雨夜新東京霓虹巷弄中行走的連帽人影、蒸氣孔、濕地反射、賽博龐克氛圍、超寫實 8K、體積霧。",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsIn: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "मेटैलिक क्यूचर",
    tagIcon: "movie",
    prompt:
      "सिनेमैटिक फैशन फिल्म: अंधेरे मिनिमल स्टूडियो में एक स्पॉटलाइट के नीचे चांदी की मेटैलिक पोशाक में मॉडल, चमकदार फ्लोर रिफ्लेक्शन, स्लो डॉली, हाइपर-रियलिस्टिक 8K, वॉल्यूमेट्रिक धुंध, हाई-कॉन्ट्रास्ट लाइटिंग, एनामॉर्फिक लुक।",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "मैड मैक्स",
    tagIcon: "smart_toy",
    prompt:
      "लो-एंगल ट्रैकिंग शॉट: धूप वाली रेगिस्तानी हाइवे पर दौड़ता बाइकर, कवच वाला राइडर, धूल उड़ाते रोते ट्रक, मैड मैक्स चेस वाइब, सिनेमैटिक टील-ऑरेंज ग्रेड, 4K, मोशन ब्लर।",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "स्पेस ड्रिफ्ट",
    tagIcon: "grass",
    prompt:
      "सिनेमैटिक ऑर्बिटल शॉट: पृथ्वी के घुमावदार क्षितिज पर क्षतिग्रस्त उपग्रह के पास तैरता अकेला अंतरिक्ष यात्री, सूर्योदय लेंस फ्लेयर, तैरते मलबे, धीरे घूमता कैमरा, अल्ट्रा-रियल 4K, डीप स्पेस कॉन्ट्रास्ट।",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "नीयन साइबरपंक",
    tagIcon: "movie_filter",
    prompt:
      "सिनेमैटिक स्ट्रीट-लेवल शॉट: नियो-टोक्यो की बारिश में नीयन गली में चलती हुड वाली आकृति, भाप निकलने वाले वेंट, गीली सड़क पर रिफ्लेक्शन, साइबरपंक वाइब, अल्ट्रा-रियल 8K, वॉल्यूमेट्रिक कोहरा।",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const featuredPromptsRu: FeaturedPromptEntry[] = [
  {
    id: "cinematic",
    tag: "Металлическая высокая мода",
    tagIcon: "movie",
    prompt:
      "Кинематографическая модная съёмка: модель в серебристом металлическом платье под одним прожектором в тёмной минималистичной студии, отражения на глянцевом полу, медленный проезд, гиперреалистичный 8K, объёмная дымка, контрастное освещение, анаморфный вид.",
    gradient: "from-violet-900/80 via-fuchsia-900/60 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021351721_prompt-1.mp4",
  },
  {
    id: "3d",
    tag: "Безумный Макс",
    tagIcon: "smart_toy",
    prompt:
      "Съёмка с нижнего ракурса: байкер мчится по солнечному пустынному шоссе, бронированный всадник, ревущие грузовики поднимают пыль, атмосфера погони Безумный Макс, кинематографичная цветокоррекция тил-оранж, 4K, размытие в движении.",
    gradient: "from-amber-900/60 via-orange-800/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021378304_prompt-2.mp4",
  },
  {
    id: "macro",
    tag: "Космический дрейф",
    tagIcon: "grass",
    prompt:
      "Кинематографичный орбитальный кадр: одинокий космонавт дрейфует у повреждённого спутника над изогнутым горизонтом Земли, блик восхода, плавающие обломки, медленно вращающаяся камера, ультрареалистичный 4K, контраст глубокого космоса.",
    gradient: "from-emerald-900/70 via-teal-900/50 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021419297_prompt-4.mp4",
  },
  {
    id: "vintage",
    tag: "Неоновый киберпанк",
    tagIcon: "movie_filter",
    prompt:
      "Кинематографичный уличный кадр: фигура в капюшоне идёт по неоновому переулку под дождём в Нео-Токио, паровые люки, отражения на мокром асфальте, киберпанк-атмосфера, ультрареалистичный 8K, объёмный туман.",
    gradient: "from-stone-700/70 via-amber-900/30 to-slate-900",
    videoUrl: "https://img.virax.ai/admin_videos/1770021399017_prompt-3.mp4",
  },
];

const faqEn: FAQItem[] = [
  {
    question: "What is Veo 3.2?",
    answer:
      "Veo 3.2 is an advanced AI model for both image and video generation. It converts text prompts into high-quality visuals using cutting-edge AI algorithms. This makes text-to-image and text-to-video creation fast and efficient.",
  },
  {
    question: "What are the key features of Veo 3.2?",
    answer:
      "Veo 3.2 supports AI image generation, AI video generation, text-to-image, and text-to-video capabilities. It offers high-resolution output, motion consistency, and customizable style control. These features make it ideal for creative and commercial projects.",
  },
  {
    question: "How does Veo 3.2 differ from other AI models?",
    answer:
      "Compared to other AI models, Veo 3.2 produces more realistic visuals and smoother video generation. Its advanced text-to-image and text-to-video algorithms ensure better style consistency and motion accuracy.",
  },
  {
    question: "Can I customize the style of the generated content?",
    answer:
      "Yes, Veo 3.2 allows full style customization for both images and videos. Users can control visual elements, color tones, and motion effects to match their creative vision.",
  },
  {
    question: "How can I get started with Veo 3.2?",
    answer:
      "To get started, sign up on the Veo platform and enter your text prompts. Veo 3.2 will generate AI images and videos quickly, ready for creative or commercial use.",
  },
];

const faqEs: FAQItem[] = [
  {
    question: "¿Qué es Veo 3.2?",
    answer:
      "Veo 3.2 es un modelo de IA avanzado para generación de imágenes y vídeo. Convierte textos en visuales de alta calidad mediante algoritmos de IA de vanguardia. Esto hace que la creación de imagen y vídeo a partir de texto sea rápida y eficiente.",
  },
  {
    question: "¿Cuáles son las características principales de Veo 3.2?",
    answer:
      "Veo 3.2 ofrece generación de imágenes y vídeo por IA, y capacidades de texto a imagen y texto a vídeo. Ofrece salida en alta resolución, coherencia de movimiento y control de estilo personalizable. Estas características lo hacen ideal para proyectos creativos y comerciales.",
  },
  {
    question: "¿En qué se diferencia Veo 3.2 de otros modelos de IA?",
    answer:
      "En comparación con otros modelos, Veo 3.2 produce visuales más realistas y una generación de vídeo más fluida. Sus algoritmos avanzados de texto a imagen y texto a vídeo garantizan mejor coherencia de estilo y precisión de movimiento.",
  },
  {
    question: "¿Puedo personalizar el estilo del contenido generado?",
    answer:
      "Sí, Veo 3.2 permite personalizar por completo el estilo tanto de imágenes como de vídeos. Los usuarios pueden controlar elementos visuales, tonos de color y efectos de movimiento según su visión creativa.",
  },
  {
    question: "¿Cómo puedo empezar con Veo 3.2?",
    answer:
      "Para empezar, regístrate en la plataforma Veo e introduce tus textos. Veo 3.2 generará imágenes y vídeos de IA rápidamente, listos para uso creativo o comercial.",
  },
];

const faqFr: FAQItem[] = [
  {
    question: "Qu'est-ce que Veo 3.2 ?",
    answer:
      "Veo 3.2 est un modèle d'IA avancé pour la génération d'images et de vidéos. Il transforme des textes en visuels de haute qualité grâce à des algorithmes d'IA de pointe. La création image et vidéo à partir de texte devient rapide et efficace.",
  },
  {
    question: "Quelles sont les principales fonctionnalités de Veo 3.2 ?",
    answer:
      "Veo 3.2 propose la génération d'images et de vidéos par IA, ainsi que le passage du texte à l'image et à la vidéo. Il offre une sortie haute résolution, une cohérence du mouvement et un contrôle du style personnalisable. Idéal pour les projets créatifs et commerciaux.",
  },
  {
    question: "En quoi Veo 3.2 diffère-t-il des autres modèles d'IA ?",
    answer:
      "Par rapport aux autres modèles, Veo 3.2 produit des visuels plus réalistes et une génération vidéo plus fluide. Ses algorithmes avancés texte-image et texte-vidéo assurent une meilleure cohérence de style et précision du mouvement.",
  },
  {
    question: "Puis-je personnaliser le style du contenu généré ?",
    answer:
      "Oui, Veo 3.2 permet une personnalisation complète du style pour les images et les vidéos. Les utilisateurs peuvent contrôler les éléments visuels, les tons de couleur et les effets de mouvement selon leur vision créative.",
  },
  {
    question: "Comment démarrer avec Veo 3.2 ?",
    answer:
      "Pour commencer, inscrivez-vous sur la plateforme Veo et saisissez vos textes. Veo 3.2 générera rapidement des images et vidéos IA, prêtes pour un usage créatif ou commercial.",
  },
];

const faqDe: FAQItem[] = [
  {
    question: "Was ist Veo 3.2?",
    answer:
      "Veo 3.2 ist ein fortgeschrittenes KI-Modell für Bild- und Videogenerierung. Es wandelt Textprompts in hochwertige Visuals mit modernsten KI-Algorithmen um. So wird Text-zu-Bild- und Text-zu-Video-Erstellung schnell und effizient.",
  },
  {
    question: "Was sind die wichtigsten Funktionen von Veo 3.2?",
    answer:
      "Veo 3.2 unterstützt KI-Bild- und Videogenerierung sowie Text-zu-Bild- und Text-zu-Video. Es bietet hohe Auflösung, Bewegungskohärenz und anpassbare Stilsteuerung. Ideal für kreative und kommerzielle Projekte.",
  },
  {
    question: "Wie unterscheidet sich Veo 3.2 von anderen KI-Modellen?",
    answer:
      "Im Vergleich zu anderen Modellen erzeugt Veo 3.2 realistischere Visuals und flüssigere Videogenerierung. Seine fortgeschrittenen Text-zu-Bild- und Text-zu-Video-Algorithmen sorgen für bessere Stilkonsistenz und Bewegungsgenauigkeit.",
  },
  {
    question: "Kann ich den Stil des generierten Inhalts anpassen?",
    answer:
      "Ja, Veo 3.2 ermöglicht volle Stilanpassung für Bilder und Videos. Nutzer können visuelle Elemente, Farbtöne und Bewegungseffekte nach ihrer kreativen Vision steuern.",
  },
  {
    question: "Wie starte ich mit Veo 3.2?",
    answer:
      "Registrieren Sie sich auf der Veo-Plattform und geben Sie Ihre Textprompts ein. Veo 3.2 erzeugt schnell KI-Bilder und -Videos, bereit für kreative oder kommerzielle Nutzung.",
  },
];

const faqIt: FAQItem[] = [
  {
    question: "Cos'è Veo 3.2?",
    answer:
      "Veo 3.2 è un modello IA avanzato per la generazione di immagini e video. Converte i prompt di testo in visual di alta qualità grazie ad algoritmi IA all'avanguardia. La creazione da testo a immagine e video è veloce ed efficiente.",
  },
  {
    question: "Quali sono le funzionalità principali di Veo 3.2?",
    answer:
      "Veo 3.2 supporta generazione di immagini e video con IA, nonché testo-immagine e testo-video. Offre uscita ad alta risoluzione, coerenza del movimento e controllo dello stile personalizzabile. Ideale per progetti creativi e commerciali.",
  },
  {
    question: "In cosa si differenzia Veo 3.2 dagli altri modelli IA?",
    answer:
      "Rispetto ad altri modelli, Veo 3.2 produce visual più realistici e una generazione video più fluida. I suoi algoritmi avanzati testo-immagine e testo-video garantiscono migliore coerenza di stile e precisione del movimento.",
  },
  {
    question: "Posso personalizzare lo stile del contenuto generato?",
    answer:
      "Sì, Veo 3.2 consente la piena personalizzazione dello stile per immagini e video. Gli utenti possono controllare elementi visivi, toni di colore ed effetti di movimento secondo la propria visione creativa.",
  },
  {
    question: "Come posso iniziare con Veo 3.2?",
    answer:
      "Per iniziare, registrati sulla piattaforma Veo e inserisci i tuoi prompt di testo. Veo 3.2 genererà rapidamente immagini e video IA, pronti per uso creativo o commerciale.",
  },
];

const faqJp: FAQItem[] = [
  {
    question: "Veo 3.2とは？",
    answer:
      "Veo 3.2は画像と動画の生成のための高度なAIモデルです。最先端のAIアルゴリズムでテキストプロンプトを高品質なビジュアルに変換します。テキストから画像・動画を作成する作業を高速かつ効率的にします。",
  },
  {
    question: "Veo 3.2の主な機能は？",
    answer:
      "Veo 3.2はAI画像・動画生成、テキストから画像・動画への変換をサポートしています。高解像度出力、モーションの一貫性、カスタマイズ可能なスタイル制御を提供し、クリエイティブおよび商用プロジェクトに最適です。",
  },
  {
    question: "Veo 3.2は他のAIモデルとどう違いますか？",
    answer:
      "他のモデルと比較して、Veo 3.2はよりリアルなビジュアルとスムーズな動画生成を実現します。高度なテキスト―画像・テキスト―動画アルゴリズムにより、スタイルの一貫性とモーションの精度が向上します。",
  },
  {
    question: "生成コンテンツのスタイルはカスタマイズできますか？",
    answer:
      "はい。Veo 3.2では画像・動画のスタイルを完全にカスタマイズできます。ユーザーはビジュアル要素、色調、モーション効果をクリエイティブなビジョンに合わせて制御できます。",
  },
  {
    question: "Veo 3.2の使い方は？",
    answer:
      "Veoプラットフォームに登録し、テキストプロンプトを入力してください。Veo 3.2がすぐにAI画像・動画を生成し、クリエイティブまたは商用利用の準備が整います。",
  },
];

const faqBr: FAQItem[] = [
  {
    question: "O que é o Veo 3.2?",
    answer:
      "Veo 3.2 é um modelo de IA avançado para geração de imagens e vídeos. Ele converte prompts de texto em visuais de alta qualidade usando algoritmos de IA de ponta. Isso torna a criação de imagem e vídeo a partir de texto rápida e eficiente.",
  },
  {
    question: "Quais são as principais funcionalidades do Veo 3.2?",
    answer:
      "Veo 3.2 suporta geração de imagens e vídeos por IA, além de texto para imagem e texto para vídeo. Oferece saída em alta resolução, consistência de movimento e controle de estilo personalizável. Ideal para projetos criativos e comerciais.",
  },
  {
    question: "Como o Veo 3.2 se diferencia de outros modelos de IA?",
    answer:
      "Em comparação com outros modelos, o Veo 3.2 produz visuais mais realistas e geração de vídeo mais fluida. Seus algoritmos avançados de texto para imagem e vídeo garantem melhor consistência de estilo e precisão de movimento.",
  },
  {
    question: "Posso personalizar o estilo do conteúdo gerado?",
    answer:
      "Sim, o Veo 3.2 permite personalização completa do estilo para imagens e vídeos. Os usuários podem controlar elementos visuais, tons de cor e efeitos de movimento de acordo com sua visão criativa.",
  },
  {
    question: "Como começar a usar o Veo 3.2?",
    answer:
      "Para começar, cadastre-se na plataforma Veo e insira seus prompts de texto. O Veo 3.2 gerará imagens e vídeos de IA rapidamente, prontos para uso criativo ou comercial.",
  },
];

const faqKr: FAQItem[] = [
  {
    question: "Veo 3.2란?",
    answer:
      "Veo 3.2는 이미지와 동영상 생성을 위한 고급 AI 모델입니다. 최신 AI 알고리즘으로 텍스트 프롬프트를 고품질 비주얼로 변환합니다. 텍스트에서 이미지·동영상을 만드는 작업을 빠르고 효율적으로 합니다.",
  },
  {
    question: "Veo 3.2의 주요 기능은?",
    answer:
      "Veo 3.2는 AI 이미지·동영상 생성, 텍스트-이미지·텍스트-동영상 변환을 지원합니다. 고해상도 출력, 모션 일관성, 맞춤형 스타일 제어를 제공하며, 크리에이티브 및 상업용 프로젝트에 적합합니다.",
  },
  {
    question: "Veo 3.2는 다른 AI 모델과 어떻게 다르나요?",
    answer:
      "다른 모델과 비교해 Veo 3.2는 더 사실적인 비주얼과 부드러운 동영상 생성을 제공합니다. 고급 텍스트-이미지·텍스트-동영상 알고리즘으로 스타일 일관성과 모션 정확도가 향상됩니다.",
  },
  {
    question: "생성 콘텐츠의 스타일을 맞춤 설정할 수 있나요?",
    answer:
      "네. Veo 3.2는 이미지와 동영상의 스타일을 완전히 맞춤 설정할 수 있습니다. 사용자는 비주얼 요소, 색조, 모션 효과를 창작 의도에 맞게 제어할 수 있습니다.",
  },
  {
    question: "Veo 3.2 사용 방법은?",
    answer:
      "Veo 플랫폼에 가입한 뒤 텍스트 프롬프트를 입력하세요. Veo 3.2가 곧바로 AI 이미지·동영상을 생성하며, 크리에이티브 또는 상업적 이용에 바로 사용할 수 있습니다.",
  },
];

const faqTw: FAQItem[] = [
  {
    question: "什麼是 Veo 3.2？",
    answer:
      "Veo 3.2 是專為影像與影片生成設計的先進 AI 模型。它以前沿 AI 演算法將文字提示轉為高品質視覺。讓從文字到影像、影片的創作更快速、更有效率。",
  },
  {
    question: "Veo 3.2 的主要功能有哪些？",
    answer:
      "Veo 3.2 支援 AI 影像與影片生成，以及文字轉影像、文字轉影片。提供高解析度輸出、動態一致性與可自訂的風格控制，適合創意與商業專案。",
  },
  {
    question: "Veo 3.2 與其他 AI 模型有何不同？",
    answer:
      "相較其他模型，Veo 3.2 能產出更逼真的視覺與更流暢的影片生成。其進階文字—影像與文字—影片演算法，帶來更好的風格一致性與動態精準度。",
  },
  {
    question: "可以自訂生成內容的風格嗎？",
    answer:
      "可以。Veo 3.2 支援對影像與影片的風格完整自訂。使用者可依創作需求控制視覺元素、色調與動態效果。",
  },
  {
    question: "如何開始使用 Veo 3.2？",
    answer:
      "請在 Veo 平台註冊並輸入您的文字提示。Veo 3.2 會快速生成 AI 影像與影片，可直接用於創意或商業用途。",
  },
];

const faqIn: FAQItem[] = [
  {
    question: "Veo 3.2 क्या है?",
    answer:
      "Veo 3.2 इमेज और वीडियो जनरेशन के लिए एक एडवांस्ड AI मॉडल है। यह कटिंग-एज AI एल्गोरिदम से टेक्स्ट प्रॉम्प्ट को हाई-क्वालिटी विज़ुअल में बदलता है। टेक्स्ट से इमेज और वीडियो बनाना तेज़ और कुशल बनाता है।",
  },
  {
    question: "Veo 3.2 की मुख्य सुविधाएं क्या हैं?",
    answer:
      "Veo 3.2 AI इमेज और वीडियो जनरेशन, टेक्स्ट-टू-इमेज और टेक्स्ट-टू-वीडियो सपोर्ट करता है। हाई रिज़ॉल्यूशन आउटपुट, मोशन कंसिस्टेंसी और कस्टमाइज़ेबल स्टाइल कंट्रोल देता है। क्रिएटिव और कॉमर्शियल प्रोजेक्ट के लिए आदर्श।",
  },
  {
    question: "Veo 3.2 अन्य AI मॉडल से कैसे अलग है?",
    answer:
      "दूसरे मॉडल की तुलना में Veo 3.2 ज़्यादा रियलिस्टिक विज़ुअल और स्मूद वीडियो जनरेशन देता है। इसके एडवांस्ड टेक्स्ट-टू-इमेज और टेक्स्ट-टू-वीडियो एल्गोरिदम बेहतर स्टाइल कंसिस्टेंसी और मोशन एक्युरेसी देते हैं।",
  },
  {
    question: "क्या मैं जनरेट कंटेंट का स्टाइल कस्टमाइज़ कर सकता हूं?",
    answer:
      "हां, Veo 3.2 इमेज और वीडियो दोनों के लिए पूरा स्टाइल कस्टमाइज़ेशन देता है। यूजर विज़ुअल एलिमेंट, कलर टोन और मोशन इफेक्ट को अपनी क्रिएटिव विज़न के हिसाब से कंट्रोल कर सकते हैं।",
  },
  {
    question: "Veo 3.2 के साथ कैसे शुरू करें?",
    answer:
      "शुरू करने के लिए Veo प्लेटफॉर्म पर साइन अप करें और अपने टेक्स्ट प्रॉम्प्ट डालें। Veo 3.2 जल्दी AI इमेज और वीडियो जनरेट करेगा, क्रिएटिव या कॉमर्शियल इस्तेमाल के लिए तैयार।",
  },
];

const faqRu: FAQItem[] = [
  {
    question: "Что такое Veo 3.2?",
    answer:
      "Veo 3.2 — продвинутая AI-модель для генерации изображений и видео. Она превращает текстовые промпты в качественную картинку с помощью передовых AI-алгоритмов. Создание изображений и видео из текста становится быстрым и эффективным.",
  },
  {
    question: "Какие основные возможности у Veo 3.2?",
    answer:
      "Veo 3.2 поддерживает AI-генерацию изображений и видео, текст в изображение и текст в видео. Высокое разрешение, согласованность движения и настраиваемый стиль. Идеально для творческих и коммерческих проектов.",
  },
  {
    question: "Чем Veo 3.2 отличается от других AI-моделей?",
    answer:
      "По сравнению с другими моделями Veo 3.2 даёт более реалистичную картинку и плавную генерацию видео. Его продвинутые алгоритмы текст–изображение и текст–видео обеспечивают лучшую согласованность стиля и точность движения.",
  },
  {
    question: "Можно ли настраивать стиль сгенерированного контента?",
    answer:
      "Да, Veo 3.2 позволяет полностью настраивать стиль для изображений и видео. Пользователи могут управлять визуальными элементами, цветами и эффектами движения под свой творческий замысел.",
  },
  {
    question: "Как начать пользоваться Veo 3.2?",
    answer:
      "Зарегистрируйтесь на платформе Veo и введите текстовые промпты. Veo 3.2 быстро сгенерирует AI-изображения и видео, готовые для творческого или коммерческого использования.",
  },
];

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      features: "Features",
      gallery: "Gallery",
      pricing: "Pricing",
      api: "API",
      logIn: "Log in",
      getStarted: "Get Started",
    },
    hero: {
      titleLine1: "Create Magic with",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 transforms your wildest imaginations into cinematic 8K reality. The frontier of AI cinematography is here.",
      placeholder: "A futuristic samurai standing in the rain of Neo-Tokyo...",
      cta: "Try Veo 3.2 Now",
      trendingStyles: "Trending Styles:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Community Showcase Created by Veo 3.2",
      subtitle: "Real results generated by creators around the world.",
      trending: "Trending",
      cinematic: "Cinematic",
      anime: "Anime",
      videoLabel: (n) => `Video showcase #${n}`,
      exploreAll: "Explore All Creations",
    },
    comparison: {
      title: "Why",
      titleSuffix: "Veo 3.2",
      titleEnd: "Leads the Field",
      subtitle:
        "Comparing the giants of AI video generation in 2026. Which model delivers the best cinematic realism, motion coherence, and prompt adherence? See why Veo 3.2 is the new industry standard.",
      tableFeature: "Feature",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Winner 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsEn,
      cardVeoTitle: "Veo 3.2 — The Cinematic Powerhouse",
      cardVeoBody:
        "Built on DeepMind's latest transformer architecture, Veo 3.2 represents a quantum leap in semantic understanding. Unlike its predecessors, Veo 3.2 captures the nuances of 'cinematic lighting' and 'camera movement' with pixel-perfect accuracy. It excels in maintaining character consistency across long clips, making it the preferred choice for storytellers and filmmakers in 2026.",
      cardVeo1: "Best-in-class prompt adherence",
      cardVeo2: "1080p+ native resolution",
      cardVeo3: "Consistent character identity",
      cardSoraTitle: "OpenAI Sora — The Physics Simulator",
      cardSoraBody:
        "Sora remains a strong contender with its deep understanding of physical world simulation. It handles complex object interactions and fluid dynamics exceptionally well. However, its access remains limited, and it often struggles with specific camera control directives compared to Veo 3.2.",
      cardSora1: "Realistic physics engine",
      cardSora2: "Complex scene transitions",
      cardRunwayTitle: "Runway Gen-3 Alpha — The Artist's Tool",
      cardRunwayBody:
        "Runway Gen-3 continues to offer granular control for editors with features like Motion Brush and Director Mode. While it offers high artistic freedom, Veo 3.2 surpasses it in raw generation speed and prompt comprehension for zero-shot video creation.",
      cardRunway1: "Fine-tuned motion controls",
      cardRunway2: "Artistic style transfer",
      bottomParagraph:
        "While Sora simulates the world and Runway paints it, Veo 3.2 understands it. For users seeking the best balance of speed, quality, and accessibility, Veo 3.2 is the clear winner for 2026 video generation.",
      cta: "Try Veo 3.2 for Free Now",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Featured Prompts",
      subtitle: "Hand-picked prompts to get the best out of Veo 3.2. Copy and try them in your next creation.",
      copy: "Copy",
      copied: "Copied!",
      copyAria: "Copy prompt",
      copiedAria: "Copied!",
      prompts: featuredPromptsEn,
    },
    evolution: {
      title: "Evolution: From Veo 3.1 to",
      titleSuffix: "3.2",
      subtitle:
        "Google's Veo 3.1 introduced \"Ingredients to Video\"—turning reference images into expressive, high-quality clips with strong consistency. Veo 3.2 builds on that foundation with a leap in visual fidelity, creative control, and speed: from broadcast-ready quality to cinematic 8K, from ingredient-based workflows to director-level camera control, and from fast generation to real-time latency.",
      aspect: "Aspect",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Visual Quality",
      visualQuality31: "High quality · 1080p / 4K upscaling",
      visualQuality32: "Cinematic 8K (IMAX Standard)",
      control: "Control",
      control31: "Ingredients to Video · reference images",
      control32: "Directorial Control · precise camera movement",
      speed: "Speed",
      speed31: "Fast generation",
      speed32: "Real-time latency (zero delay)",
    },
    threeSteps: {
      title: "Simple. Fast.",
      titleSuffix: "Stunning.",
      subtitle: "Create professional-grade video content in three simple steps using our next-generation engine.",
      step1Title: "1. Input Prompt",
      step1Body:
        "Type your vision in any language. Be as detailed or as simple as you like—Veo understands nuance.",
      step2Title: "2. AI Processing",
      step2Body:
        "Our 3.2 engine processes frames in real-time, handling physics, lighting, and textures with precision.",
      step3Title: "3. Download Masterpiece",
      step3Body:
        "Export your creation in up to 8K resolution, ready for film, social media, or professional workflows.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about the Veo 3.2 platform.",
      items: faqEn,
    },
    footer: {
      tagline: "Veo32.ai empowers the next generation of storytellers with world-class artificial intelligence.",
      copyright: "© 2026 Veo Technologies. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    aria: {
      heroVideo: "Veo 3.2 hero video showcasing AI-generated cinematic content",
      navVirax: "Navigate to ViraX",
      showcaseVideo: (n, tab) => `Community showcase video ${n} from ${tab} collection`,
      styleLabel: (style) => `Trending style: ${style}`,
      featuredPrompt: (tag) => `Featured prompt: ${tag}`,
    },
  },
  es: {
    nav: {
      features: "Características",
      gallery: "Galería",
      pricing: "Precios",
      api: "API",
      logIn: "Iniciar sesión",
      getStarted: "Comenzar",
    },
    hero: {
      titleLine1: "Crea magia con",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 convierte tu imaginación en realidad cinematográfica en 8K. La frontera de la cinematografía con IA está aquí.",
      placeholder: "Un samurái futurista bajo la lluvia en Neo-Tokyo...",
      cta: "Probar Veo 3.2 ahora",
      trendingStyles: "Estilos en tendencia:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Muestra de la comunidad creada con Veo 3.2",
      subtitle: "Resultados reales generados por creadores de todo el mundo.",
      trending: "Tendencias",
      cinematic: "Cinematográfico",
      anime: "Anime",
      videoLabel: (n) => `Vídeo muestra #${n}`,
      exploreAll: "Explorar todas las creaciones",
    },
    comparison: {
      title: "Por qué",
      titleSuffix: "Veo 3.2",
      titleEnd: "lidera el sector",
      subtitle:
        "Comparando los gigantes de la generación de vídeo por IA en 2026. ¿Qué modelo ofrece el mejor realismo cinematográfico, coherencia de movimiento y fidelidad al prompt? Descubre por qué Veo 3.2 es el nuevo estándar de la industria.",
      tableFeature: "Característica",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Ganador 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsEs,
      cardVeoTitle: "Veo 3.2 — El motor cinematográfico",
      cardVeoBody:
        "Basado en la última arquitectura transformer de DeepMind, Veo 3.2 representa un salto cualitativo en comprensión semántica. A diferencia de sus predecesores, captura los matices de la 'iluminación cinematográfica' y el 'movimiento de cámara' con precisión pixel a pixel. Destaca en la consistencia de personajes en clips largos, siendo la opción preferida para narradores y cineastas en 2026.",
      cardVeo1: "Máxima fidelidad al prompt",
      cardVeo2: "Resolución nativa 1080p+",
      cardVeo3: "Identidad de personaje consistente",
      cardSoraTitle: "OpenAI Sora — El simulador físico",
      cardSoraBody:
        "Sora sigue siendo un rival fuerte con su profunda comprensión de la simulación del mundo físico. Maneja excepcionalmente bien las interacciones de objetos complejos y la dinámica de fluidos. Sin embargo, su acceso sigue siendo limitado y a menudo tiene dificultades con directivas específicas de control de cámara en comparación con Veo 3.2.",
      cardSora1: "Motor de física realista",
      cardSora2: "Transiciones de escena complejas",
      cardRunwayTitle: "Runway Gen-3 Alpha — La herramienta del artista",
      cardRunwayBody:
        "Runway Gen-3 sigue ofreciendo control granular para editores con funciones como Motion Brush y Director Mode. Aunque ofrece gran libertad artística, Veo 3.2 lo supera en velocidad de generación y comprensión del prompt para la creación de vídeo zero-shot.",
      cardRunway1: "Control de movimiento afinado",
      cardRunway2: "Transferencia de estilo artístico",
      bottomParagraph:
        "Mientras Sora simula el mundo y Runway lo pinta, Veo 3.2 lo comprende. Para quienes buscan el mejor equilibrio entre velocidad, calidad y accesibilidad, Veo 3.2 es el claro ganador en generación de vídeo 2026.",
      cta: "Probar Veo 3.2 gratis ahora",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Prompts destacados",
      subtitle: "Prompts seleccionados para sacar el máximo partido a Veo 3.2. Copia y pruébalos en tu próxima creación.",
      copy: "Copiar",
      copied: "¡Copiado!",
      copyAria: "Copiar prompt",
      copiedAria: "¡Copiado!",
      prompts: featuredPromptsEs,
    },
    evolution: {
      title: "Evolución: de Veo 3.1 a",
      titleSuffix: "3.2",
      subtitle:
        "Veo 3.1 de Google introdujo \"Ingredientes a vídeo\": convertir imágenes de referencia en clips expresivos y de alta calidad con gran consistencia. Veo 3.2 se basa en eso con un salto en fidelidad visual, control creativo y velocidad: de calidad lista para emisión a 8K cinematográfico, de flujos basados en ingredientes a control de cámara de nivel director, y de generación rápida a latencia en tiempo real.",
      aspect: "Aspecto",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Calidad visual",
      visualQuality31: "Alta calidad · 1080p / 4K escalado",
      visualQuality32: "8K cinematográfico (estándar IMAX)",
      control: "Control",
      control31: "Ingredientes a vídeo · imágenes de referencia",
      control32: "Control de dirección · movimiento de cámara preciso",
      speed: "Velocidad",
      speed31: "Generación rápida",
      speed32: "Latencia en tiempo real (sin retraso)",
    },
    threeSteps: {
      title: "Simple. Rápido.",
      titleSuffix: "Impresionante.",
      subtitle: "Crea contenido de vídeo de nivel profesional en tres pasos con nuestro motor de nueva generación.",
      step1Title: "1. Escribe el prompt",
      step1Body:
        "Escribe tu visión en cualquier idioma. Con el detalle que quieras: Veo entiende los matices.",
      step2Title: "2. Procesamiento con IA",
      step2Body:
        "Nuestro motor 3.2 procesa los fotogramas en tiempo real, con física, iluminación y texturas precisas.",
      step3Title: "3. Descarga tu obra",
      step3Body:
        "Exporta tu creación hasta 8K, lista para cine, redes sociales o flujos profesionales.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Todo lo que necesitas saber sobre la plataforma Veo 3.2.",
      items: faqEs,
    },
    footer: {
      tagline: "Veo32.ai impulsa la próxima generación de narradores con inteligencia artificial de primer nivel.",
      copyright: "© 2026 Veo Technologies. Todos los derechos reservados.",
      terms: "Términos",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
    aria: {
      heroVideo: "Vídeo hero de Veo 3.2 con contenido cinematográfico generado por IA",
      navVirax: "Ir a ViraX",
      showcaseVideo: (n, tab) => `Vídeo de muestra ${n} de la colección ${tab}`,
      styleLabel: (style) => `Estilo en tendencia: ${style}`,
      featuredPrompt: (tag) => `Prompt destacado: ${tag}`,
    },
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      gallery: "Galerie",
      pricing: "Tarifs",
      api: "API",
      logIn: "Connexion",
      getStarted: "Commencer",
    },
    hero: {
      titleLine1: "Créez la magie avec",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 transforme votre imagination en réalité cinématographique 8K. La frontière de la cinématographie IA est là.",
      placeholder: "Un samouraï futuriste sous la pluie à Neo-Tokyo...",
      cta: "Essayer Veo 3.2 maintenant",
      trendingStyles: "Styles tendance :",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Vitrine communautaire créée avec Veo 3.2",
      subtitle: "Résultats réels générés par des créateurs du monde entier.",
      trending: "Tendances",
      cinematic: "Cinématique",
      anime: "Anime",
      videoLabel: (n) => `Vidéo showcase #${n}`,
      exploreAll: "Explorer toutes les créations",
    },
    comparison: {
      title: "Pourquoi",
      titleSuffix: "Veo 3.2",
      titleEnd: "mène le secteur",
      subtitle:
        "Comparaison des géants de la génération vidéo IA en 2026. Quel modèle offre le meilleur réalisme cinématographique, cohérence du mouvement et fidélité au prompt ? Découvrez pourquoi Veo 3.2 est le nouveau standard de l'industrie.",
      tableFeature: "Caractéristique",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Gagnant 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsFr,
      cardVeoTitle: "Veo 3.2 — Le moteur cinématographique",
      cardVeoBody:
        "Basé sur la dernière architecture transformer de DeepMind, Veo 3.2 représente un bond en avant dans la compréhension sémantique. Contrairement à ses prédécesseurs, il capture les nuances de l'éclairage et du mouvement de caméra cinématographiques avec une précision pixel par pixel. Il excelle dans la cohérence des personnages sur les longs plans, en faisant le choix privilégié des storytellers et cinéastes en 2026.",
      cardVeo1: "Fidélité au prompt inégalée",
      cardVeo2: "Résolution native 1080p+",
      cardVeo3: "Identité de personnage cohérente",
      cardSoraTitle: "OpenAI Sora — Le simulateur physique",
      cardSoraBody:
        "Sora reste un concurrent sérieux grâce à sa compréhension approfondie de la simulation du monde physique. Il gère exceptionnellement bien les interactions d'objets complexes et la dynamique des fluides. Son accès reste toutefois limité et il peine souvent sur les directives de contrôle de caméra par rapport à Veo 3.2.",
      cardSora1: "Moteur physique réaliste",
      cardSora2: "Transitions de scène complexes",
      cardRunwayTitle: "Runway Gen-3 Alpha — L'outil de l'artiste",
      cardRunwayBody:
        "Runway Gen-3 continue d'offrir un contrôle granulaire aux monteurs avec Motion Brush et Director Mode. S'il offre une grande liberté artistique, Veo 3.2 le dépasse en vitesse de génération et en compréhension du prompt pour la création vidéo zero-shot.",
      cardRunway1: "Contrôles du mouvement affinés",
      cardRunway2: "Transfert de style artistique",
      bottomParagraph:
        "Alors que Sora simule le monde et Runway le peint, Veo 3.2 le comprend. Pour ceux qui cherchent le meilleur équilibre entre vitesse, qualité et accessibilité, Veo 3.2 est le vainqueur clair pour la génération vidéo 2026.",
      cta: "Essayer Veo 3.2 gratuitement maintenant",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Prompts à la une",
      subtitle: "Prompts sélectionnés pour tirer le meilleur de Veo 3.2. Copiez et testez-les dans votre prochaine création.",
      copy: "Copier",
      copied: "Copié !",
      copyAria: "Copier le prompt",
      copiedAria: "Copié !",
      prompts: featuredPromptsFr,
    },
    evolution: {
      title: "Évolution : de Veo 3.1 à",
      titleSuffix: "3.2",
      subtitle:
        "Veo 3.1 de Google a introduit « Ingredients to Video » : transformer des images de référence en clips expressifs et de haute qualité avec une forte cohérence. Veo 3.2 s'appuie sur cette base avec un bond en fidélité visuelle, contrôle créatif et vitesse : de la qualité broadcast au 8K cinématographique, des flux basés sur les ingrédients au contrôle caméra niveau réalisateur, et de la génération rapide à la latence temps réel.",
      aspect: "Aspect",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Qualité visuelle",
      visualQuality31: "Haute qualité · 1080p / 4K upscaling",
      visualQuality32: "8K cinématographique (norme IMAX)",
      control: "Contrôle",
      control31: "Ingredients to Video · images de référence",
      control32: "Contrôle de la réalisation · mouvement de caméra précis",
      speed: "Vitesse",
      speed31: "Génération rapide",
      speed32: "Latence temps réel (zéro délai)",
    },
    threeSteps: {
      title: "Simple. Rapide.",
      titleSuffix: "Époustouflant.",
      subtitle: "Créez du contenu vidéo professionnel en trois étapes avec notre moteur de nouvelle génération.",
      step1Title: "1. Saisir le prompt",
      step1Body:
        "Décrivez votre vision dans n'importe quelle langue. Avec autant de détails que vous voulez : Veo comprend les nuances.",
      step2Title: "2. Traitement IA",
      step2Body:
        "Notre moteur 3.2 traite les images en temps réel, avec précision pour la physique, l'éclairage et les textures.",
      step3Title: "3. Télécharger votre œuvre",
      step3Body:
        "Exportez votre création jusqu'en 8K, prête pour le cinéma, les réseaux sociaux ou les flux professionnels.",
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir sur la plateforme Veo 3.2.",
      items: faqFr,
    },
    footer: {
      tagline: "Veo32.ai accompagne la nouvelle génération de storytellers avec une intelligence artificielle de premier plan.",
      copyright: "© 2026 Veo Technologies. Tous droits réservés.",
      terms: "Conditions",
      privacy: "Confidentialité",
      cookies: "Cookies",
    },
    aria: {
      heroVideo: "Vidéo hero Veo 3.2 présentant du contenu cinématographique généré par IA",
      navVirax: "Aller sur ViraX",
      showcaseVideo: (n, tab) => `Vidéo showcase ${n} de la collection ${tab}`,
      styleLabel: (style) => `Style tendance : ${style}`,
      featuredPrompt: (tag) => `Prompt à la une : ${tag}`,
    },
  },
  de: {
    nav: {
      features: "Funktionen",
      gallery: "Galerie",
      pricing: "Preise",
      api: "API",
      logIn: "Anmelden",
      getStarted: "Loslegen",
    },
    hero: {
      titleLine1: "Erschaffe Magie mit",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 verwandelt deine wildeste Vorstellung in cinematografische 8K-Realität. Die Grenze der KI-Kinematografie ist da.",
      placeholder: "Ein futuristischer Samurai im Regen von Neo-Tokyo...",
      cta: "Veo 3.2 jetzt testen",
      trendingStyles: "Trend-Stile:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Community-Showcase erstellt mit Veo 3.2",
      subtitle: "Echte Ergebnisse von Kreativen weltweit.",
      trending: "Trends",
      cinematic: "Cinematisch",
      anime: "Anime",
      videoLabel: (n) => `Video-Showcase #${n}`,
      exploreAll: "Alle Kreationen entdecken",
    },
    comparison: {
      title: "Warum",
      titleSuffix: "Veo 3.2",
      titleEnd: "das Feld anführt",
      subtitle:
        "Vergleich der Giganten der KI-Videogenerierung 2026. Welches Modell liefert den besten cinematografischen Realismus, Bewegungskohärenz und Prompt-Treue? Erfahren Sie, warum Veo 3.2 der neue Industriestandard ist.",
      tableFeature: "Funktion",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Gewinner 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsDe,
      cardVeoTitle: "Veo 3.2 — Die Cinematik-Maschine",
      cardVeoBody:
        "Basierend auf DeepMinds neuester Transformer-Architektur steht Veo 3.2 für einen Quantensprung im semantischen Verständnis. Anders als seine Vorgänger erfasst es die Nuancen von ‚cinematografischer Beleuchtung‘ und ‚Kamerabewegung‘ pixelgenau. Es überzeugt durch Figurenkonsistenz über lange Clips und ist die bevorzugte Wahl für Storyteller und Filmemacher 2026.",
      cardVeo1: "Beste Prompt-Treue",
      cardVeo2: "Native Auflösung 1080p+",
      cardVeo3: "Konsistente Figurenidentität",
      cardSoraTitle: "OpenAI Sora — Der Physik-Simulator",
      cardSoraBody:
        "Sora bleibt ein starker Konkurrent mit tiefem Verständnis für physikalische Weltsimulation. Es handhabt komplexe Objektinteraktionen und Fluiddynamik hervorragend. Der Zugang bleibt jedoch eingeschränkt, und es hat oft Schwierigkeiten mit spezifischen Kamerasteuerungsanweisungen im Vergleich zu Veo 3.2.",
      cardSora1: "Realistische Physik-Engine",
      cardSora2: "Komplexe Szenenübergänge",
      cardRunwayTitle: "Runway Gen-3 Alpha — Das Künstler-Tool",
      cardRunwayBody:
        "Runway Gen-3 bietet weiterhin granulare Kontrolle für Editoren mit Motion Brush und Director Mode. Bei hoher künstlerischer Freiheit übertrifft Veo 3.2 es in Rohgenerierungsgeschwindigkeit und Prompt-Verständnis für Zero-Shot-Videoerstellung.",
      cardRunway1: "Fein abgestimmte Bewegungssteuerung",
      cardRunway2: "Künstlerischer Stiltransfer",
      bottomParagraph:
        "Während Sora die Welt simuliert und Runway sie malt, versteht Veo 3.2 sie. Für Nutzer, die das beste Gleichgewicht aus Geschwindigkeit, Qualität und Zugänglichkeit suchen, ist Veo 3.2 der klare Gewinner für die Videogenerierung 2026.",
      cta: "Veo 3.2 jetzt kostenlos testen",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Ausgewählte Prompts",
      subtitle: "Handverlesene Prompts, um das Beste aus Veo 3.2 herauszuholen. Kopieren und in deiner nächsten Kreation ausprobieren.",
      copy: "Kopieren",
      copied: "Kopiert!",
      copyAria: "Prompt kopieren",
      copiedAria: "Kopiert!",
      prompts: featuredPromptsDe,
    },
    evolution: {
      title: "Evolution: Von Veo 3.1 zu",
      titleSuffix: "3.2",
      subtitle:
        "Googles Veo 3.1 führte „Ingredients to Video“ ein – Referenzbilder in ausdrucksstarke, hochwertige Clips mit starker Konsistenz. Veo 3.2 baut darauf auf mit einem Sprung in visueller Treue, kreativer Kontrolle und Geschwindigkeit: von broadcast-tauglicher Qualität zu cinematografischem 8K, von zutatenbasierten Workflows zu Regiekamera-Kontrolle, von schneller Generierung zu Echtzeit-Latenz.",
      aspect: "Aspekt",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Visuelle Qualität",
      visualQuality31: "Hohe Qualität · 1080p / 4K Upscaling",
      visualQuality32: "Cinematografisches 8K (IMAX-Standard)",
      control: "Kontrolle",
      control31: "Ingredients to Video · Referenzbilder",
      control32: "Regiekontrolle · präzise Kamerabewegung",
      speed: "Geschwindigkeit",
      speed31: "Schnelle Generierung",
      speed32: "Echtzeit-Latenz (keine Verzögerung)",
    },
    threeSteps: {
      title: "Einfach. Schnell.",
      titleSuffix: "Atemberaubend.",
      subtitle: "Erstelle professionelle Videoinhalte in drei Schritten mit unserer Next-Gen-Engine.",
      step1Title: "1. Prompt eingeben",
      step1Body:
        "Beschreibe deine Vision in jeder Sprache. So detailliert oder einfach du möchtest – Veo versteht Nuancen.",
      step2Title: "2. KI-Verarbeitung",
      step2Body:
        "Unsere 3.2-Engine verarbeitet Frames in Echtzeit, mit Präzision bei Physik, Beleuchtung und Texturen.",
      step3Title: "3. Meisterwerk herunterladen",
      step3Body:
        "Exportiere deine Kreation bis 8K, bereit für Film, Social Media oder professionelle Workflows.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Alles, was du über die Veo-3.2-Plattform wissen musst.",
      items: faqDe,
    },
    footer: {
      tagline: "Veo32.ai befähigt die nächste Generation von Storytellern mit erstklassiger künstlicher Intelligenz.",
      copyright: "© 2026 Veo Technologies. Alle Rechte vorbehalten.",
      terms: "AGB",
      privacy: "Datenschutz",
      cookies: "Cookies",
    },
    aria: {
      heroVideo: "Veo-3.2-Hero-Video mit KI-generiertem cinematografischem Inhalt",
      navVirax: "Zu ViraX",
      showcaseVideo: (n, tab) => `Community-Showcase-Video ${n} aus ${tab}-Sammlung`,
      styleLabel: (style) => `Trend-Stil: ${style}`,
      featuredPrompt: (tag) => `Ausgewählter Prompt: ${tag}`,
    },
  },
  it: {
    nav: {
      features: "Funzionalità",
      gallery: "Galleria",
      pricing: "Prezzi",
      api: "API",
      logIn: "Accedi",
      getStarted: "Inizia",
    },
    hero: {
      titleLine1: "Crea magia con",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 trasforma la tua immaginazione in realtà cinematografica 8K. La frontiera della cinematografia IA è qui.",
      placeholder: "Un samurai futurista sotto la pioggia a Neo-Tokyo...",
      cta: "Prova Veo 3.2 ora",
      trendingStyles: "Stili in tendenza:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Showcase della community creato con Veo 3.2",
      subtitle: "Risultati reali generati da creatori in tutto il mondo.",
      trending: "Tendenze",
      cinematic: "Cinematografico",
      anime: "Anime",
      videoLabel: (n) => `Video showcase #${n}`,
      exploreAll: "Esplora tutte le creazioni",
    },
    comparison: {
      title: "Perché",
      titleSuffix: "Veo 3.2",
      titleEnd: "guida il settore",
      subtitle:
        "Confronto tra i giganti della generazione video IA nel 2026. Quale modello offre il miglior realismo cinematografico, coerenza del movimento e fedeltà al prompt? Scopri perché Veo 3.2 è il nuovo standard di settore.",
      tableFeature: "Caratteristica",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Vincitore 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsIt,
      cardVeoTitle: "Veo 3.2 — Il motore cinematografico",
      cardVeoBody:
        "Basato sull'ultima architettura transformer di DeepMind, Veo 3.2 rappresenta un salto di qualità nella comprensione semantica. A differenza dei suoi predecessori, cattura le sfumature di 'illuminazione cinematografica' e 'movimento di camera' con precisione pixel-perfetta. Eccelle nella coerenza dei personaggi su clip lunghi, ed è la scelta preferita per storyteller e filmmaker nel 2026.",
      cardVeo1: "Fedeltà al prompt di prim'ordine",
      cardVeo2: "Risoluzione nativa 1080p+",
      cardVeo3: "Identità del personaggio coerente",
      cardSoraTitle: "OpenAI Sora — Il simulatore fisico",
      cardSoraBody:
        "Sora rimane un forte contendente grazie alla sua profonda comprensione della simulazione del mondo fisico. Gestisce eccezionalmente bene le interazioni di oggetti complessi e la dinamica dei fluidi. Tuttavia l'accesso resta limitato e spesso fatica con direttive specifiche di controllo camera rispetto a Veo 3.2.",
      cardSora1: "Motore fisico realistico",
      cardSora2: "Transizioni di scena complesse",
      cardRunwayTitle: "Runway Gen-3 Alpha — Lo strumento dell'artista",
      cardRunwayBody:
        "Runway Gen-3 continua a offrire controllo granulare agli editor con Motion Brush e Director Mode. Pur offrendo alta libertà artistica, Veo 3.2 lo supera in velocità di generazione e comprensione del prompt per la creazione video zero-shot.",
      cardRunway1: "Controlli del movimento raffinati",
      cardRunway2: "Trasferimento di stile artistico",
      bottomParagraph:
        "Mentre Sora simula il mondo e Runway lo dipinge, Veo 3.2 lo comprende. Per chi cerca il miglior equilibrio tra velocità, qualità e accessibilità, Veo 3.2 è il chiaro vincitore per la generazione video 2026.",
      cta: "Prova Veo 3.2 gratis ora",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Prompt in evidenza",
      subtitle: "Prompt selezionati per ottenere il massimo da Veo 3.2. Copia e provali nella tua prossima creazione.",
      copy: "Copia",
      copied: "Copiato!",
      copyAria: "Copia prompt",
      copiedAria: "Copiato!",
      prompts: featuredPromptsIt,
    },
    evolution: {
      title: "Evoluzione: da Veo 3.1 a",
      titleSuffix: "3.2",
      subtitle:
        "Veo 3.1 di Google ha introdotto \"Ingredients to Video\": trasformare immagini di riferimento in clip espressive e di alta qualità con forte coerenza. Veo 3.2 si basa su questo con un salto in fedeltà visiva, controllo creativo e velocità: dalla qualità broadcast al 8K cinematografico, dai flussi basati su ingredienti al controllo camera da regista, dalla generazione veloce alla latenza in tempo reale.",
      aspect: "Aspetto",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Qualità visiva",
      visualQuality31: "Alta qualità · 1080p / 4K upscaling",
      visualQuality32: "8K cinematografico (standard IMAX)",
      control: "Controllo",
      control31: "Ingredients to Video · immagini di riferimento",
      control32: "Controllo regia · movimento camera preciso",
      speed: "Velocità",
      speed31: "Generazione veloce",
      speed32: "Latenza in tempo reale (zero ritardo)",
    },
    threeSteps: {
      title: "Semplice. Veloce.",
      titleSuffix: "Stupendo.",
      subtitle: "Crea contenuti video di livello professionale in tre passaggi con il nostro motore di nuova generazione.",
      step1Title: "1. Inserisci il prompt",
      step1Body:
        "Scrivi la tua visione in qualsiasi lingua. Con il livello di dettaglio che preferisci: Veo capisce le sfumature.",
      step2Title: "2. Elaborazione IA",
      step2Body:
        "Il nostro motore 3.2 elabora i fotogrammi in tempo reale, con precisione per fisica, illuminazione e texture.",
      step3Title: "3. Scarica il capolavoro",
      step3Body:
        "Esporta la tua creazione fino a 8K, pronta per cinema, social media o flussi professionali.",
    },
    faq: {
      title: "Domande frequenti",
      subtitle: "Tutto quello che devi sapere sulla piattaforma Veo 3.2.",
      items: faqIt,
    },
    footer: {
      tagline: "Veo32.ai potenzia la prossima generazione di storyteller con intelligenza artificiale di livello mondiale.",
      copyright: "© 2026 Veo Technologies. Tutti i diritti riservati.",
      terms: "Termini",
      privacy: "Privacy",
      cookies: "Cookie",
    },
    aria: {
      heroVideo: "Video hero Veo 3.2 con contenuto cinematografico generato da IA",
      navVirax: "Vai a ViraX",
      showcaseVideo: (n, tab) => `Video showcase ${n} dalla collezione ${tab}`,
      styleLabel: (style) => `Stile in tendenza: ${style}`,
      featuredPrompt: (tag) => `Prompt in evidenza: ${tag}`,
    },
  },
  jp: {
    nav: {
      features: "機能",
      gallery: "ギャラリー",
      pricing: "料金",
      api: "API",
      logIn: "ログイン",
      getStarted: "始める",
    },
    hero: {
      titleLine1: "魔法を生み出そう",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2はあなたの想像をシネマティックな8Kの現実に変えます。AIシネマトグラフィの最前線がここに。",
      placeholder: "ネオ東京の雨に立つ未来的な侍...",
      cta: "Veo 3.2を今すぐ試す",
      trendingStyles: "トレンドスタイル：",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Veo 3.2で作られたコミュニティショーケース",
      subtitle: "世界中のクリエイターが生成した実際の成果。",
      trending: "トレンド",
      cinematic: "シネマティック",
      anime: "アニメ",
      videoLabel: (n) => `ビデオショーケース #${n}`,
      exploreAll: "すべての作品を見る",
    },
    comparison: {
      title: "なぜ",
      titleSuffix: "Veo 3.2",
      titleEnd: "が業界をリードするか",
      subtitle:
        "2026年のAI動画生成の巨人を比較。どのモデルが最高のシネマティックリアリズム、モーションコヒーレンス、プロンプト忠実度を実現するか。Veo 3.2が新業界標準となる理由をご覧ください。",
      tableFeature: "機能",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "優勝 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsJp,
      cardVeoTitle: "Veo 3.2 — シネマティックの原動力",
      cardVeoBody:
        "DeepMindの最新トランスフォーマーアーキテクチャを基盤とするVeo 3.2は、意味理解における飛躍を表しています。前世代と異なり、「シネマティック照明」と「カメラムーブメント」のニュアンスをピクセル単位で正確に捉えます。長尺クリップでのキャラクター一貫性に優れ、2026年のストーリーテラーと映画制作者の第一選択となっています。",
      cardVeo1: "最高クラスのプロンプト忠実度",
      cardVeo2: "1080p以上のネイティブ解像度",
      cardVeo3: "一貫したキャラクターアイデンティティ",
      cardSoraTitle: "OpenAI Sora — 物理シミュレーター",
      cardSoraBody:
        "Soraは物理世界シミュレーションの深い理解で強力な競合として残っています。複雑なオブジェクト相互作用と流体力学を非常にうまく扱います。ただしアクセスは制限されており、Veo 3.2と比べて特定のカメラ制御指示に苦戦することが多いです。",
      cardSora1: "リアルな物理エンジン",
      cardSora2: "複雑なシーン遷移",
      cardRunwayTitle: "Runway Gen-3 Alpha — アーティストのツール",
      cardRunwayBody:
        "Runway Gen-3はMotion BrushやDirector Modeなどで編集者にきめ細かい制御を提供し続けています。芸術的自由度は高いものの、ゼロショット動画作成における生成速度とプロンプト理解ではVeo 3.2に及びません。",
      cardRunway1: "精密なモーション制御",
      cardRunway2: "芸術的スタイル転送",
      bottomParagraph:
        "Soraが世界をシミュレートし、Runwayが描く一方で、Veo 3.2はそれを理解します。速度・品質・アクセシビリティの最良のバランスを求めるユーザーにとって、Veo 3.2は2026年動画生成の明確な勝者です。",
      cta: "Veo 3.2を今すぐ無料で試す",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "注目のプロンプト",
      subtitle: "Veo 3.2の最高の結果を得るための厳選プロンプト。コピーして次の作品でお試しください。",
      copy: "コピー",
      copied: "コピーしました！",
      copyAria: "プロンプトをコピー",
      copiedAria: "コピーしました！",
      prompts: featuredPromptsJp,
    },
    evolution: {
      title: "進化：Veo 3.1から",
      titleSuffix: "3.2へ",
      subtitle:
        "GoogleのVeo 3.1は「Ingredients to Video」を導入し、参照画像を強い一貫性を持つ表現力豊かな高品質クリップに変換しました。Veo 3.2はその基盤の上に、視覚的忠実度・クリエイティブ制御・速度の飛躍を築いています：放送品質からシネマティック8Kへ、素材ベースのワークフローから監督級カメラ制御へ、高速生成からリアルタイムレイテンシへ。",
      aspect: "観点",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "画質",
      visualQuality31: "高品質・1080p / 4Kアップスケール",
      visualQuality32: "シネマティック8K（IMAX標準）",
      control: "制御",
      control31: "Ingredients to Video・参照画像",
      control32: "演出制御・精密なカメラムーブメント",
      speed: "速度",
      speed31: "高速生成",
      speed32: "リアルタイムレイテンシ（遅延ゼロ）",
    },
    threeSteps: {
      title: "シンプル。高速。",
      titleSuffix: "圧巻。",
      subtitle: "次世代エンジンで3つの簡単なステップでプロ品質の動画コンテンツを作成。",
      step1Title: "1. プロンプトを入力",
      step1Body:
        "どんな言語でもあなたのビジョンを入力。詳細でもシンプルでも、Veoはニュアンスを理解します。",
      step2Title: "2. AI処理",
      step2Body:
        "3.2エンジンがフレームをリアルタイムで処理し、物理・照明・テクスチャを精密に扱います。",
      step3Title: "3. 傑作をダウンロード",
      step3Body:
        "最大8K解像度で作品をエクスポート。映画、SNS、プロのワークフローにそのまま使えます。",
    },
    faq: {
      title: "よくある質問",
      subtitle: "Veo 3.2プラットフォームについて知っておくべきこと。",
      items: faqJp,
    },
    footer: {
      tagline: "Veo32.aiは世界クラスのAIで次世代のストーリーテラーを支えます。",
      copyright: "© 2026 Veo Technologies. All rights reserved.",
      terms: "利用規約",
      privacy: "プライバシー",
      cookies: "Cookie",
    },
    aria: {
      heroVideo: "Veo 3.2のヒーロー動画（AI生成シネマティックコンテンツ）",
      navVirax: "ViraXへ",
      showcaseVideo: (n, tab) => `${tab}コレクションのビデオショーケース ${n}`,
      styleLabel: (style) => `トレンドスタイル：${style}`,
      featuredPrompt: (tag) => `注目のプロンプト：${tag}`,
    },
  },
  br: {
    nav: {
      features: "Recursos",
      gallery: "Galeria",
      pricing: "Preços",
      api: "API",
      logIn: "Entrar",
      getStarted: "Começar",
    },
    hero: {
      titleLine1: "Crie magia com",
      titleLine2: "Veo 3.2",
      subtitle:
        "O Veo 3.2 transforma sua imaginação em realidade cinematográfica 8K. A fronteira da cinematografia com IA está aqui.",
      placeholder: "Um samurai futurista na chuva de Neo-Tóquio...",
      cta: "Experimente o Veo 3.2 agora",
      trendingStyles: "Estilos em alta:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Vitrine da comunidade criada com Veo 3.2",
      subtitle: "Resultados reais gerados por criadores do mundo todo.",
      trending: "Em alta",
      cinematic: "Cinematográfico",
      anime: "Anime",
      videoLabel: (n) => `Vídeo showcase #${n}`,
      exploreAll: "Explorar todas as criações",
    },
    comparison: {
      title: "Por que o",
      titleSuffix: "Veo 3.2",
      titleEnd: "lidera o setor",
      subtitle:
        "Comparando os gigantes da geração de vídeo por IA em 2026. Qual modelo oferece o melhor realismo cinematográfico, coerência de movimento e fidelidade ao prompt? Veja por que o Veo 3.2 é o novo padrão da indústria.",
      tableFeature: "Recurso",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Vencedor 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsBr,
      cardVeoTitle: "Veo 3.2 — O motor cinematográfico",
      cardVeoBody:
        "Baseado na mais recente arquitetura transformer da DeepMind, o Veo 3.2 representa um salto quântico na compreensão semântica. Diferente de seus predecessores, ele captura as nuances de 'iluminação cinematográfica' e 'movimento de câmera' com precisão pixel a pixel. Destaca-se na consistência de personagens em clipes longos, sendo a escolha preferida de contadores de histórias e cineastas em 2026.",
      cardVeo1: "Fidelidade ao prompt de primeira classe",
      cardVeo2: "Resolução nativa 1080p+",
      cardVeo3: "Identidade de personagem consistente",
      cardSoraTitle: "OpenAI Sora — O simulador físico",
      cardSoraBody:
        "O Sora continua um forte concorrente com sua compreensão profunda da simulação do mundo físico. Ele lida excepcionalmente bem com interações de objetos complexos e dinâmica de fluidos. Porém, o acesso permanece limitado e ele frequentemente tem dificuldades com diretivas específicas de controle de câmera em comparação ao Veo 3.2.",
      cardSora1: "Motor de física realista",
      cardSora2: "Transições de cena complexas",
      cardRunwayTitle: "Runway Gen-3 Alpha — A ferramenta do artista",
      cardRunwayBody:
        "O Runway Gen-3 continua oferecendo controle granular para editores com recursos como Motion Brush e Director Mode. Embora ofereça alta liberdade artística, o Veo 3.2 o supera em velocidade de geração e compreensão do prompt para criação de vídeo zero-shot.",
      cardRunway1: "Controles de movimento refinados",
      cardRunway2: "Transferência de estilo artístico",
      bottomParagraph:
        "Enquanto o Sora simula o mundo e o Runway o pinta, o Veo 3.2 o compreende. Para quem busca o melhor equilíbrio entre velocidade, qualidade e acessibilidade, o Veo 3.2 é o claro vencedor na geração de vídeo 2026.",
      cta: "Experimente o Veo 3.2 grátis agora",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Prompts em destaque",
      subtitle: "Prompts selecionados para extrair o máximo do Veo 3.2. Copie e experimente na sua próxima criação.",
      copy: "Copiar",
      copied: "Copiado!",
      copyAria: "Copiar prompt",
      copiedAria: "Copiado!",
      prompts: featuredPromptsBr,
    },
    evolution: {
      title: "Evolução: do Veo 3.1 ao",
      titleSuffix: "3.2",
      subtitle:
        "O Veo 3.1 da Google introduziu \"Ingredients to Video\" — transformando imagens de referência em clipes expressivos e de alta qualidade com forte consistência. O Veo 3.2 constrói sobre essa base com um salto em fidelidade visual, controle criativo e velocidade: da qualidade broadcast ao 8K cinematográfico, de fluxos baseados em ingredientes ao controle de câmera nível diretor, e da geração rápida à latência em tempo real.",
      aspect: "Aspecto",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Qualidade visual",
      visualQuality31: "Alta qualidade · 1080p / 4K upscaling",
      visualQuality32: "8K cinematográfico (padrão IMAX)",
      control: "Controle",
      control31: "Ingredients to Video · imagens de referência",
      control32: "Controle de direção · movimento de câmera preciso",
      speed: "Velocidade",
      speed31: "Geração rápida",
      speed32: "Latência em tempo real (zero atraso)",
    },
    threeSteps: {
      title: "Simples. Rápido.",
      titleSuffix: "Deslumbrante.",
      subtitle: "Crie conteúdo de vídeo de nível profissional em três passos com nosso motor de nova geração.",
      step1Title: "1. Insira o prompt",
      step1Body:
        "Descreva sua visão em qualquer idioma. Com o nível de detalhe que preferir — o Veo entende nuances.",
      step2Title: "2. Processamento com IA",
      step2Body:
        "Nosso motor 3.2 processa os quadros em tempo real, com precisão em física, iluminação e texturas.",
      step3Title: "3. Baixe sua obra-prima",
      step3Body:
        "Exporte sua criação em até 8K, pronta para cinema, redes sociais ou fluxos profissionais.",
    },
    faq: {
      title: "Perguntas frequentes",
      subtitle: "Tudo o que você precisa saber sobre a plataforma Veo 3.2.",
      items: faqBr,
    },
    footer: {
      tagline: "O Veo32.ai capacita a próxima geração de contadores de histórias com inteligência artificial de classe mundial.",
      copyright: "© 2026 Veo Technologies. Todos os direitos reservados.",
      terms: "Termos",
      privacy: "Privacidade",
      cookies: "Cookies",
    },
    aria: {
      heroVideo: "Vídeo hero do Veo 3.2 com conteúdo cinematográfico gerado por IA",
      navVirax: "Ir para ViraX",
      showcaseVideo: (n, tab) => `Vídeo showcase ${n} da coleção ${tab}`,
      styleLabel: (style) => `Estilo em alta: ${style}`,
      featuredPrompt: (tag) => `Prompt em destaque: ${tag}`,
    },
  },
  kr: {
    nav: {
      features: "기능",
      gallery: "갤러리",
      pricing: "가격",
      api: "API",
      logIn: "로그인",
      getStarted: "시작하기",
    },
    hero: {
      titleLine1: "마법을 만들어 보세요",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2가 상상력을 시네마틱 8K 현실로 바꿉니다. AI 시네마토그래피의 최전선이 여기 있습니다.",
      placeholder: "네오 도쿄 비 속의 미래형 사무라이...",
      cta: "Veo 3.2 지금 체험하기",
      trendingStyles: "트렌드 스타일:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Veo 3.2로 만든 커뮤니티 쇼케이스",
      subtitle: "전 세계 크리에이터가 생성한 실제 결과물.",
      trending: "트렌드",
      cinematic: "시네마틱",
      anime: "애니메이션",
      videoLabel: (n) => `비디오 쇼케이스 #${n}`,
      exploreAll: "모든 작품 탐색",
    },
    comparison: {
      title: "왜",
      titleSuffix: "Veo 3.2",
      titleEnd: "가 업계를 선도하는가",
      subtitle:
        "2026년 AI 동영상 생성 거인들을 비교합니다. 어떤 모델이 최고의 시네마틱 리얼리즘, 모션 코히어런스, 프롬프트 충실도를 제공할까요? Veo 3.2가 새로운 업계 표준이 된 이유를 확인하세요.",
      tableFeature: "기능",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "우승 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsKr,
      cardVeoTitle: "Veo 3.2 — 시네마틱 동력",
      cardVeoBody:
        "DeepMind 최신 트랜스포머 아키텍처를 기반으로 한 Veo 3.2는 의미 이해의 도약을 나타냅니다. 전작과 달리 '시네마틱 조명'과 '카메라 무브먼트'의 뉘앙스를 픽셀 단위로 정확히 포착합니다. 긴 클립에서 캐릭터 일관성을 유지하는 데 뛰어나 2026년 스토리텔러와 영화 제작자의 첫 선택이 되고 있습니다.",
      cardVeo1: "최고 수준의 프롬프트 충실도",
      cardVeo2: "1080p 이상 네이티브 해상도",
      cardVeo3: "일관된 캐릭터 정체성",
      cardSoraTitle: "OpenAI Sora — 물리 시뮬레이터",
      cardSoraBody:
        "Sora는 물리 세계 시뮬레이션에 대한 깊은 이해로 강력한 경쟁자로 남아 있습니다. 복잡한 객체 상호작용과 유체 역학을 매우 잘 처리합니다. 다만 접근이 제한적이며 Veo 3.2에 비해 특정 카메라 제어 지시에 어려움을 겪는 경우가 많습니다.",
      cardSora1: "사실적인 물리 엔진",
      cardSora2: "복잡한 장면 전환",
      cardRunwayTitle: "Runway Gen-3 Alpha — 아티스트 도구",
      cardRunwayBody:
        "Runway Gen-3는 Motion Brush, Director Mode 등으로 편집자에게 세밀한 제어를 계속 제공합니다. 높은 예술적 자유를 제공하지만, 제로샷 동영상 제작의 생성 속도와 프롬프트 이해도에서는 Veo 3.2에 미치지 못합니다.",
      cardRunway1: "정교한 모션 제어",
      cardRunway2: "예술적 스타일 전환",
      bottomParagraph:
        "Sora가 세계를 시뮬레이션하고 Runway가 그리는 동안, Veo 3.2는 이해합니다. 속도·품질·접근성의 최적 균형을 찾는 사용자에게 Veo 3.2는 2026 동영상 생성의 명확한 승자입니다.",
      cta: "Veo 3.2 무료 체험하기",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "추천 프롬프트",
      subtitle: "Veo 3.2의 최고 결과를 위한 엄선된 프롬프트. 복사해서 다음 작품에 적용해 보세요.",
      copy: "복사",
      copied: "복사됨!",
      copyAria: "프롬프트 복사",
      copiedAria: "복사됨!",
      prompts: featuredPromptsKr,
    },
    evolution: {
      title: "진화: Veo 3.1에서",
      titleSuffix: "3.2로",
      subtitle:
        "Google의 Veo 3.1은 'Ingredients to Video'를 도입해 참조 이미지를 강한 일관성의 표현력 있는 고품질 클립으로 바꿨습니다. Veo 3.2는 그 기반 위에 시각적 충실도·크리에이티브 제어·속도의 도약을 더했습니다: 방송 품질에서 시네마틱 8K로, 재료 기반 워크플로에서 감독급 카메라 제어로, 빠른 생성에서 실시간 지연으로.",
      aspect: "관점",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "화질",
      visualQuality31: "고품질 · 1080p / 4K 업스케일",
      visualQuality32: "시네마틱 8K (IMAX 표준)",
      control: "제어",
      control31: "Ingredients to Video · 참조 이미지",
      control32: "연출 제어 · 정밀 카메라 무브먼트",
      speed: "속도",
      speed31: "빠른 생성",
      speed32: "실시간 지연 (지연 없음)",
    },
    threeSteps: {
      title: "간단. 빠름.",
      titleSuffix: "압도적.",
      subtitle: "차세대 엔진으로 세 단계만에 프로급 동영상 콘텐츠를 만드세요.",
      step1Title: "1. 프롬프트 입력",
      step1Body:
        "어떤 언어로든 비전을 입력하세요. 상세하게든 간단하게든 Veo가 뉘앙스를 이해합니다.",
      step2Title: "2. AI 처리",
      step2Body:
        "3.2 엔진이 물리·조명·텍스처를 정밀하게 처리하며 프레임을 실시간으로 생성합니다.",
      step3Title: "3. 걸작 다운로드",
      step3Body:
        "최대 8K 해상도로 작품을 내보내 영화, SNS, 프로 워크플로에 바로 사용하세요.",
    },
    faq: {
      title: "자주 묻는 질문",
      subtitle: "Veo 3.2 플랫폼에 대해 알아야 할 모든 것.",
      items: faqKr,
    },
    footer: {
      tagline: "Veo32.ai는 세계 최고 수준의 AI로 다음 세대 스토리텔러를 지원합니다.",
      copyright: "© 2026 Veo Technologies. All rights reserved.",
      terms: "이용약관",
      privacy: "개인정보처리방침",
      cookies: "쿠키",
    },
    aria: {
      heroVideo: "Veo 3.2 히어로 영상 (AI 생성 시네마틱 콘텐츠)",
      navVirax: "ViraX로 이동",
      showcaseVideo: (n, tab) => `${tab} 컬렉션 비디오 쇼케이스 ${n}`,
      styleLabel: (style) => `트렌드 스타일: ${style}`,
      featuredPrompt: (tag) => `추천 프롬프트: ${tag}`,
    },
  },
  tw: {
    nav: {
      features: "功能",
      gallery: "作品集",
      pricing: "價格",
      api: "API",
      logIn: "登入",
      getStarted: "開始使用",
    },
    hero: {
      titleLine1: "用",
      titleLine2: "Veo 3.2 創造魔法",
      titleOneLineBefore: "用 ",
      titleOneLineHighlight: "Veo 3.2",
      titleOneLineAfter: " 創造魔法",
      subtitle:
        "Veo 3.2 將你的想像化為電影級 8K 真實畫面。AI 電影攝影的邊界就在這裡。",
      placeholder: "新東京雨中的未來武士...",
      cta: "立即試用 Veo 3.2",
      trendingStyles: "熱門風格：",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "由 Veo 3.2 創作的社群精選",
      subtitle: "來自全球創作者的實際作品。",
      trending: "熱門",
      cinematic: "電影感",
      anime: "動漫",
      videoLabel: (n) => `精選影片 #${n}`,
      exploreAll: "探索所有作品",
    },
    comparison: {
      title: "為什麼",
      titleSuffix: "Veo 3.2",
      titleEnd: "領先業界",
      subtitle:
        "比較 2026 年 AI 影片生成的巨頭。哪個模型在電影感真實度、動態一致性與提示詞忠實度上表現最佳？了解 Veo 3.2 成為新業界標準的原因。",
      tableFeature: "功能",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "優勝 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsTw,
      cardVeoTitle: "Veo 3.2 — 電影級引擎",
      cardVeoBody:
        "基於 DeepMind 最新 Transformer 架構，Veo 3.2 代表語義理解上的躍進。有別於前代，它能以像素級精準捕捉「電影感照明」與「鏡頭運動」的細微差異，在長片段中維持角色一致性，成為 2026 年說故事者與影視創作者的首選。",
      cardVeo1: "頂尖提示詞忠實度",
      cardVeo2: "原生 1080p+ 解析度",
      cardVeo3: "一致的角色辨識",
      cardSoraTitle: "OpenAI Sora — 物理模擬器",
      cardSoraBody:
        "Sora 憑藉對物理世界模擬的深入理解，仍是強勁競爭者。在複雜物體互動與流體動力學上表現出色。然而其存取仍受限，在特定鏡頭控制指令上常不及 Veo 3.2。",
      cardSora1: "逼真物理引擎",
      cardSora2: "複雜場景轉場",
      cardRunwayTitle: "Runway Gen-3 Alpha — 創作者工具",
      cardRunwayBody:
        "Runway Gen-3 持續以 Motion Brush、Director Mode 等為剪輯者提供細緻控制。雖具高度藝術自由度，在零樣本影片創作的生成速度與提示詞理解上仍遜於 Veo 3.2。",
      cardRunway1: "精細動態控制",
      cardRunway2: "藝術風格轉換",
      bottomParagraph:
        "Sora 模擬世界、Runway 描繪世界，Veo 3.2 則理解世界。對追求速度、品質與可及性最佳平衡的使用者而言，Veo 3.2 是 2026 年影片生成的不二之選。",
      cta: "立即免費試用 Veo 3.2",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "精選提示詞",
      subtitle: "精選提示詞，助你發揮 Veo 3.2 最佳表現。複製並在下次創作中試用。",
      copy: "複製",
      copied: "已複製！",
      copyAria: "複製提示詞",
      copiedAria: "已複製！",
      prompts: featuredPromptsTw,
    },
    evolution: {
      title: "進化：從 Veo 3.1 到",
      titleSuffix: "3.2",
      subtitle:
        "Google 的 Veo 3.1 推出「Ingredients to Video」— 將參考圖轉為具強一致性的高品質、富表現力片段。Veo 3.2 在此基礎上，於視覺忠實度、創意控制與速度上再躍進：從廣播級畫質到電影 8K、從素材式工作流到導演級鏡頭控制、從快速生成到即時延遲。",
      aspect: "面向",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "畫質",
      visualQuality31: "高畫質 · 1080p / 4K 升頻",
      visualQuality32: "電影級 8K（IMAX 標準）",
      control: "控制",
      control31: "Ingredients to Video · 參考圖",
      control32: "導演級控制 · 精準鏡頭運動",
      speed: "速度",
      speed31: "快速生成",
      speed32: "即時延遲（零延遲）",
    },
    threeSteps: {
      title: "簡單。快速。",
      titleSuffix: "驚艷。",
      subtitle: "以次世代引擎，三步打造專業級影片內容。",
      step1Title: "1. 輸入提示詞",
      step1Body:
        "用任何語言描述你的想像。可詳可簡，Veo 都能理解細微差異。",
      step2Title: "2. AI 處理",
      step2Body:
        "3.2 引擎即時處理影格，精準處理物理、光影與材質。",
      step3Title: "3. 下載作品",
      step3Body:
        "以最高 8K 解析度匯出作品，可直接用於電影、社群或專業工作流。",
    },
    faq: {
      title: "常見問題",
      subtitle: "關於 Veo 3.2 平台你需要知道的一切。",
      items: faqTw,
    },
    footer: {
      tagline: "Veo32.ai 以世界級 AI 賦能下一代表演說者。",
      copyright: "© 2026 Veo Technologies. 版權所有。",
      terms: "條款",
      privacy: "隱私權",
      cookies: "Cookie",
    },
    aria: {
      heroVideo: "Veo 3.2 主視覺影片（AI 生成電影級內容）",
      navVirax: "前往 ViraX",
      showcaseVideo: (n, tab) => `${tab} 精選影片 ${n}`,
      styleLabel: (style) => `熱門風格：${style}`,
      featuredPrompt: (tag) => `精選提示詞：${tag}`,
    },
  },
  in: {
    nav: {
      features: "फ़ीचर्स",
      gallery: "गैलरी",
      pricing: "कीमतें",
      api: "API",
      logIn: "लॉग इन",
      getStarted: "शुरू करें",
    },
    hero: {
      titleLine1: "के साथ जादू बनाएं",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 आपकी कल्पना को सिनेमैटिक 8K रियलिटी में बदलता है। AI सिनेमैटोग्राफी की सीमा यहीं है।",
      placeholder: "नियो-टोक्यो की बारिश में एक फ्यूचरिस्टिक समुराई...",
      cta: "अभी Veo 3.2 आज़माएं",
      trendingStyles: "ट्रेंडिंग स्टाइल:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Veo 3.2 से बनाया कम्युनिटी शोकेस",
      subtitle: "दुनिया भर के क्रिएटर्स द्वारा जनरेट किए गए असली रिज़ल्ट।",
      trending: "ट्रेंडिंग",
      cinematic: "सिनेमैटिक",
      anime: "एनिमे",
      videoLabel: (n) => `वीडियो शोकेस #${n}`,
      exploreAll: "सभी क्रिएशन एक्सप्लोर करें",
    },
    comparison: {
      title: "क्यों",
      titleSuffix: "Veo 3.2",
      titleEnd: "फ़ील्ड में लीड करता है",
      subtitle:
        "2026 में AI वीडियो जनरेशन के दिग्गजों की तुलना। कौन सा मॉडल सबसे अच्छा सिनेमैटिक रियलिज़्म, मोशन कोहेरेंस और प्रॉम्प्ट अनुरूपता देता है? देखें क्यों Veo 3.2 नया इंडस्ट्री स्टैंडर्ड है।",
      tableFeature: "फ़ीचर",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "विजेता 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsIn,
      cardVeoTitle: "Veo 3.2 — सिनेमैटिक पावरहाउस",
      cardVeoBody:
        "DeepMind के लेटेस्ट ट्रांसफॉर्मर आर्किटेक्चर पर बना Veo 3.2 सेमैंटिक अंडरस्टैंडिंग में क्वांटम लीप दिखाता है। अपने पूर्ववर्तियों से अलग, यह 'सिनेमैटिक लाइटिंग' और 'कैमरा मूवमेंट' की बारीकियों को पिक्सल-परफेक्ट एक्युरेसी से कैप्चर करता है। लंबे क्लिप में कैरेक्टर कंसिस्टेंसी में एक्सेल करता है, 2026 में स्टोरीटेलर्स और फिल्ममेकर्स की पहली पसंद।",
      cardVeo1: "टॉप-क्लास प्रॉम्प्ट अनुरूपता",
      cardVeo2: "1080p+ नेटिव रिज़ॉल्यूशन",
      cardVeo3: "कंसिस्टेंट कैरेक्टर आइडेंटिटी",
      cardSoraTitle: "OpenAI Sora — फिजिक्स सिम्युलेटर",
      cardSoraBody:
        "Sora फिजिकल वर्ल्ड सिमुलेशन की गहरी समझ के साथ मजबूत प्रतियोगी बना हुआ है। कॉम्प्लेक्स ऑब्जेक्ट इंटरैक्शन और फ्लूइड डायनेमिक्स बहुत अच्छे से हैंडल करता है। हालांकि एक्सेस सीमित है और Veo 3.2 की तुलना में स्पेसिफिक कैमरा कंट्रोल डायरेक्टिव में अक्सर संघर्ष करता है।",
      cardSora1: "रियलिस्टिक फिजिक्स इंजन",
      cardSora2: "कॉम्प्लेक्स सीन ट्रांजिशन",
      cardRunwayTitle: "Runway Gen-3 Alpha — आर्टिस्ट टूल",
      cardRunwayBody:
        "Runway Gen-3 Motion Brush और Director Mode जैसे फीचर्स से एडिटर्स को ग्रैन्युलर कंट्रोल देता रहता है। हाई आर्टिस्टिक फ्रीडम देने के बावजूद, जीरो-शॉट वीडियो क्रिएशन में रॉ जनरेशन स्पीड और प्रॉम्प्ट कॉम्प्रिहेंशन में Veo 3.2 आगे है।",
      cardRunway1: "फाइन-ट्यून्ड मोशन कंट्रोल",
      cardRunway2: "आर्टिस्टिक स्टाइल ट्रांसफर",
      bottomParagraph:
        "Sora दुनिया को सिम्युलेट करता है और Runway पेंट करता है, Veo 3.2 समझता है। स्पीड, क्वालिटी और एक्सेसिबिलिटी का बेस्ट बैलेंस चाहने वालों के लिए Veo 3.2 साफ तौर पर 2026 वीडियो जनरेशन का विजेता है।",
      cta: "अभी मुफ्त में Veo 3.2 आज़माएं",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "फीचर्ड प्रॉम्प्ट",
      subtitle: "Veo 3.2 का बेस्ट निकालने के लिए चुने गए प्रॉम्प्ट। कॉपी करें और अपनी अगली क्रिएशन में आज़माएं।",
      copy: "कॉपी करें",
      copied: "कॉपी हो गया!",
      copyAria: "प्रॉम्प्ट कॉपी करें",
      copiedAria: "कॉपी हो गया!",
      prompts: featuredPromptsIn,
    },
    evolution: {
      title: "इवॉल्यूशन: Veo 3.1 से",
      titleSuffix: "3.2",
      subtitle:
        "Google के Veo 3.1 ने \"Ingredients to Video\" पेश किया — रेफरेंस इमेज को एक्सप्रेसिव, हाई-क्वालिटी क्लिप में स्ट्रॉन्ग कंसिस्टेंसी के साथ बदलना। Veo 3.2 उस बेस पर विज़ुअल फिडेलिटी, क्रिएटिव कंट्रोल और स्पीड में छलांग लगाता है: ब्रॉडकास्ट-रीडी क्वालिटी से सिनेमैटिक 8K तक, इंग्रेडिएंट-बेस्ड वर्कफ्लो से डायरेक्टर-लेवल कैमरा कंट्रोल तक, फास्ट जनरेशन से रियल-टाइम लेटेंसी तक।",
      aspect: "पहलू",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "विज़ुअल क्वालिटी",
      visualQuality31: "हाई क्वालिटी · 1080p / 4K अपस्केलिंग",
      visualQuality32: "सिनेमैटिक 8K (IMAX स्टैंडर्ड)",
      control: "कंट्रोल",
      control31: "Ingredients to Video · रेफरेंस इमेज",
      control32: "डायरेक्टोरियल कंट्रोल · प्रिसाइज़ कैमरा मूवमेंट",
      speed: "गति",
      speed31: "फास्ट जनरेशन",
      speed32: "रियल-टाइम लेटेंसी (जीरो डिले)",
    },
    threeSteps: {
      title: "सिंपल। फास्ट।",
      titleSuffix: "शानदार।",
      subtitle: "हमारे नेक्स्ट-जन एंजिन से तीन आसान स्टेप में प्रोफेशनल-ग्रेड वीडियो कंटेंट बनाएं।",
      step1Title: "1. प्रॉम्प्ट इनपुट करें",
      step1Body:
        "किसी भी भाषा में अपनी विज़न टाइप करें। जितना डिटेल चाहें — Veo न्यूअन्स समझता है।",
      step2Title: "2. AI प्रोसेसिंग",
      step2Body:
        "हमारा 3.2 एंजिन फिजिक्स, लाइटिंग और टेक्सचर को प्रिसाइज़न के साथ रियल-टाइम में फ्रेम प्रोसेस करता है।",
      step3Title: "3. मास्टरपीस डाउनलोड करें",
      step3Body:
        "अपनी क्रिएशन को 8K रिज़ॉल्यूशन तक एक्सपोर्ट करें, फिल्म, सोशल मीडिया या प्रोफेशनल वर्कफ्लो के लिए तैयार।",
    },
    faq: {
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "Veo 3.2 प्लेटफॉर्म के बारे में जो कुछ भी जानना है।",
      items: faqIn,
    },
    footer: {
      tagline: "Veo32.ai वर्ल्ड-क्लास AI के साथ अगली पीढ़ी के स्टोरीटेलर्स को सशक्त बनाता है।",
      copyright: "© 2026 Veo Technologies. सर्वाधिकार सुरक्षित।",
      terms: "नियम",
      privacy: "गोपनीयता",
      cookies: "कुकीज़",
    },
    aria: {
      heroVideo: "Veo 3.2 हीरो वीडियो (AI-जनरेटेड सिनेमैटिक कंटेंट)",
      navVirax: "ViraX पर जाएं",
      showcaseVideo: (n, tab) => `${tab} कलेक्शन का वीडियो शोकेस ${n}`,
      styleLabel: (style) => `ट्रेंडिंग स्टाइल: ${style}`,
      featuredPrompt: (tag) => `फीचर्ड प्रॉम्प्ट: ${tag}`,
    },
  },
  ru: {
    nav: {
      features: "Возможности",
      gallery: "Галерея",
      pricing: "Цены",
      api: "API",
      logIn: "Войти",
      getStarted: "Начать",
    },
    hero: {
      titleLine1: "Создавайте магию с",
      titleLine2: "Veo 3.2",
      subtitle:
        "Veo 3.2 превращает ваше воображение в кинематографичную 8K реальность. Граница AI-кинематографии уже здесь.",
      placeholder: "Футуристический самурай под дождём в Нео-Токио...",
      cta: "Попробовать Veo 3.2 сейчас",
      trendingStyles: "Популярные стили:",
      styleCyberpunk: "#Cyberpunk",
      styleGhibli: "#StudioGhibli",
      styleHyperRealistic: "#HyperRealistic",
      styleSynthwave: "#Synthwave",
      styleAnamorphic: "#AnamorphicShot",
    },
    showcase: {
      title: "Подборка сообщества, созданная с Veo 3.2",
      subtitle: "Реальные результаты от создателей со всего мира.",
      trending: "В тренде",
      cinematic: "Кинематограф",
      anime: "Аниме",
      videoLabel: (n) => `Видео подборка #${n}`,
      exploreAll: "Смотреть все работы",
    },
    comparison: {
      title: "Почему",
      titleSuffix: "Veo 3.2",
      titleEnd: "лидирует в отрасли",
      subtitle:
        "Сравнение гигантов AI-генерации видео в 2026 году. Какая модель даёт лучший кинематографичный реализм, согласованность движения и соответствие промпту? Узнайте, почему Veo 3.2 — новый отраслевой стандарт.",
      tableFeature: "Функция",
      tableVeo: "Google Veo 3.2",
      tableVeoWinner: "Победитель 🏆",
      tableSora: "OpenAI Sora",
      tableRunway: "Runway Gen-3 Alpha",
      rows: comparisonRowsRu,
      cardVeoTitle: "Veo 3.2 — Кинематографичная мощь",
      cardVeoBody:
        "На базе новейшей трансформерной архитектуры DeepMind Veo 3.2 — прорыв в семантическом понимании. В отличие от предшественников, он с пиксельной точностью передаёт нюансы «кинематографичного света» и «движения камеры». Отлично сохраняет согласованность персонажей в длинных роликах — выбор рассказчиков и режиссёров в 2026 году.",
      cardVeo1: "Лучшее соответствие промпту",
      cardVeo2: "Нативное разрешение 1080p+",
      cardVeo3: "Согласованная идентичность персонажей",
      cardSoraTitle: "OpenAI Sora — Симулятор физики",
      cardSoraBody:
        "Sora остаётся сильным конкурентом благодаря глубокому пониманию симуляции физического мира. Отлично справляется со сложными взаимодействиями объектов и динамикой жидкостей. Доступ по-прежнему ограничен, с конкретными указаниями по управлению камерой часто уступает Veo 3.2.",
      cardSora1: "Реалистичный физический движок",
      cardSora2: "Сложные переходы между сценами",
      cardRunwayTitle: "Runway Gen-3 Alpha — Инструмент художника",
      cardRunwayBody:
        "Runway Gen-3 продолжает давать монтажёрам детальный контроль через Motion Brush и Director Mode. При высокой творческой свободе Veo 3.2 опережает его по скорости генерации и пониманию промпта для создания видео с нуля.",
      cardRunway1: "Точная настройка движения",
      cardRunway2: "Художественный перенос стиля",
      bottomParagraph:
        "Пока Sora симулирует мир, а Runway рисует его, Veo 3.2 его понимает. Для тех, кто ищет лучший баланс скорости, качества и доступности, Veo 3.2 — однозначный лидер генерации видео 2026 года.",
      cta: "Попробовать Veo 3.2 бесплатно",
    },
    featuredPrompts: {
      title: "Veo 3.2",
      titleSuffix: "Избранные промпты",
      subtitle: "Подобранные промпты для максимального результата с Veo 3.2. Копируйте и пробуйте в следующей работе.",
      copy: "Копировать",
      copied: "Скопировано!",
      copyAria: "Копировать промпт",
      copiedAria: "Скопировано!",
      prompts: featuredPromptsRu,
    },
    evolution: {
      title: "Эволюция: от Veo 3.1 к",
      titleSuffix: "3.2",
      subtitle:
        "Veo 3.1 от Google представил «Ingredients to Video» — превращение референсных изображений в выразительные клипы высокого качества с сильной согласованностью. Veo 3.2 развивает это в визуальной точности, творческом контроле и скорости: от качества для эфира к кинематографичному 8K, от рабочих процессов на основе ингредиентов к режиссёрскому управлению камерой, от быстрой генерации к задержке в реальном времени.",
      aspect: "Аспект",
      veo31: "Veo 3.1",
      veo32: "Veo 3.2",
      visualQuality: "Визуальное качество",
      visualQuality31: "Высокое качество · 1080p / 4K апскейл",
      visualQuality32: "Кинематографичный 8K (стандарт IMAX)",
      control: "Управление",
      control31: "Ingredients to Video · референсные изображения",
      control32: "Режиссёрский контроль · точное движение камеры",
      speed: "Скорость",
      speed31: "Быстрая генерация",
      speed32: "Задержка в реальном времени (без ожидания)",
    },
    threeSteps: {
      title: "Просто. Быстро.",
      titleSuffix: "Потрясающе.",
      subtitle: "Создавайте профессиональное видео в три шага с нашим движком нового поколения.",
      step1Title: "1. Введите промпт",
      step1Body:
        "Опишите замысел на любом языке. Столько деталей, сколько нужно — Veo понимает нюансы.",
      step2Title: "2. Обработка AI",
      step2Body:
        "Наш движок 3.2 обрабатывает кадры в реальном времени с точной физикой, освещением и текстурой.",
      step3Title: "3. Скачайте шедевр",
      step3Body:
        "Экспортируйте работу до 8K — готово для кино, соцсетей или профессиональных пайплайнов.",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что нужно знать о платформе Veo 3.2.",
      items: faqRu,
    },
    footer: {
      tagline: "Veo32.ai даёт силу следующему поколению рассказчиков с помощью AI мирового уровня.",
      copyright: "© 2026 Veo Technologies. Все права защищены.",
      terms: "Условия",
      privacy: "Конфиденциальность",
      cookies: "Cookie",
    },
    aria: {
      heroVideo: "Главное видео Veo 3.2 с AI-генерируемым киноконтентом",
      navVirax: "Перейти на ViraX",
      showcaseVideo: (n, tab) => `Видео подборка ${n} из коллекции ${tab}`,
      styleLabel: (style) => `Популярный стиль: ${style}`,
      featuredPrompt: (tag) => `Избранный промпт: ${tag}`,
    },
  },
};

export const localeConfig = [
  { code: "en" as const, path: "/", label: "English" },
  { code: "es" as const, path: "/es", label: "Español" },
  { code: "fr" as const, path: "/fr", label: "Français" },
  { code: "de" as const, path: "/de", label: "Deutsch" },
  { code: "it" as const, path: "/it", label: "Italiano" },
  { code: "jp" as const, path: "/jp", label: "日本語" },
  { code: "br" as const, path: "/br", label: "Português" },
  { code: "kr" as const, path: "/kr", label: "한국어" },
  { code: "tw" as const, path: "/tw", label: "繁體中文" },
  { code: "in" as const, path: "/in", label: "हिन्दी" },
  { code: "ru" as const, path: "/ru", label: "Русский" },
] as const;
