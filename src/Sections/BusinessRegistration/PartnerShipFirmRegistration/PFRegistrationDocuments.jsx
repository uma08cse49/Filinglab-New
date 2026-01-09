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
  "An Application Form 1.",
  "A notarized copy of the partnership deed.",
  "ID proof, including Aadhaar Card, Driving License, or Voter ID Card of all partners.",
  "PAN card for all members.",
  "Address proof, such as utility and electricity bills of all partners.",
  "A registered business address, namely lease or virtual agreement.",
  "No objection certificate (NOC) from the owner if the office space is a rental.",
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

const PFRegistrationDocuments = () => {
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
        <Heading>Documents Required for Partnership Firm Registration Online</Heading>
        <p>The list of documents required for partnership firm registration online in India is as follows:</p>
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

export default PFRegistrationDocuments;
