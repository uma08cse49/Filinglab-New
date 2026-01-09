import React from "react";
// import fssaiImage from "../assets/fssai-steps.png"; // adjust path based on your project
import Documents from "../../../assets/images/docu.png"; 

const  CompanyRegistrationFilingProcedure = () => {
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

  const data = [
    {
      icon: "🏢",
      title: "Company Limited by Shares",
      desc: "A company limited by shares is a separate legal entity from its shareholders and directors. It can enter into contracts as a business, own assets in its business name, and function independently. The word 'limited' here signifies the security of its shareholders, who are not liable for any debts and responsibilities of the organization. Their personal assets are not at risk, providing a sense of reassurance and safety.",
    },
    {
      icon: "⚙️",
      title: "Company Limited by Guarantee",
      desc: "A company limited by guarantee does not comprise shareholders or have share capital. It is supported by guarantors who agree to pay a fixed amount towards the business debts if the need arises. The profits are reinvested in the business to facilitate and promote the organization's non-profit goals. Usually, the guarantors do not get any share in the profits.",
    },
    {
      icon: "👥",
      title: "Unlimited Company",
      desc: "An unlimited company is defined under Section 2(92) of the Companies Act of 2013. This type of company passes unlimited liability to its shareholders. Unlimited companies have unlimited liabilities, and the company can use its assets to clear its debts at the time of dissolution.",
    },
  ];


  return (
    <section style={sectionStyle}>

      
      <section style={sectionStyle1}>
      <h2 style={titleStyle}>Documents Needed to File SPICe+ (INC-32)</h2>
      <p style={subtitleStyle}>
      Documents needed to be filed with SPICe (INC-32) for a private limited company registration:
      </p>

      <div style={gridStyle1}>
        {/* Card 1 */}
        <div style={card1Style}>
          <div style={cardTitleStyle}>
          When Directors and Subscribers are Indian Nationals:
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>PAN Card</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Aadhar Card</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Passport-size photographs</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Director’s Consent - Signed consent letter accepting their willingness to become a director and confirming their appointment</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Subscriber’s Consent - Signed consent letter accepting their willingness to become a shareholder in the company</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Identity Proof - Government-issued ID proof - Driving license, voter card (in case Aadhar is unavailable)</span>
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Registered Office Proof - Rental agreement or Ownership Deed (like sale deed)</span>
          </div>

          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>No Objection Certificate - NOC from the owner if the office is a rented property</span>
          </div>

          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Copies of Utility Bills - Electricity, water, gas, etc., not older than two months</span>
          </div>

          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Company Name reservation - In case the SPICe form is not being used, a copy of the name reservation approval (RUN form)</span>
          </div>

          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Digital Signature Certificate - DSC of all directors and subscribers to fill out online forms</span>
          </div>
          {/* Add more items here */}
        </div>

        {/* Card 2 */}
        <div style={card2Style}>
          <div style={cardTitleStyle}>
          When Directors and Subscribers are Foreign Nationals:
          </div>
          <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Passport</span>
          </div>
          {/* <div style={itemStyle}>
            <span style={iconStyle}>✔</span>
            <span>Address Proof:</span> </div>
                <li> Driving License</li>
                <li>Residence Card</li>
                <li>Bank Statement</li> */}
                


            <div style={containerStyle}>
                <div style={listItemStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Address Proof:</span>
                </div>
                <div style={nestedItemsStyle}>
                    <span style={iconStyle}>✔</span>
                    <span> Driving License</span>
                </div>
                <div style={nestedItemsStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Residence Card</span>
                </div>
                <div style={nestedItemsStyle}>
                    <span style={iconStyle}>✔</span>
                    <span>Bank Statement</span>
                </div>
            </div>
            
        
          {/* Add more items here */}
        </div>
      </div>

      <section style={sectionStyle}>
      <h2 style={titleStyle}>Choosing the Right Business Structure for your Company</h2>
      <p style={subtitleStyle}>
      Choosing the right business registration structure is a key step towards unlocking the potential for growth and success in your business. It's not just about tax liabilities, legal regulations, funding access, and operational flexibility. These factors, when managed effectively, can pave the way for a bright future for your business. Depending on your business needs, you have three types of private limited company options available:
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

export default CompanyRegistrationFilingProcedure;
