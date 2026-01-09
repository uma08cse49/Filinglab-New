import React, { useRef, useEffect, useState } from 'react';
import StickyForm from "../../../Components/StickyForm";
import FSSAILicenseRelatedService from '../FSSAILicenseRelatedService/FSSAILicenseRelatedService';




const styles = {
  container: {
    width: '100%',
    margin: '0 10px',
    padding: '40px 70px',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  mainHeading: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#002145',
    // borderBottom: '4px solid #ed740a',
    paddingBottom: '0 px',
    marginBottom: '5 px',
  },
  accent: {
    color: '#ed740a',
  },
  paragraph: {
    color: 'black',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '20px',
    // lineHeight: '1.4'
  },
  sectionTitle: {
    fontSize: '20px',
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

const sidebarItemStyle = {
    padding: '12px 16px',
    marginBottom: '8px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    fontWeight: '600',
    color: '#002145',
    cursor: 'pointer',
    borderLeft: '4px solid #ed740a',
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#002145',
    display: 'block',
    fontWeight: 'bold',
    };

const FSSAILicenseRenewalContentSection = ({ city }) => {

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


  const [openIndex, setOpenIndex] = useState(null); // initially no FAQ open

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const faqData = [
  {
    question: 'When should I apply for FSSAI license renewal??',
    answer: 'You should apply for renewal at least 30 days before the expiry date of your existing FSSAI license to avoid penalties or cancellation.',
  },
  {
    question: 'What happens if I forget to renew my FSSAI license?',
    answer: 'If your FSSAI license is not renewed before expiry, it will be considered invalid. You may face 1.A penalty of ₹100 per day of delay ,2.Legal action , 3.The need to apply for a new license',
  },

  {
    question: 'Can I renew my FSSAI license online?',
    answer: 'Yes. Renewal can be done through the FoSCoS portal (https://foscos.fssai.gov.in/) by logging in and submitting Form B along with the required documents.',
  },
  {
    question: 'Is the process for renewal the same as for new registration?',
    answer: 'The renewal process is similar, but you must select the “Renewal” option instead of “New Application.” Also, renewal may require updated documents.',
  },
  {
    question: ' Can I renew my license after expiry?',
    answer: 'Technically no. If the renewal window has passed, you must apply for a fresh license. However, a late renewal (within grace period) may be allowed with penalty if the portal permits it.'
  },
  {
    question: 'How long is the renewed license valid?',
    answer: 'You can choose a validity period from 1 to 5 years, depending on your preference and fee payment.'
  },
  {
    question: 'Do I need to renew both State and Central licenses?',
    answer: 'Yes. Whether you hold a State License or a Central License, both need to be renewed before their respective expiry dates.'
  },
  {
    question: 'Is it mandatory to print the new license copy after renewal?',
    answer: 'Yes, you should print and display the renewed license at your food business premises.'
  },
];

const sidebarItems = [
    { label: "Overview", id: "overview" },
    { label: "Benefit", id: "benefit" },
    { label: "Listicles", id: "listicles" },
    { label: "Registration Procedure", id: "registration" },
    { label: "Penalties", id: "penalties" },
    { label: "FAQ", id: "faq" },
  ];

return (  
<div style={styles.container}>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: '#f1f1f1',
        padding: '30px 0',
    }}>

    <ul style={{ listStyle: 'none', padding: 0 }}>
        {sidebarItems.map((item) => (
            <li key={item.id} style={sidebarItemStyle}>
            <a href={`#${item.id}`} style={linkStyle}>{item.label}</a>
            </li>
        ))}
    </ul>


    {/* Main Content: Centered */}
    {/* <div style={{
        flex: 1,
        maxWidth: '700px',
        margin: '0 40px',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        borderRadius: '8px',
    }}> */}
        <div style={{
            flex: 1,
            overflowY: 'auto',
            maxHeight: '100vh',
            height: '100vh',
            padding: '40px',
            backgroundColor: '#fff',
            scrollbarWidth: 'none',         // Firefox
            msOverflowStyle: 'none',        // IE/Edge
        }}>
        {/* ⬇️ Insert your actual content sections here */}
        <h1 id = "overview" style={styles.mainHeading}>Overview of FSSAI License Renewal</h1>
            <p style={styles.paragraph}>
            FSSAI License Renewal is a mandatory process for all food business operators (FBOs) in India who already possess a valid FSSAI license or registration. The Food Safety and Standards Authority of India (FSSAI) requires every food business to renew their license before it expires to continue operations legally.
            </p>
            <p style={styles.paragraph}>
            Renewal ensures that the food business remains compliant with the latest safety regulations, maintains hygiene standards, and operates under the updated terms of the Food Safety and Standards Act, 2006.
            </p>
            
        <h1 style={styles.mainHeading}>Types of FSSAI License Renewal</h1>
            <p style={styles.paragraph}>
            There are 3 types of FSSAI License Renewal, which are given below:-
            </p>
            <h2 style={styles.sectionTitle}>Basic FSSAI Registration Renewal</h2>
                <p style={styles.paragraph}>
                This type of renewal is applicable to small food businesses with an annual turnover of up to ₹12 lakhs. It includes petty food manufacturers, street food vendors, hawkers, home-based food units, and small retailers. These businesses are required to renew their basic FSSAI registration to remain legally compliant. The license is valid for 1 to 5 years and typically carries a nominal fee of ₹100 per year.
                </p>
            <h2 style={styles.sectionTitle}>State FSSAI License Renewal</h2>    
                <p style={styles.paragraph}>
                Businesses with an annual turnover above ₹12 lakhs and up to ₹20 crores must apply for State FSSAI License Renewal. This includes mid-sized entities such as restaurants, food manufacturers, storage units, transporters, and distributors operating within a single state. The license is issued by the State Licensing Authority and is valid for 1 to 5 years, depending on the selected duration. Renewal fees may vary across states and categories.
                </p>
            <h2 style={styles.sectionTitle}>Central FSSAI License Renewal</h2>    
                <p style={styles.paragraph}>
                Large-scale food businesses with turnover exceeding ₹20 crores, or those involved in import/export or operating across multiple states, must renew their Central FSSAI License. This category includes importers, large manufacturers, exporters, and e-commerce food service platforms. Issued by the Central Licensing Authority, the license remains valid for up to 5 years and must be renewed before expiry to avoid penalties and business disruptions.
                </p>
    
        <h1 id="benefit" style={styles.mainHeading}>What are the Benefits of the Renewal of Food License?</h1>
            <p style={styles.paragraph}>
            The following are the benefit of renewing food license:
            </p>
            <p>1. Ensures Legal Compliance</p>
            <p>2. Maintains Business Continuity</p>
            <p>3. Builds Consumer Trust</p>
            <p>4. Avoids Late Penalties and Legal Action</p>
            <p>5. Required for Business Expansion</p>
            <p>6. Reflects Updated Business Details</p>

        <h1 id="listicles" style={styles.mainHeading}>What Documents are required for Food License Renewal?</h1>
            <p style={styles.paragraph}>
            Every food business operator is required to submit requisite Documents to apply for the FSSAI License Renewal.
            </p>
            <h2 style={styles.sectionTitle}>For Basic Registration</h2>  
            {/* <ul style={styles.list}> */}
                <p>✅ Form A is expected to be submitted and signed by FBOs along-with supporting Documents.</p>
                <p>✅ Identity proof such as a Pan Card, Driving license, Voter id card, Passport, Aadhaar card, senior citizen card.</p>
                <p>✅ Two passport size photos of the applicant.</p>
                <p>✅ NOC's by Municipality or Panchayat, Health Department, etc. if any.</p>
                <p>✅ Rent Agreement if any.</p>
            {/* </ul> */}

            <h2 style={styles.sectionTitle}>For State or Central FSSAI License</h2>  
            {/* <ul style={styles.list}> */}
                <p>✅ Duly completed and signed Form B.</p>
                <p>✅ Photo proof and address proof of Proprietor/ Partner/ Director(s)/ Authorized Signatory.</p>
                <p>✅ Layout plan of the food processing plant.</p>
                <p>✅ List of Directors with their full address and contact details.</p>
                <p>✅ ID and address proof of the above persons.</p>
                <p>✅ List of food category (for manufacturers).</p>
                <p>✅ Authority letter nominated by the manufacturer to act on behalf of him.</p>
                <p>✅ NOC from the municipality or any other local body.</p>
                <p>✅ Name and number of equipment's as per installed capacity and horsepower for manufacturing and processing unit.</p>
                <p>✅ Partnership deed/ or affidavit of proprietorship and in case of a company a copy of MOA and AOA.</p>
                <p>✅ Specify the source of the raw material of meat and meat processing unit and source of milk and milk-related products and milk collection center where it is applicable.</p>
                <p>✅ For the hotel industry certificate provided by the Ministry of Tourism.</p>
                <p>✅ Pesticide residue report of water for the packaging of products like minerals, carbonated beverages, etc.</p>
                <p>✅ Certificate from the Ministry of Commerce for 100 % EOU (in the case of central license).</p>
                <p>✅ IEC Registration Documents issued by DGFT (in the case of Central License).</p>
                <p>✅ Supporting Documents as proof of turnover (in the case of Central License).</p>
                <p>✅ The analysis report of water to be used in the food (in the case of Central License).</p>
                <p>✅ Possession proof is necessary (Electricity bill, sales deed, etc.) (in case of Central License).</p>
                <p>✅ A cancelled cheque.</p>
            {/* </ul> */}
            {/* <p style={styles.paragraph}>
            Additionally, following Documents should be submitted also along with the application of FSSAI Product Approval:
            </p>
            <ul style={styles.list}>
                <li>🛡️ Manufacturing method.</li>
                <li>🛡️ Datasheet of real-time stability.</li>
                <li>🛡️ Analysis Certificate from NABL Lab.</li>
                <li>🛡️ Form-9 & Undertaking.</li>
                <li>🛡️ Accelerated stability datasheet.</li>
                <li>🛡️ Label for the food item or product.</li>
                <li>🛡️ End-Use Declaration Document.</li>
            </ul> */}
        <h1 id="registration" style={styles.mainHeading}>What is the Procedure for FSSAI License Renewal?</h1>
            <p style={styles.paragraph}>
            The procedure for FSSAI License Renewal can be done offline or online both-
            </p>
            <h2 style={styles.sectionTitle}>Online Procedure for FSSAI License Renewal</h2>
            <p style={styles.paragraph}>
            Online renewal of a Food license is the easiest procedure. For obtaining the Online FSSAI License Renewal, the food business operator has to follow a required step. After complying with the process, an applicant will receive the license within 30-60 days.
            </p>
            <p style={styles.paragraph}>
            To apply online, an applicant is required to create the user id and password. Apply with the user ID and password. Also, it is important to upload all the Documents. Upon successful submission of the application, an applicant will be provided with an application reference number. Reference number helps in keeping a track of the status of the application for the renewal of a food license.
            </p>
            <p style={styles.paragraph}>
            <strong>Note-</strong>The user ID generated for the FSSAI Renewal license is valid for 30 days only. Hence, an applicant shall make sure that he/she has completed all the paper works within 30 days.
            </p>
        <h2 style={styles.sectionTitle}>Offline Procedure for FSSAI License Renewal</h2>
            <p style={styles.paragraph}>
            FSSAI Renewal process can be done offline also. In the case of offline application also, there are a few steps that need to be followed-
            </p>
            <p style={styles.paragraph}>
            <strong>Firstly,</strong> based on the eligibility of the food business, the FSSAI License is renewed by filing up the form A, B, and C.
            </p>
            <li><strong>✔️ Form A</strong> is for the renewal of Basic Food license, or</li>
            <li><strong>✔️ Form B</strong> is for the renewal of Basic Food license, or</li>
            
            <p style={styles.paragraph}>
            <strong>Secondly, </strong>a self-attested declaration is anticipated to go along with the regulations of the Food Safety and Standards Act (FSSA).
            </p>
    
            <p style={styles.paragraph}>
            <strong>Thirdly, </strong>the authority will review the application and inspects the Food business operating bases. Once the FSSAI renewal license application, is filled the authority will inspect it. The authority can also send its responsible officers to lead the examination of the FBOs.
            </p>

            <p style={styles.paragraph}>
            <strong>Fourthly, </strong>once the Food inspection officer is satisfied with the compliance and regulations of the Food Business Operator they will pass on the application along with the report of the inspection.
            </p>

            <p style={styles.paragraph}>
            <strong>And lastly, </strong>nearly by 60 days, the authorities will issue FSSAI Renewal License. If in case the license is not issued within 60 days of submission then, the Food business operator can carry on the business activity without the renewal.
            </p>

        <h2 style={styles.sectionTitle}>Additional Requirements to File the FSSAI License Renewal</h2>
            <p style={styles.paragraph}>
            Additionally, the application for FSSAI license renewal must contain an audit report, FSMS plan, Certificates, or Self-declaration regarding Food Safety Management System has to be filed together. Such a declaration should be provided on the letterhead of the FBO/ firm/ company as per the prescribed format.
            </p>   
            <p style={styles.paragraph}>
            Moreover, another requirement of the FSSAI license renewal is filing up of <strong>Form No. IX - Form for Nomination of Persons.</strong> It is the Responsibility of the company to fill the form in the prescribed format.
            </p>
            <p style={styles.paragraph}>
            Also, A Declaration signed by the Authorized signatory stating that the food business conducted conforms to the Food Safety and Standards Act, Hygiene, and Sanitary Practices.
            </p>
            <p style={styles.paragraph}>
            Furthermore, all FBOs need to comply with the Guidelines provided under Schedule 4 of the Registration and Licensing Regulation issued by the Food Safety and Standards Authority of India and to all subsequent rules issued by an authorized person/ authority from time to time. It should be attached with the application for FSSAI license renewal.
            </p>




        <h1 id="penalties" style={styles.mainHeading}>What are the Consequences of not Filing the Food Renewal License after the Expiration of the Food License Period?</h1>
            <p style={styles.paragraph}>
            If the FSSAI renewal application is not filed within the stipulated period, theFood business operator is charged with a penalty of Rs100 per day. Timely renewal is necessary, as an FSSAI license is considered expired if it is not renewed on time. Hence the food business operator must get the food renewal license done on time. Renewal of license on a timely basis is essential to avoid the penalty and unnecessary hustles. FBO must apply for the renewal 30 days prior to the date of expiry of registration or license.
            </p>

                <div style={{ width: '100%', marginTop: '50px' }}>
                        <h2 id="faq"style={styles.sectionTitle}>Frequently Asked Questions</h2>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            <button
                            onClick={() => toggleFAQ(index)}
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '15px 20px',
                                background: '#f9f9f9',
                                fontSize: '16px',
                                fontWeight: '600',
                                border: 'none',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            >
                            {item.question}
                            <span
                                style={{
                                display: 'inline-block',
                                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                }}
                            >
                                ▼
                            </span>
                            </button>
                            {openIndex === index && (
                            <div style={{ padding: '15px 20px', backgroundColor: '#fff', color: '#444' }}>
                                {item.answer}
                            </div>
                            )}
                        </div>
                        ))}
                    </div>

                {/* More content follows */}

        </div>

    

        {/* Sticky Form: Right Side */}
            <div style={{
                width: '350px',
                marginRight: '40px',
                flexShrink: 0,
                position: isFixed ? 'sticky' : 'relative',
                top: isFixed ? '100px' : 'auto',
            }}>
                <StickyForm />
                {/* <FSSAILicenseRelatedService /> */}
            </div>
        </div>
        <FSSAILicenseRelatedService />
        </div>
  );
};

export default FSSAILicenseRenewalContentSection;
