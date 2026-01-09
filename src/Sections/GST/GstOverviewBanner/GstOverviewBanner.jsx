import React from "react";

const GstOverviewBanner = () => {
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
            GST Registration – An Overview
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
            If you are looking for GST registration to empower your business legally,
            you are at the right place.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
            The Goods and Services Tax, popularly known as GST, was introduced on July
            1, 2017, as a replacement for various central and state-level taxes,
            including Service Tax, Excise Duty, CST, Entertainment Tax, Luxury Tax,
            and VAT. GST introduction has since ensured the streamlining of the tax
            process in India. GST registration is mandatory for traders, service
            providers, manufacturers, and freelancers.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "15px" }}>
            GST has united various indirect taxes, including VAT, service tax, and
            excise duty, into a unified single tax system. The consolidation of
            multiple taxes restructured as GST has streamlined compliance, lowered tax
            evasions, eliminated the domino effect of taxes, promoted the ease of
            doing business, and boosted the efficacy of the country’s economy.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "25px" }}>
            Talk to consultants at FilingLab and enjoy easy and timely GST registration
            in India.
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
            src="https://FilingLab.io/img/img1.webp"
            alt="GST Registration Overview"
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

export default GstOverviewBanner;
