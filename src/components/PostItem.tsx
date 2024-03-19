import type { Post } from "../types";
import Card from "./Card";

// Create type for PostItem Component Props
// that accepts a type Post
type PostProps = {
  post: Post;
};

function PostItem({ post }: PostProps) {
  const { title, body } = post;
  return (
    <Card>
      <div className="text-md font-bold uppercase">{title}</div>
      <div className="text-md mt-1">{body}</div>
    </Card>
  );
}

export default PostItem;
