import { useEffect, useState } from "react";
import apiFetch from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const data = await apiFetch("/posts");
  //         setPosts(data);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchPosts();
  //   }, []);

  //   if (loading) return <p>Loading posts...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
