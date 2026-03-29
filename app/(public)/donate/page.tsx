'use client';

import { motion } from 'framer-motion';

const donationTiers = [
  { amount: '₹500', label: 'Supporter', description: 'Provide school supplies for one child for a month.' },
  { amount: '₹2,000', label: 'Champion', description: 'Fund a health camp visit for a family of four.' },
  { amount: '₹5,000', label: 'Patron', description: 'Support vocational training for one youth.' },
  { amount: 'Custom', label: 'Generous Donor', description: 'Any amount makes a difference.' },
];

export default function DonatePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-orange-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">
            Support Our Mission
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-orange-100 text-xl">
            Your generosity transforms lives
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center mb-12">
            <p className="text-orange-700 font-semibold text-lg">🚧 Online Payment Integration Coming Soon</p>
            <p className="text-orange-600 text-sm mt-2">We are working on integrating secure online payments. In the meantime, you can donate via bank transfer.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Donation Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {donationTiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-orange-400 transition-colors"
              >
                <div className="text-3xl font-bold text-orange-500 mb-1">{tier.amount}</div>
                <div className="font-semibold text-gray-900 mb-2">{tier.label}</div>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Bank Transfer Details</h3>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Account Name', value: 'Mil Cxar Foundation' },
                { label: 'Account Number', value: 'XXXX XXXX XXXX (To be updated)' },
                { label: 'IFSC Code', value: 'XXXXXXXXX (To be updated)' },
                { label: 'Bank Name', value: 'Bank Name (To be updated)' },
                { label: 'Branch', value: 'Branch (To be updated)' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">{item.label}</span>
                  <span className="text-gray-600">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              * Please email info@milcxarfoundation.org with your transaction details after donation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
