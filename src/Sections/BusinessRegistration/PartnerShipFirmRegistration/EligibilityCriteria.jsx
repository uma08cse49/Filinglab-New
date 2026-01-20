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
        <Heading>Eligibility Criteria for Partnership Firm Registration</Heading>
  
        <p>
          The eligibility criteria for partnership firm registration are as follows:
        </p>
  
        {/* <SubHeading>Checklist for One Person Company Registration</SubHeading> */}
        <Ul>
          <li>A minimum of two partners is required to register a partnership firm online.</li>
          <li>A well-drafted partnership deed on a stamp paper.</li>
          <li>All members must be at least 18 years of age at the time of partnership firm registration online.</li>
          <li>A pre-approved firm name before partnership company registration.</li>
          <li>A registered office address, namely a lease agreement, rental contract, or virtual office space.</li>
          <li>Bank account opening to conduct business after the partnership company registration in India.</li>
          <li>A maximum of 20 members can form a partnership company registration.</li>
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
            <SubHeading>Checklist- Who Can Register a Partnership Firm Online?</SubHeading>
            <Ul>
              <li>Anyone natural person of a sound mind.</li>
              <li>The head of a Hindu Undivided Family (HUF).</li>
              <li>Trusts can also become a partner in a firm.</li>
              <li>Partners of a registered firm can also become partners in a different firm.</li>
            </Ul>
          </div>
  
          {/* Right side Image */}
          <div style={{ flex: "1 1 300px", textAlign: "right" }}>
            <img
              src="public/images/FSSAIoverview.png"
              alt="FSSAI License Registration Overview"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
          {/* <div style={{ flex: "1 1 400px", lineHeight: "1.8" }}>
                <SubHeading>Why is an OPC suitable only for small businesses?</SubHeading>
                <p>Yes, since an OPC is meant for small business operations, it can be converted to a private limited company if its annual turnover limit exceeds Rs. 2 crores.</p>
                <p>However, it's important to understand why an OPC is fundamentally suited for smaller ventures:</p>

                <Ul>
                <li><strong>Single Member Structure: </strong>An OPC can only have one member at any given time. This inherently limits its scalability, as additional members cannot join to share responsibilities or bring in new expertise.</li>
                <li><strong>Limited Capital Raising:</strong>Unlike larger business structures, an OPC cannot add more shareholders to raise additional capital. This restriction makes it challenging to finance expansion plans that require significant investment.</li>
                <li><strong>Growth Constraints: </strong>With the business's growth, an OPC cannot accommodate more members, which can hinder its ability to expand beyond a certain point. This makes it ideal for entrepreneurs who prefer maintaining control without the complexities of a larger business framework.</li>
                </Ul>
                <p>Thus, while an OPC provides a streamlined and manageable structure for small businesses, conversion to a private limited company becomes a practical option as the business surpasses the small-scale operation threshold.</p>
            </div> */}
        </div>
      </Container>
    </Section>
  );
  
//   );
};

export default EligibilityCriteria;
