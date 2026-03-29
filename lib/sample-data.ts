import { Event, Project, BlogPost } from '@/types/database';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Vidya Daan – Education for All',
    description: 'Providing free educational resources, books, and tutoring to underprivileged children in rural areas, ensuring every child gets an opportunity to learn.',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Arogya Seva – Community Health Camp',
    description: 'Organizing free medical check-up camps, distributing medicines, and raising awareness about preventive healthcare in underserved communities.',
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Kaushal Vikas – Skill Development Program',
    description: 'Empowering youth with vocational training in tailoring, computer skills, and handicrafts to enable self-sufficiency and employment.',
    image_url: null,
    created_at: new Date().toISOString(),
  },
];

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Charity Run 2024',
    description: 'Join us for our annual 5K charity run to raise funds for education initiatives. Open to all ages and fitness levels.',
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Free Health Camp – Ahmedabad',
    description: 'Free medical consultations, blood tests, and health screenings by qualified doctors. All community members welcome.',
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    image_url: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Tree Plantation Drive',
    description: 'Be a part of our green initiative – help us plant 1000 trees across the city and contribute to a healthier environment.',
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    image_url: null,
    created_at: new Date().toISOString(),
  },
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How Education Changes Lives: Stories from the Field',
    content: 'Education is the most powerful tool we can use to change the world. Through our Vidya Daan program, we have witnessed firsthand how access to quality education transforms not just individuals but entire families and communities...',
    image_url: null,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    title: 'Community Health: Prevention is Better Than Cure',
    content: 'Our Arogya Seva health camps have reached over 500 families this year alone. Through regular check-ups, awareness sessions, and free medicine distribution, we are making a tangible difference in community health outcomes...',
    image_url: null,
    created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    title: 'Empowering Youth Through Skill Development',
    content: 'Unemployment among youth is one of the biggest challenges facing India today. Our Kaushal Vikas program addresses this by providing practical, market-relevant skills that help young people build sustainable livelihoods...',
    image_url: null,
    created_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
  },
];
