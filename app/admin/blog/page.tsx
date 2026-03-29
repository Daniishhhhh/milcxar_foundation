import { getBlogPosts } from '@/lib/supabase/queries';

export default async function AdminBlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-500 text-sm mt-1">Create and manage blog posts</p>
        </div>
        <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium">
          + New Post
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-blue-700 text-sm">
        💡 Connect Supabase to enable full CRUD operations.
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <p className="text-3xl mb-3">📝</p>
            <p>No blog posts yet. Create your first post above.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Preview</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Published</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 text-sm">{post.title}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm max-w-xs truncate">{post.content.substring(0, 100)}...</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{new Date(post.created_at).toLocaleDateString('en-IN')}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
