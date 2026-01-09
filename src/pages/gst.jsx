import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CustomerServiceBanner from "../Sections/Banner/CustomerServiceBanner/CustomerServiceBanner";
import BrandSlider from "./../Components/BrandSlider/BrandSlider";
import BusinessTolls from "../Sections/CustomerService/BusinessTools/BusinessTools";
import GstOverviewBanner from "../Sections/GST/GstOverviewBanner/GstOverviewBanner";
import GSTRegistrationCertificateStyle from "../Sections/GST/GSTRegistrationCertificate/GSTRegistrationCertificate";
import GSTBenefitsCircle from "../Sections/GST/GSTBenefitsCircle/GSTBenefitsCircle";
import EligibilityCriteria from "../Sections/GST/EligibilityCriteria/EligibilityCriteria";
import GSTDocuments from "../Sections/GST/GSTDocuments/GSTDocuments";
import GSTRegistrationSteps from "../Sections/GST/GSTRegistrationSteps/GSTRegistrationSteps";
import GSTNonComplianceAlert from "../Sections/GST/GSTNonComplianceAlert/GSTNonComplianceAlert";
import GSTKeyComponents from "../Sections/GST/GSTKeyComponents/GSTKeyComponents";
import GSTRoleHighlights from "../Sections/GST/GSTRoleHighlights/GSTRoleHighlights";
import GSTMistakesToAvoid from "../Sections/GST/GSTMistakesToAvoid/GSTMistakesToAvoid";
import GSTINOverview from "../Sections/GST/GSTINOverview/GSTINOverview";
import GSTvsIncomeTaxTable from "../Sections/GST/GSTvsIncomeTaxTable/GSTvsIncomeTaxTable";
import TimelineFees from "../Sections/GST/TimelineFees/TimelineFees";
import TrustFilingLab from "../Sections/GST/TrustFilingLab/TrustFilingLab";
import OtherServices from "../Sections/GST/OtherServices/OtherServices";

import SectionNavBar from "../Sections/GST/SectionNavBar/SectionNavBar";

import CustomerFeatures from "../Sections/CustomerService/CustomerFeatures/CustomerFeatures";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import WhyChoose from "../Sections/CustomerService/WhyChoose/WhyChoose";
import CustomerComparePrice from "../Sections/CustomerService/CustomerComparePrice/CustomerComparePrice";
import Integration from "../Components/Integration/Integration";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import StickyForm from "../Components/StickyForm";


const GST = () => {
  return (
    <Layout pageTitle="Filing lab -GST">
      <Header variant="v2" />
      {/* <StickyForm /> */}

      <CustomerServiceBanner />
      <SectionNavBar />
<div id="overview"><GstOverviewBanner /></div>
<div id="certificate"><GSTRegistrationCertificateStyle /></div>
<div id="benefits"><GSTBenefitsCircle /></div>
<div id="eligibility"><EligibilityCriteria /></div>
<div id="documents"><GSTDocuments /></div>
<div id="steps"><GSTRegistrationSteps /></div>
<div id="noncompliance"><GSTNonComplianceAlert /></div>
<div id="components"><GSTKeyComponents /></div>
<div id="role"><GSTRoleHighlights /></div>
<div id="mistakes"><GSTMistakesToAvoid /></div>
<div id="gstin"><GSTINOverview /></div>
<div id="gst-vs-income-tax"><GSTvsIncomeTaxTable /></div>
<div id="timeline"><TimelineFees /></div>
<div id="trust"><TrustFilingLab /></div>
<div id="otherservices"><OtherServices /></div>


      <FooterTwo />
    </Layout>
  );
};

export default GST;



