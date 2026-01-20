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

const thStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    };
    
const tdStyle = {
border: '1px solid #ddd',
padding: '10px',
verticalAlign: 'top',
};
      

const FSSAIStateLicenseContentSection = ({ city }) => {

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
    question: 'What is an FSSAI State License?',
    answer: 'An FSSAI State License is issued by the State Food Safety Department to medium-sized food businesses with an annual turnover between ₹12 lakhs and ₹20 crores. It certifies that the business complies with the food safety standards outlined in the FSS Act, 2006.',
  },
  {
    question: 'Who needs to apply for an FSSAI State License?',
    answer: 'Any food business operator (FBO) involved in manufacturing, storage, distribution, transportation, or retail with a turnover of more than ₹12 lakhs but not exceeding ₹20 crores annually must obtain a State License.'
  },

  {
    question: 'What is the validity period of the FSSAI State License?',
    answer: 'The license can be issued for a period ranging from 1 to 5 years, based on the applicant’s choice and fee payment. It must be renewed before expiry to avoid penalties.',
  },
  {
    question: 'What documents are required for obtaining a State License?',
    answer: 'Key documents include Form B, identity/address proof, proof of business premises, Food Safety Management System (FSMS) plan, list of food products, water testing report, and NOC from the municipality (if applicable).',
  },
  {
    question: ' How long does it take to get the FSSAI State License?',
    answer: 'If all documents are correctly submitted, the license is typically issued within 7–15 working days, though the timeline may vary slightly based on the state authority.'
  },
  {
    question: 'Can I operate in multiple states with a State License?',
    answer: 'No. A State License is valid only within one state. If your business operates in multiple states, you will need to apply for a Central FSSAI License.'
  },
  {
    question: 'How can I renew my State License?',
    answer: 'You must apply for renewal through the FSSAI FoSCoS portal at least 30 days before the license expiry date. Delayed renewals may attract penalties or cancellation.'
  },
  {
    question: 'What happens if I don’t obtain an FSSAI license?',
    answer: 'Operating a food business without a valid FSSAI license is a punishable offense. It may result in heavy penalties, business shutdown, and even imprisonment under the FSSAI Act.'
  },
];

const sidebarItems = [
    { label: "Overview", id: "overview" },
    { label: "Benefit", id: "benefit" },
    { label: "Documents Required", id: "documents-required" },
    { label: "Registration Procedure", id: "registration" },
    { label: "Fees Structure", id: "fees-structure" },
    { label: "Registration Timeline", id: "registration-timeline" },
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
        <h1 id = "overview" style={styles.mainHeading}>FSSAI State License - An Overview</h1>
            <p style={styles.paragraph}>
            The FSSAI State License is a mandatory food safety certificate issued by the State Food Safety Authority under the Food Safety and Standards Act, 2006. It is required for medium-sized food business operators (FBOs) with an annual turnover ranging from ₹12 lakhs to ₹20 crores, operating within a single state.
            </p>
            <p style={styles.paragraph}>
            This license ensures that the food business complies with all applicable hygiene and safety standards, thereby safeguarding public health. Whether you are engaged in manufacturing, processing, storage, transportation, or distribution of food, securing an FSSAI State License is essential for legal and safe operations.
            </p>
            <p style={styles.paragraph}>
            The license is typically valid for 1 to 5 years, and renewal must be initiated at least 30 days before expiry to avoid penalties. The State Licensing Authority reviews the application along with documents such as identity proofs, FSMS plan, and product details before granting the license.
            </p>
            <p style={styles.paragraph}>
            Possessing an FSSAI State License not only ensures regulatory compliance but also enhances the credibility and trustworthiness of your food business in the market.
            </p>
            
        <h1 style={styles.mainHeading}>Role of the Food Safety and Standards Authority of India</h1>
            <p style={styles.paragraph}>
            FSSAI (Food Safety and Standards Authority of India) oversees and monitors food safety to safeguard public health. The key roles of the Food Safety and Standards Authority of India are as follows:
            </p>
            <p style={styles.paragraph}>✅Formulating guidelines and norms for the food sector</p>
            <p style={styles.paragraph}>✅Introducing initiatives related to food safety awareness</p>
            <p style={styles.paragraph}>✅Releasing directions for food business operators</p>
            <p style={styles.paragraph}>✅Setting out norms and rules for food testing labs</p>
            <p style={styles.paragraph}>✅Accumulating Data pertaining to contaminants in food articles</p>
            <p style={styles.paragraph}>✅To facilitate recommendations to the Indian Government for formulating new provisions</p>
            <p style={styles.paragraph}>✅Utilizing a rapid alert system for prompt identification of issues in food articles available to the public</p>
            <p style={styles.paragraph}>FSSAI has underpinned stringent norms for proprietary food units, as the majority of them conduct their operation without any norms. FSSAI has mandated these facilities to secure FSSAI state licenses without any exceptions</p>
            <p style={styles.paragraph}>FSSAI has rolled the mandatory provisions for FBO and regulation of manufacturing, storage, sale, & distribution processes to ensure food safety and hygiene. The authority has also set up a legitimate information network for the awareness of the masses to secure valid information related to food safety & hygiene.</p>

    
        <h1 id="benefit" style={styles.mainHeading}>Benefits of FSSAI State License</h1>
            <p style={styles.paragraph}>
            The FSSAI State License is essential for food businesses operating within a specific state in India. Here are some key benefits:
            </p>
            <p>1. Creates strong brand recognition among the target end-users and the public at large.</p>
            <p>2. Improves the creditability of the business.</p>
            <p>3. Enables businesses to attract more customers.</p>
            <p>4. Offers legal stability that otherwise is lacking in unregistered counterparts.</p>
            <p>5. Facilitates best practices for the business owner to ensure food safety.</p>

        <h1 style={styles.mainHeading}>Who Needs an FSSAI State License?</h1>
            <p style={styles.paragraph}>
            An FSSAI State License is required by medium-scale food business operators (FBOs) whose annual turnover exceeds ₹12 lakhs but does not exceed ₹20 crores, and who operate within the boundaries of a single state.
            </p> 
            <p>This license applies to a wide range of food businesses, including:</p>   
            <p>✅ Food manufacturers and processors.</p>
            <p>✅ Storage and warehouse operators</p>
            <p>✅ Transporters and distributors</p>
            <p>✅ Wholesale and retail food traders </p>
            <p>✅ Restaurants, catering businesses, and food canteens </p>
            <p>✅ Food packaging units </p>
            <p>✅ Medium-sized dairy units, slaughterhouses, and meat processors </p>
            <p>✅ Cloud kitchens or central kitchens (operating within one state) </p>


        <h1 id="documents-required" style={styles.mainHeading}>Documents Required to Obtain FSSAI State License</h1>
            <p style={styles.paragraph}>
            Following are the Documents that one to arrange to apply for a state FSSAI license:
            </p>
            <h2 style={styles.sectionTitle}>Given below are the significant documents required to obtain FSSAI State License:</h2>  
            {/* <ul style={styles.list}> */}
                <p>✅ Details of key management personnel such as Directors, Partners, proprietors, & Executive Members of the Society with real address & contact particulars.</p>
                <p>✅ Passport-sized photos of the individual seeking the license.</p>
                <p>✅ Identification as well as address proof of the individual seeking the license.</p>
                <p>✅ Applicant's PAN card</p>
                <p>✅ A copy of property Documents (if the business place is owned by the applicant).</p>
                <p>✅ A copy of the rent agreement & NOC granted by the landlord (in case of rented property)</p>
                <p>✅ Particulars on Raw material suppliers</p>
                <p>✅ Form B is Duly completed and authenticated by the applicant.</p>
                <p>✅ List of machinery installed at the facility</p>
                <p>✅ NOC accorded by the local Municipality</p>
                <p>✅ Particulars of food categories and proposed food articles to be produced at the plant</p>
                <p>✅ Import Export Code rendered by the Directorate General of Foreign Trade.</p>
                <p>✅ Form-IX </p>
                <p>✅ Authorization letter enclosing the name as well as the address of the liable individual.</p>
                <p>✅ Food Safety Management System (FSMS)</p>
            {/* </ul> */}

            <h2 id = "registration"style={styles.sectionTitle}>Process for Obtaining FSSAI State License</h2>  
            {/* <ul style={styles.list}> */}
            <p>To obtain an FSSAI State License from the licensing authority, follow these steps:</p>
                <p>✅ Arranging the aforesaid Document and Filing of application via Form B.</p>
                <p>✅ Submission of form to licensing authority via online portal FOSCOS. The filing process ends with the submission of standard fees.</p>
                <p>✅ In-depth scrutiny of applications and Documents by FSSAI's officials.</p>
                <p>✅ If needed, an on-site inspection will be conducted by FSSAI's officials to determine the level of compliance at business premises.</p>
                <p>✅ Grant of State FSSAI License by the licensing authority (Note: The application may be revoked by the licensing authority in case of non-compliance).</p>
                <p>✅ After securing the license, the business owner can commence their business operation.</p>

        <h1 style={styles.mainHeading}>Penalty for Not Complying with FSSAI's Norms</h1>
            <p style={styles.paragraph}>
            In general, the penalties for FBOs in India are pretty stringent, and they are bound to face severe consequences in case of non-compliance.
            </p>

            <p style={styles.paragraph}>
            FSSAI officials can conduct a surprise audit of the business premises without informing the owner. If they find some loopholes on account of compliance management, the concerned entity has to face penalties as cited in the FSS Act of 2006. The table below manifests the type of penalties imposed in case of non-compliance.
            </p>

            <div style={{ margin: '25px 0' }}>
                <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                    Below is a summary of fines imposed for non-compliance under the FSSAI Act:
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>S.No</th>
                        <th style={thStyle}>Particulars</th>
                        <th style={thStyle}>Fine (Rs)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>1</td>
                        <td style={tdStyle}>Food quality breaches the compliance given in the act</td>
                        <td style={tdStyle}>2 Lakh<br />Petty manufacturer: 25,000/-</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>2</td>
                        <td style={tdStyle}>Sub-standard food</td>
                        <td style={tdStyle}>5 Lakh</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>3</td>
                        <td style={tdStyle}>Misbranded food</td>
                        <td style={tdStyle}>3 Lakh</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>4</td>
                        <td style={tdStyle}>Falsified advertisement or invalid description</td>
                        <td style={tdStyle}>10 Lakh</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>5</td>
                        <td style={tdStyle}>Extraneous matter in food</td>
                        <td style={tdStyle}>1 Lakh</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>6</td>
                        <td style={tdStyle}>Manifesting non-cooperation with food safety authorities</td>
                        <td style={tdStyle}>2 Lakh</td>
                    </tr>
                    </tbody>
                </table>
                </div>

        <h1 id="fees-structure"style={styles.mainHeading}>Fee Structure for Obtaining FSSAI State License</h1>
        <p style={styles.paragraph}>
        The requisite fees must be paid by an applicant seeking State Food license via:
            </p>
            <p>✅ Demand Draft (DD) </p>
            <p>✅ Treasury Challan, or </p>
            <p>✅ Cash</p>
            <p style={styles.paragraph}>
            The applicable fee varies in accordance with the production capacity of the food business:
            </p>    

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Sl.No</th>
                        <th style={thStyle}>Manufacturer (Production Capacity)</th>
                        <th style={thStyle}>License Fees/year (INR)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>1</td>
                        <td style={tdStyle}>More than One million tons/day 10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.</td>
                        <td style={tdStyle}>5000/-</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>2</td>
                        <td style={tdStyle}>Lower than one Million tons of production 501 to 10,000 L/day of milk or 2.5 million tons to 500 million tons of yearly production of milk solid.</td>
                        <td style={tdStyle}>3000/-</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>3</td>
                        <td style={tdStyle}>Hotels having 4 stars rating</td>
                        <td style={tdStyle}>5000/-</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>4</td>
                        <td style={tdStyle}>Falsified advertisement or invalid description</td>
                        <td style={tdStyle}>10 Lakh</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>5</td>
                        <td style={tdStyle}>All Food Service providers including restaurants, Canteens, clubs, caterers, Banquet halls offering food catering services, Dabbawalla system, & other FBOs.</td>
                        <td style={tdStyle}>2000/-</td>
                    </tr>
                 </tbody>
                </table>

                <h1 id="registration-timeline" style={styles.mainHeading}>Timeline to Obtain FSSAI State License</h1>
                    <p style={styles.paragraph}>
                    Securing an FSSAI State License involves multiple stages. Here is an overview of the process timeline:
                    </p>
                <h2 style={styles.sectionTitle}>Preparation & Documentation (1-2 Weeks)</h2>
                    <p style={styles.paragraph}>
                    Start by gathering all required paperwork, including proof of address, identification, business registration, and a food safety management strategy. Perform a preliminary evaluation before applying to confirm you possess all necessary documents.
                        </p>
                <h2 style={styles.sectionTitle}>Submission of Application (1 Week)</h2>
                    <p style={styles.paragraph}>
                    Fill out and send the FSSAI State License application form, either online via the FSSAI portal or at the nearby FSSAI office.
                        </p>
                <h2 style={styles.sectionTitle}>Review of Application & Documents (2-3 Weeks)</h2>
                    <p style={styles.paragraph}>
                    Your application and documents will be reviewed by the FSSAI authority. Be ready to address any questions or requests for more information.
                        </p>

                <h2 style={styles.sectionTitle}>Inspection period (2-4 Weeks)</h2>
                    <p style={styles.paragraph}>
                    FSSAI officials will visit your location to check your facilities and make sure they meet food safety regulations. Ensure that all safety precautions are implemented.
                        </p>

                <h2 style={styles.sectionTitle}>License Issuance (1-2 Weeks)</h2>
                    <p style={styles.paragraph}>
                    Once the inspection and final review are completed successfully, your FSSAI State License will be issued and delivered to you.
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

export default FSSAIStateLicenseContentSection;
