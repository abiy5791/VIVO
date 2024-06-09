import tele from "../../assets/tele.png";
import cbe from "../../assets/cbe.png";
import astu from "../../assets/astu.png";
import zala from "../../assets/zala.png";
export default () => {
  return (
    <section>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
                  <img
                    class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase dark:text-blue-300">
              {" "}
              Unlock Boundless Learning{" "}
            </span>
            <h1 class="dark:text-slate-100 mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Embrace Virtual Internship Opportunities
            </h1>
            <p class="dark:text-slate-400  mb-8 text-base leading-relaxed text-left text-gray-500">
              Discover endless learning from anywhere with virtual internships.
              Connect with companies, gain valuable experience, and expand your
              skills.
            </p>
            <div class="flex flex-wrap w-full -mx-4 text-left">
              <div class="w-1/4 p-4 sm:w-1/4">
                <img src={cbe} className="w-14 h-14" alt="" />
              </div>
              <div class="w-1/4 p-4 sm:w-1/4">
                <img src={astu} className="w-14 h-14" alt="" />
              </div>
              <div class="w-1/4 p-4 sm:w-1/4">
                <img src={tele} className="w-14 h-14" alt="" />
              </div>
              <div class="w-1/4 p-4 sm:w-1/4">
                <img src={zala} className="w-14 h-14" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
