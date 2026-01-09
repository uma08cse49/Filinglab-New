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




const OPCFAQs = () => {

    
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
    question: 'What is a One Person Company (OPC)?',
    answer: (
      <p>
        One Person Company, also known as OPC, is a type of a business entity that functions independently, and has a single shareholder with limited liability.
      </p>
    ),
  },
  {
    question: 'Can a single person register a company?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, a single person is eligible to incorporate One Person Company (OPC), which is among the most popular form of company registered under the Companies Act, 2013.
        </p>
      
    ),
  },
  {
    question: 'What are the benefits of one person company registration?',
    answer: (
      <p>
        One Person Company is a type of a private limited company formed by one shareholder that enjoys the benefits such as status of a separate legal entity, limited liability, credibility and tax benefits.
      </p>
    ),
  },
    {
    question: 'Can an OPC be converted to a private limited company?',
    answer: (
      <p>
        Yes, since an OPC is meant for small business operations, it can be converted to a private limited company if its annual turnover limit exceeds Rs. 2 crores.
      </p>
    ),
  },
  {
    question: 'How long does it take to register an OPC in India?',
    answer: (
      <p>
        It usually takes between 7 to 10 working days to register an OPC in India, subject to document verification and approval.
      </p>
    ),
  },
  {
    question: 'Can an NRI incorporate an OPC in India?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Earlier, an OPC could only be incorporated by a resident of India. However, after the Companies (Incorporation) Second Amendment Rules, 2021, NRIs are now eligible for the incorporation of one person company in India.
        </p>
    ),
  },

  {
    question: 'Can I register an OPC company by myself?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, every single individual comprising at least 1 nominee and 1 director can register their OPC directly on the SPICe+ portal.
        </p>
    ),
  },
   {
    question: 'Who is eligible for One person company registration?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The natural and legal Indian citizens and non-resident Indians are eligible for one person company registration in India. In order to register one person company in India, it’s essential to understand the requirements.
        </p>
    ),
  },
  {
    question: 'How do I set up a one person company?',
    answer: (
      <p>
        The process required to set up a one person company allows the applicant to obtain a Digital Signature Certificate (DSC) and a Directors Identification Number (DIN), reserve the name and lastly file the forms/ mandatory documents for the issuance of certificate of incorporation.
      </p>
    ),
  },
  {
    question: 'Which is better, OPC or PVT Ltd?',
    answer: (
      <p>
        OPC which stands for one person company are suitable for single entrepreneurs looking for limited liability, whereas, LLP is beneficial for businesses having multiple shareholders and seeking flexibility in their limited liability.
      </p>
    ),
  },
    {
    question: 'What is the minimum capital for OPC?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          According to the provisions of Companies Act, 2013, the minimum capital required for one person company registration is Rs. 1 lakh.
        </p>
    ),
  },
   {
    question: 'Is GST registration mandatory for OPC?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, GST registration is mandatory for one person companies supplying goods and services outside the state.
        </p>
    ),
  },
   {
    question: 'Can OPC have 2 directors?Is GST registration mandatory for OPC?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, OPCs can have a maximum of at least 15 directors.
        </p>
    ),
  },
     {
    question: 'Can we convert OPC to PVT Ltd?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, an OPC can be voluntarily converted into a private limited company only upon the fulfilment of the condition, by passing a special resolution.
        </p>
    ),
  },
     {
    question: 'Can I register OPC online?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, online OPC registration is possible directly through the SPICe+ portal.
        </p>
    ),
  },
     {
    question: 'How can an OPC be converted to a private limited company?',
    answer: (
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Yes, online OPC registration is possible directly through the SPICe+ portal.
        </p>
    ),
  },
    {
    question: 'How can an OPC be converted to a private limited company?',
    answer: (
    <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
        Yes, since an OPC is meant for small business operations, it can be converted to a private limited company if its annual turnover limit exceeds Rs. 2 crores. To initiate this conversion process, follow these steps:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Pass a Special Resolution:</strong> Begin by passing a special resolution, which is a formal decision approved by the members of the company. This is essential to move forward with the conversion.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
            <strong>Increase Members and Directors: </strong>The company must increase the minimum number of members and directors to two. This change aligns the company's structure with the requirements of a private limited company.
            </span>
        </li>
         <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span>
            <strong>Obtain a No Objection Certificate (NOC): </strong>Secure a written No Objection Certificate from your creditors. This step ensures that all financial obligations are acknowledged and addressed before proceeding with the conversion.
            </span>
        </li>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
        By following these guidelines, your business can smoothly transition from an OPC to a private limited company, opening new avenues for growth and investment.
        </p>       
        </ul>
    </div>
    ),
    },
     {
    question: 'What is the timeline for obtaining a certificate of incorporation for an OPC?',
    answer: (
    <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          It usually takes between 7 to 10 working days to register an OPC in India, subject to document verification and approval. Here's a closer look at the timeline and factors involved:
        </p>
    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Certificate of Incorporation:</strong> Typically obtained within 3-5 days. This is a crucial step in the registration process.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Overall Process Duration:</strong> The entire incorporation process spans approximately 10 days. This period accounts for various procedural requirements and approvals.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Departmental Approval: </strong> Keep in mind that the timeline is subject to departmental approval. Any delays in this area can impact the overall timeline.</span>
        </li>
    </ul>
     <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          By understanding these components, you can better anticipate the steps and time required for the successful incorporation of your OPC.
        </p>
    </div>
    ),
  },

   {
    question: 'What is the procedure for getting name approval for an OPC?',
    answer: (
    <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          The next step requires the applicants to reserve a name for the OPC via the submission of the SPICe+ form directly on the Ministry of Corporate Affairs (MCA) portal. However, one must be careful in choosing a distinct name that does not violate any existing company or trademark.
        </p>
        <p>How to Secure Name Approval for Your OPC</p>
    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Decide on the Company Name:</strong> The name should follow the format “XYZ (OPC) Private Limited.” This structure is mandatory for all One Person Companies.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Submission via SPICe+ Form: </strong> You can submit only one preferred name in the SPICe+ application. Be sure to include the significance of the name to strengthen your application.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Handling Rejections:  </strong>If the MCA rejects your chosen name, you will need to submit a new SPICe+ form with an alternate name.</span>
        </li>
    </ul>
     <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          Once your name is approved by the MCA, you can proceed to the next stage of incorporation. This approval is a crucial step, as it establishes your company's identity and ensures compliance with regulatory standards.
        </p>
    </div>
    ),
  },

  {
    question: 'Who is not Eligible to Form an OPC?',
    answer: (
    <div>
        <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          When it comes to establishing a One Person Company, certain individuals do not qualify under the legal framework:
        </p>
    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Minors: </strong> Individuals under the age of 18 cannot initiate an OPC.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Foreign Nationals: </strong> Those who do not hold Indian citizenship are ineligible.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Non-Residents: </strong>Individuals who reside outside India do not meet the criteria.</span>
        </li>
        <li style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span>✔</span>
            <span><strong>Legally Incapacitated Individuals:</strong>Anyone who is unable to enter into a legal contract due to certain incapacities, such as mental health conditions or any other legal disqualifications, is not allowed to set up a One Person Company.</span>
        </li>
    </ul>
     <p style={{ fontWeight: 600, marginBottom: '8px' }}>
          These restrictions ensure that only eligible individuals can take advantage of the benefits offered by an OPC.
        </p>
    </div>
    ),
  },

  {
  question: 'Who is not Eligible to Form an OPC?',
    answer: (
    <p style={{ fontWeight: 600, marginBottom: '8px' }}>
        A person is restricted to being a member of just a single One Person Company (OPC) at a time. This regulation ensures that an individual can only manage or own a single OPC, promoting dedicated attention and effective governance within the business structure. If someone is already a member of an OPC, they cannot join another OPC simultaneously. This limitation is designed to prevent conflicts of interest and reduce the potential for overextension in managing multiple companies, thereby fostering focused and responsible entrepreneurship within this unique business framework.
    </p>
    )
    }
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
                          <h2 id="faq"style={styles.sectionTitle}>Frequently Asked Questions about OPC registration</h2>
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

export default OPCFAQs;
