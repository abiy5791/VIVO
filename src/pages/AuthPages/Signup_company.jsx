import logo from "../../assets/logo.png";
import signupillustration from "../../assets/company.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

function SignupCompany() {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState();
  const [logo, setLogo] = useState();
  const { login } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function registerCompany(user, avatar, logo) {
    try {
      const formData = new FormData();
      const supervisorKeys = [
        "first_name",
        "last_name",
        "email",
        "password",
        "phone_number",
      ];

      for (let key in user) {
        if (Object.prototype.hasOwnProperty.call(user, key)) {
          if (supervisorKeys.includes(key)) {
            formData.append(`supervisor.${key}`, user[key]);
          } else {
            formData.append(key, user[key]);
          }
        }
      }
      formData.append("logo", logo[0]);
      formData.append("supervisor.avatar", avatar[0]);
      const formDataObject = Object.fromEntries(formData);
      console.log("formDataObject", formDataObject);

      const url = "organizations/";

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        const data = {
          email: user.email,
          password: user.password,
        };
        console.log("success", data);
        login(data);
      }
    } catch {
      console.log("catched");
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    registerCompany(user, avatar, logo);
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-white lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            src={signupillustration}
            alt=""
            className="inset-0 h-full w-1/2 opacity-80 fixed max-lg:hidden"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block">
              <Link
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img src={logo} alt="website logo" />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-blue-300 sm:text-3xl md:text-5xl">
                Welcome to VIVO
              </h1>

              <p className="mt-2 leading-relaxed text-gray-500">
                Bid farewell to uncertainty and embrace a future filled with
                promise. Sign up now and embark on your professional journey
                with confidence!
              </p>
            </div>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="OrganizationName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Organization Name
                </label>

                <input
                  type="text"
                  id="OrganizationName"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  placeholder="XYZ IT Solution"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="organization_email"
                  onChange={(e) => handleChange(e)}
                  placeholder="abcd123@gmail.com"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  type="text"
                  id="PhoneNumber"
                  name="organization_phone_number"
                  onChange={(e) => handleChange(e)}
                  placeholder="+251911121314"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Organization Category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Organization Category
                </label>

                <input
                  type="text"
                  id="Organization Category"
                  name="organization_type"
                  onChange={(e) => handleChange(e)}
                  placeholder="IT Solution"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Website Link"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website Link
                </label>

                <input
                  type="text"
                  id="Website Link"
                  name="website"
                  onChange={(e) => handleChange(e)}
                  placeholder="https://www.example.com"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Location City"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location City
                </label>

                <input
                  type="text"
                  id="Location City"
                  name="location_city"
                  placeholder="Adama"
                  onChange={(e) => handleChange(e)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Location State"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location State
                </label>

                <input
                  type="text"
                  id="Location State"
                  name="location_state"
                  placeholder="Oromia"
                  onChange={(e) => handleChange(e)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LinkedIn Url"
                  className="block text-sm font-medium text-gray-700"
                >
                  LinkedIn Url
                </label>

                <input
                  type="text"
                  id="LinkedIn Url"
                  name="linkein_url"
                  onChange={(e) => handleChange(e)}
                  placeholder="https://www.linkedin.com/in/abcd"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <h1 className="block text-sm font-medium text-gray-700">
                  Company Logo
                </h1>
                <label
                  for="uploadFile1"
                  class="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-28 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
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
                  Upload file
                  <input
                    type="file"
                    id="uploadFile1"
                    class="hidden"
                    name="logo"
                    onChange={(e) => setLogo(e.target.files)}
                  />
                  <p class="text-xs font-medium text-gray-400 mt-2">
                    PNG, JPG SVG, WEBP, and GIF are Allowed.
                  </p>
                </label>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>

                <textarea
                  type="text"
                  placeholder="Message"
                  id="Description"
                  name="description"
                  onChange={(e) => handleChange(e)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <br className="col-span-full" />
              <h1 className="col-span-full font-bold text-xl">
                Enter Company Supervisor Information
              </h1>
              <br className="col-span-full" />
              <div className="col-span-full">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstname"
                    name="first_name"
                    placeholder="John"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastname"
                    name="last_name"
                    placeholder="Doe"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="supervisor_email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="supervisor_email"
                    name="email"
                    placeholder="abcd123@gmail.com"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="abcd123@gmail.com"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="supervisor_phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    type="number"
                    id="supervisor_phone_number"
                    name="phone_number"
                    placeholder="+251911121314"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <h1 className="block text-sm font-medium text-gray-700">
                    Profile Image
                  </h1>
                  <label
                    for="avatar"
                    class="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-28 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
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
                    Upload file
                    <input
                      type="file"
                      id="avatar"
                      class="hidden"
                      name="avatar"
                      onChange={(e) => setAvatar(e.target.files)}
                    />
                    <p class="text-xs font-medium text-gray-400 mt-2">
                      PNG, JPG SVG, WEBP, and GIF are Allowed.
                    </p>
                  </label>
                </div>
              </div>
              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  onClick={handleClick}
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
export default SignupCompany;
