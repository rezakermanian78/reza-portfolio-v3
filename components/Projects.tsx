'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, ShoppingBag, GraduationCap, Brain, TrendingUp, Lock, Coins } from 'lucide-react';

const projects = [
  { id: 'conformis', icon: Shield, color: '#00D4FF', tags: ['FastAPI', 'Next.js', 'Claude AI', 'PostgreSQL'], live: 'https://conformis.tech', featured: true },
  { id: 'goldshahbazi', icon: Coins, color: '#F59E0B', tags: ['React', 'Django', 'PostgreSQL', 'WebSocket'], live: null, featured: false },
  { id: 'reniom', icon: ShoppingBag, color: '#A855F7', tags: ['React.js', 'Django REST', 'PostgreSQL'], live: null },
  { id: 'unimanager', icon: GraduationCap, color: '#7B2FBE', tags: ['React', 'Django', 'i18next', 'RTL/LTR'], live: null },
  { id: 'rag', icon: Brain, color: '#00D4FF', tags: ['Python', 'FastAPI', 'Ollama', 'Vector Search'], live: null },
  { id: 'trading', icon: TrendingUp, color: '#A855F7', tags: ['CNN', 'LSTM', 'GAN', 'XAUUSD'], live: null },
  { id: 'ids', icon: Lock, color: '#7B2FBE', tags: ['XAI', 'Deep Learning', 'Cybersecurity'], live: null },
];

const data: Record<string, { en: { title: string; desc: string }; fa: { title: string; desc: string } }> = {
  conformis: {
    en: { title: 'Conformis — EU AI Act Compliance', desc: 'Automated EU AI Act compliance scanner. Detects risk tiers across Python and TypeScript codebases. Scanned LangChain (78) and CrewAI (72).' },
    fa: { title: 'Conformis — انطباق با قانون هوش مصنوعی EU', desc: 'اسکنر خودکار انطباق با قانون هوش مصنوعی اتحادیه اروپا. تشخیص سطوح ریسک در کدبیس‌های Python و TypeScript.' },
  },
  goldshahbazi: {
    en: { title: 'Gold Shahbazi — Precious Metals Trading', desc: 'Private trading platform for gold, silver and coins. Users submit buy/sell requests, admin approves transactions with real-time order management.' },
    fa: { title: 'گلد شهبازی — معاملات آب‌شده، نقره و سکه', desc: 'پلتفرم خصوصی معاملات طلای آب‌شده، نقره و سکه. کاربران درخواست خرید/فروش ثبت می‌کنند و ادمین تأیید می‌کند.' },
  },
  reniom: {
    en: { title: 'Reniom.com — E-commerce Platform', desc: 'Large-scale e-commerce platform with authentication, cart system, and scalable backend for high-volume traffic.' },
    fa: { title: 'Reniom.com — پلتفرم تجارت الکترونیک', desc: 'پلتفرم تجارت الکترونیک مقیاس‌بزرگ با احراز هویت، سیستم سبد خرید و معماری مقیاس‌پذیر.' },
  },
  unimanager: {
    en: { title: 'Unimanager.ir — Academic Migration', desc: 'Bilingual platform with consultation booking, document submission and student workflow automation for Turkey & Europe.' },
    fa: { title: 'Unimanager.ir — مهاجرت تحصیلی', desc: 'پلتفرم دوزبانه با رزرو مشاوره، ارسال مدارک و اتوماسیون گردش کار برای متقاضیان ترکیه و اروپا.' },
  },
  rag: {
    en: { title: 'Chat with PDF — Local RAG System', desc: 'Fully offline RAG for intelligent PDF querying with document chunking, vector embeddings, and local LLM integration.' },
    fa: { title: 'چت با PDF — سیستم RAG محلی', desc: 'سیستم RAG کاملاً آفلاین برای پرس‌وجوی هوشمند PDF با chunking سند و LLM محلی.' },
  },
  trading: {
    en: { title: 'AI MetaTrader Trading Robot', desc: 'Intelligent trading robot combining CNN, LSTM, and GAN architectures with technical indicators for XAUUSD analysis.' },
    fa: { title: 'ربات تریدینگ MetaTrader با هوش مصنوعی', desc: 'ربات معاملاتی با ترکیب CNN، LSTM و GAN برای تحلیل طلا (XAUUSD).' },
  },
  ids: {
    en: { title: 'AI-Based Intrusion Detection System', desc: 'Research-driven IDS leveraging Explainable AI and deep learning for next-generation cybersecurity.' },
    fa: { title: 'سیستم تشخیص نفوذ مبتنی بر هوش مصنوعی', desc: 'IDS تحقیق‌محور با هوش مصنوعی قابل تفسیر و یادگیری عمیق برای امنیت سایبری نسل بعدی.' },
  },
};

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'en' | 'fa';

  return (
    <section id="projects" className="section">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {projects.map((p, i) => {
          const Icon = p.icon;
          const d = data[p.id][locale];
          return (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {p.featured && (
                <span style={{ alignSelf: 'flex-start', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)' }}>
                  ⭐ Featured
                </span>
              )}
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                <Icon size={20} color={p.color} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', lineHeight: 1.4 }}>{d.title}</h3>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7 }}>{d.desc}</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              {p.live && (
                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#00D4FF', textDecoration: 'none' }}>
                    <ExternalLink size={12} /> {t('live')}
                  </a>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
