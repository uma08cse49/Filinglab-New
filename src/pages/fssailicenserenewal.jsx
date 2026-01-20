import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAILicenseRenewalBanner from "../Sections/Banner/FSSAILicenseRenewalBanner/FSSAILicenseRenewalBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAILicenseRenewalContentSection from "../Sections/FSSAILicense/FSSAILicenseRenewalContent/FSSAILicenseRenewalContent";



const FSSAILicenseRenewal = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Product Approval Process`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAILicenseRenewalBanner />
       
      <FSSAILicenseRenewalContentSection/>
      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAILicenseRenewal;