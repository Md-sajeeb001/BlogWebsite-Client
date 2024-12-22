import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddBlogs from "../Pages/AddBlogs";
import Register from "../Pages/Authentication/Register";
import LogIn from "../Pages/Authentication/SignIn"
import AllJobs from "../Pages/AllBlogs";
import WishList from "../Pages/WishList";

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
        },
        {
          path: "/allBlogs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/wishlist",
          element: <WishList></WishList>
        },
    ]
  },
]);

export default router;
