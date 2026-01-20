// import React from "react";
import StickyForm from "../../../Components/StickyForm";
import React, { useRef, useEffect, useState } from 'react';

const NCRegistrationContentSection = () => {

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
        question: 'What is a Nidhi Company?',
        answer: 'A Nidhi Company is a non-banking financial company (NBFC) registered under Section 406 of the Companies Act of 2013 in India. Its main goals are to encourage members to save and share benefits, and taking deposits and making loans to them helps to create financial stability within a particular community.',
      },
      {
        question: 'Who regulates a Nidhi Company? ',
        answer: 'The Ministry of Corporate Affairs is responsible for the regulation of any Nidhi company registered in India. However, the Companies Act of 2013 is responsible for setting rules for governing these companies in India.'
      },
    
      {
        question: 'How do you fill out the incorporation form?',
        answer: 'For incorporation, you must go to the MCA official website and fill out the SPICe+ application form. After filling out the application form online, which is divided into two parts, PART A and PART B, any one director must sign it.',
      },
      {
        question: 'What is the full form of Nidhi Company?',
        answer: 'The full form of Nidhi Company is the ‘National Initiative for Developing and Harnessing Innovations’.',
      },
      {
        question: 'How much time is needed to complete a Nidhi Company Registration?',
        answer: 'It takes around 30-45 days to complete a Nidhi Company Registration.'
      },
      {
        question: ' What are the requirements for investing in a Nidhi Company?',
        answer: 'The requirements to invest in a Nidhi company are that you have to be an Indian citizen, must be 18 years of age, and must be a member of such Nidhi Company.'
      },
      {
        question: 'How many directors are required to register a Nidhi Company?',
        answer: 'There must be at least 3 directors of the Nidhi Company to get it registered under the Ministry of Corporate Affairs.'
      },
      {
        question: 'For how long has a Nidhi Company been Incorporated?',
        answer: 'A Nidhi Company can be incorporated for an indefinite time as long as it follows all the compliances mandated by the authorities. There must be a minimum of 200 members in the Nidhi company within one year of its incorporation; otherwise, it will be asked to be closed.'
      },
       {
        question: 'Is it possible to operate a Nidhi Company from another state?  ',
        answer: 'No, it is not possible to operate a Nidhi Company from outside the boundary of the state where it has been registered.'
      },
         {
        question: 'Can secured loans be issued by a Nidhi Company?',
        answer: 'No, Nidhi companies can only issue unsecured loans, and that too, only its members.'
      },
    ];


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





    const sidebarItems = [
        { label: "Overview", id: "overview" },
        { label: "Benefits", id: "benefits" },
        { label: "Documents Required", id: "requires" },
        { label: "Registration Process", id: "process" },
        { label: "Post Compliance", id: "compliance" },
        { label: "Registration Fees", id: "fees" },
        // { label: "How To Apply", id: "howtoapply" },
        { label: "Why Filinglab", id: "filinglabsupport" },
        { label: "FAQ", id: "faq" },
      ];
      // const [isFixed, setIsFixed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        boxSizing: "border-box"
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          position: "sticky",
          top: "100px",
          alignSelf: "flex-start",
          backgroundColor: "#f8f8f8",
          borderRight: "1px solid #ddd",
          padding: "0",
        }}
      >
        {sidebarItems.map((item, index) => (
          <a
          key={index}
          href={`#${item.id}`}
          style={{
            display: "block",
            padding: "15px 20px",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#001F3F",
            borderBottom: "1px solid #e0e0e0",
            textDecoration: "none",
            cursor: "pointer"
          }}
        >
          {item.label}
        </a>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingLeft: "30px" }}>
      <section id="overview">
        <h1 id="overview"
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          An Overview of Nidhi Company Registration
        </h1>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
        <p style={styles.paragraph}>
        A Nidhi Company is a company registered under the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs (MCA) and Nidhi Rules, 2014. It must meet certain requirements, such as having 200 members or more and having at least INR 20 lakhs as net-owned funds within 120 days of its incorporation.
        </p>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
        <p style={styles.paragraph}>
        Nidhi Companies encourage members to practice thrift and saving by limiting their ability to accept deposits and provide loans. Their efficient operation depends on adherence to RBI regulations and annual reporting requirements.
        </p>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7" }}> */}
  

        <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          What is a Nidhi Company?
        </h1>

        <p style={styles.paragraph}>
        A Nidhi Company is a non-banking financial company (NBFC) registered under Section 406 of the Companies Act of 2013 in India. Its main goals are to encourage members to save and share benefits, and taking deposits and making loans to them helps to create financial stability within a particular community.
        </p>

         
        <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          Purpose of Nidhi Companies
        </h1> 

        <p style={styles.paragraph}>
        In India, Nidhi Companies encourage members to save by taking deposits and providing loans only available to them. Their aim is indicated by the term "Nidhi," which translates to "treasure" in Hindi. Although not directly governed by the Reserve Bank of India (RBI), these businesses fall under the category of Non-Banking Financial Companies (NBFC). They are bound by RBI regulations regarding deposit activities.
        </p>
        <p style={styles.paragraph}>
        The special relationships that Nidhi Companies have with member shareholders set them apart from other NBFCs and exclude them from certain important requirements of the RBI Act. Because of their unique legal structure, Nidhi Companies can function as independent financial institutions catering solely to their member base. 
        </p>

      </section>

      <section id="features">        
        <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          Benefits of a Nidhi Company Registration
        </h1>

        <p style={styles.paragraph}>
        Nidhi Company registration comes with a lot of benefits for the management and shareholders, making sure that the customers also gain something from the company. These benefits are as follows –
        </p>
        <h2 style={styles.sectionTitle}>1. Formation</h2>
        <p>The Nidhi Company Registration process is very easy and quick, making it feasible for those who look forward to forming such entities.</p>
        
        <h2 style={styles.sectionTitle}>2. RBI Non-Compliance</h2>
        <p>RBI governs all banks, but its guidelines do not bind Nidhi companies in a similar sector. It requires these entities to establish their own rules and regulations and run their businesses accordingly.</p>
       
        <h2 style={styles.sectionTitle}>3. Lesser Risk</h2>
        <p>All the operations related to borrowing, lending, or even depositing are done by the members of the entity, thereby reducing the risk of losses and ensuring the entity's safety.</p>
       
        <h2 style={styles.sectionTitle}>4. Promoting Savings</h2>
        <p>These Nidhi Companies ensure that the individuals involved with the entity are following the concept of saving for future use and better financial conditions.</p>

        <h2 style={styles.sectionTitle}>5. Registration Procedure</h2>
        <p>The Nidhi Company Registration process is cost-effective and smooth compared to other Non-Banking Financial Company registrations. It makes it easier for these companies to access financing options and business loans.</p>

        <h2 style={styles.sectionTitle}>6. Funding System</h2>
        <p>The net-owned funding system is typically adopted by the Nidhi companies, which makes it cost-effective. It positively impacts their business by using their funds and resources.</p>
      </section>
        

        <section id="requires"> 

              <h1 id="requires"style={styles.mainHeading}>Documents Required for Nidhi Company Registration</h1>
              <p>Certain documents are required for the Nidhi Company Registration in India. These documents are listed below –</p>
                <p> ✅ Photographs of Promoters and all the members</p>
                <p> ✅ PAN card of promoters and all the members</p>
                <p> ✅ Identity Proof of promoters and all the members (Aadhar Card, D/L, Voter ID, Passport)</p>        
                <p> ✅ Address Proof of promoters and all the members (through Utility bills or bank statements) </p>
                <p> ✅ Address proof of the business premises (through utility bills)</p>
                <p> ✅ NOC from the premises owner, if applicable</p>
                <p> ✅ Property Documents or Rent agreement, if applicable</p>
                <p> ✅ Form DIR – 2 with the consent of directors</p>
                <p> ✅ DSC & DIN of Directors</p>
                <p> ✅ Director specimen signatures</p>
                <p> ✅ Subscriber sheet duly signed</p>
                <p> ✅ Company Registration Questionnaire</p>

            <h1 id="process"style={styles.mainHeading}>Process for Nidhi Company Registration</h1>
            <p>There is a set procedure for a Nidhi Company Registration that must be followed. The process is stated below –</p>
             <h2 style={styles.sectionTitle}>1. Application for DSC & DIN</h2>
             <p>The first step for a Nidhi Company Registration is for the directors to acquire the Digital Signature Certificate and apply for the Director’s Identification Number issued by the Ministry of Corporate Affairs. Directors who already have the DIN can skip the process. The DSC is essential for all e-filling processes. </p>
             <h2 style={styles.sectionTitle}>2. Memorandum of Association & Articles of Association</h2>
             <p>Drafting of Memorandum of Association & Articles of Association is essential for establishing the purpose of the Nidhi Company. These are necessary things in an organization and should be filed with the registrar of the companies.</p>
             <h2 style={styles.sectionTitle}>3. Name Approval</h2>
             <p>The Nidhi company seeking registration needs to obtain approval over the entity’s name through the Ministry of Corporate Affairs. The chosen name must be unique and should not be copied from the name of any other company or trademark. The objective and business nature should be reflected through the name selected for such entities. They need to propose at least three names out of which MCA chooses the appropriate one. The application for approval is sent through PART A of the SPICe+ application form.</p>
             <h2 style={styles.sectionTitle}>4. Incorporation Application</h2>
             <p>After the name is approved by the MCA, the company can begin the process of incorporation. For incorporation, you must go to the MCA official website and fill out the SPICe+ application form. After filling out the application form online, divided into two parts, PART A & PART B, any one director has to sign it. The signed application form must be submitted online along with the other required documents attached to it.</p>
             <h2 style={styles.sectionTitle}>5. Certificate of Incorporation</h2>
             <p>The form is sent to the registrar of companies, who is responsible for looking at the application. A thorough check is made to be sure that all the documents and the form being filled and submitted correctly and in the right manner. If everything is alright, a certificate of incorporation is issued to the applicant for Nidhi Company Registration. A unique Corporate Identification Number is provided to the Nidhi Company by the ROC.</p>
             <h2 style={styles.sectionTitle}>6. Nidhi Company License</h2>
             <p>Following its incorporation, a business must apply for a NIDHI Company license by fulfilling criteria about member count, net assets, term deposits, and other conditions outlined in the Companies Act of 2013. The company has four months from the date of its incorporation as a NIDHI Limited Company to file an application to the Central Government using form NDH 4. This time frame may be extended with the regional director's consent if necessary.</p>
             

            <h1 style={styles.mainHeading}>Nidhi Limited Company Mandatory Compliance</h1>
            <p>Though Nidhi Limited Company can be incorporated without RBI consent, they are still responsible for its regulation, the same as NBFCs. They must include ‘Nidhi Limited’ as a suffix to their company name. the other mandatory compliances for a Nidhi company are stated below –</p> 

              <p> ✅ A Nidhi Pvt Ltd has to mandatorily fill out Form NDH – 1 within 90 days of the end of such financial year. </p>
              <p> ✅ In the event that Nidhi Pvt Ltd fails to accumulate 200 members in its organization in the first financial year, it must fill out Form NDH-2 with the Ministry of Corporate Affairs. </p>
              <p> ✅ For filling the half-yearly returns, Form NDH-3, along with the certificate of CA/CS, is submitted. </p>
              <p> ✅ A Nidhi Finance Company/ Nidhi Company has to hold a board meeting quarterly and annually hold a members meeting.  </p>
              <p> ✅ A Nidhi Finance Company/ Nidhi Company must fill out Form AOC 4 & Form MGT 7 on an annual basis.</p>
              <p> ✅ They must maintain their books of accounts regularly.</p>
              <p> ✅ A Nidhi Pvt Ltd must file the income tax returns by September 30th every year. </p>
              <p> ✅ The rental income generated through providing lockers to the members must be less than 20% of the total revenue generated by the entity in a financial year.</p>
            
            <h1 style={styles.sectionTitle}>Prohibition Activities for a Nidhi Company</h1>
              <p> Certain activities are prohibited for a Nidhi Company, and these are as follows –</p>
              
              <p> ✅ Dealing with chit funds is prohibited for a Nidhi Company.</p>
              <p> ✅ Dealing with hire-purchase finance is prohibited for a Nidhi Company.</p>
              <p> ✅ Dealing with the leasing of finances is prohibited for a Nidhi Company.</p>
              <p> ✅ Dealing with insurance business is prohibited for a Nidhi Company.</p>
              <p> ✅ Dealing with securities business is prohibited for a Nidhi Company.</p>
              <p> ✅ Other than members, Nidhi companies are prohibited from accepting deposits by another person.</p>
              <p> ✅ Other than members, Nidhi companies are prohibited from lending funds to any other person.</p>

        </section>
                
            <section id="fees">

              <h1 style={styles.mainHeading}>Nidhi Company Registration Fees</h1>

                <p>The Nidhi Company Registration fees depend on various factors like application for DIN, DSC, GST Registration, etc, before application for incorporation of Nidhi Company. However, the fee may range between Rs 10,000 – 15,000, excluding the professional fee.</p>

                <p>Registration is mandatory, and the applicant might need professional help dealing with complex documentation and requirements.</p>

              <h1 style={styles.mainHeading}>Timeline for Nidhi Company Registration</h1>  

                <p>The timeline for obtaining the license of incorporation of Nidhi Company mostly depends on how well and quickly the applicant arranges the documents and fills out the form with the correct documentation. Generally, it takes around 30-45 days to get the license of incorporation of Nidhi Company. </p>

              </section>


            {/* <section id="howtoapply">

              <h1 style={styles.mainHeading}>How to Apply for FPO Mark Certification in India?</h1>
                  <p style={styles.paragraph}>
                  The process to apply for FPO mark certification in India follows various steps that businesses must follow to ensure compliance with regulations and food safety norms. Following a step-by-step procedure facilitates a quick turnaround time in getting the approvals for FPO certification. It includes the following:
                  </p>
                  <h2 style={styles.sectionTitle}>1. Determine Eligibility</h2>
                    <p> The first step in the process of FPO certification is to meet the eligibility criteria, such as business registration, FSSAI license and fulfilling hygiene and safety norms.</p>

                  <h2 style={styles.sectionTitle}>2. Prepare Required Documents</h2>
                    <p> The next step involves collecting the necessary paperwork to proceed further. Documents include application forms, business registration certificates, FSSAI licenses, manufacturing unit details - blueprints and layouts, product details, and quality control reports.</p>

                  <h2 style={styles.sectionTitle}>3. Online Registration</h2>
                    <p> Once documents are collected, the next step comprises visiting the official website of FSSAI to commence the online FPO products certification application process. You can also contact FPO certification consultants to help you with the application process.</p>
                  
                  <h2 style={styles.sectionTitle}>4. Fill Application Form</h2>
                    <p> Next, you must fill out the application form and ensure it contains no mistakes. Filling accurate details saves time and helps you manage quick approvals. You must verify your business details before submitting the online form and fix any discrepancies.</p>
                  
                  <h2 style={styles.sectionTitle}>5. Submit Documents</h2>
                    <p> Once you have filled out the application form, you must also upload the relevant documents for submission along with the form and ensure that all the details are filled in as per the FSSAI guidelines.</p>
                  
                  <h2 style={styles.sectionTitle}>6. Pay the Fee</h2>
                    <p> You must pay the prescribed fee along with the online application or as per the instructions mentioned by the certification authority. You must save the payment receipt for future use and reference.</p>
                  
                  <h2 style={styles.sectionTitle}>7. Facility Inspection</h2>
                    <p> Once the application is submitted and the fee is paid, FSSAI officially schedules the inspection of your manufacturing unit to validate its compliance with the required hygiene and safety norms and production criteria.</p>

                  <h2 style={styles.sectionTitle}>8. Product Testing</h2>
                    <p> You must submit some product samples for testing at the labs approved by FSSAI. This is necessary to ensure hygiene compliance and that the products are safe for consumption.</p>

                  <h2 style={styles.sectionTitle}>9. Verification and Approval</h2>
                    <p> Once the above steps are complete, FSSAI reviews the application, inspection reports and test results to determine if your manufacturing unit is fit to produce food items as per regulatory and safety compliance. If satisfied, FSSAI grants you the FPO certification, enabling you to launch your food processing business in India legally.</p>

                  <h2 style={styles.sectionTitle}>10. Receive Certification</h2>
                    <p> Once your application is approved, FSSAI issues an FPO certification, making it eligible for you to officially use the FPO mark on your fruit products.</p>

                  <h2 style={styles.sectionTitle}>11. Renew Certification</h2>
                    <p> You need to ensure the validity of your FPO certification. You must renew the application per the renewal guidelines to stay compliant and use the FPO mark without legal issues or hassles.</p>
                
              </section> */}

              <section id="faq">
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
              </section>


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
    
  );
};

export default NCRegistrationContentSection;
