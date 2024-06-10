import PostArticleCardComponent from "../post_article_card_component";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import axios from "../../api/axios";
import LoadingIndicator from "../loading_indicator";

function ApplicationDetails() {
  const location = useLocation();
  const application = useMemo(() => location.state || {}, [location.state]);
  const [post, setPost] = useState(null);
  const [applicant, setApplicant] = useState(null);
  const navigate = useNavigate();

  const { post_id, applicant_id } = application;

  useEffect(() => {
    if (post_id) {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`posts/${post_id}/`);
          setPost(res.data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };
      fetchPost();
    } else {
      console.error("Post ID is missing");
    }
  }, [post_id]);

  useEffect(() => {
    if (applicant_id) {
      const fetchApplicant = async () => {
        try {
          const res = await axios.get(`applicants/${applicant_id}/`);
          setApplicant(res.data);
        } catch (error) {
          console.error("Error fetching applicant:", error);
        }
      };
      fetchApplicant();
    } else {
      console.error("Applicant ID is missing");
    }
  }, [applicant_id]);

  const handleClick = async (status) => {
    try {
      const res = await axios.patch(`applications/${application.id}/`, {
        status,
      });
      console.log("Response:", res);
      navigate(-1);
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  console.log(application);

  if (!post_id || !applicant_id) {
    return <div>Task ID is missing. Please provide a valid task.</div>;
  }

  if (!post || !applicant) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div>
        <div className="max-w-lg">
          <h1 className="text-slate-500 text-center text-2xl m-8 font-extrabold sm:text-3xl">
            Application Details
          </h1>
        </div>
        <div>
          <PostArticleCardComponent post={post} />

          <div className="flex m-8 rounded-md bg-white p-4 border-gray-300 border-2 sm:p-6 lg:p-8 w-4/5 mx-auto">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Applicant Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{`${applicant.first_name} ${applicant.last_name}`}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Age</dt>
                <dd className="text-gray-700 sm:col-span-2">{applicant.age}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Gender</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {applicant.gender}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Portfolio Link</dt>
                <dd className="text-blue-600 hover:underline cursor-pointer sm:col-span-2">
                  {applicant.portfolio_link}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Resume</dt>
                <dd className="text-blue-600 hover:underline cursor-pointer sm:col-span-2">
                  {applicant.resume}
                </dd>
              </div>

              <div>
                {application.skills && (
                  <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Skills</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {application.skills}
                    </dd>
                  </div>
                )}
                {application.cover_letter && (
                  <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Cover Letter</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {application.cover_letter}
                    </dd>
                  </div>
                )}
                {application.availabilty && (
                  <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Availability</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {application.availabilty}
                    </dd>
                  </div>
                )}
                {application.other && (
                  <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">
                      Other Information
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {application.other}
                    </dd>
                  </div>
                )}
              </div>
            </dl>
          </div>
        </div>

        <>
          <div class="flex justify-center w-full max-w-2xl gap-5 mx-auto m-10">
            <div class="mt-3 rounded-lg sm:mt-0">
              <button
                onClick={() => handleClick("accepted")}
                class="px-5 py-4 text-base font-medium text-center text-slate-700 transition duration-500 ease-in-out transform bg-green-300 lg:px-10 rounded-lg hover:bg-greem-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Accept
              </button>
            </div>
            <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button
                onClick={() => handleClick("rejected")}
                class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-red-600 transition duration-500 ease-in-out transform border-2 border-slate-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Decline
              </button>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default ApplicationDetails;
