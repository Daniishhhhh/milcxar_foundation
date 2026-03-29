'use client';

import { motion } from 'framer-motion';

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-700"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎯</span>
              <h3 className="text-2xl font-bold text-blue-700">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To serve the marginalized and underserved communities through sustainable programs in education, healthcare, skill development, and disaster relief — guided by faith, compassion, and the spirit of service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-md border-l-4 border-orange-500"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🌟</span>
              <h3 className="text-2xl font-bold text-orange-500">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A compassionate, inclusive, and sustainable society where every individual has access to opportunities, dignity, and hope — where faith drives action and service transforms lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
