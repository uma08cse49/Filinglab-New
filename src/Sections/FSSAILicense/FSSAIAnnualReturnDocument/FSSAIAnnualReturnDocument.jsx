import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Documents from "../../../assets/images/docu.png"; 

const Section = styled.section`
  padding: 60px 20px;
  background: #fffefb;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ContentWrapper = styled(motion.div)`
  flex: 1;
  min-width: 360px;
  padding: 30px;
  background:rgb(239, 239, 239);
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #ed740a;
  margin-bottom: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 15px;
    font-size: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    line-height: 1.6;

    &::before {
      content: "📄";
      font-size: 1.2rem;
      color: #ed740a;
      flex-shrink: 0;
    }
  }
`;

const documentList = [
  "FSSAI License Number",
  "Name and address proof of the Licensee",
  "Potable Water Test Report from April to September",
  "Potable Water Test Report from October to March",
  "Capacity/Production Details",
  "Details of Food Safety Audits conducted by FSSAI recognized Auditors",
  "Details of Recalls during the Financial Year",
  "Declaration concerning compliance with the FSSAI Act, 2006"
];

// framer-motion variants for animation
const containerVariant = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FSSAIAnnualReturnDocument = () => {
  return (
    <Section>
      {/* Left: Image */}
      <ImageWrapper>
        <img 
          src={Documents}
          // src="https://FilingLab.io/img/img3.webp"
          alt="Documents for GST" width="1000" height="1000"
        />
      </ImageWrapper>

      {/* Right: Animated List */}
      <ContentWrapper
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Heading>Documents Required for FSSAI Annual Return Filing</Heading>
        <p>The list of documents required for FSSAI annual return filing, which is a tedious and daunting process, is as stated below:</p>
        <Ul>
          {documentList.map((doc, idx) => (
            <motion.li key={idx} variants={itemVariant}>
              {doc}
            </motion.li>
          ))}
        </Ul>
      </ContentWrapper>
    </Section>
  );
};

export default FSSAIAnnualReturnDocument;
