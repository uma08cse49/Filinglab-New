import React from "react";
import styled from "styled-components";
import illustration from "../../../assets/images/feature_img.png"; // adjust path as needed
import tickIcon from "../../../assets/images/tick.png"; // your tick/check icon
import SPRegistrationCompliance from "./SPRegistrationCompliance"

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
    "Offers single ownership to the sole proprietor",
    "Liability of the sole proprietor is unlimited",
    "Sole proprietorship and sole proprietor are not two separate legal entities",
    "Sole proprietorship registration online is simple, easy, quick and hassle-free",
    "A sole proprietor has complete control over the sole proprietorship",
    "A sole proprietor has exclusive rights over the profits with no obligation to share with anyone",
    "It has a simple tax process where the business income is taxed as personal income",
    "A sole proprietor has access to limited capital as he is the single owner",
    "Dissolving a sole proprietorship is a simple process without any legal complexities",
    "A sole proprietorship exists during the lifetime of its owner or until its legal dissolution"
  ]

  return (
    <Section id="features-of-fssai-license" class="p_30">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7 mx-auto">
                    <Title>Features of a Sole Proprietorship Firm Registration</Title>
                    <Description>
                        Sole proprietorship firm is one of the most preferred forms for business owners. Given below are the features of a sole proprietorship firm-
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
      <SPRegistrationCompliance/>
  
    </Section>
    
    
  );
};

export default PFRegistrationFeatures;
