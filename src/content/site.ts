import { Locale } from "../../i18n-config";

type LocalizedString = Record<Locale, string>;

export type CompanyStatus =
  | "Operating company"
  | "Product in market"
  | "Venture in development"
  | "Experiment"
  | "Partner venture";

export type Company = {
  name: string;
  category: string;
  description: LocalizedString;
  market: string;
  status: CompanyStatus;
  product: string;
  href?: string;
};

export const statusLabels: Record<CompanyStatus, LocalizedString> = {
  "Operating company": {
    en: "Operating company",
    es: "Compañía operativa",
    fr: "Entreprise opérationnelle",
  },
  "Product in market": {
    en: "Product in market",
    es: "Producto en mercado",
    fr: "Produit sur le marché",
  },
  "Venture in development": {
    en: "Venture in development",
    es: "Venture en desarrollo",
    fr: "Venture en développement",
  },
  Experiment: {
    en: "Experiment",
    es: "Experimento",
    fr: "Expérience",
  },
  "Partner venture": {
    en: "Partner venture",
    es: "Venture aliado",
    fr: "Venture partenaire",
  },
};

export const groupLabels: Record<CompanyStatus, LocalizedString> = {
  "Operating company": {
    en: "Operating companies",
    es: "Compañías operativas",
    fr: "Entreprises opérationnelles",
  },
  "Product in market": {
    en: "Products in market",
    es: "Productos en mercado",
    fr: "Produits sur le marché",
  },
  "Venture in development": {
    en: "Ventures in development",
    es: "Ventures en desarrollo",
    fr: "Ventures en développement",
  },
  Experiment: {
    en: "Experiments",
    es: "Experimentos",
    fr: "Expériences",
  },
  "Partner venture": {
    en: "Partner ventures",
    es: "Ventures aliados",
    fr: "Ventures partenaires",
  },
};

export const homeContent = {
  eyebrow: {
    en: "Technology holding and venture builder",
    es: "Holding tecnológica y venture builder",
    fr: "Holding technologique et venture builder",
  },
  headline: {
    en: "We build, own and scale technology companies.",
    es: "Creamos, operamos y escalamos compañías tecnológicas.",
    fr: "Nous créons, détenons et développons des entreprises technologiques.",
  },
  subtitle: {
    en: "Revoluc creates digital products and businesses for Latin American and global markets.",
    es: "Revoluc crea productos digitales y negocios para mercados latinoamericanos y globales.",
    fr: "Revoluc crée des produits numériques et des entreprises pour les marchés latino-américains et mondiaux.",
  },
  primaryCta: {
    en: "Explore our companies",
    es: "Explorar compañías",
    fr: "Explorer nos entreprises",
  },
  secondaryCta: {
    en: "Build with Revoluc",
    es: "Crece con Revoluc",
    fr: "Construire avec Revoluc",
  },
  portfolioTitle: {
    en: "Selected companies and ventures",
    es: "Compañías y ventures seleccionados",
    fr: "Entreprises et ventures sélectionnées",
  },
  portfolioCopy: {
    en: "The portfolio is organized by operating maturity so visitors can understand what is active, in market, and still being built.",
    es: "El portafolio se organiza por madurez operativa para que los visitantes entiendan qué está activo, en mercado y en construcción.",
    fr: "Le portefeuille est organisé par maturité opérationnelle afin de distinguer ce qui est actif, sur le marché ou encore en construction.",
  },
};

export const aboutContent = {
  title: {
    en: "About Revoluc",
    es: "Sobre Revoluc",
    fr: "À propos de Revoluc",
  },
  paragraphs: {
    en: [
      "Revoluc is a technology holding company with a Latin American origin and a long-term company-building model.",
      "The group creates and operates digital businesses across software, commerce, real estate, health, fitness and consumer services, with a focus on products that can serve regional and global markets.",
      "Revoluc works as an owner-operator: it develops ideas, validates products, builds teams, and supports companies as they move from concept to market.",
    ],
    es: [
      "Revoluc es una holding tecnológica de origen latinoamericano con un modelo de construcción empresarial a largo plazo.",
      "El grupo crea y opera negocios digitales en software, comercio, bienes raíces, salud, fitness y servicios de consumo, con foco en productos que puedan atender mercados regionales y globales.",
      "Revoluc opera como owner-operator: desarrolla ideas, valida productos, construye equipos y acompaña a las compañías desde el concepto hasta el mercado.",
    ],
    fr: [
      "Revoluc est une holding technologique d'origine latino-américaine avec un modèle de construction d'entreprises à long terme.",
      "Le groupe crée et exploite des entreprises numériques dans le logiciel, le commerce, l'immobilier, la santé, le fitness et les services aux consommateurs, avec des produits destinés aux marchés régionaux et mondiaux.",
      "Revoluc agit comme propriétaire-opérateur : il développe des idées, valide des produits, construit des équipes et accompagne les entreprises du concept au marché.",
    ],
  },
};

export const missionContent = {
  title: {
    en: "Mission",
    es: "Misión",
    fr: "Mission",
  },
  paragraphs: {
    en: [
      "Our mission is to build technology companies that simplify complex problems, create sustainable economic value and improve how people and businesses operate.",
      "We use technology as a practical tool: to reduce friction, open access, improve decisions and make everyday operations more reliable.",
      "As a holding company, Revoluc is responsible for giving its ventures focus, governance and long-term support instead of treating each project as a short campaign.",
    ],
    es: [
      "Nuestra misión es construir compañías tecnológicas que simplifiquen problemas complejos, creen valor económico sostenible y mejoren la forma en que operan personas y empresas.",
      "Usamos la tecnología como una herramienta práctica: para reducir fricción, abrir acceso, mejorar decisiones y hacer más confiables las operaciones diarias.",
      "Como holding, Revoluc asume la responsabilidad de dar foco, gobernanza y acompañamiento a largo plazo a sus ventures, no de tratarlos como campañas temporales.",
    ],
    fr: [
      "Notre mission est de bâtir des entreprises technologiques qui simplifient des problèmes complexes, créent une valeur économique durable et améliorent le fonctionnement des personnes et des organisations.",
      "Nous utilisons la technologie comme un outil pratique : réduire les frictions, ouvrir l'accès, améliorer les décisions et rendre les opérations quotidiennes plus fiables.",
      "En tant que holding, Revoluc apporte à ses ventures de la concentration, de la gouvernance et un soutien à long terme.",
    ],
  },
};

export const teamContent = {
  title: {
    en: "Team",
    es: "Equipo",
    fr: "Équipe",
  },
  intro: {
    en: "Revoluc's public team page should present only real and active leaders. The first public profile can be completed with verified founder details, a professional photo and an official LinkedIn URL.",
    es: "La página pública del equipo debe presentar solo líderes reales y activos. El primer perfil público puede completarse con datos verificados del fundador, fotografía profesional y LinkedIn oficial.",
    fr: "La page publique de l'équipe doit présenter uniquement des responsables réels et actifs. Le premier profil public peut être complété avec les informations vérifiées du fondateur, une photo professionnelle et un LinkedIn officiel.",
  },
  placeholderName: {
    en: "Founder profile pending verification",
    es: "Perfil del fundador pendiente de verificación",
    fr: "Profil du fondateur en attente de vérification",
  },
  placeholderRole: {
    en: "Founder / Group leadership",
    es: "Fundador / Dirección del grupo",
    fr: "Fondateur / Direction du groupe",
  },
  placeholderBio: {
    en: "Add the verified biography, responsibilities inside Revoluc, relevant experience and professional links before publishing individual claims.",
    es: "Añadir biografía verificada, responsabilidades dentro de Revoluc, experiencia relevante y enlaces profesionales antes de publicar afirmaciones individuales.",
    fr: "Ajouter la biographie vérifiée, les responsabilités chez Revoluc, l'expérience pertinente et les liens professionnels avant de publier des affirmations individuelles.",
  },
};

export const contactContent = {
  title: {
    en: "Partner with Revoluc",
    es: "Aliarse con Revoluc",
    fr: "S'associer avec Revoluc",
  },
  copy: {
    en: "For partnerships, investment conversations, company building or commercial opportunities, contact the Revoluc team directly.",
    es: "Para alianzas, conversaciones de inversión, construcción de compañías u oportunidades comerciales, contacta directamente al equipo de Revoluc.",
    fr: "Pour les partenariats, les échanges d'investissement, la création d'entreprises ou les opportunités commerciales, contactez directement l'équipe Revoluc.",
  },
  emailLabel: {
    en: "Email Revoluc",
    es: "Escribir a Revoluc",
    fr: "Écrire à Revoluc",
  },
};

export const portfolioContent = {
  title: {
    en: "Portfolio",
    es: "Portafolio",
    fr: "Portefeuille",
  },
  intro: {
    en: "Revoluc builds and supports a portfolio of companies, products and ventures at different levels of operating maturity.",
    es: "Revoluc construye y acompaña un portafolio de compañías, productos y ventures en distintos niveles de madurez operativa.",
    fr: "Revoluc construit et accompagne un portefeuille d'entreprises, de produits et de ventures à différents niveaux de maturité opérationnelle.",
  },
};

export const socialContent = {
  title: {
    en: "Revoluc Foundation",
    es: "Revoluc Foundation",
    fr: "Revoluc Foundation",
  },
  intro: {
    en: "Revoluc is committed to using technology, capital and company-building experience to support nonprofit organizations and social initiatives.",
    es: "Revoluc está comprometida con usar tecnología, capital y experiencia construyendo compañías para apoyar organizaciones sin ánimo de lucro e iniciativas sociales.",
    fr: "Revoluc s'engage à utiliser la technologie, le capital et son expérience de construction d'entreprises pour soutenir des organisations à but non lucratif et des initiatives sociales.",
  },
  note: {
    en: "Social partnerships are reviewed case by case so support can be useful, responsible and measurable.",
    es: "Las alianzas sociales se revisan caso por caso para que el apoyo sea útil, responsable y medible.",
    fr: "Les partenariats sociaux sont étudiés au cas par cas afin que le soutien soit utile, responsable et mesurable.",
  },
};

export const socialImpactAreas = [
  {
    label: "Nonprofit support",
    description: {
      en: "Partnerships with organizations that need technology, visibility or operational support.",
      es: "Alianzas con organizaciones que necesitan tecnología, visibilidad o apoyo operativo.",
      fr: "Partenariats avec des organisations qui ont besoin de technologie, de visibilité ou de soutien opérationnel.",
    },
  },
  {
    label: "Donations",
    description: {
      en: "Selective donations and contribution programs for causes aligned with the group's values.",
      es: "Donaciones selectivas y programas de contribución para causas alineadas con los valores del grupo.",
      fr: "Dons sélectifs et programmes de contribution pour des causes alignées avec les valeurs du groupe.",
    },
  },
  {
    label: "Technology for good",
    description: {
      en: "Digital products, automation and technical guidance for initiatives that create social value.",
      es: "Productos digitales, automatización y orientación técnica para iniciativas que crean valor social.",
      fr: "Produits numériques, automatisation et accompagnement technique pour des initiatives à valeur sociale.",
    },
  },
];

export const startupContent = {
  title: {
    en: "Startups",
    es: "Startups",
    fr: "Startups",
  },
  intro: {
    en: "Revoluc partners with founders and early-stage startups that need product strategy, technology execution and a long-term company-building partner.",
    es: "Revoluc se alía con founders y startups en etapa temprana que necesitan estrategia de producto, ejecución tecnológica y un socio de construcción empresarial a largo plazo.",
    fr: "Revoluc s'associe à des fondateurs et startups en phase initiale qui ont besoin de stratégie produit, d'exécution technologique et d'un partenaire de construction à long terme.",
  },
  note: {
    en: "We look for focused teams, clear problems and ventures where Revoluc can contribute beyond advice.",
    es: "Buscamos equipos enfocados, problemas claros y ventures donde Revoluc pueda aportar más que consejos.",
    fr: "Nous recherchons des équipes concentrées, des problèmes clairs et des ventures où Revoluc peut contribuer au-delà du conseil.",
  },
  cta: {
    en: "Start a conversation",
    es: "Iniciar conversación",
    fr: "Démarrer une conversation",
  },
};

export const startupSupportAreas = [
  {
    label: "Product and strategy",
    description: {
      en: "Refine the problem, product scope, market positioning and operating roadmap.",
      es: "Refinar el problema, alcance del producto, posicionamiento de mercado y hoja de ruta operativa.",
      fr: "Affiner le problème, le périmètre produit, le positionnement marché et la feuille de route opérationnelle.",
    },
  },
  {
    label: "Technology execution",
    description: {
      en: "Support with software architecture, product development, automation and technical teams.",
      es: "Apoyo en arquitectura de software, desarrollo de producto, automatización y equipos técnicos.",
      fr: "Soutien en architecture logicielle, développement produit, automatisation et équipes techniques.",
    },
  },
  {
    label: "Growth and operations",
    description: {
      en: "Help startups move from idea to market with clearer systems, commercial focus and operating discipline.",
      es: "Ayudar a startups a pasar de idea a mercado con sistemas más claros, foco comercial y disciplina operativa.",
      fr: "Aider les startups à passer de l'idée au marché avec des systèmes clairs, un focus commercial et une discipline opérationnelle.",
    },
  },
];

export const companies: Company[] = [
  {
    name: "Helebba",
    category: "Business software",
    description: {
      en: "Operational tools for businesses that need clearer workflows and customer management.",
      es: "Herramientas operativas para negocios que necesitan flujos de trabajo y gestión de clientes más claros.",
      fr: "Outils opérationnels pour les entreprises qui ont besoin de flux de travail et de gestion client plus clairs.",
    },
    market: "Latin America / Global",
    status: "Operating company",
    product: "Helebba platform",
  },
  {
    name: "Prooving",
    category: "Identity and trust",
    description: {
      en: "Digital verification products for trust, compliance and secure onboarding.",
      es: "Productos de verificación digital para confianza, cumplimiento e incorporación segura.",
      fr: "Produits de vérification numérique pour la confiance, la conformité et l'intégration sécurisée.",
    },
    market: "Latin America",
    status: "Product in market",
    product: "Prooving verification",
  },
  {
    name: "Nevobit",
    category: "Software studio",
    description: {
      en: "Software delivery and digital product development for companies in the group and external partners.",
      es: "Desarrollo de software y productos digitales para compañías del grupo y aliados externos.",
      fr: "Développement logiciel et produits numériques pour les sociétés du groupe et des partenaires externes.",
    },
    market: "Global",
    status: "Operating company",
    product: "Nevobit services",
    href: "https://nevobit.co",
  },
  {
    name: "Loobic",
    category: "Commerce",
    description: {
      en: "Commerce and local services venture focused on simpler buying and fulfillment experiences.",
      es: "Venture de comercio y servicios locales enfocado en experiencias de compra y entrega más simples.",
      fr: "Venture commerce et services locaux axé sur des expériences d'achat et de livraison plus simples.",
    },
    market: "Latin America",
    status: "Venture in development",
    product: "Loobic marketplace",
  },
  {
    name: "Lytos",
    category: "Digital products",
    description: {
      en: "Product experiments for lightweight digital tools and consumer workflows.",
      es: "Experimentos de producto para herramientas digitales ligeras y flujos de consumo.",
      fr: "Expériences produit pour des outils numériques légers et des parcours consommateurs.",
    },
    market: "Global",
    status: "Experiment",
    product: "Lytos tools",
  },
  {
    name: "Itaaj Realty",
    category: "Real estate",
    description: {
      en: "Real estate venture applying digital operations to property discovery and transactions.",
      es: "Venture inmobiliario que aplica operaciones digitales al descubrimiento y transacción de propiedades.",
      fr: "Venture immobilier qui applique les opérations numériques à la découverte et aux transactions de biens.",
    },
    market: "United States / Latin America",
    status: "Partner venture",
    product: "Itaaj Realty",
  },
  {
    name: "Snappra",
    category: "Consumer services",
    description: {
      en: "Consumer service concept designed around fast, clear digital interactions.",
      es: "Concepto de servicios de consumo diseñado alrededor de interacciones digitales rápidas y claras.",
      fr: "Concept de services aux consommateurs conçu autour d'interactions numériques rapides et claires.",
    },
    market: "Latin America",
    status: "Venture in development",
    product: "Snappra app",
  },
  {
    name: "Vitalut",
    category: "Health",
    description: {
      en: "Health and wellness venture exploring accessible digital support for everyday care.",
      es: "Venture de salud y bienestar que explora apoyo digital accesible para el cuidado diario.",
      fr: "Venture santé et bien-être explorant un soutien numérique accessible pour les soins quotidiens.",
    },
    market: "Latin America",
    status: "Venture in development",
    product: "Vitalut",
  },
  {
    name: "Fitnopolis",
    category: "Fitness",
    description: {
      en: "Fitness venture focused on digital routines, communities and personal progress.",
      es: "Venture de fitness enfocado en rutinas digitales, comunidades y progreso personal.",
      fr: "Venture fitness axé sur les routines numériques, les communautés et le progrès personnel.",
    },
    market: "Latin America",
    status: "Experiment",
    product: "Fitnopolis",
  },
  {
    name: "Algodonia",
    category: "Consumer goods",
    description: {
      en: "Consumer brand concept connected to digital commerce and product storytelling.",
      es: "Concepto de marca de consumo conectado con comercio digital y narrativa de producto.",
      fr: "Concept de marque grand public lié au commerce numérique et au récit produit.",
    },
    market: "Latin America",
    status: "Experiment",
    product: "Algodonia brand",
  },
  {
    name: "Trooved",
    category: "Trust infrastructure",
    description: {
      en: "Trust and verification concept for clearer digital transactions.",
      es: "Concepto de confianza y verificación para transacciones digitales más claras.",
      fr: "Concept de confiance et de vérification pour des transactions numériques plus claires.",
    },
    market: "Global",
    status: "Venture in development",
    product: "Trooved",
  },
  {
    name: "Sormi",
    category: "Operations software",
    description: {
      en: "Operational software concept for teams that need simpler execution systems.",
      es: "Concepto de software operativo para equipos que necesitan sistemas de ejecución más simples.",
      fr: "Concept de logiciel opérationnel pour les équipes qui ont besoin de systèmes d'exécution plus simples.",
    },
    market: "Latin America",
    status: "Experiment",
    product: "Sormi",
  },
];

export const localize = (value: LocalizedString, lang: Locale) => value[lang] ?? value.en;
