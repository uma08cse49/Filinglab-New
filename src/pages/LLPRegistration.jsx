import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import LLPRegistrationBanner from "../Sections/Banner/LLPRegistrationBanner/LLPRegistrationBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import LLPRegistrationContentSection from "../Sections/BusinessRegistration/LLPRegistrationContentSection/LLPRegistrationContentSection";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";





const LLPRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Food Recycling`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <LLPRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
       
      <LLPRegistrationContentSection/>

      <TrustFilingLab />
     
      {/* <FooterNewsletter /> */}
      <WhyChooseFilingLab />
      <GetStartedSection />

      <FSSAIFooter />
    </Layout>
  );
};

export default LLPRegistration;