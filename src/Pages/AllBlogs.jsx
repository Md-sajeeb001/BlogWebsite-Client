import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import toast from "react-hot-toast";
import LazyLoad from "react-lazyload";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/blogs?filter=${filter}&search=${search}`
        );
        setBlogs(data);
      } catch (err) {
        if (err) {
          toast.error("An unknown error occurred while loading users");
        }
      }
    };
    fetchAllBlogs();
  }, [filter, search]);

  return (
    <div className="pt-12">
      <div className="w-full">
        <div className="w-full flex-col-reverse sm:flex sm:justify-between gap-5">
          <div className="sm:w-1/2 w-40">
            <label className="label">
              <span className="label-text">Filter By Category</span>
            </label>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              name="category"
              className="px-6 input input-bordered py-2 p-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300"
              defaultValue="select your category"
            >
              <option>Mountain Biking</option>
              <option>Sustainable Cycling</option>
              <option>Cycling Inspiration</option>
              <option>Cycling Technology</option>
              <option>Family & Kids Cycling</option>
              <option>Adventure Cycling</option>
              <option>Cycling Events & Races</option>
              <option>Cycling for Fitness</option>
              <option>City Cycling</option>
              <option>Bicycle Maintenance & Repair</option>
              <option>Road Cycling</option>
            </select>
          </div>

          <div className="sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Search</span>
            </label>
            <div className="w-full  border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  className="grow"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 md:gap-10 gap-5 pt-8">
        {blogs?.map((blog) => (
          <LazyLoad key={blog._id} height={200} once debounce={500}>
            <BlogCard blog={blog}></BlogCard>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
