/**
 * DataFetcher component fetches posts data from the jsonplaceholder API and renders a list of PostItems.
 * It also displays a loading spinner while fetching the data.
 */
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Post } from "../types";
import PostItem from "./PostItem";
import Spinner from "./Spinner";

function DataFetcher() {
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // State to store fetched posts
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    /**
     * Fetches data from jsonplaceholder API and updates the 'posts' state.
     * Displays an error toast if data fetching fails.
     */
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

  // Memoizes posts to prevent unnecessary re-renders of PostItem components
  const memoizedPosts = useMemo(
    () => posts.map((post: Post) => <PostItem post={post} key={post.id} />),
    [posts]
  );

  /**
   * Renders a loading spinner if 'loading' state is true,
   * otherwise renders the list of memoized posts.
   */
  if (loading) {
    return <Spinner />;
  }

  return <div>{memoizedPosts}</div>;
}

export default DataFetcher;
