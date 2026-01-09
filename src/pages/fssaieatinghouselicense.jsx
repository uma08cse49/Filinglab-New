import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAIEatingHouseLicenseBanner from "../Sections/Banner/FSSAIEatingHouseLicenseBanner/FSSAIEatingHouseLicenseBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAIEatingHouseContentSection from "../Sections/FSSAILicense/FSSAIEatingHouseLicenseContent/FSSAIEatingHouseLicenseContent";



const FSSAIEatingHouseLicense = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Product Approval Process`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAIEatingHouseLicenseBanner />

      
       
      <FSSAIEatingHouseContentSection/>
      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAIEatingHouseLicense;