import { Link } from "react-router-dom";
import nothingImage from "../../assets/nothing.png";
const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
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
const SkillsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
  >
    <rect x="4" y="6" width="4" height="12" fill="gray" />
    <rect x="10" y="4" width="4" height="14" fill="gray" />
    <rect x="16" y="8" width="4" height="10" fill="gray" />
  </svg>
);
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

function Volunteers() {
  const [VolunteerPost, setVolunteerPost] = useState([]);

  useEffect(() => {
    axios
      .get("/posts/?type=VolunteerWork")
      .then((response) => {
        setVolunteerPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts: ", error);
      });
  }, []);
  return (
    <div className="dark:bg-slate-900 bg-white min-h-[100vh] flex items-center">
      <div className="container mx-auto">
        <h1 class="dark:text-slate-100 mb-8 text-4xl font-bold text-center leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
          Volunteer Opportunities
        </h1>
        {/* card grid */}
        {VolunteerPost.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-5 xl:mx-10">
            {VolunteerPost.map((post) => (
              <Link state={post} to="/posted_opportunity_detail">
                <div
                  className="border rounded-lg hover:drop-shadow-md overflow-hidden relative dark:bg-transparent bg-white"
                  key={post.id}
                >
                  {/* image and avatar block */}
                  <div className="cursor-pointer h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt="Profile image for perticular category"
                      sizes="300px"
                      className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                    />
                    <span className="absolute top-40 mx-auto w-36 h-8 items-center backdrop-blur bg-white/70 flex justify-center font-medium">
                      {post.category}
                    </span>
                  </div>
                  {/* card fields section  */}
                  <div className="p-4 space-y-2 relative h-60 text-gray-400">
                    <div>
                      <p className="text-sm font-bold truncate">{post.title}</p>
                    </div>
                    <div>
                      <span
                        style={myStyle}
                        className="font-bold dark:text-slate-400 text-gray-600 overflow-hidden h-12"
                      >
                        {post.description}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CategoryIcon />
                      <span className="text-sm font-normal">{post.level}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <DateIcon />
                      <span className="text-sm font-normal">
                        {post.duration}
                      </span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <SkillsIcon />
                      <span className="text-sm font-normal">
                        {post.skills_gained}
                      </span>
                    </div>
                    {/* fix bottom section */}
                    {post.is_paid ? (
                      <div className="bottom-2 absolute inset-x-0">
                        <div className="border-t mt-2 mb-2"></div>
                        <span className="dark:text-slate-100 text-xl text-gray-600 pl-4">
                          {post.price} ETB
                        </span>
                      </div>
                    ) : (
                      <div className="bottom-2 absolute inset-x-0">
                        <div className="border-t mt-2 mb-2"></div>
                        <span className="dark:text-slate-100 text-xl text-gray-600 pl-4">
                          Free
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-center items-center">
              <img
                src={nothingImage}
                alt="No data available"
                className="w-96 h-96"
              />
            </div>
            <h1 className="font-extralight text-xl mt-3 text-center">
              No Volunteer Post data is available !
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default Volunteers;
