import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-2xl mb-2">Mil Cxar Foundation</h3>
            <p className="text-blue-300 text-sm mb-4">Faith • Service • Hope</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              We serve vulnerable communities through education, healthcare, disaster response, environmental action, and livelihood programs that build dignity and long-term resilience.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <p>Email: contact@milcxarfoundation.org</p>
              <p>Phone: +91 79 4100 2145</p>
              <p>Address: Ahmedabad, Gujarat, India</p>
            </div>
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
                  <Link href={link.href} className="hover:text-blue-300 transition-colors">
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
                <Link href="/volunteer" className="hover:text-blue-300 transition-colors">Volunteer</Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-blue-300 transition-colors">Donate</Link>
              </li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-3">Focus Areas</h4>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>Education</li>
              <li>Health</li>
              <li>Environment</li>
              <li>Disaster Relief</li>
              <li>Skill Development</li>
              <li>Poverty Alleviation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mil Cxar Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
