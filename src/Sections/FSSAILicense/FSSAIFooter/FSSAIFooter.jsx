import React from "react";
import styled from "styled-components";
// import logo from "../../../assets/images/logo-white.png"; // Replace with your logo
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #00204b;
  color: #ffffff;
  padding: 60px 20px 30px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
`;

const FooterColumn = styled.div``;

const Logo = styled.img`
  width: 160px;
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #ffffff;

  &:hover {
      text-decoration: underline;
      color: #f9b233;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #f9b233;
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  svg {
    color: #f9b233;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-top: 40px;
  border-top: 1px solid #1a335d;
  padding-top: 20px;
`;

const FSSAIFooter = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          {/* <Logo src={logo} alt="FilingLab" /> */}
          <p>
            FilingLab simplifies your business compliance with expert support in FSSAI, GST, MSME, and more.
          </p>
        </FooterColumn>

        <FooterColumn>
          <Title>Quick Links</Title>
          <LinkList>
            <LinkItem><a href="/">Home</a></LinkItem>
            <LinkItem><a href="/about">About Us</a></LinkItem>
            <LinkItem><a href="/contact">Contact</a></LinkItem>
            <LinkItem><a href="/terms">Terms & Conditions</a></LinkItem>
          </LinkList>
        </FooterColumn>

        <FooterColumn>
          <Title>Our Services</Title>
          <LinkList>
            <LinkItem><a href="/fssai-license">FSSAI Registration</a></LinkItem>
            <LinkItem><a href="/gst">GST Filing</a></LinkItem>
            <LinkItem><a href="/trademark">Trademark Registration</a></LinkItem>
            <LinkItem><a href="/startup">Startup India Support</a></LinkItem>
          </LinkList>
        </FooterColumn>

        <FooterColumn>
          <Title>Contact</Title>
          <ContactInfo>
            <div><FaPhoneAlt /> +91 9876543210</div>
            <div><FaEnvelope /> support@filinglab.in</div>
            <div><FaMapMarkerAlt /> TamilNadu, India</div>
          </ContactInfo>
        </FooterColumn>
      </FooterContainer>

      <FooterBottom>
        © {new Date().getFullYear()} FilingLab. All rights reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default FSSAIFooter;
