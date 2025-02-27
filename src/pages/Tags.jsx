import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Tags() {
  const { data: tags, loading: tagsLoading, error: tagsError } = useFetch("/tags");
  const [selectedTag, setSelectedTag] = useState(null);
  const { data: posts, loading: postsLoading, error: postsError } = useFetch(
    selectedTag ? `/tags/${selectedTag.id}` : null
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tags</h1>

      {tagsLoading && <p>Loading tags...</p>}
      {tagsError && <p className="text-red-500">{tagsError}</p>}

      <div className="flex flex-wrap gap-2 mb-6">
        {tags?.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-lg ${
              selectedTag?.id === tag.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tag.name} ({tag.count})
          </button>
        ))}
      </div>

      {selectedTag && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Posts tagged "{selectedTag.name}"</h2>

          {postsLoading && <p>Loading posts...</p>}
          {postsError && <p className="text-red-500">{postsError}</p>}

          {posts?.posts.length > 0 ? (
            <ul className="space-y-4">
              {posts.posts.map((post) => (
                <li key={post.id} className="border p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts found for this tag.</p>
          )}
        </div>
      )}
    </div>
  );
}
