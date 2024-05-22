import React, { useState } from "react";
import { Link } from "react-router-dom";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

//JSON to generate a dummy database
const apiData = [
  {
    category: "Project Managment",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Easy",
    price: "Free",
    image:
      "https://plus.unsplash.com/premium_photo-1661385965839-f6c4f10838ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlJTIwdGVtcGxhdGV8ZW58MHx8MHx8fDA%3D",
    name: "Ethio Tech",
    status: "approved",
  },
  {
    category: "Data Structure",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Adama, Ethiopia",
    subCategory: "Advance",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlJTIwdGVtcGxhdGV8ZW58MHx8MHx8fDA%3D",
    name: "Habesha Tech",
    status: "pending",
  },
  {
    category: "Business",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Intermidate",
    price: "52 ETB",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNvdXJzZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww",
    name: "Addisway Tech",
    status: "approved",
  },
  {
    category: "Marketing",
    title: " Lorem ipsum dol",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Advance",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvdXJzZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww",
    name: "Afro Tech",
    status: "pending",
  },
];
export default () => {
  return (
    <main className="px-10 py-4">
      <div className="dark:bg-slate-900 bg-white min-h-[100vh] flex items-center">
        <div className="container mx-auto">
          <h1 class="dark:text-slate-100 mb-8 text-4xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-5xl">
            Internship Opportunities
          </h1>
          {/* Table of posts */}

          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <div class="py-3 px-4">
                    <div class="relative max-w-xs">
                      <label class="sr-only">Search</label>
                      <input
                        type="text"
                        name="hs-table-with-pagination-search"
                        id="hs-table-with-pagination-search"
                        class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Search for items"
                      />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                        <svg
                          class="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            PostTitle
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Company
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Cost
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      {apiData.map((data, index) => (
                        <tbody
                          key={index}
                          class="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                          <tr>
                            <Link to="internship_posts_details">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {data.category}
                              </td>
                            </Link>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.name}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.location}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.date}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {data.price}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              {data.status == "approved" ? (
                                <button
                                  type="button"
                                  class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                  {data.status}
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                  {data.status}
                                </button>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  <div class="py-1 px-4">
                    <nav class="flex items-center space-x-1">
                      <button
                        type="button"
                        class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                      </button>
                      <button
                        type="button"
                        class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                        aria-current="page"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span class="sr-only">Next</span>
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

const CategoryIcon = () => (
  <svg
    stroke="gray"
    fill="none"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 4h6v6h-6z"></path>
    <path d="M14 4h6v6h-6z"></path>
    <path d="M4 14h6v6h-6z"></path>
    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  </svg>
);
const DateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 2048 2048"
  >
    <path
      fill="gray"
      d="M1792 993q60 41 107 93t81 114t50 131t18 141q0 119-45 224t-124 183t-183 123t-224 46q-91 0-176-27t-156-78t-126-122t-85-157H128V128h256V0h128v128h896V0h128v128h256v865zM256 256v256h1408V256h-128v128h-128V256H512v128H384V256H256zm643 1280q-3-31-3-64q0-86 24-167t73-153h-97v-128h128v86q41-51 91-90t108-67t121-42t128-15q100 0 192 33V640H256v896h643zm573 384q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36zm64-512h192v128h-320v-384h128v256zM384 1024h128v128H384v-128zm256 0h128v128H640v-128zm0-256h128v128H640V768zm0 512h128v128H640v-128zm384-384H896V768h128v128zm256 0h-128V768h128v128zM384 768h128v128H384V768z"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
  >
    <path
      fill="gray"
      d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075ZM12 10.2Z"
    />
  </svg>
);
