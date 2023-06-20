import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Login from "./components/Login"
import Create from "./components/Signup"
import Profile from "./components/Profile"



const router = createBrowserRouter([
  {
    path: "/createUser",
    element:<Create/>,
  },
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
]);


export default router;
