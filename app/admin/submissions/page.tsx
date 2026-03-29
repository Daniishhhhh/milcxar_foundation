import { getVolunteers, getContacts } from '@/lib/supabase/queries';

export default async function AdminSubmissionsPage() {
  const [volunteers, contacts] = await Promise.all([getVolunteers(), getContacts()]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Submissions</h1>
      <p className="text-gray-500 mb-8">View volunteer applications and contact messages</p>

      {/* Volunteers */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🙋 Volunteer Applications ({volunteers.length})</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {volunteers.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No volunteer applications yet.</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {volunteers.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">{v.name}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{v.email}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{v.phone}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">{v.message}</td>
                    <td className="px-6 py-4 text-gray-400 text-xs">{new Date(v.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* Contacts */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">📬 Contact Messages ({contacts.length})</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {contacts.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No contact messages yet.</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {contacts.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm">{c.name}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{c.email}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">{c.message}</td>
                    <td className="px-6 py-4 text-gray-400 text-xs">{new Date(c.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
}
