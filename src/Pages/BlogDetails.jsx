import axios from "axios";
// import { format } from "date-fns";
// import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [blog, setBlogs] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/blog/${id}`
        );
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBlogs();
  }, [id]);

  const {
    // deadline,
    authorUrl,
    author,
    category,
    title,
    email,
    blogUrl,
    longDescription,
    shortdescription,
  } = blog || {};

  return (
    <div className="hero min-h-screen ">
      <div className="flex justify-start gap-10 flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={blogUrl} className="w-full rounded-lg" />
          <form>
            <div className="w-full border-2 border-blue-500 outline-none  p-2 rounded-md focus:border-blue-500 focus:outline-none mt-8">
              <textarea className="w-full px-5 py-4 outline-none " placeholder="comment here" cols="80" rows="7"></textarea>
            </div>
            <button className="btn bg-blue-500 hover:bg-blue-800 text-white mt-4">
              Comment
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <div className="w-full">
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="pt-4 flex items-center justify-between">
              <div className="w-14 h-14 gap-4">
                <img className="w-full h-full rounded-full" src={authorUrl} alt="" />
                {/* <span>{format(new Date(deadline), "P")}</span> */}
                <p className="text-xs pb-4">{email}</p>
              </div>
              <div className="">
                <p>Authore: {author}</p>
                <p>Category: {category}</p>
              </div>
            </div>
            <div>
              <p className="mt-6 text-xs">{shortdescription}</p>
              <p className="pt-6">{longDescription}</p>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
