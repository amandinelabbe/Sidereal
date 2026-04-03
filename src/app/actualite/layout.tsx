import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualité SAP — Tendances, Migration S/4HANA & IA",
  description:
    "Suivez l'actualité SAP : tendances S/4HANA 2026, migration ECC, SAP Joule IA, Clean Core et optimisation des coûts landscape. Analyses et insights par les experts Skalisys.",
  alternates: {
    canonical: "https://www.skalisys.com/actualite",
    languages: {
      "fr-FR": "https://www.skalisys.com/actualite",
      "en-GB": "https://www.skalisys.com/en/actualite",
    },
  },
  openGraph: {
    title: "Actualité SAP | Skalisys",
    description: "Tendances SAP 2026, migration S/4HANA, IA dans SAP — analyses et insights par Skalisys.",
    url: "https://www.skalisys.com/actualite",
  },
};

export default function ActualiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}