import Banner from "../Components/Banner";
import FAQ from "../Components/FAQ";
import NewsLetter from "../Components/NewsLetter";
import RecentBlogs from "../Components/RecentBlogs";
import Warning from "../Components/Warning";

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
      <div>
        <Warning></Warning>
      </div>
    </div>
  );
};

export default Home;
