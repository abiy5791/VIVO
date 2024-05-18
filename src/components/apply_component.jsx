import TagButtonComponent from "./Tag_button_component";
import PostArticleCardComponent from "./post_article_card_component";

const members = [
  {
    company_name: "Google",
    job_title: "Full stack engineer",
    job_description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    job_type: "Full-time",
    location: "Remotely",
    path: "javascript:void(0)",
  },
];

function ApplyComponent() {
  return (
    <>
      <section className="my-4 p-4 sm:p-6 lg:p-8 mx-auto">
        <div className="w-4/5 mx-auto px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="text-slate-500 text-2xl font-extrabold sm:text-5xl">
              Submit Application
            </h1>
          </div>
          <ul className="mt-8 divide-y space-y-3">
            {members.map((item, idx) => (
              <div className="rounded-md p-4">
                <li key={idx} className="px-4 py-5 duration-150 ">
                  <a href={item.path} className="space-y-3">
                    <div className="flex items-center gap-x-3">
                      <div>
                        <span className="block text-sm text-indigo-600 font-medium">
                          {item.company_name}
                        </span>
                        <h3 className="text-base text-gray-800 font-semibold mt-1">
                          {item.job_title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 sm:text-sm">
                      {item.job_description}
                    </p>
                    <div className="text-sm text-gray-600 flex items-center gap-6">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                            fill="#9CA3AF"
                          />
                          <path
                            d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                            fill="#9CA3AF"
                          />
                        </svg>
                        {item.job_type}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                            fill="#9CA3AF"
                          />
                        </svg>

                        {item.location}
                      </span>
                    </div>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gray-100 m-5"></span>
        </span>

        <article className="flex rounded-md bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto">
          <div className=" flex items-start sm:gap-8 pr-10">
            <div
              className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div className="flex items-center gap-1">
                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>

            <div>
              <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                Post
              </strong>

              <h3 className="mt-4 text-lg font-bold sm:text-xl">
                <a href="#" className="hover:underline">
                  Job details
                </a>
              </h3>

              <p className="mt-1 text-sm font-semibold text-gray-700">
                Publish my android App to consoles
              </p>
              <div className="flex items-center">
                <TagButtonComponent TagName={"Mobile App Development"} />

                <div className="text-center text-slate-400 p-2 px-5 mt-3">
                  <h1 className="font-medium text-sm">Posted May15,2024</h1>
                </div>
              </div>
              <div className="mt-6 leading-7 font-light">
                <h1>
                  Hello, my name is Alex and I am looking for a developer who
                  can help me in my project. If you are interested, I will send
                  you the details - feel free to apply for my vacancy.
                </h1>
              </div>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-xs font-medium">48:32 minutes</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Post{" "}
                  <a
                    href="#"
                    className="underline text-blue-500 hover:text-gray-700"
                  >
                    View job posting
                  </a>
                </p>
              </div>

              <span className="flex items-center">
                <span className="h-px flex-1 bg-gray-300 m-5"></span>
              </span>
              <div>
                <h1>Skills and expertise</h1>
                <div className="flex flex-wrap gap-3">
                  <TagButtonComponent TagName={"Andoid"} />
                  <TagButtonComponent TagName={"Mobile App Dev't"} />
                  <TagButtonComponent TagName={"Mobile"} />
                </div>
              </div>
            </div>
          </div>
          <div class="h-[280px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400"></div>
          <div className="p-3 w-1/4">
            <div className="flex items-center gap-2 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
              <div>
                <h3 className="font-semibold">Level</h3>
                <p className="text-sm">Medium</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
              <div>
                <h3 className="font-semibold">Fee</h3>
                <p className="text-sm">Free</p>
              </div>
            </div>
          </div>
        </article>
        {/*fill info div */}
        <div className="flex rounded-md mt-10 flex-wrap items-start gap-10 bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto">
          <h1 className="text-lg font-bold w-full">Fill Some Details</h1>
          <div class="group relative cursor-pointer border rounded-lg border-gray-400">
            <div class="flex items-center space-x-5 bg-transparent px-4">
              <a
                class="menu-hover my-2 py-2 text-base font-medium text-slate-600 lg:mx-4"
                onClick=""
              >
                Gender
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div class="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Male
              </a>

              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Female
              </a>
            </div>
          </div>
          <div className="mx-auto">
            <label
              for="Age"
              class="relative block rounded-md border border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-1"
            >
              <input
                type="number"
                id="Age"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Age"
              />

              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs font-bold text-slate-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Age
              </span>
            </label>
            <label
              for="portfoliolink"
              class="relative block rounded-md my-4 border border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 p-1"
            >
              <input
                type="text"
                id="portfoliolink"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="portfoliolink"
              />

              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs font-bold text-slate-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Portfolio Link
              </span>
            </label>
            <label
              for="uploadFile1"
              class="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-36 p-5 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed mx-auto font-[sans-serif]"
            >
              Upload Your Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-11 mb-2 fill-gray-500"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                  data-original="#000000"
                />
                <path
                  d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                  data-original="#000000"
                />
              </svg>
              Upload file
              <input type="file" id="uploadFile1" class="hidden" />
              <p class="text-xs font-medium text-slate-600 mt-2">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
            </label>
          </div>

          <div className="w-1/2 mx-auto">
            <label for="message" className="font-medium mb-2 text-slate-600">
              Cover letter
            </label>

            <textarea
              class="w-full rounded-lg border-gray-400 p-3 text-sm placeholder-gray-400"
              placeholder="Message"
              rows="4"
              id="message"
            ></textarea>
          </div>
        </div>
        {/*submit button */}
        <div class="z-50 mt-6 rounded-lg">
          <a
            type="highlight"
            class="items-center w-1/3 mx-auto mt-10 block px-10 py-3.5 text-base font-medium text-center cursor-pointer text-slate-100 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-indigo-500"
          >
            Submit Application
          </a>
        </div>
      </section>
    </>
  );
}
export default ApplyComponent;
