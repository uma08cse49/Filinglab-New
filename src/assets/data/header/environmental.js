const complianceData = [
    {
    column: 1,
    Maintitle: "Pollution & Environment",
    menuList: [
      { title: "Pollution NOC", dataMenu: "pollution-noc", url: "/pollution-noc" },
      { title: "Fire Department NOC", dataMenu: "fire-noc", url: "/fire-department-noc" },
      { title: "Delhi Pollution Control Committee", dataMenu: "dpcc", url: "/delhi-pollution-control-committee" },
      { title: "Uttar Pradesh Pollution Control Board", dataMenu: "uppcb", url: "/uttar-pradesh-pollution-control-board" },
      { title: "NOC Pollution Control Board", dataMenu: "pcb-noc", url: "/noc-pollution-control-board" },
      { title: "CGWA-Water Boring", dataMenu: "cgwa-water-boring", url: "/cgwa-water-boring" },
      { title: "E-waste License for Dismantling", dataMenu: "e-waste-dismantling", url: "/e-waste-license-dismantling" },
      { title: "License for charging station in UP", dataMenu: "charging-station-up", url: "/license-charging-station-up" },
      { title: "Phase II Soil and Groundwater Investigations", dataMenu: "phase2-soil-groundwater", url: "/phase-ii-soil-groundwater-investigations" },
      { title: "Consent for Establishment (CFE) from SPCB", dataMenu: "cfe-spcb", url: "/consent-for-establishment-spcb" }
    ],
  }
    ,
     {
  column: 2, 
  Maintitle: "E-Waste Management",
  menuList: [
    // E-Waste Management & Recycling
    { title: "E-Waste Management", dataMenu: "e-waste-management", url: "/e-waste-management" },
    { title: "E-Waste Recycling Authorization", dataMenu: "e-waste-recycling-auth", url: "/e-waste-recycling-authorization" },
    { title: "E-waste Recycling license", dataMenu: "e-waste-recycling-license", url: "/e-waste-recycling-license" },
    { title: "Authorization for Export of E-waste", dataMenu: "auth-export-e-waste", url: "/authorization-export-e-waste" },

    // EPR Registration & Authorization
    { title: "EPR Registration", dataMenu: "epr-registration", url: "/epr-registration" },
    { title: "EPR Registration for Producers and Brand Owners", dataMenu: "epr-reg-producers-brand-owners", url: "/epr-registration-producers-brand-owners" },
    { title: "EPR Authorization for E-waste", dataMenu: "epr-auth-e-waste", url: "/epr-authorization-e-waste" },
    { title: "EPR Authorization For Battery Waste", dataMenu: "epr-auth-battery-waste", url: "/epr-authorization-battery-waste" },
    { title: "EPR for Importers", dataMenu: "epr-importers", url: "/epr-for-importers" },

    // EPR Compliance & Target Fulfilment
    { title: "EPR Post Compliance (E-Waste)", dataMenu: "epr-post-compliance-e-waste", url: "/epr-post-compliance-e-waste" },
    { title: "EPR Target Fulfilment", dataMenu: "epr-target-fulfilment", url: "/epr-target-fulfilment" },
    { title: "EPR Fulfillment in E-Waste Management", dataMenu: "epr-fulfilment-e-waste", url: "/epr-fulfilment-e-waste-management" },

    // Plastic Waste & PRO Authorization
    { title: "Plastic Waste Authorization", dataMenu: "plastic-waste-auth", url: "/plastic-waste-authorization" },
    { title: "PRO Authorization", dataMenu: "pro-authorization", url: "/pro-authorization" },
    { title: "EPR Credits From Plastic Waste Recyclers", dataMenu: "epr-credits-plastic-recyclers", url: "/epr-credits-plastic-waste-recyclers" },

    // EPR Credits & Trading
    { title: "EPR Credits", dataMenu: "epr-credits", url: "/epr-credits" },

    // Refurbishment
    { title: "Refurbisher Authorization and License", dataMenu: "refurbisher-auth-license", url: "/refurbisher-authorization-license" }
  ],
}

    ,
   
   {
    column: 3,
    Maintitle: "Plastic Waste Management",
    menuList: [
      { title: "EPR Authorization for Plastic waste Management", dataMenu: "epr-auth-plastic-waste", url: "/epr-authorization-plastic-waste-management" },
      { title: "EPR Post Compliance – Plastic Waste", dataMenu: "epr-post-compliance-plastic-waste", url: "/epr-post-compliance-plastic-waste" },
      { title: "Plastic Waste Recycling Plant & PWM", dataMenu: "plastic-waste-recycling-plant-pwm", url: "/plastic-waste-recycling-plant-pwm" },
      { title: "Plastic Waste Processors Authorisation", dataMenu: "plastic-waste-processors-auth", url: "/plastic-waste-processors-authorisation" },
      { title: "EPR Fulfilment For Plastic Waste Management", dataMenu: "epr-fulfilment-plastic-waste", url: "/epr-fulfilment-plastic-waste-management" }
    ],
  },
   {
  column: 4, // New column number
  Maintitle: "Hazardous Waste Management",
  menuList: [
    // Hazardous Waste Management & Authorization
    { title: "Hazardous Waste Management Authorization", dataMenu: "hazardous-waste-management-auth", url: "/hazardous-waste-management-authorization" },
    { title: "Hazardous Waste Management and Compliance Assurance", dataMenu: "hazardous-waste-compliance", url: "/hazardous-waste-management-authorization" },

    // Hazardous Waste Import/Export
    { title: "Authorization for Import of Hazardous Waste", dataMenu: "auth-import-hazardous-waste", url: "/hazard-waste-import-export" },
    { title: "Authorization for Export of Hazardous Waste", dataMenu: "auth-export-hazardous-waste", url: "/hazard-waste-import-export" },
    { title: "Hazardous Waste Export Authorisation", dataMenu: "hazardous-waste-export-auth", url: "/hazard-waste-import-export" },

    // Other Waste Management Types
    { title: "Solid Waste Management Authorization", dataMenu: "solid-waste-management-auth", url: "/other-waste-management" },
    { title: "Land Waste Management", dataMenu: "land-waste-management", url: "/other-waste-management" },
    { title: "Industrial Waste Management", dataMenu: "industrial-waste-management", url: "/other-waste-management" },

    // Bio-Medical Waste
    { title: "Bio Medical Waste Recycling Plant", dataMenu: "bio-medical-waste-recycling-plant", url: "/bio-waste-management" }
  ],
}
,
   {
    column: 5, // New column number
    Maintitle: "Battery Waste Management",
    menuList: [
      { title: "New Lead Acid Battery Import License", dataMenu: "new-lead-acid-battery-import-license", url: "/new-lead-acid-battery-import-license" },
      { title: "Lithium-Ion Battery Import License", dataMenu: "lithium-ion-battery-import-license", url: "/lithium-ion-battery-import-license" },
      { title: "Registration for Lead Acid Battery Recycling", dataMenu: "reg-lead-acid-battery-recycling", url: "/registration-for-lead-acid-battery-recycling" },
      { title: "Registration for Scrap Battery Import", dataMenu: "reg-scrap-battery-import", url: "/registration-for-scrap-battery-import" }
    ],
  },
    {
    column: 6, // New column number
    Maintitle: "Environmental Licensing",
    menuList: [
      { title: "Authorized Vehicle Scrapping Facility (AVSF)", dataMenu: "avsf", url: "/authorized-vehicle-scrapping-facility" },
      { title: "TSDF Facility Services", dataMenu: "tsdf-facility-services", url: "/tsdf-facility-services" },
      { title: "iCAT Certification", dataMenu: "icat-certification", url: "/icat-certification" },
      { title: "Carbon Credit Accounting", dataMenu: "carbon-credit-accounting", url: "/carbon-credit-accounting" },
      { title: "LEED Zero Carbon Certification", dataMenu: "leed-zero-carbon-certification", url: "/leed-zero-carbon-certification" },
      { title: "LEED Zero Water Certification", dataMenu: "leed-zero-water-certification", url: "/leed-zero-water-certification" },
      { title: "Green Building Certification", dataMenu: "green-building-certification", url: "/green-building-certification" },
      { title: "PEFC Certification", dataMenu: "pefc-certification", url: "/pefc-certification" },
      { title: "FSC Certification", dataMenu: "fsc-certification", url: "/fsc-certification" }
    ],
  },
   {
    column: 7 , // New column number
    Maintitle: "Environmental Advisory",
    menuList: [
      { title: "Environment, Social and Governance (ESG) Strategies", dataMenu: "esg-strategies", url: "/environment-social-governance-strategies" },
      { title: "Construction and Demolition (C&D) Waste Recycling", dataMenu: "cnd-waste-recycling", url: "/construction-demolition-waste-recycling" },
      { title: "Risk Assessment", dataMenu: "risk-assessment", url: "/risk-assessment" },
      { title: "Supply Chain and Human Rights and Environmental Due Diligence", dataMenu: "supply-chain-human-rights-environmental-due-diligence", url: "/supply-chain-human-rights-environmental-due-diligence" },
      { title: "Carbon Credit Trading Scheme", dataMenu: "carbon-credit-trading-scheme", url: "/carbon-credit-trading-scheme" },
      { title: "Environmental Due Diligence Services", dataMenu: "environmental-due-diligence-services", url: "/environmental-due-diligence-services" }
    ],
  },
  ];
  
  export default complianceData;

 
                        