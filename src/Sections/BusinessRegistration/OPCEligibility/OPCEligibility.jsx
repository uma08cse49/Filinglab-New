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
        <Heading>Eligibility Criteria for One Person Company Registration</Heading>
  
        <p>
          The eligibility criteria for one person company registration in India is discussed below:
        </p>
  
        <SubHeading>Checklist for One Person Company Registration</SubHeading>
        <Ul>
          <li>At least 1 shareholder and 1 director</li>
          <li>Mandatory appointment of nominee before incorporation</li>
          <li>Mandatory obtaining the consent of the nominee (under Form INC 3)</li>
          <li>Suitable for small-scale business operations</li>
          <li>Annual turnover limit of not more than Rs. 2 crores</li>
          <li>Minimum authorized capital of Rs. 1 lakh</li>
          <li>Restriction on businesses involved in financial activities</li>
          <li>Legal object of the profitable business activities.</li>
          <li>DSC of the proposed director</li>
          <li>Unique name of the OPC</li>
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
            <SubHeading>Eligibility Checklist for OPC Registration</SubHeading>
            <Ul>
              <li>A natural and legal person above 18 years of age</li>
              <li>Indian citizen/resident of India</li>
              <li>Non-resident of Indians (NRIs) - eligible after Union Budget 2021-22</li>
              <li>Any other legal entity or company entitled to establish a new OPC</li>
              <li>Nominee must be a citizen or resident of India</li>
            </Ul>
              <p>To further clarify, the term "resident of India" is defined as a person who has stayed in India for a period of not less than 182 days during the immediately preceding financial year. This means that both the member and the nominee must satisfy this residency requirement to be eligible to participate in an OPC.</p>
              <p>Additionally, while NRIs gained eligibility to form OPCs post-Union Budget 2021-22, it's important to note that only natural persons who are Indian citizens can act as members and nominees. Legal entities and companies can establish an OPC, but they must ensure that the nominee is a natural person who meets the citizenship and residency criteria.</p>
              <p>By understanding these specific requirements, individuals and entities can confidently navigate the process of forming an OPC, ensuring compliance with all relevant regulations.</p>
          </div>
  
          {/* Right side Image */}
          <div style={{ flex: "1 1 400px", textAlign: "right" }}>
            <img
              src="public/images/FSSAIoverview.png"
              alt="FSSAI License Registration Overview"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
          <div style={{ flex: "1 1 400px", lineHeight: "1.8" }}>
                <SubHeading>Why is an OPC suitable only for small businesses?</SubHeading>
                <p>Yes, since an OPC is meant for small business operations, it can be converted to a private limited company if its annual turnover limit exceeds Rs. 2 crores.</p>
                <p>However, it's important to understand why an OPC is fundamentally suited for smaller ventures:</p>

                <Ul>
                <li><strong>Single Member Structure: </strong>An OPC can only have one member at any given time. This inherently limits its scalability, as additional members cannot join to share responsibilities or bring in new expertise.</li>
                <li><strong>Limited Capital Raising:</strong>Unlike larger business structures, an OPC cannot add more shareholders to raise additional capital. This restriction makes it challenging to finance expansion plans that require significant investment.</li>
                <li><strong>Growth Constraints: </strong>With the business's growth, an OPC cannot accommodate more members, which can hinder its ability to expand beyond a certain point. This makes it ideal for entrepreneurs who prefer maintaining control without the complexities of a larger business framework.</li>
                </Ul>
                <p>Thus, while an OPC provides a streamlined and manageable structure for small businesses, conversion to a private limited company becomes a practical option as the business surpasses the small-scale operation threshold.</p>
            </div>
        </div>
      </Container>
    </Section>
  );
  
//   );
};

export default EligibilityCriteria;
