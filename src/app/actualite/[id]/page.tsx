'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { articles } from '@/lib/articles';
import Link from 'next/link';

const CATEGORY_COLORS: Record<string, string> = {
  Innovation: '#0066ff', Migration: '#00b4d8',
  'Intelligence Artificielle': '#7c3aed', 'Artificial Intelligence': '#7c3aed',
};

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const id = Number(params.id);
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'1rem' }}>
        <p style={{ color:'#8ba3c7', fontSize:'1.1rem' }}>{isFr ? 'Article introuvable.' : 'Article not found.'}</p>
        <Link href="/actualite" style={{ color:'#00d4ff', textDecoration:'none' }}>{isFr ? '← Retour aux actualités' : '← Back to news'}</Link>
      </div>
    );
  }

  const title = isFr ? article.titleFr : article.titleEn;
  const content = isFr ? article.contentFr : article.contentEn;
  const category = isFr ? article.category : article.categoryEn;
  const catColor = CATEGORY_COLORS[category] ?? '#00d4ff';

  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return (
        <h2 key={i} style={{ fontSize:'1.4rem', fontWeight:700, color:'#ffffff', margin:'2rem 0 0.75rem', borderLeft:`3px solid ${catColor}`, paddingLeft:'0.75rem' }}>
          {line.replace('## ', '')}
        </h2>
      );
      if (line.startsWith('### ')) return (
        <h3 key={i} style={{ fontSize:'1.1rem', fontWeight:600, color:'#00d4ff', margin:'1.5rem 0 0.5rem' }}>
          {line.replace('### ', '')}
        </h3>
      );
      if (line.startsWith('- ') || line.startsWith('* ')) return (
        <div key={i} style={{ display:'flex', gap:'0.5rem', marginBottom:'0.35rem' }}>
          <span style={{ color:catColor, flexShrink:0 }}>•</span>
          <span style={{ color:'#c8d8ee', fontSize:'0.95rem', lineHeight:1.7 }}>{line.replace(/^[-*] /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</span>
        </div>
      );
      if (line.trim() === '') return <div key={i} style={{ height:'0.5rem' }} />;
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} style={{ color:'#c8d8ee', fontSize:'0.975rem', lineHeight:1.8, marginBottom:'0.25rem' }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color:'#ffffff' }}>{p}</strong> : p)}
        </p>
      );
    });
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { year:'numeric', month:'long', day:'numeric' });

  return (
    <div style={{ minHeight:'100vh', padding:'6rem 1.5rem 4rem', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:'780px', margin:'0 auto' }}>
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
          <button onClick={() => router.back()}
            style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'#00d4ff', background:'none', border:'none', cursor:'pointer', fontSize:'0.875rem', marginBottom:'2rem', padding:0 }}>
            <ArrowLeft style={{ width:'1rem', height:'1rem' }} />
            {isFr ? 'Retour aux actualités' : 'Back to news'}
          </button>

          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.25rem' }}>
            <span style={{ fontSize:'2rem' }}>{article.emoji}</span>
            <span style={{ background:`${catColor}22`, color:catColor, fontSize:'0.78rem', fontWeight:700, padding:'0.3rem 0.9rem', borderRadius:'9999px', border:`1px solid ${catColor}44` }}>{category}</span>
          </div>

          <h1 style={{ fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:800, color:'#ffffff', lineHeight:1.25, marginBottom:'1.5rem' }}>{title}</h1>

          {/* Meta — no author, just date + read time */}
          <div style={{ display:'flex', alignItems:'center', gap:'1.5rem', flexWrap:'wrap', marginBottom:'2.5rem', paddingBottom:'2rem', borderBottom:'1px solid rgba(0,212,255,0.12)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.8rem', color:'#8ba3c7' }}>
              <Calendar style={{ width:'0.8rem', height:'0.8rem' }} />
              <span>{formatDate(article.date)}</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:'0.35rem', fontSize:'0.8rem', color:'#8ba3c7' }}>
              <Clock style={{ width:'0.8rem', height:'0.8rem' }} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div style={{ background:'#0f1c2e', border:'1px solid rgba(0,212,255,0.1)', borderRadius:'16px', padding:'2rem 2.25rem' }}>
            {renderContent(content)}
          </div>

          <div style={{ marginTop:'3rem', display:'flex', justifyContent:'center' }}>
            <Link href="/actualite" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1.75rem', borderRadius:'10px', border:'2px solid rgba(0,212,255,0.35)', color:'#00d4ff', background:'rgba(0,212,255,0.05)', fontWeight:600, fontSize:'0.875rem', textDecoration:'none' }}>
              <ArrowLeft style={{ width:'0.9rem', height:'0.9rem' }} />
              {isFr ? 'Tous les articles' : 'All articles'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}