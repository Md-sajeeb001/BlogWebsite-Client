import axios from "axios";
import DatePicker from "react-datepicker";
// import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateBlog = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/blog/${id}`
        );
        setBlog(data);
        setStartDate(new Date(data.deadline));
        // navigate("/");
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchBlog();
  }, [id]);

  const {
    email,
    title,
    category,
    shortdescription,
    longDescription,
    blogUrl,
    author,
    authorUrl,
    // _id,
    // deadline: startDate,
  } = blog || {};

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const title = form.title.value;
    const category = form.category.value;
    const shortdescription = form.shortdescription.value;
    const longDescription = form.longDescription.value;
    const blogUrl = form.blogUrl.value;
    const author = form.author.value;
    const authorUrl = form.authorUrl.value;
    const deadline = startDate;

    const updateBlog = {
      email,
      title,
      category,
      shortdescription,
      longDescription,
      blogUrl,
      author,
      authorUrl,
      deadline,
    };

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update/${id}`,
        updateBlog
      );
      if (data) {
        toast.success("Blog Updated Successfully!");
      }
      form.reset();
      navigate("/");
    } catch (err) {
      if (err) {
        toast.error("An unknown error occurred while loading users");
      }
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto border border-slate-100 mt-16 mb-6">
      <h2 className="text-center font-bold text-5xl pt-4">Update A Blog.</h2>
      <form onSubmit={handelSubmit} className="card-body">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            defaultValue={email}
            readOnly={true}
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="sm:w-full sm:flex sm:justify-between sm:items-center gap-5">
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              defaultValue={author}
              name="author"
              type="text"
              placeholder="author"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Author Image Url</span>
            </label>
            <input
              defaultValue={authorUrl}
              name="authorUrl"
              type="url"
              placeholder="author img url"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="sm:w-full sm:flex sm:justify-between sm:items-center gap-5">
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              className="input input-bordered w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">title</span>
            </label>
            <input
              defaultValue={title}
              name="title"
              type="title"
              placeholder="title"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="sm:w-full sm:flex sm:justify-between sm:items-center gap-5">
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <select
              name="category"
              className="input input-bordered"
              defaultValue={category}
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
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Blog image Url</span>
            </label>
            <input
              defaultValue={blogUrl}
              name="blogUrl"
              type="url"
              placeholder="Url"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="sm:w-full sm:flex sm:justify-between sm:items-center gap-5">
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">short description</span>
            </label>
            <textarea
              defaultValue={shortdescription}
              name="shortdescription"
              type="description"
              placeholder="category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control sm:w-1/2 w-full">
            <label className="label">
              <span className="label-text">long description</span>
            </label>
            <textarea
              defaultValue={longDescription}
              name="longDescription"
              type="description"
              placeholder="long description"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-blue-600 text-white hover:bg-blue-700">
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
