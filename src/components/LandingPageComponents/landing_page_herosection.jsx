import { Link } from "react-router-dom";
import tele from "../../assets/tele.png";
import cbe from "../../assets/cbe.png";
import astu from "../../assets/astu.png";
import insa from "../../assets/insa.png";
import airline from "../../assets/airline.png";
export default () => {
  return (
    <>
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-indigo-600 font-medium">
              Over 200+ opportunities
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl dark:text-white">
              Jumpstart Your Career with Our Virtual Internship Program!
            </h2>
            <p className="dark:text-slate-400">
              Don’t miss out on the chance to gain practical experience and
              jumpstart your career journey. Apply now and be part of our
              dynamic virtual internship program!
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to="/welcome"
                className="flex items-center bg-indigo-500 justify-center gap-x-2 py-2 px-4 dark:text-slate-100 text-white hover:text-slate-100 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              className="md:rounded-tl-[108px] md:rounded-br-[108px]"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8 pt-20">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h3 className="font-semibold text-sm text-gray-600 text-center">
              TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h3>
            <div className="mt-6">
              <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
                <li>
                  <img src={astu} className="w-24 h-24 " alt="" />
                </li>

                {/* LOGO 2 */}
                <li>
                  <img src={tele} className="w-24 h-24 " alt="" />
                </li>

                {/* LOGO 3 */}
                <li>
                  <img src={cbe} className="w-24 h-24" alt="" />
                </li>

                {/* LOGO 4 */}
                <li>
                  <img src={airline} className="w-24 h-24" alt="" />
                </li>
                {/* LOGO 5 */}
                <li>
                  <img src={insa} className="w-24 h-24" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
