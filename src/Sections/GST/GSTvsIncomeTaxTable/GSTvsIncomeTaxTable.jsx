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

const GSTvsIncomeTaxTable = () => {
  return (
    <Section>
      <Container>
        <Title>Difference Between GST and Income Tax</Title>
        <Table>
          <thead>
            <tr>
              <Th>S. No.</Th>
              <Th>GST (Goods and Services Tax)</Th>
              <Th>Income Tax</Th>
            </tr>
          </thead>
          <tbody>
            <Tr>
              <Td>1.</Td>
              <Td>It is an indirect tax.</Td>
              <Td>It is a direct tax.</Td>
            </Tr>
            <Tr>
              <Td>2.</Td>
              <Td>It is imposed on the consumption of goods and services.</Td>
              <Td>It is imposed on income from annual salary, capital gains, and house property, etc.</Td>
            </Tr>
            <Tr>
              <Td>3.</Td>
              <Td>It must be filed monthly, quarterly, and even annually.</Td>
              <Td>It must be filed annually, once a year.</Td>
            </Tr>
            <Tr>
              <Td>4.</Td>
              <Td>Levied and collected by both the Central and State governments.</Td>
              <Td>Levied and collected only by the Central government.</Td>
            </Tr>
            <Tr>
              <Td>5.</Td>
              <Td>Mandatory registration required for businesses exceeding an annual turnover above Rs. 40 lakhs.</Td>
              <Td>Anyone with annual income above Rs. 3 lakhs must make payment of income tax returns.</Td>
            </Tr>
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default GSTvsIncomeTaxTable;
