import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAIFoodRecyclingBanner from "../Sections/Banner/FSSAIFoodRecyclingBanner/FSSAIFoodRecyclingBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAIFoodRecyclingContentSection from "../Sections/FSSAILicense/FSSAIFoodRecyclingContent/FSSAIFoodRecyclingContent";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";





const FSSAIFoodRecycling = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Food Recycling`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAIFoodRecyclingBanner />
      <BrandSlider/>
      <ExpertSection/>
       
      <FSSAIFoodRecyclingContentSection/>
     
      {/* <FooterNewsletter /> */}
      {/* <WhyChooseFilingLab /> */}
      {/* <GetStartedSection /> */}
      <WhyChooseFilingLab />
      <GetStartedSection />

      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAIFoodRecycling;