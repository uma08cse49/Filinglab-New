import React from "react";
import styled from "styled-components";
import complianceIcon from "../../../assets/images/post-compliance.png"; // Use your icon

const Section = styled.section`
  padding: 60px 20px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 40px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 24px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

const CardIcon = styled.img`
  width: 48px;
  height: 48px;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

const CardWrapper = styled.div`
  perspective: 1000px; /* Enables 3D effect */
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${CardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CardFront = styled(CardFace)`
  z-index: 2;
`;

const CardBack = styled(CardFace)`
  background: #00204b;
  color: white;
  transform: rotateY(180deg);
  justify-content: center;
  align-items: center;
`;


const PostRegistrationCompliance = () => {
  const items = [
    {
      title: "Annual General Meeting (AGM)",
      description:"It is essential for a newly registered company to conduct its first AGM...",
      backText: "It is essential for a newly registered company to conduct its first AGM within six months to discuss company performance, approve financial statements and manage shareholder queries.",
    },
    {
      title: "Financial Statements",
      description:"It is important to prepare and file audited financial statements, including...",
      backText: "It is important to prepare and file audited financial statements, including profit and loss account, and balance sheet with the Registrar of Companies (ROC).",
    },
    {
      title: "Annual Return Filing",
      description:"The ROC requires the filing of an annual return (Form MGT-7) outlining...",
      backText: "The ROC requires the filing of an annual return (Form MGT-7) outlining shareholder and director details and the company’s financial status.",
    },
    {
        title: "Income Tax Filing",
        description:"The company must file income tax returns with the Income Tax...",
        backText: "The company must file income tax returns with the Income Tax department and pay its due taxes.",
    },
    {
        title: "Compliance with Regulatory Changes",
        description:"The company must stay updated about any changes in corporate laws ...",
        backText: "The company must stay updated about any changes in corporate laws to ensure it complies with all regulations and standards.",
    },
    {
        title: "Maintaining Statutory Registers",
        description:"It must update statutory registers such as the register of members,...",
        backText: "It must update statutory registers such as the register of members, directors and charges.",
    },
    {
        title: "Other Periodic Filings",
        description:"Ensuring timely filing of documents with the Registrar of Companies, such..",
        backText: "Ensuring timely filing of documents with the Registrar of Companies, such as changes in directors or capital structure, using forms like DIR-12 and SH-7.",
    },

      
  ];

  return (
    <Section id="post-registration-compliance">
      <Title>Post-Registration Compliance for Company Registration</Title>
      <Description>
      Post-registration compliance for a private limited company includes various the adherence of legal and regulatory requirements including:
      </Description>

      {/* <CardGrid>
        {items.map((item, index) => (
          <Card key={index}>
            <CardIcon src={complianceIcon} alt="Compliance Icon" />
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.description}</CardText>
          </Card>
        ))}
      </CardGrid> */}
       <CardGrid>
       {items.map((item, index) => (
            <CardWrapper key={index}>
            <CardInner>
                <CardFront>
                <CardIcon src={complianceIcon} alt="Icon" />
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
                </CardFront>
                <CardBack>
                <h4>{item.title}</h4>
                <p>{item.backText}</p>
                </CardBack>
            </CardInner>
            </CardWrapper>
        ))}
      </CardGrid>

    </Section>
  );
};

export default PostRegistrationCompliance;
