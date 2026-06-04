import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Cormorant_Garamond, Be_Vietnam_Pro } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isVi = locale === 'vi';
  return {
    title: isVi
      ? 'Ngọc Bích Wedding & Event | Dịch vụ tiệc cưới và sự kiện'
      : 'Ngoc Bich Wedding & Event | Wedding and Event Venue',
    description: isVi
      ? 'Ngọc Bích cung cấp không gian và dịch vụ tổ chức tiệc cưới, lễ đính hôn, sinh nhật, tiệc gia đình và sự kiện công ty.'
      : 'Ngoc Bich provides wedding, engagement, family celebration and corporate event services in an elegant and professional setting.',
    openGraph: {
      type: 'website',
      locale: isVi ? 'vi_VN' : 'en_US',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'vi' | 'en')) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${cormorant.variable} ${beVietnam.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
