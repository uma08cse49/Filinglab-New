import React from "react";
// import fssaiImage from "../assets/fssai-steps.png"; // adjust path based on your project
import Documents from "../../../assets/images/docu.png"; 

const  RoleOfDirectorsandStakholders = () => {
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

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  };

  const nestedItemsStyle = {
    marginLeft: '38px', // indent under "Address Proof"
    marginTop: '-8px',
    marginBottom: '8px',
  };

return(
    <section style={sectionStyle1}>
        <h2 style={titleStyle}>Role of Directors and Shareholders in a Private Limited Company</h2>
        <p style={subtitleStyle}>
        Directors and shareholders play a major role in the governance and decision-making processes of a private limited company. The directors are chosen by the shareholders and are responsible for managing day-to-day operations, creating strategic plans, and ensuring legal compliance.
        </p>

        <div style={gridStyle1}>
            {/* Card 1 */}
            <div style={card1Style}>
            <div style={cardTitleStyle}>
            Shareholders
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Ownership vs Management : </strong>They own the company through their investment in the shares</span>
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Decision Making :</strong>They vote on major decisions like mergers & acquisitions.</span>
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Liability : </strong>Liable only for the investment in shares</span>
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Involvement :</strong> Limited involvement in daily operations</span>
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Appointment :</strong> They appoint the directors</span>
            </div>
            
            {/* Add more items here */}
            </div>

            {/* Card 2 */}
        <div style={card2Style}>
            <div style={cardTitleStyle}>
            Directors
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Ownership vs Management :</strong> They are responsible for managing daily operations</span>
            </div>
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Decision Making :</strong> They handle daily business decisions and strategy</span>
            </div>
                    
            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Liability : </strong> Liable for mismanagement or legal breaches
                </span>
            </div>


            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Involvement :  </strong> Actively involved in managing the company
                </span>
            </div>

            <div style={itemStyle}>
                <span style={iconStyle}>✔</span>
                <span><strong>Appointment :  </strong> Appointed to manage and represent company’s interests
                </span>
            </div>

         </div>
                
            
            {/* Add more items here */}
            </div>
    </section>
    
    );
};

export default RoleOfDirectorsandStakholders;