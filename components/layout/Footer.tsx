'use client';
import { useTranslations } from 'next-intl';
import { Globe, Link } from 'lucide-react';

const navLinks = ['services', 'events', 'gallery', 'contact'] as const;
const sectionIds: Record<typeof navLinks[number], string> = {
  services: 'services',
  events: 'events',
  gallery: 'gallery',
  contact: 'contact',
};

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="bg-emerald-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl mb-1">Ngọc Bích</div>
            <div className="text-gold text-xs tracking-widest uppercase mb-4">
              Wedding & Event
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs tracking-widest uppercase text-gold mb-5">{t('links')}</div>
            <div className="flex flex-col gap-3">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(sectionIds[key])}
                  className="text-sm text-white/60 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {nav(key)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-widest uppercase text-gold mb-5">{t('contact')}</div>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Hotline</div>
                <div>0392 999 839 <span className="text-white/40">(Bích)</span></div>
                <div>0916 788 479 <span className="text-white/40">(Anh Thông)</span></div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Địa chỉ</div>
                <div className="leading-relaxed mb-1">
                  <span className="text-white/40 text-xs">CS1 —</span> Thôn An Hòa, phường Đồng Phú, Thành phố Đồng Nai
                </div>
                <div className="leading-relaxed">
                  <span className="text-white/40 text-xs">CS2 —</span> Tổ 50, khu phố Bàu Ké, Đồng Phú, Thành phố Đồng Nai
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a href="#" aria-label="Website" className="hover:text-white transition-colors">
                  <Globe size={16} />
                </a>
                <a href="#" aria-label="Social" className="hover:text-white transition-colors">
                  <Link size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/30">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
