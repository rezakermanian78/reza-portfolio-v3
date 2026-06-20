'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const papers = [
  {
    year: '2025',
    en: { title: 'AI-Driven Compiler Optimization: A Survey from Rule-Based Heuristics to LLMs', desc: 'Comprehensive review of AI-powered compiler optimization techniques spanning classical heuristic methods to large language model-based approaches.' },
    fa: { title: 'بهینه‌سازی کامپایلر با هوش مصنوعی: از قوانین هوریستیک تا LLMها', desc: 'مرور جامع تکنیک‌های بهینه‌سازی کامپایلر مبتنی بر هوش مصنوعی از روش‌های کلاسیک تا مدل‌های زبانی بزرگ.' },
  },
  {
    year: '2025',
    en: { title: 'Systematic Literature Review on Explainable AI Methods for Intrusion Detection', desc: 'Structured review of XAI techniques applied to IDS with comparative analysis of interpretability methods and benchmarking.' },
    fa: { title: 'مرور سیستماتیک روش‌های هوش مصنوعی قابل تفسیر برای تشخیص نفوذ', desc: 'مرور ساختارمند تکنیک‌های XAI اعمال‌شده بر سیستم‌های تشخیص نفوذ با تحلیل تطبیقی روش‌های تفسیرپذیری.' },
  },
  {
    year: '2024',
    en: { title: 'Resource Allocation and Task Scheduling in Fog/Edge Computing Using Deep Learning', desc: 'Optimized deep-learning model for intelligent resource management and task scheduling in distributed Fog/Edge environments.' },
    fa: { title: 'تخصیص منابع و زمان‌بندی وظایف در محاسبات Fog/Edge با یادگیری عمیق', desc: 'مدل بهینه‌شده مبتنی بر یادگیری عمیق برای مدیریت هوشمند منابع در محیط‌های توزیع‌شده Fog/Edge.' },
  },
];

export default function Research() {
  const t = useTranslations('research');
  const locale = useLocale() as 'en' | 'fa';

  return (
    <section id="research" className="section">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
        <p className="section-label">{t('label')}</p>
        <h2 className="section-title">{t('title')}</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {papers.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="card"
            style={{ padding: '1.5rem', display: 'flex', gap: '1rem', cursor: 'default' }}>
            <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={18} color="#00D4FF" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', lineHeight: 1.5 }}>{p[locale].title}</h3>
                <span style={{ flexShrink: 0, fontSize: '11px', fontFamily: 'monospace', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)', padding: '2px 8px', borderRadius: '6px' }}>{p.year}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.7 }}>{p[locale].desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
