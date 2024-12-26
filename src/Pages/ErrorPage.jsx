import errorPage from "../Animation/errorPage.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[500px]">
        <Lottie className="w-full h-full" animationData={errorPage}></Lottie>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-28 mx-auto btn bg-blue-500 hover:bg-blue-800 text-white text-center"
      >
        <Link to="/">Go Home</Link>
      </motion.button>
    </div>
  );
};

export default ErrorPage;
