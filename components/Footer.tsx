'use client';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const fa = locale === 'fa';
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>REZA</span>
          <span style={{ fontSize: '18px', fontWeight: 900 }} className="gradient-text">K.</span>
        </div>
        <p style={{ fontSize: '13px', color: '#64748B' }}>
          {fa ? '© ۲۰۲۵ رضا کرمانیان — ساخته‌شده با Next.js، Three.js و Framer Motion' : '© 2025 Reza Kermanian — Built with Next.js, Three.js & Framer Motion'}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00D4FF', display: 'inline-block' }} />
          <span style={{ fontSize: '12px', color: '#64748B' }}>{fa ? 'استانبول، ترکیه' : 'Istanbul, Türkiye'}</span>
        </div>
      </div>
    </footer>
  );
}
