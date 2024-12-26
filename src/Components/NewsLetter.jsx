import toast from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="px-6 rounded-lg py-4 mt-12 text-blue-600 bg-blue-100 max-w-2xl  mx-auto "
    >
      <form onSubmit={handelSubmit}>
        <div className=" w-full mt-4">
          <div className="flex flex-col items-center text-center text-black space-y-3">
            <h5 className="border text-lg font-bold">
              SIGN UP FOR OUR NEWSLETTER
            </h5>
            <p className="border text-base font-light pb-4">
              Subscribe to our newsletter to stay informed about new products,
              technologies, events, contests and much more.
            </p>
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full input input-bordered"
            required
          />
        </div>
        <div className="sm:w-1/2 w-full mx-auto form-control pt-4">
          <button className="w-full btn bg-blue-600 text-white hover:bg-blue-700">
            subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
