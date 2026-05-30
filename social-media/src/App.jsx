import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Feedpage from "./Pages/Feedpage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import Register from "./Pages/Register";
import Notfound from "./Pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Feedpage /> },
      { path: "profile", element: <Profile /> },
      { path: "post", element: <Post /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
