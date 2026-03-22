'use client';
import { motion } from 'framer-motion';
import { Cog, TrendingUp, ArrowRight, CheckCircle, Link as LinkIcon, Puzzle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

export default function Services() {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const RESULTS = [
    { metric: '3 weeks', label: isFr ? 'Délai moyen de déploiement' : 'Average deployment time', icon: '🚀' },
    { metric: '100%',   label: isFr ? 'Compatibilité SAP native'  : 'Native SAP compatibility', icon: '✅' },
    { metric: '24h',    label: isFr ? 'SLA de support garanti'    : 'Guaranteed support SLA',   icon: '🛡️' },
    { metric: '0',      label: isFr ? 'Infrastructure tierce requise' : 'Third-party infrastructure required', icon: '⚡' },
  ];

  const PROCESS_STEPS = [
    { num: '01', title: 'Audit & Discovery', desc: isFr ? 'Analyse de votre paysage SAP existant et identification des opportunités.' : 'Analysis of your existing SAP landscape and identification of opportunities.' },
    { num: '02', title: isFr ? 'Conception' : 'Design',       desc: isFr ? 'Définition de la solution sur mesure adaptée à vos processus métier.' : 'Definition of the tailored solution adapted to your business processes.' },
    { num: '03', title: isFr ? 'Déploiement' : 'Deployment',  desc: isFr ? 'Intégration native dans votre environnement SAP sans disruption.' : 'Native integration into your SAP environment without disruption.' },
    { num: '04', title: 'Support',                             desc: isFr ? 'Accompagnement continu par nos experts SAP.' : 'Ongoing support by our SAP experts.' },
  ];

  const SAP_COMPAT: Record<number, string[]> = {
    1: ['S/4HANA', 'SAP BTP', 'SAP Fiori'],
    2: ['S/4HANA', 'SAP BTP'],
    3: ['SAP ECC', 'S/4HANA'],
  };

  const services = [
    {
      id: 1, icon: Puzzle,
      title: isFr ? 'Intégration Systèmes' : 'System Integration',
      fullDesc: isFr
        ? "Nous intégrons nos produits directement dans votre paysage SAP sans infrastructure tierce. Chaque solution est transportable et s'adapte à votre système ECC ou S/4HANA, avec un déploiement rapide et sans disruption."
        : "We integrate our products directly into your SAP landscape without third-party infrastructure. Each solution is transportable and adapts to your existing ECC or S/4HANA system, with fast deployment and no disruption.",
      features: isFr
        ? ['Intégration native dans votre SAP existant', 'Déploiement sans infrastructure tierce', 'Compatible ECC & S/4HANA', 'Transfert de compétences inclus']
        : ['Native integration into your existing SAP', 'Deployment without third-party infrastructure', 'Compatible with ECC & S/4HANA', 'Knowledge transfer included'],
      color: '#0066ff', bg: 'rgba(0,102,255,0.08)', border: 'rgba(0,102,255,0.25)',
    },
    {
      id: 2, icon: Cog,
      title: isFr ? 'Automatisation des Processus' : 'Process Automation',
      fullDesc: isFr
        ? "Implémentation d'automatisations intelligentes pour vos processus métier SAP. Réduction des tâches manuelles, amélioration de la productivité et élimination des erreurs grâce à des workflows automatisés dans S/4HANA."
        : "Implementation of intelligent automations for your SAP business processes. Reduction of manual tasks, improved productivity and error elimination through automated workflows in S/4HANA.",
      features: isFr
        ? ['Workflow automation avancée', 'Intelligence artificielle intégrée', 'Monitoring et reporting automatisé', 'ROI mesurable et immédiat']
        : ['Advanced workflow automation', 'Integrated artificial intelligence', 'Automated monitoring and reporting', 'Measurable and immediate ROI'],
      color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)',
    },
    {
      id: 3, icon: TrendingUp,
      title: isFr ? 'Optimisation des Coûts' : 'Cost Optimization',
      fullDesc: isFr
        ? "Analyse approfondie et optimisation de votre infrastructure SAP pour réduire les coûts tout en améliorant les performances. Stratégies sur mesure pour maximiser votre ROI et maîtriser votre landscape applicatif."
        : "In-depth analysis and optimization of your SAP infrastructure to reduce costs while improving performance. Custom strategies to maximize your ROI and control your application landscape.",
      features: isFr
        ? ['Audit financier détaillé', 'Optimisation ressources cloud', 'Réduction risques obsolescence', 'Meilleure visibilité sur application et landscape']
        : ['Detailed financial audit', 'Cloud resource optimization', 'Obsolescence risk reduction', 'Better visibility on applications and landscape'],
      color: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.25)',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', borderRadius: '9999px', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 600, color: '#00d4ff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            {isFr ? 'Expert SAP Cloud' : 'SAP Cloud Expert'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,3.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
            {isFr ? 'Nos Services' : 'Our Services'}
          </h1>
          <p style={{ fontSize: 'clamp(0.875rem,2vw,1.1rem)', color: '#8ba3c7', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.75 }}>
            {isFr
              ? "Solutions expertes pour optimiser votre écosystème SAP et maximiser la valeur de vos investissements"
              : "Expert solutions to optimize your SAP ecosystem and maximize the value of your investments"}
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem', marginBottom: '3.5rem' }}
          className="metrics-grid">
          <style>{`@media(min-width:640px){.metrics-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
          {RESULTS.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              style={{ background: '#0f1c2e', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '14px', padding: '1.25rem 1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{r.icon}</div>
              <div style={{ fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 800, color: '#00d4ff', lineHeight: 1 }}>{r.metric}</div>
              <div style={{ fontSize: '0.72rem', color: '#8ba3c7', marginTop: '0.3rem', lineHeight: 1.4 }}>{r.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <div style={{ display: 'grid', gap: '1.5rem' }} className={`svc-row svc-${index}`}>
                <style>{`
                  @media(min-width:768px){
                    .svc-row{grid-template-columns:1fr 1fr!important;align-items:center}
                    .svc-1 .svc-visual{order:2}.svc-1 .svc-text{order:1}
                  }
                `}</style>
                <div className="svc-visual" style={{ background: service.bg, border: `1px solid ${service.border}`, borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', minHeight: '180px' }}>
                  <div style={{ width: '4rem', height: '4rem', background: `${service.color}22`, border: `2px solid ${service.color}44`, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <service.icon style={{ width: '2rem', height: '2rem', color: service.color }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, color: '#ffffff', margin: 0 }}>{service.title}</h3>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {SAP_COMPAT[service.id].map(env => (
                      <span key={env} style={{ fontSize: '0.65rem', fontWeight: 600, padding: '0.2rem 0.55rem', borderRadius: '9999px', background: `${service.color}18`, border: `1px solid ${service.color}35`, color: service.color }}>{env}</span>
                    ))}
                  </div>
                </div>
                <div className="svc-text" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: 'clamp(0.875rem,2vw,1rem)', color: '#8ba3c7', lineHeight: 1.75, margin: 0 }}>{service.fullDesc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.features.map((f, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle style={{ width: '0.9rem', height: '0.9rem', color: service.color, flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ fontSize: 'clamp(0.825rem,2vw,0.9rem)', color: '#ffffff', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: service.bg, border: `1px solid ${service.border}`, borderRadius: '10px', padding: '0.65rem 1.25rem', color: service.color, fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                      {isFr ? 'En savoir plus' : 'Learn more'} <ArrowRight style={{ width: '0.9rem', height: '0.9rem' }} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              {isFr ? 'Notre processus' : 'Our Process'}
            </h2>
            <p style={{ fontSize: 'clamp(0.85rem,2vw,1rem)', color: '#8ba3c7', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
              {isFr ? 'Une méthodologie éprouvée pour garantir le succès de chaque projet SAP' : 'A proven methodology to guarantee the success of every SAP project'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }} className="proc-grid">
            <style>{`@media(min-width:640px){.proc-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: '#0f1c2e', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '14px', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', background: 'linear-gradient(135deg,#00d4ff,#4f8ef7)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.875rem', fontSize: '0.8rem', fontWeight: 800, color: '#080d1a' }}>{step.num}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#8ba3c7', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.07),rgba(79,142,247,0.05))', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '20px', padding: 'clamp(2rem,5vw,4rem) clamp(1.25rem,4vw,3rem)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.875rem' }}>
              {isFr ? 'Prêt à transformer votre écosystème SAP ?' : 'Ready to transform your SAP ecosystem?'}
            </h2>
            <p style={{ fontSize: 'clamp(0.85rem,2vw,1rem)', color: '#8ba3c7', maxWidth: '36rem', margin: '0 auto 2rem', lineHeight: 1.75 }}>
              {isFr
                ? 'Contactez nos experts pour une consultation personnalisée et découvrez comment optimiser votre infrastructure SAP.'
                : 'Contact our experts for a personalized consultation and discover how to optimize your SAP infrastructure.'}
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link href="/contact">
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg,#00d4ff,#4f8ef7)', border: 'none', borderRadius: '12px', padding: '0.875rem 1.75rem', color: '#080d1a', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,1rem)', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,212,255,0.3)' }}>
                  {isFr ? 'Prendre contact' : 'Get in touch'} <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </button>
              </Link>
              <a href="/brochure/Skalisys_Brochure.pdf" download style={{ textDecoration: 'none' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '2px solid rgba(0,212,255,0.35)', borderRadius: '12px', padding: '0.875rem 1.75rem', color: '#00d4ff', background: 'transparent', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,1rem)', cursor: 'pointer' }}>
                  <LinkIcon style={{ width: '1rem', height: '1rem' }} />
                  {isFr ? 'Notre brochure' : 'Our brochure'}
                </button>
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <CheckCircle style={{ width: '0.85rem', height: '0.85rem', color: '#00d4ff', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', color: '#8ba3c7' }}>Compatible SAP ECC · S/4HANA · Fiori · BTP</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}