import React from "react";

import CompanyRegistrationRequiresSection from "./CompanyRegistrationrequires";



const CompanyRegistrationOverview = () => {
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
          Private Limited Company Registration - An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          A Private Limited Company is one of the most popular business structures in India, known for its unique features and legal benefits. It operates as a separate legal entity, offering limited liability protection to its shareholders—safeguarding their personal assets from business liabilities. Regulated under the Companies Act, 2013, it requires a minimum of two and allows up to 200 shareholders.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          This structure is ideal for businesses looking to raise capital over time while maintaining operational control. Although shareholders can transfer shares as per the Articles of Association (AOA), the company cannot publicly offer or trade shares on the stock market.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Private limited companies must adhere to statutory compliances such as annual audits, filings, and corporate governance standards. Its blend of financial privacy, regulatory credibility, and management flexibility makes it especially suitable for startups and growing enterprises.
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
<CompanyRegistrationRequiresSection/>

export default CompanyRegistrationOverview;
