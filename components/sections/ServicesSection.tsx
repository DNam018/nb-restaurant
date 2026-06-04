'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Cake, Building2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { services } from '@/data/services';

const iconMap: Record<string, React.ElementType> = { Heart, Sparkles, Cake, Building2 };

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale() as 'vi' | 'en';

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle badge={t('badge')} title={t('title')} className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const content = service[locale];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-deep to-[#1a5c5e]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                      {Icon && <Icon size={18} className="text-gold" />}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-soft-black mb-2">{content.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{content.description}</p>
                  <span className="text-xs tracking-widest uppercase text-gold font-medium group-hover:tracking-[0.2em] transition-all duration-300">
                    {t('learnMore')} &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
