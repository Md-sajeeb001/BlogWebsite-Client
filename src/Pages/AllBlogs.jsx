import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import toast from "react-hot-toast";

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
        console.log(err);
        if (err) {
          toast.error(err.message);
        }
      }
    };
    fetchAllBlogs();
  }, [filter, search]);

  return (
    <div>
      <div className="flex items-center gap-8 max-w-4xl">
        <div className="w-full flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Filter By Category</span>
            </label>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              name="category"
              className="input input-bordered"
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
        </div>
        <div className="w-full flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="px-1 justify-end md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-8">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
