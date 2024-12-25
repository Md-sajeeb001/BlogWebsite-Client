import { useEffect, useState } from "react";
import WishListTabel from "../Components/WishListTabel";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosInstance from "../Hooks/UseAxiosInstance";

const WishList = () => {
  const [wishlist, setWishlist] = useState(null);
  const { user } = UseAuth();
  const axiosSecure = UseAxiosInstance();

  useEffect(() => {
    const fetchAllwishlist = async () => {
      try {
        // const { data } = await axios.get(
        //   `${import.meta.env.VITE_API_URL}/wishlists/${user?.email}`,
        //   { withCredentials: true }
        // );
        // console.log(data);
        // setWishlist(data);

        const { data } = await axiosSecure.get(`/wishlists/${user?.email}`);
        setWishlist(data);
        // .then((res) => setWishlist(res.data));
      } catch (err) {
        if (err) {
          toast.error("An unknown error occurred while loading users");
        }
      }
    };
    fetchAllwishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  console.log(wishlist);

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Wishlist</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {wishlist?.length} Wishlisted
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

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Published
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {wishlist?.map((wish) => (
                    <WishListTabel
                      key={wish._id}
                      wish={wish}
                      wishlist={wishlist}
                      setWishlist={setWishlist}
                    />
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

export default WishList;
