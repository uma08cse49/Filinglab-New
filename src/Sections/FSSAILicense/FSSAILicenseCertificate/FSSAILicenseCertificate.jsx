import React from "react";
import styled from "styled-components";
import FBO from "../../../assets/images/FBO.png";


const FSSAILicenseCertificateStyle = styled.section`
  background:rgb(237, 237, 237);
  padding: 30px 20px;
  color: #000;
  overflow-x: hidden;
  

  .container {
    max-width: 100%;
    margin: 0 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    flex: 1 1 500px;
    padding-right: 20px;
  }

  .image {
    flex: 1 1 300px;
    text-align: center;
    margin-top: 20px;
  }

  h2 {
    font-size: 2rem;
    color: #ed740a;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }
`;

const FSSAILicenseCertificate = () => {
  return (
    <FSSAILicenseCertificateStyle style={{marginTop:'20px',width:'100%'}}>
      <div className="container">
        <div className="image">
        <img
            src={FBO}
            alt="FBO's Overview"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="content">
          <h2>Who are Food Business Operators (FBOs)?</h2>
          <p>
          Food Business Operators (FBOs) are individuals or organizations engaged in producing, processing, distributing, or selling food products in India. FBOs, including small grocery stores, wholesale distributors, restaurants, food processing plants, bakeries, and supermarkets, are mandated to get an FSSAI license.
          </p>
          <p>
          FBOs are categorized based on:
            <li>Type of food products</li>
            <li>The scale of business operations</li>
          </p>
        </div>

        
      </div>
    </FSSAILicenseCertificateStyle>
  );
};

export default FSSAILicenseCertificate;