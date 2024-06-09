import Image01 from "../../../images/user-36-05.jpg";

import load_bar from "../../../images/load-bar.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";

function DashboardCard07() {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const {
    user: { system_coordinator_id },
  } = useAuth();
  const [applicants, setApplicants] = useState([]);

  const fetchApplicant = async (system_coordinator_id) => {
    try {
      const res = await axios.get(
        `systemCoordinators/${system_coordinator_id}/applications`
      );
      const filteredApplications = res.data
        .filter((application) => application.status === "accepted")
        .map((application) => ({
          id: application.id.toString(),
          applicant_id: application.applicant.id,
          image: Image01,
          name: `${application.applicant.first_name} ${application.applicant.last_name}`,
          email: application.applicant.email,
          phone_number: application.applicant.phone_number,
          gender: application.applicant.gender,
          post_id: application.post.id,
          post: application.post.title,
          spent: new Date(application.created).toLocaleDateString(),
          status: load_bar,
          progress: "25%",
        }));
      setApplicants(filteredApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    if (system_coordinator_id) {
      fetchApplicant(system_coordinator_id);
    }
  }, [system_coordinator_id]);
  const filteredData = applicants.filter(
    (data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // data.is_approved.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.post.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.spent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (system_coordinator_id) {
      fetchApplicant(system_coordinator_id);
    }
  }, [system_coordinator_id]);

  console.log(applicants);

  return (
    <div class="rounded-lg mb-4 overflow-auto border">
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
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Name
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Post
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Date
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Email
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Progress
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          {filteredData.map((applicant) => {
            return (
              <tr id={applicant.id} class="text-gray-500">
                <td class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  <Link state={applicant} to="Applicant_progress">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src={applicant.image}
                          width="40"
                          height="40"
                          alt={applicant.name}
                        />
                      </div>
                      <div className="font-medium text-slate-800 dark:text-slate-100">
                        {applicant.name}
                      </div>
                    </div>
                  </Link>
                </td>
                <td class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  {applicant.post}
                </td>
                <td class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  {applicant.spent}
                </td>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  {applicant.email}
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">
                      {/* {applicant.progress} */}
                    </span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-cyan-600 h-2 rounded-sm w-32"
                          //   style="width: 30%"
                        ></div>
                      </div>
                    </div>
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
  );
}
export default DashboardCard07;
