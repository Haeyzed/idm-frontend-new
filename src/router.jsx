import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import Verify from "./pages/Auth/Verify";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/landing/Home";
import OAuthClients from "./pages/Oauth/OAuthClients";
import UserForm from "./pages/Users/UserForm";
import Users from "./pages/users/Users";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/verify", element: <Verify /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/", element: <Dashboard /> },
  { path: "/users", element: <Users /> },
  { path: "/users/create", element: <UserForm /> },
  { path: "/oauth-clients", element: <OAuthClients /> },
]);

export default router;
