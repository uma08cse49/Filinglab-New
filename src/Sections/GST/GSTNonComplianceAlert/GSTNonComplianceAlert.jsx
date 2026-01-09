import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(239, 239, 239);
  padding: 80px 20px;
  margin-top:30px
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #ed740a;
  margin-bottom: 40px;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Block = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  background: rgba(255, 255, 255);
  border-left: 6px solid #ed740a;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(12px);
  position: relative;

  &::before {
    content: "⚠️";
    position: absolute;
    left: -26px;
    top: 25px;
    background: #ed740a;
    color: #fff;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 6px 15px rgba(237, 116, 10, 0.3);
  }

  h3 {
    color: #002145;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  ul {
    padding-left: 20px;
    margin: 0;

    li {
      list-style: disc;
      margin-bottom: 12px;
      color: #333;
      line-height: 1.6;
    }
  }
`;

const GSTNonComplianceAlert = () => {
  return (
    <Section>
      <Container>
        <Heading>Consequences for Non-Compliance with GST Registration</Heading>

        <FlexWrap>
          <Block
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Penalty for Violation in Case of GST Registration</h3>
            <ul>
              <li>10% penalty on pending tax for accidental underpayment or non-payment.</li>
              <li>100% penalty for intentional tax evasion.</li>
              <li>Minimum penalty of ₹10,000 for late payments.</li>
              <li>Interest is added on outstanding GST liabilities.</li>
              <li>Possibility of suspension or cancellation of your GST registration certificate.</li>
            </ul>
          </Block>

          <Block
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Consequences for Not Registering GST</h3>
            <ul>
              <li>Penalty of ₹10,000 or the amount of tax evaded — whichever is greater (as per CGST Section 122).</li>
              <li>In some cases, penalty can go up to ₹2 lakhs.</li>
              <li>Non-registration can result in legal notices and business disruption.</li>
            </ul>
          </Block>
        </FlexWrap>
      </Container>
    </Section>
  );
};

export default GSTNonComplianceAlert;
