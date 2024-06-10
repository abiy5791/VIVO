import React, { useState } from "react";
import { Link } from "react-router-dom";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
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
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = () => {
    switch (selectedTab) {
      case "All":
      case "Interested":
        return (
          <div className="flex flex-col w-full py-10 text-left">
            {apiData.map((data, index) => (
              <div
                className="border mb-5 rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent bg-white"
                key={index}
                onClick={() => setSelectedItem(data)}
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
        );
      case "History":
        return (
          <div className="flex flex-col w-full py-10 text-left">
            {/* Render history content here */}
          </div>
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
        {selectedItem ? (
          <div className="border rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent">
            {/* image and avatar block */}
            <div className="cursor-pointer h-48 overflow-hidden">
              <img
                src={selectedItem.image}
                alt="Profile image for particular category"
                sizes="300px"
                className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
              />
              <span className="absolute top-40 mx-auto w-36 h-8 items-center backdrop-blur bg-white/70 flex justify-center font-medium">
                {selectedItem.name}
              </span>
            </div>
            {/* card fields section */}
            <div className="p-4 space-y-2 relative h-35 text-gray-400">
              <div>
                <h3 className="text-2xl text-black truncate">
                  {selectedItem.category}
                </h3>
              </div>
              <div>
                <h3
                  style={myStyle}
                  className="dark:text-slate-400 text-gray-600 overflow-hidden"
                >
                  {selectedItem.title}
                </h3>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-sm font-normal">{selectedItem.date}</span>
                <span>{selectedItem.location}</span>
              </div>

              <Link
                to="applyproposal"
                className="inline-flex items-center rounded border border-indigo-600 h-9 px-10 bg-indigo-600 text-white active:text-black"
              >
                <span className="text-sm font-medium"> Apply </span>
              </Link>
            </div>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        CATEGORY
                      </span>
                      <span className="mt-1 text-gray-500 text-sm">
                        {selectedItem.category}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {selectedItem.title}
                      </h2>
                      <p className="leading-relaxed">
                        {selectedItem.subCategory}
                      </p>
                      <p className="leading-relaxed">{selectedItem.price}</p>
                      <Link
                        to="applyproposal"
                        className="text-indigo-500 inline-flex items-center mt-4"
                      >
                        Apply Now
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Select an item to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Apply;
