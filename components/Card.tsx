'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)' } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-blue-100/70 bg-white/95 shadow-sm backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}
