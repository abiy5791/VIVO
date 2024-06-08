import { Outlet } from "react-router-dom";
import Footer_component from "../components/LandingPageComponents/footer_component";
import Landing_page_announcement_banner from "../components/LandingPageComponents/landing_page_announcement_banner";
import Landing_page_navbar from "../components/LandingPageComponents/landing_page_navbar";

export default ({ footer }) => {
  return (
    <> 
      <Landing_page_announcement_banner />
      <Landing_page_navbar />

      <Outlet />

      {footer ? <Footer_component /> : <></>}
    </>
  );
};
