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

const EligibilityCriteria = () => {


return (
    <Section>
      <Container>
        <Heading>Eligibility Criteria for Public Limited Company Registration</Heading>
  
        <p>
          The eligibility criteria for public limited company registration online are as follows:
        </p>
  
        <SubHeading>Checklist for the Public Limited Company Registration:</SubHeading>
        <Ul>
          <li>A minimum of seven shareholders</li>
          <li>A minimum of three directors and at least one of whom must be an Indian resident.</li>
          <li>Digital signature certificate for all three directors to fill out online forms.</li>
          <li>Director identification number for all directors with a completely filed DIR-2 Form.</li>
          <li>An approved company name.</li>
          <li>Documents, namely memorandum of association (MOA) and articles of association (AOA).</li>
          {/* <li>Should register with the Employee Provident Fund (EPF) department.</li>
          <li>
            Legal and regulatory compliance is a must—maintaining books of accounts,
            holding annual general meetings, filing annual returns with the ROC, etc.
          </li>
          <li>The company should not be involved in any illegal activity per Indian law.</li>
          <li>The company should finalize its capital requirement.</li>
          <li>Open a bank account in the bank.</li>
          <li>Draft its Memorandum of Association (MOA) and Articles of Association (AOA).</li>
          <li>The company must appoint an auditor, a chartered accountant, and a CS.</li>
          <li>Register intellectual property such as trademarks and logos.</li> */}
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
          <div style={{ flex: "1 1 400px", lineHeight: "1.8" }}>
            <SubHeading>Checklist- Who Can Register a Public Limited Company?</SubHeading>
            <p>Indian and foreign entrepreneurs can register a public limited company. Top businesses that must open a PLC are as follows:</p>
            <p>Online retail and shopping stores.</p>
            <Ul>
              <li>e-pharma and medicine research company.</li>
              <li>Medical equipment and hospitals.</li>
              <li>Car and electronics manufacturing.</li>
              <li>Food production and processing.</li>
              <li>IT tech and AI startups.</li>
              <li>Fintech and insurance institutes.</li>
            </Ul>
          </div>
  
          {/* Right side Image */}
          <div style={{ flex: "1 1 400px", textAlign: "right" }}>
            <img
              src="public/images/FSSAIoverview.png"
              alt="FSSAI License Registration Overview"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
  
//   );
};

export default EligibilityCriteria;
