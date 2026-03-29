'use client';

import { motion } from 'framer-motion';

const focusAreas = [
  { icon: '📚', title: 'Education', description: 'Providing quality education and learning resources to underprivileged children and adults.' },
  { icon: '🏥', title: 'Health', description: 'Free medical camps, health awareness, and access to healthcare for underserved communities.' },
  { icon: '🚨', title: 'Disaster Management', description: 'Rapid response and rehabilitation support during natural and man-made disasters.' },
  { icon: '🔧', title: 'Skill Development', description: 'Vocational training and capacity building to enable self-reliance and employment.' },
  { icon: '🌱', title: 'Environment', description: 'Tree plantation drives, waste management awareness, and sustainable green initiatives.' },
  { icon: '🤝', title: 'Poverty Alleviation', description: 'Food distribution, livelihood support, and programs that address root causes of poverty.' },
];

export default function FocusAreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We work across six key areas to create lasting, meaningful change in communities across India.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
