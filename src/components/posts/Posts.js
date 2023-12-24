import { useContext } from "react";
import { PostList } from "./PostList";
import { BlogContext } from "../providers/Blog-provider";
import { PostThumbnail } from "../posts/PostThumbnail.js";

export function Posts() {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      <p>Number of posts: {posts.length}</p>
      <PostList>
        {posts.map((post) => (
          <PostThumbnail singlePost={post} />
        ))}
      </PostList>
    </div>
  );
}
