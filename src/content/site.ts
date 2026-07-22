import { Locale } from "../../i18n-config";

type LocalizedString = Record<Locale, string>;

export type PublicCompanyStatus =
  | "operating-company"
  | "product-in-market"
  | "private-beta"
  | "venture-in-development"
  | "partner-venture";

export type InternalCompanyStatus =
  | PublicCompanyStatus
  | "concept"
  | "archived";

export type PortfolioCompany = {
  name: string;
  slug: string;
  relationship: "owned" | "operated" | "built" | "partner";
  status: PublicCompanyStatus;
  category: LocalizedString;
  description: LocalizedString;
  market: LocalizedString;
  headquarters?: LocalizedString;
  website?: string;
  foundedYear?: number;
  productName: LocalizedString;
  logo: string;
  screenshot?: string;
  internalResponsible: LocalizedString;
  proof: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  evidenceItems: LocalizedString[];
  ctaLabel: LocalizedString;
};

export const placeholderCompanyLogo = "/img/logo192.png";

export type PrivatePortfolioItem = {
  name: string;
  status: "concept" | "archived";
  reason: LocalizedString;
};

export const corporateTruth = {
  legalName: "Revoluc Inc.",
  incorporationState: "Delaware",
  publicEmail: "hi@revoluc.com",
  phone: "+1 (256) 715-6920",
  mailingAddress: "2261 Market Street STE 22620, San Francisco, CA 94114",
  addressLabel: {
    en: "Business mailing address",
    es: "Dirección postal comercial",
    fr: "Adresse postale commerciale",
  },
  incorporationYear: {
    en: "2024",
    es: "2024",
    fr: "2024",
  },
};

export const statusLabels: Record<PublicCompanyStatus, LocalizedString> = {
  "operating-company": {
    en: "Operating company",
    es: "Compañía operativa",
    fr: "Entreprise opérationnelle",
  },
  "product-in-market": {
    en: "Product in market",
    es: "Producto en mercado",
    fr: "Produit sur le marché",
  },
  "private-beta": {
    en: "Private beta",
    es: "Beta privada",
    fr: "Beta privée",
  },
  "venture-in-development": {
    en: "In development",
    es: "En desarrollo",
    fr: "En développement",
  },
  "partner-venture": {
    en: "Partner venture",
    es: "Venture aliado",
    fr: "Venture partenaire",
  },
};

export const groupLabels: Record<PublicCompanyStatus, LocalizedString> = {
  "operating-company": {
    en: "Operating companies",
    es: "Compañías operativas",
    fr: "Entreprises opérationnelles",
  },
  "product-in-market": {
    en: "Products in market",
    es: "Productos en mercado",
    fr: "Produits sur le marché",
  },
  "private-beta": {
    en: "Private beta",
    es: "Beta privada",
    fr: "Beta privée",
  },
  "venture-in-development": {
    en: "Ventures in development",
    es: "Ventures en desarrollo",
    fr: "Ventures en développement",
  },
  "partner-venture": {
    en: "Partner ventures",
    es: "Ventures aliados",
    fr: "Ventures partenaires",
  },
};

export const relationshipLabels: Record<
  PortfolioCompany["relationship"],
  LocalizedString
> = {
  owned: {
    en: "Owned by Revoluc",
    es: "Propiedad de Revoluc",
    fr: "Détenue par Revoluc",
  },
  operated: {
    en: "Operated by Revoluc",
    es: "Operada por Revoluc",
    fr: "Exploitée par Revoluc",
  },
  built: {
    en: "Built by Revoluc",
    es: "Construida por Revoluc",
    fr: "Construite par Revoluc",
  },
  partner: {
    en: "Partner venture",
    es: "Venture aliado",
    fr: "Venture partenaire",
  },
};

export const publicStatusOrder: PublicCompanyStatus[] = [
  "operating-company",
  "product-in-market",
  "private-beta",
  "venture-in-development",
  "partner-venture",
];

export const homeContent = {
  eyebrow: {
    en: "Technology holding and venture builder",
    es: "Holding tecnológica y venture builder",
    fr: "Holding technologique et venture builder",
  },
  headline: {
    en: "We build, operate, support and scale technology companies.",
    es: "Creamos, operamos, apoyamos y escalamos compañías tecnológicas.",
    fr: "Nous créons, exploitons, soutenons et développons des entreprises technologiques.",
  },
  subtitle: {
    en: "Revoluc Inc. is a company-building group focused on real operating ventures across software, commerce, real estate technology, professional networks and customer operations.",
    es: "Revoluc Inc. es un grupo constructor de compañías enfocado en ventures reales en software, comercio, tecnología inmobiliaria, redes profesionales y operaciones de clientes.",
    fr: "Revoluc Inc. est un groupe de construction d'entreprises centré sur des ventures réels dans le logiciel, le commerce, la technologie immobilière, les réseaux professionnels et les opérations client.",
  },
  primaryCta: {
    en: "Explore companies",
    es: "Explorar compañías",
    fr: "Explorer les entreprises",
  },
  secondaryCta: {
    en: "Build with Revoluc",
    es: "Construir con Revoluc",
    fr: "Construire avec Revoluc",
  },
  portfolioTitle: {
    en: "Portfolio organized by maturity",
    es: "Portafolio organizado por madurez",
    fr: "Portefeuille organisé par maturité",
  },
  portfolioCopy: {
    en: "A company appears publicly only when it has a defined product, market, relationship with Revoluc, portfolio lead and proof of existence.",
    es: "Una compañía aparece públicamente solo cuando tiene producto definido, mercado, relación con Revoluc, líder de portafolio y prueba de existencia.",
    fr: "Une entreprise apparaît publiquement uniquement lorsqu'elle a un produit défini, un marché, une relation avec Revoluc, un responsable de portefeuille et une preuve d'existence.",
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
      "Revoluc Inc. is a Delaware technology holding company and venture builder.",
      "The group builds and supports companies where it can contribute execution, shared infrastructure and long-term operational responsibility.",
      "Revoluc focuses on sectors where it has active projects: enterprise software, digital commerce, real estate technology, professional networks, customer operations and digital services.",
    ],
    es: [
      "Revoluc Inc. es una holding tecnológica y venture builder constituida en Delaware.",
      "El grupo construye y acompaña compañías donde puede aportar ejecución, infraestructura compartida y responsabilidad operativa a largo plazo.",
      "Revoluc se enfoca en sectores donde tiene proyectos activos: software empresarial, comercio digital, tecnología inmobiliaria, redes profesionales, operaciones de clientes y servicios digitales.",
    ],
    fr: [
      "Revoluc Inc. est une holding technologique et venture builder constituée au Delaware.",
      "Le groupe construit et soutient des entreprises où il peut apporter exécution, infrastructure partagée et responsabilité opérationnelle à long terme.",
      "Revoluc se concentre sur les secteurs où il dispose de projets actifs : logiciels d'entreprise, commerce numérique, technologie immobilière, réseaux professionnels, opérations client et services numériques.",
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
      "Our mission is to build technology companies that solve operational problems and create durable economic value.",
      "We only present ventures with a defined product, market, operating context and clear relationship with Revoluc.",
      "The group gives its ventures focus, governance, product direction, engineering support and commercial discipline over time.",
    ],
    es: [
      "Nuestra misión es construir compañías tecnológicas que resuelvan problemas operativos y creen valor económico duradero.",
      "Solo presentamos proyectos con producto definido, mercado, contexto operativo y una relación clara con Revoluc.",
      "El grupo aporta foco, gobernanza, dirección de producto, soporte de ingeniería y disciplina comercial a largo plazo.",
    ],
    fr: [
      "Notre mission est de bâtir des entreprises technologiques qui résolvent des problèmes opérationnels et créent une valeur économique durable.",
      "Nous présentons uniquement les projets avec un produit défini, un marché, un contexte opérationnel et une relation claire avec Revoluc.",
      "Le groupe apporte concentration, gouvernance, direction produit, soutien d'ingénierie et discipline commerciale dans la durée.",
    ],
  },
};

export const aboutSections = [
  {
    id: "who-we-are",
    title: {
      en: "Who we are",
      es: "Quiénes somos",
      fr: "Qui nous sommes",
    },
    paragraphs: [
      {
        en: "Revoluc Inc. is a Delaware technology holding company and venture builder that builds, operates, supports and scales technology companies.",
        es: "Revoluc Inc. es una holding tecnológica y venture builder de Delaware que crea, opera, apoya y escala compañías tecnológicas.",
        fr: "Revoluc Inc. est une holding technologique et venture builder du Delaware qui crée, exploite, soutient et développe des entreprises technologiques.",
      },
      {
        en: "The group is organized around companies with defined products, markets, operating context and a clear relationship with Revoluc.",
        es: "El grupo se organiza alrededor de compañías con productos definidos, mercados claros, contexto operativo y una relación verificable con Revoluc.",
        fr: "Le groupe s'organise autour d'entreprises avec des produits définis, des marchés clairs, un contexte opérationnel et une relation vérifiable avec Revoluc.",
      },
    ],
  },
  {
    id: "origin",
    title: {
      en: "Our origin",
      es: "Nuestro origen",
      fr: "Notre origine",
    },
    paragraphs: [
      {
        en: "Revoluc was created from software, product and company-building work led by Néstor Mosquera, with the goal of turning execution capacity into a structured technology group.",
        es: "Revoluc nace del trabajo de software, producto y construcción de compañías liderado por Néstor Mosquera, con el objetivo de convertir capacidad de ejecución en un grupo tecnológico estructurado.",
        fr: "Revoluc est né du travail logiciel, produit et de construction d'entreprises mené par Néstor Mosquera, avec l'objectif de transformer la capacité d'exécution en un groupe technologique structuré.",
      },
      {
        en: "Its portfolio has grown around practical operating needs: enterprise software, digital commerce, real estate technology, professional networks, customer operations and digital services.",
        es: "Su portafolio ha crecido alrededor de necesidades operativas reales: software empresarial, comercio digital, tecnología inmobiliaria, redes profesionales, operaciones de clientes y servicios digitales.",
        fr: "Son portefeuille s'est développé autour de besoins opérationnels concrets : logiciels d'entreprise, commerce numérique, technologie immobilière, réseaux professionnels, opérations client et services numériques.",
      },
    ],
  },
  {
    id: "mission",
    title: {
      en: "Mission",
      es: "Misión",
      fr: "Mission",
    },
    paragraphs: [
      {
        en: "Our mission is to build technology companies that solve operational problems and create durable economic value.",
        es: "Nuestra misión es construir compañías tecnológicas que resuelvan problemas operativos y creen valor económico duradero.",
        fr: "Notre mission est de bâtir des entreprises technologiques qui résolvent des problèmes opérationnels et créent une valeur économique durable.",
      },
      {
        en: "Revoluc gives its ventures focus, governance, product direction, engineering support and commercial discipline over time.",
        es: "Revoluc aporta foco, gobernanza, dirección de producto, soporte de ingeniería y disciplina comercial a largo plazo.",
        fr: "Revoluc apporte concentration, gouvernance, direction produit, soutien d'ingénierie et discipline commerciale dans la durée.",
      },
    ],
  },
  {
    id: "operating-model",
    title: {
      en: "Operating model",
      es: "Modelo operativo",
      fr: "Modèle opérationnel",
    },
    paragraphs: [
      {
        en: "Revoluc works through four operating capabilities: build, operate, support and scale. This means defining products, running real responsibilities, sharing infrastructure and turning validated products into repeatable operations.",
        es: "Revoluc trabaja mediante cuatro capacidades operativas: construir, operar, apoyar y escalar. Esto significa definir productos, asumir responsabilidades reales, compartir infraestructura y convertir productos validados en operaciones repetibles.",
        fr: "Revoluc travaille à travers quatre capacités opérationnelles : construire, exploiter, soutenir et développer. Cela signifie définir les produits, assumer de vraies responsabilités, partager l'infrastructure et transformer les produits validés en opérations répétables.",
      },
    ],
    items: [
      { en: "Build", es: "Construir", fr: "Construire" },
      { en: "Operate", es: "Operar", fr: "Exploiter" },
      { en: "Support", es: "Apoyar", fr: "Soutenir" },
      { en: "Scale", es: "Escalar", fr: "Développer" },
    ],
  },
  {
    id: "principles",
    title: {
      en: "Principles",
      es: "Principios",
      fr: "Principes",
    },
    paragraphs: [
      {
        en: "The group favors operational truth over logo collecting, evidence over vague claims, shared systems over isolated work and long-term responsibility over short-term announcements.",
        es: "El grupo prioriza verdad operativa sobre acumulación de logos, evidencia sobre afirmaciones vagas, sistemas compartidos sobre trabajo aislado y responsabilidad de largo plazo sobre anuncios de corto plazo.",
        fr: "Le groupe privilégie la vérité opérationnelle plutôt que l'accumulation de logos, la preuve plutôt que les affirmations vagues, les systèmes partagés plutôt que le travail isolé et la responsabilité à long terme plutôt que les annonces à court terme.",
      },
    ],
    items: [
      {
        en: "Defined product and market",
        es: "Producto y mercado definidos",
        fr: "Produit et marché définis",
      },
      {
        en: "Clear relationship with Revoluc",
        es: "Relación clara con Revoluc",
        fr: "Relation claire avec Revoluc",
      },
      {
        en: "Evidence before stronger claims",
        es: "Evidencia antes de afirmaciones fuertes",
        fr: "Preuve avant les affirmations fortes",
      },
      {
        en: "Long-term operating discipline",
        es: "Disciplina operativa de largo plazo",
        fr: "Discipline opérationnelle à long terme",
      },
    ],
  },
  {
    id: "infrastructure",
    title: {
      en: "Shared infrastructure",
      es: "Infraestructura compartida",
      fr: "Infrastructure partagée",
    },
    paragraphs: [
      {
        en: "Revoluc supports portfolio companies with shared product strategy, software engineering, design, finance, administration, brand, growth, governance, operations and technology systems.",
        es: "Revoluc apoya a las compañías del portafolio con estrategia de producto, ingeniería de software, diseño, finanzas, administración, marca, crecimiento, gobernanza, operaciones y tecnología compartida.",
        fr: "Revoluc soutient les entreprises du portefeuille avec stratégie produit, ingénierie logicielle, design, finance, administration, marque, croissance, gouvernance, opérations et systèmes technologiques partagés.",
      },
    ],
    items: [
      {
        en: "Product strategy",
        es: "Estrategia de producto",
        fr: "Stratégie produit",
      },
      {
        en: "Software engineering",
        es: "Ingeniería de software",
        fr: "Ingénierie logicielle",
      },
      { en: "Design", es: "Diseño", fr: "Design" },
      {
        en: "Finance and administration",
        es: "Finanzas y administración",
        fr: "Finance et administration",
      },
      {
        en: "Brand and growth",
        es: "Marca y crecimiento",
        fr: "Marque et croissance",
      },
      {
        en: "Shared technology",
        es: "Tecnología compartida",
        fr: "Technologie partagée",
      },
      { en: "Governance", es: "Gobernanza", fr: "Gouvernance" },
      { en: "Operations", es: "Operaciones", fr: "Opérations" },
    ],
  },
  {
    id: "geography",
    title: {
      en: "Geographic reach",
      es: "Alcance geográfico",
      fr: "Portée géographique",
    },
    paragraphs: [
      {
        en: "Revoluc is incorporated in Delaware, uses a business mailing address in San Francisco and is led from Colombia, while its portfolio serves markets across Latin America, the United States and the specific geographies of each venture.",
        es: "Revoluc está constituida en Delaware, utiliza una dirección postal comercial en San Francisco y es liderada desde Colombia, mientras su portafolio atiende mercados en América Latina, Estados Unidos y las geografías específicas de cada venture.",
        fr: "Revoluc est constituée au Delaware, utilise une adresse postale commerciale à San Francisco et est dirigée depuis la Colombie, tandis que son portefeuille sert des marchés en Amérique latine, aux États-Unis et dans les géographies propres à chaque venture.",
      },
    ],
  },
  {
    id: "leadership",
    title: {
      en: "Leadership",
      es: "Liderazgo",
      fr: "Direction",
    },
    paragraphs: [
      {
        en: "Revoluc is led by Néstor Mosquera, Founder & CEO, a software developer and technology entrepreneur responsible for group strategy, product direction, technology and portfolio development.",
        es: "Revoluc es liderada por Néstor Mosquera, Founder & CEO, software developer y emprendedor tecnológico responsable de estrategia del grupo, dirección de producto, tecnología y desarrollo del portafolio.",
        fr: "Revoluc est dirigée par Néstor Mosquera, Founder & CEO, software developer et entrepreneur technologique responsable de la stratégie du groupe, de la direction produit, de la technologie et du développement du portefeuille.",
      },
    ],
  },
] satisfies {
  id: string;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  items?: LocalizedString[];
}[];

export const operationalModel = [
  {
    label: {
      en: "Build",
      es: "Construir",
      fr: "Construire",
    },
    description: {
      en: "Define the product, validate the problem, design the first operating system and build the technology foundation.",
      es: "Definir el producto, validar el problema, diseñar el primer sistema operativo y construir la base tecnológica.",
      fr: "Définir le produit, valider le problème, concevoir le premier système opérationnel et construire la base technologique.",
    },
  },
  {
    label: {
      en: "Operate",
      es: "Operar",
      fr: "Exploiter",
    },
    description: {
      en: "Run the company with owners, responsibilities, systems, financial discipline and customer-facing execution.",
      es: "Operar la compañía con responsables, sistemas, disciplina financiera y ejecución frente al cliente.",
      fr: "Exploiter l'entreprise avec des responsables, des systèmes, une discipline financière et une exécution client.",
    },
  },
  {
    label: {
      en: "Support",
      es: "Apoyar",
      fr: "Soutenir",
    },
    description: {
      en: "Provide shared engineering, design, administration, growth and governance where a venture needs leverage.",
      es: "Aportar ingeniería, diseño, administración, crecimiento y gobernanza compartida donde el venture necesita apoyo.",
      fr: "Fournir ingénierie, design, administration, croissance et gouvernance partagés lorsque le venture a besoin d'appui.",
    },
  },
  {
    label: {
      en: "Scale",
      es: "Escalar",
      fr: "Développer",
    },
    description: {
      en: "Turn validated products into repeatable operations, broader markets and stronger long-term structures.",
      es: "Convertir productos validados en operaciones repetibles, mercados más amplios y estructuras de largo plazo.",
      fr: "Transformer les produits validés en opérations répétables, marchés élargis et structures de long terme.",
    },
  },
];

export const sharedInfrastructure = [
  {
    en: "Product strategy",
    es: "Estrategia de producto",
    fr: "Stratégie produit",
  },
  {
    en: "Software engineering",
    es: "Ingeniería de software",
    fr: "Ingénierie logicielle",
  },
  { en: "Design", es: "Diseño", fr: "Design" },
  {
    en: "Finance and administration",
    es: "Finanzas y administración",
    fr: "Finance et administration",
  },
  {
    en: "Brand and growth",
    es: "Marca y crecimiento",
    fr: "Marque et croissance",
  },
  {
    en: "Shared technology",
    es: "Tecnología compartida",
    fr: "Technologie partagée",
  },
  { en: "Governance", es: "Gobernanza", fr: "Gouvernance" },
  { en: "Operations", es: "Operaciones", fr: "Opérations" },
];

export const focusAreas = [
  {
    en: "Enterprise software",
    es: "Software empresarial",
    fr: "Logiciels d'entreprise",
  },
  { en: "Digital commerce", es: "Comercio digital", fr: "Commerce numérique" },
  {
    en: "Real estate technology",
    es: "Tecnología inmobiliaria",
    fr: "Technologie immobilière",
  },
  {
    en: "Professional networks",
    es: "Redes profesionales",
    fr: "Réseaux professionnels",
  },
  {
    en: "Customer operations",
    es: "Operaciones de clientes",
    fr: "Opérations client",
  },
  {
    en: "Digital services",
    es: "Servicios digitales",
    fr: "Services numériques",
  },
];

export const teamContent = {
  title: {
    en: "Leadership",
    es: "Liderazgo",
    fr: "Direction",
  },
  intro: {
    en: "Revoluc is led by operators responsible for the group's strategy, technology and portfolio development.",
    es: "Revoluc es liderada por operadores responsables de la estrategia del grupo, la tecnología y el desarrollo del portafolio.",
    fr: "Revoluc est dirigée par des opérateurs responsables de la stratégie du groupe, de la technologie et du développement du portefeuille.",
  },
};

export const founderProfile = {
  name: "Néstor Mosquera",
  role: "Founder & CEO",
  location: "Colombia",
  linkedin: "https://co.linkedin.com/in/nestor-mosquera-631231259",
  bio: {
    en: "Software developer and technology entrepreneur leading Revoluc's group strategy, product direction, technology decisions, portfolio development and company-building work.",
    es: "Software developer y emprendedor tecnológico que lidera la estrategia del grupo, dirección de producto, decisiones tecnológicas, desarrollo del portafolio y construcción de compañías en Revoluc.",
    fr: "Software developer et entrepreneur technologique qui dirige la stratégie du groupe, la direction produit, les décisions technologiques, le développement du portefeuille et la construction d'entreprises chez Revoluc.",
  },
  responsibilities: [
    "Group strategy",
    "Product direction",
    "Technology",
    "Portfolio development",
    "Company building",
  ],
};

export const contactContent = {
  title: {
    en: "Contact Revoluc",
    es: "Contactar a Revoluc",
    fr: "Contacter Revoluc",
  },
  copy: {
    en: "Share context so the right person can review the opportunity and respond with a useful next step.",
    es: "Comparte contexto para que la persona correcta pueda revisar la oportunidad y responder con un siguiente paso útil.",
    fr: "Partagez le contexte afin que la bonne personne puisse examiner l'opportunité et répondre avec une prochaine étape utile.",
  },
  submit: {
    en: "Prepare inquiry",
    es: "Preparar solicitud",
    fr: "Préparer la demande",
  },
  confirmation: {
    en: "Your inquiry has been prepared in your email client. Please send it so Revoluc can receive and review it.",
    es: "Tu solicitud se preparó en tu cliente de correo. Por favor envíala para que Revoluc pueda recibirla y revisarla.",
    fr: "Votre demande a été préparée dans votre client email. Veuillez l'envoyer afin que Revoluc puisse la recevoir et l'examiner.",
  },
  privacyConsent: {
    en: "I agree that Revoluc Inc. may use this information to respond to my inquiry.",
    es: "Acepto que Revoluc Inc. use esta información para responder a mi solicitud.",
    fr: "J'accepte que Revoluc Inc. utilise ces informations pour répondre à ma demande.",
  },
};

export const contactReasons = [
  {
    value: "Build a company with Revoluc",
    label: {
      en: "Build a company with Revoluc",
      es: "Construir una compañía con Revoluc",
      fr: "Construire une entreprise avec Revoluc",
    },
  },
  {
    value: "Commercial partnership",
    label: {
      en: "Commercial partnership",
      es: "Alianza comercial",
      fr: "Partenariat commercial",
    },
  },
  {
    value: "Portfolio company inquiry",
    label: {
      en: "Portfolio company inquiry",
      es: "Consulta sobre una compañía del portafolio",
      fr: "Demande sur une entreprise du portefeuille",
    },
  },
  {
    value: "Investment conversation",
    label: {
      en: "Investment conversation",
      es: "Conversación de inversión",
      fr: "Discussion d'investissement",
    },
  },
  {
    value: "Media and press",
    label: {
      en: "Media and press",
      es: "Medios y prensa",
      fr: "Médias et presse",
    },
  },
  {
    value: "Careers",
    label: {
      en: "Careers",
      es: "Carreras",
      fr: "Carrières",
    },
  },
  {
    value: "General inquiry",
    label: {
      en: "General inquiry",
      es: "Consulta general",
      fr: "Demande générale",
    },
  },
];

export const contactOperationalNotes = [
  "Send an automatic email",
  "Save the lead",
  "Tag the opportunity type",
  "Notify the responsible person",
  "Record source and UTM fields",
  "Apply antispam protection",
];

export const portfolioContent = {
  title: {
    en: "Companies",
    es: "Compañías",
    fr: "Entreprises",
  },
  intro: {
    en: "The portfolio is organized by operating maturity, not by importance. Public entries are limited to companies and ventures with a defined product, market, relationship with Revoluc and proof of existence.",
    es: "El portafolio se organiza por madurez operativa, no por importancia. Las entradas públicas se limitan a compañías y ventures con producto definido, mercado, relación con Revoluc y prueba de existencia.",
    fr: "Le portefeuille est organisé par maturité opérationnelle, pas par importance. Les entrées publiques sont limitées aux entreprises et ventures avec produit défini, marché, relation avec Revoluc et preuve d'existence.",
  },
};

export const socialContent = {
  title: {
    en: "Revoluc Foundation",
    es: "Revoluc Foundation",
    fr: "Revoluc Foundation",
  },
  intro: {
    en: "Revoluc Foundation is the group's social commitment platform for nonprofit support, donations and technology-enabled initiatives.",
    es: "Revoluc Foundation es la plataforma de compromiso social del grupo para apoyar organizaciones sin ánimo de lucro, donaciones e iniciativas impulsadas por tecnología.",
    fr: "Revoluc Foundation est la plateforme d'engagement social du groupe pour soutenir les organisations à but non lucratif, les dons et les initiatives appuyées par la technologie.",
  },
  note: {
    en: "We publish supported initiatives with clear information about the organization, contribution, timeframe and measurable outcome.",
    es: "Publicamos iniciativas apoyadas con información clara sobre la organización, contribución, periodo y resultado medible.",
    fr: "Nous publions les initiatives soutenues avec des informations claires sur l'organisation, la contribution, la période et le résultat mesurable.",
  },
};

export const socialImpactAreas = [
  {
    label: {
      en: "Nonprofit support",
      es: "Apoyo a organizaciones sin ánimo de lucro",
      fr: "Soutien aux organisations à but non lucratif",
    },
    description: {
      en: "Technology, operational systems or visibility for nonprofit organizations with clear needs.",
      es: "Tecnología, sistemas operativos o visibilidad para organizaciones sin ánimo de lucro con necesidades claras.",
      fr: "Technologie, systèmes opérationnels ou visibilité pour des organisations à but non lucratif avec des besoins clairs.",
    },
  },
  {
    label: {
      en: "Donations",
      es: "Donaciones",
      fr: "Dons",
    },
    description: {
      en: "Selective contributions to causes aligned with Revoluc's ability to help responsibly.",
      es: "Contribuciones selectivas a causas alineadas con la capacidad de Revoluc de ayudar responsablemente.",
      fr: "Contributions sélectives à des causes alignées avec la capacité de Revoluc à aider de manière responsable.",
    },
  },
];

export const startupContent = {
  title: {
    en: "Venture Building",
    es: "Construcción de empresas",
    fr: "Construction d'entreprises",
  },
  intro: {
    en: "Revoluc works with founders, early-stage teams and businesses that need an active company-building partner, not only advice.",
    es: "Revoluc trabaja con fundadores, equipos en etapa temprana y negocios que necesitan un socio activo para construir compañías, no solo asesoría.",
    fr: "Revoluc travaille avec des fondateurs, des équipes en phase initiale et des entreprises qui ont besoin d'un partenaire actif de construction, pas seulement de conseil.",
  },
  note: {
    en: "Each partnership is structured according to the work, capital, risk and long-term responsibilities involved.",
    es: "Cada alianza se estructura según el trabajo, capital, riesgo y responsabilidades de largo plazo involucradas.",
    fr: "Chaque partenariat est structuré selon le travail, le capital, le risque et les responsabilités à long terme impliqués.",
  },
  cta: {
    en: "Submit your venture",
    es: "Enviar tu proyecto",
    fr: "Soumettre votre projet",
  },
};

export const ventureBuildingSections = [
  {
    title: {
      en: "Who it is for",
      es: "Para quién es",
      fr: "À qui cela s'adresse",
    },
    items: [
      {
        en: "Founders with a clear problem",
        es: "Fundadores con un problema claro",
        fr: "Fondateurs avec un problème clair",
      },
      {
        en: "Early-stage teams",
        es: "Equipos en etapa temprana",
        fr: "Équipes en phase initiale",
      },
      {
        en: "Businesses that need to build a digital product",
        es: "Empresas que necesitan construir un producto digital",
        fr: "Entreprises qui doivent construire un produit numérique",
      },
      {
        en: "Projects where Revoluc can contribute active execution",
        es: "Proyectos donde Revoluc pueda aportar ejecución activa",
        fr: "Projets où Revoluc peut apporter une exécution active",
      },
    ],
  },
  {
    title: {
      en: "What Revoluc contributes",
      es: "Qué aporta Revoluc",
      fr: "Ce que Revoluc apporte",
    },
    items: [
      { en: "Validation", es: "Validación", fr: "Validation" },
      {
        en: "Product strategy",
        es: "Estrategia de producto",
        fr: "Stratégie produit",
      },
      { en: "Design", es: "Diseño", fr: "Design" },
      { en: "Engineering", es: "Ingeniería", fr: "Ingénierie" },
      { en: "Automation", es: "Automatización", fr: "Automatisation" },
      { en: "Operations", es: "Operaciones", fr: "Opérations" },
      { en: "Brand", es: "Marca", fr: "Marque" },
      {
        en: "Commercialization",
        es: "Comercialización",
        fr: "Commercialisation",
      },
      {
        en: "Corporate governance",
        es: "Gobierno empresarial",
        fr: "Gouvernance d'entreprise",
      },
    ],
  },
  {
    title: {
      en: "How we work",
      es: "Cómo trabajamos",
      fr: "Comment nous travaillons",
    },
    items: [
      { en: "Initial review", es: "Revisión inicial", fr: "Examen initial" },
      { en: "Discovery", es: "Descubrimiento", fr: "Découverte" },
      {
        en: "Venture assessment",
        es: "Evaluación del proyecto",
        fr: "Évaluation du projet",
      },
      {
        en: "Structure and responsibilities",
        es: "Estructura y responsabilidades",
        fr: "Structure et responsabilités",
      },
      {
        en: "Build and launch",
        es: "Construcción y lanzamiento",
        fr: "Construction et lancement",
      },
      {
        en: "Long-term operation",
        es: "Operación de largo plazo",
        fr: "Exploitation à long terme",
      },
    ],
  },
  {
    title: {
      en: "Evaluation criteria",
      es: "Criterios de evaluación",
      fr: "Critères d'évaluation",
    },
    items: [
      {
        en: "Identifiable problem",
        es: "Problema identificable",
        fr: "Problème identifiable",
      },
      {
        en: "Sufficiently broad market",
        es: "Mercado suficientemente amplio",
        fr: "Marché suffisamment large",
      },
      { en: "Committed team", es: "Equipo comprometido", fr: "Équipe engagée" },
      {
        en: "Execution capacity",
        es: "Capacidad de ejecución",
        fr: "Capacité d'exécution",
      },
      {
        en: "Strategic fit",
        es: "Encaje estratégico",
        fr: "Alignement stratégique",
      },
      {
        en: "Potential to build a sustainable advantage",
        es: "Posibilidad de construir una ventaja sostenible",
        fr: "Potentiel de construire un avantage durable",
      },
    ],
  },
];

export const companies: PortfolioCompany[] = [
  {
    name: "Nevobit",
    slug: "nevobit",
    relationship: "operated",
    status: "operating-company",
    category: {
      en: "Digital services",
      es: "Servicios digitales",
      fr: "Services numériques",
    },
    description: {
      en: "Software development company serving Revoluc group companies and external clients.",
      es: "Empresa de desarrollo de software para compañías del grupo Revoluc y clientes externos.",
      fr: "Entreprise de développement logiciel pour les sociétés du groupe Revoluc et des clients externes.",
    },
    market: {
      en: "Global",
      es: "Global",
      fr: "Global",
    },
    website: "https://nevobit.com",
    productName: {
      en: "Nevobit software services",
      es: "Servicios de software de Nevobit",
      fr: "Services logiciels Nevobit",
    },
    logo: placeholderCompanyLogo,
    internalResponsible: {
      en: "Néstor Mosquera",
      es: "Néstor Mosquera",
      fr: "Néstor Mosquera",
    },
    proof: {
      en: "Public website and active service offering.",
      es: "Sitio web público y oferta activa de servicios.",
      fr: "Site web public et offre de services active.",
    },
    problem: {
      en: "Companies need reliable software execution without building a full internal engineering organization first.",
      es: "Las compañías necesitan ejecución de software confiable sin construir primero un equipo interno completo de ingeniería.",
      fr: "Les entreprises ont besoin d'une exécution logicielle fiable sans créer d'abord une organisation d'ingénierie complète.",
    },
    solution: {
      en: "Nevobit delivers software strategy, development and technical support for group companies and external partners.",
      es: "Nevobit entrega estrategia de software, desarrollo y soporte técnico para compañías del grupo y aliados externos.",
      fr: "Nevobit fournit stratégie logicielle, développement et support technique aux sociétés du groupe et partenaires externes.",
    },
    evidenceItems: [
      {
        en: "Services: product strategy, custom software development, web platforms, integrations and technical support.",
        es: "Servicios: estrategia de producto, desarrollo de software a la medida, plataformas web, integraciones y soporte técnico.",
        fr: "Services : stratégie produit, développement logiciel sur mesure, plateformes web, intégrations et support technique.",
      },
      {
        en: "Technologies: modern web applications, APIs, databases, cloud deployment and business workflow automation.",
        es: "Tecnologías: aplicaciones web modernas, APIs, bases de datos, despliegue cloud y automatización de flujos empresariales.",
        fr: "Technologies : applications web modernes, API, bases de données, déploiement cloud et automatisation de flux métier.",
      },
      {
        en: "Case work: software execution for Revoluc portfolio companies and external client projects.",
        es: "Caso real: ejecución de software para compañías del portafolio Revoluc y proyectos de clientes externos.",
        fr: "Cas réel : exécution logicielle pour les sociétés du portefeuille Revoluc et des projets clients externes.",
      },
      {
        en: "Public website: nevobit.com.",
        es: "Sitio público: nevobit.com.",
        fr: "Site public : nevobit.com.",
      },
    ],
    ctaLabel: {
      en: "Visit Nevobit",
      es: "Visitar Nevobit",
      fr: "Visiter Nevobit",
    },
  },
  {
    name: "Prooving",
    slug: "prooving",
    relationship: "built",
    status: "product-in-market",
    category: {
      en: "Digital commerce",
      es: "Comercio digital",
      fr: "Commerce numérique",
    },
    description: {
      en: "Colombian brand of computers and technology products.",
      es: "Marca colombiana de computadores y productos tecnológicos.",
      fr: "Marque colombienne d'ordinateurs et de produits technologiques.",
    },
    market: {
      en: "Colombia",
      es: "Colombia",
      fr: "Colombie",
    },
    headquarters: {
      en: "Colombia",
      es: "Colombia",
      fr: "Colombie",
    },
    website: "https://prooving.co",
    productName: {
      en: "Prooving computers and technology products",
      es: "Computadores y productos tecnológicos Prooving",
      fr: "Ordinateurs et produits technologiques Prooving",
    },
    logo: placeholderCompanyLogo,
    internalResponsible: {
      en: "Néstor Mosquera",
      es: "Néstor Mosquera",
      fr: "Néstor Mosquera",
    },
    proof: {
      en: "Defined product category and commercial market.",
      es: "Categoría de producto y mercado comercial definidos.",
      fr: "Catégorie de produit et marché commercial définis.",
    },
    problem: {
      en: "Buyers need accessible computers and technology products with a brand focused on the Colombian market.",
      es: "Los compradores necesitan computadores y productos tecnológicos accesibles con una marca enfocada en el mercado colombiano.",
      fr: "Les acheteurs ont besoin d'ordinateurs et de produits technologiques accessibles avec une marque centrée sur le marché colombien.",
    },
    solution: {
      en: "Prooving operates as a technology product brand for computers and related devices in Colombia.",
      es: "Prooving opera como una marca de productos tecnológicos para computadores y dispositivos relacionados en Colombia.",
      fr: "Prooving opère comme une marque de produits technologiques pour ordinateurs et appareils associés en Colombie.",
    },
    evidenceItems: [
      {
        en: "Product lines: Aurora, Wolf, Vortex and additional Prooving computer configurations when available.",
        es: "Líneas de producto: Aurora, Wolf, Vortex y configuraciones adicionales de computadores Prooving cuando estén disponibles.",
        fr: "Lignes produit : Aurora, Wolf, Vortex et configurations d'ordinateurs Prooving supplémentaires selon disponibilité.",
      },
      {
        en: "Categories: computers, technology products and related accessories for the Colombian market.",
        es: "Categorías: computadores, productos tecnológicos y accesorios relacionados para el mercado colombiano.",
        fr: "Catégories : ordinateurs, produits technologiques et accessoires associés pour le marché colombien.",
      },
      {
        en: "Availability: product in market through Prooving's commercial website and active sales channels.",
        es: "Disponibilidad: producto en mercado a través del sitio comercial de Prooving y canales de venta activos.",
        fr: "Disponibilité : produit sur le marché via le site commercial Prooving et des canaux de vente actifs.",
      },
      {
        en: "Public website: prooving.co.",
        es: "Sitio público: prooving.co.",
        fr: "Site public : prooving.co.",
      },
    ],
    ctaLabel: {
      en: "Visit Prooving",
      es: "Visitar Prooving",
      fr: "Visiter Prooving",
    },
  },
  {
    name: "Helebba",
    slug: "helebba",
    relationship: "built",
    status: "product-in-market",
    category: {
      en: "Enterprise software",
      es: "Software empresarial",
      fr: "Logiciels d'entreprise",
    },
    website: "https://helebba.com",
    description: {
      en: "Cloud business management software for SMEs and entrepreneurs, publicly presented with invoicing, accounting, inventory, CRM, projects, HR, payments, scanning, apps and integrations.",
      es: "Software de gestión empresarial en la nube para pymes y emprendedores, presentado públicamente con facturación, contabilidad, inventario, CRM, proyectos, RR. HH., pagos, escaneo, apps e integraciones.",
      fr: "Logiciel cloud de gestion d'entreprise pour PME et entrepreneurs, présenté publiquement avec facturation, comptabilité, inventaire, CRM, projets, RH, paiements, scan, apps et intégrations.",
    },
    market: {
      en: "Spain and Latin America",
      es: "España y América Latina",
      fr: "Espagne et Amérique latine",
    },
    productName: {
      en: "Helebba business management software",
      es: "Software de gestión empresarial Helebba",
      fr: "Logiciel de gestion d'entreprise Helebba",
    },
    logo: placeholderCompanyLogo,
    internalResponsible: {
      en: "Néstor Mosquera",
      es: "Néstor Mosquera",
      fr: "Néstor Mosquera",
    },
    proof: {
      en: "Public commercial website presenting Helebba as available software with product claims, access links and a defined feature ecosystem.",
      es: "Sitio comercial público que presenta Helebba como software disponible, con afirmaciones de producto, enlaces de acceso y un ecosistema de funcionalidades definido.",
      fr: "Site commercial public présentant Helebba comme un logiciel disponible, avec des affirmations produit, des liens d'accès et un écosystème fonctionnel défini.",
    },
    problem: {
      en: "Small and medium-sized companies often manage customers, sales, inventory and operations across disconnected tools.",
      es: "Muchas pymes gestionan clientes, ventas, inventario y operaciones en herramientas desconectadas.",
      fr: "De nombreuses PME gèrent clients, ventes, stocks et opérations avec des outils déconnectés.",
    },
    solution: {
      en: "Helebba presents a cloud platform intended to centralize invoicing, accounting, inventory, CRM, projects, HR, treasury, ticket scanning, payments and operational integrations.",
      es: "Helebba presenta una plataforma en la nube para centralizar facturación, contabilidad, inventario, CRM, proyectos, RR. HH., tesorería, escaneo de tickets, pagos e integraciones operativas.",
      fr: "Helebba présente une plateforme cloud destinée à centraliser facturation, comptabilité, inventaire, CRM, projets, RH, trésorerie, scan de tickets, paiements et intégrations opérationnelles.",
    },
    evidenceItems: [
      {
        en: "Public site claims: more than 900,000 users, certified software, 160x faster invoicing and 80% faster collections.",
        es: "El sitio público afirma: más de 900.000 usuarios, software certificado, facturación 160 veces más rápida y cobros 80 % más rápidos.",
        fr: "Le site public affirme : plus de 900 000 utilisateurs, logiciel certifié, facturation 160 fois plus rapide et encaissements 80 % plus rapides.",
      },
      {
        en: "Compliance and fiscal scope presented publicly includes Verifactu, SII, electronic invoicing, AEAT, SAT, AFIP, anti-fraud law and GDPR.",
        es: "El alcance fiscal y de cumplimiento presentado públicamente incluye Verifactu, SII, factura electrónica, AEAT, SAT, AFIP, Ley Antifraude y RGPD.",
        fr: "Le périmètre fiscal et de conformité présenté publiquement inclut Verifactu, SII, facturation électronique, AEAT, SAT, AFIP, loi antifraude et RGPD.",
      },
      {
        en: "Product ecosystem presented publicly includes 47 currencies, ticket scanning with 96% precision, Helebba Wallet, App Store and Google Play availability, and integrations with banks, commerce platforms, CRM, communication and automation tools.",
        es: "El ecosistema de producto presentado públicamente incluye 47 monedas, escaneo de tickets con 96 % de precisión, Helebba Wallet, disponibilidad en App Store y Google Play, e integraciones con bancos, comercio, CRM, comunicación y automatización.",
        fr: "L'écosystème produit présenté publiquement inclut 47 devises, scan de tickets avec 96 % de précision, Helebba Wallet, disponibilité App Store et Google Play, et intégrations avec banques, commerce, CRM, communication et automatisation.",
      },
    ],
    ctaLabel: {
      en: "Visit Helebba",
      es: "Visitar Helebba",
      fr: "Visiter Helebba",
    },
  },
  {
    name: "Loobic",
    slug: "loobic",
    relationship: "built",
    status: "venture-in-development",
    category: {
      en: "Professional networks",
      es: "Redes profesionales",
      fr: "Réseaux professionnels",
    },
    description: {
      en: "Professional network for connecting people, companies and opportunities.",
      es: "Red profesional para conectar personas, empresas y oportunidades.",
      fr: "Réseau professionnel pour connecter personnes, entreprises et opportunités.",
    },
    market: {
      en: "Latin America",
      es: "América Latina",
      fr: "Amérique latine",
    },
    productName: {
      en: "Loobic network",
      es: "Red Loobic",
      fr: "Réseau Loobic",
    },
    logo: placeholderCompanyLogo,
    internalResponsible: {
      en: "Néstor Mosquera",
      es: "Néstor Mosquera",
      fr: "Néstor Mosquera",
    },
    proof: {
      en: "Defined product direction and venture roadmap.",
      es: "Dirección de producto y roadmap del venture definidos.",
      fr: "Direction produit et roadmap du venture définies.",
    },
    problem: {
      en: "Professionals and companies need clearer ways to discover trusted opportunities and relevant relationships.",
      es: "Profesionales y empresas necesitan formas más claras de descubrir oportunidades confiables y relaciones relevantes.",
      fr: "Professionnels et entreprises ont besoin de moyens plus clairs pour découvrir des opportunités fiables et des relations pertinentes.",
    },
    solution: {
      en: "Loobic is being developed as a professional network centered on people, companies and opportunities.",
      es: "Loobic se desarrolla como una red profesional centrada en personas, empresas y oportunidades.",
      fr: "Loobic est développé comme un réseau professionnel centré sur les personnes, les entreprises et les opportunités.",
    },
    evidenceItems: [
      {
        en: "Core scope: professional profiles, company presence, opportunity discovery and relationship building.",
        es: "Alcance central: perfiles profesionales, presencia de empresas, descubrimiento de oportunidades y construcción de relaciones.",
        fr: "Périmètre central : profils professionnels, présence d'entreprises, découverte d'opportunités et création de relations.",
      },
      {
        en: "Market: Latin American professional networks and digital opportunity discovery.",
        es: "Mercado: redes profesionales latinoamericanas y descubrimiento digital de oportunidades.",
        fr: "Marché : réseaux professionnels latino-américains et découverte numérique d'opportunités.",
      },
      {
        en: "Current status: in development with defined product direction and venture roadmap.",
        es: "Estado actual: en desarrollo con dirección de producto y roadmap del venture definidos.",
        fr: "Statut actuel : en développement avec direction produit et roadmap du venture définies.",
      },
    ],
    ctaLabel: {
      en: "Ask about Loobic",
      es: "Consultar sobre Loobic",
      fr: "Demander à propos de Loobic",
    },
  },
  {
    name: "Lytos",
    slug: "lytos",
    relationship: "built",
    status: "venture-in-development",
    category: {
      en: "Customer operations",
      es: "Operaciones de clientes",
      fr: "Opérations client",
    },
    description: {
      en: "Support, requests and ticket management platform.",
      es: "Plataforma de soporte, solicitudes y gestión de tickets.",
      fr: "Plateforme de support, demandes et gestion de tickets.",
    },
    market: {
      en: "Latin America",
      es: "América Latina",
      fr: "Amérique latine",
    },
    productName: {
      en: "Lytos support platform",
      es: "Plataforma de soporte Lytos",
      fr: "Plateforme de support Lytos",
    },
    logo: placeholderCompanyLogo,
    internalResponsible: {
      en: "Néstor Mosquera",
      es: "Néstor Mosquera",
      fr: "Néstor Mosquera",
    },
    proof: {
      en: "Defined product category and operating use case.",
      es: "Categoría de producto y caso de uso operativo definidos.",
      fr: "Catégorie de produit et cas d'usage opérationnel définis.",
    },
    problem: {
      en: "Teams lose visibility when requests, incidents and customer support conversations live across scattered channels.",
      es: "Los equipos pierden visibilidad cuando solicitudes, incidentes y conversaciones de soporte viven en canales dispersos.",
      fr: "Les équipes perdent en visibilité lorsque demandes, incidents et conversations de support sont dispersés.",
    },
    solution: {
      en: "Lytos is being built to organize requests, support queues, tickets and follow-up workflows.",
      es: "Lytos se construye para organizar solicitudes, colas de soporte, tickets y flujos de seguimiento.",
      fr: "Lytos est conçu pour organiser demandes, files de support, tickets et flux de suivi.",
    },
    evidenceItems: [
      {
        en: "Core scope: ticket intake, request management, support queues, assignments and follow-up workflows.",
        es: "Alcance central: recepción de tickets, gestión de solicitudes, colas de soporte, asignaciones y flujos de seguimiento.",
        fr: "Périmètre central : réception de tickets, gestion des demandes, files de support, affectations et suivis.",
      },
      {
        en: "Use cases: customer operations, internal support, service requests and incident tracking.",
        es: "Casos de uso: operaciones de clientes, soporte interno, solicitudes de servicio y seguimiento de incidentes.",
        fr: "Cas d'usage : opérations client, support interne, demandes de service et suivi d'incidents.",
      },
      {
        en: "Current status: in development with defined product category and operational use case.",
        es: "Estado actual: en desarrollo con categoría de producto y caso de uso operativo definidos.",
        fr: "Statut actuel : en développement avec catégorie produit et cas d'usage opérationnel définis.",
      },
    ],
    ctaLabel: {
      en: "Ask about Lytos",
      es: "Consultar sobre Lytos",
      fr: "Demander à propos de Lytos",
    },
  },
  {
    name: "Itaaj Realty",
    slug: "itaaj-realty",
    relationship: "partner",
    status: "partner-venture",
    category: {
      en: "Real estate technology",
      es: "Tecnología inmobiliaria",
      fr: "Technologie immobilière",
    },
    description: {
      en: "Real estate marketplace for buying, renting and sharing housing in Mexico.",
      es: "Marketplace inmobiliario para comprar, rentar y compartir vivienda en México.",
      fr: "Marketplace immobilier pour acheter, louer et partager un logement au Mexique.",
    },
    market: {
      en: "Mexico",
      es: "México",
      fr: "Mexique",
    },
    headquarters: {
      en: "Mexico",
      es: "México",
      fr: "Mexique",
    },
    productName: {
      en: "Itaaj Realty marketplace",
      es: "Marketplace Itaaj Realty",
      fr: "Marketplace Itaaj Realty",
    },
    logo: placeholderCompanyLogo,
    internalResponsible: {
      en: "Partner leadership with Revoluc participation",
      es: "Liderazgo del aliado con participación de Revoluc",
      fr: "Direction partenaire avec participation de Revoluc",
    },
    proof: {
      en: "Partner venture with defined real estate market and product scope.",
      es: "Venture aliado con mercado inmobiliario y alcance de producto definidos.",
      fr: "Venture partenaire avec marché immobilier et périmètre produit définis.",
    },
    problem: {
      en: "Housing search and transaction processes in Mexico can be fragmented, slow and difficult to trust.",
      es: "La búsqueda y transacción de vivienda en México puede ser fragmentada, lenta y difícil de confiar.",
      fr: "La recherche et les transactions de logement au Mexique peuvent être fragmentées, lentes et difficiles à fiabiliser.",
    },
    solution: {
      en: "Itaaj Realty is a partner venture focused on a marketplace for buying, renting and sharing housing in Mexico.",
      es: "Itaaj Realty es un venture aliado enfocado en un marketplace para comprar, rentar y compartir vivienda en México.",
      fr: "Itaaj Realty est un venture partenaire axé sur un marketplace pour acheter, louer et partager un logement au Mexique.",
    },
    evidenceItems: [
      {
        en: "Marketplace scope: property discovery for buying, renting and shared housing in Mexico.",
        es: "Alcance del marketplace: descubrimiento de propiedades para comprar, rentar y compartir vivienda en México.",
        fr: "Périmètre marketplace : découverte de biens pour acheter, louer et partager un logement au Mexique.",
      },
      {
        en: "Initial market: Mexico, with city-level availability published through Itaaj Realty's own channels.",
        es: "Mercado inicial: México, con disponibilidad por ciudad publicada en los canales propios de Itaaj Realty.",
        fr: "Marché initial : Mexique, avec disponibilité par ville publiée sur les canaux propres d'Itaaj Realty.",
      },
      {
        en: "Relationship: partner venture; Revoluc participates or collaborates but does not present Itaaj Realty as a fully controlled company.",
        es: "Relación: venture aliado; Revoluc participa o colabora, pero no presenta Itaaj Realty como una compañía completamente controlada.",
        fr: "Relation : venture partenaire ; Revoluc participe ou collabore sans présenter Itaaj Realty comme une société entièrement contrôlée.",
      },
    ],
    ctaLabel: {
      en: "Ask about Itaaj Realty",
      es: "Consultar sobre Itaaj Realty",
      fr: "Demander à propos d'Itaaj Realty",
    },
  },
];

export const privatePortfolioItems: PrivatePortfolioItem[] = [
  {
    name: "Snappra",
    status: "concept",
    reason: {
      en: "Not published until active digital marketing services are verified.",
      es: "No se publica hasta verificar servicios activos de marketing digital.",
      fr: "Non publié tant que les services actifs de marketing numérique ne sont pas vérifiés.",
    },
  },
  {
    name: "Vitalut",
    status: "concept",
    reason: {
      en: "Product, market and operation are not yet publicly verified.",
      es: "Producto, mercado y operación aún no están verificados públicamente.",
      fr: "Produit, marché et opération ne sont pas encore vérifiés publiquement.",
    },
  },
  {
    name: "Fitnopolis",
    status: "concept",
    reason: {
      en: "Product is not sufficiently developed for public listing.",
      es: "El producto no está suficientemente desarrollado para publicación pública.",
      fr: "Le produit n'est pas suffisamment développé pour une publication publique.",
    },
  },
  {
    name: "Algodonia",
    status: "concept",
    reason: {
      en: "Commercial definition is not publicly verifiable.",
      es: "La definición comercial no es verificable públicamente.",
      fr: "La définition commerciale n'est pas vérifiable publiquement.",
    },
  },
  {
    name: "Trooved",
    status: "concept",
    reason: {
      en: "Final product definition is pending.",
      es: "La definición final del producto está pendiente.",
      fr: "La définition finale du produit est en attente.",
    },
  },
  {
    name: "Sormi",
    status: "concept",
    reason: {
      en: "Final product definition is pending.",
      es: "La definición final del producto está pendiente.",
      fr: "La définition finale du produit est en attente.",
    },
  },
];

export const getCompanyBySlug = (slug: string) =>
  companies.find((company) => company.slug === slug);

export const localize = (value: LocalizedString, lang: Locale) =>
  value[lang] ?? value.en;
