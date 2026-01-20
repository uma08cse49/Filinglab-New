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


const OPCComplianceRequirements = () => {
  const items = [
    {
      title: "Post Registration Complaince for One Person Complaince ",
      description:"Navigating the Complaince landscap for one person companies (OPCs) in...",
      backtitle:"Annual General Meeting",
      backText: "All OPCs are not mandated to conduct annual general meetings (AGMs) for annual performance reviews or to discuss prospective business strategies. However, other specific compliance tasks are required.",
    },
    {
      title: "Mandatory Board Meetings",
      description:"While OPCs are not required to hold AGMs, other companies must Conduct..",
      backtitle:"Opening an OPC Bank Account",
      backText: "OPCs are required to open a corporate/current bank account under the name of the OPC. The documents submitted for opening must be self-attested with the company seal.",
    },
    {
      title: "Maintenance of Proper Books of Accounts",
      description:"It is essential for OPCs to maintain accurate and up-to-date books of..",
      backtitle:"Appointment of First Auditor",
      backText: "Conducting internal audits at regular intervals is a must to identify and address potential food safety risks and help maintain compliance.",
    },
    {
        title: "Statutory Audit of Financial Statements ",
        description:"OPCs must conduct a statutory audit of their financial statements to ensure..",
        backtitle:"File Return on Deposits",
        backText: "OPCs are required to file E-form DPT-3 (return on deposits) by June 30 for companies with outstanding loans as of March 31, irrespective of the deposit definition.",
    },
    {
        title: "Issues of Share Certificate",
        description:"Shareholders must apply for the issuance of share certificate within..",
        backtitle:"Declaration for Business Commencement",
        backText: "Registered OPCs must file Form INC-20A, the Declaration for Business Commencement, within 180 days of incorporation, but before starting business operations.",
    },
    {
        title: "Filing of Income Tax Return",
        description:"The Registered OPC holds the sole authority towards ",
        backtitle:"Filing of Income Tax Return",
        backText: "BThe registered OPC holds the sole authority towards managing the operations and making decisions for the efficient company management without conflicts or delays. Therefore, it is easy to pass the ordinary and..",
    },
    {
        title: "Complaince with GST and other Laws",
        description:"Depending on the business structure, OPCs must comply with standards...",
        backtitle:"Compliance with GST and Other Laws",
        backText: "Depending on the business structure, OPCs must comply with standards related to Goods and Services Tax (GST), labor codes, and other legal provisions. By adhering to these requirements, you ensure that your",
    },
     {
        title: "Filing of Annual Return and Statements",
        description:"The one person companies are legally authorized to prepare and annually fi...",
        backtitle:"Filing of Annual Return and Statements",
        backText: "The one person companies are legally authorized to prepare and annually file the signed annual returns/ reports (Form MGT-7) and annual statements (Form AOC-4) to the Registrar of the Companies.",
    },
 {
        title: "Complaince with GST and other Laws",
        description:"Based on the types of business structure,the one person companies...",
        backtitle:"Compliance with GST and Other Laws",
        backText: "Based on the type of business structure, the one person companies are required to comply with the standards defining the Goods and Services Tax (GTS), code for labour, and other legal provisions.",
    },


      
  ];

  return (
    <Section id="post-registration-compliance">
      <Title>What are the mandatory compliance requirements for an OPC?</Title>
      {/* <Description>
        Once the FSSAI license is obtained, businesses must comply with different post-registration compliances listed below:
      </Description> */}

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
                <h4>{item.backtitle}</h4>
                <p>{item.backText}</p>
                </CardBack>
            </CardInner>
            </CardWrapper>
        ))}
      </CardGrid>

    </Section>
  );
};

export default OPCComplianceRequirements;
