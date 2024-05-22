import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link to="/" className="block text-blue-600">
              <span className="sr-only">Home</span>
              <img src={logo} />
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-indigo-500 sm:text-3xl md:text-5xl">
              Welcome to the #1 platform
              <h1 className="text-slate-700">
                for guaranteed internship placement
              </h1>
            </h1>

            <p className="mt-4 leading-relaxed text-slate-400 w-3/4">
              With our platform, find your perfect opportunity hassle-free and
              launch your career with confidence. Join us today and secure your
              future success!
            </p>
            <Link to="/signup_applicant">
              <button className="flex mt-6 items-center gap-2 px-5 py-3 font-semibold border-gray-400 border rounded-md w-3/4 justify-center">
                <img
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/63423/graduating-boy.svg"
                />
                Continue as Intern
              </button>
            </Link>
            <Link to="/signup_student">
              <button className="flex mt-4 items-center gap-2 px-5 py-3 font-semibold border-gray-400 border rounded-md w-3/4 justify-center">
                <img
                  className="w-5 h-5"
                  src="https://www.svgrepo.com/show/524784/notebook-1.svg"
                />
                Continue as Student
              </button>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}
export default WelcomePage;
