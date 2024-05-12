import { Link } from "react-router-dom";
import successImage from "../assets/success.jpg";
function SuccessPage() {
  return (
    <>
      <div class="flex min-h-screen items-center justify-center">
        <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={successImage}
              alt="image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-6">
            <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-green-500 antialiased">
              Success
            </h6>
            <h4 class="mb-2 block font-sans text-6xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Thank you!
            </h4>
            <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Your submission is received and we will contact you soon.
            </p>
            <Link class="inline-block" to="/">
              <button
                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75 -3.75M3 12h18"
                  ></path>
                </svg>
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SuccessPage;
