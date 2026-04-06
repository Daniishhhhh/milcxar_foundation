'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/database';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Initiatives</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Programs designed to create lasting social impact across communities.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card hover className="h-full overflow-hidden">
                <div className="h-44 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white text-5xl">🌍</div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/projects">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
