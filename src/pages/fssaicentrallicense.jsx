import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAICentralLicenseBanner from "../Sections/Banner/FSSAICentralLicenseBanner/FSSAICentralLicenseBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAICentralLicenseContentSection from "../Sections/FSSAILicense/FSSAICentralLicenseContent/FSSAICentralLicenseContent";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import BrandSlider from "./../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";




const FSSAICentralLicense = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Central License`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAICentralLicenseBanner />
      <BrandSlider/>
      <ExpertSection/>
       
      <FSSAICentralLicenseContentSection/>
      {/* <FooterNewsletter /> */}
      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAICentralLicense;