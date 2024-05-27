export default () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-12 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Project Management
            </h2> */}
            <h1 class="text-slate-600 dark:text-slate-400 text-xl title-font font-medium mb-4">
              Knowledge and experience to achieve specific project.
            </h1>
            <div class="flex mb-4">
              <a class="flex-grow cursor-pointer text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
              <a class="flex-grow cursor-pointer border-b-2 border-gray-300 py-2 text-lg px-1">
                Requirments
              </a>
            </div>
            <p class="leading-relaxed mb-4 dark:text-slate-500">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div class="flex border-t border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Type</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                Internship
              </span>
            </div>
            <div class="flex border-t border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Cateogry</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                Development
              </span>
            </div>
            <div class="flex border-t border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Level</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                Entry Level
              </span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Date</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                {new Date().toDateString()}
              </span>
            </div>
            <div class="grid grid-cols-2">
              <span class="title-font font-medium text-2xl text-slate-500 dark:text-slate-400">
                Free
              </span>
              <div className="inline-flex rounded-lg gap-3">
                <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm bg-white shadow-xl text-green-500 hover:text-green-700 focus:relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Edit
                </button>
                <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-red-500 hover:text-red-700 shadow-xl focus:relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2dyYW1taW5nfGVufDB8fDB8fHww"
          />
        </div>
      </div>
    </section>
  );
};
