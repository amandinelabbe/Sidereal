'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const sections = isFr ? [
    { title: 'Éditeur du site', content: `Le site Skalisys est édité par Skalisys SAS, société par actions simplifiée au capital de 10 000 €.\n\nSiège social : Paris, France\nEmail : contact@skalisys.fr\nDirecteur de la publication : Quentin Leroux` },
    { title: 'Hébergement', content: `Le site est hébergé par Vercel Inc.\n101 2nd St Ste 700, San Francisco, CA 94105, États-Unis\nSite : https://vercel.com` },
    { title: 'Propriété intellectuelle', content: `L'ensemble des contenus présents sur ce site (textes, images, graphiques, logos, icônes, sons, logiciels) est la propriété exclusive de Skalisys ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ces contenus, sans autorisation écrite préalable, est strictement interdite.` },
    { title: 'Responsabilité', content: `Skalisys s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Skalisys ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Skalisys décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.` },
    { title: 'Liens hypertextes', content: `Ce site peut contenir des liens vers d'autres sites internet. Skalisys n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.` },
    { title: 'Droit applicable', content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.` },
  ] : [
    { title: 'Site Publisher', content: `The Skalisys website is published by Skalisys SAS, a simplified joint-stock company with share capital of €10,000.\n\nHeadquarters: Paris, France\nEmail: contact@skalisys.fr\nPublication Director: Quentin Leroux` },
    { title: 'Hosting', content: `The site is hosted by Vercel Inc.\n101 2nd St Ste 700, San Francisco, CA 94105, United States\nWebsite: https://vercel.com` },
    { title: 'Intellectual Property', content: `All content on this site (texts, images, graphics, logos, icons, sounds, software) is the exclusive property of Skalisys or its partners. Any reproduction, distribution, modification or use of this content, without prior written authorization, is strictly prohibited.` },
    { title: 'Liability', content: `Skalisys strives to ensure the accuracy and currency of information published on this site. However, Skalisys cannot guarantee the accuracy, precision or completeness of the information provided. Consequently, Skalisys disclaims all liability for any inaccuracy, imprecision or omission relating to information available on this site.` },
    { title: 'Hyperlinks', content: `This site may contain links to other websites. Skalisys has no control over these sites and disclaims all responsibility for their content.` },
    { title: 'Applicable Law', content: `These legal notices are governed by French law. In case of dispute, French courts shall have sole jurisdiction.` },
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
            {isFr ? 'Mentions Légales' : 'Legal Notice'}
          </h1>
          <p style={{ color:'#8ba3c7', marginBottom:'3rem', fontSize:'0.9rem' }}>
            {isFr ? 'Dernière mise à jour : janvier 2025' : 'Last updated: January 2025'}
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:i*0.05 }} viewport={{ once:true }}
                style={{ background:'#0f1c2e', border:'1px solid rgba(0,212,255,0.12)', borderRadius:'16px', padding:'1.75rem' }}>
                <h2 style={{ fontSize:'1.1rem', fontWeight:700, color:'#00d4ff', marginBottom:'0.875rem' }}>{s.title}</h2>
                <p style={{ fontSize:'0.9rem', color:'#8ba3c7', lineHeight:1.75, whiteSpace:'pre-line' }}>{s.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}