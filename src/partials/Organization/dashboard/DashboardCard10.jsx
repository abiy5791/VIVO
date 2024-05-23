import React from "react";

import Image01 from "../../../images/user-36-05.jpg";
import Image02 from "../../../images/user-36-06.jpg";
import Image03 from "../../../images/user-36-07.jpg";
import Image04 from "../../../images/user-36-08.jpg";
import Image05 from "../../../images/user-36-09.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "../../../api/axios";

function DashboardCard10() {
  const {
    user: { organization_id },
  } = useAuth();
  const [applications, setApplications] = useState([]);

  const fetchApplications = async (organization_id) => {
    try {
      const res = await axios.get(
        `organizations/${organization_id}/applications`
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

  useEffect(() => {
    if (organization_id) {
      fetchApplications(organization_id);
    }
  }, [organization_id]);

  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      Post: "data structure",
      spent: "$2,890.66",
      status: "Pending...",
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      Post: "machin learning",
      spent: "$2,767.04",
      status: "Accepted",
    },
    {
      id: "2",
      image: Image03,
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      Post: "web dev",
      spent: "$2,996.00",
      status: "Declined",
    },
    {
      id: "3",
      image: Image04,
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      Post: "artifical intelligence",
      spent: "$1,220.66",
      status: "Accepted",
    },
    {
      id: "4",
      image: Image05,
      name: "Burak Long",
      email: "longburak@gmail.com",
      Post: "artifical intelligence",
      spent: "$1,890.66",
      status: "Declined",
    },
  ];

  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Applications
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
              {applications.map((application) => {
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
                              : application.status === "pending"
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
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
