import Landing_page_navbar from "../LandingPageComponents/landing_page_navbar";

export default () => {
  return (
    <>
      <Landing_page_navbar />

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
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
                    <section class="text-gray-600 body-font">
                      <div class="container px-3 py-4 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap w-full">
                          <div class="pb-24">
                            <div class="flex relative pb-6">
                              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-indigo-400 pointer-events-none"></div>
                              </div>
                              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
                                1
                              </div>
                              <div class="flex-grow pl-4">
                                <h2 class="font-bold title-font text-sm dark:text-slate-300 text-slate-700 mb-1 tracking-wider">
                                  Task 1
                                </h2>
                                <p class="leading-relaxed dark:text-slate-400">
                                  VHS cornhole pop-up, try-hard 8-bit iceland
                                  helvetica. Kinfolk bespoke try-hard cliche
                                  palo santo offal.
                                </p>
                              </div>
                            </div>
                            <div class="flex relative pb-6">
                              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
                                2
                              </div>
                              <div class="flex-grow pl-4">
                                <h2 class="font-bold title-font dark:text-slate-300 text-sm text-slate-700 mb-1 tracking-wider">
                                  Task 2
                                </h2>
                                <p class="leading-relaxed dark:text-slate-400">
                                  Vice migas literally kitsch +1 pok pok.
                                  Truffaut hot chicken slow-carb health goth,
                                  vape typewriter.
                                </p>
                              </div>
                            </div>
                            <div class="flex relative pb-6">
                              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
                                3
                              </div>
                              <div class="flex-grow pl-4">
                                <h2 class="font-bold title-font text-sm dark:text-slate-300 text-slate-700 mb-1 tracking-wider">
                                  Task 3
                                </h2>
                                <p class="leading-relaxed dark:text-slate-400">
                                  Coloring book nar whal glossier master cleanse
                                  umami. Salvia +1 master cleanse blog taiyaki.
                                </p>
                              </div>
                            </div>
                            <div class="flex relative pb-6">
                              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
                                4
                              </div>
                              <div class="flex-grow pl-4">
                                <h2 class="font-bold title-font text-sm dark:text-slate-300 text-slate-700 mb-1 tracking-wider">
                                  Task 4
                                </h2>
                                <p class="leading-relaxed dark:text-slate-400">
                                  VHS cornhole pop-up, try-hard 8-bit iceland
                                  helvetica. Kinfolk bespoke try-hard cliche
                                  palo santo offal.
                                </p>
                              </div>
                            </div>
                            <div class="flex relative">
                              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative">
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
                                <h2 class="font-bold title-font dark:text-slate-300 text-sm text-slate-700 mb-1 tracking-wider">
                                  FINISH
                                </h2>
                                <p class="leading-relaxed dark:text-slate-400">
                                  Pitchfork ugh tattooed scenester echo park
                                  gastropub whatever cold-pressed retro.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </sidebar>
              </div>
              <div class="md:flex-grow">
                <header>
                  <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="text-center sm:text-left">
                        <p className="mt-1.5 text-sm text-gray-500 dark:text-slate-400">
                          Task 1: Find some M&A targets
                        </p>
                      </div>

                      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <ol className="flex justify-center gap-1 text-xs font-medium">
                          <li>
                            <a
                              href="#"
                              className="inline-flex size-8 items-center dark:bg-slate-700 dark:border-none dark:text-slate-200 justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                              <span className="sr-only">Prev Page</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block size-8 rounded border dark:bg-slate-700 dark:border-none dark:text-slate-200 border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                              1
                            </a>
                          </li>

                          <li className="block size-8 rounded dark:border-none dark:text-slate-200 border-blue-600 bg-blue-600 text-center leading-8 text-white">
                            2
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block size-8 rounded border dark:bg-slate-700 dark:border-none dark:text-slate-200 border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                              3
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block size-8 rounded border dark:bg-slate-700 dark:border-none dark:text-slate-200 border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                              4
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="block size-8 rounded border dark:bg-slate-700 dark:border-none dark:text-slate-200 border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                              5
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="inline-flex size-8 items-center justify-center dark:bg-slate-700 dark:border-none dark:text-slate-200 rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                              <span className="sr-only">Next Page</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="flex justify-center">
                  <span id="ProgressLabel" className="sr-only">
                    Loading
                  </span>

                  <span
                    role="progressbar"
                    aria-labelledby="ProgressLabel"
                    aria-valuenow="75"
                    className="relative block w-1/3 rounded-full bg-gray-200"
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                      <span className="font-bold text-white"> 75% </span>
                    </span>

                    <span className="w-3/4 block h-4 rounded-full bg-indigo-600 text-center"></span>
                  </span>
                </div>
                <section>
                  <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="flex flex-col w-full max-w-4xl mx-auto prose text-left prose-blue">
                      <div class="w-full mx-auto mb-5">
                        <h2 className="font-bold text-2xl text-left dark:text-slate-300">
                          Task Overview
                        </h2>
                      </div>
                    </div>
                    <div class="flex flex-col items-center mx-auto border-b py-4 border-gray-200 max-w-4xl sm:flex-row">
                      <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-indigo-400 rounded-full bg-gray-50 sm:mr-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="5" r="3"></circle>
                          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                      </div>
                      <div class="py-2 flex-grow prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2 className="font-medium text-lg text-indigo-500 mb-2">
                          What you'll learn
                        </h2>

                        <ul className="list-disc dark:text-slate-400">
                          <li>
                            Meet your client WorldWide Brewing Co. who are
                            interested in expanding their operations into Asia
                            through M&A
                          </li>
                          <li>
                            How to select ideal M&A targets from strategic,
                            financial and structural perspectives
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="flex flex-col items-center mx-auto border-b py-4 border-gray-200 max-w-4xl sm:flex-row">
                      <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-indigo-400 rounded-full bg-gray-50 sm:mr-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-12 h-12"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div class="py-2 flex-grow prose text-center sm:text-left sm:mt-0 prose-md">
                        <h2 className="font-medium text-lg text-indigo-500 mb-2">
                          What you'll do
                        </h2>

                        <ul className="list-disc dark:text-slate-400">
                          <li>
                            Email your Managing Director sharing your
                            perspective about which M&A targets the client
                            should explore further
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div class=" flex flex-col items-center px-5 py-8 mx-auto">
                    <div class="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl">
                      <div class="w-full mx-auto">
                        <h2 className="text-2xl font-semibold text-slate-700 mb-2 dark:text-slate-400">
                          Here's some background information
                        </h2>
                        <p className="dark:text-slate-500">
                          One of the Managing Directors in your team Anna, has a
                          relationship with the Carlos Johnson, the CEO of
                          WorldWide Brewing Co. When they caught up for coffee
                          today, Carlos expressed interest in expanding their
                          operations into Asia through M&A.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class=" items-center w-full px-5">
                    <div class="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                      <div class="relative justify-center lg:px-4">
                        <div class="lg:grid lg:grid-cols-2">
                          <div class="p-8">
                            <h1 class="font-bold dark:text-slate-400">
                              Here is your task
                            </h1>
                            <p className="dark:text-slate-500">
                              Make sure you’ve read through the transcript of
                              our call with the Hong Kong Director as well as my
                              notes from the call that provide an overview of
                              the targets. You can find these attached below.
                            </p>
                            <a
                              href="#"
                              class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                              title="read more"
                            >
                              Read More »
                            </a>
                          </div>
                          <div class="p-8">
                            <h1 class="font-bold dark:text-slate-400">Note</h1>
                            <p className="dark:text-slate-500">
                              when deciding if a target is appropriate to share
                              with Carlos, you can consider the following
                              elements:
                              <ul className="list-disc">
                                <li>
                                  Does this make sense from a strategic and
                                  financial perspective - consider which
                                  acquisitions may be a good fit for your client
                                </li>
                                <li>
                                  Given the shareholder structures of the
                                  targets, consider the simplicity/feasibility
                                  of each option
                                </li>
                              </ul>
                            </p>
                            <a
                              href="#"
                              class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                              title="read more"
                            >
                              Read More »
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="text-center py-5 mb-10">
                  <h1 className="text-indigo-500 font-bold text-2xl mb-2">
                    Message from JPMorgan Chase
                  </h1>
                  <video
                    controls
                    class="w-1/2 rounded-lg mx-auto "
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    type="video/mp4"
                  />
                  <h5 className="text-slate-800 dark:text-slate-300">
                    Hear from a team member at JPMorgan Chase introduce the task
                  </h5>
                </div>
                <div className="flex justify-end">
                  <button class="my-7 right-0 px-8 py-2 text-base font-bold text-center text-indigo-500">
                    Back
                  </button>
                  <button class="my-7 ml-2 right-0 px-8 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
};
