'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => { if (!isMobile) setIsMenuOpen(false); }, [isMobile]);

  const menuItems = [
    { href: '/',          label: t('nav.home') },
    { href: '/services',  label: t('nav.services') },
    { href: '/produits',  label: t('nav.projects') },
    { href: '/actualite', label: t('nav.blog') },
    { href: '/contact',   label: t('nav.contact') },
  ];

  return (
    <>
      {/* Global style to prevent horizontal scroll */}
      <style>{`html, body { max-width: 100vw; overflow-x: hidden; }`}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', boxSizing: 'border-box',
        zIndex: 100,
        background: 'rgba(8,13,26,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,212,255,0.08)',
      }}>
        <div style={{
          width: '100%', boxSizing: 'border-box',
          maxWidth: '1280px', margin: '0 auto',
          padding: '0 1rem',
          height: '4rem',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
              <Image src="/logo_sapion.png" alt="Sidereal" width={36} height={36} style={{ objectFit: 'contain' }} />
            </div>
            <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#00d4ff', whiteSpace: 'nowrap' }}>Sidereal</span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
              {menuItems.map(item => (
                <Link key={item.href} href={item.href}
                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: 500, color: '#ffffff', textDecoration: 'none', borderRadius: '8px', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Right: lang + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0 }}>
            {!isMobile && <div style={{ width: '1px', height: '1.25rem', background: 'rgba(0,212,255,0.2)' }} />}

            <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.35rem 0.6rem', borderRadius: '8px', border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.06)', color: '#ffffff', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', transition: 'all 0.2s', flexShrink: 0 }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(0,212,255,0.14)'; el.style.borderColor = 'rgba(0,212,255,0.45)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(0,212,255,0.06)'; el.style.borderColor = 'rgba(0,212,255,0.2)'; }}>
              <Globe style={{ width: '0.875rem', height: '0.875rem', color: '#00d4ff' }} />
              <span style={{ textTransform: 'uppercase' }}>{language}</span>
            </button>

            {isMobile && (
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2rem', height: '2rem', borderRadius: '8px', border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.06)', color: '#ffffff', cursor: 'pointer', flexShrink: 0 }}>
                {isMenuOpen ? <X style={{ width: '1.1rem', height: '1.1rem' }} /> : <Menu style={{ width: '1.1rem', height: '1.1rem' }} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(0,212,255,0.08)', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ padding: '0.5rem 1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {menuItems.map((item, i) => (
                  <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}
                      style={{ display: 'block', padding: '0.65rem 0.875rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 500, color: '#ffffff', background: 'rgba(0,212,255,0.04)', textDecoration: 'none' }}>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;