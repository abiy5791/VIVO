function TaskSection1() {
  return (
    <>
      <section>
        <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex flex-col w-full max-w-4xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto mb-5">
              <h2 className="font-medium text-2xl text-left dark:text-slate-300">
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
                What you&apos;ll learn
              </h2>

              <ul className="list-disc dark:text-slate-400">
                <li>
                  Meet your client WorldWide Brewing Co. who are interested in
                  expanding their operations into Asia through M&A
                </li>
                <li>
                  How to select ideal M&A targets from strategic, financial and
                  structural perspectives
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
                What you&apos;ll do
              </h2>

              <ul className="list-disc dark:text-slate-400">
                <li>
                  Email your Managing Director sharing your perspective about
                  which M&A targets the client should explore further
                </li>
              </ul>
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
    </>
  );
}
export default TaskSection1;
