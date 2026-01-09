import React from "react";
import styled from "styled-components";
import benefits_img from "../../../assets/images/benefits_img.png";


// import CompanyRegistrationRequiresSection from "./CompanyRegistrationrequires";

 const PCRegistration = styled.section`
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

const PCRegistrationOverview = () => {
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
          Farmer Producer Company Registration – An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          A Farmer Producer Company (FPC) is a special type of company formed by farmers, producers, and rural entrepreneurs to collectively manage agricultural activities and improve their income. Registered under the Companies Act, 2013, an FPC enables farmers to operate as a corporate entity, access better markets, reduce middlemen, and enjoy government-backed benefits.</p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Establishing a Farmer Producer Company empowers small and marginal farmers by giving them a structured platform for production, procurement, marketing, processing, and distribution of agricultural products. It also enhances bargaining power, ensures fair pricing, and promotes sustainable farming practices.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          The Government of India actively supports FPCs through various schemes, subsidies, grants, and credit facilities, making it an ideal model for strengthening the rural economy. With proper registration, farmers can collaborate efficiently, access finance easily, and scale their operations with transparency and compliance.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Registering an FPC is the first step toward transforming traditional farming into a well-organized and profitable business entity.
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

      <PCRegistration style={{marginTop:'20px',width:'100%'}}>
                <div className="container">
                  <div className="image">
                  <img
                      src={benefits_img}
                      alt="Benefits"
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="content">
                    <h2>What is a Producer Company?</h2>
                    <p>
                    A Producer Company is a corporate entity formed by a group of producers—such as farmers, artisans, or rural entrepreneurs—who come together to carry out collective activities related to the production, harvesting, procurement, processing, or marketing of their goods. It operates under the Companies Act, 2013, combining the benefits of a cooperative society with the structure and governance of a private limited company.
                    </p>
                    <p>A Producer Company helps its members:</p>
                    <ul>
                      <li>Work collectively to reduce costs and increase profitability</li>
                      <li>Improve access to markets, technology, and finance</li>
                      <li>Add value through processing, grading, packaging, and branding</li>
                      <li>Strengthen bargaining power and eliminate middlemen</li>
                    </ul>
                    <p>Unlike traditional companies, a Producer Company works for the mutual benefit of its members, ensuring better income, fair pricing, and long-term sustainability.</p>
                    <p>It is one of the most effective models to empower small producers and elevate rural livelihoods through professional management and legal protection.</p>
                  </div>
          
                  
                </div>
              </PCRegistration>
         
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

export default PCRegistrationOverview;
