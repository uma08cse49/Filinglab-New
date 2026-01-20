import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import CompanyRegistrationBanner from "../Sections/Banner/CompanyRegistrationBanner/CompanyRegistrationBanner"

// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
import PublicLimitedCompanyRegistrationOverview from "../Sections/BusinessRegistration/PublicLimitedCompanyRegistrationOverview/PublicLimitedCompanyRegistrationOverview";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import SectionNavBar from "../Sections/BusinessRegistration/SectionNavBar/SectionNavBar";
import OPCRegistrationOverview from "../Sections/BusinessRegistration/OPCRegistrationOverview/OPCRegistrationOverview";
import OPCRegistrationBenefit from "../Sections/BusinessRegistration/OPCRegistrationBenefit/OPCRegistrationBenefit";
import OPCEligibility from "../Sections/BusinessRegistration/OPCEligibility/OPCEligibility";
import PLCRegistrationDocuments from "../Sections/BusinessRegistration/PLCRegistrationDocument/PLCRegistrationDocument";
import OPCRegistrationProcedure from "../Sections/BusinessRegistration/OPCRegistrationProcedure/OPCRegistrationProcedure";
import OPCRegistrationFeature from "../Sections/BusinessRegistration/OPCRegistrationFeature/OPCRegistrationFeature";
import OPCTypes from "../Sections/BusinessRegistration/OPCTypes/OPCTypes";
import StickyForm from "../Components/StickyForm";
// import OPCComplianceRequirements from "../Sections/BusinessRegistration/OPCComplianceRequirements/OPCComplianceRequirements";
import OPCRegistrationBanner from "../Sections/Banner/OPCRegistrationBanner/OPCRegistrationBanner";
import OPCFAQs from "../Sections/BusinessRegistration/OPCTypes/OPCFAQs";
import OtherServices from "../Sections/BusinessRegistration/OtherServices/OtherServices"

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


const OnePersonCompanyRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing Lab - Public Limited Company Registration `}>
      <Header variant="v2" />
      <OPCRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
      {/* <SectionNavBar/> */}
       
      {/* <CompanyRegistrationOverview/> */}
      <SectionNavBar items={customItems} />
      {/* Add more sections here */}
      {/* <PublicLimitedCompanyRegistrationcontentSection/> */}
      <div id="Overview"><OPCRegistrationOverview /></div>
      {/* <PublicLimitedCompanyRegistrationrequires/> */}
      <div id="Advantages"><OPCRegistrationBenefit/></div>
      <div id="Eligibilty Criteria"><OPCEligibility/></div>
      <div id="Documents Required"><PLCRegistrationDocuments/></div>
      <div id="Process"><OPCRegistrationProcedure/></div>
      <div id="Features"><OPCRegistrationFeature/></div>
      <div id="Types"><OPCTypes/></div>

      {/* <div id="Why"><WhyChooseFilingLab/></div> */}
      <div id="faq"><OPCFAQs/></div>
     

      {/* Common sections across pages */}
      <TrustFilingLab />
      <OtherServices />
      <WhyChooseFilingLab />
      <GetStartedSection />
      <FSSAIFooter />
    </Layout>
  );
};
export default OnePersonCompanyRegistration;