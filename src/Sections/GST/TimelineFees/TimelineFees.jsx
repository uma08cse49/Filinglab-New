import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(240, 240, 240);
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
  margin-top:30px
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: #002145;
  font-weight: 800;
  margin-bottom: 40px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  text-align: left;
`;

const InfoCard = styled(motion.div)`
  background:  #ed740a;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border-left: 5px solid #002145;
  
  h4 {
    font-size: 1.2rem;
    color:rgb(255, 255, 255);
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color:rgb(236, 236, 236);
  }
`;

const TimelineFees = () => {
  return (
    <Section>
      <Container>
        <Title>Timeline and Fees for GST Registration</Title>
        <InfoGrid>
          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Why It's Mandatory</h4>
            <p>
              GST registration is required for legal, regulatory, and operational transparency across businesses in India.
            </p>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Approval Timeline</h4>
            <p>
              It takes about <strong>7–10 working days</strong> to get approved. Full process may span <strong>up to 30 days</strong>.
            </p>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Cost & Charges</h4>
            <p>
              Professional service fees vary depending on state and business type.
            </p>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Government Fees</h4>
            <p>
              The government itself <strong>does not charge any direct fee</strong> for issuing GST registration online.
            </p>
          </InfoCard>
        </InfoGrid>
      </Container>
    </Section>
  );
};

export default TimelineFees;
