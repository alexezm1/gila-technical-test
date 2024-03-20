import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Post } from "../types";
import PostItem from "./PostItem";
import Spinner from "./Spinner";

function DataFetcher() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch Data from jsonplaceholder API
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch data");
      }
    }
    fetchData();
  }, []); // Fetch data once so we leave dependency array empty

  // Show loading spinner after posts state has been updated with the
  // fetched data
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {posts.map((post: Post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
export default DataFetcher;
