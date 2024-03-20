/**
 * PostItem component renders a single post card.
 * It accepts a post object as props containing title and body.
 * Utilizes Card component for styling.
 */
import type { Post } from "../types";
import Card from "./Card";

// Define type for PostItem Component Props accepting a Post type
type PostProps = {
  post: Post;
};

function PostItem({ post }: PostProps) {
  // Destructure post object to access title and body
  const { title, body } = post;

  // Render a card with post title and body
  return (
    <Card>
      {/* Render post title */}
      <div className="text-md font-bold uppercase">{title}</div>
      {/* Render post body */}
      <div className="text-md mt-1">{body}</div>
    </Card>
  );
}

export default PostItem;
