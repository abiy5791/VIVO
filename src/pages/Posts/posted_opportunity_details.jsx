import { Link } from "react-router-dom";
import Review_component from "./review_component";

export default () => {
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 blur-xl h-[300px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>
        <div className="relative">
          <section>
            <div className="max-w-screen-xl mx-auto px-4 py-9 gap-12 dark:text-slate-400 text-gray-600 overflow-hidden md:px-8 md:flex">
              <div className="flex-none space-y-5 max-w-xl">
                <a
                  href="javascript:void(0)"
                  className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
                >
                  <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                    News
                  </span>
                  <p className="flex items-center">
                    There are new opportunities here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                </a>
                <h1 className="text-2xl dark:text-slate-200 text-gray-800 font-extrabold sm:text-5xl">
                  Quantitative Research
                </h1>
                <p>Discover quantitative research at JPMorgan Chase & Co.</p>
                <div class="items-center justify-center grid grid-cols-3 divide-x divide-slate-400">
                  <p>Banking & Financial Services</p>
                  <p className="text-center">Free</p>
                  <p className="text-center">1200+ 5 Star Reviews</p>
                </div>

                <div className="flex items-center gap-x-3 sm:text-sm">
                  <Link
                    to="/task"
                    className="flex items-center justify-center gap-x-1 py-3 px-4 dark:bg-slate-700 dark:text-white text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
                  >
                    Start The Program
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                {/* Replace with your image */}
                <img
                  src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                  className="max-w-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="text-center mb-10">
            <h1 class="text-2xl dark:text-slate-300 text-gray-800 font-extrabold sm:text-3xl">
              Why complete our Job Simulation
            </h1>
            <p class="text-base leading-relaxed dark:text-slate-400 xl:w-2/4 lg:w-3/4 mx-auto">
              A risk-free way to experience work on the job with us at JPMorgan
              Chase & Co. Practice your skills with example tasks and build your
              confidence to ace your applications.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Self-paced 6-7 hours</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">No grades</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">No assessments</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Intermediate</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">No Interview</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 dark:bg-slate-700 dark:text-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Has Certificate!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mb-12">
          <h1 class="sm:text-3xl text-2xl font-light text-center title-font dark:text-slate-300 text-gray-900 mb-4">
            Welcome to our program!
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-slate-400">
            We are so excited to have you here. Quantitative Research (QR) is an
            expert quantitative modeling group at JPMorgan Chase, as well as a
            leader in financial engineering, data analytics, and portfolio
            management.
          </p>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container py-24 mx-auto justify-center flex flex-wrap">
          <div class="flex flex-wrap max-w-screen-xl justify-center">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <h2 className="text-2xl mb-5 font-bold md:text-3xl dark:text-slate-300">
                How it works
              </h2>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <p class="leading-relaxed dark:text-slate-400">
                    Complete tasks guided by pre-recorded videos and example
                    answers from our team at JPMorgan Chase & Co. No live
                    sessions, all self-paced.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <p class="leading-relaxed dark:text-slate-400">
                    Stand out in applications. Confidently answer interview
                    questions and explain why you’re a good fit for our team.
                  </p>
                </div>
              </div>

              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <p class="leading-relaxed dark:text-slate-400">
                    Earn a certificate and add it to your resume and LinkedIn as
                    an extra curricular activity.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg ml-12 md:mt-0 mt-12"
              src="https://img.freepik.com/premium-psd/simple-gradient-blue-modern-certificate-template_505928-437.jpg?size=626&ext=jpg"
              alt="step"
            />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section>
          <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-6xl">
            <div class="grid grid-cols-1">
              <div class="w-full max-w-lg mx-auto my-4 bg-white dark:bg-slate-800 shadow-xl rounded-xl">
                <div class="p-6 lg:text-center">
                  <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                    Info
                  </span>
                  <h4 class="dark:text-slate-300 mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                    Skills you will learn and practice
                  </h4>
                  <p class="mt-3 text-base leading-relaxed dark:text-slate-400 text-gray-500">
                    Programming,Data Analysis,Python,Derivatives,Critical
                    Thinking,Statistics &amp; Dynamic Programming.
                  </p>
                  <div class="flex justify-center gap-1 mt-6">
                    <svg
                      class="w-6 h-6 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-blueGray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-blueGray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark:bg-slate-900">
          <div className="container mb-5 rounded-lg  px-8 py-8 mx-auto space-y-8 lg:max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              Tasks in this programs
            </h2>
            <div className="space-y-8">
              <div>
                <ul className="space-y-4">
                  <li className="space-y-1 bg-slate-100 p-2 rounded-md dark:bg-slate-700">
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
                        Task 1: Interface with a stock price data feed
                      </h4>
                    </div>
                    <p className="ml-7 dark:text-gray-400">
                      Interface with a stock price data feed and set up your
                      system for analysis of the data
                    </p>
                  </li>
                  <li className="space-y-1">
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
                        Task 2: Use JPMorgan Chase & Co. frameworks and tools
                      </h4>
                    </div>
                    <p className="ml-7 dark:text-gray-400">
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam
                      debitis eligendi aspernatur mum.
                    </p>
                  </li>
                  <li className="space-y-1">
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
                        Task 3: Display data visually for traders
                      </h4>
                    </div>
                    <p className="ml-7 dark:text-gray-400">
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam
                      debitis eligendi aspernatur mum.
                    </p>
                  </li>
                  <li className="space-y-1">
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
                        Task 4: Bonus task: Open source contribution
                      </h4>
                    </div>
                    <p className="ml-7 dark:text-gray-400">
                      Illum hic placeat unde porro, cupiditate nesciunt? Numquam
                      debitis eligendi aspernatur mum.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Review_component />
    </>
  );
};
