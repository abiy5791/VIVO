export default () => {
  return (
    <section class="text-gray-600 body-font overflow-scroll">
      <div class="px-4 py-12 mx-auto max-w-9xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <h1 className="text-slate-500 text-center text-2xl mb-5 font-extrabold sm:text-3xl">
          Make a Post
        </h1>

        <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle w-full">
          <input
            type="text"
            className="border-slate-300 peer block min-h-[auto] w-full rounded"
            id="exampleFormControlInput5"
            placeholder="Enter Post Title"
            aria-label="Disabled input example"
            // disabled
          />

          <label
            for="uploadFile1"
            class="bg-white text-gray-500 font-semibold text-base mt-5 rounded max-w-xlg h-60 p-10 flex flex-col items-center justify-content cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
          >
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
            Upload image
            <input type="file" id="uploadFile1" class="hidden" />
            <p class="text-xs font-medium text-gray-400 mt-2">
              PNG, JPG SVG, WEBP, and GIF are Allowed.
            </p>
          </label>
          <div className="flex mt-5 justify-content items-center">
            <div className="mr-4">
              <label className="mr-3">Type</label>
              <select class="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium">
                <option value="VolunInternship">Internship</option>
                <option value="VolunteerWork">VolunteerWork</option>
              </select>
            </div>
            <div className="mr-4">
              <label className="mr-3">Level</label>
              <select class="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium">
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>
            <div>
              <label className="mr-3">Category</label>
              <select
                name="Post Type"
                id="CodeType7"
                class="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
              >
                <option value="Banking">Banking</option>
                <option value="Business">Business</option>
                <option value="Marketing">Marketing</option>
                <option value="Data">Data</option>
                <option value="Finance">Finance</option>
                <option value="Security">Security</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="fle-cols justify-content w-full mt-6">
            <label className="mb-10 mt-10">Requirements</label>
            <label
              for="Option1"
              class="flex cursor-pointer items-start gap-4 mb-4 mt-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
            >
              <div class="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  class="size-4 rounded border-gray-300"
                  id="Option1"
                />
              </div>

              <div>
                <strong class="font-medium text-gray-900">skills</strong>

                <p class="mt-1 text-pretty text-sm text-gray-700">
                  Specify whether you want to inquire about the applicant's
                  skills.
                </p>
              </div>
            </label>

            <label
              for="Option2"
              class="flex cursor-pointer items-start mb-4 gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
            >
              <div class="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  class="size-4 rounded border-gray-300"
                  id="Option2"
                />
              </div>

              <div>
                <strong class="font-medium text-gray-900"> availability</strong>

                <p class="mt-1 text-pretty text-sm text-gray-700">
                  Specify whether you want to inquire about the applicant's
                  availability for the position.
                </p>
              </div>
            </label>

            <label
              for="Option3"
              class="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
            >
              <div class="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  class="size-4 rounded border-gray-300"
                  id="Option3"
                />
              </div>

              <div>
                <strong class="text-pretty font-medium text-gray-900">
                  cover_letter
                </strong>

                <p class="mt-1 text-pretty text-sm text-gray-700">
                  Specify whether you want to inquire about the applicant's
                  motivation for choosing your company.
                </p>
              </div>
            </label>
          </div>

          <div class="relative mt-10 mb-3" data-twe-input-wrapper-init>
            <div>
              <label
                for="OrderNotes"
                class="block text-sm font-medium text-gray-700"
              >
                Descriptions
              </label>

              <textarea
                id="OrderNotes"
                class="mt-2 w-full h-40 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                rows="4"
                placeholder="Enter the descriptions"
              ></textarea>
            </div>
          </div>

          <div class="z-50 mt-6 rounded-lg">
            <a
              type="highlight"
              class="items-center w-1/3 mx-auto mt-10 block px-10 py-3.5 text-base font-medium text-center cursor-pointer text-slate-100 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-indigo-500"
            >
              Post
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
