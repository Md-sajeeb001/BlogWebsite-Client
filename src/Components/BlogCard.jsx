/* eslint-disable react/prop-types */

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { format } from "date-fns";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const {
    _id,
    shortdescription,
    blogUrl,
    // email,
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
    blogEmail: user?.email,
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
      <div className="card-body  w-full lg:h-[300px] md:h-[350px] ">
        <p className="text-xl font-extrabold">{title}</p>
        <h2 className="card-title">{format(new Date(deadline), "PPP")}</h2>
        <p className="overflow-y-scroll">{shortdescription}</p>
        <div className="flex items-center gap-4">
          <Link to={`/blogDetails/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-blue-500 hover:bg-blue-800 text-white"
            >
              Details
            </motion.button>
          </Link>
          {user ? (
            <Link onClick={handelWishList}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-blue-500 hover:bg-blue-800 text-white"
              >
                Wishlist
              </motion.button>
            </Link>
          ) : (
            <Link to="/signIn">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-blue-500 hover:bg-blue-800 text-white"
              >
                Wishlist
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
