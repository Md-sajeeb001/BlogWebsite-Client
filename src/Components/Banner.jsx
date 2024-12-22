import { Button } from "@mui/material";
import bannderImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bannderImg})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center space-y-6 justify-center pt-32 my-auto max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white leading-normal">
            We build bikes with extra care, especially for you
          </h2>
          <h4 className="text-xl font-bold leading-9">
            Cyceling safe, and how Remco could have been saved by training in
            Carrick
          </h4>
          <Button variant="contained">Read More!</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
