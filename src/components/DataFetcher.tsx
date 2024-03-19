import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import Spinner from "./Spinner";

function DataFetcher() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // Fetch Data from jsonplaceholder API
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data once so we leave dependency array empty

  // Show loading spinner after posts state has been updated with the
  // fetched data
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
}
export default DataFetcher;
