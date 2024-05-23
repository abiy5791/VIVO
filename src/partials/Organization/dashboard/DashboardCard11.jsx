import React from "react";

import Image01 from "../../../images/user-36-05.jpg";
import Image02 from "../../../images/user-36-06.jpg";
import Image03 from "../../../images/user-36-07.jpg";
import Image04 from "../../../images/user-36-08.jpg";
import Image05 from "../../../images/user-36-09.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";

function DashboardCard11() {
  const {
    user: { organization_id },
  } = useAuth();
  const [submittedTasks, setSubmittedTasks] = useState([]);

  const fetchSubmittedTasks = async (organization_id) => {
    try {
      const res = await axios.get(
        `organizations/${organization_id}/submitted_tasks`
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

  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Submitted Tasks
        </h2>
      </header>
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
                  <div className="font-semibold text-left">Task</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">email</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {submittedTasks.map((submitted) => {
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
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={submitted.image}
                              width="40"
                              height="40"
                              alt={submitted.name}
                            />
                          </div>
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {submitted.name}
                          </div>
                        </div>
                      </NavLink>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{submitted.Post}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {submitted.spent}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-md text-center">
                        {submitted.email}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        className="text-center font-medium"
                        style={{
                          color:
                            submitted.status === "Accepted"
                              ? "green"
                              : submitted.status === "Pending..."
                              ? "black"
                              : "red",
                        }}
                      >
                        {submitted.status}
                      </div>
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
