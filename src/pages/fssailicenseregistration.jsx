import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAILicenseRegistrationContent from "../Sections/FSSAILicense/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";



const FSSAILicenseRegistration = () => {
  const { city } = useParams();
  const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Registration in ${formattedCity}`}>
      <Header variant="v2" />
      <FSSAIBannerWithForm city={formattedCity} />
       
      <FSSAILicenseRegistrationContent city={formattedCity} />
      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAILicenseRegistration;
