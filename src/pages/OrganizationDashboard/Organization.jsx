import WelcomeBanner from "../../partials/Organization/dashboard/WelcomeBanner";
import DashboardCard01 from "../../partials/Organization/dashboard/DashboardCard01";
import DashboardCard02 from "../../partials/Organization/dashboard/DashboardCard02";
import DashboardCard03 from "../../partials/Organization/dashboard/DashboardCard03";
import DashboardCard07 from "../../partials/Organization/dashboard/DashboardCard07";
import DashboardCard10 from "../../partials/Organization/dashboard/DashboardCard10";
import Banner from "../../partials/Organization/Banner";
export default () => {
  return (
    <>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />

          {/* Cards */}
          <div className="grid grid-cols-12 gap-6">
            <DashboardCard01 />

            <DashboardCard02 />

            <DashboardCard03 />

            <DashboardCard10 />

            <DashboardCard07 />
          </div>
        </div>
      </main>

      <Banner />
    </>
  );
};
