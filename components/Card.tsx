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
      whileHover={hover ? { y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' } : {}}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
