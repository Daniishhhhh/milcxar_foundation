import { getBlogPosts } from '@/lib/supabase/queries';
import { sampleBlogPosts } from '@/lib/sample-data';
import { BlogPost } from '@/types/database';

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <span className="text-5xl">📝</span>
      </div>
      <div className="p-6">
        <p className="text-gray-400 text-xs mb-2">
          {new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <h3 className="font-bold text-gray-900 text-xl mb-3">{post.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.content}</p>
      </div>
    </div>
  );
}

export default async function BlogPage() {
  const dbPosts = await getBlogPosts();
  const posts = dbPosts.length > 0 ? dbPosts : sampleBlogPosts;
  const isUsingSampleData = dbPosts.length === 0;

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-blue-200 text-xl">Stories, updates, and insights from our work</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isUsingSampleData && (
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-sm text-center">
              📌 Showing sample blog posts. Connect to Supabase to display real data.
            </div>
          )}
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No blog posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
