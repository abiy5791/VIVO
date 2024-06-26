import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";

function DashboardCard02() {
  const { user } = useAuth();
  const [uvSupervisors, setUvSupervisors] = useState([]);

  const fetchUvSupervisor = async (user) => {
    try {
      if (user.role === "admin") {
        const res = await axios.get(`UvSupervisors`);
        setUvSupervisors(res.data);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchUvSupervisor(user);
  }, [user]);
  console.log(uvSupervisors);
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          University Supervisors
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
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center"> Phone Number</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {uvSupervisors.map((supervisor) => {
                return (
                  <tr key={supervisor.id}>
                    <td className="p-2 whitespace-nowrap">
                      <Link to="uvSupervisor_detail" state={supervisor}>
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={supervisor.image}
                              width="40"
                              height="40"
                              alt={supervisor.name}
                            />
                          </div>
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {supervisor.name}
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{supervisor.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {supervisor.date_joined}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-md text-center">
                        {supervisor.phone_number}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center font-medium">
                        {`${supervisor.is_active}`}
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

export default DashboardCard02;
