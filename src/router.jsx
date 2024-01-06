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
import Users from "./pages/Users/Users";
import Unlock from "./pages/Auth/Unlock";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Auth/Profile";

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
  { path: "/unlock", element: <Unlock /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
