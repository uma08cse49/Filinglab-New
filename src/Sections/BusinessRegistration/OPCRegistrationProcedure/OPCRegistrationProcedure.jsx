import React from "react";
// import fssaiImage from "../assets/fssai-steps.png"; // adjust path based on your project
import Documents from "../../../assets/images/docu.png"; 

const OPCRegistrationProcedure = () => {
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
      title: "Nominee Name in MoA",
      desc: "As per The Companies (Incorporation) Amendment Rules, 2023, introduced by the MCA, the shareholder of the One Person Company (OPC) is now required to mention the nominee’s name in the Memorandum of Association (MoA) of the OPC.",
    },
    {
      icon: "⚙️",
      title: "Declaration of Nominee- Form INC 32",
      desc: "Further, the Rules of 2023 ask the applicants for the declaration of the nominee's name and details directly via Form INC-32 (SPICe+)."
    },
    {
      icon: "👥",
      title: "Submission of e-Memorandum",
      desc: "The Companies (Registration Offices and Fees) Rules, 2014 allows the applicant submit the e-Memorandum and AoA along with the application form at the office of the Registrar of the companies.",
    },
  ];


  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Step-by-Step Procedure to Register One Person Company</h2>
        <p style={subHeadingStyle}>
          The step-by-step procedure required to register one person company in India is as defined below:
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
                <div style={stepTitleStyle}>Obtaining a Digital Signature Certificate (DSC)</div>
                <div style={stepTextStyle}>
                  The first step requires the applicants to obtain a Digital Signature Certificate (DSC) for the proposed director. DSC is used to electronically sign all documents related to the incorporation of the OPC.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>2.</div>
              <div>
                <div style={stepTitleStyle}>Obtaining Director Identification Number (DIN)</div>
                <div style={stepTextStyle}>
                  The next step requires the applicants to obtain a Director Identification Number (DIN) for the proposed director of the company. It can be done by filing the SPICe+ form through the Ministry of Corporate Affairs (MCA).
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>3.</div>
              <div>
                <div style={stepTitleStyle}>Reserving the Name for the OPC</div>
                <div style={stepTextStyle}>
                The next step requires the applicants to reserve a name for the OPC via the submission of SPICe+ form directly on the Ministry of Corporate Affairs (MCA) portal. However, one must be careful in choosing a distinct name that does not violate any existing company or trademark.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>4.</div>
              <div>
                <div style={stepTitleStyle}>Preparation of MoA and AoA</div>
                <div style={stepTextStyle}>
                The next step requires the applicants to draft the Memorandum of Association (MoA- Form INC 33) and Articles of Association (AoA- Form INC 34) outlining the company’s objectives, structure, rules and internal regulations.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>5.</div>
              <div>
                <div style={stepTitleStyle}>Submission of Forms</div>
                <div style={stepTextStyle}>
                The applicant is required to make submission of duly filled forms on the Ministry of Corporate Affairs (MCA) portal. Further, the applicants are also required to attach all the relevant documents with the SPICe+ form as mandated by the MCA.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>5.</div>
              <div>
                <div style={stepTitleStyle}>Certificate of Incorporation</div>
                <div style={stepTextStyle}>
                After the approval of the Registrar of Companies (ROC) and verification of the mandated compliances, the ROC issues the Certificate of Incorporation, signifying the completion of the one person company registration process.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <section style={sectionStyle1}>
      
      <section style={sectionStyle}>
      <h2 style={titleStyle}>Updates Regulating the Formation of One Person Company</h2>
      <p style={subtitleStyle}>
        Have a look over the recent updates regulating the formation of one person companies in India, as discussed below:
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

export default OPCRegistrationProcedure;
