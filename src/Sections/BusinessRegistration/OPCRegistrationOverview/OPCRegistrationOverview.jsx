import React from "react";
import styled from "styled-components";
import benefits_img from "../../../assets/images/benefits_img.png";

// import CompanyRegistrationRequiresSection from "./CompanyRegistrationrequires";

 const OPCTaxImplication = styled.section`
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

const OPCRegistrationOverview = () => {
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
          One Person Company Registration- An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
         Are you a solopreneur who wants to give wings to your entrepreneurial dreams? One person company registration is the best option for you. Enjoy the merits such as ease of incorporation, less compliance needs and sole ownership and control with stress-free OPC registration.</p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          One person company registration was introduced under the Companies Act, 2013, which safeguards the interests of solo entrepreneurs in India. The concept also provides legal status to the entities registered as OPCs (One Person Companies) to operate freely in India.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Section 2 (62) of the Companies Act, 2013 provides provision for the incorporation of one person company by solo entrepreneurs with just 1 director and 1 member. This structure allows the person to have full control of the company while enjoying the benefits of limited liability.
          </p>
           <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          Worried about hurdles in the path of your one person company registration in India? Talk to our business consultants for quick and budget-friendly solutions.
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

      <OPCTaxImplication style={{marginTop:'20px',width:'100%'}}>
                <div className="container">
                  <div className="image">
                  <img
                      src={benefits_img}
                      alt="Benefits"
                      style={{ maxWidth: "100%", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="content">
                    <h2>What are the Tax Implications of Operating as an OPC?</h2>
                    <p>
                    When considering the transition from a sole proprietorship to a One Person Company (OPC) or registering a new company in India, it's crucial to understand the tax implications involved. Here's a comprehensive look at what to expect:
                    </p>
                    {/* <p>FSSAI further introduced 14 referral laboratories, 72 government/ UT laboratories, and 112 NABL-accredited independent laboratories, which are responsible for setting food safety standards in India. Moreover, the mandate of obtaining a food license is a primary requirement for initiating a food business in India.</p> */}
                    <ol>
                        <li><strong>Tax Rate and Provisions:</strong>OPCs, like other companies, are taxed at a flat rate of 30% under the Income Tax Act, 1961. This is a significant difference compared to the potentially lower tax liabilities faced by sole proprietorships.</li>
                        <li><strong>No Specific Tax Advantage: </strong>Unlike other business structures, OPCs do not benefit from any specific tax advantages. The tax obligations, including Minimum Alternate Tax (MAT) and Dividend Distribution Tax (DDT), apply to OPCs in the same way they do to any other company structure.</li>
                        <li><strong>Higher Tax Liabilities: </strong>OPCs are subject to higher tax liabilities on profits than sole proprietorships. This is an important factor to consider when evaluating the potential financial impact of forming an OPC.</li>
                        <li><strong>Dividend Distribution Tax:</strong>OPCs attract dividend distribution tax, meaning profits distributed as dividends are subject to additional taxation.</li>
                        <li><strong>Separate Accounting:</strong>The income and expenses of an OPC are accounted for separately from the owner's personal finances, ensuring clear financial records.</li>
                        <li><strong>Regular Tax Filings:</strong>OPCs are required to file their income tax reports annually and submit GST reports regularly if applicable.</li>
                    </ol>
                    <p>By understanding these tax implications, entrepreneurs can make informed decisions about the best business structure for their needs.</p>
                  </div>
          
                  
                </div>
              </OPCTaxImplication>
         
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

export default OPCRegistrationOverview;
