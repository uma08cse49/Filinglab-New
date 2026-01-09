const incometaxData = [
    {
      column: 1,
      Maintitle: "Tax Filing",
      menuList: [
        { title: "Gst Registration", dataMenu: "gst-registration", url: "/gst" },
        { title: "Income Tax Return Filing", dataMenu: "income-tax-return-filing", url: "/tax-returning" },
        { title: "GST Return Filing", dataMenu: "gst-return-filing", url: "/gstreturning" },
        { title: "TDS Return Filing", dataMenu: "tds-return-filing", url: "/tds-return-filing" },
        { title: "Professional Tax Registration", dataMenu: "professional-tax-registration", url: "/tax-registration" }
      ]
      
    }
    ,
    {
      column: 2,
      Maintitle: "Service Related",
      menuList: [
        { title: "Service Level Agreement", dataMenu: "service-level-agreement", url: "/service-joint-franchies" },
        { title: "Joint Venture Agreement", dataMenu: "joint-venture-agreement", url: "/service-joint-franchies" },
        { title: "Franchise Agreement", dataMenu: "franchise-agreement", url: "/service-joint-franchies" },

        { title: "Shareholder’s Agreement", dataMenu: "shareholders-agreement", url: "/shareholder-sharepurchase" },
        { title: "Share Purchase Agreement", dataMenu: "share-purchase-agreement", url: "/shareholder-sharepurchase" },
       
      ]
      
    }
    ,
   
    {
      column: 3,
      Maintitle: "Property Related",
      menuList: [
        { title: "Sale Deed Registration", dataMenu: "sale-deed-registration", url: "/sale-gift-relinquishment" },
        { title: "Gift Deed", dataMenu: "gift-deed", url: "/sale-gift-relinquishment" },
        { title: "Relinquishment Deed", dataMenu: "relinquishment-deed", url: "/sale-gift-relinquishment" },

        { title: "Residential Rental Agreement", dataMenu: "residential-rental-agreement", url: "/residental-commercial-probate" },
        { title: "Commercial Rental Agreement", dataMenu: "commercial-rental-agreement", url: "/residental-commercial-probate" },
        { title: "Probate of Will", dataMenu: "probate-of-will", url: "/residental-commercial-probate" }
      ]
      ,
    },
    {
      column: 4,
      Maintitle: "Legal Services",
      menuList: [
        // Legal Notices
        { title: "Legal Notice", dataMenu: "legal-notice", url: "/legal-notices" },
        { title: "Cheque Bounce Notice", dataMenu: "cheque-bounce-notice", url: "/legal-notices" },
        { title: "Divorce Notice", dataMenu: "divorce-notice", url: "/legal-notices" },
        { title: "Tenant Eviction Notice", dataMenu: "tenant-eviction-notice", url: "/legal-notices" },
        { title: "Legal Notice for Defamation", dataMenu: "notice-defamation", url: "/legal-notices" },
        { title: "Legal Notice for Non-Payment of Salary", dataMenu: "notice-non-payment-salary", url: "/legal-notices" },
        { title: "Legal Notice for Non-Payment of Dues", dataMenu: "notice-non-payment-dues", url: "/legal-notices" },
      
        // Complaints & Petitions
        { title: "RERA Complaint", dataMenu: "rera-complaint", url: "/complaints-petitions" },
        { title: "Consumer Complaint", dataMenu: "consumer-complaint", url: "/complaints-petitions" },
        { title: "Public Interest Litigation", dataMenu: "public-interest-litigation", url: "/complaints-petitions" },
        { title: "Caveat Petition", dataMenu: "caveat-petition", url: "/complaints-petitions" },
        { title: "Writ Petition", dataMenu: "writ-petition", url: "/complaints-petitions" },
        { title: "Special Leave Petition", dataMenu: "special-leave-petition", url: "/complaints-petitions" },
      
        // Family & Personal Law
        { title: "Mutual Divorce", dataMenu: "mutual-divorce", url: "/family-personal-law" },
        { title: "Divorce Settlement Agreement", dataMenu: "divorce-settlement-agreement", url: "/family-personal-law" },
        { title: "Marriage Registration", dataMenu: "marriage-registration", url: "/family-personal-law" },
        { title: "Hindu Marriage Act", dataMenu: "hindu-marriage-act", url: "/family-personal-law" },
        { title: "Judicial Separation", dataMenu: "judicial-separation", url: "/family-personal-law" },
        { title: "Domestic Violence", dataMenu: "domestic-violence", url: "/family-personal-law" },
      
        // Certificates & Registrations
        { title: "Legal Heir Certificate", dataMenu: "legal-heir-certificate", url: "/certificates-registrations" },
        { title: "Succession Certificate in India", dataMenu: "succession-certificate", url: "/certificates-registrations" },
        { title: "Lease Registration", dataMenu: "lease-registration", url: "/certificates-registrations" },
        { title: "Will Registration", dataMenu: "will-registration", url: "/certificates-registrations" },
        { title: "Property Registration", dataMenu: "property-registration", url: "/certificates-registrations" },
      
        // Drafting Services
        { title: "Lease Agreement Drafting", dataMenu: "lease-agreement-drafting", url: "/drafting-services" },
        { title: "Will Drafting", dataMenu: "will-drafting", url: "/drafting-services" },
        { title: "Consulting Agreement", dataMenu: "consulting-agreement", url: "/drafting-services" },
        { title: "Vendor Agreement", dataMenu: "vendor-agreement", url: "/drafting-services" },
        { title: "License Agreement", dataMenu: "license-agreement", url: "/drafting-services" },
        { title: "Power of Attorney (POA)", dataMenu: "poa", url: "/drafting-services" },
        { title: "Asset Purchase Agreement", dataMenu: "asset-purchase-agreement", url: "/drafting-services" },
      
        // Property Services
        { title: "Property Valuation", dataMenu: "property-valuation", url: "/property-services" },
        { title: "Property Verification", dataMenu: "property-verification", url: "/property-services" },
      
        // Employment & Criminal Law
        { title: "Bail Application", dataMenu: "bail-application", url: "/employement-criminal-law" },
        { title: "Sexual Harassment at Workplace", dataMenu: "sexual-harassment", url: "/employement-criminal-law" },
      
        // Miscellaneous
        { title: "Section 8-Demand Notice", dataMenu: "section-8-demand-notice", url: "/miscellaneous" },
        { title: "Defamation Law in India", dataMenu: "defamation-law", url: "/miscellaneous" },
        { title: "Civil Law", dataMenu: "civil-law", url: "/miscellaneous" },
        { title: "Quashing of FIR", dataMenu: "quashing-fir", url: "/miscellaneous" }
      ]
      
      ,
    },
    {
      column: 5,
      Maintitle: "Accounting & Book Keeping Services",
      menuList: [
        // Audit Services
        { title: "Secretarial Audit", dataMenu: "secretarial-audit", url: "/audit-services" },
        { title: "Tax Audit", dataMenu: "tax-audit", url: "/audit-services" },
        { title: "Forensic Audit", dataMenu: "forensic-audit", url: "/audit-services" },
        { title: "Manufacturing Audit", dataMenu: "manufacturing-audit", url: "/audit-services" },
        { title: "Technical Audit", dataMenu: "technical-audit", url: "/audit-services" },
        { title: "Factory Sanitation Audit", dataMenu: "factory-sanitation", url: "/audit-services" },
        { title: "Ethical Audits", dataMenu: "ethical-audit", url: "/audit-services" },
        { title: "Insurance Audit", dataMenu: "insurance-audit", url: "/audit-services" },
      
        // Financial & CFO Services
        { title: "Virtual CFO Services", dataMenu: "virtual-cfo-services", url: "/financial-cfo-services" },
        { title: "Fractional CFO Services", dataMenu: "fractional-cfo", url: "/financial-cfo-services" },
      
        // Accounting Services
        { title: "Accounts Payable Service", dataMenu: "accounts-payable", url: "/accounting-services" },
        { title: "Accounts Receivable Services", dataMenu: "accounts-receivable", url: "/accounting-services" },
        { title: "Bookkeeping Services", dataMenu: "bookkeeping", url: "/accounting-services" },
      
        // Business & Compliance
        { title: "Due Diligence", dataMenu: "due-diligence", url: "/business-compliance" },
        { title: "Business Plan", dataMenu: "business-plan", url: "/business-compliance" },
        { title: "Fundraising Services", dataMenu: "fundraising", url: "/business-compliance" },
        { title: "Term sheet", dataMenu: "term-sheet", url: "/business-compliance" },
      
        // Tech & Specialized
        { title: "M2M Communications", dataMenu: "m2m-communications", url: "/tech-specialized" }
      ]
      
      ,
    },
    {
      column: 6,
      Maintitle: "Advisory Service",
      menuList: [
        // General Advisory Services
        { title: "Professional Advisory Services", dataMenu: "professional-advisory", url: "/general-advisory-services" },
      
        // Legal & Tax Advisory
        { title: "Legal Advisory Services", dataMenu: "legal-advisory", url: "/legal-tax-advisory" },
        { title: "GST Advisory Services", dataMenu: "gst-advisory", url: "/legal-tax-advisory" },
      
        // Industry-Specific Consultancy
        { title: "Pharma Consultancy Services in India", dataMenu: "pharma-consultancy", url: "/industry-specific-consultancy" }
      ]
      
      ,
    },
    {
      column: 7,
      Maintitle: "Business Templates",
      menuList: [
        { title: "Premium Business Templates", dataMenu: "premium-business-templates", url: "/premium-business-templates" },
        { title: "Human Resource Templates", dataMenu: "human-resource-templates", url: "/human-resource-templates" }
      ]
      ,
    },
  ];
  
  export default incometaxData;
