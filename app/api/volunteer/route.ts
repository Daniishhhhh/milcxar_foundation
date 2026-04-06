import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      message,
      field_of_interest,
      qualifications,
      street_address,
      city,
      state,
      postal_code,
    } = body;

    if (
      !name ||
      !email ||
      !phone ||
      !message ||
      !field_of_interest ||
      !street_address ||
      !city ||
      !state ||
      !postal_code ||
      !Array.isArray(qualifications) ||
      qualifications.length === 0
    ) {
      return NextResponse.json({ error: 'Please complete all required fields before submitting.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(String(phone).replace(/[\s\-().]/g, ''))) {
      return NextResponse.json({ error: 'Invalid phone number (10–15 digits required)' }, { status: 400 });
    }
    const postalCodeRegex = /^[a-zA-Z0-9 -]{4,10}$/;
    if (!postalCodeRegex.test(String(postal_code).trim())) {
      return NextResponse.json({ error: 'Please enter a valid postal code.' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey && supabaseUrl !== 'your_supabase_url') {
      const { createClient } = await import('@/lib/supabase/server');
      const supabase = await createClient();
      const { error } = await supabase.from('volunteers').insert([{
        name,
        email,
        phone,
        message,
        field_of_interest,
        qualifications,
        street_address,
        city,
        state,
        postal_code,
      }]);
      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, message: 'Volunteer application submitted successfully' });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
