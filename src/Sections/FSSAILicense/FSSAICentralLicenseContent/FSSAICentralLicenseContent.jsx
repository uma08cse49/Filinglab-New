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
      

const FSSAICentralLicenseContentSection = ({ city }) => {

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
    question: 'What is the FSSAI Central License?',
    answer: 'The FSSAI Central License is issued by the Food Safety and Standards Authority of India (FSSAI) to food business operators (FBOs) whose turnover exceeds ₹20 crore or who operate in more than one state. It is mandatory for large-scale food businesses involved in manufacturing, import, export, or distribution.',
  },
  {
    question: 'Who needs to obtain the FSSAI Central License?',
    answer: 'The following entities require a Central License:\n 1.Food processing units with turnover > ₹20 crore \n 2.Food importers/exporters \n 3. Large-scale manufacturers or operators \n 4. E-commerce food businesses \n 5.Food businesses operating in multiple states (head office requires Central License).'
  },

  {
    question: 'What is the validity period of the FSSAI Central License?',
    answer: 'The license is valid for 1 to 5 years, depending on the fee paid. It can be renewed before expiry.',
  },
  {
    question: 'What documents are required for the Central License?',
    answer: ' Typical documents include: \n 1.Form B duly completed and signed \n 2. Blueprint/layout plan of the processing unit \n 3.List of directors/partners with full addresses and contact details \n 4. List of equipment and machinery \n 5.Proof of turnover (e.g., audited balance sheet) \n 6.Import/export code (if applicable) \n 7.Water test report \n 8.Declaration form \n 9.NOC from the municipality or local authority',
  },
  {
    question: ' What is the fee structure for the Central License?',
    answer: 'The fee is ₹7,500 per year. Additional costs may be involved based on consultancy, documentation, or renewal.'
  },
  {
    question: ' Can I operate in multiple states with one Central License?',
    answer: 'You need to obtain a Central License for the head office, and state licenses or registrations for each operational unit depending on their turnover and business size.'
  },
  {
    question: 'How long does it take to get the FSSAI Central License?',
    answer: 'It usually takes 25–30 business days from the date of successful application submission, assuming all documents are in order.'
  },
  {
    question: 'What happens if I don’t get an FSSAI Central License when required?',
    answer: 'Operating without the necessary FSSAI license is illegal and can result in: \n 1.Penalties up to ₹5 lakhs \n 2.Business closure \n 3.Imprisonment in extreme cases.'
  },
  {
    question: 'How can I apply for the FSSAI Central License?',
    answer: 'You can apply online via the FSSAI Food Licensing and Registration System (FoSCoS). Registration involves: \n 1.Creating a login \n 2.Filling Form B \n 3.Uploading documents \n 4.Paying the fee \n 5.Awaiting inspection/approval'
  },
];

const sidebarItems = [
    { label: "Overview", id: "overview" },
    { label: "Benefit", id: "benefit" },
    { label: "Documents Required", id: "documents-required" },
    { label: "Registration Procedure", id: "registration" },
    { label: "Validity", id: "validity" },
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
        <h1 id = "overview" style={styles.mainHeading}>FSSAI Central License - An Overview</h1>
            <p style={styles.paragraph}>
            The FSSAI Central License is a mandatory license issued by the Food Safety and Standards Authority of India (FSSAI) to large-scale food businesses in India. It ensures compliance with the Food Safety and Standards Act, 2006.
            </p>
            <p style={styles.paragraph}>
            The Food Safety and Standards Authority of India (FSSAI) is the apex government body responsible for safeguarding public health by enforcing food safety regulations across the country. Established under the Food Safety and Standards Act, 2006, FSSAI's core mission is to develop and implement comprehensive guidelines that promote food safety awareness in India.
            </p>
            <p style={styles.paragraph}>
            FSSAI Central License is obtained by an FBO (Food Business Operator) with a turnover of more than Rs. 20 Crores or is involved in exporting and importing food products in India.
            </p>

        <h1 style={styles.mainHeading}>Fundamental Duties and Functions performed by FSSAI</h1>
          <p style={styles.paragraph}> ✅ Formulating Guidelines and Norms for food safety and hygiene</p>
          <p style={styles.paragraph}> ✅ Launching initiatives nationwide to create food safety awareness among the masses</p>
          <p style={styles.paragraph}> ✅ Granting mandatory food license and registration to food business operators</p>
          <p style={styles.paragraph}> ✅ Facilitating recommendations to GOI in outlining new policies</p>
          <p style={styles.paragraph}> ✅ Rolling out directions and guidelines in view of the FSS Act, 2006 for the entities operating in the food sector</p>
          <p style={styles.paragraph}> ✅ Taking legal actions against food businesses allegedly involved in illicit practices such as food adulteration.</p>

        <h1 style={styles.mainHeading}>Businesses that Require Mandatory FSSAI License</h1>
            <p style={styles.paragraph}>
            The following types of businesses mentioned below mandatorily require the Registration of FSSAI License:
            </p>
            <p style={styles.paragraph}>✅ Restaurants</p>
            <p style={styles.paragraph}>✅ E-Commerce Businesses such as Online Home Kitchen</p>
            <p style={styles.paragraph}>✅ A business that sells Essential Food Products</p>
            <p style={styles.paragraph}>✅ Food Business Operators of the Indian Railways</p>
            <p style={styles.paragraph}>✅ Food Businesses that sell Coffee or Coffee-Based Products</p>
            <p style={styles.paragraph}>✅ Manufacturers of Powdered Tea</p>
            <p style={styles.paragraph}>✅ Food Vending Machines</p>
            <p style={styles.paragraph}>✅ Food Businesses that sell Herbalife-Based Products</p>
            <p style={styles.paragraph}>✅ Food Business Operators that Import or Export Food Products</p>
            <p style={styles.paragraph}>✅ Food Business Operators of the Indian Airports</p>
    
            <p style={styles.paragraph}>✅ Food Marketing Companies</p>
            <p style={styles.paragraph}>✅ Businesses that Export Cashews</p>
            <p style={styles.paragraph}>✅ Amazon Warehouses</p>
            <p style={styles.paragraph}>✅ Hotels</p>
            <p style={styles.paragraph}>✅ Amazon Warehouses</p>
            <p style={styles.paragraph}>✅ Supermarkets</p>
            <p style={styles.paragraph}>✅ E-Commerce Businesses that sell prepared food online such as Zomato, Swiggy, Uber Eats, etc.</p>
            <p style={styles.paragraph}>✅ E-Commerce Businesses that sell food products online</p>
            <p style={styles.paragraph}>✅ Online Businesses that sell packaged commodities, such as Flipkart, Amazon, etc.</p>
            <p style={styles.paragraph}>✅ Catering Businesses</p>
            <p style={styles.paragraph}>✅ Event Management Businesses</p>
            <p style={styles.paragraph}>✅ Colleges and other institutions that have a canteen</p>
            <p style={styles.paragraph}>✅ Business involved in retail, export, or import of Fisheries</p>
            <p style={styles.paragraph}>✅ Agricultural Products</p>
            <p style={styles.paragraph}>✅ Manufactures of Packaged Products</p>
            <p style={styles.paragraph}>✅ Manufacturers of various types of Oil</p>
            <p style={styles.paragraph}>✅ Food Outlets</p>
            <p style={styles.paragraph}>✅ Hospitals</p>
            <p style={styles.paragraph}>✅ Manufactures of Packaged Drinking Water</p>
            <p style={styles.paragraph}>✅ Businesses involved in the retail, export, or import of Dairy Products</p>
            <p style={styles.paragraph}>✅ Manufactures of Chocolate and Chocolate-Based Products</p>
            <p style={styles.paragraph}>✅ Food Transporters</p>
            <p style={styles.paragraph}>✅ Re-Packagers</p>
            <p style={styles.paragraph}>✅ Milk Chilling Units</p>
            <p style={styles.paragraph}>✅ All types of Food Business Operators</p>


        <h1 id="benefit" style={styles.mainHeading}>Benefits of getting an FSSAI Central License</h1>
            <p style={styles.paragraph}>
            Followings are the advantages of obtaining a FSSAI Central License:
            </p>
            
          <h2 style={styles.sectionTitle}>Worldwide Identity</h2>
            <p>The FSSAI License helps to establish a reputation all over the world. It creates the brand name of the business at a global level.</p>
          <h2 style={styles.sectionTitle}>Business Expansion</h2>
            <p>With FSSAI Central License, extending the food business to any new location and opening new outlets is easy. It even makes it easier to get a loan or other funding for the development of a business.</p>
          <h2 style={styles.sectionTitle}>Legal Advantage</h2>
            <p>FSSAI License gives a sense of security and legal right to all those who are involved in the food business. It also acts as evidence that the quality of food and the food has not been compromised to safety standards.</p>  
          <h2 style={styles.sectionTitle}>Consumer Awareness</h2>
            <p>Consumers are more alert about the quality of their food nowadays. So, the food with FSSAI License gives the businesses an advantage in a rapidly increasing consumer base.</p>  
  

          
        <h1 style={styles.mainHeading}>Essential Criteria for obtaining FSSAI Central License</h1>
          <h2 style={styles.sectionTitle}>FSSAI Central License is legal consent granted by FSSAI to the food businesses which have</h2>
            <p>Consumers are more alert about the quality of their food nowadays. So, the food with FSSAI License gives the businesses an advantage in a rapidly increasing consumer base.</p>  
            <p> ✅ Annual turnover more than Rs 20 crores or </p>
            <p> ✅ Various units running in multiple states or </p>
            <p> ✅ Monthly or annual production more significant than the prescribed threshold limit</p>
            <p> ✅ Must have an annual turnover of more than Rs. 20 Crores who wants to start a business of import/export of food items and a business for selling food items on their own e-commerce website.</p>
          <h2 style={styles.sectionTitle}>Special Conditions for applying to get FSSAI Central License are as follows:</h2>
            <p> ✅ Establishing Business of Nutraceutical and Health Supplement. </p>
            <p> ✅ Transporting Business with more than 100 vehicles.</p>
            <p> ✅ Running hotel with 5-star or 7-stars.</p>
          <h2 style={styles.sectionTitle}>Apart from these essential criteria, FSSAI Central License also encompasses the following:</h2>
            <p> ✅ Dairy facilities produce milk solid with an annual production of 50000 litres or 2500 megaton. </p>
            <p> ✅ Processing facilities producing vegetable oil with a daily production volume of 2 MT.</p>
            <p>Slaughter facility with a daily capacity of:</p>
            <p> ✅ 50 large animals.</p>
            <p> ✅ 150 small animals.</p>
            <p> ✅ 1000 poultry birds.</p>
            <p> ✅ Meat processing facility has a daily production capacity of 50 KG or 150 megatons</p>
            <p> ✅ Food processing facility has a daily production of 2 megaton </p>
            <p> ✅ Food business shipping food articles abroad </p>
            <p> ✅ Facilities having a refrigerator facility or cold storage having a storage capacity of 1000 megatons or more </p>
            <p> ✅ Wholesalers involved in the food business have a yearly turnover of more than Rs 30 crore</p>
            <p> ✅ Retailers & distributors of food articles having an annual turnover of more than Rs 20 crores </p>
            <p> ✅ A business dealing with catering service or food marketing having a yearly turnover of more than Rs 20 crores </p>
            <p> ✅ Restaurants and eating houses have an annual turnover of INR 20 Crore </p>
            <p> ✅ Food catering services operating in government-based agencies </p>
            <p> ✅ Food catering services in establishments working under the aegis of government include seaports, airports, etc. </p>




        <h1 id="documents-required" style={styles.mainHeading}>Documents Required to Secure FSSAI Central License</h1>
            <p style={styles.paragraph}>
            Following is the listicle of fundamental Documents required to be submitted at the time of application filing for the FSSAI Central License:
            </p>  
            {/* <ul style={styles.list}> */}
                <p>✅ Form B (duly filled and signed by the applicant)</p>
                <p>✅ Floor plan of the production or processing facility, reflecting critical areas with accurate measurements.</p>
                <p>✅ In case the applicant is seeking registration for a company, a complete list of key management personnel such as name and residential proof</p>
                <p>✅ Copy of MOA, AOA & COI is necessary (if the license seeker is a private limited company, OPC, and Public limited company)d</p>
                <p>✅ A complete list of partners reflecting their name, contact detail, address, etc., along with a partnership deed copy (In case the license seeker is a partnership firm).</p>
                <p>✅ List of serving members in a co-operative society (In case the license seeker is a co-operative society)</p>
                <p>✅ Copy of a trust deed as well as the record of trustees ( if case the license seeker is a registered trust)</p>
                <p>✅ Utility bills (electricity bill, rent agreement, registry) of the business place for address proof</p>
                <p>✅ Food Safety Management Plan (FSMS) or identical protocol in place </p>
                <p>✅ Name & the list of machines present at the plant</p>
                <p>✅ List of active raw material suppliers</p>
                <p>✅ The concerned local authorities accorded no objection certificate.</p>
                <p>✅ Tourism certificate accorded by the ministry of tourism (if the license seeker is a hotel owner) </p>
                <p>✅ IEC certificate accorded by DGFT (Directorate General of Foreign Trade) (if the license seeker intended to ship food articles abroad)</p>
                <p><strong>Import Export Code:</strong>(In case of Import export).</p>
                <p><strong>Declaration:</strong> In case of turnover more than Rs. 20 crores.</p>

            {/* </ul> */}

          <h1 id="registration" style={styles.mainHeading}>Procedure to Obtain FSSAI Central License</h1> 
            {/* <ul style={styles.list}> */}
            <p>Step-by-Step processes for Securing Central FSSAI License are as follows:</p>
            <h2 style={styles.sectionTitle}>Application Filing Via Form B</h2>
              <p>First, the license seeker is required to file Form B with the licensing Authority. While doing so, the applicant has to keep basic turnover criteria in mind.</p>
            <h2 style={styles.sectionTitle}>Applicant Scrutiny by FSSAI Officials</h2>
              <p>Once submitted, the Application accompanied by requested Documents will be sent to the concerned officials for in-depth scrutiny.</p>  
            <h2 style={styles.sectionTitle}>On-Site Inspection by FSSAI's Official of The Business Place</h2>
              <p>In this step, the FSSAI will send the designated officials to the business place to determine the level of compliance recommended by FSSAI.</p>     
              <p>Any non-conformity in this regard could increase the chances of application cancellation.</p>     
            <h2 style={styles.sectionTitle}>Approval of Application and Grant of The Application</h2>
              <p>Once the licensing Authority approves the Application, the certificate will find its way to the license seeker in a few days. After getting the certification, the business owner can commence their business operation at full throttle.</p>    
              <p><strong>Note: </strong>Displaying the Certificate at The Business Place Is Another Legal Mandate for The License Holder.</p>  
        
        <h1 id = "validity" style={styles.mainHeading}>Validity and the Renewal of FSSAI Central License</h1>
            <p style={styles.paragraph}>
            The Central FSSAI license comes with a flexible validity duration ranging from 1-5 years. The cost of the license would increase in accordance with the validity period. As far as the renewal is concerned, the FSSAI Central License should be renewed before the 30 days of the expiration date, or else the penalties would be levied.
            </p>

            <p style={styles.paragraph}>
            The renewal process for a food license is as simple as applying for a new one. While filing the renewal application, the applicant needs to upload the following Documents:
            </p>
            <p>✅ Passport Size Photograph</p>
            <p>✅ Id Proof such as Aadhaar Card, Voter ID, etc.</p>
            <p>✅ PAN Card</p>
            <p>✅ Address proof by submitting telephone bills, electricity bills, etc.</p>
            <p>✅ Copy of the Land Deed or Agreement for proof of ownership.</p>
            <p>✅ In case the premises are rented, the applicant must submit the rental agreement copy and the No Objection Certificate from the Landlord.</p>
            <p>✅ Passport Size Photograph</p>

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

export default FSSAICentralLicenseContentSection;
