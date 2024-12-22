import { Checkbox } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfie } = UseAuth();

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const newUser = { name, email, password, photo };
    console.log(newUser);

    createUser(email, password)
      .then((res) => {
        console.log(res);
        if (res?.user) {
          toast.success("SignUp Successfully!");
        }
        updateUserProfie({ displayName: name, photoURL: photo });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="border max-w-3xl mx-auto rounded-xl">
      <h2 className="text-center font-bold text-5xl pt-4">Register Now!</h2>
      <div className="divider px-6">or</div>
      <div className="form-control px-6 mt-6">
        <button className="btn bg-white border hover:bg-white">
          <FcGoogle className="text-2xl"></FcGoogle> Sign Up With Google
        </button>
      </div>
      <form onSubmit={handelSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="Name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="text"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            name="photo"
            type="url"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>

        <div className=" flex items-center justify-start">
          <Checkbox />
          <p>Accept Our Terms And Condition</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-600 text-white hover:bg-blue-700 ">
            Submit
          </button>
        </div>
        <div className="form-control mt-6">
          <p className="text-center">
            Already Have An Accont?{" "}
            <Link to="/signIn" className="hover:text-red-600 underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
