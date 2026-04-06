'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';

const testimonials = [
  {
    name: 'Asha Patel',
    role: 'Community Volunteer',
    quote: 'Volunteering with Mil Cxar Foundation gave me a meaningful way to support families and children in my city.',
  },
  {
    name: 'Rohit Sharma',
    role: 'Health Camp Beneficiary',
    quote: 'The free health camp helped my parents receive timely diagnosis and treatment. It made a huge difference for us.',
  },
  {
    name: 'Sister Maria',
    role: 'Partner Institution Lead',
    quote: 'Their team is reliable, compassionate, and deeply committed to long-term change, not just one-time activities.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-blue-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Voices of Hope</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Stories from people and partners connected to our mission.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card hover className="h-full p-6">
                <p className="text-slate-700 leading-relaxed">“{item.quote}”</p>
                <div className="mt-6 pt-4 border-t border-blue-100">
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
