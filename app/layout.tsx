import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mil Cxar Foundation – Faith • Service • Hope',
  description: 'A Section 8 NGO dedicated to education, health, disaster management, skill development, environment, and poverty alleviation in India.',
  keywords: 'NGO, India, education, health, charity, donation, volunteer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
