import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs`
        );
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBlogs();
  }, []);

  console.log(blogs);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
      {blogs?.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
      </div>
    </div>
  );
};

export default AllBlogs;
