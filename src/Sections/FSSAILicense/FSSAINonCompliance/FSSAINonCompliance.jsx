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

const Description = styled.p`
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
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

const FSSAINonCompliance = () => {
  return (
    <Section>
      <Container>
        <Heading>Violations & Non-Compliance and Penalty & Offences</Heading>
            <Description>
                Violations and non-compliance of FBOs with food safety rules lead to different penalties and legal outcomes.
            </Description>
        <FlexWrap>
          <Block
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Violations and Non-Compliance</h3>
            <ul>
              <li>Operational status is subject to penalties based on the inspection reports.</li>
              <li>Businesses that fail to renew their licenses face automatic cancellation on the due date.</li>
              <li>It is illegal for FBOs to operate with expired licenses as it violates the law.</li>
              <li>FBOs categories - Compliance (C), Non-compliance (NC), Partial compliance (PC), or not applicable (NA).</li>
              <li>Fined for non-compliance and failing to address issues highlighted in the inspection. </li>
              <li>It is mandatory to rectify the non-compliance problems & make changes to avoid penalties.</li>
              <li>FBOs must comply with the FSS Act of 2006 to operate legally.</li>
            </ul>
          </Block>

          <Block
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Penalty and Offences for Violations & Non-Compliance</h3>
            <ul>
              <li>Non-compliance of Food Quality as per FSS Act, 2006 - INR 2 Lakh, Petty manufacturer – INR 25,000</li>
              <li>Sub-Standard food – INR  5 Lakh</li>
              <li>Misbranded Food – INR 3 Lakh.</li>
              <li>Misleading Advertisement or False Description – INR 10 Lakh</li>
              <li>Extraneous matter in food – INR 1 Lakh</li>
              <li>Non-compliance of directions by Food Safety Officer – INR 2 Lakh</li>
              <li>Unhygienic Manufacturing or Processing – INR 1 Lakh</li>
            </ul>
          </Block>
        </FlexWrap>
      </Container>
    </Section>
  );
};

export default FSSAINonCompliance;
