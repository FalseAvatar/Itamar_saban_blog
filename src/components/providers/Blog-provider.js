import { useState, createContext, useEffect } from "react";

export const BlogContext = createContext(null);

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (post) => {
    const postWithId = { ...post, id: postId };
    setPosts([...posts, postWithId]);
    setPostId(postId + 1);

    localStorage.setItem("posts", JSON.stringify(post));
  };

  const value = { posts, addPost };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
