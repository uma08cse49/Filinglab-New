import React from "react";
import styled from "styled-components";


const GSTRegistrationCertificateStyle = styled.section`
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

const GSTRegistrationCertificate = () => {
  return (
    <GSTRegistrationCertificateStyle style={{marginTop:'20px',width:'100%'}}>
      <div className="container">
        <div className="image">
        <img
            src="https://FilingLab.io/img/img1.webp"
            alt="GST Registration Overview"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="content">
          <h2>What is a GST Registration Certificate?</h2>
          <p>
            GST registration certificate is an official document issued by the Government of India to business entities registered under the Goods and Services Tax (GST) framework. GST certificate stands as a testimony to the entity’s legal standing and legitimate registration under GST. However, the certificate further displays critical information, including the GST identification number, business name, and the official address of the business.
          </p>
          <p>
            The GST Certificate is important for accomplishing tax obligations and crucial in cementing an entity’s credibility and operational legality. Furthermore, the GST registration verification is of utmost importance for any business. It is essential for LLPs, OPCs, private limited companies and public limited companies as well.
          </p>
        </div>

        
      </div>
    </GSTRegistrationCertificateStyle>
  );
};

export default GSTRegistrationCertificate;
