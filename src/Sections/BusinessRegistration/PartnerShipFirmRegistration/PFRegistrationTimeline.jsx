import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  text-align: left !important;
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
  text-align: left !important;
`;

const Ul = styled.ul`
  padding-left: 20px;
list-style-type: none;
text-align: left !important;

  li {
    margin-bottom: 15px;
    line-height: 1.6;
    position: relative;
    color: #002145
    // text-align: left !important;
  }

  li::before {
    content: "✔";
    color: #ed740a;
    position: absolute;
    left: -20px;
    font-weight: bold;
    text-align: left !important;
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
const PFRegsitrationTimeline = () => {
return (
    <Section>
      <Container>
        <Heading>Timeline to Register a Partnership Firm Online in India</Heading>
  
        <p textAlign="left">
          <strong>Go through the following timeline to register a partnership firm online in India:</strong>
        </p>
        <Ul>
          <li>Draft and notarize a partnership deed in 1 to 2 days.</li>
          <li>Assemble documents and submit the application with documents to the corresponding state’s Registrar of Firms (ROF) in 2 to 3 days.</li>
          <li>The registrar will review the application and partnership deed in 7 to 10 days.</li>
          <li>Obtain the certificate of registration in 2 to 7 days.</li>
          <li>Register for PAN and GST, if applicable, within 4 to 6 days.</li>
          <li>Open a current bank account in the bank of your choice within 1 week after partnership firm registration online.</li>
        </Ul>

        <Heading>Compliance Needs After Partnership Firm Registration</Heading>   
        <p><strong>The compliance needs after partnership firm registration are as follows:</strong></p> 
        <Ul>
          <li><strong>Enroll with EPFO & ESIC: </strong>  After partnership company registration, we’ll assist you in registering with the Employee Provident Fund Organization (EPFO) and the Employee State Insurance Corporation (ESIC).</li>
          <li><strong>Annual Tax Returns: </strong> Corpbiz accountants and CAs will fulfill annual tax obligations for all partners after your partnership firm registration is completed online through ITR-5. The due date is September 30 for non-audit firms and October 31 if an audit is required.</li>
          <li><strong>GST Filing: </strong> If you’ve registered for goods and services taxes, then we’ll submit the return every month or quarter on prescribed dates. Common Forms are GSTR-3 and GSTR-4.</li>
          <li><strong>TDS Reporting: </strong> We’ll help you in filing the tax deducted at source (TDS) 7th of every quarter if you’ve hired employees after partnership firm registration.</li>
          <li><strong>Financial Return Filing: </strong>All firms are required to maintain and file books of accounts and income statements if annual turnover is more than INR 25 lacs by Oct. 31 if they’re liable for audit and July 31 if they’re not.</li>
          <li><strong>Notification of Changes: </strong>If there’s any change in the ownership, retirement, or death of the partner, then you must inform the registrar of partnership firms. We’ll help you register a new partnership deed in the said case.</li>
        </Ul>
        

  
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
          {/* Checklist for Directors */}
          {/* <div style={{ flex: "1 1 400px", lineHeight: "1.8" }}>
            <SubHeading>Checklist for the Directors:</SubHeading>
            <Ul>
              <li>Directors should have their Director Identification Number (DIN).</li>
              <li>Directors should have their Digital Signature Certificate (DSC).</li>
              <li>Directors should have their Permanent Account Number (PAN).</li>
              <li>Directors should have their Tax Deduction and Collection Number (TAN).</li>
              <li>Directors and shareholders should have attained the legal age.</li>
              <li>Directors must submit their address proof.</li>
            </Ul>
          </div> */}
  
          {/* Right side Image */}
          {/* <div style={{ flex: "1 1 400px", textAlign: "right" }}>
            <img
              src="public/images/FSSAIoverview.png"
              alt="FSSAI License Registration Overview"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div> */}
        </div>
      </Container>
    </Section>
  );
  
//   );
};

export default PFRegsitrationTimeline;
