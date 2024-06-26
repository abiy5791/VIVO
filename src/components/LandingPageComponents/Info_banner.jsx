import { Link } from "react-router-dom";

export default () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-300 font-medium">
            Find Top Talent with Our Internship Platform!
          </h1>
          <h2 className="text-4xl text-gray-800 dark:text-slate-100 font-extrabold mx-auto md:text-5xl">
            Find Highly Skilled Interns and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              Post Opportunities with Ease
            </span>
          </h2>
          <p className="max-w-2xl mx-auto dark:text-slate-400 ">
            Partner with us to streamline your internship program and attract
            the best candidates. Post your opportunities today!
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to="/signup_company"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              For Organizations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
