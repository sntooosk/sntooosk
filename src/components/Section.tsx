import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '../animations/variants';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mb-10 max-w-3xl">
        <span className="mb-3 inline-flex rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyanGlow">
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-8 text-white/62 sm:text-lg">{description}</p>}
      </motion.div>
      {children}
    </section>
  );
}
