import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(239, 239, 239);
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  color: #ed740a;
  margin-bottom: 40px;
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StepCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 25px;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ed740a;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const StepTitle = styled.h4`
  font-size: 1.1rem;
  color: #002145;
  margin-bottom: 10px;
`;

const StepDesc = styled.p`
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 1.1rem;
  color: #333;

  span {
    color: #ed740a;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const steps = [
  {
    title: "Application Filing",
    desc: "Filing online FSSAI food license application through Form A or Form B via the FoSCoS portal or submitting Form A or Form B to the Food and Safety Department.",
  },
  {
    title: "Application Submission",
    desc: "Ensure that the application submitted has the required documents attached.",
  },
  {
    title: "Verification Process",
    desc: "Upon submission, the application undergoes a rigorous verification process, determining its approval or rejection. In case of rejection, applicants are duly informed by the authorities.",
  },
  {
    title: "Inspection",
    desc: "As part of the verification process, a designated FSSAI official conducts a comprehensive inspection of the food premises to ensure compliance with food safety standards.",
  },
  {
    title: "License Issuance",
    desc: "Post verification issuance of FSSAI registration certificate and registration number.",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const FSSAILicenseRegistration = () => {
  return (
    <Section>
      <Container>
        <Title>How to Apply for FSSAI Registration Online?</Title>
        <StepsWrapper>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariant}
            >
              <StepNumber>{index + 1}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDesc>{step.desc}</StepDesc>
            </StepCard>
          ))}
        </StepsWrapper>

        <CTA>
          Tired of the complex process?{" "}
          <span onClick={() => window.scrollTo(0, 0)}>
            Talk to FilingLab Consultants
          </span>{" "}
          and enjoy worry-free registration!
        </CTA>
      </Container>
    </Section>
  );
};

export default FSSAILicenseRegistration;
