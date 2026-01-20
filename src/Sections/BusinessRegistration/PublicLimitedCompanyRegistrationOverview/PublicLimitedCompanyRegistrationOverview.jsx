import React from "react";

// import PublicLimitedCompanyRegistrationrequires from "./PublicLimitedCompanyRegistrationrequires";



const PublicLimitedCompanyRegistrationOverview = () => {
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
          Public Limited Company Registration- An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          A public limited company registration online is a process that helps entrepreneurs establish a business presence by acquiring funds through the stock exchange. You can offer stocks either privately through an initial public offering (IPO) or publicly via the National Stock Exchange (NSE).
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          With SPICe+ filing, you’ll be able to acquire a PAN, TAN, DIN, EPFO, ESIC, name reservation, GST, and bank account opening.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
         FilingLab consultants will help you reserve a name, obtain a trade license, file documents for incorporation, open a bank account, acquire a DSC & DIN, and guide compliance. Consult our experts for easy and effortless Public Limited Company Registration in India.
          </p>
          <button style={buttonStyle}>Talk to Consultant</button>

          <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#ed740a" }}>
          What is a Public Limited Company?
          </h2>
        <p>A public limited company (PLC) is a business structure that requires at least seven members and three directors for incorporation. At least one of the directors must be an Indian resident. This business structure offers liability protection against the company’s debts to its members.</p>
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
{/* <PublicLimitedCompanyRegistrationrequires/>  */}

export default PublicLimitedCompanyRegistrationOverview;
