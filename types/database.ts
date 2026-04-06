export interface Volunteer {
  id: string;
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
