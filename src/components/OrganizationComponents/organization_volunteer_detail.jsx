import { useMemo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import LoadingIndicator from "../loading_indicator";

export default () => {
  const location = useLocation();
  const post = useMemo(() => location.state || {}, [location.state]);
  const [tasks, setTasks] = useState();

  const { id } = post;
  console.log(id);

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const res = await axios.get(`posts/${id}/tasks`);
          console.log(res);
          setTasks(res.data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };
      fetchTask();
    } else {
      console.error("Post ID is missing");
    }
  }, [id]);
  console.log(tasks);

  if (!id) {
    return <LoadingIndicator />;
  }

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto bg-slate-50 p-6 rounded-xl">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src={
                post.image
                  ? post.image
                  : "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:pl-8 sm:py-8 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <section className="w-full mx-auto px-4 md:px-8">
                <ul className="space-y-6">
                  <li className="p-5 rounded-md shadow-sm">
                    <a href={""}>
                      <div>
                        <div className="justify-between sm:flex">
                          <div className="flex-1">
                            <h3 className="text-xl font-medium text-slate-600">
                              {post.title}
                            </h3>
                            <p className="text-gray-500 mt-2 pr-2">
                              {post.description}
                            </p>
                          </div>
                          <div className="mt-10">
                            <span className="flex items-center text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {post.created}
                            </span>
                            <span className="flex items-center text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {""}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                          <span className="flex items-center text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            {post.type}
                          </span>
                          <span className="flex items-center text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {"Remote"}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="dark:bg-slate-900">
                <div className="container mb-5 rounded-lg  px-8 py-8 mx-auto space-y-8 lg:max-w-3xl">
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Tasks in this programs
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <ul className="space-y-4">
                        {tasks.map((task, idx) => (
                          <li
                            key={task.id}
                            className="space-y-1 bg-slate-100 p-2 rounded-md dark:bg-slate-700"
                          >
                            <div className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current text-violet-600"
                              >
                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                              </svg>
                              <h4 className="font-medium">
                                Task {idx}: {task.title}
                              </h4>
                            </div>
                            <p className="ml-7 dark:text-gray-400">
                              Interface with a stock price data feed and set up
                              your system for analysis of the data
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="inline-flex rounded-lg gap-3">
            <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm bg-white shadow-xl text-green-500 hover:text-green-700 focus:relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-red-500 hover:text-red-700 shadow-xl focus:relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
