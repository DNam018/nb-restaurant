'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { bookingSteps } from '@/data/bookingSteps';

export default function BookingProcessSection() {
  const t = useTranslations('process');
  const locale = useLocale() as 'vi' | 'en';

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle badge={t('badge')} title={t('title')} className="mb-16" />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          <div className="absolute top-8 left-16 right-16 h-px bg-emerald-deep/30" />

          {bookingSteps.map((step, i) => {
            const content = step[locale];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex-1 flex flex-col items-center text-center px-4"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-cream border-2 border-emerald-deep flex items-center justify-center mb-6">
                  <span className="font-serif text-xl text-emerald-deep">{step.step}</span>
                </div>
                <h3 className="font-serif text-lg text-soft-black mb-2">{content.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{content.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-10 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-deep/30" />
          {bookingSteps.map((step, i) => {
            const content = step[locale];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 relative"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-cream border-2 border-emerald-deep flex items-center justify-center shrink-0">
                  <span className="font-serif text-xl text-emerald-deep">{step.step}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-serif text-lg text-soft-black mb-1">{content.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{content.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
