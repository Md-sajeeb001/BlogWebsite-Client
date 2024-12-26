import Lottie from "lottie-react";
import loading from "../Animation/loading.json";

const Loading = () => {
  return (
    <div className="w-40 h-40 my-36 mx-auto ">
      <Lottie className="w-full h-full" animationData={loading}></Lottie>
    </div>
  );
};

export default Loading;
