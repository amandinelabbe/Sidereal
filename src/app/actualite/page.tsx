'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useRouter } from 'next/navigation';
import { articles as rawArticles } from '@/lib/articles';

const CATEGORY_STYLES: Record<string, { bg: string; text: string; bar: string }> = {
  Innovation:                  { bg: 'rgba(0,102,255,0.15)',  text: '#60a5fa', bar: '#0066ff' },
  Migration:                   { bg: 'rgba(0,180,216,0.15)',  text: '#22d3ee', bar: '#00b4d8' },
  'Intelligence Artificielle': { bg: 'rgba(124,58,237,0.15)', text: '#a78bfa', bar: '#7c3aed' },
  'Artificial Intelligence':   { bg: 'rgba(124,58,237,0.15)', text: '#a78bfa', bar: '#7c3aed' },
  default:                     { bg: 'rgba(74,96,128,0.15)',  text: '#94a3b8', bar: '#4a6080' },
};

export default function Actualite() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const isFr = language === 'fr';

  const CATEGORIES_FR = ['Tous', 'Innovation', 'Migration', 'Intelligence Artificielle'];
  const CATEGORIES_EN = ['All', 'Innovation', 'Migration', 'Artificial Intelligence'];
  const CATEGORIES = isFr ? CATEGORIES_FR : CATEGORIES_EN;

  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const articles = rawArticles.map(a => ({
    ...a,
    title: isFr ? a.titleFr : a.titleEn,
    excerpt: isFr ? a.excerptFr : a.excerptEn,
    category: isFr ? a.category : a.categoryEn,
  }));

  const filtered = articles.filter((a) => {
    const isAll = activeCategory === 'Tous' || activeCategory === 'All';
    const matchCat = isAll || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const displayed = showAll ? filtered : filtered.slice(0, 4);
  const featured = displayed[0];
  const rest = displayed.slice(1);

  const cardBase: React.CSSProperties = {
    background: '#0f1c2e', border: '1px solid rgba(0,212,255,0.15)',
    borderRadius: '14px', boxShadow: '0 4px 24px rgba(0,212,255,0.06)', overflow: 'hidden',
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const getCatCount = (cat: string) => cat === 'Tous' || cat === 'All' ? articles.length : articles.filter(a => a.category === cat).length;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem,6vw,3.75rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.875rem' }}>{t('blog.title')}</h1>
          <p style={{ fontSize: 'clamp(0.875rem,2vw,1.1rem)', color: '#8ba3c7', maxWidth: '42rem', margin: '0 auto', lineHeight: 1.7 }}>{t('blog.subtitle')}</p>
        </motion.div>

        {/* Search + Filters — stack on mobile */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '1rem', height: '1rem', color: '#8ba3c7' }} />
            <input type="text" placeholder={isFr ? 'Rechercher un article...' : 'Search articles...'}
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.65rem', paddingBottom: '0.65rem', background: '#0f1c2e', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '12px', color: '#ffffff', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat || (activeCategory === 'Tous' && cat === 'All') || (activeCategory === 'All' && cat === 'Tous');
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: '0.4rem 0.875rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.25s ease', background: isActive ? '#00d4ff' : 'rgba(15,28,46,0.8)', color: isActive ? '#080d1a' : '#8ba3c7', border: `1px solid ${isActive ? '#00d4ff' : 'rgba(0,212,255,0.2)'}`, whiteSpace: 'nowrap' }}>
                  {cat} <span style={{ opacity: 0.7, fontSize: '0.68rem' }}>{getCatCount(cat)}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#8ba3c7' }}>{isFr ? 'Aucun article trouvé.' : 'No articles found.'}</div>
        )}

        {/* Featured — no side panel on mobile */}
        {featured && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            style={{ ...cardBase, marginBottom: '1.5rem', cursor: 'pointer' }}
            onClick={() => router.push(`/actualite/${featured.id}`)}>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{ background: CATEGORY_STYLES[featured.category]?.bg ?? CATEGORY_STYLES.default.bg, color: CATEGORY_STYLES[featured.category]?.text ?? CATEGORY_STYLES.default.text, fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>{featured.category}</span>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px', background: 'rgba(0,212,255,0.12)', color: '#00d4ff' }}>⭐ {isFr ? 'À la une' : 'Featured'}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.2rem,3vw,1.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, margin: 0 }}>{featured.title}</h2>
              <p style={{ fontSize: 'clamp(0.825rem,2vw,0.95rem)', color: '#8ba3c7', lineHeight: 1.7, margin: 0 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.75rem', color: '#8ba3c7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar style={{ width: '0.75rem', height: '0.75rem' }} /><span>{formatDate(featured.date)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock style={{ width: '0.75rem', height: '0.75rem' }} /><span>{featured.readTime}</span>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); router.push(`/actualite/${featured.id}`); }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1.25rem', borderRadius: '10px', border: 'none', background: '#00d4ff', color: '#080d1a', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', flexShrink: 0 }}>
                  {t('blog.readArticle')} <ArrowRight style={{ width: '0.9rem', height: '0.9rem' }} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {rest.map((article, index) => {
              const barColor = CATEGORY_STYLES[article.category]?.bar ?? CATEGORY_STYLES.default.bar;
              return (
                <motion.div key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }}
                  style={{ ...cardBase, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                  onClick={() => router.push(`/actualite/${article.id}`)}>
                  <div style={{ height: '4px', background: barColor, flexShrink: 0 }} />
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                    <span style={{ background: CATEGORY_STYLES[article.category]?.bg ?? CATEGORY_STYLES.default.bg, color: CATEGORY_STYLES[article.category]?.text ?? CATEGORY_STYLES.default.text, fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px', display: 'inline-block' }}>{article.category}</span>
                    <h3 style={{ fontSize: 'clamp(0.95rem,2vw,1.05rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.4, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#8ba3c7', lineHeight: 1.65, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', flex: 1 }}>{article.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.875rem', borderTop: '1px solid rgba(0,212,255,0.1)', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.72rem', color: '#8ba3c7' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar style={{ width: '0.65rem', height: '0.65rem' }} /><span>{formatDate(article.date)}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock style={{ width: '0.65rem', height: '0.65rem' }} /><span>{article.readTime}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#00d4ff', fontSize: '0.8rem', fontWeight: 600 }}>
                        {isFr ? 'Lire' : 'Read'} <ArrowRight style={{ width: '0.85rem', height: '0.85rem' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Show all button */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
          <button onClick={() => setShowAll(!showAll)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '12px', border: '2px solid #00d4ff', color: '#00d4ff', background: 'rgba(0,212,255,0.06)', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
            {showAll ? (isFr ? 'Voir moins' : 'Show less') : (isFr ? 'Voir tous les articles' : 'View all articles')}
            <ArrowRight style={{ width: '0.9rem', height: '0.9rem', transform: showAll ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}