import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const AddPost = () => {
  const {
    user: { organization_id },
  } = useAuth();
  const [postDetails, setPostDetails] = useState({
    title: "",
    duration: "",
    type: "",
    level: "",
    category: "",
    skills_gained: "",
    description: "",
  });

  const [requirements, setRequirements] = useState({
    skills: false,
    availability: false,
    cover_letter: false,
  });
  const [image, setImage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setPostDetails({ ...postDetails, file: files[0] });
    } else if (type === "checkbox") {
      setRequirements({ ...requirements, [name]: checked });
    } else {
      setPostDetails({ ...postDetails, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();

    for (let i = 0; i < Object.keys(postDetails).length; i++) {
      formData.append(
        `${Object.keys(postDetails)[i]}`,
        Object.values(postDetails)[i]
      );
    }
    formData.append("organization", organization_id);
    formData.append("image", image[0]);

    for (const [key, value] of Object.entries(formData)) {
      console.log(`${key}: ${value}`);
    }
    console.log("requirements", requirements);

    try {
      const response = await axios.post("/posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status == 201) {
        const { id } = response.data;
        await axios.post(`/posts/${id}/requirements/`, requirements);
        setIsSuccess(true);
        navigate("add_task", { state: { postId: response.data.id } });
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-scroll">
      <div className="px-4 py-6 mx-auto max-w-9xl sm:px-6 md:px-12 lg:px-12 lg:py-12">
        <h1 className="text-slate-500 text-center text-2xl mb-5 font-extrabold sm:text-3xl">
          Make a Post
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle w-full">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={postDetails.title}
              onChange={handleChange}
              className="border-slate-300 peer block min-h-[auto] w-full rounded"
              id="title"
              placeholder="Enter Post Title"
              aria-label="Post Title"
            />
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={postDetails.duration}
              onChange={handleChange}
              className="border-slate-300 peer block min-h-[auto] w-full rounded"
              id="duration"
              placeholder="Enter Post Title"
              aria-label="Post Title"
            />

            <label
              htmlFor="uploadFile1"
              className="bg-white text-gray-500 font-semibold text-base mt-5 rounded max-w-xlg h-60 p-10 flex flex-col items-center justify-content cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 mb-2 fill-gray-500"
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
              <input
                type="file"
                id="uploadFile1"
                name="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files)}
              />
              <p className="text-xs font-medium text-gray-400 mt-2">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
            </label>

            <div className="flex mt-5 justify-content items-center">
              <div className="mr-4">
                <label className="mr-3">Type</label>
                <select
                  name="type"
                  value={postDetails.type}
                  onChange={handleChange}
                  className="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
                >
                  <option value=""></option>
                  <option value="Internship">Internship</option>
                  <option value="VolunteerWork">Volunteer Work</option>
                </select>
              </div>

              <div className="mr-4">
                <label className="mr-3">Level</label>
                <select
                  name="level"
                  value={postDetails.level}
                  onChange={handleChange}
                  className="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
                >
                  <option value=""></option>
                  <option value="Entry">Entry Level</option>
                  <option value="Mid">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                </select>
              </div>

              <div>
                <label className="mr-3">Category</label>
                <select
                  name="category"
                  value={postDetails.category}
                  onChange={handleChange}
                  className="rounded-md border-2 border-blue-200 py-1.5 pl-3 text-sm font-medium"
                >
                  <option value=""></option>
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

            <div className="flex-cols justify-content w-full mt-6">
              <label className="mb-10 mt-10">Requirements</label>
              <label
                htmlFor="skills"
                className="flex cursor-pointer items-start gap-4 mb-4 mt-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="skills"
                    checked={requirements.skills}
                    onChange={handleChange}
                    className="size-4 rounded border-gray-300"
                    id="skills"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">Skills</strong>
                  <p className="mt-1 text-sm text-gray-700">
                    Specify whether you want to inquire about the
                    applicant&apos;s skills.
                  </p>
                </div>
              </label>

              <label
                htmlFor="availability"
                className="flex cursor-pointer items-start mb-4 gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="availability"
                    checked={requirements.availability}
                    onChange={handleChange}
                    className="size-4 rounded border-gray-300"
                    id="availability"
                  />
                </div>

                <div>
                  <strong className="font-medium text-gray-900">
                    Availability
                  </strong>
                  . . .
                  <p className="mt-1 text-sm text-gray-700">
                    Specify whether you want to inquire about the
                    applicant&apos;s availability for the position.
                  </p>
                </div>
              </label>

              <label
                htmlFor="cover_letter"
                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cover_letter"
                    checked={requirements.cover_letter}
                    onChange={handleChange}
                    className="size-4 rounded border-gray-300"
                    id="cover_letter"
                  />
                </div>

                <div>
                  <strong className="text-pretty font-medium text-gray-900">
                    Cover Letter
                  </strong>
                  <p className="mt-1 text-sm text-gray-700">
                    Specify whether you want to inquire about the
                    applicant&apos;s motivation for choosing your company.
                  </p>
                </div>
              </label>
            </div>

            <div className="relative mt-10 mb-3" data-twe-input-wrapper-init>
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills Gained
                </label>
                <textarea
                  id="skills"
                  name="skills_gained"
                  value={postDetails.skills_gained}
                  onChange={handleChange}
                  className="mt-2 w-full h-40 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                  rows={2}
                  cols={2}
                  placeholder="Type skills gained after the post comma separated e.g problem solving, "
                ></textarea>
              </div>
            </div>
            <div className="relative mt-10 mb-3" data-twe-input-wrapper-init>
              <div>
                <label
                  htmlFor="OrderNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descriptions
                </label>
                <textarea
                  id="OrderNotes"
                  name="description"
                  value={postDetails.description}
                  onChange={handleChange}
                  className="mt-2 w-full h-40 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                  rows="4"
                  placeholder="Enter the descriptions"
                ></textarea>
              </div>
            </div>

            <div className="z-50 mt-6 rounded-lg">
              <button
                type="submit"
                className="items-center w-1/3 mx-auto mt-10 block px-10 py-3.5 text-base font-medium text-center cursor-pointer text-slate-100 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-indigo-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Continue to add Tasks"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
