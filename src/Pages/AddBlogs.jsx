// import Select from "react-select";
// import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddBlogs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = UseAuth();
  const navigate = useNavigate();

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

    const addBlog = {
      email,
      title,
      category,
      shortdescription,
      longDescription,
      blogUrl,
      author,
      authorUrl,
      deadline: startDate,
    };
    console.log(addBlog);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/blogs`,
        addBlog
      );
      if (data) {
        toast.success("Blog Added Successfully!");
      }
      navigate("/");
    } catch (err) {
      if (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto border border-slate-100 ">
      <h2 className="text-center font-bold text-5xl pt-4">Add A Blog.</h2>
      <form onSubmit={handelSubmit} className="card-body">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            defaultValue={user?.email}
            readOnly={true}
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              defaultValue={user?.displayName}
              name="author"
              type="text"
              placeholder="author"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Author Image Url</span>
            </label>
            <input
              defaultValue={user?.photoURL}
              name="authorUrl"
              type="url"
              placeholder="author img url"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              className="input input-bordered w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">title</span>
            </label>
            <input
              name="title"
              type="title"
              placeholder="title"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <select
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
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Blog image Url</span>
            </label>
            <input
              name="blogUrl"
              type="url"
              placeholder="Url"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">short description</span>
            </label>
            <textarea
              name="shortdescription"
              type="description"
              placeholder="category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">long description</span>
            </label>
            <textarea
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
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
