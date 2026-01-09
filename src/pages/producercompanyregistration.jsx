import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import PCRegistrationBanner from "../Sections/Banner/ProducerCompanyRegistrationBanner/PCRegistrationBanner"

// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
// import PartnershipFirmRegistrationOverview from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PartnershipFirmRegistrationOverview";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import SectionNavBar from "../Sections/BusinessRegistration/SectionNavBar/SectionNavBar";
import PCRegistrationOverview from "../Sections/BusinessRegistration/ProducerCompanyRegistration/ProducerCompanyRegistrationOverview";
import PCRegistrationBenefits from "../Sections/BusinessRegistration/ProducerCompanyRegistration/PCRegistrationBenefits";
import EligibilityCriteria from "../Sections/BusinessRegistration/ProducerCompanyRegistration/PCRegistrationEligibility";
import SPRegistrationDocuments from "../Sections/BusinessRegistration/SoleProprietorshipRegistration/SPRegistrationDocuments";
import SPRegistrationProcedure from "../Sections/BusinessRegistration/SoleProprietorshipRegistration/SPRegistrationProcedure";
import SPRegistrationFeatures from "../Sections/BusinessRegistration/SoleProprietorshipRegistration/SPRegistrationFeatures";
import SPRegistrationTypes from "../Sections/BusinessRegistration/SoleProprietorshipRegistration/SPRegistrationTypes";
import StickyForm from "../Components/StickyForm";
// import OPCComplianceRequirements from "../Sections/BusinessRegistration/OPCComplianceRequirements/OPCComplianceRequirements";
// import OPCRegistrationBanner from "../Sections/Banner/OPCRegistrationBanner/OPCRegistrationBanner";
import SPRegistrationFAQ from "../Sections/BusinessRegistration/SoleProprietorshipRegistration/SPRegistrationFAQ";
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


const ProducerCompanyRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing Lab - Public Limited Company Registration `}>
      <Header variant="v2" />
      <PCRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
      {/* <SectionNavBar/> */}
       
      {/* <CompanyRegistrationOverview/> */}
      <SectionNavBar items={customItems} />
      {/* Add more sections here */}
      {/* <PublicLimitedCompanyRegistrationcontentSection/> */}
      <div id="Overview"><PCRegistrationOverview /></div>
      <div id="Advantages"><PCRegistrationBenefits/></div>
      <div id="Eligibilty Criteria"><EligibilityCriteria/></div>
      <div id="Documents Required"><SPRegistrationDocuments/></div>
      <div id="Process"><SPRegistrationProcedure/></div>
      <div id="Features"><SPRegistrationFeatures/></div>
      <div id="Types"><SPRegistrationTypes/></div>

      {/* <div id="Why"><WhyChooseFilingLab/></div> */}
      
      <div id="faq"><SPRegistrationFAQ/></div>
     

      {/* Common sections across pages */}
      <TrustFilingLab />
      <OtherServices />
      <WhyChooseFilingLab />
      <GetStartedSection />
      <FSSAIFooter />
    </Layout>
  );
};
export default ProducerCompanyRegistration;