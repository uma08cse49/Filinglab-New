import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import FSSAIAnnualReturnBanner from "../Sections/Banner/FSSAIAnnualReturnBanner/FSSAIAnnualReturnBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FSSAIAnnualReturnContentSection from "../Sections/FSSAILicense/FSSAIAnnualReturnContent/FSSAIAnnualReturnContent";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import SectionNavBar from "../Sections/FSSAILicense/SectionNavBar/SectionNavBar";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import FSSAIAnnualReturnBenefit from "../Sections/FSSAILicense/FSSAIAnnualReturnBenefit/FSSAIAnnualReturnBenefit";
import AnnualReturnEligibilityCriteria from "../Sections/FSSAILicense/AnnualReturnEligibilityCriteria/AnnualReturnEligibilityCriteria"

const customItems = [
  "Overview",
  "Benefits",
  "Eligibilty Criteria",
  "Documents Required",
  "Process",
  "Features",
  "Types",
  "FAQ",
  ];


const FSSAIAnnualReturn = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - FSSAI Annual Return`}>
      <Header variant="v2" />
      {/* <FSSAIBannerWithForm city={formattedCity} /> */}
      <FSSAIAnnualReturnBanner />
      <BrandSlider/>
      <ExpertSection/>
      <SectionNavBar items={customItems} />
      <FSSAIAnnualReturnContentSection/>
      {/* <LicenseTypesSection /> */}
      {/* Add more sections here */}
      {/* <div id="overview"><GstOverviewBanner /></div> */}
      <div id="Advantages"><FSSAIAnnualReturnBenefit/></div>
      <div id="Eligibilty Criteria"><AnnualReturnEligibilityCriteria/></div>
      {/* <FooterNewsletter /> */}

      <FSSAIFooter />
    </Layout>
  );
};

export default FSSAIAnnualReturn;