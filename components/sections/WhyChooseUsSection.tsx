'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Palette, HeartHandshake, Package } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { whyChooseUs } from '@/data/whyChooseUs';

const iconMap: Record<string, React.ElementType> = { Building2, Palette, HeartHandshake, Package };

export default function WhyChooseUsSection() {
  const t = useTranslations('why');
  const locale = useLocale() as 'vi' | 'en';

  return (
    <section className="py-24 lg:py-32 bg-emerald-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle badge={t('badge')} title={t('title')} className="mb-16" light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            const content = item[locale];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5">
                  {Icon && <Icon size={22} className="text-gold" />}
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{content.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{content.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
