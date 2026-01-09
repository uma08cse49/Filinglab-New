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




const PFRegsitrationFAQ = () => {

    
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
    question: 'How many members are required for a partnership firm registration?',
    answer: (
      <p>
        You can register a partnership firm online with at least two members and a maximum of 20 partners.
      </p>
    ),
  },
  {
    question: 'Is there a minimum capital requirement for the procedure for the incorporation of a partnership firm registration in India?',
    answer: (
        <p>
        There’s no prescribed amount for registration as per the Indian Partnership Act of 1932. Partners can decide amongst themselves about capital contribution.
      </p>   
    ),
  },
  {
    question: 'What is the process to register a partnership firm online in India?',
    answer: (
       <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The step-by-step procedure for partnership company registration is as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Firstly, you are required to choose an economic activity.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Then draft a partnership deed. It is advisable to hire a lawyer for this step.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              After drafting the deed, file the application with documents.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             The Registrar of Firms (ROF) of your state will evaluate and approve your firm registration.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Apply for PAN/GST with the Income Tax Department.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Open the firm’s current bank account.</span>
          </li>
        </ul>
      </div>
    ),
  },
    {
    question: 'How different is a limited liability company (LLC) from a partnership firm registration?',
    answer: (
      <div>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>An LLC is a legal entity where members have limited liability, whereas all partners are personally liable against the firm’s debts.</span>
          </li>
           <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>A partnership is not different from its partners, unlike a company, which continues to exist even if there’s a change in ownership.</span>
          </li>
        </ul>
    </div>
    ),
  },
  {
    question: 'How long does it take to register a partnership firm online in India?',
    answer: (
      <p>
        The initial approval for partnership firm registration by the ROF takes at least 5 to 10 days, but the overall timeline is 10 to 20 days, starting from the official application to bank account setup.
      </p>
    ),
  },
  {
    question: 'What is the liability of members in a partnership firm registration?',
    answer: (
      <p>
        All partners have unlimited liability in a partnership firm set up. Members are personally held liable against the firm’s debts.
      </p>
    ),
  },

  {
    question: 'What documents are required for the procedure for the registration of a partnership firm in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Documents needed to register a partnership firm online are as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Partnership deed on a stamp paper.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Aadhaar card, driving license, or relevant ID proof.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Utility bills, such as electricity, water, or internet bills as address proof.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Lease or rental agreement as business address with an NOC from the owner in case it’s the latter.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>A company prospectus, detailing the business structure for raising funds.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px' }}>
            <span>✔</span>
            <span>Tax identification number (PAN) of all partners.</span>
          </li>
        </ul>
      </div>
    ),
  },
   {
    question: 'What are the legal requirements of a partnership company registration in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The legal requirements for a partnership firm are explained below:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>A firm can have at least 2–20 partners.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             The ROF mandates notarization of the partnership deed.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              A bank account to deposit the capital contribution.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             All partners should be 18 years old.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Why should I register a partnership in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The advantages of partnership registration online are as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>It offers complete control over the firm because the management and ownership are not separate, unlike a company.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             All partners share the same ratio of profits and losses.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              A firm registration is time-effective because there are fewer formalities.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             A registered firm will help you obtain credit facilities and market credibility.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'What are the different types of trade licenses available after partnership registration in India?',
    answer: (
      <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The different categories of business licenses are as follows:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>Shop establishment – general retail and wholesale trading.</span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Food and drug – for restaurants and cafes.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
              Manufacturing – for processing and production units.
            </span>
          </li>
          <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
             Services – for legal, accounting, consulting, and other professional-oriented services.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
    {
    question: 'Who owns a partnership firm?',
    answer: (
        <p>
        The firm is owned by its partners, who share profits and losses and have unlimited liability in the firm.
      </p>    
    ),
  },
   {
    question: 'Is a limited partnership the same as a partnership firm?',
    answer: (
      <p>No, a partnership firm is a type of business structure where all partners are equal with the same liabilities, whereas a limited partnership has a general partner with unlimited liability and a limited partner with restricted liability against the firm.</p>
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

export default PFRegsitrationFAQ;
