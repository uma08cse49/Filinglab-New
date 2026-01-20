import React, { useRef, useEffect, useState } from 'react';
import StickyForm from "../../Components/StickyForm";

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
    color: ' #002145',
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

const GSTContentSection = ({ city }) => {

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
  GST Registration in <span style={styles.accent}>{city}</span> - An Overview
</h1>

<p style={styles.paragraph}>
  {city} is known for its high economic growth rate, stable political environment, hardworking labour pool, and infrastructure support. It is a hub for industries such as pharmaceuticals and food processing. The state offers a wide range of policies and initiatives for businesses, making it the best place to start a new venture. So, GST registration in {city} is essential if you are a business owner.
</p>

<p style={styles.paragraph}>
  The entire process of starting a business is not easy, and you will face many inconveniences before you can start. This includes issues related to a lack of knowledge and awareness about GST registration and its compliances.
</p>

<p style={styles.paragraph}>
  So, what are you waiting for? Secure your GST registration in {city} from our seasoned GST Registration Consultants today!
</p>

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
    What is the GSTIN Number?
  </p>
  <p style={styles.paragraph}>
    Goods and Services Tax Identification Number, better known as GSTIN, is a distinctive 15-digit alphanumeric code assigned to every taxpayer who is registered under the GST regime in India. The GSTIN is the primary identifier for individuals and businesses in GST-related matters for seamless transactions and regulatory compliance.
  </p>
  <p style={styles.paragraph}>
    After the applicants successfully apply for GST registration, they are issued GSTIN, which is mandatory for smooth business operations and executing tax obligations.
  </p>
</div>

<h2 style={styles.sectionTitle}>Benefits of GST Registration in {city}</h2>
<p style={styles.paragraph}>
  Given below are the significant benefits of GST registration in {city}:
</p>
<ul style={styles.list}>
  <li>A single uniform tax on Goods and Services across the country</li>
  <li>Eliminates the cascading effects of taxes</li>
  <li>Enhanced exemption limit for small goods and service providers</li>
  <li>Small traders benefit from the Composition Scheme</li>
  <li>Fewer tax compliances as the number of tax returns to be filed under GST is reduced</li>
  <li>The entire registration and compliance process in GST is online</li>
  <li>Helps manage unorganized businesses</li>
</ul>


<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>Who is Required to Register for GST in {city}?</h2>
<p style={styles.paragraph}>
  The following persons are required to get registered under GST in {city}:
</p>
<ul style={styles.list}>
  <li>
    Any business whose aggregate turnover in a financial year exceeds ₹20 lakhs (₹10 lakhs for special category states in GST).<br />
    <strong>Note:</strong> This clause does not apply if the entity only deals in the supply of goods/services exempt under GST.
  </li>
  <li>Every person who is registered under an earlier law of taxation (i.e., Excise, VAT, Service Tax, etc.)</li>
  <li>Needs to get registered under Goods and Services Tax</li>
  <li>Any entity or supplier dealing in inter-state supply of goods</li>
  <li>Casual taxable person</li>
  <li>Non-Resident taxable person</li>
  <li>Agents of a supplier</li>
  <li>Person paying tax under the reverse charge mechanism</li>
  <li>Input service distributor and its agent</li>
  <li>E-Commerce operator or aggregator*</li>
  <li>A person who supplies through an E-commerce aggregator</li>
  <li>
    Entities who are providing online information, acquiring database, or retrieval services from a place located outside India to a person in India, other than a registered taxable person
  </li>
</ul>
</div>

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
</div>

<h2 style={styles.sectionTitle}>Documents Required in {city}</h2>

<p style={styles.paragraph}>
  Depending upon the type of business, the following documents are required to apply for GST in {city}:
</p>

<h3 style={styles.docTitle}>1. For Sole Proprietorship / Individuals</h3>
<ul style={styles.list}>
  <li>PAN Card of the owner</li>
  <li>Aadhaar Card of the owner</li>
  <li>Photograph of the owner (JPEG format, max size – 100 KB)</li>
  <li>Bank Account Details / Cancelled Cheque</li>
  <li>Address Proof</li>
</ul>

<h3 style={styles.docTitle}>2. For Partnership Firm / LLP</h3>
<ul style={styles.list}>
  <li>Identity Proof and Address Proof of all partners</li>
  <li>Copy of Partnership Deed</li>
  <li>Photographs of the partners and authorized signatory</li>
  <li>Identity & Address Proof of the authorized signatory</li>
  <li>Proof of appointment of authorized signatory</li>
  <li>Registration Certificate and Board Resolution (in case of LLP)</li>
  <li>Bank Account Details</li>
  <li>Address Proof of the principal place of business</li>
</ul>

<h3 style={styles.docTitle}>3. For Companies</h3>
<ul style={styles.list}>
  <li>PAN Card of the Company</li>
  <li>Certificate of Incorporation</li>
  <li>Memorandum and Articles of Association (MOA & AOA)</li>
  <li>Identity & Address Proof of all directors</li>
  <li>Photographs of directors and authorized signatory</li>
  <li>Identity & Address Proof of authorized signatory (must be Indian)</li>
  <li>Board Resolution appointing authorized signatory</li>
  <li>Bank Account Details</li>
  <li>Address Proof of the working premises</li>
</ul>

<h3 style={styles.docTitle}>4. For Hindu Undivided Family (HUF)</h3>
<ul style={styles.list}>
  <li>PAN Card of the HUF</li>
  <li>Identity & Address Proof of the Karta</li>
  <li>Photograph of the Karta</li>
  <li>Bank Account Details</li>
  <li>Address Proof of the business premises</li>
</ul>

<div style={{width:'68%'}}>
<h2 style={styles.sectionTitle}>How to Register for GST Online in {city}?</h2>

<p style={styles.paragraph}>
  The process mentioned below will give you a clear understanding of how to apply for GST registration online in {city}. Follow these 5 easy steps through which we will help you register for GST:
</p>

<ol style={styles.list}>
  <li>Talk to our GST registration consultants in {city} and get your queries resolved.</li>
  <li>Provide essential business details such as the name of the business, PAN card details, and other necessary documents.</li>
  <li>Our experts will contact you and assist you with the GST registration process. After filling out the forms, you will receive an OTP for verification.</li>
  <li>Once the verification is completed successfully, you will receive the ARN (Application Reference Number).</li>
  <li>After successful processing, your GST registration certificate will be issued.</li>
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
    ⚠️ Penalty for Failure to Register for GST Online
  </h2>

  <ul style={{
    listStyle: 'square',
    paddingLeft: '20px',
    color: '#5f370e',
    fontSize: '16px',
    lineHeight: '1.8',
    fontWeight: '500'
  }}>
    <li>Late fee of ₹100 per day, per Act (₹200 per day for CGST and SGST combined).</li>
    <li>A penalty of 10% of the tax due, subject to a minimum of ₹10,000.</li>
    <li>Imprisonment of up to six months for wilful evasion of GST.</li>
  </ul>
</div>


<p style={styles.paragraph}>
  Register for GST online in {city} and avoid penalties by staying compliant.
</p>

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

export default GSTContentSection;
