import Banner from "../Components/Banner";
import FAQ from "../Components/FAQ";
import NewsLetter from "../Components/NewsLetter";
import RecentBlogs from "../Components/RecentBlogs";

const Home = () => {
  return (
    <div>
      <div className="mt-14">
        <Banner></Banner>
      </div>
      <div>
        <RecentBlogs></RecentBlogs>
      </div>
      <div>
        <NewsLetter></NewsLetter>
      </div>
      <div>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
