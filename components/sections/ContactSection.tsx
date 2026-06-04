'use client';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const eventTypeValues = ['wedding', 'engagement', 'birthday', 'baby', 'family', 'corporate', 'other'] as const;

export default function ContactSection() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const schema = z.object({
    name: z.string().min(1, t('validation.nameRequired')),
    phone: z
      .string()
      .min(9, t('validation.phoneInvalid'))
      .regex(/^[0-9+\s-]+$/, t('validation.phoneInvalid')),
    eventType: z.string().min(1, t('validation.eventTypeRequired')),
    date: z.string().optional(),
    guests: z.string().optional(),
    message: z.string().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      await new Promise((r) => setTimeout(r, 1000));
      console.log('Form data:', data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  const baseInput =
    'w-full bg-white border border-emerald-deep/25 px-5 py-3 text-sm text-soft-black placeholder:text-muted/60 focus:outline-none focus:border-emerald-deep transition-colors';
  const inputClass = `${baseInput} rounded-full`;
  const textareaClass = `${baseInput} rounded-2xl resize-none`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle badge={t('badge')} title={t('title')} className="mb-4" />
        <p className="text-center text-muted text-sm mb-16 max-w-md mx-auto">
          {t('description')}
        </p>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-deep/10 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-emerald-deep" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted mb-1">
                  {t('info.phone')}
                </div>
                <div className="font-serif text-soft-black leading-relaxed">
                  0392 999 839 <span className="text-muted text-xs">(Bích)</span>
                </div>
                <div className="font-serif text-soft-black leading-relaxed">
                  0916 788 479 <span className="text-muted text-xs">(Anh Thông)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-deep/10 flex items-center justify-center shrink-0 mt-1">
                <MapPin size={16} className="text-emerald-deep" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted mb-2">
                  {t('info.address')}
                </div>
                <div className="text-sm text-soft-black leading-relaxed mb-2">
                  <span className="text-xs text-muted uppercase tracking-wider">CS1 —</span>{' '}
                  Nhà hàng Ngọc Bích, Thôn An Hòa, phường Đồng Phú, Thành phố Đồng Nai
                </div>
                <div className="text-sm text-soft-black leading-relaxed">
                  <span className="text-xs text-muted uppercase tracking-wider">CS2 —</span>{' '}
                  Nhà hàng Ngọc Bích, Tổ 50, khu phố Bàu Ké, Đồng Phú, Thành phố Đồng Nai
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-deep/10 flex items-center justify-center shrink-0">
                <Clock size={16} className="text-emerald-deep" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted mb-1">
                  {t('info.hours')}
                </div>
                <div className="text-sm text-soft-black">{t('info.hoursValue')}</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="bg-emerald-deep/5 border border-emerald-deep/20 p-8 text-center rounded-2xl">
                <p className="font-serif text-2xl text-emerald-deep mb-2">&#x2713;</p>
                <p className="text-emerald-deep">{t('form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-wide uppercase text-muted block mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      {...register('name')}
                      placeholder={t('form.namePlaceholder')}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 pl-4">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs tracking-wide uppercase text-muted block mb-2">
                      {t('form.phone')}
                    </label>
                    <input
                      {...register('phone')}
                      placeholder={t('form.phonePlaceholder')}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 pl-4">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-wide uppercase text-muted block mb-2">
                    {t('form.eventType')}
                  </label>
                  <div className="relative">
                    <select
                      {...register('eventType')}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">{t('form.eventTypePlaceholder')}</option>
                      {eventTypeValues.map((type) => (
                        <option key={type} value={type}>
                          {t(`eventTypes.${type}`)}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                    />
                  </div>
                  {errors.eventType && (
                    <p className="text-red-500 text-xs mt-1 pl-4">{errors.eventType.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-wide uppercase text-muted block mb-2">
                      {t('form.date')}
                    </label>
                    <input type="date" {...register('date')} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs tracking-wide uppercase text-muted block mb-2">
                      {t('form.guests')}
                    </label>
                    <input
                      {...register('guests')}
                      placeholder={t('form.guestsPlaceholder')}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-wide uppercase text-muted block mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder={t('form.messagePlaceholder')}
                    className={textareaClass}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t('form.error')}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
