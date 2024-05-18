import PostArticleCardComponent from "./post_article_card_component";

function ApplicationDetails() {
  return (
    <>
      <div>
        <div className="max-w-lg">
          <h1 className="text-slate-500 text-center text-2xl m-8 font-extrabold sm:text-3xl">
            Application Details
          </h1>
        </div>
        <div>
          <PostArticleCardComponent
            title={"Job details"}
            sub_title={"Publish my android App to consoles"}
            postedAt={"Posted May15,2024"}
            description={
              "Hello, my name is Alex and I am looking for a developer who can help me in my project. If you are interested, I will send you the details - feel free to apply for my vacancy."
            }
            time={"48:32 minutes"}
            expertise={["Andoid", "Mobile App", "Flutter"]}
            level={"Hard"}
            price={"200$"}
          />

          <div className="flex m-8 rounded-md bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Applicant Name</dt>
                <dd className="text-gray-700 sm:col-span-2">Abiy Teklu</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Age</dt>
                <dd className="text-gray-700 sm:col-span-2">23</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Gender</dt>
                <dd className="text-gray-700 sm:col-span-2">Male</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Portfolio Link</dt>
                <dd className="text-blue-600 hover:underline cursor-pointer sm:col-span-2">
                  http://bit.ly/abiyteklu
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Resume</dt>
                <dd className="text-blue-600 hover:underline cursor-pointer sm:col-span-2">
                  Download Resume
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Cover Letter</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  I am writing to enquire if you have any vacancies in your
                  company. I enclose my CV for your information. As you can see,
                  I have had extensive vacation work experience in office
                  environments, the retail sector and service industries, giving
                  me varied skills and the ability to work with many different
                  types of people.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex justify-center w-full max-w-2xl gap-5 mx-auto m-10">
          <div class="mt-3 rounded-lg sm:mt-0">
            <button class="px-5 py-4 text-base font-medium text-center text-slate-700 transition duration-500 ease-in-out transform bg-green-300 lg:px-10 rounded-lg hover:bg-greem-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Accept
            </button>
          </div>
          <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-red-600 transition duration-500 ease-in-out transform border-2 border-slate-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationDetails;
