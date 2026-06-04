'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', key: 'stat1' },
  { value: '10+', key: 'stat2' },
  { value: '98%', key: 'stat3' },
  { value: '4', key: 'stat4' },
] as const;

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 lg:py-32 bg-emerald-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-gold block mb-4">
              {t('badge')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight whitespace-pre-line">
              {t('title')}
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-8" />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12">
              {t('description')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map(({ value, key }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="font-serif text-3xl text-gold mb-1">{value}</div>
                  <div className="text-xs tracking-wide text-white/50 uppercase">{t(key)}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
