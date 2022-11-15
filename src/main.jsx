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
import Details from "./pages/Details";
import HomePage from "./pages/Home";

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
    element: <BaDView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
