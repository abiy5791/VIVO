import React, { useState, useEffect, useMemo } from "react";
import CircularProgress from "../Circular_Progress";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

const Progress_page = () => {
  const location = useLocation();
  const application = useMemo(() => location.state || {}, [location.state]);

  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [progressPercent, setProgressPercent] = useState();

  useEffect(() => {
    const getSubmittedTasks = async () => {
      try {
        if (application?.applicant_id && application?.post_id) {
          const res = await axios.get(
            `applicants/${application.applicant_id}/submitted_tasks/?post_id=${application.post_id}`
          );
          setSubmittedTasks(res.data);
        }
      } catch (error) {
        console.error("Error fetching submitted tasks:", error);
      }
    };

    getSubmittedTasks();
  }, [application]);
  useEffect(() => {
    const getProgressPercent = async () => {
      try {
        const res = await axios.get(`posts/${application.post_id}`);
        const task_count = res.data.tasks_count;
        const completed_submitted_tasks = submittedTasks.filter(
          (submitted) => submitted.status === "Completed"
        );
        const progress = (completed_submitted_tasks.length / task_count) * 100;
        setProgressPercent(progress.toFixed(1));
      } catch (error) {
        console.log(error);
      }
    };

    if (submittedTasks.length > 0) {
      getProgressPercent();
    }
  }, [submittedTasks, application.post_id]);

  return (
    <>
      <div>
        <div class="container mx-auto my-10 p-5">
          <div class="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div class="bg-white p-3 border-t-4 border-indigo-400">
                <div class="w-40 h-40 mx-auto rounded-full shadow-2xl flex items-center justify-center text-indigo-500">
                  <img
                    className="rounded-full"
                    src="https://cdn.theforage.com/pajrEXDRjHWNANStX/profile/picture-679a2"
                    alt=""
                  />
                </div>

                <h1 class="text-gray-900 text-center font-bold text-xl leading-8 my-1">
                  {application.name}
                </h1>
                <h3 class="text-gray-600 text-center font-lg text-semibold leading-6">
                  Owner at Her Company Inc.
                </h3>
                <p class="text-sm font-light mt-3 text-center text-gray-500 hover:text-gray-600 leading-6">
                  I am writing to enquire if you have any vacancies in your
                  company. I enclose my CV for your information.{" "}
                </p>
                <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li class="flex items-center py-3">
                    <span>Status</span>
                    <span class="ml-auto">
                      <span class="bg-green-400 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li class="flex items-center py-3">
                    <span>Member since</span>
                    <span class="ml-auto">Nov 07, 2016</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2 h-64">
              {/* <!-- Profile tab -->
                <!-- About Section --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">
                        {application?.name.toString().split(" ")[0]}
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">
                        {application?.name.toString().split(" ")[1]}
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">{application.gender}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">{application.phone_number}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href="mailto:jane@example.com">
                          {application.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:underline hover:shadow-xs p-3 my-4">
                  Show Full Information
                </button>
              </div>
              {/* <!-- End of about section --> */}

              <div class="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="grid grid-cols-2">
                  <div>
                    <h1 className="text-center font-semibold">Progress</h1>

                    {/* <!-- Progress Indicator --> */}

                    <CircularProgress percent={progressPercent} />
                  </div>
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">Submited Tasks</span>
                    </div>
                    <ul class="list-inside space-y-2">
                      {submittedTasks.map((submitted, idx) => (
                        <li key={submitted.id}>
                          <div class="text-indigo-500 hover:underline cursor-pointer">
                            Task {idx + 1} {submitted.task.title}
                          </div>
                          <div class="text-gray-500 text-xs">
                            {submitted.created}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <!-- End of education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress_page;
