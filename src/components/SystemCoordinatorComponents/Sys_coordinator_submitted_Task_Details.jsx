import PostArticleCardComponent from "../post_article_card_component";
import { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import LoadingIndicator from "../loading_indicator";
import useAuth from "../../hooks/useAuth";

function Sys_coordinator_submitted_Task_Details() {
  const [post, setPost] = useState(null);
  const [evaluation, setEvaluation] = useState({});
  const {
    user: { organization_id },
  } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const submitted = useMemo(() => location.state || {}, [location.state]);
  const post_id = submitted.task.post_id;

  const fetchPost = async (post_id) => {
    try {
      const res = await axios.get(`posts/${post_id}/`);
      console.log("response", res);
      setPost(res.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost(post_id);
  }, [post_id]);

  const handleChange = (e) => {
    setEvaluation({ ...evaluation, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    evaluate(evaluation);
  };

  const evaluate = async (evaluation) => {
    try {
      const res = await axios.post(
        `organizations/${organization_id}/submitted_tasks/${submitted.id}/evaluate/`,
        evaluation
      );
      if (res.status == 201) {
        navigate(-1);
      }
      console.log("response evaluation", res);
    } catch (error) {
      console.error("Error Posting evaluation:", error);
    }
  };

  if (!post_id) {
    console.error("Submitted task or post_id is missing");
    return <div>Task ID is missing. Please provide a valid task.</div>;
  }

  if (!post) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="max-w-lg">
          <h1 className="text-slate-500 text-center text-2xl m-8 font-extrabold sm:text-3xl">
            Submitted Tasks Details
          </h1>
        </div>
        <div>
          <PostArticleCardComponent post={post} />
          <div className="flex m-8 rounded-md bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Applicant Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{`${submitted.applicant.first_name} ${submitted.applicant.last_name}`}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Gender</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {submitted.applicant.gender}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone Number</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {submitted.applicant.phone_number}
                </dd>
              </div>

              {/* 
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
              </div> */}
            </dl>
          </div>

          {/*Submitted Tasks*/}
          <div class="mx-auto mt-10 w-4/5">
            <details class="group [&_summary::-webkit-details-marker]:hidden mb-2">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 dark:bg-slate-800 p-4 text-gray-900">
                <h2 class="font-bold dark:text-slate-300">View Task</h2>

                <svg
                  class="w-5 h-5 shrink-0 transition duration-300 group-open:-rotate-180 dark:text-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div class="grid grid-cols-1 px-10">
                {/*Task List*/}
                <section className="bg-white dark:bg-slate-900">
                  <div className="container px-4 py-8 mx-auto space-y-8 lg:max-w-3xl">
                    <h2 className="text-2xl font-bold md:text-3xl">Task</h2>
                    <div className="space-y-8">
                      <div>
                        <ul className="space-y-4">
                          <li className="space-y-1 bg-slate-100 p-2 rounded-md dark:bg-slate-700">
                            <div className="flex items-center space-x-2">
                              <h4 className="ml-7 font-medium">
                                {submitted.task.title}
                              </h4>
                            </div>
                            <p className="ml-7 dark:text-gray-400">
                              {"description"}
                            </p>
                            <div className="">
                              <p className="text-sm font-bold mt-3">
                                Submitted Solution
                              </p>

                              <hr />

                              {submitted.submited_url && (
                                <p className="text-blue-600 hover:underline cursor-pointer sm:col-span-2 overflow-hidden">
                                  {submitted.submited_url}
                                </p>
                              )}
                              {submitted.submited_file && (
                                <p className="text-blue-600 hover:underline cursor-pointer sm:col-span-2 overflow-hidden">
                                  {submitted.submited_file}
                                </p>
                              )}
                              {submitted.submitted_text && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: submitted.submitted_text,
                                  }}
                                ></div>
                              )}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </details>
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <h1 className="text-2xl text-left font-bold p-3">Evaluate</h1>
          <hr />
          {submitted.status == "Completed" ? (
            <>
              <p className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Already evaluated task.
              </p>
            </>
          ) : (
            <>
              {" "}
              <div>
                <div className="grid grid-cols-2 gap-10 my-5">
                  <div>
                    <label
                      htmlFor="Skill Learned"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Skill Learned
                    </label>

                    <input
                      type="text"
                      id="SkillLearned"
                      name="skills_learned"
                      placeholder="Problem Solving"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Proficiency Level"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Proficiency Level
                    </label>

                    <select
                      name="proficiency_level"
                      id="proficiencylevel"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value=""></option>
                      <option value="Excellent">Excellent</option>
                      <option value="Very Good">Very Good</option>
                      <option value="Satisfactory">Satisfactory</option>
                      <option value="Poor">Poor</option>
                    </select>
                  </div>
                </div>
                <label
                  for="message"
                  className="font-medium mb-2 text-slate-600"
                >
                  Comment
                </label>

                <textarea
                  class="w-full rounded-lg border-gray-400 p-3 text-sm placeholder-gray-400"
                  placeholder="Message"
                  rows="4"
                  id="message"
                  name="comment"
                  onChange={(e) => handleChange(e)}
                ></textarea>

                <div class="flex justify-center w-full max-w-2xl gap-5 mx-auto m-10">
                  <div class="mt-3 rounded-lg sm:mt-0">
                    <button
                      onClick={handleClick}
                      class="px-5 py-4 text-base font-semibold text-center text-slate-700 transition duration-500 ease-in-out transform bg-green-300 lg:px-10 rounded-lg hover:bg-greem-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Evaluate
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Sys_coordinator_submitted_Task_Details;
