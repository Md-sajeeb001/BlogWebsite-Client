import { Typewriter } from "react-simple-typewriter";
const TypeWritter = () => {
  return (
    <div>
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:font-extrabold text-white leading-normal">
        <Typewriter
          words={[" We build bikes with extra care, especially for you"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypeWritter;
