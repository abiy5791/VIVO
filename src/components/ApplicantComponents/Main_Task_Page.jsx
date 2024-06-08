import { Link } from "react-router-dom";

const tasksByCategory = [
  {
    category: "Software Engineering",
    tasks: [
      {
        taskTitle: "Task 1: Interface with a stock price data feed",
        taskDesc:
          "Interface with a stock price data feed and set up your system for analysis of the data",
      },
      {
        taskTitle: "Task 2: Use JPMorgan Chase & Co. frameworks and tools",
        taskDesc:
          " Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.",
      },
      {
        taskTitle: "Task 3: Display data visually for traders",
        taskDesc:
          "Illum hic placeat unde porro, cupiditate nesciunt? Numquam debitis eligendi aspernatur mum.",
      },
    ],
    achievements: [
      {
        title: "Application Dates, Locations and Eligibility Criteria",
        status: "Unlocked!",
      },
      {
        title: "Resume snippet",
        status: " Unlocked!",
      },
      {
        title: "Interview tip",
        status: "Unlocked!",
      },
      {
        title: "Certificate",
        status: "Unlocked!",
      },
    ],
  },
];

function MainTaskPage() {
  return (
    <div class="mx-auto px-4 mb-6 sm:px-6 lg:px-8">
      {tasksByCategory.map((categoryObj, index) => (
        <details
          key={index}
          class="group [&_summary::-webkit-details-marker]:hidden mb-2"
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 p-4 text-gray-900">
            <h2 class="font-bold dark:text-slate-300">
              {categoryObj.category}
            </h2>

            <svg
              class="w-5 h-5 shrink-0 transition duration-300 group-open:-rotate-180 dark:text-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <div class="grid grid-cols-1 md:grid-cols-2 px-10">
            {/*Task List*/}
            <section className="bg-white dark:bg-slate-900">
              <div className="container px-4 py-8 mx-auto space-y-8 lg:max-w-3xl">
                <h2 className="text-2xl font-bold md:text-3xl">Tasks</h2>
                <div className="space-y-8">
                  <div>
                    <ul className="space-y-4">
                      {categoryObj.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
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
                            <h4 className="font-medium">{task.taskTitle}</h4>
                          </div>
                          <p className="ml-7 dark:text-gray-400">
                            {task.taskDesc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*Achievement List*/}
            <section className="bg-white dark:bg-slate-900">
              <div className="container px-4 py-8 mx-auto space-y-8 lg:max-w-3xl">
                <h2 className="text-2xl font-bold md:text-3xl">Achievements</h2>
                <div className="space-y-8">
                  <div>
                    <ul className="space-y-4 bg-slate-100 p-4 rounded-md dark:bg-slate-700">
                      {categoryObj.achievements.map(
                        (achievement, achievementIndex) => (
                          <li key={achievementIndex} className="space-y-1">
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
                                {achievement.title}
                              </h4>
                            </div>
                            <p className="ml-7 dark:text-gray-400">
                              {achievement.status}
                            </p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Link
            to="task"
            class="ml-14 inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-14 py-3 text-white active:text-black"
          >
            <span class="text-sm font-medium"> Continue </span>
          </Link>
        </details>
      ))}
    </div>
  );
}
export default MainTaskPage;
