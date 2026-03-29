import Link from 'next/link';

const adminLinks = [
  { href: '/admin/dashboard', label: '📊 Dashboard' },
  { href: '/admin/events', label: '📅 Events' },
  { href: '/admin/projects', label: '🏗️ Projects' },
  { href: '/admin/blog', label: '📝 Blog' },
  { href: '/admin/submissions', label: '📬 Submissions' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="font-bold text-lg">Mil Cxar Admin</h2>
          <p className="text-gray-400 text-xs mt-1">Foundation Management</p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {adminLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 rounded-lg text-sm hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link href="/" className="text-gray-400 text-xs hover:text-white transition-colors">
            ← Back to Website
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
