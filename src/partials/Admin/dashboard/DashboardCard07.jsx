import React from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";
import defaultLogo from "../../../images/default-logo.jpg";

function DashboardCard07() {
  const { user } = useAuth();
  const [organizations, setOrganizations] = useState([]);

  const fetchOrganizations = async (user) => {
    try {
      if (user.role === "admin") {
        const res = await axios.get(`organizations`);
        setOrganizations(res.data);
      }
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  };

  useEffect(() => {
    fetchOrganizations(user);
  }, [user]);

  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Organizations
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Organization</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Location</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">email</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Supervisor</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              {organizations.map((organization) => (
                <tr key={organization.id}>
                  <td className="p-2">
                    <div className="flex items-center">
                      {/* <svg
                        className="shrink-0 mr-2 sm:mr-3"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <circle fill="#24292E" cx="18" cy="18" r="18" />
                        <path
                          d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                          fill="#FFF"
                        />
                      </svg> */}
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full w-full h-full object-cover"
                          src={defaultLogo}
                          width="40"
                          height="40"
                          alt={`image of ${organization.name}`}
                        />
                      </div>
                      <div className="text-slate-800 dark:text-slate-100">
                        {organization.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{`${organization.location_state}, ${organization.location_city}`}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">
                      {organization.organization_email}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {organization.organization_type}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">
                      {organization.supervisor.email}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
