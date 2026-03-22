'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const sections = isFr ? [
    { title: '1. Responsable du traitement', content: `Skalisys SAS, dont le siège social est situé à Paris, France, est responsable du traitement de vos données personnelles.\nContact DPO : contact@skalisys.fr` },
    { title: '2. Données collectées', content: `Nous collectons les données que vous nous transmettez via notre formulaire de contact :\n• Nom et prénom\n• Adresse email professionnelle\n• Numéro de téléphone (optionnel)\n• Nom de l'entreprise (optionnel)\n• Contenu de votre message\n\nNous collectons également des données de navigation anonymes (pages visitées, durée de visite) via des outils d'analyse.` },
    { title: '3. Finalités du traitement', content: `Vos données sont utilisées pour :\n• Répondre à vos demandes de contact\n• Vous envoyer notre documentation sur demande\n• Améliorer nos services et l'expérience utilisateur\n• Satisfaire nos obligations légales` },
    { title: '4. Base légale', content: `Le traitement de vos données est fondé sur :\n• Votre consentement (formulaire de contact)\n• Notre intérêt légitime (amélioration des services)\n• Nos obligations légales` },
    { title: '5. Conservation des données', content: `Vos données sont conservées pendant 3 ans à compter de notre dernier contact, sauf obligation légale contraire.` },
    { title: '6. Vos droits', content: `Conformément au RGPD, vous disposez des droits suivants :\n• Droit d'accès à vos données\n• Droit de rectification\n• Droit à l'effacement (droit à l'oubli)\n• Droit à la limitation du traitement\n• Droit à la portabilité\n• Droit d'opposition\n\nPour exercer ces droits, contactez-nous à : contact@skalisys.fr` },
    { title: '7. Cookies', content: `Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement préalable.` },
    { title: '8. Sécurité', content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.` },
    { title: '9. Contact & Réclamations', content: `Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous à : contact@skalisys.fr\n\nVous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).` },
  ] : [
    { title: '1. Data Controller', content: `Skalisys SAS, headquartered in Paris, France, is the controller of your personal data.\nDPO contact: contact@skalisys.fr` },
    { title: '2. Data Collected', content: `We collect data you provide through our contact form:\n• First and last name\n• Professional email address\n• Phone number (optional)\n• Company name (optional)\n• Message content\n\nWe also collect anonymous browsing data (pages visited, visit duration) through analytics tools.` },
    { title: '3. Purposes of Processing', content: `Your data is used to:\n• Respond to your contact requests\n• Send you documentation upon request\n• Improve our services and user experience\n• Fulfill our legal obligations` },
    { title: '4. Legal Basis', content: `The processing of your data is based on:\n• Your consent (contact form)\n• Our legitimate interest (service improvement)\n• Our legal obligations` },
    { title: '5. Data Retention', content: `Your data is retained for 3 years from our last contact, unless otherwise required by law.` },
    { title: '6. Your Rights', content: `Under GDPR, you have the following rights:\n• Right of access to your data\n• Right of rectification\n• Right to erasure (right to be forgotten)\n• Right to restriction of processing\n• Right to data portability\n• Right to object\n\nTo exercise these rights, contact us at: contact@skalisys.fr` },
    { title: '7. Cookies', content: `Our site uses technical cookies necessary for the site to function properly. No advertising or third-party tracking cookies are used without your prior consent.` },
    { title: '8. Security', content: `We implement appropriate technical and organizational measures to protect your data against unauthorized access, modification, disclosure or destruction.` },
    { title: '9. Contact & Complaints', content: `For any questions regarding this policy or to exercise your rights, contact us at: contact@skalisys.fr\n\nYou also have the right to lodge a complaint with the CNIL (www.cnil.fr).` },
  ];

  return (
    <div style={{ minHeight:'100vh', padding:'6rem 1.5rem 4rem', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
          <Link href="/" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'#00d4ff', textDecoration:'none', fontSize:'0.875rem', marginBottom:'2rem' }}>
            <ArrowLeft style={{ width:'1rem', height:'1rem' }} />
            {isFr ? 'Retour à l\'accueil' : 'Back to home'}
          </Link>

          <h1 style={{ fontSize:'clamp(1.75rem,4vw,2.75rem)', fontWeight:800, color:'#ffffff', marginBottom:'0.5rem' }}>
            {isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
          </h1>
          <p style={{ color:'#8ba3c7', marginBottom:'3rem', fontSize:'0.9rem' }}>
            {isFr ? 'Dernière mise à jour : janvier 2025 — Conforme au RGPD' : 'Last updated: January 2025 — GDPR compliant'}
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:i*0.04 }} viewport={{ once:true }}
                style={{ background:'#0f1c2e', border:'1px solid rgba(0,212,255,0.12)', borderRadius:'16px', padding:'1.75rem' }}>
                <h2 style={{ fontSize:'1.05rem', fontWeight:700, color:'#00d4ff', marginBottom:'0.875rem' }}>{s.title}</h2>
                <p style={{ fontSize:'0.875rem', color:'#8ba3c7', lineHeight:1.8, whiteSpace:'pre-line' }}>{s.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}