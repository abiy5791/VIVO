import React from "react";
import DashboardCard07 from "../../partials/Organization/dashboard/DashboardCard07";

const Progress_page = () => {
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <body class="bg-gray-100">
        <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          {/* <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"> */}
          <h2 class="text-center text-2xl font-semibold mt-3">John Doe</h2>
          <p class="text-center text-gray-600 mt-1">Software Engineer</p>
          <div class="flex justify-center mt-5">
            <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
              Twitter
            </a>
            <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
              LinkedIn
            </a>
            <a href="#" class="text-blue-500 hover:text-blue-700 mx-3">
              GitHub
            </a>
          </div>
          <div class="mt-5">
            <h3 class="text-xl font-semibold">Bio</h3>
            <p class="text-gray-600 mt-2">
              John is a software engineer with over 10 years of experience in
              developing web and mobile applications. He is skilled in
              JavaScript, React, and Node.js.
            </p>
          </div>
        </div>
      </body>
      <div class="w-full bg-neutral-200 dark:bg-neutral-600">
        <div class="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100">
          25%
        </div>
        <div>
          <h1>Submitted Tasks</h1>
        </div>
        <div>
          <h1></h1>
        </div>
        <div>
          <h1>Submitted Tasks</h1>
        </div>
      </div>
    </div>
  );
};

export default Progress_page;
