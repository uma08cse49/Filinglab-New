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
        {/* <Heading>Timeline to Register a Partnership Firm Online in India</Heading>
  
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
        </Ul> */}

        <Heading>Post Registration Compliance for Sole Proprietorship</Heading>   
        <p style={{ textAlign: "left" }}>Once the sole proprietorship registration online is complete, the sole proprietor must follow all the post-compliance requirements to facilitate the legal operations of the business. They include:</p> 
        <Ul>
          <li><strong>Income Tax Filing - </strong>  Sole proprietors must ensure to file the income tax annually. However, business income must be reported as personal income since there is no legal difference between the entity and the owner. Timely filings help avoid unnecessary delays leading to penalties.</li>
          <li><strong>GST Returns - </strong> A sole proprietorship with a valid GST registration must ensure timely filing of GST returns. Depending on the business turnover and necessary compliance, GST returns can be filed monthly, quarterly or annually.</li>
          <li><strong>Financial Records - </strong> It is important for a sole proprietor to maintain financial records comprising business income, expenses incurred, and transactions. Bookkeeping records are a must to facilitate tax filing, financial analysis, and the auditing process.</li>
          <li><strong>License Renewals -  </strong> A sole proprietor must renew all business licenses and registrations on time to ensure the business's operations are not hampered, including the Shop and Establishment license and other trade-specific licenses and permissions.</li>
          <li><strong>TDS Compliance - </strong> If a sole proprietorship is Tax-Deducted at Source (TDS) compliant, it must ensure on-time deductions and deposition of the TDS. TDS can be filed quarterly in compliance with the mandatory legal and taxation regulations.</li>
          <li><strong>Labour Law Compliance - </strong>If the sole proprietor hires employees for work, in that case, the sole proprietorship must follow all mandatory rules and regulations related to labour laws, including work regulations, minimum wage requirements, and other employee benefits.</li>
        </Ul>

        <Heading>Top Professionals Who Prefer Sole Proprietorship Registration</Heading>   
        <p style={{ textAlign: "left" }}>The popularity of sole proprietorship has witnessed immense growth in recent time. Have a look at the top professionals who prefer sole proprietorship registration.</p> 
        <Ul>
          <li><strong>Doctors - </strong>  Prefer to exercise control over their practice through sole proprietorship.</li>
          <li><strong>Lawyers -</strong> Prefer to run their legal services independently with sole proprietorship</li>
          <li><strong>Accountants - </strong> Sole proprietorship helps them deliver customized services to their clients.</li>
          <li><strong>Consultants - </strong> Deliver specialized services as per client needs through sole proprietorship.</li>
          <li><strong>Architects - </strong> Manage their design projects independently through sole proprietorship.</li>
          <li><strong>Graphic Designers -  </strong>Sole proprietorship gives them creative work flexibility.</li>
          <li><strong>Interior Designers - </strong>Helps them offer customized business solutions to their clients.</li>
          <li><strong>IT Specialists -</strong>Gives them the autonomy to manage their technology projects with ease.</li>
        </Ul>

        <Heading>Others Significant Professionals</Heading>   
        {/* <p style={{ textAlign: "left" }}>The popularity of sole proprietorship has witnessed immense growth in recent time. Have a look at the top professionals who prefer sole proprietorship registration.</p>  */}
        <Ul>
          <li><strong>Freelance Writers -  </strong> Sole proprietorship gives them work flexibility in terms of hours location.</li>
          <li><strong>Small Retail Shop Owners -</strong> Sole proprietorship registration enables them to manage their business with ease</li>
          <li><strong>Photographers –  </strong> They prefer flexibility while handling their creative & professional projects.</li>
          <li><strong>Handymen – </strong> Allows them to deliver home repair services with ease and independence.</li>
          <li><strong>Personal Trainers –  </strong> Sole proprietorship registration gives them the ease of managing each client independently.</li>
          <li><strong>Boutique Owners – </strong>Helps them track inventory and give individual attention to their clients.</li>
          <li><strong>Real Estate Agents - </strong>Sole proprietorship registration gives them the flexibility to manage sales hassle-free.</li>
          <li><strong>Event Planners – </strong>Allows them to manage creative freedom and engage directly with their clients.</li>
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
