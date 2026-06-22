'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import { GithubIcon, LinkedinIcon } from './Icons';

const ParticleHero = dynamic(() => import('./ParticleHero'), { ssr: false });

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <ParticleHero />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #FFFFFF)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '8rem 2rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 180, damping: 18 }}
          style={{ marginBottom: '1.8rem' }}
        >
          <img
            src="/avatar.png"
            alt="Reza Kermanian"
            width={130}
            height={130}
            style={{ display: 'block' }}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', border: '1px solid rgba(8,145,178,0.3)', background: 'rgba(8,145,178,0.06)', marginBottom: '2rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0891B2' }} />
          <span style={{ fontSize: '13px', color: '#0891B2', fontWeight: 500 }}>{t('badge')}</span>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ fontSize: '18px', color: '#475569', marginBottom: '8px' }}>{t('greeting')}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 900, lineHeight: 1, marginBottom: '1rem', letterSpacing: '-2px' }}>
          <span style={{ color: '#0F172A' }}>REZA </span><span className="gradient-text">K.</span>
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ fontSize: 'clamp(13px, 2vw, 16px)', fontWeight: 300, color: '#475569', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{t('title')}</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          style={{ fontSize: '16px', color: '#64748B', maxWidth: '560px', lineHeight: 1.8, marginBottom: '2.5rem' }}>{t('subtitle')}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="#projects" className="btn-primary">{t('cta_primary')} <ArrowDown size={15} /></a>
          <a href="/cv.pdf" download className="btn-secondary"><Download size={15} /> {t('cta_secondary')}</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: '12px' }}>
          {[
            { icon: GithubIcon,   href: 'https://github.com/rezakermanian78',    label: 'GitHub'   },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/rezakermanian', label: 'LinkedIn' },
            { icon: Mail,         href: 'mailto:reza.kermanian1378@gmail.com',   label: 'Email'    },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', textDecoration: 'none' }}>
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
