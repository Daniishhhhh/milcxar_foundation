import HeroSection from '@/components/HeroSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import FocusAreasSection from '@/components/FocusAreasSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import FeaturedEvents from '@/components/FeaturedEvents';
import { getProjects, getEvents } from '@/lib/supabase/queries';
import { sampleProjects, sampleEvents } from '@/lib/sample-data';

export default async function HomePage() {
  const [dbProjects, dbEvents] = await Promise.all([getProjects(), getEvents()]);
  const projects = dbProjects.length > 0 ? dbProjects : sampleProjects;
  const events = dbEvents.length > 0 ? dbEvents : sampleEvents;

  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <FocusAreasSection />
      <FeaturedProjects projects={projects} />
      <FeaturedEvents events={events} />
    </>
  );
}
