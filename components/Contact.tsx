'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

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
    width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0',
    borderRadius: '12px', padding: '14px 16px', color: '#0F172A', fontSize: '14px',
    outline: 'none', fontFamily: 'inherit',
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Reza.kermanian99@gmail.com',
      href: 'mailto:Reza.kermanian99@gmail.com',
      color: '#475569',
    },
    {
      icon: WhatsappIcon,
      label: '+98 914 520 1378',
      href: 'https://wa.me/989145201378',
      color: '#22C55E',
    },
    {
      icon: WhatsappIcon,
      label: '+98 933 711 8287',
      href: 'https://wa.me/989337118287',
      color: '#22C55E',
    },
    {
      icon: GithubIcon,
      label: 'github.com/rezakermanian78',
      href: 'https://github.com/rezakermanian78',
      color: '#475569',
    },
    {
      icon: LinkedinIcon,
      label: 'linkedin.com/in/rezakermanian',
      href: 'https://linkedin.com/in/rezakermanian',
      color: '#0A66C2',
    },
  ];

  return (
    <section id="contact" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-label">{t('label')}</p>
          <h2 className="section-title">{t('title')}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '13px', marginBottom: '2rem' }}>
            <MapPin size={13} color="#0891B2" /> {t('location')}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {contacts.map(({ icon: Icon, label, href, color }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none',
                  padding: '10px 14px', borderRadius: '12px', border: '1px solid #E2E8F0',
                  transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = color;
                  (e.currentTarget as HTMLAnchorElement).style.background = '#F8FAFC';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#E2E8F0';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px',
                  background: `${color}14`, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0, color }}>
                  <Icon size={16} />
                </div>
                <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          {sent ? (
            <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%',
                background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Send size={22} color="#0891B2" />
              </div>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{t('success')}</p>
              <p style={{ fontSize: '13px', color: '#64748B' }}>
                {locale === 'fa' ? 'به زودی پاسخ میدهم' : "I'll get back to you soon"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input required name="name" type="text" placeholder={t('name')} style={inputStyle} />
              <input required name="email" type="email" placeholder={t('email')} style={inputStyle} />
              <textarea required name="message" rows={5} placeholder={t('message')}
                style={{ ...inputStyle, resize: 'none' }} />
              <button type="submit" disabled={loading} className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                <Send size={15} />
                {loading ? (locale === 'fa' ? '...در حال ارسال' : 'Sending...') : t('send')}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
