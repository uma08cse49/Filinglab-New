// import React from "react";
import StickyForm from "../../../Components/StickyForm";
import FSSAILicenseRelatedService from '../FSSAILicenseRelatedService/FSSAILicenseRelatedService';
import React, { useRef, useEffect, useState } from 'react';

const FSSAIFoodRecyclingContentSection = ({ city }) => {

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
        question: 'What is composting?',
        answer: 'The natural process of recycling organic materials into a valuable fertilizer is called composting.',
      },
      {
        question: 'What are the benefits of composting to the food industry?',
        answer: 'The benefits of composting to the food industry are:\n 1.Reduces solid waste disposal fees \n 2.Ends wasting large quantities of recyclable raw ingredients \n 3. Assist local farmers and the community \n 4.Close food waste loops by returning it back to the agriculture \n 5.Reduces the need for more landfill space.'
      },

      {
        question: 'What is food waste?',
        answer: 'The food and the associated inedible parts of the food that are removed from it in the retail, foodservice and households is called food waste.',
      },
      {
        question: 'Who grants the Food Recycling License?',
        answer: ' The concerned State Pollution Control Board grants the Food Recycling License.',
      },
      {
        question: ' What is the name of legislation dealing with Food waste?',
        answer: 'Food waste is dealt with under the Waste Management (Food Waste) Regulations, 2009.'
      },
      {
        question: ' What is meant by the Food Recycling License?',
        answer: 'The food recycling license means a NOC from the concerned SPCB, i.ee. Consent to Establish or Consent to Operate.'
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
    { label: "Listicles", id: "listicles" },
    { label: "Registration Procedure", id: "registration" },
    { label: "FilingLab Support", id: "filinglabsupport" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <div>
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
          Overview of Food Recycling License
        </h1>
            {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
           <p style={styles.paragraph}>
            In India, the problem of food waste is a modern problem. Every year, nearly forty per cent of the produced food is wasted in India due to the fragmented food systems and insufficient supply chains as per the Estimation of the FAO, Food and Agriculture Organisation.
            </p>
            <p style={styles.paragraph}>
            Despite an adequate food production, the UN has reported that approximately 190 million Indians remain undernourished. It is also estimated that the food waste is around Rs. 92,000 crores per annum in India.
            </p>
            <p style={styles.paragraph}>
            There is a significant amount of food generated in our homes. According to the Food Waste Index Report 2021, a straight 50 kg of food is thrown away per person every year in India. This wastage of food ends up in landfills, creating the potent greenhouse gas which has so many dire environmental effects. The total amount of food wasted in 20211 is 817,000 tonnes, 23% more than that of food waste generated in 2020. As the amount of food waste increased, the food waste recycling also increased, and so the recycling rate for food waste is still at 19%.
            </p>

        <h1 style={styles.mainHeading}>Food Waste Management Hierarchy</h1>
          <p>Followings are the hierarchy of steps taken in Food Waste Management:</p>
          <p style={styles.paragraph}> ✅ Prevention and Reduction of Food Wastage at source</p>
          <p style={styles.paragraph}> ✅ Redistribution of unsold or excess food</p>
          <p style={styles.paragraph}> ✅ Recycling or treatment of food waste</p>
          <p style={styles.paragraph}> ✅ Compost i.e., Final Product</p>
          <p style={styles.paragraph}> Food waste in landfills generates methane, a greenhouse gas. By composting the food waste and other organics, methane emissions can be reduced. Compost reduces and also eliminates the need for any chemical fertilizers. Compost also promotes the higher yields of agricultural crops.</p>
          

        <h1 style={styles.mainHeading}>Benefits of the Composting Food Waste</h1>
            <p style={styles.paragraph}>
            The following are the benefits of Composting the waste food:
            </p>
            <p style={styles.paragraph}>✅ Prevents soil erosion</p>
            <p style={styles.paragraph}>✅ Promote plant growth</p>
            <p style={styles.paragraph}>✅ Healthier plants</p>
            <p style={styles.paragraph}>✅ Conserve water</p>
            <p style={styles.paragraph}>✅ Reduce waste</p>
            <p style={styles.paragraph}>✅ Improves soil quality</p>
            <p style={styles.paragraph}>✅ Decrease emission of greenhouse gas</p>
            <p style={styles.paragraph}>✅ Minimize the odours in agricultural areas</p>
        </section>


        <section id="listicles">
          <h1 style={{ fontSize: "22px", fontWeight: "600", marginTop: "40px" }}>Documents Required for Food Recycling License</h1>
          {/* <p style={{ fontSize: "17px", lineHeight: "1.7" }}> */}
          <p style={styles.paragraph}>
            The list of Documents required for the Food Recycling Business is:
            </p>
            <p style={styles.paragraph}> ✅ A covering requisition letter stating the status of the industry and activities.</p>
            <p style={styles.paragraph}>✅ Copy of the attested sale deed, lease deed or any other relevant Documents as proof of possession of the site or factory.</p>
            <p style={styles.paragraph}>✅ Copy of attested MOA in case of public or private sectors or registered partnership deed in case of partnership company.</p>
            <p style={styles.paragraph}>✅ Plan layout showing the location of process equipment, utilities like boiler, generator, etc., effluent treatment plant, outlet location, and non-hazardous and hazardous waste storage yard.</p>
            <p style={styles.paragraph}>✅ Schematic diagram showing the distance of water bodies, roads, residential areas, agricultural lands, religious locations, educational institutions, ancient monuments, archaeological places and other sensitive areas around the unit in 2km radium from such unit.</p>
            <p style={styles.paragraph}>✅ The manufacturing process in detail for each product, along with the detailed flow chart.</p>
            <p style={styles.paragraph}>✅ Auditor's certificate with the breakup details for the proposed Gross fixed assets duly certified by a CA along with financial provisions for the Pollution Control Measures.</p>
            <p style={styles.paragraph}>✅ PAN Card or Aadhar Card.</p>
            <p style={styles.paragraph}>✅ Utility bills.</p>
            <p style={styles.paragraph}>✅ GST Registration</p>
            <p style={styles.paragraph}>✅ Factory License</p>
        </section>

        <section id="registration">

          <h1 style={styles.mainHeading}>Procedure for the Food Recycling License</h1>
            <p style={styles.paragraph}>
            The Food Recycling License means the NOC or the Contest to Establish (CTE) and Consent to Operate (CTO) from the Pollution Control Board. The procedure required for obtaining the Food Recycling License, i.e., CTE and CTO, is as follows:
            </p>
            <p>✅ Filing of Application in the appropriate Form for grant of Food Recycling License.</p>
            <p>✅ Every state has its own Pollution Control Board, and the applicant needs to fill out the application form to the concerned State Pollution Control Board.</p>
            <p>✅ The applicant files an application with the requisite Documents and information.</p>  
            <p>✅ The application is submitted to the concerned authority such as General Manager, Member-Secretary or Regional Officers, etc.</p>  
            <p>✅ The authority inspects the premises where the business is carried out and, after such inspection, rejects or accepts the application for Food Recycling License.</p> 
            <p>✅ If the application is accepted, then the board issues the Food Recycling License to the applicant.</p>
            </section>

            <section id="registration"> 
                <h1 style={styles.mainHeading}>Step-by-step Procedure for obtaining an Eating House license in India</h1>
                  <p style={styles.paragraph}>The Procedure for securing the eating house license involves following steps:</p>

                <h2 style={styles.sectionTitle}>Fill out the Application form</h2>
                    <p style={styles.paragraph}>
                    The applicant is required to apply for online Eating House Registration in the prescribed Application Form.
                    </p>
                <h2 style={styles.sectionTitle}>Submission of Documents</h2>
                    <p style={styles.paragraph}>
                    You need to upload all the Documents required to obtain an Eating House License along with the required declaration and certification.
                    </p>
                <h2 style={styles.sectionTitle}>Document Verification</h2>
                    <p style={styles.paragraph}>
                    After Document submission, you are required to go to Addl. Commissioner of Police Licensing of the concerned state for an Application and Documents verification.
                    </p>
                <h2 style={styles.sectionTitle}>Follow-up</h2>
                    <p style={styles.paragraph}>
                    The applicant is required y to keep a regular follow-up with the concerned department for the updates regarding your Application.
                    </p>
                <h2 style={styles.sectionTitle}>Issuance of License</h2>
                    <p style={styles.paragraph}>
                    Issuance of license takes 30-60 days. If the licensing authority is satisfied, it will issue a license within the said time period.
                    </p>

            </section>

            <section id="filinglabsupport">

                <h2 style={styles.sectionTitle}>FilingLab Assistance for obtaining Food Recycling License</h2>

                <p>✅ Purchase a Plan for Expert Assistance</p>
                <p>✅ Add Queries Regarding Food Recycling License.</p>
                <p>✅ Provide Documents to FilingLab Expert</p>
                <p>✅ Prepare application + Complete all Admissibility Criteria for Preliminary Screening</p>
                <p>✅ Complete Procedural Actions</p>
                <p>✅ Get your work Done</p>
            
            </section>

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
              </div>
    </div>
  <FSSAILicenseRelatedService />
  </div>
    

    
  );
};

export default FSSAIFoodRecyclingContentSection;
