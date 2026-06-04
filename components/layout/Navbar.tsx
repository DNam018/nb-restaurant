'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const navLinks = ['home', 'services', 'events', 'gallery', 'contact'] as const;
const sectionIds: Record<typeof navLinks[number], string> = {
  home: 'hero',
  services: 'services',
  events: 'events',
  gallery: 'gallery',
  contact: 'contact',
};

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="flex flex-col cursor-pointer">
              <span
                className={`font-serif text-lg leading-none transition-colors ${
                  scrolled ? 'text-emerald-deep' : 'text-white'
                }`}
              >
                Ngọc Bích
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase mt-0.5 text-gold">
                Wedding & Event
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(sectionIds[key])}
                  className={`relative cursor-pointer text-xs tracking-widest uppercase font-medium transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? 'text-muted hover:text-soft-black'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {t(key)}
                </button>
              ))}
              <LanguageSwitcher light={!scrolled} />
              <Button
                variant={scrolled ? 'primary' : 'outline'}
                size="sm"
                onClick={() => scrollTo('contact')}
              >
                {t('book')}
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 cursor-pointer"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={22} className={scrolled ? 'text-soft-black' : 'text-white'} />
              ) : (
                <Menu size={22} className={scrolled ? 'text-soft-black' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col pt-24 px-8 pb-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(sectionIds[key])}
                  className="text-left text-sm tracking-widest uppercase font-medium text-muted hover:text-soft-black transition-colors cursor-pointer"
                >
                  {t(key)}
                </button>
              ))}
              <LanguageSwitcher />
              <Button
                variant="primary"
                size="md"
                className="w-full mt-4"
                onClick={() => scrollTo('contact')}
              >
                {t('book')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
