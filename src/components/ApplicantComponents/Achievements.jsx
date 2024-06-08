import { Link } from "react-router-dom";

function Achievements() {
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
  return (
    <div class="mx-auto  px-2 sm:px-6 lg:px-8">
      <div class="w-1/2 mx-auto mb-10 mt-5 flex justify-around items-center ">
        <div class="flex items-center text-center flex-col text-indigo-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke="currentColor"
            class="size-10 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <h2>Certificate</h2>
        </div>
        <div class="flex items-center text-center flex-col text-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            class="size-10 "
          >
            <path d="M46 4A14 14 0 0 0 32 18V28H10A6 6 0 0 0 4 34V54A6 6 0 0 0 10 60H38A6 6 0 0 0 44 54V34A6 6 0 0 0 38 28V18A8 8 0 1 1 54 18V23A3 3 0 0 0 60 23V18A14 14 0 0 0 46 4Z" />
          </svg>
          <h2>jop prep tips</h2>
        </div>
        <div class="flex items-center text-center flex-col text-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
          <h2>resume snippets</h2>
        </div>
        <div class="flex items-center text-center flex-col text-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
            />
          </svg>
          <h2>interview tips</h2>
        </div>
        <div class="flex items-center text-center flex-col text-indigo-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-10 "
          >
            <path
              fill-rule="evenodd"
              d="M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              clip-rule="evenodd"
            />
            <path d="M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z" />
          </svg>

          <h2>skills</h2>
        </div>
      </div>
      <div class="bg-slate-100 w-full p-5   ">
        <h1 class="dark:text-slate-250 mb-3 text-3xl ">Achievements</h1>
        <div class="line"></div>
        {tasksByCategory.map((categoryObj, index) => (
          <details
            key={index}
            class="group [&_summary::-webkit-details-marker]:hidden mb-2"
          >
            <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 p-4 text-gray-900">
              <h2 class="font-bold dark:text-slate-250">
                {categoryObj.category}
              </h2>
              <div class="flex cursor-pointer items-center mr-10  ">
                <h2 class="bg-blue-200 text-blue-600 p-0.6 px-6 rounded-2xl border">
                  In progress
                </h2>
                <svg
                  class="w-5 h-5 shrink-0 transition duration-300 ml-5 group-open:-rotate-180 dark:text-slate-300"
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
              </div>
            </summary>
            <div className="flex flex-col my-5">
              <h3 class="ml-10 mb-5">showcase yourself</h3>
              <div class="grid gap-5 grid-cols-1 md:grid-cols-2 px-10">
                <Link
                  to="task"
                  class="flex items-center justify-between gap-2 border-b border-l border-r border-t border-indigo-500 border-dashed px-5 py-3 text-white active:text-black"
                >
                  <div class="flex text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                    <h3 class="text-black">Certificate</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="black"
                    class="size-5 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="task"
                  class=" flex items-center justify-between gap-2 border-b border-l border-r border-t border-indigo-500 border-dashed px-5 py-3 text-white active:text-black"
                >
                  <div class="flex text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-7"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        clip-rule="evenodd"
                      />
                      <path d="M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z" />
                    </svg>
                    <h3 class="text-black">skills</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="black"
                    class="size-5 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div class="flex flex-col my-5">
              <h3 class="ml-10 mb-5">prep for the job</h3>
              <div class="grid gap-5 grid-cols-1 md:grid-cols-2 px-10">
                <Link
                  to="task"
                  class="flex items-center justify-between gap-2 border-b border-l border-r border-t border-indigo-500 border-dashed px-5 py-3 text-white active:text-black"
                >
                  <div class="flex text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      class="size-7 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    <h3 class="text-black">resume snippets</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="black"
                    class="size-5 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="task"
                  class="flex items-center  justify-between gap-2 border-b border-l border-r border-t border-indigo-500 border-dashed px-5 py-3 text-white active:text-black"
                >
                  <div class="flex text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-7"
                    >
                      <path d="M10.618 10.26c-.361.223-.618.598-.618 1.022 0 .226-.142.43-.36.49A6.006 6.006 0 0 1 8 12c-.569 0-1.12-.08-1.64-.227a.504.504 0 0 1-.36-.491c0-.424-.257-.799-.618-1.021a5 5 0 1 1 5.235 0ZM6.867 13.415a.75.75 0 1 0-.225 1.483 9.065 9.065 0 0 0 2.716 0 .75.75 0 1 0-.225-1.483 7.563 7.563 0 0 1-2.266 0Z" />
                    </svg>

                    <h3 class="text-black">interview tips</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="black"
                    class="size-5 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="task"
                  class="flex items-center justify-between gap-2 border-b border-l border-r border-t border-indigo-500 border-dashed px-5 py-3 text-white active:text-black"
                >
                  <div class="flex text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-7"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <h3 class="text-black">comment</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="black"
                    class="size-5 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
export default Achievements;
