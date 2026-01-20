import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background:rgb(240, 240, 240);
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;

const Th = styled.th`
  background: #002145;
  color: white;
  padding: 16px;
  font-size: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 16px;
  font-size: 0.95rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
`;

const Tr = styled.tr`
  &:hover {
    background: #f3f6fb;
  }
`;

const FSSAILicenseVsRegistration = () => {
  return (
    <Section>
      <Container>
        <Title>Difference between FSSAI License and Registration</Title>
        <Table>
          <thead>
            <tr>
              <Th>Aspects</Th>
              <Th>FSSAI License</Th>
              <Th>FSSAI Registration</Th>
            </tr>
          </thead>
          <tbody>
            <Tr>
              <Td>Scale</Td>
              <Td>Mandatory for medium to large scale businesses</Td>
              <Td>Smaller scale or petty food businesses</Td>
            </Tr>
            <Tr>
              <Td>Validity</Td>
              <Td>License is valid lasts between 1-5 years</Td>
              <Td>Up to 1-5 years</Td>
            </Tr>
            <Tr>
              <Td>Annual Turnover Ceiling</Td>
              <Td>State License - Turnover is more than INR 12 lakhs & less than INR 20 crore
                  Central License – Turnover is more than INR 20 crore
              </Td>
              <Td>Annual turnover is not more than INR 12 lakhs</Td>
            </Tr>
            <Tr>
              <Td>Application Form</Td>
              <Td>Form – B is mandatory</Td>
              <Td>Form – A is mandatory</Td>
            </Tr>
            <Tr>
              <Td>Compliance</Td>
              <Td>Strict FSSAI compliance requirements</Td>
              <Td>Minimal FSSAI compliance requirement</Td>
            </Tr>
            <Tr>
              <Td>Approval Authority</Td>
              <Td>Central/State government</Td>
              <Td>Local municipal authorities</Td>
            </Tr>
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default FSSAILicenseVsRegistration;
