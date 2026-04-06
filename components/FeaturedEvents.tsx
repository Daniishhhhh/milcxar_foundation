'use client';

import { motion } from 'framer-motion';
import { Event } from '@/types/database';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface FeaturedEventsProps {
  events: Event[];
}

export default function FeaturedEvents({ events }: FeaturedEventsProps) {
  if (events.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Join us on the ground and contribute to meaningful action.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card hover className="h-full p-6">
                <p className="text-blue-700 text-sm font-semibold mb-2">
                  📅 {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <h3 className="font-bold text-slate-900 text-xl mb-3">{event.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{event.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/events" variant="outline">View All Events</Button>
        </div>
      </div>
    </section>
  );
}
