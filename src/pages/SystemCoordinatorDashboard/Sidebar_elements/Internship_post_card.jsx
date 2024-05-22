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
  },
  {
    category: "Business",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Addis Ababa, Ethiopia",
    subCategory: "Intermidate",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNvdXJzZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww",
    name: "Addisway Tech",
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
  },
];
export default () => {
  return (
    <main className="px-10 py-4">
      <div className="dark:bg-slate-900 bg-white min-h-[100vh] flex items-center">
        <div className="container mx-auto">
          <h1 class="dark:text-slate-100 mb-8 text-4xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
            Internship Opportunities
          </h1>
          <Link to="add_post">
            <button
              className="flex px-3.5 py-3.5 relative right-3
            text-indigo-600 duration-150  bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              Add
            </button>
          </Link>

          {/* card grid */}
          <Link to="internship_posts_details">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-1 text-left">
              {Array(5).fill(
                apiData.map((data, index) => (
                  <div
                    className="border rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent bg-white"
                    key={index}
                  >
                    {/* image and avatar block */}
                    <div className="cursor-pointer h-48 overflow-hidden">
                      <img
                        src={data.image}
                        alt="Profile image for perticular category"
                        sizes="300px"
                        className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                      />
                      <span className="absolute top-40 mx-auto w-36 h-8 items-center backdrop-blur bg-white/70 flex justify-center font-medium">
                        {data.name}
                      </span>
                    </div>
                    {/* card fields section  */}
                    <div className="p-4 space-y-2 relative h-60 text-gray-400">
                      <div>
                        <p className="text-sm font-bold truncate">
                          {data.category}
                        </p>
                      </div>
                      <div>
                        <span
                          style={myStyle}
                          className="font-bold dark:text-slate-400 text-gray-600 overflow-hidden h-12"
                        >
                          {data.title}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CategoryIcon />
                        <span className="text-sm font-normal">
                          {data.subCategory}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <DateIcon />
                        <span className="text-sm font-normal">{data.date}</span>
                      </div>
                      <div className="flex gap-2 justify-start items-center">
                        <LocationIcon />
                        <span className="text-sm font-normal">
                          {data.location}
                        </span>
                      </div>
                      {/* fix bottom section */}
                      <div className="bottom-2 absolute inset-x-0">
                        <div className="border-t mt-2 mb-2"></div>
                        <span className="dark:text-slate-100 text-xl text-gray-600 pl-4">
                          {data.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Link>
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
