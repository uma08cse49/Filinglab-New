import React from "react";
import styled from "styled-components";
import benefits_img from "../../../assets/images/benefits_img.png";

// import CompanyRegistrationRequiresSection from "./CompanyRegistrationrequires";

 const PartnershipFirm = styled.section`
    background:rgb(237, 237, 237);
    padding: 30px 20px;
    color: #000;
    overflow-x: hidden;
    
  
    .container {
      max-width: 100%;
      margin: 0 70px;
      display: flex;
      flex-wrap: wrap;
      gap: "40px", 
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

const PartnershipFirmRegistrationOverview = () => {
  return (
    <section
      style={{
        background: "rgb(243, 243, 243)",
        color: "#000",
        padding: "60px 20px",
        borderRadius:'20px',
        // margin:'0px 30px'
        // maxWidth:'100%'
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 70px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        {/* Left Text Content */}
        <div style={{ flex: "1 1 500px", paddingRight: "20px" ,borderRight:'2px solid grey'}}>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#ed740a" }}>
          Partnership Firm Registration Online - An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          The Indian Partnership Act of 1932 governs the principles of partnership firm registration online in India. It provides rules and regulations concerning partners’ responsibilities, profit sharing, liabilities, and dissolution of the firm. If you are looking for partnership firm registration online, you are at the right place.</p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Our legal consultants at FilingLab will draft a partnership deed, apply for registration with notarized documents, reserve your desired firm name, enroll for PAN/GST, file your taxes, and complete post-enrolment compliance mandates.
          </p>
          <button style={buttonStyle}>Talk to Consultant</button>
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: "1 1 400px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="public/images/FSSAIoverview.png"
            alt="FSSAILicense Registration Overview"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>   

      <PartnershipFirm style={{marginTop:'20px',width:'100%'}}>
                <div className="container">
                  <div className="image">
                  <img
                      src={benefits_img}
                      alt="Benefits"
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="content">
                    <h2>What is a Partnership Firm in India?</h2>
                    <p>
                    A partnership firm in India is a business structure that requires at least two members for formation. All partners have an equal share in profits and losses, and they have unlimited liability, meaning their assets are used to offset the firm’s debts.
                    </p>
                    <p>It is most suitable for small and mid-size businesses, including medical professionals, architectural firms, accountants, tax consultants, and related services.</p>
                  </div>
          
                  
                </div>
              </PartnershipFirm>
         
    </section>

    
  );
};

const buttonStyle = {
  backgroundColor: "#002145",
  color: "#fff",
  padding: "12px 24px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};
{/* <CompanyRegistrationRequiresSection/> */}

export default PartnershipFirmRegistrationOverview;
