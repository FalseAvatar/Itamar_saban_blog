import { NewPostForm } from "./NewPostForm.js";
import { AuthContext } from "./providers/Auth-provider.js";
import { BlogContext } from "./providers/Blog-provider.js";
import { useContext } from "react";

export function Admin() {
  const { addPost } = useContext(BlogContext);
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>You have to sign in first</p>;
  }

  function handleOnPostSubmit(formData) {
    addPost({
      title: formData.title,
      description: formData.description,
      article: formData.article,
    });
  }

  return (
    <section>
      <NewPostForm onSubmit={handleOnPostSubmit} />
    </section>
  );
}
