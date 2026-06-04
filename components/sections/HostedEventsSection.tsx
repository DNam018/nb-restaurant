'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { hostedEvents } from '@/data/events';

export default function HostedEventsSection() {
  const t = useTranslations('events');
  const locale = useLocale() as 'vi' | 'en';

  return (
    <section id="events" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle badge={t('badge')} title={t('title')} className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hostedEvents.map((event, i) => {
            const content = event[locale];
            const isFeature = i === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  isFeature ? 'md:col-span-2 h-96' : 'h-72'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br from-emerald-deep to-[#2a6e70]"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-gold text-xs tracking-widest uppercase mb-2 block">
                    {content.type}
                  </span>
                  <h3
                    className={`font-serif text-white leading-tight mb-3 ${
                      isFeature ? 'text-3xl md:text-4xl' : 'text-2xl'
                    }`}
                  >
                    {content.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{content.description}</p>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs">
                    <Users size={12} />
                    <span>
                      {event.guests} {t('guests')}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
