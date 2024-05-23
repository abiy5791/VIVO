import PostArticleCardComponent from "../post_article_card_component";

const tasksByCategory = [
  {
    category: "Software Engineering",
    tasks: [
      {
        taskTitle: "Task 1: Interface with a stock price data feed",
        taskDesc:
          "Interface with a stock price data feed and set up your system for analysis of the data",
        taskLink: "https://github.com/abiy5791/VIVO",
      },
    ],
  },
];
function SubmittedTaskDetails() {
  return (
    <>
      <div>
        <div className="max-w-lg">
          <h1 className="text-slate-500 text-center text-2xl m-8 font-extrabold sm:text-3xl">
            Submitted Tasks Details
          </h1>
        </div>
        <div>
          <PostArticleCardComponent
            title={"Job details"}
            sub_title={"Publish my android App to consoles"}
            postedAt={"Posted May15,2024"}
            description={
              "Hello, my name is Alex and I am looking for a developer who can help me in my project. If you are interested, I will send you the details - feel free to apply for my vacancy."
            }
            time={"48:32 minutes"}
            expertise={["Andoid", "Mobile App", "Flutter"]}
            level={"Hard"}
            price={"200$"}
          />
          <div className="flex m-8 rounded-md bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Applicant Name</dt>
                <dd className="text-gray-700 sm:col-span-2">Abiy Teklu</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Age</dt>
                <dd className="text-gray-700 sm:col-span-2">23</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Gender</dt>
                <dd className="text-gray-700 sm:col-span-2">Male</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Cover Letter</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  I am writing to enquire if you have any vacancies in your
                  company. I enclose my CV for your information. As you can see,
                  I have had extensive vacation work experience in office
                  environments, the retail sector and service industries, giving
                  me varied skills and the ability to work with many different
                  types of people.
                </dd>
              </div>
            </dl>
          </div>

          {/*Submitted Tasks*/}
          <div class="mx-auto mt-10 w-4/5">
            {tasksByCategory.map((categoryObj, index) => (
              <details
                key={index}
                class="group [&_summary::-webkit-details-marker]:hidden mb-2"
              >
                <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 p-4 text-gray-900">
                  <h2 class="font-bold dark:text-slate-300">View Task</h2>

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

                <div class="grid grid-cols-1 px-10">
                  {/*Task List*/}
                  <section className="bg-white dark:bg-slate-900">
                    <div className="container px-4 py-8 mx-auto space-y-8 lg:max-w-3xl">
                      <h2 className="text-2xl font-bold md:text-3xl">Task</h2>
                      <div className="space-y-8">
                        <div>
                          <ul className="space-y-4">
                            {categoryObj.tasks.map((task, taskIndex) => (
                              <li
                                key={taskIndex}
                                className="space-y-1 bg-slate-100 p-2 rounded-md dark:bg-slate-700"
                              >
                                <div className="flex items-center space-x-2">
                                  <h4 className="ml-7 font-medium">
                                    {task.taskTitle}
                                  </h4>
                                </div>
                                <p className="ml-7 dark:text-gray-400">
                                  {task.taskDesc}
                                </p>
                                <p className="text-center">
                                  View Project
                                  <p className="text-blue-600 hover:underline cursor-pointer sm:col-span-2 overflow-hidden">
                                    {task.taskLink}
                                  </p>
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </details>
            ))}
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-2 gap-10 my-5">
            <div>
              <label
                htmlFor="Skill Learned"
                className="block text-sm font-medium text-gray-700"
              >
                Skill Learned
              </label>

              <input
                type="text"
                id="SkillLearned"
                name="SkillLearned"
                placeholder="Problem Solving"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label
                htmlFor="Proficiency Level"
                className="block text-sm font-medium text-gray-700"
              >
                Proficiency Level
              </label>

              <select
                name="proficiencylevel"
                id="proficiencylevel"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                onChange={(e) => handleChange(e)}
              >
                <option value="E">Excellent</option>
                <option value="V">Very Good</option>
                <option value="S">Satisfactory</option>
                <option value="P">Poor</option>
              </select>
            </div>
          </div>
          <label for="message" className="font-medium mb-2 text-slate-600">
            Comment
          </label>

          <textarea
            class="w-full rounded-lg border-gray-400 p-3 text-sm placeholder-gray-400"
            placeholder="Message"
            rows="4"
            id="message"
          ></textarea>
        </div>

        <div class="flex justify-center w-full max-w-2xl gap-5 mx-auto m-10">
          <div class="mt-3 rounded-lg sm:mt-0">
            <button class="px-5 py-4 text-base font-semibold text-center text-slate-700 transition duration-500 ease-in-out transform bg-green-300 lg:px-10 rounded-lg hover:bg-greem-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Evaluate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SubmittedTaskDetails;
