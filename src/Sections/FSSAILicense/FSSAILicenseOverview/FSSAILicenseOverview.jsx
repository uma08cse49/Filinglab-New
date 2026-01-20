import React from "react";

const FssaiLicenseOverview = () => {
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
          FSSAI License and Registration in India  – An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          A Food Safety and Standards Authority of India (FSSAI) license is mandatory for operating a food business in India. Any person or entity engaged in this industry -manufacturing, processing, distribution and sale of food products - must obtain FSSAI license registration, enabling them to operate their business legally.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
          The FSSAI food license ensures that business owners and operators follow safety and quality compliances, which helps keep public health under check and promotes consumer confidence in the products sold. FSSAI License registration establishes trustworthiness and boosts business credibility to meet legal regulations and standards. Make your food business journey blissful with our FSSAI license consultants and meet your FSSAI compliance needs.
          </p>
          {/* <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
            GST has united various indirect taxes, including VAT, service tax, and
            excise duty, into a unified single tax system. The consolidation of
            multiple taxes restructured as GST has streamlined compliance, lowered tax
            evasions, eliminated the domino effect of taxes, promoted the ease of
            doing business, and boosted the efficacy of the country’s economy.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "25px" }}>
            Talk to consultants at FilingLab and enjoy easy and timely GST registration
            in India.
          </p> */}
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

export default FssaiLicenseOverview;
