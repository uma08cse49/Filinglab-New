import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import CompanyRegistrationBanner from "../Sections/Banner/CompanyRegistrationBanner/CompanyRegistrationBanner"
// import FSSAILicenseContentSection  from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
// import FSSAILicenseContentSection from "../Sections/FSSAILicenseRegistrationContent/FSSAILicenseRegistrationContent";
import FPOMarkCertificationContentSection from "../Sections/FSSAILicense/FPOMarkCertificationContent/FPOMarkCertificationContent";
// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import PublicLimitedCompanyRegistrationOverview from "../Sections/BusinessRegistration/PublicLimitedCompanyRegistrationOverview/PublicLimitedCompanyRegistrationOverview";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import SectionNavBar from "../Sections/BusinessRegistration/SectionNavBar/SectionNavBar";
// import CompanyRegistrationRequiresSection from "../Sections/BusinessRegistration/CompanyRegistrationOverview/CompanyRegistrationrequires";
import PublicLimitedCompanyRegistrartionBenefit from "../Sections/BusinessRegistration/PublicLimitedCompanyRegistrartionBenefit/PublicLimitedCompanyRegistrartionBenefit";
import EligibilityCriteria from "../Sections/BusinessRegistration/PLCRegistrationEligibility/PLCRegistrationEligibility";
import PLCRegistrationDocuments from "../Sections/BusinessRegistration/PLCRegistrationDocument/PLCRegistrationDocument";
import PLCRegsitrationProcess from "../Sections/BusinessRegistration/PLCRegsitrationProcess/PLCRegsitrationProcess";
import PLCRegistrationFeatures from "../Sections/BusinessRegistration/PLCRegistrationFeatures/PLCRegistrationFeatures";
import CompanyRegistrationSection from "../Sections/BusinessRegistration/TypesOfCompanyRegistration/TypesOfCompanyRegistration";
import StickyForm from "../Components/StickyForm";
// import PublicLimitedCompanyRegistrationcontentSection from "../Sections/BusinessRegistration/PublicLimitedCompanyRegistrationOverview/PublicLimitedCompanyRegistrationOverview";
import PublicLimitedRegistrationBanner from "../Sections/Banner/PublicLimitedRegistrationBanner/PublicLimitedRegistrationBanner";
import PLCRegistrationFAQ from "../Sections/BusinessRegistration/PLCRegistrationFAQ/PLCRegistrationFAQ";
import OtherServices from "../Sections/BusinessRegistration/OtherServices/OtherServices";

const customItems = [
    "Overview",
    "Advantages",
    "Eligibilty Criteria",
    "Documents Required",
    "Process",
    "Features",
    // "Types",
    "FAQ",
  ];


const PublicLimitedCompanyRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing Lab - Public Limited Company Registration `}>
      <Header variant="v2" />
      <PublicLimitedRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
      {/* <SectionNavBar/> */}
       
      {/* <CompanyRegistrationOverview/> */}
      <SectionNavBar items={customItems} />
      {/* Add more sections here */}
      {/* <PublicLimitedCompanyRegistrationcontentSection/> */}
      <div id="Overview"><PublicLimitedCompanyRegistrationOverview /></div>
      {/* <PublicLimitedCompanyRegistrationrequires/> */}
      <div id="Advantages"><PublicLimitedCompanyRegistrartionBenefit/></div>
      <div id="Eligibilty Criteria"><EligibilityCriteria/></div>
      <div id="Documents Required"><PLCRegistrationDocuments/></div>
      <div id="Process"><PLCRegsitrationProcess/></div>
      <div id="Features"><PLCRegistrationFeatures/></div>
      {/* <div id="Why"><WhyChooseFilingLab/></div> */}
      <div id="faq"><PLCRegistrationFAQ/></div>
     

      {/* Common sections across pages */}
      <TrustFilingLab />
      <OtherServices/>
      <WhyChooseFilingLab />
      <GetStartedSection />
      <FSSAIFooter />
    </Layout>
  );
};
export default PublicLimitedCompanyRegistration;