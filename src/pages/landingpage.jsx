import Info_banner from "../components/LandingPageComponents/Info_banner";
import Banner_card_component from "../components/LandingPageComponents/banner_card_component";
import Landing_page_FeatureSection from "../components/LandingPageComponents/landing_page_Feature Section";
import Landing_page_OpenPositions from "../components/LandingPageComponents/landing_page_Open Positions";
import Landing_page_hero from "../components/LandingPageComponents/landing_page_hero";
import Landing_page_herosection from "../components/LandingPageComponents/landing_page_herosection";
import Opportunity_card_component from "../components/LandingPageComponents/opportunity_card_component";
import Stat_component from "../components/LandingPageComponents/stat_component";
import Testimonial_component from "../components/LandingPageComponents/testimonial_component";
import UvPromoComponent from "../components/LandingPageComponents/uv_promo_component";
import useAuth from "../hooks/useAuth";

const LandingPage = () => {
  const { user } = useAuth();
  user && console.log(user);

  return (
    <>
      <Landing_page_herosection />
      <Info_banner />
      <UvPromoComponent />
      <Landing_page_FeatureSection />
      <Landing_page_hero />
      <Opportunity_card_component />
      <Landing_page_OpenPositions />
      <Stat_component />
      <Testimonial_component />
      <Banner_card_component />
    </>
  );
};
export default LandingPage;
