import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(237, 237, 237);
  padding: 80px 20px;
  margin: 30px 70px;
  border-radius:30px
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #ed740a;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled(motion.div)`
  flex: 1;
  min-width: 280px;
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  border-top: 4px solid #ed740a;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    


  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #002145;
  }

  p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.6;
  }
`;

const data = [
  {
    title: "FSSAI Registration",
    desc: "FSSAI Registration is mandatory for FBOs with revenue generation or turnover of less than INR 12 Lakh annually. Petty FBOs must also obtain FSSAI registration to operate legally. Any business seeking this registration must complete Form A to complete the formalities.",
  },
  {
    title: "State License",
    desc: "FSSAI State License is mandatory for all FBOs with revenue generation or turnover of over INR 12 Lakh but less than INR 20 Crore per annum. FBOs like small to medium-sized manufacturing units, storage, transporters, retailers, marketers, and distributors under this category must fill out Form B to complete the registration formalities.",
  },
  {
    title: "Central License",
    desc: "FSSAI Central License is mandatory for all FBOs with annual revenues of over INR 20 Crore. Businesses classified as 100% Export-Oriented Units, importers, airports, food business operators in central government agencies, large manufacturers, seaports, etc., must obtain this license by filling out Form B to complete the registration formalities.",
  },
];

const FSSAILicenseCategories = () => {
  return (
    <Section>
      <Container>
        <Heading>Different categories of FSSAI Licenses</Heading>
            <p>The Food Safety and Standards (Licensing & Registration) Regulations, 2011, licenses and registrations have divided Food Business Operators (FBOs) into three categories based on business type, revenue and manufacturing capacity:</p>
        <Grid>
          {data.map((item, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default FSSAILicenseCategories;
