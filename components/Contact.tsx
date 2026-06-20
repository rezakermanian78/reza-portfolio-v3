'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, ExternalLink, GitFork } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px', padding: '14px 16px', color: '#0F172A', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'inherit',
  };

  return (
    <section id="contact" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-label">{t('label')}</p>
          <h2 className="section-title">{t('title')}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '13px', marginBottom: '2.5rem' }}>
            <MapPin size={13} color="#00D4FF" /> {t('location')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: Mail, label: 'reza.kermanian1378@gmail.com', href: 'mailto:reza.kermanian1378@gmail.com' },
              { icon: GitFork, label: 'github.com/rezakermanian78', href: 'https://github.com/rezakermanian78' },
              { icon: ExternalLink, label: 'linkedin.com/in/rezakermanian', href: 'https://linkedin.com/in/rezakermanian' },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'}
                onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} />
                </div>
                <span style={{ fontSize: '13px' }}>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          {sent ? (
            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Send size={22} color="#00D4FF" />
              </div>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{t('success')}</p>
              <p style={{ fontSize: '13px', color: '#64748B' }}>{locale === 'fa' ? 'به زودی پاسخ می‌دهم' : "I'll get back to you soon"}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input required name="name" type="text" placeholder={t('name')} style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
              <input required name="email" type="email" placeholder={t('email')} style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
              <textarea required name="message" rows={5} placeholder={t('message')} style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'} />
              <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                <Send size={15} /> {loading ? (locale === 'fa' ? 'در حال ارسال...' : 'Sending...') : t('send')}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
