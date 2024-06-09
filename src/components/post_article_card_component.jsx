import TagButtonComponent from "./Tag_button_component";

function PostArticleCardComponent({ post }) {
  const skillsArray = post.skills_gained
    ? post.skills_gained.split(",").map((skill) => skill.trim())
    : [];

  return (
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
              {post.title}
            </a>
          </h3>

          {/* <p className="mt-1 text-sm font-semibold text-gray-700">
            {sub_title}
          </p> */}
          <div className="flex items-center">
            <TagButtonComponent TagName={"Mobile App Development"} />
          </div>
          <div className="mt-6 leading-7 font-light">
            <h1>{post.description}</h1>
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

              <p className="text-xs font-medium">{post.created}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>
          </div>

          <span className="flex items-center">
            <span className="h-px flex-1 bg-gray-300 m-5"></span>
          </span>
          <div>
            <h1>Skills and expertise</h1>
            <div className="flex flex-wrap gap-3">
              {skillsArray.map((expert) => (
                <TagButtonComponent key={expert.id} TagName={expert} />
              ))}
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
            <p className="text-sm">{post.level}</p>
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
            {post.is_paid ? (
              <>
                <h3 className="font-semibold">Fee</h3>
                <p className="text-sm">{post.price}</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
export default PostArticleCardComponent;
