import React from "react";
import Image01 from "../../../images/user-36-05.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "../../../api/axios";

function DashboardCard10() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const {
    user: { system_coordinator_id },
  } = useAuth();
  const [applications, setApplications] = useState([]);

  const fetchApplications = async (system_coordinator_id) => {
    try {
      const res = await axios.get(
        `systemCoordinators/${system_coordinator_id}/applications`
      );
      const filteredApplications = res.data.map((application) => ({
        id: application.id.toString(),
        applicant_id: application.applicant.id,
        image: Image01,
        name: `${application.applicant.first_name} ${application.applicant.last_name}`,
        email: application.applicant.email,
        phone_number: application.applicant.phone_number,
        gender: application.applicant.gender,
        post_id: application.post.id,
        post: application.post.title,
        status: application.status,
        application_date: new Date(application.created).toLocaleDateString(),
      }));
      setApplications(filteredApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };
  const filteredData = applications.filter(
    (data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // data.is_approved.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.post.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.application_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    if (system_coordinator_id) {
      fetchApplications(system_coordinator_id);
    }
  }, [system_coordinator_id]);
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
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
      <div className="p-3">
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
                  <div className="font-semibold text-left">post</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {filteredData.map((application) => {
                return (
                  <tr key={application.id}>
                    <td className="p-2 whitespace-nowrap">
                      <NavLink
                        end
                        state={application}
                        to="Application_Details"
                        className={({ isActive }) =>
                          "block transition duration-150 truncate " +
                          (isActive
                            ? "text-indigo-500"
                            : "text-slate-400 hover:text-slate-200")
                        }
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={application.image}
                              width="40"
                              height="40"
                              alt={application.name}
                            />
                          </div>
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {application.name}
                          </div>
                        </div>
                      </NavLink>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{application.post}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {application.application_date}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-md text-center">
                        {application.email}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-center font-medium"
                        style={{
                          color:
                            application.status === "accepted"
                              ? "green"
                              : application.status === "Pending..."
                              ? "black"
                              : "red",
                        }}
                      >
                        {application.status}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
  );
}

export default DashboardCard10;
