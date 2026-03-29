import { getEvents, getProjects, getBlogPosts, getVolunteers, getContacts } from '@/lib/supabase/queries';

export default async function AdminDashboardPage() {
  const [events, projects, blogPosts, volunteers, contacts] = await Promise.all([
    getEvents(),
    getProjects(),
    getBlogPosts(),
    getVolunteers(),
    getContacts(),
  ]);

  const stats = [
    { label: 'Volunteers', value: volunteers.length, icon: '🙋', color: 'blue' },
    { label: 'Contact Messages', value: contacts.length, icon: '📬', color: 'green' },
    { label: 'Events', value: events.length, icon: '📅', color: 'purple' },
    { label: 'Projects', value: projects.length, icon: '🏗️', color: 'orange' },
    { label: 'Blog Posts', value: blogPosts.length, icon: '📝', color: 'pink' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Overview of your foundation data</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">Recent Volunteer Applications</h3>
          {volunteers.length === 0 ? (
            <p className="text-gray-400 text-sm">No volunteer submissions yet.</p>
          ) : (
            <ul className="space-y-3">
              {volunteers.slice(0, 5).map((v) => (
                <li key={v.id} className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <div>
                    <p className="font-medium text-sm text-gray-800">{v.name}</p>
                    <p className="text-xs text-gray-400">{v.email}</p>
                  </div>
                  <span className="text-xs text-gray-400">{new Date(v.created_at).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">Recent Contact Messages</h3>
          {contacts.length === 0 ? (
            <p className="text-gray-400 text-sm">No contact messages yet.</p>
          ) : (
            <ul className="space-y-3">
              {contacts.slice(0, 5).map((c) => (
                <li key={c.id} className="flex justify-between items-center border-b border-gray-50 pb-2">
                  <div>
                    <p className="font-medium text-sm text-gray-800">{c.name}</p>
                    <p className="text-xs text-gray-400">{c.email}</p>
                  </div>
                  <span className="text-xs text-gray-400">{new Date(c.created_at).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
