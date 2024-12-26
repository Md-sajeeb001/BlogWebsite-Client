import { Button } from "@mui/material";
import bannderImg from "../assets/banner.jpg";
// import { Typewriter } from "react-simple-typewriter";
import TypeWritter from "./TypeWritter";

const Banner = () => {
  return (
    <div
      className="rounded-md"
      style={{
        backgroundImage: `url(${bannderImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center sm:space-y-6 space-y-3 justify-center pt-[150px] md:pt-[100px] lg:pt-[160px] my-auto lg:max-w-3xl md:max-w-xl max-w-sm mx-auto text-center">
        <TypeWritter></TypeWritter>
        <h4 className="sm:text-xl text-sm font-normal sm:font-bold sm:leading-9 text-black leading-5">
          Cyceling safe, and how Remco could have been saved by training in
          Carrick
        </h4>
        <Button variant="contained">Read More!</Button>
      </div>
    </div>
  );
};

export default Banner;
