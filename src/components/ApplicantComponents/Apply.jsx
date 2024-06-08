import React, { useState } from "react";
import { Link } from "react-router-dom";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};
const detail = {
  category: "Project Management",
  title:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia dolorem cupiditate necessitatibus ad quaerat repudiandae cumque quos numquam a, natus quod expedita, dicta veniam porro minus delectus eos nemo?",
  date: new Date().toDateString(),
  location: "Addis Ababa, Ethiopia",
  subCategory: "Easy",
  price: "Free",
  image:
    "https://plus.unsplash.com/premium_photo-1661385965839-f6c4f10838ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlJTIwdGVtcGxhdGV8ZW58MHx8MHx8fDA%3D",
  name: "Ethio Tech",
};
const apiData = [
  {
    category: "Project Management",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia dolorem cupiditate necessitatibus ad quaerat repudiandae cumque quos numquam a, natus quod expedita, dicta veniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Easy",
    price: "Free",
    image:
      "https://plus.unsplash.com/premium_photo-1661385965839-f6c4f10838ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlJTIwdGVtcGxhdGV8ZW58MHx8MHx8fDA%3D",
    name: "Ethio Tech",
  },
  {
    category: "Data Structure",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia dolorem cupiditate necessitatibus ad quaerat repudiandae cumque quos numquam a, natus quod expedita, dicta veniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Adama, Ethiopia",
    subCategory: "Advance",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlJTIwdGVtcGxhdGV8ZW58MHx8MHx8fDA%3D",
    name: "Habesha Tech",
  },
  {
    category: "Business",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia dolorem cupiditate necessitatibus ad quaerat repudiandae cumque quos numquam a, natus quod expedita, dicta veniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Intermediate",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNvdXJzZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww",
    name: "Addisway Tech",
  },
  {
    category: "Marketing",
    title: "Lorem ipsum dol",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Advance",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvdXJzZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww",
    name: "Afro Tech",
  },
];

function Apply() {
  const [selectedTab, setSelectedTab] = useState("All");

  const renderContent = () => {
    switch (selectedTab) {
      case "All":
        return (
          <Link to="/posted_opportunity_details">
            <div className="flex flex-col w-full py-10 text-left">
              {apiData.map((data, index) => (
                <div
                  className="border mb-5 rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent bg-white"
                  key={index}
                >
                  {/* image and avatar block */}
                  <div className="cursor-pointer h-48 overflow-hidden">
                    <img
                      src={data.image}
                      alt="Profile image for particular category"
                      sizes="300px"
                      className="w-full h-full object-cover hover:scale-125 delay-200 duration-300 ease-in-out"
                    />
                    <span className="absolute top-40 mx-auto w-36 h-8 items-center backdrop-blur bg-white/70 flex justify-center font-medium">
                      {data.name}
                    </span>
                  </div>
                  {/* card fields section */}
                  <div className="p-4 space-y-2 relative h-35 text-gray-400">
                    <div>
                      <p className="text-sm font-bold truncate">
                        {data.category}
                      </p>
                    </div>
                    <div>
                      <span
                        style={myStyle}
                        className="dark:text-slate-400 text-gray-600 overflow-hidden h-12"
                      >
                        {data.title}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm font-normal">{data.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        );
      case "Interested":
        return (
          <Link to="/posted_opportunity_details">
            <div className="flex flex-col w-full py-10 text-left">
              {apiData.map((data, index) => (
                <div
                  className="border mb-5 rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent bg-white"
                  key={index}
                >
                  {/* image and avatar block */}
                  <div className="cursor-pointer h-48 overflow-hidden">
                    <img
                      src={data.image}
                      alt="Profile image for particular category"
                      sizes="300px"
                      className="w-full h-full object-cover hover:scale-125 delay-200 duration-300 ease-in-out"
                    />
                    <span className="absolute top-40 mx-auto w-36 h-8 items-center backdrop-blur bg-white/70 flex justify-center font-medium">
                      {data.name}
                    </span>
                  </div>
                  {/* card fields section */}
                  <div className="p-4 space-y-2 relative h-35 text-gray-400">
                    <div>
                      <p className="text-sm font-bold truncate">
                        {data.category}
                      </p>
                    </div>
                    <div>
                      <span
                        style={myStyle}
                        className="dark:text-slate-400 text-gray-600 overflow-hidden h-12"
                      >
                        {data.title}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm font-normal">{data.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        );
      case "History":
        return (
          <Link to="/posted_opportunity_details">
            <div className="flex flex-col w-full py-10 text-left"></div>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 w-11/12 mx-auto p-4 gap-4 bg-slate-50">
      <div className="h-[calc(100vh-4rem)] overflow-y-scroll">
        <div className="flex">
          <a
            className={`flex-grow cursor-pointer py-2 text-lg px-1 ${
              selectedTab === "All"
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "border-b-2 border-gray-300"
            }`}
            onClick={() => setSelectedTab("All")}
          >
            All
          </a>
          <a
            className={`flex-grow cursor-pointer py-2 text-lg px-1 ${
              selectedTab === "Interested"
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "border-b-2 border-gray-300"
            }`}
            onClick={() => setSelectedTab("Interested")}
          >
            Interested
          </a>
          <a
            className={`flex-grow cursor-pointer py-2 text-lg px-1 ${
              selectedTab === "History"
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "border-b-2 border-gray-300"
            }`}
            onClick={() => setSelectedTab("History")}
          >
            History
          </a>
        </div>
        {renderContent()}
      </div>
      <div className="bg-white p-3">
        <div className="border rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent">
          {/* image and avatar block */}
          <div className="cursor-pointer h-48 overflow-hidden">
            <img
              src={detail.image}
              alt="Profile image for particular category"
              sizes="300px"
              className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
            />
            <span className="absolute top-40 mx-auto w-36 h-8 items-center backdrop-blur bg-white/70 flex justify-center font-medium">
              {detail.name}
            </span>
          </div>
          {/* card fields section */}
          <div className="p-4 space-y-2 relative h-35 text-gray-400">
            <div>
              <h3 className="text-2xl text-black truncate">
                {detail.category}
              </h3>
            </div>
            <div>
              <h3
                style={myStyle}
                className="dark:text-slate-400 text-gray-600 overflow-hidden"
              >
                {detail.title}
              </h3>
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-sm font-normal">{detail.date}</span>
              <span>{detail.location}</span>
            </div>

            <Link
              to="task"
              className="inline-flex items-center rounded border border-indigo-600 h-9 px-10 bg-indigo-600 text-white active:text-black"
            >
              <span className="text-sm font-medium"> Apply </span>
            </Link>
          </div>
          <section className="text-gray-600 body-font bg-slate-100 m-2">
            <div className="container px-5 py-10">
              <div className="text-center mb-10">
                <h2 className="dark:text-slate-300 text-gray-800 font-extrabold">
                  Why complete our Job Simulation
                </h2>
                <p className="text-base leading-relaxed dark:text-slate-400">
                  A risk-free way to experience work on the job with us at
                  JPMorgan Chase & Co.
                </p>
              </div>
              <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2">
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      Self-paced 6-7 hours
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">No grades</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      No assessments
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">Intermediate</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">No Interview</span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      Has Certificate!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Apply;
