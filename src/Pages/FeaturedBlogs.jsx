import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"; // Importing icons from React Icons

import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import UseAxiosInstance from "../Hooks/UseAxiosInstance";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  const axiosSecure = UseAxiosInstance();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axiosSecure.get(`/blogs`);

        const longDesBlog = data
          .map((blog) => ({
            ...blog,
            wordCount: blog?.longDescription
              ? blog?.longDescription?.split(" ").length
              : 0,
          }))
          .sort((a, b) => a.wordCount - b.wordCount)
          .slice(0, 10);

        setBlogs(longDesBlog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosSecure]);

  const columns = [
    {
      accessorKey: "rank",
      header: "Rank",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: (info) => {
        const title = info.getValue();
        const blogId = info.row.original._id;
        return (
          <Link title={title} to={`/blog-details/${blogId}`}>
            {title?.length > 30 ? `${title?.slice(0, 30)}...` : title}
          </Link>
        );
      },
    },
    {
      accessorKey: "author",
      header: "Author",
    },
    {
      accessorKey: "wordCount",
      header: "Word Count",
    },
    {
      accessorKey: "deadline",
      header: "Created At",
      cell: (info) =>
        new Date(info.getValue()).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }),
    },
  ];

  const table = useReactTable({
    data: blogs,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container px-4 mx-auto my-14">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500  uppercase cursor-pointer"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getIsSorted() ? (
                            header.column.getIsSorted() === "asc" ? (
                              <AiOutlineUp className="inline-block ml-1" />
                            ) : (
                              <AiOutlineDown className="inline-block ml-1" />
                            )
                          ) : null}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50 transition duration-200"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 text-sm text-gray-500  whitespace-nowrap"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedBlogs;
