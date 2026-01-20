// import React from "react";
// import styled from "styled-components";

// const SectionWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: stretch;
// //   background: rgb(232, 232, 232);
//   padding: 60px 20px;
//   flex-wrap: wrap;
//   overflow-x: hidden;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     text-align: center;
//   }

// @media (max-width: 1030px) {
//     .display-none {
//     display:none
//     }
//   }  
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   min-width: 300px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background:rgb(239, 239, 239);
//   hieght:100%;
//   margin-right:30px;
//   border-radius:25px
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   max-width: 400px;
//   height: auto;
// `;

// const CircleWrapper = styled.div`
//   flex: 1;
//   min-width: 360px;
//   height: 700px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background:rgb(239, 239, 239);
//   border-radius:25px
// `;

// const CenterCircle = styled.div`
//   width: 260px;
//   height: 260px;
//   background: #ed740a;
//   color: white;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   padding: 25px;
//   font-weight: bold;
//   font-size: 1rem;
//   z-index: 2;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
// `;

// const OuterCircle = styled.div`
//   position: absolute;
//   width: 600px;
//   height: 600px;
// `;

// // .content {
// //     flex: 1 1 500px;
// //     padding-right: 20px;
// //   }

// const SmallCircle = styled.div`
//   width: 180px;
//   height: 180px;
//   background: #ffffff;
//   color: #333;
//   border-radius: 50%;
//   position: absolute;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   padding: 18px;
//   text-align: center;
//   font-size: 0.9rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 500;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
//     z-index: 3;
//     background:  #00204b;
//     color: #ffffff
//   }
// `;

// const positions = [
//   { top: "-30px", left: "calc(50% - 90px)" },
//   { top: "90px", left: "calc(100% - 180px)" },
//   { top: "calc(100% - 240px)", left: "calc(100% - 200px)" },
//   { bottom: "-30px", left: "calc(50% - 90px)" },
//   { top: "calc(100% - 260px)", left: "0px" },
//   { top: "90px", left: "0px" },
// ];

// const circleTexts = [
//   {
//     title: "Regulatory Compliance",
//     text: "Safeguards your legal and tax position in India.",
//   },
//   {
//     title: "Easy Compliance",
//     text: "Streamlines tax filing and online payments.",
//   },
//   {
//     title: "Maintains Transparency",
//     text: "Helps keep clean, trustworthy records.",
//   },
//   {
//     title: "Legal Protection",
//     text: "Ensures you meet legal standards and avoid trouble.",
//   },
//   {
//     title: "Improve Credit Score",
//     text: "Good compliance? Better credit profile.",
//   },
//   {
//     title: "Market Advantage",
//     text: "Gain trust. Win business. Be legit.",
//   },
// ];

// const GSTBenefitsLayout = () => {
//   return (
//     <SectionWrapper>
       
//       <ImageWrapper className="display-none">
//         <div className="content">
//             <h2>Who are Food Business Operators (FBOs)?</h2>
//             <p>
//             Food Business Operators (FBOs) are individuals or organizations engaged in producing, processing, distributing, or selling food products in India. FBOs, including small grocery stores, wholesale distributors, restaurants, food processing plants, bakeries, and supermarkets, are mandated to get an FSSAI license.
//             </p>
//             <p>
//             FBOs are categorized based on:
//                 <li>Type of food products</li>
//                 <li>The scale of business operations</li>
//             </p>
//             </div>
//         <StyledImage src="https://FilingLab.io/img/img1.webp" alt="GST Illustration" />
//       </ImageWrapper>

//       <CircleWrapper >
//         <OuterCircle>
//           {circleTexts.map((circle, index) => (
//             <SmallCircle style={positions[index]} key={index}>
//               <div>
//                 <strong>{circle.title}</strong>
//                 <br />
//                 <span>{circle.text}</span>
//               </div>
//             </SmallCircle>
//           ))}
//         </OuterCircle>

//         <CenterCircle>
//           GST registration offers a variety of benefits to individuals and business entities.
//         </CenterCircle>
//       </CircleWrapper>
//     </SectionWrapper>
//   );
// };

// export default GSTBenefitsLayout;

// ===========================================================================

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
      title: "Limited Liability Protection",
      description:
        "One of the most important benefits of a private limited company is that it offers limited liability protection. It safeguards the personal assets of the shareholders against business debt, limiting the financial risk of investing in shares. It shields individuals from business liability, creating substantial financial protection.",
    },
    {
      icon: complianceIcon,
      title: "Greater Credibility",
      description:
        "Registering a business boosts its credibility, making it more lucrative to customers, suppliers and investors. A registered company is considered legitimate and professional, promoting mutual trust and encouraging business relations.",
    },
    {
      icon: complianceIcon,
      title: "Funding Access",
      description:
        "Funding is important for business growth. A private limited company is entitled to raise funds for its operations by issuing shares or borrowing funds from different sources, such as banks or other financial institutions. Funding helps the business fulfil its operational needs and expand its operations.",
    },
    {
      icon: complianceIcon,
      title: "Tax Benefits",
      description:
        "Private limited companies benefit from various tax incentives and deductions, which help reduce their tax burdens. Such taxation leverages help them save costs and gain from multiple other transactions, helping them manage their finances better. Adopting disciplined financial practices helps them improve their profits.",
    },
    {
      icon: complianceIcon,
      title: "Perpetual Succession",
      description:
        "A private limited company offers perpetual succession. It is not impacted by changes in ownership or the death of its founders. Perpetual succession gives businesses the stability to continue operating over a period of time.",
    },
    {
      icon: complianceIcon,
      title: "Separate Legal Entity",
      description:
        "A registered private limited company is considered to be a separate and distinct legal entity. It can enter into contracts independently, sue and be sued. The individual legal status boosts its efficiency and grants it the legal clarity to function independently.",
    },
  ];
  

const CompanyRegistrationBenefit = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <h2>Advantages of Registering a Company</h2>
          <p>
          Registering a private limited company offers various benefits to the shareholders, including a flexible management structure, legal identity and limited liability protection. Let us explore some of the most important benefits below:
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

export default CompanyRegistrationBenefit;
