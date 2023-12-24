import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Admin } from "./components/Admin.js";
import { Posts } from "./components/posts/Posts.js";
import { Post } from "./components/posts/Post.js";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import { SignIn } from "./components/SignIn.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvidor } from "./components/providers/Auth-provider.js";
import { BlogProvider } from "./components/providers/Blog-provider.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Posts",
        element: <Posts />,
      },
      {
        path: "/Post/:id",
        element: <Post />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvidor>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </AuthProvidor>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
