import tele from "../../assets/tele.png";
import astu from "../../assets/astu.png";
import zala from "../../assets/zala.png";
const members = [
  {
    company_icon: tele,
    company_name: "Ethiotelecom",
    job_title: "AI Innovations Internship: Dive into the Future of Technology!",
    job_description:
      "Join our team as an AI Innovations Intern and immerse yourself in the forefront of technology. Gain hands-on experience in machine learning, natural language processing, and computer vision. Work alongside industry experts to develop innovative solutions that shape the future. Don't miss this opportunity to explore the limitless possibilities of artificial intelligence!",
    job_type: "Full-time",
    location: "Remotely",
    path: "javascript:void(0)",
  },
  {
    company_icon: astu,
    company_name: "Adama science and Technology University",
    job_title: "Data Science Internship: Unlock Insights from Big Data",
    job_description:
      "Unlock the power of data as a Data Science Intern. Dive into the world of big data analytics, machine learning, and predictive modeling. Extract actionable insights from complex datasets and drive data-driven decision-making. Work with state-of-the-art tools and technologies to tackle real-world challenges. Join our team and harness the potential of data to drive innovation and growth!",
    job_type: "Part-time",
    location: "Remotely",
    path: "javascript:void(0)",
  },
  {
    company_icon: zala,
    company_name: "Zala Techsolution",
    job_title:
      "Cybersecurity Internship: Protecting Tomorrow's Digital Landscape",
    job_description:
      "Become a Cybersecurity Intern and play a crucial role in safeguarding digital assets and information. Learn from seasoned professionals as you delve into threat detection, penetration testing, and security analysis. Contribute to real-world projects and defend against evolving cyber threats. Join us in securing the digital frontier and ensuring a safer tomorrow!",
    job_type: "Full-time",
    location: "Remotely",
    path: "javascript:void(0)",
  },
];

export default () => (
  <section className="py-28">
    <div className="max-w-screen-lg mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl dark:text-slate-100 ">
          Explore the Latest Posts!
        </h1>
        <p className="text-gray-600 mt-2 dark:text-slate-400 ">
          Don't miss out on exciting new opportunities! Dive into our latest
          internship posts to discover roles tailored to your interests and
          career goals.
        </p>
      </div>
      <ul className="mt-12 divide-y space-y-3">
        {members.map((item, idx) => (
          <li
            key={idx}
            className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50"
          >
            <a href={item.path} className="space-y-3">
              <div className="flex items-center gap-x-3">
                <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                  <img src={item.company_icon} className="w-14 h-14" alt="" />
                </div>
                <div>
                  <span className="block text-sm text-indigo-600 font-medium dark:text-indigo-300">
                    {item.company_name}
                  </span>
                  <h3 className="text-base text-gray-800 font-semibold mt-1 dark:text-slate-400 ">
                    {item.job_title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 sm:text-sm dark:text-slate-400 pr-8">
                {item.job_description}
              </p>
              <div className="text-sm text-gray-600 flex items-center gap-6 dark:text-slate-100 ">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                      fill="#9CA3AF"
                    />
                    <path
                      d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                  {item.job_type}
                </span>
                <span className="flex items-center gap-2 dark:text-slate-100 ">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                      fill="#9CA3AF"
                    />
                  </svg>

                  {item.location}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
