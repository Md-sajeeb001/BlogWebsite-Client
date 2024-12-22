/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, shortdescription, blogUrl, publishDate, author, authorUrl } =
    blog;

  const handelSubmit = async () => {
    // console.log("data submit in db soon
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/wishlist`,
        blog
      );
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-full">
        <img src={blogUrl}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{author}</h2>
        <p>{shortdescription}</p>
        <div className="flex items-center gap-4">
          <Link to={`/blogDetails/${_id}`}>
            <button className="btn">Details </button>
          </Link>
          <Link onClick={handelSubmit}>
            <button className="btn">Wishlist </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
