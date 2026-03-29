import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey && supabaseUrl !== 'your_supabase_url') {
      const { createClient } = await import('@/lib/supabase/server');
      const supabase = await createClient();
      const { error } = await supabase.from('volunteers').insert([{ name, email, phone, message }]);
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
