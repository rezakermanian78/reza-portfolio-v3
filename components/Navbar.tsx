'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'research', href: '#research' },
    { key: 'contact', href: '#contact' },
  ];

  const switchLang = () => {
    const next = locale === 'en' ? 'fa' : 'en';
    const path = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${next}${path}`);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(10,10,21,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s',
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none' }}>
          <span style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px' }}>REZA</span>
          <span style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-1px' }} className="gradient-text">K.</span>
        </a>

        <div style={{ display: 'flex', gap: '2.5rem' }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.key} href={l.href} style={{ fontSize: '14px', color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
              {t(l.key)}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={switchLang} style={{ fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#64748B', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'; e.currentTarget.style.color = '#00D4FF'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#94A3B8'; }}>
            {locale === 'en' ? 'فا' : 'EN'}
          </button>
          <a href="#contact" className="btn-primary hidden md:inline-flex" style={{ padding: '8px 20px', fontSize: '13px' }}>
            {t('talk')}
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#0F172A', cursor: 'pointer' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(10,10,21,0.97)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {links.map(l => (
              <a key={l.key} href={l.href} onClick={() => setOpen(false)}
                style={{ color: '#64748B', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '15px' }}>
                {t(l.key)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
