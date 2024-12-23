import toast from "react-hot-toast";

const NewsLetter = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    if (email) {
      toast.success("Thank you for subscribing to our newsletter");
      form.reset();
    }
  };

  return (
    <div className="px-6 rounded-lg py-4 mt-12 text-blue-600 bg-blue-100 max-w-2xl  mx-auto ">
      <form onSubmit={handelSubmit}>
        <div className="form-control w-full mt-16">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="w-full input input-bordered"
            required
          />
        </div>
        <div className="sm:w-1/2 w-full mx-auto form-control pt-6">
          <button className="w-full btn bg-blue-600 text-white hover:bg-blue-700">
            subscribing to our newsletter
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
