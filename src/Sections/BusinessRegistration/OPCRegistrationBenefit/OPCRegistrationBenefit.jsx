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
      title: "Simple Incorporation Process",
      description:
        "The process to incorporate an OPC is simple and hassle-free, requiring just one member and one nominee, who can also be eligible to become the director. This dual role reduces complexity and streamlines management.However, the OPC needs Rs. 1 Lakh as the minimum authorised capital, but at the same time, it does not need a minimum paid-up capital. This flexibility in capital requirements further simplifies the financial setup.Moreover, compared to other forms of companies, an OPC offers an easier incorporation process, making it an attractive option for entrepreneurs looking for a straightforward company structure.",
    },
    {
      icon: complianceIcon,
      title: "Access to Easy Fund Raising",
      description:
        "OPC, which is a legal and fully functional private company, have full access to raise funds for its operations from alternatives like venture capitals, angel investors, incubators, etc. It is one of the significant benefits of OPC registration.Unlike a sole proprietorship, banks and financial institutions are more inclined to grant loans to an OPC. This preference stems from the structured nature of a company, which often presents lower risk compared to a proprietorship firm.Furthermore, the credibility of being a registered company enhances trust with potential investors, making it easier to secure funding. Therefore, whether through venture capitalists or traditional financial institutions, OPCs enjoy a smoother path to obtaining the necessary capital for growth and innovation."
    },
    {
      icon: complianceIcon,
      title: "Fewer Compliances",
      description:
        "According to The Companies Act, 2013, OPCs have fewer compliances to meet during their incorporation. They are also exempt from making cash flow statements, getting the books of accounts and annual returns signed by the company secretary.",
    },
    {
      icon: complianceIcon,
      title: "Easy Management Process",
      description:
        "The registered OPC holds the sole authority towards managing the operations and making decisions for the efficient company management without conflicts or delays. Therefore, it is easy to pass the ordinary and special resolutions by simply entering them into the minute book.An OPC simplifies management by having a single member, allowing for swift and straightforward decision-making. With no need for consensus among multiple parties, decisions can be made quickly and efficiently. The process is streamlined as the sole member can directly record and sign resolutions in the minute book, eliminating any potential conflicts or delays.This singular structure ensures that the company runs smoothly, providing a clear and conflict-free environment where decisions are implemented without the usual bureaucratic hurdles.",
    },
    {
      icon: complianceIcon,
      title: "Limited Liability",
      description:
        "The OPCs which is a separate legal entity which limits the liability of the shareholder up to the value of their shareholdings. Further, single shareholder is not personally liable for any losses that the OPC incurs during the course of its operations.",
    },
    {
      icon: complianceIcon,
      title: "Exclusive Benefits",
      description:
        "An OPC enjoys various other exemptions, privileges and benefits exclusive to it, which the other types of private companies do not enjoy. Thus, solopreneurs prefer one person company registration.",
    },
  ];
  

const OPCRegistrationBenefit = () => {
  return (
    <Section>
      <Container>
        <LeftContent>
          <h2>Benefits of OPC Registration Online</h2>
          <p>
          Given below are the significant benefits of Public Limited Company Registration online in India-:
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

export default OPCRegistrationBenefit;
