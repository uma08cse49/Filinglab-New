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
    { label: "FSSAI Product Approval", url: "/FSSAIproductapproval" },
    { label: "Eating House License", url: "/FSSAIEatingHouseLicense" },
    { label: "FSSAI License Renewal", url: "/FSSAILicenseRenewal" },
    { label: "FSSAI State License", url: "/fssaistatelicense" },
    { label: "FPO Mark Certification", url: "/fpo-mark-certification" },
    { label: "Central FSSAI License", url: "/fssaicentrallicense" },
    { label: "FSSAI Annual Return", url: "/fssaiannualreturn" },
    { label: "Food Recycling License", url: "/recycling-license" },
  ];

  const locationBasedServices = [
    "Online FSSAI Registration in Gujarat",
    "Online FSSAI Registration in Uttarakhand",
    "Online FSSAI Registration in Nagpur",
    "Online FSSAI Registration in Telangana",
    "FSSAI Registration in Karnataka",
    "Online FSSAI Registration in Nagaland",
    "Online FSSAI Registration in Bihar",
    "Online FSSAI Registration in Gurugram",
    "FSSAI Registration in Jaipur",
    "Online FSSAI Registration in Maharashtra",
    "Online FSSAI Registration in Tamil Nadu",
    "Online FSSAI Registration in Pune",
    "FSSAI Registration in Indore",
    "Online FSSAI Registration in Sikkim",
    "Online FSSAI Registration in Tripura",
    "FSSAI Registration in Patna",
    "FSSAI Registration in Jammu and Kashmir",
    "FSSAI Registration in Bhubaneswar",
    "FSSAI Registration in Haryana",
    "Online FSSAI Registration in Surat",
    "Online FSSAI Registration in Himachal Pradesh",
    "Online FSSAI Registration in Mizoram",
    "Online FSSAI Registration in Mumbai",
    "Online FSSAI Registration in Arunachal Pradesh",
    "FSSAI Registration in Ghaziabad",
    "FSSAI Registration in Chennai",
    "FSSAI Registration in Bhopal",
    "Online FSSAI Registration in Visakhapatnam",
    "FSSAI Registration in Kanpur",
    "FSSAI Registration in Jharkhand",
    "FSSAI Registration in Delhi",
    "Online FSSAI Registration in Manipur",
    "Online FSSAI Registration in Uttar Pradesh",
    "Online FSSAI Registration in Meghalaya",
    "Online FSSAI Registration in Lucknow",
    "FSSAI Registration in Faridabad",
    "Online FSSAI Registration in Kerala",
    "FSSAI Registration in Ahmadabad",
    "Online FSSAI Registration in Rajasthan",
    "Online FSSAI Registration in Assam",
    "Online FSSAI Registration in Kolkata",
    "Online FSSAI Registration in Odisha",
    "Online FSSAI Registration in Madhya Pradesh",
    "FSSAI Registration in Bangalore",
    "FSSAI Registration in Hyderabad",
    "Online FSSAI Registration in West Bengal",
    "Online FSSAI Registration in Punjab",
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
          <SubTitle>FSSAI Registration by State/City</SubTitle>
          <LinkList>
            {locationBasedServices.map((text, idx) => {
              const slug = text
                .replace(/Online\sFSSAI\sRegistration\s(in\s)?/i, "")
                .replace(/FSSAI\sRegistration\s(in\s)?/i, "")
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <ListItem key={idx}>
                  <Link to={`/fssailicenseregistration/${slug}`}>{text}</Link>
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
