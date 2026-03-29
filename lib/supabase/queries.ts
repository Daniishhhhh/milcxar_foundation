import { Event, Project, BlogPost, Volunteer, Contact } from '@/types/database';

function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_url'
  );
}

export async function getEvents(): Promise<Event[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const { createClient } = await import('./server');
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });
    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const { createClient } = await import('./server');
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const { createClient } = await import('./server');
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

export async function getVolunteers(): Promise<Volunteer[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const { createClient } = await import('./server');
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('volunteers')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}

export async function getContacts(): Promise<Contact[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const { createClient } = await import('./server');
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return [];
    return data || [];
  } catch {
    return [];
  }
}
