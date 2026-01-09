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
  


const SPRegistrationFAQ = () => {

    const [openIndex, setOpenIndex] = useState(null); // initially no FAQ open

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

const faqData = [
  {
    question: 'What is Sole Proprietorship Registration?',
    answer: 'Sole proprietorship registration refers to the process of legally setting up a business venture in India. In this form of business structure, there’s a single owner who rules and dominates the business game. It encompasses GST registration, bank account opening, MSME registration, etc.',
  },
  {
    question: 'Can I register my proprietorship firm online?',
    answer: "Yes, it is possible to register proprietorship firm online in India. You can follow the process on the government's e-portal for company registration or contact us to handle the online registration process on your behalf.",
  },
  {
    question: 'What is the sole proprietorship firm registration fees?',
    answer: 'The sole proprietorship firm registration fees depend on various factors, including your business needs. You can check our pricing packages and select the one that best fulfils your business needs. If you have any questions, you can contact us; we will help you make the right choice.',
  },
  {
    question: 'Can I convert my sole proprietorship into a private limited company?',
    answer: 'Yes, you can convert your sole proprietorship into a private limited company by following the due process and meeting all regulatory and legal requirements mandated by the Ministry of Company Affairs (MCA).',
  },
  {
    question: 'How long does it take for firm registration as proprietorship?',
    answer: 'The end-to-end process for firm registration as proprietorship takes 7 to 10 working days to complete, subject to delays caused by incomplete paperwork or delayed submission. You can avoid delays by using Corpbiz services.'
  },
  {
    question: 'What are some important features of a sole proprietorship?',
     answer: (
     <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Some important features of a sole proprietorship include the following:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Single owner.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Easy set up
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Complete control with the owner
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Unlimited personal liability
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Taxation on owner's personal income.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Operational flexibility</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>No shared profits and losses.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>No separate legal entity</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'What happens if a sole proprietorship fails to run successfully?',
    answer: 
    (
      <p>If a sole proprietorship fails to run successfully, the owner is personally liable to clear all the business debts, which puts his personal assets at risk. Business obligations may lead to financial losses and bankruptcy, causing the owner to wind up the business.</p>
    )
  },
  {
    question: 'What is the difference between a registered company and a sole proprietorship?',
    answer: 'Company registration in India offers limited liability protection, as the company is recognized as a separate legal entity. It is easier to raise capital, there is scope for growth, and it enjoys greater credibility. A sole proprietorship, on the other hand, does not enjoy these features as the owner has unlimited liability.'
  },
  {
    question: 'Can a sole proprietor own a Limited Liability Partnership (LLP)?',
    answer: 
    (
      <div>No, a sole proprietor cannot own an LLP as it requires a minimum or two partners to register. However, a sole proprietorship is eligible to become a partner in the LLP by following the due procedure, meeting regulatory standards and fulfilling legal obligations.
      </div>
    )
  },
  {
    question: 'Can you give me an example of a sole proprietorship?',
    answer: 
    (
    <div> Some common examples of a sole proprietorship firm include a local bakery, stationery shop, grocery store, jewellery showroom, and gym. All these businesses are owned and operated by a single owner who manages their finances and makes strategic business decisions to scale up.</div>
    )
  },
  {
    question: 'Is GST registration for proprietorship mandatory?',
    answer: (
    <div>GST registration for proprietorship is not mandatory unless the business touches the mandated annual turnover threshold. If the business crosses INR 40 lakhs in yearly turnover, it becomes compulsory to get GST registration for sole proprietorship business.</div>  
    )

  },
  {
    question: 'Does a sole proprietorship need a PAN card?',
    answer: (
      <div>Yes, a sole proprietorship must obtain a PAN card, which is required for income tax filings and other financial transactions.</div>
    )
  },
  {
    question: 'Can I use my personal bank account to run a sole proprietorship business?',
    answer: 
    (
      <div>While it is possible to use your personal bank account for sole proprietorship business in India, opening a separate business account is recommended to manage your financial transactions and maintain transparency.</div>
    )
  },
  {
  question: 'How is LLP different from sole proprietorship?',
  answer:(
    <div>LLP and sole proprietorship are different in terms of liability, business structure, and taxation. While an LLP offers limited liability to its partners, the owner has unlimited personal liability in a sole proprietorship. LLPs are structured with business partners; however, sole proprietorships are wholly managed and controlled by a single owner.</div>
  )
  },
  {
  question: 'Is sole proprietorship a separate legal entity?',
  answer:(
    <div>A sole proprietorship is not a separate legal entity. There is no distinction between the sole proprietor and the sole proprietorship.</div>
  )
  },
  {
  question: 'Can I register my sole proprietorship online?',
  answer:(
    <div>Yes, you can complete your proprietorship firm registration online. However, if you need guidance with sole proprietorship registration online, we can help make the process easy for you with our expert advice and experience with over 1000+ sole prop registrations.</div>
  )
  },
    {
  question: 'What are the documents required to register a sole proprietorship in India?',
  answer:(
    <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Following are some of the documents required to register a sole proprietorship in India:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Aadhar card</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Registered office address
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Business bank account
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Rental agreement of the office
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>NOC from the landlord</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Utility bill</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Registration certificates</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>GST number</span>
          </li>       
        </ul>
      </div>
    ),
  },
  {
  question: 'What is proof of proprietorship?',
  answer:(
    <div>Proof of proprietorship is a document serving as evidence, verifying the sole proprietor's ownership over the sole proprietorship. Documents registered in the owner's name, such as the Permanent Account Number, voter ID card, business registration number, or business bank account, serve as proof of proprietorship.</div>
  )
  },
  {
  question: 'What are some key benefits of sole proprietorship?',
  answer:(
    <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Some of the key benefits of sole proprietorship include the following:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Direct taxation benefits</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Lower compliances
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Lower regulatory & legal costs
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Simple business set up
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
  question: 'Does sole proprietorship registration vary from one state to the other in India?',
  answer:(
    <div>Yes, the registration process for a sole proprietorship may vary from state to state in India. Although there is no central law governing sole proprietorship registration, each state may have its own registration requirements, including obtaining specific trade licenses.</div>
  )
  },
  
];



  return (
    <Section>
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
                Frequently Asked Questions
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

export default SPRegistrationFAQ;
