import { Link } from "react-router-dom";
import Achievement_list_component from "./achievement_list_component";
import Task_list_component from "./task_list_component";

export default () => {
  return (
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
        <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 p-4 text-gray-900">
          <h2 class="font-bold dark:text-slate-300">Software Engineering</h2>

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
          <Task_list_component />

          <Achievement_list_component />
        </div>
        <Link
          to="/task"
          class="ml-14 inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-14 py-3 text-white active:text-black"
        >
          <span class="text-sm font-medium"> Continue </span>
        </Link>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-slate-800">
          <h2 class="font-bold dark:text-slate-300">Artificial Intelligence</h2>

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
          <Task_list_component />

          <Achievement_list_component />
        </div>
        <Link
          to="/task"
          class="ml-14 inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-14 py-3 text-white active:text-black"
        >
          <span class="text-sm font-medium"> Continue </span>
        </Link>
      </details>
    </div>
  );
};
