import { useForm } from "react-hook-form";
import { AuthContext } from "./providers/Auth-provider.js";
import { useContext } from "react";

export function SignIn() {
  const { signIn } = useContext(AuthContext);

  function handleSignIn(formData) {
    signIn({
      userName: formData.userName,
      password: formData.password,
    });
  }
  return (
    <>
      <SignInForm onSubmit={handleSignIn} />
    </>
  );
}

export function SignInForm({ onSubmit }) {
  const { register, handleSubmit, formState } = useForm();
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} method="get">
        <label htmlFor="signIn-name">Name:</label>
        <input id="signIn-name" type="text" {...register("userName")}></input>
        <label htmlFor="signIn-password">Password:</label>
        <input
          id="signIn-password"
          type="password"
          {...register("password")}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
