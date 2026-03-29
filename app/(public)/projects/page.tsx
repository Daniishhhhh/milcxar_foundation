import { getProjects } from '@/lib/supabase/queries';
import { sampleProjects } from '@/lib/sample-data';
import { Project } from '@/types/database';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <span className="text-6xl">🏗️</span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-xl mb-3">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
        <p className="text-gray-400 text-xs mt-4">
          {new Date(project.created_at).toLocaleDateString('en-IN')}
        </p>
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  const dbProjects = await getProjects();
  const projects = dbProjects.length > 0 ? dbProjects : sampleProjects;
  const isUsingSampleData = dbProjects.length === 0;

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-blue-200 text-xl">Transforming communities through purposeful action</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isUsingSampleData && (
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-sm text-center">
              📌 Showing sample projects. Connect to Supabase to display real data.
            </div>
          )}
          {projects.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
