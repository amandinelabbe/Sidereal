'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [formData, setFormData] = useState({ nom:'', prenom:'', email:'', telephone:'', entreprise:'', message:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle'|'success'|'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ nom:'', prenom:'', email:'', telephone:'', entreprise:'', message:'' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, value: 'contact@skalisys.fr', description: isFr ? 'Nous répondons sous 24h' : 'We respond within 24h', href: 'mailto:contact@skalisys.fr' },
    { icon: Phone, value: '+33 6 25 73 20 21', description: isFr ? 'Lun-Ven 9h-18h' : 'Mon-Fri 9am-6pm', href: 'tel:+33625732021' },
    { icon: MapPin, value: 'Toulouse, France', description: isFr ? 'Intervention sur site en France / à distance en Europe' : 'On-site in France / remote across Europe', href: undefined },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'rgba(15,28,46,0.8)', border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s ease', boxSizing: 'border-box',
  };

  return (
    <div style={{ minHeight:'100vh', paddingTop:'5.5rem', paddingBottom:'4rem', position:'relative', zIndex:1 }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 1rem' }}>

        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
          style={{ textAlign:'center', marginBottom:'2.5rem' }}>
          <h1 style={{ fontSize:'clamp(1.75rem,5vw,3.25rem)', fontWeight:800, color:'#ffffff', marginBottom:'0.875rem' }}>{t('contact.title')}</h1>
          <p style={{ fontSize:'clamp(0.875rem,2vw,1.05rem)', color:'#8ba3c7', maxWidth:'40rem', margin:'0 auto', lineHeight:1.75 }}>{t('contact.subtitle')}</p>
        </motion.div>

        {/* Stack vertically on mobile, side-by-side on desktop */}
        <div style={{ display:'grid', gridTemplateColumns:'min(100%, 520px)', justifyContent:'center', gap:'2rem' }}
          className="contact-grid">
          <style>{`
            @media (min-width: 768px) {
              .contact-grid {
                grid-template-columns: 1fr 1fr !important;
                justify-content: stretch !important;
              }
            }
          `}</style>

          {/* Form */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}>
            <div style={{ background:'#0f1c2e', border:'1px solid rgba(0,212,255,0.15)', borderRadius:'16px', padding:'1.5rem' }}>
              <h2 style={{ fontSize:'1.1rem', fontWeight:700, color:'#ffffff', marginBottom:'1.25rem' }}>{t('contact.form.title')}</h2>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
                  style={{ marginBottom:'1rem', padding:'0.75rem 1rem', background:'rgba(5,150,105,0.15)', border:'1px solid rgba(5,150,105,0.3)', borderRadius:'10px', display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <CheckCircle style={{ width:'1rem', height:'1rem', color:'#34d399', flexShrink:0 }} />
                  <span style={{ color:'#34d399', fontSize:'0.85rem' }}>{t('contact.form.success')}</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
                  style={{ marginBottom:'1rem', padding:'0.75rem 1rem', background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:'10px', display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <AlertCircle style={{ width:'1rem', height:'1rem', color:'#f87171', flexShrink:0 }} />
                  <span style={{ color:'#f87171', fontSize:'0.85rem' }}>{t('contact.form.error')}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'0.875rem' }}>
                {/* Nom + Prénom — stack on very small screens */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}
                  className="name-grid">
                  <style>{`@media (max-width: 400px) { .name-grid { grid-template-columns: 1fr !important; } }`}</style>
                  <div>
                    <label style={{ display:'block', fontSize:'0.78rem', fontWeight:600, color:'#8ba3c7', marginBottom:'0.35rem' }}>{t('contact.form.lastName')} *</label>
                    <input type="text" name="nom" required value={formData.nom} onChange={handleChange} placeholder={t('contact.form.lastNamePlaceholder')} style={inputStyle}
                      onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.5)'}
                      onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.2)'} />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'0.78rem', fontWeight:600, color:'#8ba3c7', marginBottom:'0.35rem' }}>{t('contact.form.firstName')} *</label>
                    <input type="text" name="prenom" required value={formData.prenom} onChange={handleChange} placeholder={t('contact.form.firstNamePlaceholder')} style={inputStyle}
                      onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.5)'}
                      onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.2)'} />
                  </div>
                </div>

                <div>
                  <label style={{ display:'block', fontSize:'0.78rem', fontWeight:600, color:'#8ba3c7', marginBottom:'0.35rem' }}>{t('contact.form.email')} *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')} style={inputStyle}
                    onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.5)'}
                    onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.2)'} />
                </div>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}
                  className="phone-grid">
                  <style>{`@media (max-width: 400px) { .phone-grid { grid-template-columns: 1fr !important; } }`}</style>
                  <div>
                    <label style={{ display:'block', fontSize:'0.78rem', fontWeight:600, color:'#8ba3c7', marginBottom:'0.35rem' }}>{t('contact.form.phone')}</label>
                    <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder={t('contact.form.phonePlaceholder')} style={inputStyle}
                      onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.5)'}
                      onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.2)'} />
                  </div>
                  <div>
                    <label style={{ display:'block', fontSize:'0.78rem', fontWeight:600, color:'#8ba3c7', marginBottom:'0.35rem' }}>{t('contact.form.company')}</label>
                    <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder={t('contact.form.companyPlaceholder')} style={inputStyle}
                      onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.5)'}
                      onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(0,212,255,0.2)'} />
                  </div>
                </div>

                <div>
                  <label style={{ display:'block', fontSize:'0.78rem', fontWeight:600, color:'#8ba3c7', marginBottom:'0.35rem' }}>{t('contact.form.message')} *</label>
                  <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={t('contact.form.messagePlaceholder')}
                    style={{ ...inputStyle, resize:'none' }}
                    onFocus={e=>(e.target as HTMLTextAreaElement).style.borderColor='rgba(0,212,255,0.5)'}
                    onBlur={e=>(e.target as HTMLTextAreaElement).style.borderColor='rgba(0,212,255,0.2)'} />
                </div>

                <button type="submit" disabled={isSubmitting}
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', padding:'0.875rem', borderRadius:'10px', border:'none', background:'linear-gradient(135deg,#00d4ff,#4f8ef7)', color:'#080d1a', fontWeight:700, fontSize:'0.95rem', cursor:isSubmitting?'not-allowed':'pointer', opacity:isSubmitting?0.7:1, transition:'all 0.2s' }}>
                  {isSubmitting
                    ? <><div style={{ width:'1rem', height:'1rem', border:'2px solid rgba(8,13,26,0.3)', borderTopColor:'#080d1a', borderRadius:'50%', animation:'spin 0.8s linear infinite' }} /><span>{t('contact.form.sending')}</span></>
                    : <><Send style={{ width:'1rem', height:'1rem' }} /><span>{t('contact.form.send')}</span></>}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
            style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div>
              <h2 style={{ fontSize:'1.1rem', fontWeight:700, color:'#ffffff', marginBottom:'0.5rem' }}>{t('contact.info.title')}</h2>
              <p style={{ fontSize:'0.875rem', color:'#8ba3c7', lineHeight:1.7 }}>{t('contact.info.description')}</p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {contactInfo.map((info, i) => {
                const inner = (
                  <>
                    <div style={{ width:'2.25rem', height:'2.25rem', background:'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(79,142,247,0.15))', border:'1px solid rgba(0,212,255,0.25)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <info.icon style={{ width:'1rem', height:'1rem', color:'#00d4ff' }} />
                    </div>
                    <div style={{ minWidth:0 }}>
                      <p style={{ fontSize:'0.875rem', fontWeight:600, color:'#00d4ff', margin:0, wordBreak:'break-word' }}>{info.value}</p>
                      <p style={{ fontSize:'0.75rem', color:'#8ba3c7', margin:0, lineHeight:1.4 }}>{info.description}</p>
                    </div>
                  </>
                );
                const boxStyle: React.CSSProperties = { display:'flex', alignItems:'center', gap:'0.875rem', padding:'0.875rem', background:'#0f1c2e', border:'1px solid rgba(0,212,255,0.12)', borderRadius:'12px' };
                return info.href ? (
                  <a key={i} href={info.href} style={{ ...boxStyle, textDecoration:'none', cursor:'pointer' }}>
                    {inner}
                  </a>
                ) : (
                  <div key={i} style={boxStyle}>{inner}</div>
                );
              })}
            </div>

            {/* FAQ */}
            <div style={{ background:'#0f1c2e', border:'1px solid rgba(0,212,255,0.12)', borderRadius:'14px', padding:'1.25rem' }}>
              <h3 style={{ fontSize:'0.95rem', fontWeight:700, color:'#ffffff', marginBottom:'0.875rem' }}>{t('contact.faq.title')}</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {[{q:t('contact.faq.q1'),a:t('contact.faq.a1')},{q:t('contact.faq.q2'),a:t('contact.faq.a2')},{q:t('contact.faq.q3'),a:t('contact.faq.a3')}].map((faq,i)=>(
                  <div key={i}>
                    <p style={{ fontSize:'0.825rem', fontWeight:600, color:'#00d4ff', marginBottom:'0.2rem' }}>{faq.q}</p>
                    <p style={{ fontSize:'0.78rem', color:'#8ba3c7', lineHeight:1.6, margin:0 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}