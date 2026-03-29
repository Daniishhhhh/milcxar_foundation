export default function GalleryPage() {
  const placeholders = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    emoji: ['🏫', '🏥', '🌳', '🤝', '📚', '🚑', '🌱', '👥', '🎓'][i],
    label: ['Education Camp', 'Health Camp', 'Tree Plantation', 'Community Meet', 'Book Distribution', 'Medical Aid', 'Green Drive', 'Team Volunteer', 'Graduation Day'][i],
  }));

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-blue-200 text-xl">Moments that matter</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-sm text-center">
            📸 Gallery images will be displayed here once connected to Supabase Storage.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {placeholders.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl aspect-square flex flex-col items-center justify-center hover:from-blue-700 hover:to-blue-900 transition-all cursor-pointer"
              >
                <span className="text-5xl mb-3">{item.emoji}</span>
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
