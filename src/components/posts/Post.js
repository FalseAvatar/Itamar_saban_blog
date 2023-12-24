import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../providers/Blog-provider";

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === parseInt(id));

    if (foundPost) {
      setPost(foundPost);
    }
  }, [id, posts]);

  return (
    <section>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <aritcle> {post.article} </aritcle>
        </div>
      ) : (
        <div>
          <p>"loading..." </p>
        </div>
      )}
    </section>
  );
}
