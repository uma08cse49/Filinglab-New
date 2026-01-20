import React from "react";
import styled from "styled-components";
import advantage from "../../../assets/images/adv_img.png";
import complianceIcon from "../../../assets/images/compliance.png"; // replace with actual path
// src\assets\images\complaince.png
// import trustIcon from "../../../assets/images/trust.png";
// import brandingIcon from "../../../assets/images/branding.png";
// import expansionIcon from "../../../assets/images/expansion.png";
// import investorIcon from "../../../assets/images/investor.png";
// import marketingIcon from "../../../assets/images/marketing.png";

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
      title: "Better Bargaining Power",
      description:
        "Farmers unite under one legal entity, increasing their negotiation strength with buyers, suppliers, and market intermediaries. This ensures fair and transparent pricing.",
    },
    {
      icon: complianceIcon,
      title: "Access to Government Schemes & Subsidies",
      description:
        "FPCs are eligible for various central and state government benefits such as grants, tax exemptions, subsidies, and financial assistance under schemes like SFAC, NABARD, and NRLM."
    },
    {
      icon: complianceIcon,
      title: "Lower Cost of Inputs",
      description:
        "An FPC can purchase seeds, fertilizers, pesticides, equipment, and other inputs in bulk at discounted rates, reducing costs for member farmers.",
    },
    {
      icon: complianceIcon,
      title: "Improved Market Reach",
      description:
        "With collective marketing and brand-building, FPCs can access larger markets, retail chains, processors, exporters, and online platforms—leading to better sales and higher profits.",
    },
    {
      icon: complianceIcon,
      title: "Access to Credit & Banking Facilities",
      description:
        "Banks and financial institutions provide loans, credit limits, and working capital easily to registered FPCs, often at preferential rates.",
    },
     {
      icon: complianceIcon,
      title: "Value Addition & Processing Opportunities",
      description:
        "FPCs can set up processing units for cleaning, grading, milling, packaging, or food processing—helping members earn more by selling value-added products.",
    },
    {
      icon: complianceIcon,
      title: "Professional Management",
      description:
        "An FPC operates with a structured management system, ensuring accountability, transparency, and efficient operations like a private company but for the benefit of farmers.",
    },
    {
      icon: complianceIcon,
      title: "Reduction in Middlemen",
      description:
        "Direct selling and bulk transactions help farmers retain a larger share of profits, reducing dependency on traders and commission agents.",
    },
     {
      icon: complianceIcon,
      title: "Better Risk Management",
      description:
        "Collective production, storage, warehousing, and insurance facilities help protect farmers from market fluctuations and crop losses.",
    },
    {
      icon: complianceIcon,
      title: "Enhanced Income & Rural Empowerment",
      description:
        "By improving productivity, market access, and business capabilities, FPCs directly contribute to increasing the earnings of member farmers and uplifting the rural economy.",
    },
  ];
  

const PCRegistrationBenefit = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <h2>Benefits of a Farmer Producer Company (FPC)</h2>
          <p>
          A Farmer Producer Company offers multiple financial, operational, and social advantages to farmers and rural producers. By functioning as a collective corporate entity, an FPC strengthens the agricultural value chain and ensures better income opportunities for its members. Key benefits include:
          </p>
          <img src={advantage} alt="Compliance Icon" width="400" height="300"/>
          
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

export default PCRegistrationBenefit;
