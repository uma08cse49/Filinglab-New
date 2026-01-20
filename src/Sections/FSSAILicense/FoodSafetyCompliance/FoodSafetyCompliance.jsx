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

const FoodSafetyCompliance = () => {
  return (
    <Section>
      <Container>
        <Heading>Food Safety Compliance System (FoSCoS)</Heading>
            <Description>
            The Food Safety Compliance System (FoSCoS) is a new digital platform that simplifies food safety management and offers an improved user experience, real-time updates, and enhanced efficiency compared to the outdated FLRS.
            </Description>
        <FlexWrap>
          <Block
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Important Points</h3>
            <ul>
              <li>FoSCoS is a tech-enhanced version of the outdated Food Licensing and Registration System (FLRS).</li>
              <li>FoSCoS is user-friendly, making the registration process easier for applicants.</li>
              <li>This upgraded version fixes loopholes from FLRS and better meets current digital needs.</li>
              <li>FoSCoS simplifies the process for users by supporting online applications and renewals.</li>
              <li>It offers the latest information on compliance status and inspections. </li>
            </ul>
          </Block>

          <Block
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Other Significant Points</h3>
            <ul>
              <li>This new system offers a better intuitive interface for food businesses and regulators.</li>
              <li>FoSCoS sends automatic alerts for essential tasks and deadlines.</li>
              <li>It combines different data sources for a more transparent view of food safety.</li>
              <li>Users can securely store and manage their necessary documents within this system.</li>
              <li>FoSCoS encloses tools and resources to help businesses comply with food safety regulations.</li>
            </ul>
          </Block>
        </FlexWrap>
      </Container>
    </Section>
  );
};

export default FoodSafetyCompliance;
