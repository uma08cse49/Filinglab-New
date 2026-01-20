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
//   return (
//     <Section>
//       <Container>
//         <Heading>Eligibility Criteria for Private Limited Company Registration</Heading>

//             <p>According to the Ministry of Corporate Affairs, the eligibility criteria to register a Private Limited company in India includes the following:</p>

//         {/* <ListContainer> */}
//           {/* ✅ Main Checklist */}
//           {/* <ListBox
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           > */}
//             <SubHeading>Checklist for the Private Limited Company Registration:</SubHeading>
//             <Ul>
//               <li>A minimum of two shareholders. Maximum number of shareholders can be 200.</li>
//               <li>A minimum of two directors, one of whom must be a resident of India.</li>
//               <li>The selected company name must be unique and should not appear similar to an existing business.</li>
//               <li>The Registrar of Companies (ROC) must approve the proposed company name.</li>
//               <li>Have an official company address.</li>
//               <li>A valid Goods and Services Tax (GST) number.</li>
//               <li>Should register with the Employee Provident Fund (EPF) department.</li>
//               <li>Legal and regulatory compliance is a must—maintaining books of accounts, holding annual general meetings, filing annual returns with the ROC, etc.</li>
//               <li>The company should not be involved in any illegal activity per Indian law.</li>
//               <li>The company should finalize its capital requirement.</li>
//               <li>Open a bank account in the bank.</li>
//               <li>Draft its Memorandum of Association (MOA) and Articles of Association (AOA).</li>
//               <li>The company must appoint an auditor, a chartered accountant, and a CS.</li>
//               <li>Register intellectual property such as trademarks and logos.</li>
//             </Ul>
//           {/* </ListBox> */}

//           {/* ✅ Other Entities */}
//           {/* <ListBox
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             viewport={{ once: true }}
//           > */}
//             <SubHeading>Checklist for the Directors:</SubHeading>
//             <Ul>
//               <li>Directors should have their Director Identification Number (DIN).</li>
//               <li>Directors should have their Digital Signature Certificate (DSC).</li>
//               <li>Directors should have their Permanent Account Number (PAN).</li>
//               <li>Directors should have their Tax Deduction and Collection Number (TAN).</li>
//               <li>Directors and shareholders should have attained the legal age.</li>
//               <li>Directors must submit their address proof.</li>
//             </Ul>

//                {/* Right Image */}
//         <div
//           style={{
//             flex: "1 1 400px",
//             textAlign: "Right",
//             // marginTop: "20px",
//           }}
//         >
//           <img
//             src="public/images/FSSAIoverview.png"
//             alt="FSSAILicense Registration Overview"
//             style={{ maxWidth: "100%", borderRadius: "10px" }}
//           />
//         </div>
//           {/* </ListBox> */}
//         {/* </ListContainer> */}
//       </Container>
//     </Section>

return (
    <Section>
      <Container>
        <Heading>Eligibility Criteria for Private Limited Company Registration</Heading>
  
        <p>
          According to the Ministry of Corporate Affairs, the eligibility criteria
          to register a Private Limited company in India includes the following:
        </p>
  
        <SubHeading>Checklist for the Private Limited Company Registration:</SubHeading>
        <Ul>
          <li>A minimum of two shareholders. Maximum number of shareholders can be 200.</li>
          <li>A minimum of two directors, one of whom must be a resident of India.</li>
          <li>The selected company name must be unique and should not appear similar to an existing business.</li>
          <li>The Registrar of Companies (ROC) must approve the proposed company name.</li>
          <li>Have an official company address.</li>
          <li>A valid Goods and Services Tax (GST) number.</li>
          <li>Should register with the Employee Provident Fund (EPF) department.</li>
          <li>
            Legal and regulatory compliance is a must—maintaining books of accounts,
            holding annual general meetings, filing annual returns with the ROC, etc.
          </li>
          <li>The company should not be involved in any illegal activity per Indian law.</li>
          <li>The company should finalize its capital requirement.</li>
          <li>Open a bank account in the bank.</li>
          <li>Draft its Memorandum of Association (MOA) and Articles of Association (AOA).</li>
          <li>The company must appoint an auditor, a chartered accountant, and a CS.</li>
          <li>Register intellectual property such as trademarks and logos.</li>
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
            <SubHeading>Checklist for the Directors:</SubHeading>
            <Ul>
              <li>Directors should have their Director Identification Number (DIN).</li>
              <li>Directors should have their Digital Signature Certificate (DSC).</li>
              <li>Directors should have their Permanent Account Number (PAN).</li>
              <li>Directors should have their Tax Deduction and Collection Number (TAN).</li>
              <li>Directors and shareholders should have attained the legal age.</li>
              <li>Directors must submit their address proof.</li>
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
