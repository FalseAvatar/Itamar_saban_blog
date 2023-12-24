import { useForm } from "react-hook-form";

export function NewPostForm({ onSubmit }) {
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="get" className="admin-form">
      <fieldset className="admin-fieldset">
        <legend className="offscreen">Send Us A Message</legend>
        <p className="admin-p">
          <label htmlFor="title" className="admin-label">
            Title:
          </label>
          <input
            id="title"
            className="title"
            type="text"
            {...register("title")}
          />
          <br></br>
          <label htmlFor="description" className="admin-label">
            Description:
          </label>
          <textarea
            className="admin-textarea"
            name="description"
            id="description"
            placeholder="type the article's description here"
            {...register("description")}
            required
          ></textarea>
          <br></br>
          <label htmlFor="article" className="admin-label">
            Article:
          </label>
          <textarea
            className="admin-textarea"
            name="article"
            id="article"
            placeholder="type yor message here"
            {...register("article")}
            required
          ></textarea>
        </p>
      </fieldset>
      <button className="admin-button" type="submit">
        Send
      </button>
    </form>
  );
}
