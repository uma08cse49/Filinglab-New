import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Chatbot from "./pages/chatbot";
import Home from "./pages/Home";        //commented out for home page change
import GST from "./pages/gst";
import GSTRegistration from "./pages/gstregistration";
import GSTReturning from "./pages/gstreturning";
import TaxRegistration from "./pages/tax-registration";
import TaxReturning from "./pages/tax-returning";
import TDSReturning from "./pages/tds-return-filing";
import ServiceJointFranchies from "./pages/ServiceRelated/service-joint-franchies";
import ShareholderPurchase from "./pages/ServiceRelated/shareholder-sharepurchase";

import ResidentalCommercialProbate from "./pages/PropertyRelated/residental-commercial-probate";
import SaleGiftRelinquishment from "./pages/PropertyRelated/sale-gift-relinquishment";

import CertificatesRegistrations from "./pages/LegalServices/certificates-registrations";
import ComplaintsPetitions from "./pages/LegalServices/complaints-petitions";
import DraftingServices from "./pages/LegalServices/drafting-services";
import EmployementCriminalLaw from "./pages/LegalServices/employement-criminal-law";
import FamilyPersonalLaw from "./pages/LegalServices/family-personal-law";
import LegalNotices from "./pages/LegalServices/legal-notices";
import Miscellaneous from "./pages/LegalServices/miscellaneous";
import PropertyServices from "./pages/LegalServices/property-services";

import HumanResourceTemplates from "./pages/BusinessTemplates/human-resource-templates";
import PremiumBusinessTemplates from "./pages/BusinessTemplates/premium-business-templates";

import GeneralAdvisoryServices from "./pages/AdvisoryServices/general-advisory-services";
import IndustrySpecificConsultancy from "./pages/AdvisoryServices/industry-specific-consultancy";
import LegalTaxAdvisory from "./pages/AdvisoryServices/legal-tax-advisory";

import AccountingServices from "./pages/AccountingBookKeepingServices/accounting-services";
import AuditServices from "./pages/AccountingBookKeepingServices/audit-services";
import BusinessCompliance from "./pages/AccountingBookKeepingServices/business-compliance";
import FinancialCfoServices from "./pages/AccountingBookKeepingServices/financial-cfo-services";
import TechSpecialized from "./pages/AccountingBookKeepingServices/tech-specialized";

import LegalMetrologyActRegistration from "./pages/LegalMetrology/legal-metrology-act-registration";
import LegalMetrologyCompliance from "./pages/LegalMetrology/legal-metrology-compliance";
// New Legal Metrology imports - adjust paths if needed
import ModelApprovalCertificate from "./pages/LegalMetrology/model-approval-certificate";
import LmpcImporterLicense from "./pages/LegalMetrology/lmpc-importer-license";
import LegalMetrologyDealerLicense from "./pages/LegalMetrology/legal-metrology-dealer-license";
import LegalMetrologyManufacturerLicense from "./pages/LegalMetrology/legal-metrology-manufacturer-license";
import LegalMetrologyRepairerLicense from "./pages/LegalMetrology/legal-metrology-repairer-license";
import PackagedCommodityRegistration from "./pages/LegalMetrology/packaged-commodity-registration";
import LegalMetrologyLicenseRenewal from "./pages/LegalMetrology/legal-metrology-license-renewal";

// New BIS imports - adjust paths if needed
import BisRegistration from "./pages/BIS/bis-registration";
import EcoMarkSchemeCertification from "./pages/BIS/eco-mark-scheme-certification";
import IsiMarkCertification from "./pages/BIS/isi-mark-certification";
import BisCrsRegistration from "./pages/BIS/bis-crs-registration";
import BisLabRecognition from "./pages/BIS/bis-lab-recognition";
import HallmarkRegistration from "./pages/BIS/hallmark-registration";
import AssayingHallmarkingCentre from "./pages/BIS/assaying-hallmarking-centre";
import BisCrsCertificationPowerBanks from "./pages/BIS/bis-crs-certification-power-banks";
import AgmarkLicense from "./pages/BIS/agmark-license";
import BisCertificationToys from "./pages/BIS/bis-certification-toys";
import FmcsBisCertification from "./pages/BIS/fmcs-bis-certification";

// New CDSCO imports - adjust paths if needed
import DrugLicense from "./pages/CDSCO/drug-license";
import RetailDrugLicense from "./pages/CDSCO/retail-drug-license";
import ManufacturingDrugLicense from "./pages/CDSCO/manufacturing-drug-license";
import WholesaleDrugLicense from "./pages/CDSCO/wholesale-drug-license";
import MedicalDeviceRegistration from "./pages/CDSCO/medical-device-registration";
import CdscoRegistration from "./pages/CDSCO/cdsco-registration";
import CdscoCosmeticImportRegistration from "./pages/CDSCO/cdsco-cosmetic-import-registration";
import CdscoMedicalDeviceImportLicense from "./pages/CDSCO/cdsco-medical-device-import-license";
import CosmeticManufacturingLicense from "./pages/CDSCO/cosmetic-manufacturing-license";
import InVitroDiagnosticManufacturingLicense from "./pages/CDSCO/in-vitro-diagnostic-manufacturing-license";
import InVitroDiagnosticImportLicense from "./pages/CDSCO/in-vitro-diagnostic-import-license";
import DrugExportNoc from "./pages/CDSCO/drug-export-noc";
import DualUseNoc from "./pages/CDSCO/dual-use-noc";
import CdscoTestLicense from "./pages/CDSCO/cdsco-test-license";
import AdcNoc from "./pages/CDSCO/adc-noc";
import CdscoDrugsImportLicense from "./pages/CDSCO/cdsco-drugs-import-license";

// New IRDA imports - adjust paths if needed
import InsuranceCompanyLicense from "./pages/IRDA/insurance-company-license";
import InsuranceWebAggregatorLicense from "./pages/IRDA/insurance-web-aggregator-license";
import InsuranceBrokerLicense from "./pages/IRDA/insurance-broker-license";
import InsuranceSurveyorsRegistration from "./pages/IRDA/insurance-surveyors-registration";
import InsuranceMarketingFirm from "./pages/IRDA/insurance-marketing-firm";
import InsuranceSelfNetworkPlatform from "./pages/IRDA/insurance-self-network-platform";

// New SEBI imports - adjust paths if needed
import AlternativeInvestmentFundRegistration from "./pages/SEBI/alternative-investment-fund-registration";
import MergersAndAcquisitions from "./pages/SEBI/mergers-and-acquisitions";
import RecoveryOfShares from "./pages/SEBI/recovery-of-shares";
import MerchantBankerLicense from "./pages/SEBI/merchant-banker-license";
import AmfiRegistration from "./pages/SEBI/amfi-registration";
import CollectiveInvestmentScheme from "./pages/SEBI/collective-investment-scheme";
import UnderwritersRegistrationSebi from "./pages/SEBI/underwriters-registration-sebi";

// New RBI imports - adjust paths if needed
import NbfcRegistration from "./pages/RBI/nbfc-registration";
import NbfcTakeover from "./pages/RBI/nbfc-takeover";
import FfmcLicense from "./pages/RBI/ffmc-license";
import MicrofinanceCompanyRegistration from "./pages/RBI/microfinance-company-registration";
import HousingFinanceCompanyRegistration from "./pages/RBI/housing-finance-company-registration";
import NbfcAccountAggregatorLicense from "./pages/RBI/nbfc-account-aggregator-license";
import PrepaidWalletLicense from "./pages/RBI/prepaid-wallet-license";
import PeerToPeerLendingLicense from "./pages/RBI/peer-to-peer-lending-license";
import PaymentBankLicense from "./pages/RBI/payment-bank-license";
import PaymentGatewayLicense from "./pages/RBI/payment-gateway-license";
import MobileWalletLicense from "./pages/RBI/mobile-wallet-license";
import TpapLicense from "./pages/RBI/tpap-license";

// New FEMA imports - adjust paths if needed
import FemaCompliance from "./pages/FEMA/fema-compliance";
import LiaisonOfficeRegistration from "./pages/FEMA/liaison-office-registration";
import BranchOfficeRegistration from "./pages/FEMA/branch-office-registration";
import ProjectOfficeRegistration from "./pages/FEMA/project-office-registration";

// New Telecom imports - adjust paths if needed
import UlVnoLicense from "./pages/Telecom/ul-vno-license";
import WpcImportLicense from "./pages/Telecom/wpc-import-license";
import IplcLicense from "./pages/Telecom/iplc-license";
import NonNetworkLicenseServices from "./pages/Telecom/non-network-license-services";
import NetworkLicense from "./pages/Telecom/network-license";
import AccessServiceLicenseRegistration from "./pages/Telecom/access-service-license-registration";
import DplNdplLicense from "./pages/Telecom/dpl-ndpl-license";
import DemonstrationLicense from "./pages/Telecom/demonstration-license";
import FccCertification from "./pages/Telecom/fcc-certification";


import BioMedicalWaste from "./pages/Hazardous-waste-management/Bio-Medical-Waste";
import HazardousWasteImportExport from "./pages/Hazardous-waste-management/Hazardous-Waste-Import-Export";
import HazardousWasteManagementAuthorization from "./pages/Hazardous-waste-management/Hazardous-Waste-Management-Authorization";
import OtherWasteManagementTypes from "./pages/Hazardous-waste-management/Other-Waste-Management-Types";
// // Pollution & Environment
// import PollutionNOC from "./pages/PollutionEnvironment/pollution-noc";
// import FireDepartmentNOC from "./pages/Pollution/fire-department-noc";
// import DPCC from "./pages/Pollution/delhi-pollution-control-committee";
// import UPPCB from "./pages/Pollution/uttar-pradesh-pollution-control-board";
// import PCBNOC from "./pages/Pollution/noc-pollution-control-board";
// import CGWAWaterBoring from "./pages/Pollution/cgwa-water-boring";
// import EWasteDismantling from "./pages/Pollution/e-waste-license-dismantling";
// import ChargingStationUP from "./pages/Pollution/license-charging-station-up";
// import Phase2SoilGroundwater from "./pages/Pollution/phase-ii-soil-groundwater-investigations";
// import CFESPCB from "./pages/Pollution/consent-for-establishment-spcb";

// // E-Waste Management
// import EWasteManagement from "./pages/EWaste/e-waste-management";
// import EPRRegistration from "./pages/EWaste/epr-registration";
// import RefurbisherAuthorizationLicense from "./pages/EWaste/refurbisher-authorization-license";
// import PROAuthorization from "./pages/EWaste/pro-authorization";
// import PlasticWasteAuthorization from "./pages/EWaste/plastic-waste-authorization";
// import EWasteRecyclingAuthorization from "./pages/EWaste/e-waste-recycling-authorization";
// import EPRAuthorizationEWaste from "./pages/EWaste/epr-authorization-e-waste";
// import EPRPostComplianceEWaste from "./pages/EWaste/epr-post-compliance-e-waste";
// import AuthExportEWaste from "./pages/EWaste/authorization-export-e-waste";
// import EPRTargetFulfilment from "./pages/EWaste/epr-target-fulfilment";
// import EPRAuthorizationBatteryWaste from "./pages/EWaste/epr-authorization-battery-waste";
// import EPRCreditsPlasticRecyclers from "./pages/EWaste/epr-credits-plastic-waste-recyclers";
// import EPRImporters from "./pages/EWaste/epr-for-importers";
// import EPRCredits from "./pages/EWaste/epr-credits";
// import EWasteRecyclingLicense from "./pages/EWaste/e-waste-recycling-license";
// import EPRRegProducersBrandOwners from "./pages/EWaste/epr-registration-producers-brand-owners";
// import EPRFulfilmentEWaste from "./pages/EWaste/epr-fulfilment-e-waste-management";

// // Plastic Waste Management
// import EPRAuthorizationPlasticWaste from "./pages/Plastic/epr-authorization-plastic-waste-management";
// import EPRPostCompliancePlasticWaste from "./pages/Plastic/epr-post-compliance-plastic-waste";
// import PlasticWasteRecyclingPlantPWM from "./pages/Plastic/plastic-waste-recycling-plant-pwm";
// import PlasticWasteProcessorsAuth from "./pages/Plastic/plastic-waste-processors-authorisation";
// import EPRFulfilmentPlasticWaste from "./pages/Plastic/epr-fulfilment-plastic-waste-management";

// // Hazardous Waste Management
// import SolidWasteManagementAuth from "./pages/Hazardous/solid-waste-management-authorization";
// import HazardousWasteManagementAuth from "./pages/Hazardous/hazardous-waste-management-authorization";
// import AuthImportHazardousWaste from "./pages/Hazardous/authorization-for-import-of-hazardous-waste";
// import AuthExportHazardousWaste from "./pages/Hazardous/authorization-for-export-of-hazardous-waste";
// import BioMedicalWasteRecyclingPlant from "./pages/Hazardous/bio-medical-waste-recycling-plant";
// import HazardousWasteExportAuth from "./pages/Hazardous/hazardous-waste-export-authorisation";
// import LandWasteManagement from "./pages/Hazardous/land-waste-management";
// import HazardousWasteCompliance from "./pages/Hazardous/hazardous-waste-management-and-compliance-assurance";
// import IndustrialWasteManagement from "./pages/Hazardous/industrial-waste-management";

// // Battery Waste Management
// import NewLeadAcidBatteryImportLicense from "./pages/Battery/new-lead-acid-battery-import-license";
// import LithiumIonBatteryImportLicense from "./pages/Battery/lithium-ion-battery-import-license";
// import RegLeadAcidBatteryRecycling from "./pages/Battery/registration-for-lead-acid-battery-recycling";
// import RegScrapBatteryImport from "./pages/Battery/registration-for-scrap-battery-import";

// // Environmental Licensing
// import AVSF from "./pages/EnvLicensing/authorized-vehicle-scrapping-facility";
// import TSDFFacilityServices from "./pages/EnvLicensing/tsdf-facility-services";
// import ICATCertification from "./pages/EnvLicensing/icat-certification";
// import CarbonCreditAccounting from "./pages/EnvLicensing/carbon-credit-accounting";
// import LEEDZeroCarbonCertification from "./pages/EnvLicensing/leed-zero-carbon-certification";
// import LEEDZeroWaterCertification from "./pages/EnvLicensing/leed-zero-water-certification";
// import GreenBuildingCertification from "./pages/EnvLicensing/green-building-certification";
// import PEFCCertification from "./pages/EnvLicensing/pefc-certification";
// import FSCCertification from "./pages/EnvLicensing/fsc-certification";

// // Environmental Advisory
// import ESGStrategies from "./pages/Advisory/environment-social-governance-strategies";
// import CnDWasteRecycling from "./pages/Advisory/construction-demolition-waste-recycling";
// import RiskAssessment from "./pages/Advisory/risk-assessment";
// import SupplyChainDueDiligence from "./pages/Advisory/supply-chain-human-rights-environmental-due-diligence";
// import CarbonCreditTradingScheme from "./pages/Advisory/carbon-credit-trading-scheme";
// import EnvironmentalDueDiligenceServices from "./pages/Advisory/environmental-due-diligence-services";


import CustomerService from "./pages/customer-service";
import TeamCollaboration from "./pages/team-collaboration";
import SassLanding from "./pages/sass-landing";
import Corporate from "./pages/corporate";
import AppLanding from "./pages/app-landing";
import CryptoWalletOne from "./pages/crypto-wallet-one";
import CryptoWalletTwo from "./pages/crypto-wallet-two";
import CryptoToken from "./pages/crypto-token";
import Newsletter from "./pages/newsletter";
import SassLandingTwo from "./pages/sass-landing-two";
import DefiLanding from "./pages/defi-landing";
import Chatbot from "./pages/chatbot";
import Business from "./pages/business";
import Finance from "./pages/finance";
import Accounting from "./pages/accounting";
import Portfolio from "./pages/portfolio";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";
import AboutUs from "./pages/about-us";
import OurServices from "./pages/our-services";
import ContactUs from "./pages/ContactUs";
import PricingPlan from "./pages/pricing-plan";
import Error from "./pages/Error";
import Comingsoon from "./pages/comingsoon";
import ScrollToTop from "./ScrollToTop";
import HomeOneFeatures from "./Sections/Home/Features/HomeOneFeatures"; // Update path accordingly //newly added
// import WhyChooseUs from "./components/WhyChooseUs";
import FssaiLicensePage from "./pages/fssai-license";
import FSSAILicenseRegistration from "./pages/fssailicenseregistration";
import FSSAIProductApproval from "./pages/fssaiproductapproval";
import FSSAIEatingHouseLicense from "./pages/fssaieatinghouselicense";
import FSSAILicenseRenewal from "./pages/fssailicenserenewal";
import FSSAIStateLicense from "./pages/fssaistatelicense";
import FSSAICentralLicense from "./pages/fssaicentrallicense";
import FSSAIAnnualReturn from "./pages/fssaiannualreturn";
import FSSAIFoodRecycling from "./pages/fssaifoodrecycling";
import FPOMarkCertification from "./pages/fpomarkcertification";
import CompanyRegistration from "./pages/companyregistration"
import LLPRegistration from "./pages/LLPRegistration";
import PublicLimitedCompanyRegistration from "./pages/PublicLimitedCompanyRegistration";
import OnePersonCompanyRegistration from "./pages/OnePersonCompany";
import PartnershipFirmRegistration from "./pages/partnershipfirmregistration";
import SoleProprietorshipRegistration from "./pages/soleproprietorship";
import NidhiCompanyRegistration from "./pages/nidhicompanyregistration";
import ProducerCompanyRegistration from "./pages/producercompanyregistration";
import VAChatbot from "./Sections/Home/VAChatbot/VAChatbot";



function FastPerformancePage() {
  return <h1>Fast Performance Details Page</h1>;
}
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />       {/* commented out for home page change */}
        {/* <Route path="/" element={<Chatbot />} /> */}
        <Route path="VAChatbot" element={<VAChatbot/>} />
        <Route path="/gst" element={<GST />} />
        <Route path="/gstregistration/:city" element={<GSTRegistration />} />
        <Route path="/gstreturning" element={<GSTReturning />} />
        <Route path="/tax-registration" element={<TaxRegistration />} />
        <Route path="/tax-returning" element={<TaxReturning />} />
        <Route path="/tds-return-filing" element={<TDSReturning />} />

        <Route path="/service-joint-franchies" element={<ServiceJointFranchies />} />
        <Route path="/shareholder-sharepurchase" element={<ShareholderPurchase />} />

        <Route path="/residental-commercial-probate" element={<ResidentalCommercialProbate />} />
        <Route path="/sale-gift-relinquishment" element={<SaleGiftRelinquishment />} />

<Route path="/certificates-registrations" element={<CertificatesRegistrations />} />
<Route path="/complaints-petitions" element={<ComplaintsPetitions />} />
<Route path="/drafting-services" element={<DraftingServices />} />
<Route path="/employement-criminal-law" element={<EmployementCriminalLaw />} />
<Route path="/family-personal-law" element={<FamilyPersonalLaw />} />
<Route path="/legal-notices" element={<LegalNotices />} />
<Route path="/miscellaneous" element={<Miscellaneous />} />
<Route path="/property-services" element={<PropertyServices />} />

<Route path="/human-resource-templates" element={<HumanResourceTemplates />} />
<Route path="/premium-business-templates" element={<PremiumBusinessTemplates />} />

<Route path="/general-advisory-services" element={<GeneralAdvisoryServices />} />
<Route path="/industry-specific-consultancy" element={<IndustrySpecificConsultancy />} />
<Route path="/legal-tax-advisory" element={<LegalTaxAdvisory />} />

<Route path="/accounting-services" element={<AccountingServices />} />
<Route path="/audit-services" element={<AuditServices />} />
<Route path="/business-compliance" element={<BusinessCompliance />} />
<Route path="/financial-cfo-services" element={<FinancialCfoServices />} />
<Route path="/tech-specialized" element={<TechSpecialized />} />

        
         {/* Existing Legal Metrology routes - ensure these point to the correct components */}
        <Route path="/legal-metrology-act-registration" element={<LegalMetrologyActRegistration />} />
        <Route path="/legal-metrology-compliance" element={<LegalMetrologyCompliance />} /> 
        
        {/* New routes imported from consultationData */}
        {/* Legal Metrology */}
        <Route path="/model-approval-certificate" element={<ModelApprovalCertificate />} />
        <Route path="/lmpc-importer-license" element={<LmpcImporterLicense />} />
        <Route path="/legal-metrology-dealer-license" element={<LegalMetrologyDealerLicense />} />
        <Route path="/legal-metrology-manufacturer-license" element={<LegalMetrologyManufacturerLicense />} />
        <Route path="/legal-metrology-repairer-license" element={<LegalMetrologyRepairerLicense />} />
        <Route path="/packaged-commodity-registration" element={<PackagedCommodityRegistration />} />
        <Route path="/legal-metrology-license-renewal" element={<LegalMetrologyLicenseRenewal />} />

        {/* BIS */}
        <Route path="/bis-registration" element={<BisRegistration />} />
        <Route path="/eco-mark-scheme-certification" element={<EcoMarkSchemeCertification />} />
        <Route path="/isi-mark-certification" element={<IsiMarkCertification />} />
        <Route path="/bis-crs-registration" element={<BisCrsRegistration />} />
        <Route path="/bis-lab-recognition" element={<BisLabRecognition />} />
        <Route path="/hallmark-registration" element={<HallmarkRegistration />} />
        <Route path="/assaying-hallmarking-centre" element={<AssayingHallmarkingCentre />} />
        <Route path="/bis-crs-certification-power-banks" element={<BisCrsCertificationPowerBanks />} />
        <Route path="/agmark-license" element={<AgmarkLicense />} />
        <Route path="/bis-certification-toys" element={<BisCertificationToys />} />
        <Route path="/fmcs-bis-certification" element={<FmcsBisCertification />} />

        {/* CDSCO */}
        <Route path="/drug-license" element={<DrugLicense />} />
        <Route path="/retail-drug-license" element={<RetailDrugLicense />} />
        <Route path="/manufacturing-drug-license" element={<ManufacturingDrugLicense />} />
        <Route path="/wholesale-drug-license" element={<WholesaleDrugLicense />} />
        <Route path="/medical-device-registration" element={<MedicalDeviceRegistration />} />
        <Route path="/cdsco-registration" element={<CdscoRegistration />} />
        <Route path="/cdsco-cosmetic-import-registration" element={<CdscoCosmeticImportRegistration />} />
        <Route path="/cdsco-medical-device-import-license" element={<CdscoMedicalDeviceImportLicense />} />
        <Route path="/cosmetic-manufacturing-license" element={<CosmeticManufacturingLicense />} />
        <Route path="/in-vitro-diagnostic-manufacturing-license" element={<InVitroDiagnosticManufacturingLicense />} />
        <Route path="/in-vitro-diagnostic-import-license" element={<InVitroDiagnosticImportLicense />} />
        <Route path="/drug-export-noc" element={<DrugExportNoc />} />
        <Route path="/dual-use-noc" element={<DualUseNoc />} />
        <Route path="/cdsco-test-license" element={<CdscoTestLicense />} />
        <Route path="/adc-noc" element={<AdcNoc />} />
        <Route path="/cdsco-drugs-import-license" element={<CdscoDrugsImportLicense />} />

        {/* IRDA */}
        <Route path="/insurance-company-license" element={<InsuranceCompanyLicense />} />
        <Route path="/insurance-web-aggregator-license" element={<InsuranceWebAggregatorLicense />} />
        <Route path="/insurance-broker-license" element={<InsuranceBrokerLicense />} />
        <Route path="/insurance-surveyors-registration" element={<InsuranceSurveyorsRegistration />} />
        <Route path="/insurance-marketing-firm" element={<InsuranceMarketingFirm />} />
        <Route path="/insurance-self-network-platform" element={<InsuranceSelfNetworkPlatform />} />

        {/* SEBI */}
        <Route path="/alternative-investment-fund-registration" element={<AlternativeInvestmentFundRegistration />} />
        <Route path="/mergers-and-acquisitions" element={<MergersAndAcquisitions />} />
        <Route path="/recovery-of-shares" element={<RecoveryOfShares />} />
        <Route path="/merchant-banker-license" element={<MerchantBankerLicense />} />
        <Route path="/amfi-registration" element={<AmfiRegistration />} />
        <Route path="/collective-investment-scheme" element={<CollectiveInvestmentScheme />} />
        <Route path="/underwriters-registration-sebi" element={<UnderwritersRegistrationSebi />} />

        {/* RBI */}
        <Route path="/nbfc-registration" element={<NbfcRegistration />} />
        <Route path="/nbfc-takeover" element={<NbfcTakeover />} />
        <Route path="/ffmc-license" element={<FfmcLicense />} />
        <Route path="/microfinance-company-registration" element={<MicrofinanceCompanyRegistration />} />
        <Route path="/housing-finance-company-registration" element={<HousingFinanceCompanyRegistration />} />
        <Route path="/nbfc-account-aggregator-license" element={<NbfcAccountAggregatorLicense />} />
        <Route path="/prepaid-wallet-license" element={<PrepaidWalletLicense />} />
        <Route path="/peer-to-peer-lending-license" element={<PeerToPeerLendingLicense />} />
        <Route path="/payment-bank-license" element={<PaymentBankLicense />} />
        <Route path="/payment-gateway-license" element={<PaymentGatewayLicense />} />
        <Route path="/mobile-wallet-license" element={<MobileWalletLicense />} />
        <Route path="/tpap-license" element={<TpapLicense />} />

        {/* FEMA */}
        <Route path="/fema-compliance" element={<FemaCompliance />} />
        <Route path="/liaison-office-registration" element={<LiaisonOfficeRegistration />} />
        <Route path="/branch-office-registration" element={<BranchOfficeRegistration />} />
        <Route path="/project-office-registration" element={<ProjectOfficeRegistration />} />

        {/* Telecom */}
        <Route path="/ul-vno-license" element={<UlVnoLicense />} />
        <Route path="/wpc-import-license" element={<WpcImportLicense />} />
        <Route path="/iplc-license" element={<IplcLicense />} />
        <Route path="/non-network-license-services" element={<NonNetworkLicenseServices />} />
        <Route path="/network-license" element={<NetworkLicense />} />
        <Route path="/access-service-license-registration" element={<AccessServiceLicenseRegistration />} />
        <Route path="/dpl-ndpl-license" element={<DplNdplLicense />} />
        <Route path="/demonstration-license" element={<DemonstrationLicense />} />
        <Route path="/fcc-certification" element={<FccCertification />} />

        <Route path="/hazard-waste-import-export" element={<HazardousWasteImportExport />} />
        <Route path="/other-waste-management" element={<OtherWasteManagementTypes />} />
        <Route path="/hazardous-waste-management-authorizatio" element={<HazardousWasteManagementAuthorization />} />
        <Route path="/bio-waste-management" element={<BioMedicalWaste />} />
  



{/*        
<Route path="/pollution-noc" element={<PollutionNOC />} />
<Route path="/fire-department-noc" element={<FireDepartmentNOC />} />
<Route path="/delhi-pollution-control-committee" element={<DPCC />} />
<Route path="/uttar-pradesh-pollution-control-board" element={<UPPCB />} />
<Route path="/noc-pollution-control-board" element={<PCBNOC />} />
<Route path="/cgwa-water-boring" element={<CGWAWaterBoring />} />
<Route path="/e-waste-license-dismantling" element={<EWasteDismantling />} />
<Route path="/license-charging-station-up" element={<ChargingStationUP />} />
<Route path="/phase-ii-soil-groundwater-investigations" element={<Phase2SoilGroundwater />} />
<Route path="/consent-for-establishment-spcb" element={<CFESPCB />} />

<Route path="/e-waste-management" element={<EWasteManagement />} />
<Route path="/epr-registration" element={<EPRRegistration />} />
<Route path="/refurbisher-authorization-license" element={<RefurbisherAuthorizationLicense />} />
<Route path="/pro-authorization" element={<PROAuthorization />} />
<Route path="/plastic-waste-authorization" element={<PlasticWasteAuthorization />} />
<Route path="/e-waste-recycling-authorization" element={<EWasteRecyclingAuthorization />} />
<Route path="/epr-authorization-e-waste" element={<EPRAuthorizationEWaste />} />
<Route path="/epr-post-compliance-e-waste" element={<EPRPostComplianceEWaste />} />
<Route path="/authorization-export-e-waste" element={<AuthExportEWaste />} />
<Route path="/epr-target-fulfilment" element={<EPRTargetFulfilment />} />
<Route path="/epr-authorization-battery-waste" element={<EPRAuthorizationBatteryWaste />} />
<Route path="/epr-credits-plastic-waste-recyclers" element={<EPRCreditsPlasticRecyclers />} />
<Route path="/epr-for-importers" element={<EPRImporters />} />
<Route path="/epr-credits" element={<EPRCredits />} />
<Route path="/e-waste-recycling-license" element={<EWasteRecyclingLicense />} />
<Route path="/epr-registration-producers-brand-owners" element={<EPRRegProducersBrandOwners />} />
<Route path="/epr-fulfilment-e-waste-management" element={<EPRFulfilmentEWaste />} />

<Route path="/epr-authorization-plastic-waste-management" element={<EPRAuthorizationPlasticWaste />} />
<Route path="/epr-post-compliance-plastic-waste" element={<EPRPostCompliancePlasticWaste />} />
<Route path="/plastic-waste-recycling-plant-pwm" element={<PlasticWasteRecyclingPlantPWM />} />
<Route path="/plastic-waste-processors-authorisation" element={<PlasticWasteProcessorsAuth />} />
<Route path="/epr-fulfilment-plastic-waste-management" element={<EPRFulfilmentPlasticWaste />} />

<Route path="/solid-waste-management-authorization" element={<SolidWasteManagementAuth />} />
<Route path="/hazardous-waste-management-authorization" element={<HazardousWasteManagementAuth />} />
<Route path="/authorization-for-import-of-hazardous-waste" element={<AuthImportHazardousWaste />} />
<Route path="/authorization-for-export-of-hazardous-waste" element={<AuthExportHazardousWaste />} />
<Route path="/bio-medical-waste-recycling-plant" element={<BioMedicalWasteRecyclingPlant />} />
<Route path="/hazardous-waste-export-authorisation" element={<HazardousWasteExportAuth />} />
<Route path="/land-waste-management" element={<LandWasteManagement />} />
<Route path="/hazardous-waste-management-and-compliance-assurance" element={<HazardousWasteCompliance />} />
<Route path="/industrial-waste-management" element={<IndustrialWasteManagement />} />

<Route path="/new-lead-acid-battery-import-license" element={<NewLeadAcidBatteryImportLicense />} />
<Route path="/lithium-ion-battery-import-license" element={<LithiumIonBatteryImportLicense />} />
<Route path="/registration-for-lead-acid-battery-recycling" element={<RegLeadAcidBatteryRecycling />} />
<Route path="/registration-for-scrap-battery-import" element={<RegScrapBatteryImport />} />

<Route path="/authorized-vehicle-scrapping-facility" element={<AVSF />} />
<Route path="/tsdf-facility-services" element={<TSDFFacilityServices />} />
<Route path="/icat-certification" element={<ICATCertification />} />
<Route path="/carbon-credit-accounting" element={<CarbonCreditAccounting />} />
<Route path="/leed-zero-carbon-certification" element={<LEEDZeroCarbonCertification />} />
<Route path="/leed-zero-water-certification" element={<LEEDZeroWaterCertification />} />
<Route path="/green-building-certification" element={<GreenBuildingCertification />} />
<Route path="/pefc-certification" element={<PEFCCertification />} />
<Route path="/fsc-certification" element={<FSCCertification />} />

<Route path="/environment-social-governance-strategies" element={<ESGStrategies />} />
<Route path="/construction-demolition-waste-recycling" element={<CnDWasteRecycling />} />
<Route path="/risk-assessment" element={<RiskAssessment />} />
<Route path="/supply-chain-human-rights-environmental-due-diligence" element={<SupplyChainDueDiligence />} />
<Route path="/carbon-credit-trading-scheme" element={<CarbonCreditTradingScheme />} />
<Route path="/environmental-due-diligence-services" element={<EnvironmentalDueDiligenceServices />} />  */}

        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/team-collaboration" element={<TeamCollaboration />} />
        <Route path="/sass-landing" element={<SassLanding />} />
        <Route path="/sass-landing-two" element={<SassLandingTwo />} />
        <Route path="/app-landing" element={<AppLanding />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/crypto-wallet-one" element={<CryptoWalletOne />} />
        <Route path="/crypto-wallet-two" element={<CryptoWalletTwo />} />
        <Route path="/crypto-token" element={<CryptoToken />} />
        <Route path="/defi-landing" element={<DefiLanding />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/business" element={<Business />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/" element={<HomeOneFeatures />} />
        <Route path="/fast-performance" element={<FastPerformancePage />} />

        <Route path="/fssai-license" element={<FssaiLicensePage />} />
        <Route path="/fssaiproductapproval" element={<FSSAIProductApproval />} />
        <Route path="/fssaieatinghouselicense" element={<FSSAIEatingHouseLicense />} />
        <Route path="/fssailicenserenewal" element={<FSSAILicenseRenewal />} />
        <Route path="/fssaistatelicense" element={<FSSAIStateLicense />} />
        <Route path="/fssaicentrallicense" element={<FSSAICentralLicense />} />
        <Route path="/fssaiannualreturn" element={<FSSAIAnnualReturn />} />
        <Route path="/FSSAILicenseRegistration/:city" element={<FSSAILicenseRegistration />} />
        <Route path="/fssaifoodrecycling" element={<FSSAIFoodRecycling />} />
        <Route path="/fpomarkcertification" element={<FPOMarkCertification />} />
        <Route path="/companyregistration" element={<CompanyRegistration />} />
        <Route path="/LLPRegistration" element={< LLPRegistration />} />
        <Route path="/public-limited-company-registration" element={<PublicLimitedCompanyRegistration />}/>
        <Route path="/one-person-company-registration" element={<OnePersonCompanyRegistration />} />
        <Route path="/partnership-firm-registration" element={<PartnershipFirmRegistration/>}/>
        <Route path="/sole-proprietorship-registration" element={<SoleProprietorshipRegistration/>}/>
        <Route path="/nidhi-company-registration" element={<NidhiCompanyRegistration/>}/>
        <Route path="/producer-company-registration" element={<ProducerCompanyRegistration/>}/>
      {/* </Routes> */}

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
