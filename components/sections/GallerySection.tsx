'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const galleryItems = [
  { id: 1, category: 'wedding', height: 'tall' },
  { id: 2, category: 'decoration', height: 'short' },
  { id: 3, category: 'stage', height: 'short' },
  { id: 4, category: 'dining', height: 'tall' },
  { id: 5, category: 'wedding', height: 'short' },
  { id: 6, category: 'events', height: 'short' },
  { id: 7, category: 'decoration', height: 'tall' },
  { id: 8, category: 'wedding', height: 'short' },
  { id: 9, category: 'stage', height: 'short' },
] as const;

const tabs = ['all', 'wedding', 'decoration', 'stage', 'dining', 'events'] as const;
type Tab = typeof tabs[number];

const categoryColors: Record<string, string> = {
  wedding: 'from-[#0F3D3E] to-[#1a5c5e]',
  decoration: 'from-[#3d2e1e] to-[#5c4a30]',
  stage: 'from-[#1e2d3d] to-[#304a60]',
  dining: 'from-[#2d1e3d] to-[#4a305c]',
  events: 'from-[#1e3d2d] to-[#305c4a]',
};

export default function GallerySection() {
  const t = useTranslations('gallery');
  const [active, setActive] = useState<Tab>('all');

  const filtered =
    active === 'all' ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#FAF7F2] hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle badge={t('badge')} title={t('title')} className="mb-12" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-300 rounded-full cursor-pointer ${
                active === tab
                  ? 'bg-[#C9A86A] text-white'
                  : 'bg-white text-[#8A8178] hover:text-[#171717]'
              }`}
            >
              {t(`tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-sm break-inside-avoid mb-4 ${
                  item.height === 'tall' ? 'h-72' : 'h-48'
                } bg-gradient-to-br ${categoryColors[item.category] ?? 'from-[#0F3D3E] to-[#1a5c5e]'}`}
              >
                <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs tracking-widest uppercase">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
