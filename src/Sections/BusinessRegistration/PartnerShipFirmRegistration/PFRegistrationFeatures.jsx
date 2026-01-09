import React from "react";
import styled from "styled-components";
import illustration from "../../../assets/images/feature_img.png"; // adjust path as needed
import tickIcon from "../../../assets/images/tick.png"; // your tick/check icon
import PFRegsitrationTimeline from "./PFRegistrationTimeline"

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
  height: 400px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #ed740a;
  text-align: center;
  margin-bottom: 40px;
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

const Ul = styled.ul`
  padding-left: 20px;
list-style-type: none;
  li {
    margin-bottom: 15px;
    line-height: 1.6;
    position: relative;
    color: #002145
  }

  li::before {
    content: "✔";
    color: #ed740a;
    position: absolute;
    left: -20px;
    font-weight: bold;
  }
`;
const SubHeading = styled.h3`
  color:#002145;
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

const PFRegistrationFeatures = () => {
  const features = [
    "The duties of all members are decided through a partnership deed.",
    "All partners have an equal share in the profits and losses of the firm.",
    "The liability of all members is unlimited.",
    "At least two members are required for partnership firm registration.",
    "A partnership firm is not a separate legal entity, meaning it will automatically dissolve in case of the retirement or death of its partners.",
    "The firm allows 100% freedom in decision-making to partners.",
  ]

  return (
    <Section id="features-of-fssai-license" class="p_30">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7 mx-auto">
                    <Title>Features of Partnership Firm Registration Online in India</Title>
                    <Description>
                        The features of partnership firm registration online in India are as follows:
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
      <PFRegsitrationTimeline/>
  
    </Section>
    
    
  );
};

export default PFRegistrationFeatures;
