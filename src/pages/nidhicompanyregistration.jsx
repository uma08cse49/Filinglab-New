import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import NCRegistrationBanner from "../Sections/Banner/NidhiCompanyRegistrationBanner/NCRegistrationBanner"
import NCRegistrationContentSection from "../Sections/BusinessRegistration/NidhiCompanyRegistration/NCRegistrationContentSection";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import OtherServices from "../Sections/BusinessRegistration/OtherServices/OtherServices"





const NidhiCompanyRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Food Recycling`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <NCRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
       
      <NCRegistrationContentSection/>

      <TrustFilingLab />
      <OtherServices />
      {/* <FooterNewsletter /> */}
      <WhyChooseFilingLab />
      <GetStartedSection />

      <FSSAIFooter />
    </Layout>
  );
};

export default NidhiCompanyRegistration;