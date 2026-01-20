import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const Section = styled.section`
  background: #f9fbff;
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 2.2rem;
  color: #ed740a;
  font-weight: 800;
  margin-bottom: 50px;
`;

const SectionGroup = styled.div`
  margin-bottom: 90px;
  position: relative;
`;

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
`;

const ListItem = styled.li`
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    font-size: 1rem;
    font-weight: 500;
    color: #002145;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      background: #002145;
      color: #fff;
      transform: translateY(-5px);
    }
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: rgb(239, 239, 239);
`;

const OtherServices = () => {
  const genericServices = [
    { label: "Income Tax Return Filing", url: "/tax-returning" },
    { label: "GST Return Filing", url: "/gstreturning" },
    { label: "TDS Return Filing", url: "/tds-return-filing" },
    { label: "Professional Tax Registration", url: "/tax-registration" },
    
    
  ];

  const locationBasedServices = [
    "Online GST Registration in Gujarat",
    "Online GST Registration in Uttarakhand",
    "Online GST Registration in Nagpur",
    "Online GST Registration in Telangana",
    "GST Registration in Karnataka",
    "Online GST Registration in Nagaland",
    "Online GST Registration in Bihar",
    "Online GST Registration in Gurugram",
    "GST Registration in Jaipur",
    "Online GST Registration in Maharashtra",
    "Online GST Registration in Tamil Nadu",
    "Online GST Registration in Pune",
    "GST Registration in Indore",
    "Online GST Registration in Sikkim",
    "Online GST Registration in Tripura",
    "GST Registration in Patna",
    "GST Registration in Jammu and Kashmir",
    "GST Registration in Bhubaneswar",
    "GST Registration in Haryana",
    "Online GST Registration in Surat",
    "Online GST Registration in Himachal Pradesh",
    "Online GST Registration in Mizoram",
    "Online GST Registration in Mumbai",
    "Online GST Registration in Arunachal Pradesh",
    "GST Registration in Ghaziabad",
    "GST Registration in Chennai",
    "GST Registration in Bhopal",
    "Online GST Registration in Visakhapatnam",
    "GST Registration in Kanpur",
    "GST Registration in Jharkhand",
    "GST Registration in Delhi",
    "Online GST Registration in Manipur",
    "Online GST Registration in Uttar Pradesh",
    "Online GST Registration in Meghalaya",
    "Online GST Registration in Lucknow",
    "GST Registration in Faridabad",
    "Online GST Registration in Kerala",
    "GST Registration in Ahmadabad",
    "Online GST Registration in Rajasthan",
    "Online GST Registration in Assam",
    "Online GST Registration in Kolkata",
    "Online GST Registration in Odisha",
    "Online GST Registration in Madhya Pradesh",
    "GST Registration in Bangalore",
    "GST Registration in Hyderabad",
    "Online GST Registration in West Bengal",
    "Online GST Registration in Punjab",
  ];

  return (
    <Section>
      <BackgroundShapes />
      <Container>
        <SectionGroup>
          <SubTitle>Other Similar Services</SubTitle>
          <LinkList>
            {genericServices.map((item, idx) => (
              <ListItem key={idx}>
                <Link to={item.url}>{item.label}</Link>
              </ListItem>
            ))}
          </LinkList>
        </SectionGroup>

        <hr
          className="mx-auto fw-bold horizontalLine"
          style={{
            margin: "1rem",
            width: "55%",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        />

        <SectionGroup>
          <SubTitle>GST Registration by State/City</SubTitle>
          <LinkList>
            {locationBasedServices.map((text, idx) => {
              const slug = text
                .replace(/Online\sGST\sRegistration\s(in\s)?/i, "")
                .replace(/GST\sRegistration\s(in\s)?/i, "")
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <ListItem key={idx}>
                  <Link to={`/gstregistration/${slug}`}>{text}</Link>
                </ListItem>
              );
            })}
          </LinkList>
        </SectionGroup>
      </Container>
    </Section>
  );
};

export default OtherServices;
