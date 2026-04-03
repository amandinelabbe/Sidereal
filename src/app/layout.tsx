import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skalisys.com"),

  title: {
    default: "Skalisys — Expert SAP ECC & S/4HANA | Toulouse, France",
    template: "%s | Skalisys",
  },
  description:
    "Skalisys est un cabinet conseil SAP indépendant basé à Toulouse. Audit, intégration, automatisation et optimisation de vos systèmes SAP ECC et S/4HANA. Déploiement en moins de 3 semaines, sans infrastructure tierce.",

  keywords: [
    "SAP consultant", "SAP ECC", "S/4HANA", "SAP Fiori", "SAP BTP",
    "audit SAP", "intégration SAP", "automatisation SAP", "optimisation coûts SAP",
    "conseil SAP France", "SAP Toulouse", "transformation digitale SAP",
    "AuditSphere", "Smart Sight", "Clean Core", "add-on SAP transportable",
  ],

  authors: [{ name: "Skalisys", url: "https://www.skalisys.com" }],
  creator: "Skalisys",
  publisher: "Skalisys",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_GB",
    url: "https://www.skalisys.com",
    siteName: "Skalisys",
    title: "Skalisys — Expert SAP ECC & S/4HANA | Toulouse, France",
    description:
      "Cabinet conseil SAP indépendant basé à Toulouse. Solutions AuditSphere, Smart Sight et Clean Core. Déploiement natif SAP en moins de 3 semaines.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skalisys — Expert SAP ECC & S/4HANA",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Skalisys — Expert SAP ECC & S/4HANA",
    description:
      "Cabinet conseil SAP indépendant. Solutions natives SAP sans infrastructure tierce. Toulouse, France.",
    images: ["/og-image.png"],
  },

  // Canonical + alternates (hreflang)
  alternates: {
    canonical: "https://www.skalisys.com",
    languages: {
      "fr-FR": "https://www.skalisys.com",
      "en-GB": "https://www.skalisys.com/en",
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Verification (à remplir si tu as Google Search Console)
  // verification: { google: "VOTRE_CODE_VERIFICATION" },
};

// JSON-LD structured data (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.skalisys.com/#organization",
      name: "Skalisys",
      url: "https://www.skalisys.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.skalisys.com/logo_sapion.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-6-25-73-20-21",
        contactType: "customer service",
        email: "contact@sidereal.fr",
        areaServed: ["FR", "EU"],
        availableLanguage: ["French", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toulouse",
        addressCountry: "FR",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.skalisys.com/#website",
      url: "https://www.skalisys.com",
      name: "Skalisys",
      publisher: { "@id": "https://www.skalisys.com/#organization" },
      inLanguage: ["fr-FR", "en-GB"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.skalisys.com/actualite?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.skalisys.com/#service",
      name: "Skalisys — Conseil SAP",
      description:
        "Cabinet conseil SAP indépendant spécialisé en audit, intégration, automatisation et optimisation de systèmes SAP ECC et S/4HANA.",
      url: "https://www.skalisys.com",
      telephone: "+33-6-25-73-20-21",
      email: "contact@sidereal.fr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toulouse",
        addressRegion: "Occitanie",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "Country", name: "France" },
        { "@type": "Continent", name: "Europe" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solutions SAP",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "AuditSphere",
              description:
                "Add-on SAP transportable centralisant 30+ contrôles d'audit automatiques avec score de risque global.",
              applicationCategory: "BusinessApplication",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Smart Sight",
              description:
                "Studio de prévision IA intégré dans SAP Fiori pour des prévisions automatiques sans data scientist.",
              applicationCategory: "BusinessApplication",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "SoftwareApplication",
              name: "Clean Core",
              description:
                "Solution de gouvernance des fichiers SAP multi-landscape avec archivage automatique et audit trail.",
              applicationCategory: "BusinessApplication",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Viewport — critical for mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark-theme`}>
        <ThemeProvider>
          <ParticleBackground />
          <LanguageProvider>
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}