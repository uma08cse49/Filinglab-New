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
      { label: "Company Registration",url: "/company-registration" },
      { label: "LLP Registration", url: "/LLPRegistration" },
      { label: "Public Limited Company Registration", url: "/public-limited-company-registration" },
      { label: "One Person Company Registration", url: "/one-person-company-registration" },
      { label: "Partnership Firm Registration",url: "/partnership-firm-registration" },
      { label: "Sole Proprietorship Registration", url: "/sole-proprietorship-registration" },
      { label: "Nidhi Company Registration", url: "/nidhi-company-registration" },
      { label: "Producer Company Registration",url: "/producer-company-registration" },
      { label: "Sole Proprietorship to Pvt. Ltd. Company", url: "/sole-proprietorship-to-pvt-ltd" },
      { label: "Conversion of Pvt. Ltd. to Public Limited",url: "/pvt-ltd-to-public-limited" },
      { label: "Indian Subsidiary Company Registration",url: "/indian-subsidiary-registration" },
      { label: "Conversion of LLP to Private Company", url: "/llp-to-private-company" },
      { label: "Partnership Firm into Pvt. Ltd. Company",url: "/partnership-firm-to-pvt-ltd" },
      { label: "Carbon Black Manufacturing",url: "/carbon-black-manufacturing" },
      { label: "Green Hydrogen Plant", url: "/green-hydrogen-plant" },
      { label: "Green Ammonia Plant", url: "/green-ammonia-plant" },
      { label: "Synthetic Rubber Business", url: "/synthetic-rubber-business" },
      { label: "Paper and Paperboard Packaging Industry",url: "/paper-packaging-industry" },
      { label: "Fermentation Industry",url: "/fermentation-industry" },
      { label: "Renewable energy business", url: "/renewable-energy-business" }
  ]

  const locationBasedServices = [
  "Public Limited Company Registration",
 "Green Ammonia Plant",
  "Partnership Firm into Pvt. Ltd. Company",
  "Indian Subsidiary Company Registration",
  "Synthetic Rubber Business",
  "Conversion of Pvt. Ltd. to Public Limited",
  "Nidhi Company Registration",
  "Sole Proprietorship Registration",
  "Producer Company Registration",
  "Clinical Establishment Registration",
  "Renewable energy business",
  "Partnership Firm Registration",
  "Company Registration Customised by States and Cities",
  "Private Limited Company Registration in Mumbai",
  "Private Limited Company Registration in Manipur",
  "Private Limited Company Registration in Karnataka",
  "Private Limited Company Registration in Ahmedabad",
  "Private Limited Company Registration in Maharashtra",
  "Private Limited Company Registration in Odisha",
  "Private Limited Company Registration in Nagpur",
  "Private Limited Company Registration in Chhattisgarh",
  "Private Limited Company Registration in Surat",
  "Private Limited Company Registration in Uttarakhand",
  "Private Limited Company Registration in Goa",
  "Private Limited Company Registration in Vishakhapatnam",
  "Company Registration in Dehradun",
  "Company Registration in Faridabad",
  "Private Limited Company Registration in Jammu and Kashmir",
  "Company Registration in Amritsar",
  "Private Limited Company Registration in Gurugram",
  "Private Limited Company Registration in Nagaland",
  "Private Limited Company Registration in Meghalaya",
  "Company Name Approval",
  "Private Limited Company Registration in West Bengal",
  "Private Limited Company Registration in Rajasthan",
  "Private Limited Company Registration in Jaipur",
  "Company Registration in Bangalore",
  "Private Limited Company Registration in Sikkim",
  "Private Limited Company Registration in Tripura",
  "Company Registration in Noida",
  "Private Limited Company Registration in Hyderabad",
  "Company Registration in Shimla",
  "Private Limited Company Registration in Pune",
  "Private Limited Company Registration in Mizoram",
  "Private Limited Company Registration in Himachal Pradesh",
  "Private Limited Company Registration in Jharkhand",
  "Private Limited Company Registration in Uttar Pradesh",
  "Company Registration in Kurukshetra",
  "Company Registration in Panchkula",
  "Company Registration in Jaipur",
  "Company Registration in Ambala",
  "Private Limited Company Registration in Kolkata",
  "Private Limited Company Registration in Madhya Pradesh",
  "Private Limited Company Registration in Andhra Pradesh",
  "Company Registration in Mohali",
  "Private Limited Company Registration in Telangana",
  "Private Limited Company Registration in Assam",
  "Company Registration in Nashik",
  "Private Limited Company Registration in Arunachal Pradesh",
  "Company Registration in Ludhiana",
  "Private limited Company Registration in Haryana",
  "Private limited Company Registration in Gujarat",
  "Company Registration in Chandigarh",
  "Private Limited Company Registration in Kerala",
  "Private Limited Company Registration in Bihar",
  "Private Limited Company Registration in Chennai",
  "Private Limited Company Registration in Punjab",
  "Private Limited Company Registration in Tamil Nadu",
  "Private Limited Company Registration in Delhi",
  ]


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
          <SubTitle>Company Registration by State/City</SubTitle>
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
