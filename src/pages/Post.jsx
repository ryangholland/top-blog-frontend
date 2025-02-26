import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Post() {
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(`/posts/${id}`);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      {/* Post Title */}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">
        By {post.author} on {post.datePosted}
      </p>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag.name}
              className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Post Content */}
      <p className="mt-4">{post.content}</p>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Comments</h2>
        {post.comments.length > 0 ? (
          <ul className="mt-3 space-y-4">
            {post.comments.map((comment) => (
              <li
                key={comment.id}
                className="border border-gray-300 p-3 rounded-md"
              >
                <p className="text-gray-700">{comment.content}</p>
                <p className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
