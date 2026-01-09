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

const SoleProprietorshipRegistrationOverview = () => {
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
          Sole Proprietorship Registration – An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          The simplest and most common form of business structure in India, owned, managed and operated by one person, is called Sole Proprietorship. Also known as solo entrepreneurship, proprietorship, or lone tradership, it is an ideal choice for small businesses and solo entrepreneurs. A sole proprietorship registration is a recommended type by entrepreneurs who want complete control over their business. While such businesses can employ others to work for them, a sole proprietorship is not recognized as a separate legal entity.</p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          There is no legal difference between the business and its owner, making the owner wholly responsible for the profits, debts and business liabilities. Unlike other business forms, sole proprietorship does not mandate formal business registration with the Ministry of Corporate Affairs (MCA). However, obtaining a Shop and Establishment Act License, GST registration and other permits essential to the business for legal operations is critical.
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
                    <h2>Why is Sole Proprietorship Registration Ideal for Your Business?</h2>
                    <p>
                    Sole prop registration is more straightforward than other business registrations, which grants complete business control to the owner. The setup is easy, with minimal regulatory requirements. The overall sole proprietorship registration process is less time-consuming than other business structures.
                    </p>
                    <p>It is ideal for those entrepreneurs who want to explore business opportunities without the hassle of legal and regulatory obligations. Sole proprietorship firm registration is cost-effective and has low legal and administrative expenses. It is suitable for low-risk, small-scale business ventures and is popular with solo entrepreneurs and freelancers.</p>
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

export default SoleProprietorshipRegistrationOverview;
