'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink, GitFork } from 'lucide-react';
import dynamic from 'next/dynamic';

const ParticleHero = dynamic(() => import('./ParticleHero'), { ssr: false });

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <ParticleHero />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #0A0A15)' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '8rem 2rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', border: '1px solid rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.06)', marginBottom: '2rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '13px', color: '#00D4FF', fontWeight: 500 }}>{t('badge')}</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ fontSize: '18px', color: '#64748B', marginBottom: '8px' }}>
          {t('greeting')}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 900, lineHeight: 1, marginBottom: '1rem', letterSpacing: '-2px' }}>
          <span style={{ color: '#0F172A' }}>REZA </span>
          <span className="gradient-text">K.</span>
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ fontSize: 'clamp(13px, 2vw, 16px)', fontWeight: 300, color: '#64748B', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          {t('title')}
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          style={{ fontSize: '16px', color: '#64748B', maxWidth: '560px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          {t('subtitle')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="#projects" className="btn-primary">{t('cta_primary')} <ArrowDown size={15} /></a>
          <a href="/cv.pdf" download className="btn-secondary"><Download size={15} /> {t('cta_secondary')}</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: '12px' }}>
          {[
            { icon: GitFork, href: 'https://github.com/rezakermanian78', label: 'GitHub' },
            { icon: ExternalLink, href: 'https://linkedin.com/in/rezakermanian', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:reza.kermanian1378@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'; e.currentTarget.style.color = '#00D4FF'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94A3B8'; }}>
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: '#64748B' }}>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
