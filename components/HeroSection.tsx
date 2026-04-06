'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.20),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:38px_38px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-200 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4"
        >
          Faith • Service • Hope
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Serving Communities.
          <span className="block text-blue-200">Restoring Dignity. Building Hope.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
        >
          We empower lives through education, health initiatives, disaster relief, and sustainable development programs across underserved communities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/volunteer" variant="primary" size="lg" className="!bg-white !text-blue-900 hover:!bg-blue-50">
            Join Us
          </Button>
          <Button href="/donate" variant="secondary" size="lg">
            Support a Cause
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
