import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
// import FooterTwo from "../Sections/Footer/FooterTwo";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
// import FSSAIBannerWithForm from "../Sections/Banner/FSSAIBannerWithForm/FSSAIBannerWithForm";
import CompanyRegistrationBanner from "../Sections/Banner/CompanyRegistrationBanner/CompanyRegistrationBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FPOMarkCertificationContentSection from "../Sections/FSSAILicense/FPOMarkCertificationContent/FPOMarkCertificationContent";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import CompanyRegistrationOverview from "../Sections/BusinessRegistration/CompanyRegistrationOverview/CompanyRegistrationOverview";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import SectionNavBar from "../Sections/BusinessRegistration/SectionNavBar/SectionNavBar";
import CompanyRegistrationRequiresSection from "../Sections/BusinessRegistration/CompanyRegistrationOverview/CompanyRegistrationrequires";
import CompanyRegistrationBenefit from "../Sections/BusinessRegistration/CompanyRegistrationBenefit/CompanyRegistrationBenefit";
import EligibilityCriteria from "../Sections/BusinessRegistration/EligibilityCriteria/EligibilityCriteria";
import CompanyRegistrationDocuments from "../Sections/BusinessRegistration/CompanyRegistrationDocuments/CompanyRegistrationDocuments";
import CompanyRegistrationProcess from "../Sections/BusinessRegistration/CompanyRegistrationProcess/CompanyRegistrationProcess";
import CompanyRegistrationFeatures from "../Sections/BusinessRegistration/CompanyRegistrationFeatures/CompanyRegistrationFeatures";
import CompanyRegistrationSection from "../Sections/BusinessRegistration/TypesOfCompanyRegistration/TypesOfCompanyRegistration";
import OtherServices from "../Sections/BusinessRegistration/OtherServices/OtherServices";

const customItems = [
    "Overview",
    "Advantages",
    "Eligibilty Criteria",
    "Documents Required",
    "Process",
    "Features",
    "Types",
    "FAQ",
  ];


const CompanyRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - CompanyRegistration(Business Registration) `}>
      <Header variant="v2" />
      <CompanyRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
      {/* <SectionNavBar/> */}
       
      {/* <CompanyRegistrationOverview/> */}
      <SectionNavBar items={customItems} />
      {/* Add more sections here */}
      <div id="Overview"><CompanyRegistrationOverview /></div>
      <CompanyRegistrationRequiresSection/>
      <div id="Advantages"><CompanyRegistrationBenefit/></div>
      <div id="Eligibilty Criteria"><EligibilityCriteria/></div>
      <div id="Documents Required"><CompanyRegistrationDocuments/></div>
      <div id="Process"><CompanyRegistrationProcess/></div>
      <div id="Features"><CompanyRegistrationFeatures/></div>
      <div id="Types"><CompanyRegistrationSection/></div>
      {/* <PostRegistrationCompliance/> */}
      



      <TrustFilingLab />
      <OtherServices/>
     
      {/* <FooterNewsletter /> */}
      <WhyChooseFilingLab />

      <GetStartedSection />

     
      <FSSAIFooter />
    </Layout>
  );
};

export default CompanyRegistration;