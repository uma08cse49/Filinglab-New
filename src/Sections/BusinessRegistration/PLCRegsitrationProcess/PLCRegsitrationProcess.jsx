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
const PLCRegsitrationProcess = () => {
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
        <Heading>How To Register a Public Limited Company?</Heading>
  
        <p>
          Scroll down and find out how to register a public limited company as described below:
        </p>
  
        <SubHeading>Checklist for the Private Limited Company Registration:</SubHeading>
        <Ul>
          <li><strong>Choose a Business Activity</strong></li>
          <p>You must select a business activity before formally applying for a public limited company set up. A PLC is suitable for large-scale operations and external fundraising.</p>
          <li><strong>Name Reservation</strong></li>
          <p>FilingLab consultants will help you reserve the company name by filing the SPICe+ Part A Form.</p>
          <li><strong>Obtain a Digital Signature Certificate (DSC)</strong></li>
          <p>A DSC is used to authenticate the identity of the directors and shareholders. We’ll help you apply for a certificate for all members of the company.</p>
          <li><strong>Acquire a Director Identification Number (DIN)</strong></li>
          <p>After obtaining a DSC, we’ll help you get DINs for all directors to complete public limited company formation.</p>
          <li><strong>Draft MOA & AOA</strong></li>
          <p>Our seasoned lawyers will assist you in drafting a memorandum of association (MOA) and articles of association (AOA). An MOA and an AOA are legal documents that form the corporate governance of your company.</p>
          <li><strong>Fill Out SPICe+ Form</strong></li>
          <p>We’ll help you file an application for incorporation, get your company name approved, obtain a PAN and GST number, enroll for provident fund & employee insurance, and a bank account through SPICe+ and AGILE-PRO Form.</p>
          <li><strong>Receive the Incorporation Certificate</strong></li>
          <p>After the Ministry of Corporate Affairs (MCA) reviews and approves the application, you’ll receive the public limited company set-up certificate.</p>
        </Ul>

        <Heading>Difference between private company and a public limited company </Heading>

                <div style={{ margin: '25px 0' }}>
                    <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                    The distinction between the private and public companies in India as explained below:
                    </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Basis</th>
                        <th style={thStyle}>Private</th>
                        <th style={thStyle}>Public</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>Number of Members</td>
                        <td style={tdStyle}>At least two members are required, can go up to 200.</td>
                        <td style={tdStyle}>At least 7 with no upper limit.</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Fund Raising</td>
                        <td style={tdStyle}>Through private means – can’t raise capital via stock exchange.</td>
                        <td style={tdStyle}>Can issue shares on the national stock exchange and borrowings. </td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Liability</td>
                        <td style={tdStyle}>Limited to share capital invested by the members.</td>
                        <td style={tdStyle}>Limited</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Disclosure</td>
                        <td style={tdStyle}>Limited disclosure to the registry and general public.</td>
                        <td style={tdStyle}>A PLC must issue a company prospectus before issuing the shares to the public. Strict compliance with AML/CFT and beneficial ownership regulations.
                        </td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Share Transfer</td>
                        <td style={tdStyle}>Must require prior approval from the shareholders.</td>
                        <td style={tdStyle}>Easily traded on the stock exchange.</td>
                    </tr>

                    </tbody>

                  </table>
                  </div>


                   <Heading>Difference between a public company and limited liability partnership</Heading>

                <div style={{ margin: '25px 0' }}>
                    <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                    The difference between a public company and an LLP are as follows:
                    </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Point of Difference</th>
                        <th style={thStyle}>Public Limited Company</th>
                        <th style={thStyle}>Limited Liability Partnership</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>Partners</td>
                        <td style={tdStyle}>At least seven shareholders – no restriction on the upper limit.</td>
                        <td style={tdStyle}>At least two designated partners</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Legal status</td>
                        <td style={tdStyle}>Perpetual legal entity</td>
                        <td style={tdStyle}>Perpetual legal personality</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Liability</td>
                        <td style={tdStyle}>Limited</td>
                        <td style={tdStyle}>Limited</td>
                    </tr>
                    </tbody>

                  </table>
                  </div>

  
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

export default PLCRegsitrationProcess;
