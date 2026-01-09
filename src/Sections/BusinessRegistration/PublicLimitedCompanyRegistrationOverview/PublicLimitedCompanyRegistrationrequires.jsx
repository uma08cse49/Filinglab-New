import React from "react";
import Consultant from "../../../assets/images/consultant.png";

const CompanyRegistrationRequiresSection = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#fff3e8",
        padding: "40px 20px",
        borderRadius: "16px",
        fontFamily: 'DM Sans', 
        fontstyle:"normal",
        gap: "180px",
      }}
    >
      {/* Left Side: Image + Steps */}
      <div style={{ flex: "1", textAlign: "center" }}>
        <img
          src={Consultant}
          alt="Consultant"
          style={{ width: "410px", borderRadius: "12px", maxWidth: "350%" }}
        />
        {/* <div style={{ marginTop: "20px", textAlign: "left", maxWidth: "240px", margin: "20px auto" }}>
          <div style={stepItemStyle(true)}>Company Formation ✅</div>
          <div style={stepItemStyle(false)}>Operating Agreement</div>
          <div style={stepItemStyle(false)}>Company Profile</div>
        </div> */}
      </div>

      {/* Right Side: Text */}
      <div style={{ flex: "2" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "30px" }}>
          Why is Company Registration Required?
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6",}}>
          Company registration is a process that gives legal status to a business and establishes its identity, 
          separate from its owners. It boosts the organization’s credibility, making it easier to gain the trust 
          of customers, suppliers, and investors. It also opens the gateway to secure funding and facilitates 
          protecting intellectual property rights. <strong style={{ color: "#000" }}>
          Company registration in India guarantees</strong> perpetual succession, enabling the business to operate 
          beyond the founders' participation. Registering a business is a step that gives the company a formal 
          and legal standing, helps in its expansion, and provides financial stability.
        </p>
      </div>
    </div>
  );
};

// Style function for steps
const stepItemStyle = (highlight) => ({
  backgroundColor: highlight ? "#fff" : "transparent",
  borderLeft: highlight ? "4px solid #FFA500" : "4px solid transparent",
  padding: "10px 12px",
  marginBottom: "10px",
  borderRadius: "8px",
  fontWeight: highlight ? "600" : "500",
  boxShadow: highlight ? "0 2px 6px rgba(0, 0, 0, 0.1)" : "none",
  color: "#000",
});

export default CompanyRegistrationRequiresSection;
