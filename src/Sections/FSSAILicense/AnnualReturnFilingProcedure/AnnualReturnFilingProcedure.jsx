import React from "react";
// import fssaiImage from "../assets/fssai-steps.png"; // adjust path based on your project
import Documents from "../../../assets/images/docu.png"; 

const AnnualReturnFilingProcedure = () => {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  };

  const imageStyle = {
    flex: "1 1 40%",
    maxWidth: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const stepsContainerStyle = {
    flex: "1 1 55%",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const stepStyle = {
    display: "flex",
    gap: "15px",
    borderTop: "1px solid #ccc",
    paddingTop: "20px",
  };

  const stepNumberStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#2f66d4",
  };

  const stepTitleStyle = {
    fontSize: "18px",
    fontStyle: "italic",
    fontWeight: "600",
    marginBottom: "6px",
  };

  const stepTextStyle = {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.6",
  };

//   Section2 for information included while filing FSSAI Annual Return


  const sectionStyle1 = {
    padding: "60px 20px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
  };

  const gridStyle1 = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  };

  const cardBaseStyle = {
    flex: "1 1 45%",
    minWidth: "300px",
    borderRadius: "20px",
    padding: "30px",
    color: "#fff",
    textAlign: "left",
  };

  const card1Style = {
    ...cardBaseStyle,
    backgroundColor: "#7c99b1",
  };

  const card2Style = {
    ...cardBaseStyle,
    backgroundColor: "#184075",
  };

  const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    marginBottom: "12px",
  };

  const iconStyle = {
    backgroundColor: "#fbbf24", // orange
    color: "#fff",
    borderRadius: "50%",
    padding: "4px 8px",
    fontSize: "14px",
  };

//   Section3 for "Different Types of FSSAI Returns"

  const sectionStyle3 = {
    padding: "60px 20px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const titleStyle3= {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subtitleStyle3 = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
  };

  const cardGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    flex: "1 1 300px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "left",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    maxWidth: "350px",
  };

  const iconBoxStyle = {
    backgroundColor: "#184075",
    borderRadius: "8px",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  };

  const iconTextStyle = {
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const cardTitleStyle3 = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cardDescStyle = {
    fontSize: "15px",
    color: "#333",
  };

  const data = [
    {
      icon: "🏢",
      title: "FSSAI Form D-1 (FSSAI Annual Return)",
      desc: "FSSAI Form D-1, which is an annual return, must be filed by all food business operators engaged in the business of packaging, importing, manufacturing, labelling, repacking & relabelling of food products, excluding milk, meat and alcoholic beverages.",
    },
    {
      icon: "⚙️",
      title: "FSSAI Form D-2 (Half-Yearly Return)",
      desc: "FSSAI Form D-2 which is a half-yearly return that must be filed by the food business operators indulged in the business of importing or manufacturing milk or associated milk products.",
    },
    {
      icon: "👥",
      title: "FSSAI Form D-4 (Stock and Sale Return)",
      desc: "FSSAI Form D-4, which is a stock and sale return statement, must be filed by certain food businesses that provide details concerning their stock and sale of specific food products in India.",
    },
  ];


  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Procedure for Filing FSSAI Annual Return</h2>
        <p style={subHeadingStyle}>
          The food business operators must comply with the following procedure
          required for filing FSSAI annual returns on or before May 31st of each
          year.
        </p>

        <div style={gridStyle}>
          {/* Left Image */}
          <div style={{ flex: "1 1 40%" }}>
            <img src={Documents} alt="Procedure Illustration" style={imageStyle} />
          </div>

          {/* Right Steps */}
          <div style={stepsContainerStyle}>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={stepNumberStyle}>1.</div>
              <div>
                <div style={stepTitleStyle}>Login to the FSSAI Portal</div>
                <div style={stepTextStyle}>
                  The food business operators are initially required to visit and log on and file FSSAI annual returns on the official website of the FSSAI.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>2.</div>
              <div>
                <div style={stepTitleStyle}>Receive Confirm Verification Code</div>
                <div style={stepTextStyle}>
                  The food business operators further receive a confirm verification code (i.e., an OTP) immediately after logging and choosing the annual return from the sub-menu.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>3.</div>
              <div>
                <div style={stepTitleStyle}>File Annual Return Forms</div>
                <div style={stepTextStyle}>
                The food business operators must file all required information, including details of license number and product details, in the annual return forms D-1 and D-2.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>4.</div>
              <div>
                <div style={stepTitleStyle}>Upload Documents</div>
                <div style={stepTextStyle}>
                The food business operators are further required to upload mandatory documents required for filing FSSAI annual return forms.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>5.</div>
              <div>
                <div style={stepTitleStyle}>Revise & Submit</div>
                <div style={stepTextStyle}>
                Lastly, the food business operators must carefully revise and make submission of the electronic form in the form prescribed by the concerned Food Safety Commissioner.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <section style={sectionStyle1}>
      <h2 style={titleStyle}>Information Included While Filing FSSAI Annual Return</h2>
      <p style={subtitleStyle}>
        The following is the list of necessary information that must be included when filing the FSSAI annual return:
      </p>

      <div style={gridStyle1}>
        {/* Card 1 */}
        <div style={card1Style}>
          <div style={cardTitleStyle}>
            Information In Form D1 When Filing FSSAI Annual Return
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Full name and address of Food Business Operator</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>FSSAI License Number</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Statement showing quantities of food products handled, manufactured, exported, and imported in tonnes.</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Statement containing details of the size of can, bottle, bulk package, or any other package</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Statement containing details of quantity in metric tonnes</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Statement showing the value of food products</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Name of the port or nation of export.</span>
          </div>

          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>The quantity imported or exported in kg</span>
          </div>

          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Rate per kg/per unit of packing FOB or CIF</span>
          </div>
          {/* Add more items here */}
        </div>

        {/* Card 2 */}
        <div style={card2Style}>
          <div style={cardTitleStyle}>
            Information In Form D2 When Filing Annual Return FSSAI
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>FSSAI License Number</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Details of purchase of milk products or items such as the source of purchase, average fat, name of the milk product, total quantity purchased, and SNF (%) quantity used & closing balance</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Details of procurement such as type of milk, total quantity (MT), total SNF content (MT), price (Rs/kg of milk), fat & SNF</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Details of milk marketing and reconstruction</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Details of milk products manufactured, sold, and stock position</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Statement showing quantities of milk products manufactured and exported in tonnes with their sale value during the period</span>
          </div>
        
          {/* Add more items here */}
        </div>
      </div>

      <section style={sectionStyle}>
      <h2 style={titleStyle}>Different Types of FSSAI Returns</h2>
      <p style={subtitleStyle}>
        The different types of FSSAI returns, as prescribed under the FSSAI Act, are discussed below:
      </p>

      <div style={cardGridStyle}>
        {data.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div style={iconBoxStyle}>
              <span style={iconTextStyle}>{item.icon}</span>
            </div>
            <div style={cardTitleStyle}>{item.title}</div>
            <div style={cardDescStyle}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>

    </section>


    </section>



  );
};

export default AnnualReturnFilingProcedure;
