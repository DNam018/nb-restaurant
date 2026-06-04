import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Ngọc Bích Wedding & Event' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
