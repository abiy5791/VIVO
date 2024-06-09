import React from "react";

import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";

function DashboardCard11() {
  const {
    user: { organization_id },
  } = useAuth();
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSubmittedTasks = async (organization_id) => {
    try {
      const res = await axios.get(
        `organizations/${organization_id}/submitted_tasks/`
      );
      setSubmittedTasks(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    if (organization_id) {
      fetchSubmittedTasks(organization_id);
    }
  }, [organization_id]);

  // Filtered data based on search term
  const filteredData = submittedTasks.filter(
    (data) =>
      data.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(submittedTasks);

  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Submitted Tasks
        </h2>
      </header>
      <div className="p-3">
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
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Applicant</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Task</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {filteredData.map((submitted) => {
                return (
                  <tr key={submitted.id}>
                    <td className="p-2 whitespace-nowrap">
                      <NavLink
                        end
                        to="Submitted_Tasks_Detail"
                        className={({ isActive }) =>
                          "block transition duration-150 truncate " +
                          (isActive
                            ? "text-indigo-500"
                            : "text-slate-400 hover:text-slate-200")
                        }
                      >
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {submitted.applicant}
                          </div>
                        </div>
                      </NavLink>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{submitted.task}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard11;
