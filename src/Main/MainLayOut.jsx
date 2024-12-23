import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";

const MainLayOut = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="min-h-[calc(100vh-306px)] container mx-auto py-14 sm:px-0 px-6">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
