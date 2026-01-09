import React, { useRef, useEffect, useState } from 'react';
import StickyForm from "../../../Components/StickyForm";


const styles = {
  container: {
    width: '100%',
    margin: '0 10px',
    padding: '40px 70px',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#002145',
    borderBottom: '4px solid #ed740a',
    paddingBottom: '10px',
    marginBottom: '30px',
  },
  accent: {
    color: '#ed740a',
  },
  paragraph: {
    color: 'gray',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#002145',
    borderLeft: '4px solid #ed740a',
    paddingLeft: '10px',
    marginBottom: '10px',
    marginTop: '30px',
  },
  list: {
    color: 'gray',
    fontSize: '16px',
    marginLeft: '20px',
    marginBottom: '20px',
    listStyleType: 'none', // ✅ This removes the bullet
  },
  docTitle: {
    fontSize: '20px',
    color: '#ed740a',
    fontWeight: '500',
    marginTop: '10px',
  },
  highlightBox: {
    width:'68%',
    backgroundColor: '  #f1f1f1',
    padding: '20px',
    borderLeft: '5px solid #ed740a',
    marginBottom: '30px',
    borderRadius: '5px',
  },
};

const FSSAILicenseContentSection = ({ city }) => {

  const formContainerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [formTop, setFormTop] = useState(0);

  useEffect(() => {
    const updateFormTop = () => {
      if (formContainerRef.current) {
        setFormTop(formContainerRef.current.offsetTop);
      }
    };
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY >= formTop - 20);
    };
  
    updateFormTop(); // set initially
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateFormTop);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateFormTop);
    };
  }, [formTop]);

  return (
    <div style={styles.container}>
      <div style={{ display:'flex', justifyContent: 'space-between', width: '100%', marginBottom:'20px', padding:'20px', background:'#f1f1f1' }}>
        <div style={{padding:'20px',width:'70%'}}>

        <h1 style={styles.mainHeading}>
  FSSAI Registration in <span style={styles.accent}>{city}</span> - An Overview
</h1>

<p style={styles.paragraph}>
To start a food business in {city}, it is vital to get FSSAI Registration in {city}.FSSAI Basic Registration is different from the FSSAI State License or FSSAI Central License; depending on the size & nature of the business, Food Business Operators should obtain the necessary License or Registration. In 2020, FoSCos (Food Safety Compliance System) was launched by FSSAI, replacing the existing Food Licensing & Registration System (FLRS). This is a cloud-based online food safety compliance platform to provide multiservice for FBOs like granted Licenses & Registration to Food Business Operators.
</p>

{/* <p style={styles.paragraph}>
  The entire process of starting a business is not easy, and you will face many inconveniences before you can start. This includes issues related to a lack of knowledge and awareness about GST registration and its compliances.
</p>

<p style={styles.paragraph}>
  So, what are you waiting for? Secure your GST registration in {city} from our seasoned GST Registration Consultants today!
</p> */}

        </div>

         <div
        ref={formContainerRef}
        style={{
          flex: 1,
          width: '300px',
          position: isFixed ? 'fixed' : 'static',
          top: isFixed ? '100px' : 'auto',
          right: isFixed ? '185px' : '0px'
        }}
      >
        <StickyForm />
      </div> 
      </div>
      

      

<div style={styles.highlightBox}>
  <p style={{ ...styles.paragraph, color: '#002145', fontWeight: '600' }}>
  Importance of FSSAI Registration in {city}
  </p>
  <p style={styles.paragraph}>
  Before starting any food business, it is essential to fulfilling the requisite compliances and standards, and registering for FSSAI License is one of them. By obtaining a food license, one must get permission to sell the goods legally and get the benefits that cannot be availed by individuals not having the FSSAI License. The smooth functioning of the food business is managed by the Food Safety and Standards Authority of India.
  </p>
  <p style={styles.paragraph}>
  The food business is very delicate, and before starting the business, a person must ensure that the food product being used is not harmful to the consumers. Therefore, strict rules and guidelines are issued to ensure complete food safety. The major importance of the FSSAI License is that it ensures that the food is verified substantially and there is no harm to the consumers. The Food business is unsafe for many allegations of food contamination and the use of low-priced ingredients. FSSAI license protects the food business from such allegations as it acts as proof of the fact that your food is safe and perfectly edible without any health consequences.
  </p>
</div>

<h2 style={styles.sectionTitle}>Benefits of FSSAI Registration in {city}</h2>
<p style={styles.paragraph}>
  The following are the benefits of FSSAI Registration in {city}:
</p>
<ul style={styles.list}>
  <li>🛡️ Creates Public awareness.</li>
  <li>🛡️ Build Confidence and goodwill among the customers.</li>
  <li>🛡️Facilitates food safety and certifies the quality of the food processing business.</li>
  <li>🛡️The research and development sector is responsible for maintaining safety.</li>
  <li>🛡️FSSAI’s new recommendations are compatible with the international organization that helps in enhancing the food security level.</li>
  <li>🛡️FSSAI Registration acts as evidence proof studies for drafting policies.</li>
  <li>🛡️It facilitates a huge chance for business expansion.</li>
</ul>

<div style={{ width: '68%', marginTop: '40px' }}>
  <h2 style={styles.sectionTitle}>Types of FSSAI Registration</h2>

  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    <div style={{
      flex: '1',
      minWidth: '280px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    }}>
      <h3 style={{ fontSize: '20px', color: '#ed740a' }}>Basic FSSAI Registration</h3>
      <p style={{ fontWeight: 'bold', color: '#002145', marginTop: '10px' }}>For small businesses</p>
      <p style={styles.paragraph}>
        Suitable for food businesses with an annual turnover below ₹12 lakhs. Ideal for petty retailers, food vendors, and cottage industries.
      </p>
    </div>

    <div style={{
      flex: '1',
      minWidth: '280px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    }}>
      <h3 style={{ fontSize: '20px', color: '#ed740a' }}>State FSSAI License</h3>
      <p style={{ fontWeight: 'bold', color: '#002145', marginTop: '10px' }}>For mid-sized businesses</p>
      <p style={styles.paragraph}>
        Required for businesses with turnover between ₹12 lakhs and ₹20 crores. Applies to medium-sized manufacturers, storage units, and distributors.
      </p>
    </div>

    <div style={{
      flex: '1',
      minWidth: '280px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    }}>
      <h3 style={{ fontSize: '20px', color: '#ed740a' }}>Central FSSAI License</h3>
      <p style={{ fontWeight: 'bold', color: '#002145', marginTop: '10px' }}>For large businesses</p>
      <p style={styles.paragraph}>
        Required for large-scale operators or those operating in multiple states with turnover exceeding ₹20 crores. Also mandatory for food import/export.
      </p>
    </div>
  </div>
</div>



<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>Who Should Obtain FSSAI Registration in {city}?</h2>
<p style={styles.paragraph}>
The following individuals or entities are eligible for FSSAI Registration in {city}:
</p>
<ul style={styles.list}>
  {/* <li>
    Any business whose aggregate turnover in a financial year exceeds ₹20 lakhs (₹10 lakhs for special category states in GST).<br />
    <strong>Note:</strong> This clause does not apply if the entity only deals in the supply of goods/services exempt under GST.
  </li> */}
  <li>🧑‍💼 Every type of Food Manufacturer;</li>
  <li>🏢 Every packaging unit or storage unit;</li>
  <li>📦 Trading or Wholesaling or Online FBO;</li>
  <li>🚚 Exporters & Importer of food products;</li>
  <li>🚚 Transport as well as Distributors;</li>
  <li>🏬 Retailers of food products;</li>
  <li>🏢 Hotels, Caters or raw material suppliers.</li>
</ul>
</div>
{/* 
<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>Eligibility Criteria for GST Registration in {city}</h2>
<p style={styles.paragraph}>
  Have a look at the eligibility criteria for GST registration in {city}:
</p>
<ul style={styles.list}>
  <li>
    Anyone filing taxes in {city} having a turnover of more than ₹40 lakhs for the sale of goods and ₹20 lakhs for the sale of services
  </li>
  <li>Businesses engaging in inter-state taxable supplies</li>
  <li>Casual and Non-Resident Taxable Persons</li>
  <li>Persons required to pay tax under the reverse charge mechanism</li>
  <li>Voluntary registration for availing input tax credit or business expansion</li>
</ul>
</div> */}

<h2 style={styles.sectionTitle}>Documents Required for FSSAI Registration in {city}</h2>

<p style={styles.paragraph}>
Following are some vital Documents required for FSSAI Registration in {city}:
</p>

<h3 style={styles.docTitle}>Documents for FSSAI Basic Registration:</h3>
<ul style={styles.list}>
  <li>1. Photo ID of Food Business Operator;</li>
  <li>2. PAN Card of Food Business Operator;</li>
  <li>3. Declaration relating to the Business details in Form-A;</li>
  <li>4. Proof of Possession of business premises;</li>
  <li>5. Partnership Deed or Incorporation Certificate or Articles of Association (AoA), etc.;</li>
  <li>6. Supporting Documents (if any);</li>
  <li>7. NOC through Panchayat or Municipality, Health NOC.</li>
</ul>

<h3 style={styles.docTitle}>Documents for FSSAI State & FSSAI Central License:</h3>
<ul style={styles.list}>
  <li>1. Form-B duly completed and assigned;</li>
  <li>2. Layout plan of the processing unit (Manufacturing & processing unit only);</li>
  <li>3. List of Partners or Directors or Proprietor or Executive Members with contact details and Photo ID;</li>
  <li>4. Machinery details to be used for operations (Processing & Manufacturing Unit only);</li>
  <li>5. List of food categories towards being manufactured (Manufacturing Unit only);</li>
  <li>6. Authority Letter from the Manufacturer for the nominated individual with Authority;</li>
  <li>7. Analysis Report of water to be used in the manufacturing of food products;</li>
  <li>8. Proof of possession of buildings;</li>
  <li>9. Partnership Deed or Affidavit of Proprietorship or MOA or Incorporation Certificate;</li>
  <li>10. NOC & copy of License from the Manufacturer (for labellers & repackers only);</li>
  <li>11. FSMS plan as well as Recall Plan;</li>
  <li>12. NOCs from Municipality or Local Body;</li>
  <li>13. Certificate provided through the Ministry of Tourism (Compulsory for Hotel only).</li>
</ul>

<h3 style={styles.docTitle}>Additional Documents for FSSAI Central License:</h3>
<ul style={styles.list}>
  <li>1. Declaration Form;</li>
  <li>2. Ministry of Commerce Certificate for 100% EOU;</li>
  <li>3. Supporting Documentary evidence for turnover;</li>
  <li>4. NOC or PA Document issued through FSSAI;</li>
  <li>5. IEC Document issued by DGFT.</li>
</ul>

{/* <h3 style={styles.docTitle}>4. For Hindu Undivided Family (HUF)</h3>
<ul style={styles.list}>
  <li>PAN Card of the HUF</li>
  <li>Identity & Address Proof of the Karta</li>
  <li>Photograph of the Karta</li>
  <li>Bank Account Details</li>
  <li>Address Proof of the business premises</li>
</ul> */}

<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>Steps to Register for FSSAI License Online {city}?</h2>

<p style={styles.paragraph}>
  Registering for an FSSAI license online is a streamlined process. Follow these simple steps to get started:
</p>

<ol style={styles.list}>
  <li><strong>Consult with our FSSAI experts:</strong> Discuss your business type and turnover to determine the appropriate license category.</li>
  <li><strong>Provide business details:</strong> Share necessary documents such as identity proof, business address proof, and product details.</li>
  <li><strong>Form submission:</strong> Our team will fill out and submit the FSSAI application on your behalf through the FoSCoS portal.</li>
  <li><strong>Fee payment:</strong> Pay the applicable government fees for your license category (Basic, State, or Central).</li>
  <li><strong>Application tracking:</strong> Receive updates and the Application Reference Number (ARN) to track the status online.</li>
  <li><strong>License issuance:</strong> Once approved, your FSSAI certificate will be issued and emailed directly to you.</li>
</ol>
</div>

<div style={{
  backgroundColor: '#fff4e5',
  border: '2px solid #ffa94d',
  borderLeft: '10px solid #ff922b',
  borderRadius: '10px',
  padding: '20px',
  marginTop: '30px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  width:'68%'
}}>
  <h2 style={{
    color: '#d9480f',
    fontSize: '22px',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '700'
  }}>
    ⚠️ Penalties for not obtaining the FSSAI Registration?
  </h2>

  <ul style={{
    listStyle: 'square',
    paddingLeft: '20px',
    color: '#5f370e',
    fontSize: '16px',
    lineHeight: '1.8',
    fontWeight: '500'
  }}>
    <li>The quality of food is not as per the FSS Standard: Rs. 2 Lakhs, Rs. 25 thousand for petty manufacturers.</li>
    <li>Falsely labelled food items: Rs. 5 Lakhs</li>
    <li>Low-quality food products: Rs. 3 Lakhs</li>
    <li>Misleading or false advertisement Rs. 10 Lakhs</li>
    <li>Irrelevant matters in the food item: Rs. 1 Lakh</li>
    <li>Unable to comply with the food safety offer's directions: Rs. 2 Lakhs</li>
    <li>Using unhealthy ways of processing or manufacturing food products: Rs. 1 Lakh</li>
  </ul>
</div>


{/* <p style={styles.paragraph}>
  Register for GST online in {city} and avoid penalties by staying compliant.
</p> */}

<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>GST Registration Charges in {city}</h2>

<p style={styles.paragraph}>
  Consult with our experts at <strong>FilingLab</strong> to know the accurate GST registration charges in {city}.
  We simplify the GST registration process by offering complete, end-to-end guidance tailored to your business needs.
</p>

</div>

<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>Timeline for GST Registration in {city}</h2>

<p style={styles.paragraph}>
  GST registration in {city} is mandatory for certain businesses to maintain legal, regulatory, and operational transparency. 
</p>
<p style={styles.paragraph}>
  The approval timeline for GST registration is typically <strong>7 to 10 working days</strong>. However, in some cases, the complete registration process may take up to a <strong>maximum of 30 days</strong>.
</p>
</div>
<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>Trust FilingLab for GST Registration in {city}</h2>

<p style={styles.paragraph}>
  FilingLab team is at your service in fulfilling all the compliances required under GST Laws in {city}. Our team will help you ensure complete & successful GST Registration in {city} by providing the best Pre-GST and Post-GST Services. Our clients are pleased with our GST registration services in {city} as we provide a portfolio of services that makes it easy for them to comply with the tax regime.
</p>

<p style={styles.paragraph}>Here are the reasons why businesses trust us for GST registration in {city}:</p>

<ul style={styles.list}>
  <li>Successfully Processed 300+ GST Applications in {city}</li>
  <li>Over a Decade of Experience Assisting Businesses and Professionals</li>
  <li>No Hidden Charges, 100% Transparency in Pricing Guaranteed</li>
  <li>Comprehensive Documentation Assistance for GST Registration in {city}</li>
  <li>Leading the Market with a 65% Share in GST Registration Services</li>
  <li>Ensured Compliance Burden Reduction by up to 25%</li>
  <li>Ongoing Support Post-Registration</li>
  <li>99% Success Rate, Best in the State</li>
</ul>

</div>


      
    </div>
  );
};

export default FSSAILicenseContentSection;
