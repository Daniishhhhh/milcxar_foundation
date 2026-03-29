import { getEvents } from '@/lib/supabase/queries';
import { sampleEvents } from '@/lib/sample-data';
import { Event } from '@/types/database';

function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date);
  const isPast = eventDate < new Date();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`h-2 ${isPast ? 'bg-gray-400' : 'bg-blue-700'}`} />
      <div className="p-6">
        <div className={`text-sm font-medium mb-3 ${isPast ? 'text-gray-500' : 'text-blue-700'}`}>
          📅 {eventDate.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          {isPast && <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Past Event</span>}
          {!isPast && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Upcoming</span>}
        </div>
        <h3 className="font-bold text-gray-900 text-xl mb-3">{event.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

export default async function EventsPage() {
  const dbEvents = await getEvents();
  const events = dbEvents.length > 0 ? dbEvents : sampleEvents;
  const isUsingSampleData = dbEvents.length === 0;

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-blue-200 text-xl">Join us and be part of the change</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isUsingSampleData && (
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-sm text-center">
              📌 Showing sample events. Connect to Supabase to display real data.
            </div>
          )}
          {events.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No events found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
