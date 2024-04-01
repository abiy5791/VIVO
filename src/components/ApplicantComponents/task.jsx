import Landing_page_navbar from "../LandingPageComponents/landing_page_navbar";

export default () => {
  return (
    <>
      <Landing_page_navbar />
      <nav className="fixed left-0 w-full h-full no-scrollbar border-r bg-white space-y-8 overflow-auto sm:w-80 dark:bg-slate-900">
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
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
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
                        Vice migas literally kitsch +1 pok pok. Truffaut hot
                        chicken slow-carb health goth, vape typewriter.
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
                        Coloring book nar whal glossier master cleanse umami.
                        Salvia +1 master cleanse blog taiyaki.
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
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
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
                        Pitchfork ugh tattooed scenester echo park gastropub
                        whatever cold-pressed retro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};
