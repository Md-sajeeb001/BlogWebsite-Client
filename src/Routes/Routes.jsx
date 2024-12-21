import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddBlogs from "../Pages/AddBlogs";

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
        }
    ]
  },
]);

export default router;
