import { Link } from "react-router-dom";
import uvPromoImg from "../../assets/uv.svg";
function UvPromoComponent() {
  return (
    <article className="flex w-3/4 mx-auto p-20 rounded-xl transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>Students</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>Intern</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt=""
          src={uvPromoImg}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">
              Empower Your Students with Real-World Experience
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 w-4/5 text-sm/relaxed text-gray-700">
            Join our innovative platform to provide your students with
            cutting-edge virtual internships. Partner with us to create
            meaningful career opportunities and foster academic success.
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to="/Signup_UVCoordinator"
            className="block rounded-md bg-indigo-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-indigo-600"
          >
            For Universities
          </Link>
        </div>
      </div>
    </article>
  );
}
export default UvPromoComponent;
