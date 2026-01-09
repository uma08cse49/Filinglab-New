// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const Section = styled.section`
//   background:rgb(240, 240, 240);
//   padding: 80px 20px;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 1200px;
//   margin: 0 auto;
//   gap: 40px;
//   align-items: flex-start;

//   @media (max-width: 900px) {
//     flex-direction: column;
//   }
// `;

// const Content = styled.div`
//   flex: 1;
//   min-width: 300px;
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   min-width: 300px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     width: 100%;
//     max-width: 450px;
//     height: auto;
//     border-radius: 16px;
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
//   }
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   color: #ed740a;
//   margin-bottom: 40px;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
// `;

// const Card = styled(motion.div)`
//   background: rgb(255, 255, 255);
//   padding: 25px;
//   border-radius: 16px;
//   border: 2px solid transparent;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
//   transition: 0.3s ease;
//   text-align: left;
//   position: relative;

//   h4 {
//     font-size: 1.1rem;
//     color: #002145;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     transition: color 0.3s ease;
//   }

//   p {
//     font-size: 0.95rem;
//     color: #333;
//     line-height: 1.5;
//     transition: color 0.3s ease;
//   }

//   &:hover {
//     background: #002145;
//     border-color: rgb(0, 45, 93);
//     box-shadow: 0 0 15px rgba(0, 48, 103, 0.9);
//     transform: translateY(-6px);

//     h4,
//     p {
//       color: #fff;
//     }
//   }
// `;

// const points = [
//   {
//     icon: "📜",
//     title: "Legal GST Collection",
//     desc: "GST certificate allows businesses to legally levy and collect GST from customers.",
//   },
//   {
//     icon: "💸",
//     title: "Claim Input Tax Credit",
//     desc: "Enables businesses to claim credit for GST paid on purchases and expenses.",
//   },
//   {
//     icon: "🏦",
//     title: "Loan & Financial Access",
//     desc: "Acts as legitimacy proof for getting loans from banks and institutions.",
//   },
//   {
//     icon: "📑",
//     title: "Government Tender Access",
//     desc: "Authorizes businesses to apply for government tenders with tax compliance.",
//   },
//   {
//     icon: "🤝",
//     title: "Builds Trust & Goodwill",
//     desc: "Boosts consumer trust and shows commitment to national tax law.",
//   },
// ];

// const FSSAILicenseFeatures = () => {
//   return (
//     <Section>
//       <Wrapper>
//         {/* Left Content */}
//         <Content>
//           <Title>Role of GST Registration Certificate</Title>
//           <Grid>
//             {points.map((item, index) => (
//               <Card
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <h4>{item.icon} {item.title}</h4>
//                 <p>{item.desc}</p>
//               </Card>
//             ))}
//           </Grid>
//         </Content>

//         {/* Right Image */}
//         <ImageWrapper>
//           <img
//             src="https://FilingLab.io/img/img4.webp"
//             alt="GST certificate role visual"
//           />
//         </ImageWrapper>
//       </Wrapper>
//     </Section>
//   );
// };

// export default FSSAILicenseFeatures;


import React from "react";
import styled from "styled-components";
import illustration from "../../../assets/images/feature_img.png"; // adjust path as needed
import tickIcon from "../../../assets/images/tick.png"; // your tick/check icon
import OPCComplainceRequirements from "./OPCComplainceRequirements"

const Section = styled.section`
  padding: 60px 20px;
  background: #fff;
  text-align: center;

  .p_30 {
    padding: 30px 0;
}
    .row {
    margin: 0px -15px !important;
}
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

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 190px;
  flex-wrap: wrap;
`;

const LeftImage = styled.img`
  width: 370px;
  max-width: 100%;
  height: 500px;
`;

const FeaturesList = styled.ul`
  flex: 1;
  min-width: 300px;
  text-align: left;
  list-style: none;
  padding-left: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
  color: #333;

  img {
    width: 18px;
    height: 18px;
    margin-top: 4px;
  }
`;

const OPCRegistrationFeature = () => {
  const features = [
    "Perpetual Succession - Mandatory for food-related businesses, the FSSAI food license ensures compliance with food safety regulations.",
    "One Member/Shareholder - An OPC is formed with just one member who is also the single shareholder of the company. This feature is unique to OPCs, unlike other types of private companies.",
    "Private Company - An OPC is classified as a type of private company with one single shareholder, as per Section 3(1)(c) of the Companies Act, 2013.",
    "Limited Liability - An OPC registered under the Companies Act, 2013 has separate legal liability, limited to the amount of shareholdings.",
    "No Paid-up Share Capital - As per the Companies Act, 2013, an OPC is exempt from producing any minimum paid-up capital at the time of incorporation.",
    "Director Remuneration - OPCs registered under the Companies Act, 2013 are entitled to pay more remuneration to their directors than other companies.",
    "Conversion to a Private Limited Company - The Companies Act, 2013 allows conversion of an OPC into a private limited company if the paid-up share capital exceeds Rs. 50 lakhs or its annual turnover exceeds Rs. 2 crores. However, it's important to note that recent regulatory changes have impacted these requirements.",
    "In 2021, the Companies (Incorporation) Second Amendment Rules removed the compulsory conversion mandate for OPCs. This means an OPC is no longer required to convert into a private or public company, even if its paid-up capital and average annual turnover exceed previous thresholds. Key Points to Consider:",
    "Voluntary Conversion: While you can choose to convert your OPC if it surpasses certain financial metrics, it is no longer a mandatory step.",
    "Regulatory Update: The 2021 amendment ensures that entrepreneurs have more flexibility in maintaining their OPC status, allowing for continued growth without the pressure of conversion. This regulatory shift provides OPCs with the freedom to expand without undergoing structural changes, making it a favourable option for many small businesses and startups."
  ];

  return (
    <Section id="features-of-fssai-license" class="p_30">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7 mx-auto">
                    <Title>Features of One Person Company Registration</Title>
                    <Description>
                        Have a look over the following features of the one person company registration, as discussed below:
                    </Description>
                </div>    
            </div> 
        </div>                    

    <ContentWrapper>
        <LeftImage src={illustration} alt="FSSAI visual" />
        <div class="col-sm-12 col-md-6 col-lg-6"> 
            <FeaturesList>
            {features.map((text, idx) => (
                <FeatureItem key={idx}>
                <img src={tickIcon} alt="✔" />
                <span>{text}</span>
                </FeatureItem>
            ))}
            </FeaturesList>
        </div>    
      </ContentWrapper>
      <OPCComplainceRequirements/>
    </Section>
  );
};

export default OPCRegistrationFeature;
