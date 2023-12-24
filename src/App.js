import "./App.css";
import { useState } from "react";
import { Posts } from "./components/posts/Posts.js";
import { Admin } from "./components/Admin.js";
import { NavBar } from "./components/shared/NavBar.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
