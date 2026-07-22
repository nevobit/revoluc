import { notFound } from "next/navigation";
import { i18n, Locale } from "../../../../../i18n-config";
import { corporateTruth, localize } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "../../ContentPage.module.css";

const documents = {
  "privacy-policy": {
    title: {
      en: "Privacy Policy",
      es: "Política de Privacidad",
      fr: "Politique de confidentialité",
    },
    sections: [
      {
        heading: {
          en: "Controller",
          es: "Responsable",
          fr: "Responsable du traitement",
        },
        body: {
          en: `${corporateTruth.legalName}, a Delaware company, is responsible for this website and contact inquiries submitted through it.`,
          es: `${corporateTruth.legalName}, una compañía de Delaware, es responsable de este sitio web y de las solicitudes de contacto enviadas a través de él.`,
          fr: `${corporateTruth.legalName}, une société du Delaware, est responsable de ce site web et des demandes de contact envoyées par son intermédiaire.`,
        },
      },
      {
        heading: {
          en: "Data collected",
          es: "Datos recopilados",
          fr: "Données collectées",
        },
        body: {
          en: "The contact form asks for full name, work email, company or project, country, reason for contacting, message, privacy consent, source path and query parameters such as UTM values when present.",
          es: "El formulario de contacto solicita nombre completo, correo de trabajo, compañía o proyecto, país, motivo de contacto, mensaje, consentimiento de privacidad, ruta de origen y parámetros de consulta como valores UTM cuando existan.",
          fr: "Le formulaire de contact demande le nom complet, l'email professionnel, l'entreprise ou le projet, le pays, le motif de contact, le message, le consentement de confidentialité, le chemin d'origine et les paramètres de requête tels que les valeurs UTM lorsqu'ils existent.",
        },
      },
      {
        heading: {
          en: "Use of data",
          es: "Uso de los datos",
          fr: "Utilisation des données",
        },
        body: {
          en: "Revoluc uses contact information to review inquiries, classify the opportunity type, respond to the sender and route the conversation to the appropriate team.",
          es: "Revoluc usa la información de contacto para revisar solicitudes, clasificar el tipo de oportunidad, responder al remitente y dirigir la conversación al equipo adecuado.",
          fr: "Revoluc utilise les informations de contact pour examiner les demandes, classer le type d'opportunité, répondre à l'expéditeur et orienter la conversation vers l'équipe appropriée.",
        },
      },
      {
        heading: {
          en: "Form submission and storage",
          es: "Envío y almacenamiento del formulario",
          fr: "Envoi et stockage du formulaire",
        },
        body: {
          en: "Contact form submissions are validated by the website and prepared as an email addressed to Revoluc. Revoluc receives the inquiry when the sender sends that email. The website does not currently store submissions in a database, CRM or automated email delivery provider.",
          es: "Las solicitudes del formulario se validan en el sitio y se preparan como un correo dirigido a Revoluc. Revoluc recibe la solicitud cuando el remitente envía ese correo. El sitio web actualmente no almacena solicitudes en una base de datos, CRM o proveedor automatizado de envío de correo.",
          fr: "Les demandes du formulaire sont validées par le site et préparées sous forme d'email adressé à Revoluc. Revoluc reçoit la demande lorsque l'expéditeur envoie cet email. Le site ne stocke actuellement pas les demandes dans une base de données, un CRM ou un fournisseur d'envoi d'emails automatisé.",
        },
      },
      {
        heading: {
          en: "Cookies and analytics",
          es: "Cookies y analítica",
          fr: "Cookies et analytique",
        },
        body: {
          en: "Revoluc does not currently use non-essential analytics or advertising cookies on this website. Essential platform behavior may depend on the hosting provider.",
          es: "Revoluc actualmente no usa cookies no esenciales de analítica o publicidad en este sitio web. El funcionamiento esencial de la plataforma puede depender del proveedor de hosting.",
          fr: "Revoluc n'utilise actuellement pas de cookies non essentiels d'analyse ou de publicité sur ce site web. Le fonctionnement essentiel de la plateforme peut dépendre du fournisseur d'hébergement.",
        },
      },
      {
        heading: {
          en: "Retention and access",
          es: "Retención y acceso",
          fr: "Conservation et accès",
        },
        body: {
          en: "When an inquiry is sent by email, it may be retained in Revoluc email records for as long as needed to review, respond to and document the conversation. Access is limited to people responsible for reviewing Revoluc inquiries.",
          es: "Cuando una solicitud se envía por correo, puede conservarse en los registros de correo de Revoluc durante el tiempo necesario para revisar, responder y documentar la conversación. El acceso se limita a personas responsables de revisar solicitudes de Revoluc.",
          fr: "Lorsqu'une demande est envoyée par email, elle peut être conservée dans les archives email de Revoluc aussi longtemps que nécessaire pour examiner, répondre et documenter la conversation. L'accès est limité aux personnes responsables de l'examen des demandes Revoluc.",
        },
      },
      {
        heading: {
          en: "Deletion requests",
          es: "Solicitudes de eliminación",
          fr: "Demandes de suppression",
        },
        body: {
          en: `Requests about personal information can be sent to ${corporateTruth.publicEmail}.`,
          es: `Las solicitudes sobre información personal pueden enviarse a ${corporateTruth.publicEmail}.`,
          fr: `Les demandes concernant les informations personnelles peuvent être envoyées à ${corporateTruth.publicEmail}.`,
        },
      },
    ],
  },
  "terms-of-use": {
    title: {
      en: "Terms of Use",
      es: "Términos de Uso",
      fr: "Conditions d'utilisation",
    },
    sections: [
      {
        heading: {
          en: "Website use",
          es: "Uso del sitio web",
          fr: "Utilisation du site web",
        },
        body: {
          en: "This website provides corporate information about Revoluc Inc., its public companies, venture building work and contact channels.",
          es: "Este sitio web proporciona información corporativa sobre Revoluc Inc., sus compañías públicas, su trabajo de construcción de empresas y sus canales de contacto.",
          fr: "Ce site web fournit des informations corporatives sur Revoluc Inc., ses sociétés publiques, son travail de construction d'entreprises et ses canaux de contact.",
        },
      },
      {
        heading: {
          en: "No investment offer",
          es: "No constituye oferta de inversión",
          fr: "Aucune offre d'investissement",
        },
        body: {
          en: "Information on this website is not an offer to sell securities, solicit investment or guarantee any commercial outcome.",
          es: "La información de este sitio no constituye una oferta para vender valores, solicitar inversión o garantizar cualquier resultado comercial.",
          fr: "Les informations de ce site ne constituent pas une offre de vente de titres, une sollicitation d'investissement ou une garantie de résultat commercial.",
        },
      },
      {
        heading: {
          en: "Portfolio information",
          es: "Información del portafolio",
          fr: "Informations sur le portefeuille",
        },
        body: {
          en: "Company statuses describe operating maturity and may change as products, markets and legal relationships evolve.",
          es: "Los estados de las compañías describen madurez operativa y pueden cambiar a medida que evolucionen productos, mercados y relaciones legales.",
          fr: "Les statuts des sociétés décrivent leur maturité opérationnelle et peuvent évoluer avec les produits, les marchés et les relations juridiques.",
        },
      },
      {
        heading: {
          en: "Contact",
          es: "Contacto",
          fr: "Contact",
        },
        body: {
          en: `Questions about these terms can be sent to ${corporateTruth.publicEmail}.`,
          es: `Las preguntas sobre estos términos pueden enviarse a ${corporateTruth.publicEmail}.`,
          fr: `Les questions concernant ces conditions peuvent être envoyées à ${corporateTruth.publicEmail}.`,
        },
      },
    ],
  },
  "cookie-policy": {
    title: {
      en: "Cookie Policy",
      es: "Política de Cookies",
      fr: "Politique relative aux cookies",
    },
    sections: [
      {
        heading: {
          en: "Current cookie use",
          es: "Uso actual de cookies",
          fr: "Utilisation actuelle des cookies",
        },
        body: {
          en: "Revoluc does not currently use non-essential analytics or advertising cookies on this website.",
          es: "Revoluc actualmente no usa cookies no esenciales de analítica o publicidad en este sitio web.",
          fr: "Revoluc n'utilise actuellement pas de cookies non essentiels d'analyse ou de publicité sur ce site web.",
        },
      },
      {
        heading: {
          en: "Future services",
          es: "Servicios futuros",
          fr: "Services futurs",
        },
        body: {
          en: "If analytics, advertising, CRM, security or personalization tools are introduced, Revoluc will update this policy with provider names, purposes and retention details.",
          es: "Si se introducen herramientas de analítica, publicidad, CRM, seguridad o personalización, Revoluc actualizará esta política con nombres de proveedores, finalidades y detalles de retención.",
          fr: "Si des outils d'analyse, de publicité, de CRM, de sécurité ou de personnalisation sont introduits, Revoluc mettra à jour cette politique avec les noms des fournisseurs, les finalités et les détails de conservation.",
        },
      },
      {
        heading: {
          en: "Contact",
          es: "Contacto",
          fr: "Contact",
        },
        body: {
          en: `Cookie questions can be sent to ${corporateTruth.publicEmail}.`,
          es: `Las preguntas sobre cookies pueden enviarse a ${corporateTruth.publicEmail}.`,
          fr: `Les questions sur les cookies peuvent être envoyées à ${corporateTruth.publicEmail}.`,
        },
      },
    ],
  },
  "security-policy": {
    title: {
      en: "Security Policy",
      es: "Política de Seguridad",
      fr: "Politique de sécurité",
    },
    sections: [
      {
        heading: {
          en: "Scope",
          es: "Alcance",
          fr: "Portée",
        },
        body: {
          en: "This policy covers the public Revoluc website and contact intake flow.",
          es: "Esta política cubre el sitio web público de Revoluc y el flujo de recepción de contacto.",
          fr: "Cette politique couvre le site public de Revoluc et le flux de réception des contacts.",
        },
      },
      {
        heading: {
          en: "Current measures",
          es: "Medidas actuales",
          fr: "Mesures actuelles",
        },
        body: {
          en: "Contact form submissions are validated and protected using basic anti-spam measures.",
          es: "Las solicitudes del formulario de contacto se validan y protegen con medidas básicas antispam.",
          fr: "Les demandes du formulaire de contact sont validées et protégées par des mesures anti-spam de base.",
        },
      },
      {
        heading: {
          en: "Responsible disclosure",
          es: "Divulgación responsable",
          fr: "Divulgation responsable",
        },
        body: {
          en: `Security issues can be reported to ${corporateTruth.publicEmail}.`,
          es: `Los problemas de seguridad pueden reportarse a ${corporateTruth.publicEmail}.`,
          fr: `Les problèmes de sécurité peuvent être signalés à ${corporateTruth.publicEmail}.`,
        },
      },
    ],
  },
  "accessibility-statement": {
    title: {
      en: "Accessibility Statement",
      es: "Declaración de Accesibilidad",
      fr: "Déclaration d'accessibilité",
    },
    sections: [
      {
        heading: {
          en: "Commitment",
          es: "Compromiso",
          fr: "Engagement",
        },
        body: {
          en: "Revoluc aims to maintain a website that is usable, readable and navigable across modern devices.",
          es: "Revoluc busca mantener un sitio web usable, legible y navegable en dispositivos modernos.",
          fr: "Revoluc vise à maintenir un site web utilisable, lisible et navigable sur les appareils modernes.",
        },
      },
      {
        heading: {
          en: "Ongoing review",
          es: "Revisión continua",
          fr: "Revue continue",
        },
        body: {
          en: "Revoluc reviews the website for keyboard navigation, semantic labels, color contrast, form errors and responsive layout issues as the site evolves.",
          es: "Revoluc revisa el sitio en navegación por teclado, etiquetas semánticas, contraste de color, errores de formulario y problemas de diseño responsive conforme el sitio evoluciona.",
          fr: "Revoluc examine le site pour la navigation au clavier, les libellés sémantiques, le contraste des couleurs, les erreurs de formulaire et les problèmes de mise en page responsive à mesure que le site évolue.",
        },
      },
      {
        heading: {
          en: "Feedback",
          es: "Comentarios",
          fr: "Commentaires",
        },
        body: {
          en: `Accessibility feedback can be sent to ${corporateTruth.publicEmail}.`,
          es: `Los comentarios de accesibilidad pueden enviarse a ${corporateTruth.publicEmail}.`,
          fr: `Les commentaires d'accessibilité peuvent être envoyés à ${corporateTruth.publicEmail}.`,
        },
      },
    ],
  },
} as const;

type LegalSlug = keyof typeof documents;

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    Object.keys(documents).map((slug) => ({
      lang,
      slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const document = documents[slug as LegalSlug];

  if (!document) {
    return {};
  }

  return pageMetadata({
    lang,
    path: `/legal/${slug}`,
    title: {
      en: `${document.title.en} - Revoluc`,
      es: `${document.title.es} - Revoluc`,
      fr: `${document.title.fr} - Revoluc`,
    },
    description: legalDescriptions[slug as LegalSlug],
  });
}

const LegalPage = async ({ params }: PageProps) => {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const document = documents[slug as LegalSlug];

  if (!document) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>{corporateTruth.legalName}</p>
        <h1>{localize(document.title, lang)}</h1>
        <p className={styles.lead}>
          {localize(lastUpdatedLabel, lang)} July 21, 2026
        </p>
        <div className={styles.paragraphs}>
          {document.sections.map((section) => (
            <section key={section.heading.en}>
              <h2 className={styles.sectionTitle}>{localize(section.heading, lang)}</h2>
              <p>{localize(section.body, lang)}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LegalPage;

const lastUpdatedLabel = {
  en: "Last updated:",
  es: "Última actualización:",
  fr: "Dernière mise à jour :",
};

const legalDescriptions: Record<LegalSlug, Record<Locale, string>> = {
  "privacy-policy": {
    en: "Privacy information for Revoluc Inc.'s website and contact inquiry flow.",
    es: "Información de privacidad para el sitio web de Revoluc Inc. y su flujo de solicitudes de contacto.",
    fr: "Informations de confidentialité pour le site web de Revoluc Inc. et son flux de demandes de contact.",
  },
  "terms-of-use": {
    en: "Terms governing use of Revoluc Inc.'s public corporate website.",
    es: "Términos que rigen el uso del sitio corporativo público de Revoluc Inc.",
    fr: "Conditions régissant l'utilisation du site corporatif public de Revoluc Inc.",
  },
  "cookie-policy": {
    en: "Cookie information for Revoluc Inc.'s public website.",
    es: "Información sobre cookies para el sitio web público de Revoluc Inc.",
    fr: "Informations sur les cookies pour le site web public de Revoluc Inc.",
  },
  "security-policy": {
    en: "Security information for Revoluc Inc.'s public website and contact intake flow.",
    es: "Información de seguridad para el sitio web público de Revoluc Inc. y su flujo de recepción de contacto.",
    fr: "Informations de sécurité pour le site public de Revoluc Inc. et son flux de réception des contacts.",
  },
  "accessibility-statement": {
    en: "Accessibility statement for Revoluc Inc.'s public website.",
    es: "Declaración de accesibilidad para el sitio web público de Revoluc Inc.",
    fr: "Déclaration d'accessibilité pour le site web public de Revoluc Inc.",
  },
};
