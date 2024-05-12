export default () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-12 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Project Management
            </h2>
            <h1 class="text-gray-900 dark:text-slate-400 text-3xl title-font font-medium mb-4">
              Knowledge and experience to achieve specific project.
            </h1>
            <div class="flex mb-4">
              <a class="flex-grow cursor-pointer text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
              <a class="flex-grow cursor-pointer border-b-2 border-gray-300 py-2 text-lg px-1">
                Reviews
              </a>
              <a class="flex-grow cursor-pointer border-b-2 border-gray-300 py-2 text-lg px-1">
                Details
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
              <span class="text-gray-500">Location</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                Addis Ababa, Ethiopia
              </span>
            </div>
            <div class="flex border-t border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Price</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                Free
              </span>
            </div>
            <div class="flex border-t border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Company</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                Ethio Techs
              </span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 dark:border-gray-600 py-2">
              <span class="text-gray-500">Date</span>
              <span class="ml-auto text-gray-900 dark:text-slate-400">
                {new Date().toDateString()}
              </span>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900 dark:text-slate-400">
                Free
              </span>
              <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Approve
              </button>
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
