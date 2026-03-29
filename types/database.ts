export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}
export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url: string | null;
  created_at: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  created_at: string;
}
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}
