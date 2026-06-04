'use client';
import { motion } from 'framer-motion';

type Props = {
  badge?: string;
  title: string;
  className?: string;
  light?: boolean;
};

export default function SectionTitle({ badge, title, className = '', light = false }: Props) {
  return (
    <motion.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {badge && (
        <span className="text-xs tracking-[0.2em] uppercase font-medium mb-3 block text-gold">
          {badge}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight whitespace-pre-line ${
          light ? 'text-white' : 'text-soft-black'
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
