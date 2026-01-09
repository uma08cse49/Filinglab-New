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
        <Heading>Eligibility Criteria for New GST Registration</Heading>

        <ListContainer>
          {/* ✅ Main Checklist */}
          <ListBox
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <SubHeading>Eligibility Checklist for Filing GST Registration</SubHeading>
            <Ul>
              <li>Businesses with annual turnover above ₹40 Lakhs (₹20 Lakhs in special category states).</li>
              <li>Service providers with annual turnover above ₹20 Lakhs (₹10 Lakhs in special category states).</li>
              <li>Exempt businesses are not required to register under GST.</li>
              <li>Entities previously registered under Excise, VAT, Service Tax, etc., must migrate to GST.</li>
              <li>Non-resident taxable persons involved in Indian transactions need GST registration.</li>
              <li>Overseas service providers offering digital services to Indians must register under GST.</li>
            </Ul>
          </ListBox>

          {/* ✅ Other Entities */}
          <ListBox
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SubHeading>Other Entities Eligible to Apply for GST Registration</SubHeading>
            <Ul>
              <li>Individuals or businesses supplying goods across states.</li>
              <li>Entities liable to pay tax under reverse charge mechanism.</li>
              <li>Input service distributors and agents.</li>
              <li>E-commerce platform operators and aggregators.</li>
              <li>Any individual engaged in taxable supply of goods/services.</li>
              <li>Authorized representatives supplying on behalf of principal.</li>
              <li>Suppliers through e-commerce aggregators.</li>
            </Ul>
          </ListBox>
        </ListContainer>
      </Container>
    </Section>
  );
};

export default EligibilityCriteria;
