import WelcomeBanner from "../../partials/Organization/dashboard/WelcomeBanner";
import CookieComponent from "../../components/Cookie_Component";
import DashboardCard06 from "../../partials/Organization/dashboard/DashbaordCard06";

export default () => {
  return (
    <>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />

          <DashboardCard06 />

          {/* <DashboardCard07 /> */}

          {/* Cards */}
          {/* <div className="grid grid-cols-12 gap-6">
            <DashboardCard10 />
          </div> */}
        </div>
      </main>

      <CookieComponent />
    </>
  );
};
