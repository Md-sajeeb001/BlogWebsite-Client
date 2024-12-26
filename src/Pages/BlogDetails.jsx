import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { FaLocationArrow } from "react-icons/fa";
import toast from "react-hot-toast";
import Comments from "../Components/Comments";
import { format } from "date-fns";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlogs] = useState(null);
  const { user } = UseAuth();

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
    deadline,
    authorUrl,
    author,
    category,
    title,
    email,
    blogUrl,
    longDescription,
    shortdescription,
    _id,
  } = blog || {};

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const textArea = form.textArea.value;
    const commentInfo = {
      textArea,
      blogId: _id,
      userAuthor: user?.displayName,
      userProfile: user?.photoURL,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/comment`, commentInfo);
      form.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="hero min-h-screen mt-14 mb-8">
      <div className="lg:flex lg:justify-start lg:gap-10 flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 ">
          <img src={blogUrl} className="w-full rounded-md" />
          <div>
            <Comments></Comments>
          </div>
          <form onSubmit={handelSubmit}>
            {user?.email === email ? (
              " "
            ) : (
              <div>
                <div className="w-full border-2 border-blue-500 outline-none p-2 rounded-md focus:border-blue-500 focus:outline-none mt-8">
                  <textarea
                    name="textArea"
                    className="w-full px-5 py-4 outline-none "
                    placeholder="comment here"
                  ></textarea>
                </div>
                <div>
                  {user ? (
                    <button className="btn bg-blue-500 hover:bg-blue-800 text-white mt-4">
                      <FaLocationArrow className="font-bold text-lg"></FaLocationArrow>{" "}
                      Comment
                    </button>
                  ) : (
                    <Link
                      to="/signIn"
                      className="btn bg-blue-500 hover:bg-blue-800 text-white mt-4"
                    >
                      <FaLocationArrow className="font-bold text-lg"></FaLocationArrow>{" "}
                      Comment
                    </Link>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="lg:w-1/2 pt-8 lg:pt-0">
          <div className="w-full">
            <h1 className="sm:text-5xl text-3xl font-bold">{title}</h1>
            <div className="pt-2 flex items-center justify-between">
              <div>
                <div className="w-14 h-14 gap-4">
                  <img
                    className="w-full h-full rounded-full"
                    src={authorUrl}
                    alt=""
                  />
                </div>
                <div>
                  <p> {format(new Date(deadline || "2024-12-12"), "PPP")}</p>
                  <p className="text-xs">{email}</p>
                </div>
              </div>
              <div className="">
                <p className="text-xs font-normal sm:font-bold sm:text-lg">
                  Authore: {author}
                </p>
                <p className="text-xs font-normal sm:font-bold sm:text-lg">
                  Category: {category}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <span className=" text-xs">{shortdescription}</span>
              <p className="pt-6">{longDescription}</p>
            </div>
            {user?.email === email && (
              <Link
                to={`/updateBlog/${_id}`}
                className="btn bg-blue-500 hover:bg-blue-800 text-white mt-4"
              >
                Update
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
