import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

export default function ViewSuperVisors() {
  const [Supervisor, setSupervisor] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    user: { user_id, email, role, university_coordinator_id },
  } = useAuth();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Fetch assignments data

        const superviorsResponse = await axios.get(`UvSupervisors/`);
        const fetchedSupervisors = superviorsResponse.data || [];

        const Supervsr = filterSupervisorsByCoordinator(
          fetchedSupervisors,
          university_coordinator_id
        );

        setSupervisor(Supervsr);

        // const Supervsr = filterSupervisorsByCoordinator(
        //   fetchedSupervisors,
        //   university_coordinator_id
        // );

        // setSupervisor(Supervsr);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_coordinator_id]);

  function filterSupervisorsByCoordinator(supervisors, coordinatorId) {
    return supervisors.filter(
      (supervisor) => supervisor.coordinator === coordinatorId
    );
  }

  console.log(Supervisor);
  console.log("it is not working");

  function handleClick(item) {
    console.log(item);
    navigate("/UvCoordinator/ViewSuperVisors/Supervisordetail", {
      state: { item },
    });
  }

  return (
    <>
      <div className="container px-5 py-16 pb-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Here are all the supervisors
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Dear Coordinator, You can see and manage the Supervisors here.
          </p>
        </div>
      </div>

      <div className="w-9/12 mx-auto px-4">
        <div className="items-start justify-between sm:flex">
          <div>
            <h4 className="text-gray-800 text-xl font-semibold">
              List of supervisors
            </h4>
          </div>
          <a
            href="/UvCoordinator/AddSupervisor"
            className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            New Supervisor
          </a>
        </div>
        <ul className="mt-12 divide-y">
          {Supervisor.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleClick(item)}
              className="py-5 flex items-start justify-between"
            >
              <div className="flex gap-3">
                <img
                  src={item.avatar}
                  className="flex-none w-12 h-12 rounded-full"
                />
                <div>
                  <span className="block text-sm text-gray-700 font-semibold">
                    {item.first_name}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {item.email}
                  </span>
                </div>
              </div>
              <a className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100">
                Manage
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
