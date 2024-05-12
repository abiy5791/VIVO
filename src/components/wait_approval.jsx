import waitimage from "../assets/wait.svg";
import { Link } from "react-router-dom";

function WaitApproval() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <img
            className="w-full"
            src={waitimage}
            alt="wait for approval image"
          />

          <h1 className=" text-2xl font-bold tracking-tight text-indigo-400 sm:text-4xl">
            Please Wait For Approval !
          </h1>
          <Link to="/">
            <button className=" items-center px-5 py-2 text-indigo-600 duration-150">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default WaitApproval;
