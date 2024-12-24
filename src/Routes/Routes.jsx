import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddBlogs from "../Pages/AddBlogs";
import Register from "../Pages/Authentication/Register";
import LogIn from "../Pages/Authentication/SignIn";
import AllJobs from "../Pages/AllBlogs";
import WishList from "../Pages/WishList";
import BlogDetails from "../Pages/BlogDetails";
import PrivetRoute from "../Privet/PrivetRoute";
import UpdateBlog from "../Pages/UpdateBlog";
import FeaturedBlogs from "../Pages/FeaturedBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBlog",
        element: (
          <PrivetRoute>
            <AddBlogs></AddBlogs>
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/allBlogs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRoute>
            <WishList></WishList>
          </PrivetRoute>
        ),
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/featured",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/updateBlog/:id",
        element: (
          <PrivetRoute>
            <UpdateBlog></UpdateBlog>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
