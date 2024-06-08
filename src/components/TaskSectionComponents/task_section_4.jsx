import { Link } from "react-router-dom";

function TaskSection4() {
  const integrations = [
    {
      title: "Python3 guide",
      desc: "this webiste helps about installation and setup of Python3",
      link: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwibkqHhyMmGAxVMcfEDHf1QE2wQPAgJ",
      img: "https://cdn-icons-png.flaticon.com/512/718/718110.png",
    },
    {
      title: "Git-Book",
      desc: "This document helps to learn and make the task!",
      link: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwibkqHhyMmGAxVMcfEDHf1QE2wQPAgJ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4o0dWMlrqim-piujPhdwnAEDh8ZtrORnShyHGq8MddsGUs1xo4jAwMRi1fIXXlUe2mw&usqp=CAU",
    },
    {
      title: "Hosting",
      desc: "This blog post provides guidance on obtaining free hosting and offers related tips and advice.",
      link: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwibkqHhyMmGAxVMcfEDHf1QE2wQPAgJ",
      img: "https://cdn-icons-png.flaticon.com/512/718/718110.png",
    },
  ];
  return (
    <>
      <section>
        <div class=" flex flex-col items-center px-5 py-8 mx-auto">
          <div class="flex flex-col w-full prose text-left max-w-max lg:max-w-5xl">
            <div class="w-full mx-auto">
              <h2 className="text-2xl font-medium text-slate-700 mb-2 dark:text-slate-400">
                Here are some resources to help you
              </h2>

              <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-6 lg:gap-8">
                {integrations.map((item, idx) => (
                  <li className="border rounded-lg">
                    <div className="p-5">
                      <div className="space-y-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={item.img}
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                        <h4 className="text-gray-800 font-semibold">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>

                    <div className="py-5 px-4 border-t text-center">
                      <Link
                        to={item.link}
                        className="text-indigo-600 hover:text-indigo-500 text-sm font-medium inline-flex items-center"
                      >
                        Click to get the resource
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default TaskSection4;
