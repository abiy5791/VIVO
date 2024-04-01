export default () => {
  return (
    <>
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div class="text-center">
          <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">STEPS</p>
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-slate-300">
            Good Job{" "}
            <span class="text-indigo-600 dark:text-indigo-700">
              Abiy, Keep It Up!
            </span>
          </h3>
        </div>

        <div class="mt-20 mb-5">
          <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
            <li class=" bg-gray-100 p-5 pb-10 text-center dark:bg-slate-800">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 top-0 -mt-16">
                  <div class="flex items-center justify-center lg:h-18 lg:w-18 h-14 w-14 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
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
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="mt-2">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900 dark:text-slate-300">
                    Progress
                  </h4>
                </div>
              </div>
            </li>
            <li class=" bg-gray-100 p-5 pb-10 text-center dark:bg-slate-800">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 top-0 -mt-16">
                  <div class="flex items-center justify-center lg:h-18 lg:w-18 h-14 w-14 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
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
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="mt-2">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900 dark:text-slate-300">
                    Achievements
                  </h4>
                </div>
              </div>
            </li>
            <li class=" bg-gray-100 p-5 pb-10 text-center dark:bg-slate-800">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 top-0 -mt-16">
                  <div class="flex items-center justify-center lg:h-18 lg:w-18 h-14 w-14 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
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
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="mt-2">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900 dark:text-slate-300">
                    Apply
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
