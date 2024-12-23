import { Checkbox } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import cycelAnimi from "../../Animation/cycel.json";

const Register = () => {
  const { createUser, updateUserProfile, singWithGoogle } = UseAuth();
  const navigate = useNavigate();

  // sign in with email and password
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // password validation
    const passwordValidation = /^.{0,5}$/;
    if (passwordValidation.test(password)) {
      return toast.error(
        "Password should be at least 6 characters Week Password"
      );
    }

    //don't have a capital letter
    const CapitalLetter = /^[^A-Z]*$/;
    if (CapitalLetter.test(password)) {
      return toast.error(`Dont't Have Capital Letter In Your Password`);
    }

    //  don't have a special character
    const specialCharc = /^[a-zA-Z0-9 ]*$/;
    if (specialCharc.test(password)) {
      return toast.error(`Don't Have A Special Character In Your PassWord`);
    }

    // don't have a numeric character
    const numericCharc = /^[^0-9]*$/;
    if (numericCharc.test(password)) {
      return toast.error(`Don't Have A Numeric Character In Your Password`);
    }

    createUser(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("SignUp Successfully!");
        }

        // update user info!
        updateUserProfile({ displayName: name, photoURL: photo });

        // navigate to root route
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // google sign up!
  const handelGoolgeSubmit = () => {
    singWithGoogle().then((resutl) => {
      console.log(resutl);
      toast.success("Sign In Successfull!");
      navigate("/");
    });
  };

  return (
    <div className="border max-w-5xl mx-auto rounded-xl">
      <h2 className="text-center font-bold text-5xl pt-4">Register Now!</h2>
      <div className="form-control px-8 mt-6">
        <button
          onClick={handelGoolgeSubmit}
          className="btn bg-white border hover:bg-white"
        >
          <FcGoogle className="text-2xl"></FcGoogle> Sign Up With Google
        </button>
      </div>
      <div className="divider px-8">or</div>
      <div className="w-full sm:flex items-center justify-center gap-8">
        <div className="w-1/2 ">
          <Lottie className="w-full" animationData={cycelAnimi}></Lottie>
        </div>
        <div className="w-1/2 ">
          <form onSubmit={handelSubmit} className="w-full card-body">
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
      </div>
    </div>
  );
};

export default Register;
