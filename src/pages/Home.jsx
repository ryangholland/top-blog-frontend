import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts/recent");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) return <p>Loading recent posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="border-b pb-4 mb-4">
          <Link to={`/post/${post.id}`}>
            <h2 className="text-xl font-semibold hover:opacity-70">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600 text-sm">
            By <span className="font-medium">{post.author}</span> on{" "}
            {post.datePosted}
          </p>

          <p className="mt-2">{post.excerpt}</p>

          {post.commentCount > 0 && (
            <p className="text-sm text-gray-500 mt-2">💬 {post.commentCount}</p>
          )}

          <div className="mt-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
