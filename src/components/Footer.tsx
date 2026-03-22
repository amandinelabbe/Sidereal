'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '5rem',
        background: 'var(--bg-navbar)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem' }}>

          {/* Logo + description */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/logo_sapion.png" alt="Skalisys Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>Skalisys</span>
            </div>
            <p style={{ color: '#8ba3c7', maxWidth: '28rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              {t('footer.quickLinks')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/services', key: 'nav.services' },
                { href: '/produits', key: 'nav.projects' },
                { href: '/actualite', key: 'nav.blog' },
                { href: '/contact', key: 'nav.contact' },
              ].map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    color: '#8ba3c7',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    display: 'block',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00d4ff'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8ba3c7'}
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              {t('footer.contact')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="mailto:contact@skalisys.fr"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#8ba3c7', textDecoration: 'none', fontSize: '0.9rem',
                  transition: 'color 0.2s ease', cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00d4ff'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8ba3c7'}
              >
                <Mail style={{ width: '1rem', height: '1rem', flexShrink: 0 }} />
                <span>contact@skalisys.fr</span>
              </a>
              <div>
                <a
                  href="https://www.linkedin.com/company/skalisys"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Skalisys"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '2.25rem', height: '2.25rem',
                    borderRadius: '8px',
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#0066ff';
                    el.style.borderColor = '#0066ff';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(0,212,255,0.08)';
                    el.style.borderColor = 'rgba(0,212,255,0.2)';
                  }}
                >
                  <Linkedin style={{ width: '1rem', height: '1rem', color: '#8ba3c7' }} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#8ba3c7', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Skalisys. {t('footer.copyright')}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              href="/mentions-legales"
              style={{ color: '#8ba3c7', textDecoration: 'none', fontSize: '0.8rem', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00d4ff'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8ba3c7'}
            >
              {t('footer.legal')}
            </Link>
            <Link
              href="/politique-confidentialite"
              style={{ color: '#8ba3c7', textDecoration: 'none', fontSize: '0.8rem', cursor: 'pointer', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00d4ff'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8ba3c7'}
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;