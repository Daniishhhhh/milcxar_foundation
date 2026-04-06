'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function CtaBannerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-emerald-600 px-6 py-10 sm:px-10 sm:py-12 text-white shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="uppercase text-xs tracking-widest text-blue-100">Take Action Today</p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold">Help us reach more families with dignity and care.</h3>
              <p className="mt-3 text-blue-100 max-w-2xl">Your contribution, time, or partnership can directly support life-changing programs in education, healthcare, and livelihoods.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/donate" variant="secondary" className="!bg-white !text-blue-900 hover:!bg-blue-50">Support a Cause</Button>
              <Button href="/volunteer" variant="outline" className="!border-white !text-white hover:!bg-white/10">Join Us</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
