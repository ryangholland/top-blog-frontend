import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Archive() {
  const { data: posts, loading, error } = useFetch("/posts");

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!posts || posts.length === 0)
    return <p className="text-center mt-10">No posts found.</p>;

  // Sort posts by date in descending order
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Group posts by month and year
  const groupedPosts = sortedPosts.reduce((acc, post) => {
    const date = new Date(post.createdAt);
    const monthYear = date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    if (!acc[monthYear]) acc[monthYear] = [];
    acc[monthYear].push(post);

    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold mb-6">Archive</h1>

      {Object.entries(groupedPosts).map(([monthYear, posts]) => (
        <div key={monthYear} className="mb-8">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">
            {monthYear}
          </h2>
          <ul className="space-y-3">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  to={`/post/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
                <span className="text-gray-500 text-sm ml-2">
                  ({new Date(post.createdAt).toLocaleDateString()})
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
