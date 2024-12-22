// import Select from "react-select";
import axios from "axios";
const AddBlogs = () => {
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const shortdescription = form.shortdescription.value;
    const longDescription = form.longDescription.value;
    const blogUrl = form.blogUrl.value;

    const addBlog = { title, category, shortdescription, longDescription,blogUrl };
    console.log(addBlog);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/blogs`,
        addBlog
      );
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-3xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-center font-bold text-5xl pt-4">Add A Blog.</h2>
      <form onSubmit={handelSubmit} className="card-body">
        <div className="form-control">
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

        <div className="form-control">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">short description</span>
          </label>
          <input
            name="shortdescription"
            type="description"
            placeholder="category"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">long description</span>
          </label>
          <input
            name="longDescription"
            type="description"
            placeholder="long description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
