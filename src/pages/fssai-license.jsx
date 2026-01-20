// import HeroSection from "@/components/FSSAI/HeroSection";
// import LicenseTypesSection from "@/components/FSSAI/LicenseTypesSection";
// import header from "../../assets/data/header";
import Header from "../Sections/Header/Header";
// import HeroSection from "../Components/FSSAI/HeroSection";
import StickyForm from "../Components/StickyForm";
// import FSSAIContentSection from "../Components/FSSAI/FSSAIContentSection";
// import ScrollToTop from "./ScrollToTop";


import GstOverviewBanner from "../Sections/FSSAILicense/FSSAILicenseOverview/FSSAILicenseOverview";
import FSSAILicenseCertificateStyle from "../Sections/FSSAILicense/FSSAILicenseCertificate/FSSAILicenseCertificate";
import FSSAILicenseBenefit from "../Sections/FSSAILicense/FSSAILicenseBenefit/FSSAILicenseBenefit";
import EligibilityCriteria from "../Sections/FSSAILicense/EligibilityCriteria/EligibilityCriteria";
import FSSAILicenseDocuments from "../Sections/FSSAILicense/FSSAILicenseDocuments/FSSAILicenseDocuments";
import FSSAILicenseRegistration from "../Sections/FSSAILicense/FSSAILicenseRegistration/FSSAILicenseRegistration";
import FSSAINonCompliance from "../Sections/FSSAILicense/FSSAINonCompliance/FSSAINonCompliance";
import FSSAILicenseCategories from "../Sections/FSSAILicense/FSSAILicenseCategories/FSSAILicenseCategories";
import FSSAILicenseFeatures from "../Sections/FSSAILicense/FSSAILicenseFeatures/FSSAILicenseFeatures";
import PostRegistrationCompliance from "../Sections/FSSAILicense/PostRegistrationCompliance/PostRegistrationCompliance";
import FoodSafetyCompliance from "../Sections/FSSAILicense/FoodSafetyCompliance/FoodSafetyCompliance";
import FSSAILicenseVsRegistration from "../Sections/FSSAILicense/FSSAILicenseVsRegistration/FSSAILicenseVsRegistration";
import FSSAILicenseNeeds from "../Sections/FSSAILicense/WhoNeedLicense/WhoNeedLicense";
import TrustFilingLab from "../Sections/FSSAILicense/TrustFilingLab/TrustFilingLab";
import OtherServices from "../Sections/FSSAILicense/OtherServices/OtherServices";  
import FSSAIFooter from "../Sections/FSSAILicense/FSSAIFooter/FSSAIFooter";
import SectionNavBar from "../Sections/GST/SectionNavBar/SectionNavBar";
import HomeBanner from "../Sections/Banner/HomeBanner/HomeBanner";
import FSSAILicenseBanner from "../Sections/FSSAILicense/FSSAILicenseBanner/FSSAILicenseBanner";

// import LicenseTypesSection from "../Components/FSSAI/LicenseTypesSection";

// ...

const customItems = [
  "Overview",
  "Benefits",
  "Features of FSSAI License", // ✅ custom label for this page only
  "Penalties",
  "FAQs"
];

const FssaiLicensePage = () => {
  return (
    <main>
       <Header/>
      {/* <HeroSection /> */}
      {/* <StickyForm /> */}
      {/* <FSSAIContentSection /> */}
      {/* <SectionNavBar /> */}
      {/* <HomeBanner/> */}
      <FSSAILicenseBanner/>

      <SectionNavBar items={customItems} />
      {/* <LicenseTypesSection /> */}
      {/* Add more sections here */}
      <div id="overview"><GstOverviewBanner /></div>
      <div id="certificate"><FSSAILicenseCertificateStyle /></div>
      <div id="benefits"><FSSAILicenseBenefit /></div>
      <div id="eligibility"><EligibilityCriteria /></div>
      <div id="documents"><FSSAILicenseDocuments /></div>
      <div id="steps"><FSSAILicenseRegistration /></div>
      <div id="noncompliance"><FSSAINonCompliance /></div>
      <div id="components"><FSSAILicenseCategories /></div>
      <div id="role"><FSSAILicenseFeatures /></div>
      <div id="mistakes"><PostRegistrationCompliance/></div>
      <div id="gstin"><FoodSafetyCompliance /></div>
      <div id="gst-vs-income-tax"><FSSAILicenseVsRegistration /></div>
      <div id="timeline"><FSSAILicenseNeeds /></div>
      <div id="trust"><TrustFilingLab /></div>
      <div id="otherservices"><OtherServices /></div>
      <div id="FSSAIFooter"><FSSAIFooter /></div>
      {/* scroll top component */}
      {/* <ScrollToTop /> */}
    </main>
  );
};

export default FssaiLicensePage;
