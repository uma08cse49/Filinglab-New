import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(239, 239, 239);
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
  margin-top:30px
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #ed740a;
  font-weight: 800;
  text-align: center;
  margin-bottom: 70px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: space-between;
  align-items: flex-start;
`;

const StepBoxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 650px;
`;

const StepBox = styled(motion.div)`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
  width: 100%;
  text-align: left;
  border-left: 5px solid #002145;

  h4 {
    font-size: 1.4rem;
    color: #002145;
    margin-bottom: 12px;
    font-weight: 700;
  }

  ul {
    padding-left: 20px;
  }

  li {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #ed740a;
`;

const GSTINOverview = () => {
  return (
    <Section>
      <Container>
        <Title>GSTIN and its Significance for GST Registration</Title>
        <ContentWrapper>

        <ImageWrapper>
            <StyledImage src="https://FilingLab.io/img/img3.webp" alt="GSTIN Concept" />
          </ImageWrapper>
          <StepBoxGroup>
            <StepBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>Features of GSTIN</h4>
              <ul>
                <li><Highlight>GSTIN</Highlight> is a unique 15-digit alphanumeric code.</li>
                <li>Issued to every GST-registered business or individual in India.</li>
                <li>Acts as a primary identifier for GST-related compliance.</li>
                <li>Mandatory for smooth operations after registration.</li>
              </ul>
            </StepBox>

            <StepBox
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Structure of GSTIN</h4>
              <ul>
                <li><Highlight>1–2 digits:</Highlight> State code (e.g., 22 for Chhattisgarh)</li>
                <li><Highlight>3–12 digits:</Highlight> PAN of the business (e.g., ABCDE1234F)</li>
                <li><Highlight>13th digit:</Highlight> Entity code (e.g., 1)</li>
                <li><Highlight>14th digit:</Highlight> Reserved (e.g., Z)</li>
                <li><Highlight>15th digit:</Highlight> Check code (e.g., 5)</li>
              </ul>
            </StepBox>
          </StepBoxGroup>

          
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default GSTINOverview;
