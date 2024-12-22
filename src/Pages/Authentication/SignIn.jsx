import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signInUser, singWithGoogle } = UseAuth();
  const navigate = useNavigate();

  // sign in with email and password
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // create user
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Sign In Successfully!");
        }
        navigate("/");
      })
      .catch((err) => {
        if (err) {
          toast.error(err.message);
        }
      });
  };

  // google sign up!
  const handelGoolgeSubmit = () => {
    singWithGoogle().then((resutl) => {
      console.log(resutl);
      navigate('/')
    });
  };

  return (
    <div className="border max-w-3xl mx-auto rounded-xl">
      <h2 className="text-center font-bold text-5xl pt-4">Sign In Now!</h2>
      <div className="divider px-6">or</div>
      <div className="form-control px-6 mt-6">
        <button
          onClick={handelGoolgeSubmit}
          className="btn bg-white border hover:bg-white"
        >
          <FcGoogle className="text-2xl"></FcGoogle> Sign In With Google
        </button>
      </div>
      <form onSubmit={handelSubmit} className="card-body">
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
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <div className="form-control mt-6">
          <button className="btn bg-blue-600 text-white hover:bg-blue-700 ">
            Submit
          </button>
        </div>

        <div className="form-control mt-6">
          <p className="text-center">
            Dont Have An Account?{" "}
            <Link to="/register" className="hover:text-red-600 underline">
              Register Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
