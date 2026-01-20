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
import PostRegistrationCompliance from "./PostRegistrationCompliance";
import RoleOfDirectorsandStakholders from "./RoleOfDirectorsandStakholders";

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

const CompanyRegistrationFeatures = () => {
  const features = [
    "Offers limited liability protection to its shareholders.",
    "As a separate legal entity, business operations are conducted independently.",
    "Needs only two shareholders at the time of company incorporation.",
    "Needs only two directors at the time of company registration.",
    "No minimum capital is required at the time of registration.",
    "Allows share transfer with the approval from the Board of Directors or as per its Articles of Association.",
    "It is a perpetually existing organization.",
    "Offers a flexible business structure.",
    "Eligible for various tax benefits and incentives.",
    "Allows professional management to handle business operations."
  ];

  return (
    <Section id="features-of-fssai-license" class="p_30">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7 mx-auto">
                    <Title>Features of a Private Limited Company Registration</Title>
                    <Description>
                    A private limited company is one of the most popular forms of business structures in India for its distinct characteristic features, including:
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
      <PostRegistrationCompliance/>
      <RoleOfDirectorsandStakholders/>
    </Section>
    
  );
};

export default CompanyRegistrationFeatures;
