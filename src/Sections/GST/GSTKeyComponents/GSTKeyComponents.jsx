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
  margin-bottom: 40px;
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
    title: "Central Goods and Services Tax (CGST)",
    desc: "CGST is a tax imposed by the Central Government on the supply of goods and services within a specified period.",
  },
  {
    title: "State Goods and Services Tax (SGST)",
    desc: "SGST is a tax imposed by the State Government on the supply of goods and services within the state’s jurisdiction.",
  },
  {
    title: "Integrated Goods and Services Tax (IGST)",
    desc: "IGST is a tax imposed by the Central Government on the supply of goods and services across different states or with a union territory.",
  },
];

const GSTKeyComponents = () => {
  return (
    <Section>
      <Container>
        <Heading>Key Components of GST Registration</Heading>
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

export default GSTKeyComponents;
