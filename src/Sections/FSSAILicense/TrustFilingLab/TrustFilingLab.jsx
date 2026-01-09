import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(240, 240, 240);
  padding: 100px 20px;
  margin-top:30px
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: #ed740a;
  font-weight: 800;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 60%, #f3f7ff);
  padding: 25px;
  border-radius: 16px;
  border: 2px solid rgba(0, 33, 69);
  text-align: left;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: rgba(237, 116, 10, 0.1);
    border-radius: 50%;
    z-index: 0;
  }

  h4 {
    font-size: 1.2rem;
    color: #002145;
    margin-bottom: 10px;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
`;

const TrustFilingLab = () => {
  const trustPoints = [
    {
      title: "Simplified Registration",
      desc: "We at Filing Lab have processed 4000+ FSSAI registration applications with an easy and seamless approach.",
    },
    {
      title: "High Success Rate",
      desc: "Filing Lab maintains a 99% business success rate for GST registration certificates in India.",
    },
    {
      title: "Simplified Documentation",
      desc: "Our team helps you streamline the documentation process, saving your time and effort.",
    },
    {
      title: "Legal Advice",
      desc: "Filing Lab provides expert legal advice and regular updates to ensure full compliance.",
    },
    {
      title: "End-to-End Solutions",
      desc: "From consultation to registration, Filing Lab handles everything for a worry-free experience.",
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent, affordable, and value-based pricing tailored to startups and SMEs.",
    },
    {
      title: "Reduces Compliance Burden",
      desc: "Our simplified processes reduce your compliance workload by up to 30%.",
    },
    {
      title: "Custom Support Plans",
      desc: "We offer support plans tailored to your business size and compliance frequency.",
    },
    {
      title: "24/7 Customer Support",
      desc: "Filing Lab's support team is always available to resolve queries and compliance concerns promptly.",
    },
  ];

  return (
    <Section>
      <Container>
        <Title>Why Trust Filing Lab for FSSAI Registration?</Title>
        <Grid>
          {trustPoints.map((item, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default TrustFilingLab;
