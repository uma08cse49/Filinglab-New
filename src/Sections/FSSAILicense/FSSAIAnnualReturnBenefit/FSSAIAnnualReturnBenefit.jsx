import React from "react";
import styled from "styled-components";
import Fssai from "../../../assets/images/Fssai.png";
import complianceIcon from "../../../assets/images/compliance.png"; // replace with actual path
// src\assets\images\complaince.png
// import trustIcon from "../../../assets/images/trust.png";
// import brandingIcon from "../../../assets/images/branding.png";
// import expansionIcon from "../../../assets/images/expansion.png";
// import investorIcon from "../../../assets/images/investor.png";
// import marketingIcon from "../../../assets/images/marketing.png";
import benefits_img from "../../../assets/images/benefits_img.png";

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-height: 430px;
  overflow-y: auto;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 2rem;
    color: #ed740a;
    margin-bottom: 15px;
  }

//   h2 {
//     background: #195ec8;
//     color: #fff;
//     padding: 8px 16px;
//     display: inline-block;
//     font-size: 24px;
//     font-weight: bold;
//     margin-bottom: 16px;
//   }

  p {
    font-size: 16px;
    color: #444;
    line-height: 1.6;
  }
`;

const RightCard = styled.div`
  flex: 1;
  min-width: 300px;
  border: 1px solid #ccc;
  padding: 24px;
  border-radius: 12px;
  background: #f9f9f9;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

// const Icon = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: contain;
// `;

const TextBox = styled.div`
//   h4 {
//     font-size: 18px;
//     font-weight: bold;
//     margin-bottom: 8px;
//   }
  
  h4 {
    font-size: 2rem;
    color: #ed740a;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.5;
  }
`;


const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
    background:rgb(14, 14, 104);
  }

   &:hover h4,
  &:hover p {
    color: #ffffff;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 35px;
  object-fit: contain;
`;

// const Icon = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: contain;
// `;

// const ScrollableCards = styled.div`
//   max-height: 500px;           /* Adjust as needed */
//   overflow-y: auto;
//   padding-right: 10px;
//   scrollbar-width: thin;
//   scrollbar-color: #ccc transparent;

//   /* Optional: Webkit scrollbar styling */
//   &::-webkit-scrollbar {
//     width: 6px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #ccc;
//     border-radius: 6px;
//   }
// `;

const CardScrollContainer = styled.div`
  flex: 1;
  min-width: 320px;
  max-height: 450px; /* 👈 This controls scroll height */
  overflow-y: auto;
  padding-right: 8px;

  /* Optional scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }
`;




const benefits = [
    {
      icon: complianceIcon,
      title: "Enhances Market Reputation",
      description:
        "The FSSAI annual return filing enhances the overall market reputation and public image by demonstrating its commitment towards food safety and quality standards.",
    },
    {
      icon: complianceIcon,
      title: "Increases Brand Value",
      description:
        "The FSSAI annual return filing boosts the brand value and trust in the company’s reputation, showcasing its compliance with food safety regulations.",
    },
    {
      icon: complianceIcon,
      title: "Government Support",
      description:
        "The FSSAI annual return filing form offers government support to the entities securing compliance with the FSSAI requirements.",
    },
    {
      icon: complianceIcon,
      title: "Compliance with Standards",
      description:
        "The FSSAI annual return filing ensures compliance with FSSAI regulations and commitment towards food safety standards as prescribed by the authorities.",
    },
    {
      icon: complianceIcon,
      title: "Improved Efficiency",
      description:
        "The FSSAI annual return filing improves efficiency and operations, leveraging the productivity of the food business in India.",
    },
    {
      icon: complianceIcon,
      title: "Consumers Safety",
      description:
        "The FSSAI annual return filing guarantees adherence to food safety standards, which ensures maintaining hygiene, quality and safety of food products for consumers.",
    },
  ];
  

const FSSAIAnnualReturnBenefit = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <h2>Benefits of FSSAI Annual Return Filing</h2>
          <p>
          The benefits of complying with FSSAI annual return filing in India are as discussed below:
          </p>
          <img src={benefits_img} alt="Benefits" width="600" height="200"/>
          
        </LeftContent>

        <RightCard>
            <CardsWrapper>
                <CardScrollContainer>
                    {benefits.map((item, index) => (
                        <BenefitCard key={index}>
                            <Icon src={item.icon} width="40" height="40"/>    
                            {/* alt={item.title} */}
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </BenefitCard>
                    ))}
                </CardScrollContainer>
            </CardsWrapper>
           



{/* 
          <Icon src={complianceIcon} alt="Compliance Icon" />
          <TextBox>
            <h4>Legal Compliance</h4>
            <p>
              Manufacturers, processors, distributors, and food product sellers who obtain the mandatory FSSAI licenses follow compulsory compliance to operate their business legally in India. It helps them avoid legal penalties arising out of non-compliance.
            </p>
          </TextBox>   */}
          {/* <h4>Consumer Trust</h4>
            <p>
              Businesses with a valid FSSAI food license can display their certificate, which helps them build consumer trust. Displaying the certificate also reflects the business's confidence in following safety standards mandated by the Food Safety and Standards Authority of India. It boosts consumer loyalty and strengthens their trust in the business.
            </p> */}
        </RightCard>
      </Container>
    </Section>
  );
};

export default FSSAIAnnualReturnBenefit;
