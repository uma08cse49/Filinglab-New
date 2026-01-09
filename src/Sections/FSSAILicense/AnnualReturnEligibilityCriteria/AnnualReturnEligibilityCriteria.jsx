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

const AnnualReturnEligibilityCriteria = () => {
  return (
    <Section>
      <Container>
        <Heading>Eligibility Criteria for FSSAI License in India</Heading>

            <p>According to the Ministry of Health and Family Welfare, Government of India, eligibility criteria to apply for an FSSAI license include the following:</p>

        <ListContainer>
          {/* ✅ Main Checklist */}
          <ListBox
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <SubHeading>Checklist for applicants to apply for FSSAI license:</SubHeading>
            <Ul>
              <li>Annual Turnover: State License – INR 12 lakhs to INR 20 crore, Central License – Above INR 20 crore.</li>
              <li>Production Capacity: State License – Up to 2MT/day (food), 50,000 litres/day (dairy), Central License – Over 2MT/day (food), 50,000 litres/day (dairy).</li>
              <li>Business Type: State License – Single state operations, Central License – E-commerce, import-export, multi-state operations</li>
              <li>Area of Operation: State License – Within a single state, Central License – For multiple states</li>
              <li>Storage Capacity: State License – Up to 50,000 metric tons, Central License – Above 50,000 metric tons</li>
            </Ul>
          </ListBox>

          {/* ✅ Other Entities */}
          <ListBox
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SubHeading>Checklist - Who all needs an FSSAI License?</SubHeading>
            <Ul>
              <li>Food manufacturers, processors, importers, exporters, distributors, wholesalers</li>
              <li>Food retailers, including grocery stores and supermarkets</li>
              <li>Food caterers, restaurants, clubs, dhabas, hawkers, marketers</li>
              <li>Food transporters & logistics providers</li>
              <li>Food packaging & labelling units</li>
              <li>Food storage facilities, service providers and online food businesses</li>
            </Ul>
          </ListBox>
        </ListContainer>
      </Container>
    </Section>
  );
};

export default AnnualReturnEligibilityCriteria;
