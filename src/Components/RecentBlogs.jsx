import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/recentBlogs`
        );
        setBlogs(data);
      } catch (err) {
        console.log(err);
        if (err) {
          toast.error("An unknown error occurred while loading users");
        }
      }
    };
    fetchAllBlogs();
  }, []);

  console.log(blogs);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-10 underline">
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-8">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
