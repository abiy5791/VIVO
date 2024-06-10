import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

export default () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const {
    user: { organization_id },
  } = useAuth();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (organization_id) => {
    try {
      const res = await axios.get(
        `organizations/${organization_id}/posts/?type=VolunteerWork`
      );
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  // Filtered data based on search term
  const filteredData = posts.filter(
    (data) =>
      data.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.created.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.image ||
      data.id ||
      data.description ||
      data.skills_gained ||
      data.duration ||
      data.level
  );

  useEffect(() => {
    if (organization_id) {
      fetchPosts(organization_id);
    }
  }, [organization_id]);

  console.log(posts);

  return (
    <main className="px-10">
      <div className="dark:bg-slate-900 bg-white flex items-center">
        <div className="container mx-auto">
          <h1 className="dark:text-slate-100 mb-8 text-4xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-5xl">
            Volunteer Opportunities
          </h1>
          {/* Table of posts */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <div className="py-3 px-4">
                    <div className="relative max-w-xs">
                      <label className="sr-only">Search</label>
                      <input
                        type="text"
                        name="hs-table-with-pagination-search"
                        id="hs-table-with-pagination-search"
                        className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Search for items"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Post Title
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Level
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      {filteredData.map((data, index) => (
                        <tbody
                          key={index}
                          className="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                          <tr>
                            <Link state={data} to="internship_posts_details">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {data.title}
                              </td>
                            </Link>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.level}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.created}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              {data.is_approved ? (
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                  Approved
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                  Pending
                                </button>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  <div className="py-1 px-4">
                    <nav className="flex items-center space-x-1">
                      <button
                        type="button"
                        className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </button>
                      <button
                        type="button"
                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                        aria-current="page"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span className="sr-only">Next</span>
                        <span aria-hidden="true">»</span>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
