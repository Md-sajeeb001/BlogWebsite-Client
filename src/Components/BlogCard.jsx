/* eslint-disable react/prop-types */

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { format } from "date-fns";

const BlogCard = ({ blog }) => {
  const {
    _id,
    shortdescription,
    blogUrl,
    email,
    title,
    deadline,
    category,
    authorUrl,
    author,
    longDescription,
  } = blog || {};

  const { user } = UseAuth();

  const newWishlist = {
    blogId: _id,
    shortdes: shortdescription,
    blogURL: blogUrl,
    blogTitle: title,
    blogDeadline: deadline,
    blogEmail: email,
    blogCategory: category,
    blogAuthor: author,
    blogAuthorUrl: authorUrl,
    blogLongDsc: longDescription,
  };

  const handelWishList = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/wishlist`,
        newWishlist
      );
      // check the user can't edit or update her/his won blog!
      if (data) {
        toast.success("Blog Added In Your Wishlist");
      }
    } catch (err) {
      if (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="card card-compact bg-base-100 shadow-sm">
      <figure className="w-full h-[300px]">
        <img className="w-full h-full object-cover" src={blogUrl} />
      </figure>
      <div className="card-body">
        <p className="text-xl font-extrabold">{title}</p>
        <h2 className="card-title">{format(new Date(deadline), "PPP")}</h2>
        <p>{shortdescription}</p>
        <div className="flex items-center gap-4">
          <Link to={`/blogDetails/${_id}`}>
            <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
              Details
            </button>
          </Link>
          {user ? (
            <Link onClick={handelWishList}>
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                Wishlist
              </button>
            </Link>
          ) : (
            <Link to="/signIn">
              <button className="btn bg-blue-500 hover:bg-blue-800 text-white">
                Wishlist
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
