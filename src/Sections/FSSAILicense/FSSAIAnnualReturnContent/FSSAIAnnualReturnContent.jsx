import React, { useRef, useEffect, useState } from 'react';
import StickyForm from "../../../Components/StickyForm";
import FSSAILicenseRelatedService from '../FSSAILicenseRelatedService/FSSAILicenseRelatedService';
// import  BrandSlider from "../Components/BrandSlider/BrandSlider"
import SectionNavBar from "../SectionNavBar/SectionNavBar";
import styled from "styled-components";
import FBO from "../../../assets/images/FBO.png";
import benefits_img from "../../../assets/images/benefits_img.png";




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
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#002145',
    display: 'block',
    fontWeight: 'bold',
    };

  const FSSAILicenseCertificateStyle = styled.section`
    background:rgb(237, 237, 237);
    padding: 30px 20px;
    color: #000;
    overflow-x: hidden;
    
  
    .container {
      max-width: 100%;
      margin: 0 70px;
      display: flex;
      flex-wrap: wrap;
      gap: "40px", 
      align-items: center;
      justify-content: space-between;
    }
  
    .content {
      flex: 1 1 500px;
      padding-right: 20px;
    }
  
    .image {
      flex: 1 1 300px;
      text-align: center;
      margin-top: 20px;
    }
  
    h2 {
      font-size: 2rem;
      color: #ed740a;
      margin-bottom: 15px;
    }
  
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
    }
  `;

      

const FSSAIAnnualReturnContentSection = ({ city }) => {

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
    question: 'What is the FSSAI Annual Return?',
    answer: 'The FSSAI Annual Return is a mandatory compliance document that food business operators (FBOs) involved in manufacturing or importing food must submit to the Food Safety and Standards Authority of India (FSSAI). It provides a summary of the food products handled during the financial year.',
  },
  {
    question: 'Who is required to file the FSSAI Annual Return?',
    answer: 'Filing is mandatory for:\n 1.All licensed food manufacturers, including repackers and relabellers \n 2.Food importers \n 3. Exporters of food products \n 🛑 Note: Retailers, restaurants, and transporters are exempt.'
  },

  {
    question: 'What types of returns are there under FSSAI?',
    answer: 'There are two main types:\n 1.Form D1: Annual return for all licensed manufacturers and importers.\n 2.Form D2: Half-yearly return for milk and dairy processing units',
  },
  {
    question: 'What is the deadline for filing the FSSAI Annual Return?',
    answer:
      '1.Form D1: Must be filed by May 31st of every year for the previous financial year.\n 2.Form D2 (for dairy units): Filed every 6 months (April–September and October–March).'
  },
  
  {
    question: ' How can I file the FSSAI Annual Return?',
    answer: 'You can file the return:\n 1. Online via the FSSAI FoSCoS portal \n 2.Or manually by submitting it to the licensing authority (if permitted)'
  },
  {
    question: ' What happens if I fail to file the Annual Return?',
    answer: 'Non-compliance may result in: \n 1.A fine of ₹100 per day of delay\n 2.Suspension or cancellation of your FSSAI license'
  },
  {
    question: ' Is there a penalty for incorrect information in the return?',
    answer: 'Yes, furnishing false or misleading information may lead to legal consequences, including fines or suspension of license.'
  },
  {
    question: "Do I need to file the return if I didn't operate last year?",
    answer: 'Yes. Even if there were no operations, you must file a Nil Return.'
  },
  {
    question: ' Can I revise the FSSAI Annual Return after submission?',
    answer: 'As of now, there is no official mechanism for revising a submitted return. Ensure all data is accurate before submission.'
  },
];

  <SectionNavBar/>

return (  
  <section
      style={{
        background: "rgb(243, 243, 243)",
        color: "#000",
        padding: "60px 20px",
        borderRadius:'20px',
        // margin:'0px 30px'
        // maxWidth:'100%'
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 70px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        {/* Left Text Content */}
        <div style={{ flex: "1 1 500px", paddingRight: "20px" ,borderRight:'2px solid grey'}}>
          <h2 id="Overview" style={{ fontSize: "2rem", marginBottom: "20px", color: "#ed740a" }}>
          An Overview of FSSAI Annual Return
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          All food business operators with a FSSAI license including manufacturers, importers, packers, and labellers should file a FSSAI annual return in India. It is a mandatory filing that enables food business operators to annually submit their essential information to the Food Safety and Standards Authority of India (FSSAI).
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          The FSSAI revised guidelines for Food Business Annual Return filing mandates the online filing of FSSAI annual returns comprising details of activities such as the production, handling, storage, and distribution of food products. The FBO further acknowledges the importance of filing annual return FSSAI and maintaining transparency in their operations.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Are you worried about the hurdles filing a FSSAI annual return? Talk to our food business consultants at filinglab and get expert support in FSSAI annual return filing.
          </p>
          <button style={buttonStyle}>Talk to Consultant</button>
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: "1 1 400px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="public/images/FSSAIoverview.png"
            alt="FSSAILicense Registration Overview"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>

    <FSSAILicenseCertificateStyle style={{marginTop:'20px',width:'100%'}}>
          <div className="container">
            <div className="image">
            <img
                src={benefits_img}
                alt="Benefits"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </div>
            <div className="content">
              <h2>What is FSSAI?</h2>
              <p>
              The Food Safety and Standards Authority of India, i.e., FSSAI, is an independent organization that regulates the quality of food for the protection and promotion of public health. FSSAI, which was established under the Department of Health and Family Welfare, Government of India, has its headquarters in New Delhi.
              </p>
              <p>FSSAI further introduced 14 referral laboratories, 72 government/ UT laboratories, and 112 NABL-accredited independent laboratories, which are responsible for setting food safety standards in India. Moreover, the mandate of obtaining a food license is a primary requirement for initiating a food business in India.</p>
            </div>
    
            
          </div>
        </FSSAILicenseCertificateStyle>

      


    </section>

    
    

  );
};

const buttonStyle = {
  backgroundColor: "#002145",
  color: "#fff",
  padding: "12px 24px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};
//   );
// };

export default FSSAIAnnualReturnContentSection;
