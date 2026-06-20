'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Code2, FolderGit2, FileText } from 'lucide-react';

const skills = [
  { cat: 'AI / ML', items: ['LLMs', 'RAG', 'PyTorch', 'Hugging Face', 'NLP', 'Deep Learning', 'Ollama', 'OpenAI'] },
  { cat: 'Backend', items: ['FastAPI', 'Django', 'Node.js', 'REST APIs', 'WebSockets', 'PostgreSQL', 'Docker'] },
  { cat: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'] },
  { cat: 'Research', items: ['Explainable AI', 'IDS', 'Compiler Optimization', 'Fog/Edge Computing'] },
];

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();

  const stats = [
    { icon: Code2, value: t('experience'), label: locale === 'fa' ? 'برنامه‌نویسی' : 'Programming' },
    { icon: FolderGit2, value: t('projects_count'), label: locale === 'fa' ? 'پروژه' : 'Projects' },
    { icon: FileText, value: t('papers'), label: locale === 'fa' ? 'مقاله' : 'Papers' },
  ];

  return (
    <section id="about" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">{t('label')}</p>
          <h2 className="section-title">{t('title')}</h2>
          <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '15px' }}>{t('description')}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '13px', marginBottom: '2.5rem' }}>
            <MapPin size={13} color="#00D4FF" /> {t('location')}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <Icon size={20} color="#00D4FF" style={{ margin: '0 auto 10px' }} />
                <p style={{ fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>{value}</p>
                <p style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {skills.map((group, i) => (
            <motion.div key={group.cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card" style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, color: '#00D4FF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>{group.cat}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
