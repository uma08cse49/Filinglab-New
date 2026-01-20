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
      title: "Annual Returns Submission",
      description:"Compliance with submission of annual returns via Form D1 to FSSAI by the food business operator.",
      backText: "Compliance with submission of annual returns via Form D1 to FSSAI by the end of May 31st each year to ensure meeting regulatory requirements and avoid penalties.",
    },
    {
      title: "Record Keeping",
      description:"To ensure traceability, comprehensive records of food procurement, production, and distribution must be maintained.",
      backText: "To ensure traceability, comprehensive records of food procurement, production, and sales must be maintained. This is a mandatory post-registration requirement in accordance with regulations..",
    },
    {
      title: "Food Safety Audits",
      description:"Conducting internal audits at regular intervals is a must to identify and correct compliance issues.",
      backText: "Conducting internal audits at regular intervals is a must to identify and address potential food safety risks and help maintain compliance.",
    },
    {
        title: "Hygiene Maintenance",
        description:"Businesses must ensure they maintain high hygiene standards in all their foo....",
        backText: "Businesses must ensure they maintain high hygiene standards in all their food handling areas as a part of their mandatory post-registration compliance with FSSAI's safety and cleanliness requirements.",
    },
    {
        title: "Food Labelling Compliance",
        description:"Businesses must ensure compliance with food labelling according to FSS..",
        backText: "Businesses must ensure compliance with food labelling according to FSSAI guidelines. This includes labelling ingredients correctly, sharing nutritional details, and clearly displaying expiry dates.",
    },
    {
        title: "License Renewal",
        description:"Businesses must remember to renew their FSSAI food lice...",
        backText: "Businesses must remember to renew their FSSAI food license before it reaches its expiration date, which varies between 1 and 5 years, depending on the business category.",
    },
    {
        title: "Staff Training",
        description:"Businesses must regularly train their staff on food safety protocols to meet ..",
        backText: "Businesses must regularly train their staff on food safety protocols to meet FSSAI standards and best business practices as part of mandatory compliance requirements.",
    },

      
  ];

  return (
    <Section id="post-registration-compliance">
      <Title>Post Registration Compliance for FSSAI License</Title>
      <Description>
        Once the FSSAI license is obtained, businesses must comply with different post-registration compliances listed below:
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
