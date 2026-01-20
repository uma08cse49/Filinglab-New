import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CompanyRegistrationFilingProcedure from "./CompanyRegistrationFilingProcedure"

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
    title: "DSC and DIN",
    desc: "The first steps for online company registration are getting the Digital Signature Certificate (DSC) and Director Identification Number (DIN). The DSC acts as proof of identity for the directors and requires them to sign digital forms throughout the registration process.",
  },
  {
    title: "Company Name Reservation",
    desc: "Once the DSC is obtained, the next step involves reserving a unique name for the company. As per Rule 8 of the Company Incorporation Rules, the selected business name should not be identical to or sound similar to an existing business name. It is important to do a thorough name check before choosing a name for your business.\n 1.Company details\n 2. Member and subscriber details \n3. Apply for a Director Identification Number (DIN) \n4 .Apply for PAN and TAN \n5. Declaration by directors and subscribers",        
  },
  {
    title: "Filling SPICe Form (INC-32)",
    desc: "Once the name approval is granted, the next step involves filling the SPICe+ form on the official Ministry of Corporate Affairs portal. The details should be filled in as per the format given, including:",
  },
  {
    title: "Filing MoA and AoA",
    desc: "SPICe e-MoA (INC-33) and e-AoA (INC-34) forms are to be drafted for the online company registration process. The Memorandum of Association (MoA), defined under section 2(56), outlines the company's goals and objectives. The Articles of Association (AoA), defined under section 2(5) of the Companies Act, 2013, outline the organization's management structure and internal working framework.",
  },
  {
    title: "Certificate of Incorporation",
    desc: "Once MCA grants approval for company registration, the department issues the incorporation certificate, along with the Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN).",
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

const CompanyRegistrationProcess = () => {
  return (
    <Section>
      <Container>
        <Title>Step-by-Step Private Limited Company Registration Process</Title>
        <p>The step-by-step guide for the private limited company registration process in India includes the following steps:</p>
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

      <CompanyRegistrationFilingProcedure/>
    </Section>
  );
};

export default CompanyRegistrationProcess;


