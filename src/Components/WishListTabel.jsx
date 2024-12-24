import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
import { GoTrash } from "react-icons/go";
/* eslint-disable react/prop-types */
const WishListTabel = ({ wish, setWishlist, wishlist }) => {
  const { _id, blogTitle, blogCategory, blogEmail, blogAuthor , blogId} = wish || {};

  const handelRemove = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/wishlist/${id}`);
      const remainingBlog = wishlist.filter((wish) => wish._id !== id);

      setWishlist(remainingBlog);
      toast.success("Deleted Blog Successfully!");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handelConfirmDelete = (id) => {
    toast((t) => (
      <div className="flex items-center gap-4">
        <div>
          Are You <b>Sure?</b>
        </div>
        <button
          className="bg-red-400 text-white px-3 py-1 rounded-md"
          onClick={() => {
            toast.dismiss(t.id);
            handelRemove(id);
          }}
        >
          Yes
        </button>
        <button
          className="bg-green-400 text-white px-3 py-1 rounded-md"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {blogAuthor}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {blogEmail}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {blogTitle?.substring(0, 28)}.....
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className={`px-3 py-l`}>{blogCategory}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <Link to={`/blogDetails/${blogId}`}>
            <button className="text-lg disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-blue-500 focus:outline-none">
              <BiMessageDetail></BiMessageDetail>
            </button>
          </Link>

          {/* Reject Button */}
          <button
            onClick={() => handelConfirmDelete(_id)}
            className="text-lg disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
          >
            <GoTrash></GoTrash>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WishListTabel;
