// import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from 'react';

const Section = styled.section`
  padding: 60px 20px;
  background: #fff;
  color: #333;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #ed740a;
  text-align: center;
  margin-bottom: 40px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListBox = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  background:rgb(238, 238, 238);
  border-left: 6px solid #ed740a;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
`;

const SubHeading = styled.h3`
  color:#002145;
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

const Ul = styled.ul`
  padding-left: 20px;
list-style-type: none;
  li {
    margin-bottom: 15px;
    line-height: 1.6;
    position: relative;
    color: #002145
  }

  li::before {
    content: "✔";
    color: #ed740a;
    position: absolute;
    left: -20px;
    font-weight: bold;
  }
`;

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


   const styles = {
      container: {
        width: '100%',
        margin: '0 10px',
        padding: '40px 70px',
        backgroundColor: 'white',
        fontFamily: 'Arial, sans-serif',
      },
    }   




const PLCRegistrationFAQ = () => {

    
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
    question: 'How many members are required for a public limited company formation?',
    answer: (
      <p>
        The Companies Act, 2013 mandates at least seven members for a public limited company setup.
        There are no restrictions on the upper limit of shareholders.
      </p>
    ),
  },
  {
    question: 'What is the process to register a public limited company in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The procedure for the incorporation of a public limited company is as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Select a legitimate business activity.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Apply for a digital signature certificate and Director Identification Number (DIN).
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Assemble and notarize documents such as ID proofs, NOCs, address proofs, MOA and AOA.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              File the incorporation application using the SPICe+ facility and apply for PAN, GST,
              and bank account.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Obtain the certificate of incorporation.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Is there a minimum capital requirement for the procedure for incorporation of public limited company registration in India?',
    answer: (
      <p>
        According to the 2015 amendment of the Companies Act, 2013, there’s no minimum paid-up capital mandate. However, most businesses and entrepreneurs invest at least an amount between INR 1 to 5 Lacs.
      </p>
    ),
  },
    {
    question: 'How long does it take to register a public limited company in India?',
    answer: (
      <p>
        The entire process, starting from name approval to obtaining DSC and DIN and the subsequent incorporation, tax registration, and bank account setup through SPICe+ takes around 1 to 2 weeks. Contact Filinglab and explore the best seamless options to register a public limited company.
      </p>
    ),
  },
  {
    question: 'How long does it take to register a public limited company in India?',
    answer: (
      <p>
        The entire process, starting from name approval to obtaining DSC and DIN and the subsequent incorporation, tax registration, and bank account setup through SPICe+ takes around 1 to 2 weeks. Contact Filinglab and explore the best seamless options to register a public limited company.
      </p>
    ),
  },
  {
    question: 'What documents are required for the procedure for the incorporation of a public limited company in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The list of documents needed for a public limited company set up is as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Proof and address of the directors and shareholders.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             A registered company address (rent agreement, commercial lease, or virtual office).
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Digital signature certificate (DSC) with director identification number (DIN).
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Name approval certificate
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>A no-objection letter from the rightful owner in case the office address is a rented space.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Tax identification card of all directors and shareholders.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>A memorandum of association with clauses on liability and company structure.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Articles of association with provisions on members' responsibilities, profit sharing, indemnity, meetings, and dissolution.</span>
          </li>
        </ul>
      </div>
    ),
  },

  {
    question: 'What are the legal requirements of a public limited company set up in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The mandatory prerequisites to register a public limited company in India are as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>At least 7 shareholders and 3 directors – at least one director must be an Indian resident.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             The board of directors should appoint a company secretary and an auditor.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Statutory audit on a yearly basis is a compulsory mandate.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             A business address
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>A company prospectus, detailing the business structure for raising funds.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>A DIN and DSC.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Memorandum of Association document</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Articles of association</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>At least INR 1 lac of share capital.</span>
          </li>
        </ul>
      </div>
    ),
  },
   {
    question: 'Why should I register a public limited company in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Given below are the reasons why should I register a public limited company in India-
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>It is easier to raise capital through the Bombay and National Stock Exchange.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             You can issue bonds and securities to the public as well as to acquire funds.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              A public limited company is perceived as more reliable compared to a private company because all information is easily available to the public.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Access to an abundance of loan and credit facilities.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>The business structure has a perpetual succession, meaning the company will remain in business regardless of any change in the ownership.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Members have limited liability.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'What is a Director Identification Number (DIN)?',
    answer: (
      <p>
        Director Identification Number (DIN) is a unique ID number that is used by the Ministry of Corporate Affairs (MCA) to monitor a director’s engagement within the company and its governance.
      </p>
    ),
  },
  {
    question: 'Does a public limited company formation require the submission of an MOA and AOA?',
    answer: (
      <p>
        Yes, all legal entities should submit a Memorandum of Association (MOA) and Articles of Association (AOA) as per the Companies Act, 2013.
      </p>
    ),
  },
    {
    question: 'What are the legal requirements for name reservation of a public limited company registration online in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The following are mandatory requisites to keep in mind before applying for name reservation:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Name filing through RUN or SPICe+ Part A.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Your proposed name shouldn’t resemble an existing company.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              A public limited company is perceived as more reliable compared to a private company because all information is easily available to the public.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             The name must not indicate a connection with the local, state, or central government.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>It shouldn’t include words prescribed as undesirable by the Indian Government.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>The business name mustn’t infringe the trademark registration.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>The proposed name shouldn’t contain any terms under section of the Emblems and Names (Prevention of Improper Use) Act of 1950 without prior approval.</span>
          </li>
        </ul>
      </div>
    ),
  },
   {
    question: 'What are the types of public limited company registration online?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The two main types of PLC company set up are as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Listed companies: this structure can be listed on a stock exchange and requires stricter compliance with Indian regulations.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Unlisted companies: You can trade stock on an exchange with this business setup. The compliance requirements are flexible than compared of a listed company.
            </span>
          </li>
          
        </ul>
      </div>
    ),
  },
];

return (
    <Section>
      <Container>
              {/* ✅ Flex container for Directors Checklist + Image */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "40px",
            gap: "20px",
          }}
        >
        </div>

        <section id="FAQ">
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

      </Container>
    </Section>
  );
  
//   );
};

export default PLCRegistrationFAQ;
