'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'vi', label: 'Tiếng Việt', sub: 'Vietnamese', flag: '🇻🇳' },
  { code: 'en', label: 'English', sub: 'Anh', flag: '🇬🇧' },
] as const;

type Props = { className?: string; light?: boolean };

export default function LanguageSwitcher({ className = '', light = false }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  function selectLocale(next: string) {
    setOpen(false);
    if (next === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    startTransition(() => router.push(newPath));
  }

  const current = languages.find((l) => l.code === locale)!;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer select-none ${
          light
            ? 'text-white/80 hover:text-white'
            : 'text-muted hover:text-soft-black'
        }`}
      >
        <Globe size={13} strokeWidth={1.8} />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          size={11}
          strokeWidth={2}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full right-0 mt-3 w-52 bg-white rounded-2xl overflow-hidden z-60"
            style={{ boxShadow: '0 8px 32px rgba(15,61,62,0.14), 0 2px 8px rgba(15,61,62,0.08)' }}
          >
            {/* Panel header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-emerald-deep">
              <Globe size={13} className="text-white/60" strokeWidth={1.8} />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-medium">
                Chọn ngôn ngữ
              </span>
            </div>

            {/* Language options */}
            <div className="p-2">
              {languages.map((lang) => {
                const isActive = lang.code === locale;
                return (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => selectLocale(lang.code)}
                    disabled={isPending}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                      isActive
                        ? 'bg-emerald-deep/8 cursor-default'
                        : 'hover:bg-emerald-deep/5'
                    }`}
                  >
                    {/* Flag */}
                    <span className="text-xl leading-none">{lang.flag}</span>

                    {/* Text */}
                    <div className="flex-1 text-left">
                      <div
                        className={`text-sm font-medium leading-none mb-0.5 ${
                          isActive ? 'text-emerald-deep' : 'text-soft-black'
                        }`}
                      >
                        {lang.label}
                      </div>
                      <div className="text-[11px] text-muted">{lang.sub}</div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="w-5 h-5 rounded-full bg-emerald-deep flex items-center justify-center shrink-0">
                        <Check size={11} className="text-white" strokeWidth={2.5} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer decoration */}
            <div className="mx-4 mb-3 pt-2 border-t border-emerald-deep/10">
              <p className="text-[10px] text-muted/60 text-center tracking-wide">
                Ngọc Bích Wedding & Event
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
