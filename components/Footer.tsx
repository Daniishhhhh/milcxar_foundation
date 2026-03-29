import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-2">Mil Cxar Foundation</h3>
            <p className="text-blue-400 text-sm mb-4">Faith • Service • Hope</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              A Section 8 NGO dedicated to building a compassionate, inclusive, and sustainable society through education, health, and community development.
            </p>
            <p className="text-gray-500 text-xs mt-4">Registered under Section 8 of Companies Act, India</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/projects', label: 'Our Projects' },
                { href: '/events', label: 'Events' },
                { href: '/blog', label: 'Blog' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/volunteer" className="hover:text-blue-400 transition-colors">Volunteer With Us</Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-blue-400 transition-colors">Donate</Link>
              </li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-3">Focus Areas</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>Education</li>
              <li>Health</li>
              <li>Disaster Management</li>
              <li>Skill Development</li>
              <li>Environment</li>
              <li>Poverty Alleviation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mil Cxar Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
