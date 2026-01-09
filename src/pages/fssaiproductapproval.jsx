import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAIProductApprovalBanner from "../Sections/Banner/FSSAIProductApprovalBanner/FSSAIProductApprovalBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAIProductContentSection from "../Sections/FSSAILicense/FSSAIProductApprovalContent/FSSAIProductApprovalContent";



const FSSAIProductApproval = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Product Approval Process`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAIProductApprovalBanner />
       
      <FSSAIProductContentSection/>
      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAIProductApproval;