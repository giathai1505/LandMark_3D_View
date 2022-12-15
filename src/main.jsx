import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import BaDView from "./pages/3DView";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import HomePage from "./pages/Home";
import Images from "./pages/Images";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "3dview",
    element: <BaDView />,
  },
  {
    path: "detail",
    element: <Details />,
  },
  {
    path: "images",
    element: <Images />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
