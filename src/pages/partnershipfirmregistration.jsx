import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import PartnerShipFirmRegistrationBanner from "../Sections/Banner/PartnerShipFirmRegistrationBanner/PartnerShipFirmRegistrationBanner"

// import FooterNewsletter from "../../Components/FooterNewsletter/FooterNewsletter";
// import PartnershipFirmRegistrationOverview from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PartnershipFirmRegistrationOverview";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import ExpertSection from "../Components/ExpertSection/ExpertSection";
import WhyChooseFilingLab from "../Components/WhyChooseUs/WhyChooseUs";
import GetStartedSection from "../Components/GetStarted/GetStarted";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import SectionNavBar from "../Sections/BusinessRegistration/SectionNavBar/SectionNavBar";
import PartnershipFirmRegistrationOverview from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PartnershipFirmRegistrationOverview";
import PFRegistrationBenefits from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PFRegistrationBenefits";
import EligibilityCriteria from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/EligibilityCriteria";
import PFRegistrationDocuments from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PFRegistrationDocuments";
import PFRegistrationProcedure from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PFRegistrationProcedure";
import PFRegistrationFeatures from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PFRegistrationFeatures";
// import OPCTypes from "../Sections/BusinessRegistration/OPCTypes/OPCTypes";
import StickyForm from "../Components/StickyForm";
// import OPCComplianceRequirements from "../Sections/BusinessRegistration/OPCComplianceRequirements/OPCComplianceRequirements";
import OPCRegistrationBanner from "../Sections/Banner/OPCRegistrationBanner/OPCRegistrationBanner";
import PFRegsitrationFAQ from "../Sections/BusinessRegistration/PartnerShipFirmRegistration/PFRegistrationFAQ";
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


const PartnershipFirmRegistration = () => {
//   const { city } = useParams();
//   const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing Lab - Public Limited Company Registration `}>
      <Header variant="v2" />
      <PartnerShipFirmRegistrationBanner />
      <BrandSlider/>
      <ExpertSection/>
      {/* <SectionNavBar/> */}
       
      {/* <CompanyRegistrationOverview/> */}
      <SectionNavBar items={customItems} />
      {/* Add more sections here */}
      {/* <PublicLimitedCompanyRegistrationcontentSection/> */}
      <div id="Overview"><PartnershipFirmRegistrationOverview /></div>
      <div id="Advantages"><PFRegistrationBenefits/></div>
      <div id="Eligibilty Criteria"><EligibilityCriteria/></div>
      <div id="Documents Required"><PFRegistrationDocuments/></div>
      <div id="Process"><PFRegistrationProcedure/></div>
      <div id="Features"><PFRegistrationFeatures/></div>
      {/* <div id="Types"><OPCTypes/></div> */}

      {/* <div id="Why"><WhyChooseFilingLab/></div> */}
      <div id="faq"><PFRegsitrationFAQ/></div>
     

      {/* Common sections across pages */}
      <TrustFilingLab />
      <OtherServices/>
      <WhyChooseFilingLab />
      <GetStartedSection />
      <FSSAIFooter />
    </Layout>
  );
};
export default PartnershipFirmRegistration;