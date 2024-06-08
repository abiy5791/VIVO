import React from "react";
import { Pagination, Progress, Flex } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function Task() {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const handlePageChange = (taskId, page) => {
    navigate(`/applicant_dashboard/task/${taskId}/section/${page}`);
  };

  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description:
        "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.",
    },
    {
      id: 3,
      title: "Task 3",
      description:
        "Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.",
    },
    {
      id: 4,
      title: "Task 4",
      description:
        "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
    },
    {
      id: "finish",
      title: "FINISH",
      description:
        "Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.",
      isFinish: true,
    },
  ];

  const currentTask = tasks.find(
    (task) => task.id === (taskId === "finish" ? "finish" : parseInt(taskId))
  );

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <sidebar className="fixed left-0 w-full h-full no-scrollbar border-r bg-white space-y-8 overflow-auto sm:w-80 dark:bg-slate-900">
                  <div className="sticky top-0 space-y-8 z-10 bg-white">
                    <div className="h-20 flex items-center px-4 border-b md:px-8">
                      <a className="flex-none">
                        <img
                          src="https://cdn.theforage.com/vinternships/companyassets/fgHAi6dLhpRsGKyyN/t4qyCvg9x8dHJ5sEh/1661389077029/hpe%20colour%20logo.png"
                          width={140}
                          className="mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="text-[0.9rem] space-y-6">
                    <section className="text-gray-600 body-font pb-10">
                      <div className="container px-3 py-4 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                          <div className="pb-24">
                            {tasks.map((task, index) => (
                              <div
                                key={task.id}
                                className={`flex relative cursor-pointer ${
                                  task.isFinish ? "" : "pb-6"
                                }`}
                                onClick={() =>
                                  navigate(
                                    `/applicant_dashboard/task/${task.id}/section/1`
                                  )
                                }
                              >
                                {!task.isFinish && (
                                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div
                                      className={`h-full w-1 ${
                                        index === 0
                                          ? "bg-indigo-400"
                                          : "bg-gray-200"
                                      } pointer-events-none`}
                                    ></div>
                                  </div>
                                )}
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
                                  {task.isFinish ? (
                                    <svg
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                      <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                  ) : (
                                    index + 1
                                  )}
                                </div>
                                <div className="flex-grow pl-4">
                                  <h2 className="font-bold title-font text-sm dark:text-slate-300 text-slate-700 mb-1 tracking-wider">
                                    {task.title}
                                  </h2>
                                  <p className="leading-relaxed dark:text-slate-400">
                                    {task.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </sidebar>
              </div>
              <div className="md:flex-grow">
                <header>
                  <div className="mx-auto max-w-screen-lg px-4 sm:px-6 sm:py-2.5 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="text-center sm:text-left">
                        <p className="mt-1.5 text-sm text-gray-500 dark:text-slate-400">
                          {currentTask &&
                            `${
                              currentTask.title
                            }: ${currentTask.description.substring(0, 50)}...`}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <Pagination
                          defaultCurrent={1}
                          total={50}
                          onChange={(page) => handlePageChange(taskId, page)}
                        />
                        <Flex align="center" wrap gap={30}>
                          <Progress type="circle" percent={50} size="small" />
                        </Flex>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="border-b border-gray-200"></div>
                <Outlet />

                <div className="fixed bottom-0 right-5 flex justify-end my-5">
                  <button className="px-8 py-2 text-base font-bold text-center text-indigo-500">
                    Back
                  </button>
                  <button className="ml-2 px-8 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Task;
