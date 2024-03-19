import { Post } from "../lib/definitions";
import Card from "./Card";

// Create type for PostItem Component Props
// that accepts a type Post
type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  return (
    <Card>
      <div className="text-md font-bold uppercase">{post.title}</div>
      <div className="text-md mt-1">{post.body}</div>
    </Card>
  );
}

export default PostItem;
