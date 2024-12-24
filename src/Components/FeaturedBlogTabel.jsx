// import { format } from "date-fns";

// eslint-disable-next-line react/prop-types
const FeaturedBlogTabel = ({ fetrd }) => {
  const { email, title, category, author } = fetrd || {};

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {author}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {email}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {title?.substring(0, 28)}.....
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className={`px-3 py-l`}>{category}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        <div className="flex items-center gap-x-6">
            {/* {format(new Date(deadline), "P")} */}
            12/3/2024
            </div>
      </td>
    </tr>
  );
};

export default FeaturedBlogTabel;
