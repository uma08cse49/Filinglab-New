import React,{ useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import React, { useRef, useEffect, useState } from 'react';

const Section = styled.section`
  background:rgb(240, 240, 240);
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
  margin-top:30px
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #ed740a;
  font-weight: 800;
  text-align: center;
  margin-bottom: 70px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  background: #002145;
  color: white;
  padding: 16px;
  font-size: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 16px;
  font-size: 0.95rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
`;

const Tr = styled.tr`
  &:hover {
    background: #f3f6fb;
  }
`;

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
      color: 'gray',
      fontSize: '15px',
      lineHeight: '1.6',
      marginBottom: '20px',
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
  


const AnnualReturnVsFSSAIHalfYearlyReturn = () => {

    const [openIndex, setOpenIndex] = useState(null); // initially no FAQ open

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

const faqData = [
  {
    question: 'What is FSSAI Return?',
    answer: 'FSSAI return is an essential requirement for food business operators in India. It must be filed by all FBOs indulged in the business of manufacture, sale, import, and export of food products. However, the FBOs involved in the business of manufacturing and distribution of dairy products must file a half-yearly return to the concerned authorities.',
  },
  {
    question: 'How can a person file an FSSAI Return?',
    answer: 'All food business operators are required to obtain the FSSAI License and file the FSSAI return either electronically or physically as may be prescribed by the concerned Food Safety Commissioner, in Form D-1. However, the filing of the FSSAI annual return should be done on/or before 31st May of each year to the Licensing Authority concerning the classification of food items manufactured or sold by him during the previous financial year.',
  },
  {
    question: 'What details are required for FSSAI Return?',
    answer: 'The details required for filing FSSAI return are as outlined below:\n 1.Details of the food items manufactured, produced, or sold.\n 2.Description of the Size of a bottle or any other package and Quantity in Metric Ton.\n 3.Value of the products and the selling price per Kg item or unit of packing \n 4.Details of the Exported or imported quantity in Kgs and the list of details of countries or ports where they are imported and exported.\n 5.Rate of Carriage in Freight and Freight on Board, etc.',
  },
  {
    question: 'Who is exempted from filing an FSSAI annual return?',
    answer: 'The fast-food joints, restaurants, grocery stores and canteens are some of the entities exempted from filing FSSAI annual returns.',
  },
  {
    question: 'What is the penalty for late filing of the FSSAI annual return?',
    answer: 'The consequences for any failure or late filing of the FSSAI annual return attracts a penalty of Rs. 100 which will be charged every day for the time for which the delay continues.'
  },
  {
    question: 'What are the types of forms used for filing FSSAI returns?',
    answer: 'The below-mentioned forms are used for filing FSSAI annual returns: \n 1.Form D1 -For other manufacturing units and importer \n 2.Form D2 -For milk processing units with half-year returns'
  },
  {
    question: 'What is FORM-D 1 in FSSAI Return?',
    answer: "FORM D-1 is an annual return, which can either be filed electronically or in the physical form specified by the Food Safety Commissioner, irrespective of the previous year's production."
  },
  {
    question: 'What is FORM-D 2 in FSSAI Return?',
    answer: 'FORM D-2 is a half-yearly return filed for a period starting from 1st April to 30th September and 1st October to 31st March of every financial year.'
  },
  {
    question: 'What is the last date for filing an FSSAI Return?',
    answer: 'The last date for filing the FSSAI Return is 31st May of every financial year.'
  },
  {
    question: 'Is annual return mandatory for FSSAI?',
    answer: 'Yes, filing an annual return is mandatory for every food business operator registered or licensed under the FSSAI Act.'
  },
  {
    question: 'How to file the FSSAI annual return online?',
    answer: 'The food business operators seeking to file FSSAI annual return online must log on to the official website of the FSSAI and fill necessary details in the forms prescribed. Lastly, the applicants must revise and make submission of the annual return directly on the official website.'
  },
  {
    question: 'What is FoSCoS annual return filing?',
    answer: 'FoSCoS annual return filing is FSSAI annual return filing only through the online mode at the FoSCoS portal, effective since the financial year 2020-21.'
  },
  {
    question: 'How can I file an FSSAI annual return?',
    answer: 'The entire process to file the FSSAI annual return is as described below: \n Step 1: Login to FSSAI Portal ,\n Step 2:Receive the Confirm Verification Code , \n Step 3: File Annual Return Forms, \nStep 4: Upload Documents \n Step 5: Revise & Submit' 
  },
  {
  question: 'Who is eligible for filing the FSSAI annual return?',
  answer:'The entities eligible for filing FSSAI annual returns include:, \n 1.FBOs having a business turnover exceeding Rs. 12 lakhs.\n 2.FBOs engaged in the import, sale, sorting, handling, export, distribution, and transport of any type of food products. \n 3.FBOs engaged in the business of manufacturing, repackaging, or relabelling of food products. \n 4.All FBO license holders engaged in the distribution & manufacturing of milk and milk products.'
  }
];



  return (
    <Section>
      <Container>
        <Title>Difference b/w FSSAI Annual Return & FSSAI Half-Yearly Return</Title>
            <p>The key differences between FSSAI annual return and FSSAI half-yearly return are as outlined below:</p>
        <Table>
          <thead>
            <tr>
              <Th>Aspects</Th>
              <Th>FSSAI Annual Return</Th>
              <Th>FSSAI Half-Yearly Return</Th>
            </tr>
          </thead>
          <tbody>
            <Tr>
              <Td>Meaning</Td>
              <Td>FSSAI annual return is a yearly report mandatory filed by all FBOs indulged in the production or sales of food products.</Td>
              <Td>FSSAI half-yearly return is a bi-annual report filed by the FBOs specifically dealing with milk and associated products.</Td>
            </Tr>
            <Tr>
              <Td>Applicability</Td>
              <Td>Applicable to all businesses/ operators indulged in manufacturing or processing food products.</Td>
              <Td>Applicable to all businesses/ dealers indulged in manufacturing and processing of dairy and associated products.</Td>
            </Tr>
            <Tr>
              <Td>Frequency</Td>
              <Td>Filed once a year on or before May 31st of every financial year.</Td>
              <Td>Filed twice a year for the period 1st April to 30th September and 1st October to 31st March of every financial year.</Td>
            </Tr>
            <Tr>
              <Td>FSSAI Forms</Td>
              <Td>Filed using Form D-1 under Schedule 2 of the Food Safety and Standards (Licensing and Registration of Food Business) Regulations, 2011.</Td>
              <Td>Filed using Form D-2 under Schedule 2 of the Food Safety and Standards (Licensing and Registration of Food Business) Regulations, 2011.</Td>
            </Tr>
          </tbody>
        </Table>
      </Container>



{/* 
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 id="faq" style={styles.sectionTitle}>
                    Frequently Asked Questions
                </h2>     
            {faqData.map((item, index) => (
                <div
                key={index}
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    marginBottom: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                }}
                >
                <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    background: '#f9f9f9',
                    fontSize: '15px',
                    fontWeight: '500',
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
                        fontSize: '12px',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                    }}
                    >
                    ▼
                    </span>
                </button>
                {openIndex === index && (
                    <div
                    style={{
                        padding: '10px 16px',
                        backgroundColor: '#fff',
                        color: '#444',
                        fontSize: '14px',
                    }}
                    >
                    {item.answer}
                    </div>
                )}
                </div>
            ))}
            </div> */}


            <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                // alignItems: 'flex-start',
                alignItems: 'center',  
                textAlign: 'center',
                gap: '40px', 
                maxWidth: '1100px', 
                margin: '0 auto', 
                padding: '40px 20px' 
                }}>
            {/* Left: Image */}
            <div style={{ flex: '1', minWidth: '200px',display: 'flex', justifyContent: 'center' }}>
                <img
                src="src\assets\images\FAQ.png"
                alt="FAQ illustration"
                style={{ width: '100%', height: 'auto', maxWidth: '300px' ,alignItems: 'center', }}
                />
            </div>

            {/* Right: FAQ Content */}
            <div style={{ flex: '2', maxWidth: '700px',textAlign: 'center', }}>
                <h2 id = "FAQ" style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px',  }}>
                FAQs on Filing Annual Return under FSSAI
                </h2>
                <p style={{ marginBottom: '24px', color: '#555' }}>
                Have a look at the answers to the most asked questions.
                </p>

                {faqData.map((item, index) => (
                <div
                    key={index}
                    style={{
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    }}
                >
                    <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                        // background: 'none',
                        // border: 'none',
                        // fontSize: '18px',
                        // fontWeight: '600',
                        // cursor: 'pointer',
                        // padding: '0',
                        // display: 'flex',
                        // justifyContent: 'space-between',
                        // alignItems: 'center',
                        // width: '100%',
                        background: 'none',
                        border: 'none',
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                    }}
                    >
                    {item.question}
                    <span style={{
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                    }}>
                        ▼
                    </span>
                    </button>
                    {openIndex === index && (
                    <p style={{ marginTop: '10px', fontSize: '15px', color: '#444' }}>
                        {item.answer}
                    </p>
                    )}
                </div>
                ))}
            </div>
            </div>



  </Section>
    
  );
};

export default AnnualReturnVsFSSAIHalfYearlyReturn;
