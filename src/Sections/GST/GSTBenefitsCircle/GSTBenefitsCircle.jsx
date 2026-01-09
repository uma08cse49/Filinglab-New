import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
//   background: rgb(232, 232, 232);
  padding: 60px 20px;
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }

@media (max-width: 1030px) {
    .display-none {
    display:none
    }
  }  
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(239, 239, 239);
  hieght:100%;
  margin-right:30px;
  border-radius:25px
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const CircleWrapper = styled.div`
  flex: 1;
  min-width: 360px;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(239, 239, 239);
  border-radius:25px
`;

const CenterCircle = styled.div`
  width: 260px;
  height: 260px;
  background: #ed740a;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
  font-weight: bold;
  font-size: 1rem;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const OuterCircle = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
`;

const SmallCircle = styled.div`
  width: 180px;
  height: 180px;
  background: #ffffff;
  color: #333;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 18px;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    z-index: 3;
    background:  #00204b;
    color: #ffffff
  }
`;

const positions = [
  { top: "-30px", left: "calc(50% - 90px)" },
  { top: "90px", left: "calc(100% - 180px)" },
  { top: "calc(100% - 240px)", left: "calc(100% - 200px)" },
  { bottom: "-30px", left: "calc(50% - 90px)" },
  { top: "calc(100% - 260px)", left: "0px" },
  { top: "90px", left: "0px" },
];

const circleTexts = [
  {
    title: "Regulatory Compliance",
    text: "Safeguards your legal and tax position in India.",
  },
  {
    title: "Easy Compliance",
    text: "Streamlines tax filing and online payments.",
  },
  {
    title: "Maintains Transparency",
    text: "Helps keep clean, trustworthy records.",
  },
  {
    title: "Legal Protection",
    text: "Ensures you meet legal standards and avoid trouble.",
  },
  {
    title: "Improve Credit Score",
    text: "Good compliance? Better credit profile.",
  },
  {
    title: "Market Advantage",
    text: "Gain trust. Win business. Be legit.",
  },
];

const GSTBenefitsLayout = () => {
  return (
    <SectionWrapper>
      <ImageWrapper className="display-none">
        <StyledImage src="https://FilingLab.io/img/img1.webp" alt="GST Illustration" />
      </ImageWrapper>

      <CircleWrapper >
        <OuterCircle>
          {circleTexts.map((circle, index) => (
            <SmallCircle style={positions[index]} key={index}>
              <div>
                <strong>{circle.title}</strong>
                <br />
                <span>{circle.text}</span>
              </div>
            </SmallCircle>
          ))}
        </OuterCircle>

        <CenterCircle>
          GST registration offers a variety of benefits to individuals and business entities.
        </CenterCircle>
      </CircleWrapper>
    </SectionWrapper>
  );
};

export default GSTBenefitsLayout;
