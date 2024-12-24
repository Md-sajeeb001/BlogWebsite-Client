import { useEffect, useState } from "react";
// import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import FeaturedBlogTabel from "../Components/FeaturedBlogTabel";

const FeaturedBlogs = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const fetchAllFeatured = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs`
        );
        // const longestBlog = data.reduce((longest, current) => {
        //   if (longest?.title?.length > current?.title?.length) {
        //     return current;
        //   } else {
        //     return longest;
        //   }
        // });

        // const longest = data.reduce((longestDes, current) => {
        //   return current?.title?.length > longestDes?.title?.length
        //     ? current
        //     : longestDes;
        // });

        // let count = 0;
        // const longest = data.filter(blog=> blog?.title?.length >  count?.title?.length);

        console.log(data);
        setFeatured(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchAllFeatured();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(featured);

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Featured Blogs</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {featured?.length} Featured Blogs
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>author</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>title</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Published
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {featured?.map((fetrd) => (
                    <FeaturedBlogTabel key={fetrd._id} fetrd={fetrd} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
