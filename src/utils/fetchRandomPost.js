const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export default async function fetchRandomPost(navigate) {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/random`);
      if (!response.ok) throw new Error("Failed to fetch");
  
      const { id } = await response.json();
      if (id) {
        navigate(`/post/${id}`);
      } else {
        console.error("No valid post ID received");
      }
    } catch (error) {
      console.error("Error fetching random post:", error);
    }
  }