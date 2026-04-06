'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';

const stats = [
  { value: '12,000+', label: 'People Reached', detail: 'Through health and social welfare drives' },
  { value: '85+', label: 'Projects Delivered', detail: 'Across education, environment, and livelihoods' },
  { value: '300+', label: 'Active Volunteers', detail: 'Serving communities throughout the year' },
  { value: '40+', label: 'Partner Communities', detail: 'In urban and rural geographies' },
];

export default function ImpactStatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Our Impact in Numbers</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Real progress made possible by supporters, volunteers, and community partners.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card hover className="h-full p-6">
                <p className="text-3xl font-extrabold text-blue-700">{item.value}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{item.label}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
