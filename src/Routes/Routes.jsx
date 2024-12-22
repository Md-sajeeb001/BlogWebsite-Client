import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddBlogs from "../Pages/AddBlogs";
import Register from "../Pages/Authentication/Register";
import LogIn from "../Pages/Authentication/SignIn"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/addBlog",
          element: <AddBlogs></AddBlogs>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/signIn",
          element: <LogIn></LogIn>
        }
    ]
  },
]);

export default router;
