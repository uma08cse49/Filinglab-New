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

//   Section2 for information included while filing FSSAI Annual Return


const sectionStyle1 = {
    padding: "60px 20px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
  };

  const gridStyle1 = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  };

  const cardBaseStyle = {
    flex: "1 1 45%",
    minWidth: "300px",
    borderRadius: "20px",
    padding: "30px",
    color: "#fff",
    textAlign: "left",
  };

  const card1Style = {
    ...cardBaseStyle,
    backgroundColor: "#7c99b1",
  };

  const card2Style = {
    ...cardBaseStyle,
    backgroundColor: "#184075",
  };

  const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    marginBottom: "12px",
  };

  const iconStyle = {
    backgroundColor: "#fbbf24", // orange
    color: "#fff",
    borderRadius: "50%",
    padding: "4px 8px",
    fontSize: "14px",
  };

const FSSAIAnnualReturnFeature = () => {
  const features = [
    "The food business operators must ensure compliance with all applicable norms.",
    "FSSAI rules concerning the factory's sanitary and hygiene must be followed.",
    "Day-to-day records of sales, use, raw materials, and construction must be maintained independently.",
    "The materials used must be of ideal/specified quality.",
    "The food articles must not be produced, stored, or exposed for sale near a privy, urinal, drainage channel, or any spot used for waste collection.",
    "The plant, machines, and other equipment must be cleaned and maintained regularly.",
    "The pertinent synthetic and microbiological contaminants in food items must be inspected and tested at least once in six months.",
    "The required temperature for food products must be maintained throughout the supply chain."
  ];

  return (
    <Section id="features-of-fssai-license" class="p_30">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7 mx-auto">
                    <Title>Regulations Applicable for Filing Annual Return FSSAI</Title>
                    <Description>
                    The food business operators must further comply with the additional set of regulations set under the FSSAI Act. Food businesses must comply with the mentioned compliances:
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

        <section style={sectionStyle1}>
            <h2 style={titleStyle}>Deadlines for Filing Annual Return under FSSAI</h2>
            <p style={subtitleStyle}>
            The deadlines for filing annual return under FSSAI, i.e., Food Safety and Standards (Licensing and Registration of Food Business) Regulation, 2011, are as discussed below:
            </p>

            <div style={gridStyle1}>
                {/* Card 1 */}
                <div style={card1Style}>
                <div style={cardTitleStyle}>
                Due Date for Filing Form D1 & D2
                </div>
                <div style={itemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Every licensed FBO must file their annual return under Form D-1 on or before 31st May of every financial year.</span>
                </div>
                <div style={itemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Every licensed FBO engaged in the business of manufacturing milk or associated products must file their half-yearly returns for the period 1st April to 30th September and 1st October to 31st March of every financial year.</span>
                </div>
                <div style={itemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Such annual returns must be filed within a month from the end of the period.</span>
                </div>
            
                {/* Add more items here */}
                </div>

                {/* Card 2 */}
                <div style={card2Style}>
                <div style={cardTitleStyle}>
                Penalty for Late Filing of FSSAI Annual Return
                </div>
                <div style={itemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Any delay in filing the annual return under FSSAI beyond the 31st of May shall attract a penalty of Rs. 100 per day.</span>
                </div>
                <div style={itemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>The maximum penalty imposed on the late filing of the annual return shall not exceed 5 times the annual licensing fees.</span>
                </div>
                <div style={itemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>The penalty for late filing of FSSAI annual returns must be paid by the food business operators before applying for the renewal of their licenses.</span>
                </div>
                {/* Add more items here */}
                </div>
            </div>
        </section>


    

    </Section>
  );
};

export default FSSAIAnnualReturnFeature;
