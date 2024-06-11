import React from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";
import defaultLogo from "../../../images/default-logo.jpg";
import { Link } from "react-router-dom";

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
                    <Link to="orgaization_detail" state={organization}>
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full w-full h-full object-cover"
                            src={organization.logo}
                            width="40"
                            height="40"
                            alt={`image of ${organization.name}`}
                          />
                        </div>
                        <div className="text-slate-800 dark:text-slate-100">
                          {organization.name}
                        </div>
                      </div>
                    </Link>
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
