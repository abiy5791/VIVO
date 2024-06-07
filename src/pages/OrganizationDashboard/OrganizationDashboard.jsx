import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../partials/Organization/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../partials/Organization/Sidebar";
function OrganizationDashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="flex">
          {/* Hamburger button */}
          <button
            className="text-slate-500 pt-5 pl-5 hover:text-slate-600 lg:hidden"
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        <div className="flex justify-end mt-5 mr-5">
          <button
            type="button"
            onClick={handleBack}
            className={
              "w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-bg-gray-600 hover:bg-white-600 font-medium bg-slate-50"
            }
          >
            <div className="flex flex-row align-middle">
              <svg
                className="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="ml-2">Back</p>
            </div>
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default OrganizationDashboard;
