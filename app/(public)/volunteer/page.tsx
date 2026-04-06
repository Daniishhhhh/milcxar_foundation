'use client';

import { ChangeEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import FormInput from '@/components/FormInput';
import { FIELD_OF_INTEREST_OPTIONS, QUALIFICATION_OPTIONS } from '@/lib/volunteer-options';

interface FormData {
  name: string;
  email: string;
  phone: string;
  field_of_interest: string;
  qualifications: string[];
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  field_of_interest?: string;
  qualifications?: string;
  street_address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  message?: string;
}

export default function VolunteerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    field_of_interest: '',
    qualifications: [],
    street_address: '',
    city: '',
    state: '',
    postal_code: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/[\s\-().]/g, ''))) newErrors.phone = 'Invalid phone number (10–15 digits required)';
    if (!formData.field_of_interest) newErrors.field_of_interest = 'Please select an area of interest';
    if (formData.qualifications.length === 0) newErrors.qualifications = 'Please select at least one qualification';
    if (!formData.street_address.trim()) newErrors.street_address = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.postal_code.trim()) newErrors.postal_code = 'Postal code is required';
    else if (!/^[a-zA-Z0-9 -]{4,10}$/.test(formData.postal_code.trim())) newErrors.postal_code = 'Enter a valid postal code';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setFeedbackMessage('');
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.error || 'We could not submit your application.');
      setStatus('success');
      setFeedbackMessage(payload?.message || 'Thank you for signing up. Our team will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        field_of_interest: '',
        qualifications: [],
        street_address: '',
        city: '',
        state: '',
        postal_code: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      setStatus('error');
      setFeedbackMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  function toggleQualification(value: string) {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.includes(value)
        ? prev.qualifications.filter((item) => item !== value)
        : [...prev.qualifications, value],
    }));
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-bold mb-4">
            Volunteer With Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto">
            Join our movement of changemakers and help transform lives through service.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign Up to Volunteer</h2>
            <p className="text-gray-500 mb-8 text-sm">Complete the form and we will connect you with relevant opportunities.</p>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ✅ {feedbackMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                ❌ {feedbackMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput
                  label="Full Name *"
                  type="text"
                  value={formData.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                  placeholder="Your full name"
                />
                <FormInput
                  label="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput
                  label="Phone Number *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                  placeholder="+91 98765 43210"
                />
                <div className="flex flex-col gap-1">
                  <label htmlFor="field_of_interest" className="text-sm font-medium text-gray-700">Field of Interest *</label>
                  <select
                    id="field_of_interest"
                    value={formData.field_of_interest}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, field_of_interest: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.field_of_interest ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select an option</option>
                    {FIELD_OF_INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.field_of_interest && <p className="text-red-500 text-xs">{errors.field_of_interest}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Qualification *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {QUALIFICATION_OPTIONS.map((option) => (
                    <label key={option} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={formData.qualifications.includes(option)}
                        onChange={() => toggleQualification(option)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.qualifications && <p className="text-red-500 text-xs">{errors.qualifications}</p>}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <FormInput
                  label="Street Address *"
                  type="text"
                  value={formData.street_address}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, street_address: e.target.value })}
                  error={errors.street_address}
                  placeholder="House number, street name"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <FormInput
                    label="City *"
                    type="text"
                    value={formData.city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, city: e.target.value })}
                    error={errors.city}
                  />
                  <FormInput
                    label="State *"
                    type="text"
                    value={formData.state}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, state: e.target.value })}
                    error={errors.state}
                  />
                  <FormInput
                    label="Postal Code *"
                    type="text"
                    value={formData.postal_code}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, postal_code: e.target.value })}
                    error={errors.postal_code}
                    placeholder="380001"
                  />
                </div>
              </div>

              <FormInput
                label="Why do you want to volunteer? *"
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
                placeholder="Tell us about your skills and motivation..."
                textarea
              />

              <Button type="submit" disabled={status === 'loading'} fullWidth className="py-3">
                {status === 'loading' ? 'Submitting your application...' : 'Submit Application'}
              </Button>
            </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
