'use client';

import { motion } from 'framer-motion';

const focusAreas = [
  { icon: '📚', title: 'Education', description: 'Free books, tutoring, and scholarships for underprivileged children.' },
  { icon: '🏥', title: 'Health', description: 'Free medical camps and health awareness programs.' },
  { icon: '🚨', title: 'Disaster Management', description: 'Rapid response and rehabilitation during disasters.' },
  { icon: '🔧', title: 'Skill Development', description: 'Vocational training for youth employment.' },
  { icon: '🌱', title: 'Environment', description: 'Plantation drives and sustainability programs.' },
  { icon: '🤝', title: 'Poverty Alleviation', description: 'Food, livelihood, and support programs.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            About Mil Cxar Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-200 text-xl"
          >
            Faith • Service • Hope
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Mil Cxar Foundation is a Section 8 Non-Governmental Organization registered in India, committed to creating meaningful and lasting impact in the lives of the marginalized and underserved communities.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded on the principles of Faith, Service, and Hope, our foundation brings together passionate volunteers, donors, and community leaders to address the most pressing social challenges facing our nation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that every individual deserves dignity, opportunity, and hope — and we work tirelessly to make that a reality through our programs in education, healthcare, disaster relief, skill development, environmental conservation, and poverty alleviation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-700"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">🎯 Our Mission</h3>
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
            <h3 className="text-2xl font-bold text-orange-500 mb-4">🌟 Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A compassionate, inclusive, and sustainable society where every individual has access to opportunities, dignity, and hope — where faith drives action and service transforms lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our Focus Areas
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Leadership
          </motion.h2>
          <p className="text-gray-500 mb-10">Meet the dedicated team driving our mission forward.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {['Founder & CEO', 'Director – Programs', 'Director – Operations'].map((role) => (
              <div key={role} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <p className="font-semibold text-gray-900">Team Member</p>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
