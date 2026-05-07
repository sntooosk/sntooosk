import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { fadeUp } from '../animations/variants';

type MetricCardProps = { icon: LucideIcon; label: string; value: string; detail: string };

export function MetricCard({ icon: Icon, label, value, detail }: MetricCardProps) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} className="glass rounded-3xl p-6 shadow-card">
      <Icon className="mb-6 h-6 w-6 text-cyanGlow" />
      <p className="text-sm text-white/55">{label}</p>
      <strong className="mt-2 block font-display text-3xl text-white">{value}</strong>
      <p className="mt-3 text-sm leading-6 text-white/50">{detail}</p>
    </motion.div>
  );
}
