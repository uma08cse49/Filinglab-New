import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAIStateLicenseBanner from "../Sections/Banner/FSSAIStateLicenseBanner/FSSAIStateLicenseBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAIStateLicenseContentSection from "../Sections/FSSAILicense/FSSAIStateLicenseContent/FSSAIStateLicenseContent";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";




const FSSAIStateLicense = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Product Approval Process`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAIStateLicenseBanner />
       
      <FSSAIStateLicenseContentSection/>
      {/* <FooterNewsletter /> */}
      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAIStateLicense;