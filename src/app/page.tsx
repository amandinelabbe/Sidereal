'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Zap, TrendingUp, CheckCircle, Package } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  const features = [
    { icon: Cloud,      title: t('home.features.migration.title'),   description: t('home.features.migration.desc'),   color: '#0066ff' },
    { icon: Zap,        title: t('home.features.automation.title'),  description: t('home.features.automation.desc'),  color: '#7c3aed' },
    { icon: Shield,     title: t('home.features.security.title'),    description: t('home.features.security.desc'),    color: '#059669' },
    { icon: TrendingUp, title: t('home.features.optimization.title'),description: t('home.features.optimization.desc'),color: '#d97706' },
  ];

  const sapEnvironments = [
    { name: 'SAP ECC',             icon: '🏗️', desc: 'ERP Central Component' },
    { name: 'SAP S/4HANA',         icon: '⚡',  desc: 'Next-Gen ERP' },
    { name: 'SAP Fiori',           icon: '🎨',  desc: 'UX Platform' },
    { name: 'SAP BTP',             icon: '☁️',  desc: 'Business Technology Platform' },
    { name: 'SAP Analytics Cloud', icon: '📊',  desc: 'Analytics & Planning' },
  ];

  // Inline bilingual content — works even with old translations.ts
  const txt = {
    compatBadge:   isFr ? '✓ Compatibilité native'    : '✓ Native compatibility',
    compatTitle:   isFr ? 'Intégration native dans votre paysage SAP' : 'Native integration into your SAP landscape',
    compatSub:     isFr ? "Nos solutions s'intègrent directement dans vos environnements SAP existants, sans migration ni remplacement de vos systèmes." : 'Our solutions integrate directly into your existing SAP environments, without migration or replacement of your systems.',
    whyTitle:      isFr ? 'Pourquoi choisir Sidereal ?' : 'Why choose Sidereal?',
    whySub:        isFr ? 'Une approche différente pour maximiser la valeur de vos investissements SAP' : 'A different approach to maximize the value of your SAP investments',
    ctaBadge:      isFr ? 'Prêt à démarrer ?' : 'Ready to start?',
    ctaTitle:      isFr ? "Transformez vos opérations SAP dès aujourd'hui" : 'Transform your SAP operations today',
    ctaSub:        isFr ? "Contactez-nous pour une démonstration personnalisée et découvrez comment Sidereal peut s'intégrer à votre environnement SAP." : 'Contact us for a personalized demo and discover how Sidereal can integrate with your SAP environment.',
    ctaDemo:       isFr ? 'Demander une démo' : 'Request a demo',
    ctaProducts:   isFr ? 'Voir nos produits' : 'View our products',
    ctaServices:   isFr ? 'Découvrir tous nos services' : 'Discover all our services',
    compat:        'Compatible SAP ECC · S/4HANA · Fiori · BTP · Analytics Cloud',
  };

  const whyItems = [
    { icon: '⚡', title: isFr ? 'Déploiement rapide'   : 'Fast deployment',    desc: isFr ? 'Intégration sans disruption de vos processus existants. Opérationnel en quelques jours.' : 'Integration without disrupting your existing processes. Operational within days.' },
    { icon: '🔒', title: isFr ? 'Sécurisé by design'   : 'Secure by design',   desc: isFr ? 'Conçu pour respecter vos politiques de sécurité SAP et les standards de conformité.' : 'Designed to comply with your SAP security policies and compliance standards.' },
    { icon: '🧩', title: isFr ? 'Modulaire'             : 'Modular',            desc: isFr ? "Activez uniquement ce dont vous avez besoin. Chaque produit fonctionne de manière indépendante." : 'Activate only what you need. Each product works independently.' },
    { icon: '🛠️', title: isFr ? 'Support expert'        : 'Expert support',     desc: isFr ? "Une équipe de consultants SAP dédiée, disponible pour vous accompagner à chaque étape." : 'A dedicated team of SAP consultants available to support you at every step.' },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '5rem 1rem 3rem' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '30rem', height: '30rem', background: 'rgba(0,212,255,0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', bottom: '-10rem', left: '-10rem', width: '30rem', height: '30rem', background: 'rgba(79,142,247,0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', borderRadius: '9999px', padding: '0.4rem 1.25rem', fontSize: 'clamp(0.72rem,2vw,0.85rem)', fontWeight: 600, color: '#00d4ff', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Advanced SAP Solutions
            </motion.div>
            <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontSize: 'clamp(1.75rem,6vw,3.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
              {t('home.title')}
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontSize: 'clamp(1.1rem,4vw,2rem)', fontWeight: 700, marginBottom: '1.5rem', background: 'linear-gradient(90deg, #00d4ff, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              with Sidereal Expertise
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              style={{ fontSize: 'clamp(0.9rem,2vw,1.15rem)', color: '#8ba3c7', maxWidth: '48rem', margin: '0 auto 2.5rem', lineHeight: 1.75, padding: '0 0.5rem' }}>
              {t('home.description')}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}
              style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services">
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #00d4ff, #4f8ef7)', border: 'none', borderRadius: '12px', padding: '0.875rem 1.75rem', color: '#080d1a', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,1rem)', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,212,255,0.3)', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                  {t('home.cta')} <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </button>
              </Link>
              <Link href="/produits">
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '2px solid rgba(0,212,255,0.4)', borderRadius: '12px', padding: '0.875rem 1.75rem', color: '#00d4ff', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,1rem)', cursor: 'pointer', transition: 'background 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                  <Package style={{ width: '1rem', height: '1rem' }} />
                  {txt.ctaProducts}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
          <div style={{ width: '1.5rem', height: '2.5rem', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '9999px', display: 'flex', justifyContent: 'center', paddingTop: '0.35rem' }}>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: '4px', height: '8px', background: '#00d4ff', borderRadius: '9999px' }} />
          </div>
        </motion.div>
      </section>

      {/* SAP COMPAT */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.06),rgba(79,142,247,0.06))', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '20px', padding: 'clamp(1.75rem,4vw,3rem) clamp(1rem,3vw,2.5rem)', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '9999px', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 600, color: '#00d4ff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              {txt.compatBadge}
            </div>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>{txt.compatTitle}</h2>
            <p style={{ fontSize: 'clamp(0.875rem,2vw,1rem)', color: '#8ba3c7', maxWidth: '40rem', margin: '0 auto 2rem', lineHeight: 1.7 }}>{txt.compatSub}</p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {sapEnvironments.map((env, i) => (
                <motion.div key={env.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                  style={{ background: 'rgba(15,28,46,0.8)', border: '1px solid rgba(0,212,255,0.18)', borderRadius: '14px', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', minWidth: '110px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{env.icon}</span>
                  <span style={{ fontSize: 'clamp(0.75rem,1.5vw,0.9rem)', fontWeight: 700, color: '#ffffff' }}>{env.name}</span>
                  <span style={{ fontSize: '0.65rem', color: '#8ba3c7', textAlign: 'center' }}>{env.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.875rem' }}>{t('home.features.title')}</h2>
            <p style={{ fontSize: 'clamp(0.875rem,2vw,1.05rem)', color: '#8ba3c7', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>{t('home.features.subtitle')}</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: '1.25rem' }}>
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                style={{ background: '#0f1c2e', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '16px', padding: '1.75rem 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.875rem' }}>
                <div style={{ width: '3rem', height: '3rem', background: `${feature.color}22`, border: `1px solid ${feature.color}44`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <feature.icon style={{ width: '1.4rem', height: '1.4rem', color: feature.color }} />
                </div>
                <h3 style={{ fontSize: 'clamp(0.95rem,2vw,1.05rem)', fontWeight: 700, color: '#ffffff', margin: 0 }}>{feature.title}</h3>
                <p style={{ fontSize: 'clamp(0.8rem,1.5vw,0.85rem)', color: '#8ba3c7', lineHeight: 1.65, margin: 0 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/services">
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '2px solid rgba(0,212,255,0.35)', borderRadius: '12px', padding: '0.75rem 1.5rem', color: '#00d4ff', background: 'rgba(0,212,255,0.05)', fontWeight: 600, fontSize: 'clamp(0.85rem,2vw,0.9rem)', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.12)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.05)'}>
                {txt.ctaServices} <ArrowRight style={{ width: '1rem', height: '1rem' }} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY SIDEREAL */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.875rem' }}>{txt.whyTitle}</h2>
            <p style={{ fontSize: 'clamp(0.875rem,2vw,1.05rem)', color: '#8ba3c7', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>{txt.whySub}</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: '1.25rem' }}>
            {whyItems.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                style={{ background: '#0f1c2e', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '16px', padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 'clamp(0.95rem,2vw,1rem)', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.8rem,1.5vw,0.85rem)', color: '#8ba3c7', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 'clamp(3rem,6vw,5rem) 1rem clamp(4rem,8vw,7rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.08),rgba(79,142,247,0.06))', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '24px', padding: 'clamp(2.5rem,5vw,4rem) clamp(1.25rem,4vw,3rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-4rem', right: '-4rem', width: '20rem', height: '20rem', background: 'rgba(0,212,255,0.05)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '9999px', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 600, color: '#00d4ff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              {txt.ctaBadge}
            </div>
            <h2 style={{ fontSize: 'clamp(1.4rem,4vw,2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>{txt.ctaTitle}</h2>
            <p style={{ fontSize: 'clamp(0.875rem,2vw,1.05rem)', color: '#8ba3c7', maxWidth: '36rem', margin: '0 auto 2rem', lineHeight: 1.7 }}>{txt.ctaSub}</p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link href="/contact">
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg,#00d4ff,#4f8ef7)', border: 'none', borderRadius: '12px', padding: '0.875rem 1.75rem', color: '#080d1a', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,1rem)', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,212,255,0.3)', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}>
                  {txt.ctaDemo} <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </button>
              </Link>
              <Link href="/produits">
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '2px solid rgba(0,212,255,0.4)', borderRadius: '12px', padding: '0.875rem 1.75rem', color: '#00d4ff', background: 'transparent', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,1rem)', cursor: 'pointer', transition: 'background 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                  {txt.ctaProducts}
                </button>
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <CheckCircle style={{ width: '0.85rem', height: '0.85rem', color: '#00d4ff', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', color: '#8ba3c7' }}>{txt.compat}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}