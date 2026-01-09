import React from "react";
// import fssaiImage from "../assets/fssai-steps.png"; // adjust path based on your project
import Documents from "../../../assets/images/docu.png"; 
import styled from "styled-components";

const SPRegistrationProcedure = () => {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const Ul = styled.ul`
  padding-left: 20px;
list-style-type: none;
  li {
    margin-bottom: 15px;
    line-height: 1.6;
    position: relative;
    color: #002145
  }

  li::before {
    content: "✔";
    color: #ed740a;
    position: absolute;
    left: -20px;
    font-weight: bold;
  }
`;


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

  const Heading = styled.h2`
    font-size: 2rem;
    color: #ed740a;
    text-align: center;
    margin-bottom: 40px;
  `;

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
      title: "Income Tax Filing Requirements",
      desc: "A sole proprietorship is taxed on the net income of the sole proprietor after making all the deductions. Business income is the sole proprietor's personal income, which they report on their personal income tax returns.",
    },
    {
      icon: "⚙️",
      title: "Self-Employment Tax Responsibility",
      desc: "If the owner is the only employee in the sole proprietorship, self-employment tax should be filed. This tax covers contributions to social security and Medicare for the self-employed to ensure they manage these benefits despite working independently and not on anyone's payroll."
    },
    {
      icon: "👥",
      title: "Employment Tax & TDS Obligations",
      desc: "For sole proprietors with employees, it's crucial to file timely TDS returns and ensure on-time tax deductions and deposits. This responsibility fulfils legal requirements and demonstrates your commitment to compliance and good business practices.",
    },
  ];


  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Step-by-Step Sole Proprietorship Firm Registration Process</h2>
        <p style={subHeadingStyle}>
         The step-by-step guide for sole proprietorship firm registration process is as follows:
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
                <div style={stepTitleStyle}>Business Name Selection</div>
                <div style={stepTextStyle}>
                 The first step is to choose a legitimate business activity, food & beverage, restaurants, cafes, law firms, accounting and tax consultancies, and service-aligned businesses. Our associates will help you determine a well-suited economic activity.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>2.</div>
              <div>
                <div style={stepTitleStyle}>Obtaining PAN and Aadhar Card</div>
                <div style={stepTextStyle}>
                  The next step in the sole proprietorship registration process is obtaining the PAN card and Aadhar card. These documents are not just IDs, but essential for business registration. It's crucial to ensure you have valid PAN and Aadhar cards, as they must be produced at the time of business registration. At Corpbiz, we help you in getting the same.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>3.</div>
              <div>
                <div style={stepTitleStyle}>Bank Account Opening</div>
                <div style={stepTextStyle}>
                The next important step involves opening a separate bank account in the business name to facilitate business transactions. A separate bank account ensures transparency, facilitates financial clarity, reflects professionalism, and helps manage tax compliances. Our trusted Corpbiz experts help with bank account opening.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>4.</div>
              <div>
                <div style={stepTitleStyle}>Acquiring Licenses & Registrations</div>
                <div style={stepTextStyle}>
                The next step in this process is to acquire the necessary licenses and registrations. Depending on their business needs, sole proprietors must apply for licenses, including Shop and Establishment Act licenses, GST registration, and other trade-specific licenses.
                </div>
              </div>
            </div>

            <div style={stepStyle}>
              <div style={stepNumberStyle}>5.</div>
              <div>
                <div style={stepTitleStyle}>Maintaining Records</div>
                <div style={stepTextStyle}>
                The final but equally important step in this process is the meticulous maintenance of business records. This practice not only facilitates compliance and fulfils legal and regulatory requirements but also provides a sense of security and control over your business operations. Our seasoned professionals help you maintain the records effortlessly.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <Heading>Top Industries that Prefer Sole Proprietorship Registration</Heading>
  
        <p>
          Key Industries
        </p>
  
        {/* <SubHeading>Checklist for the Private Limited Company Registration:</SubHeading> */}
        <Ul>
          <li><strong>Freelance & Creative Services: </strong>Freelance writers, graphic designers, painters, and other artists prefer to work independently with flexibility and creative control.</li>
          
          <li><strong>Healthcare & Wellness: </strong>Doctors and therapists prefer to manage their professional practices independently and choose sole proprietorship.</li>
          
          <li><strong>Legal & Consulting Services: </strong>Our finance analyst will help you make income statements, account books, balance sheets, and expense reports to file Form AOC-4 as part of your yearly accounting obligation.</li>
          
          <li><strong>Retail & E-Commerce:</strong>Online sellers and small shop owners prefer sole proprietorships to manage their businesses hassle-free and for lower compliance needs and operational costs.</li>
          
          <li><strong>Real Estate:</strong>Real estate sector prefers sole proprietorship for the ease of doing business professionally, zero management interference, and high profits.</li>

          <li><strong>Manufacturing: </strong>Small-scale manufacturers opt for sole proprietorships because they give complete control over production handling and are easy to manage.</li>
          
          <li><strong>Financial Services: </strong>Financial planners and advisors who work independently prefer sole proprietorship as it facilitates customized services delivered professionally.</li>

          <li><strong>Travel & Tourism: </strong>Travel agents and tour operators choose sole proprietorships to deliver customized services to their clients and manage all bookings without any external interference.</li>
        </Ul>

      <Heading>Other Significant Industries</Heading>
    
        {/* <SubHeading>Checklist for the Private Limited Company Registration:</SubHeading> */}
        <Ul>
          <li><strong>Home & Personal Care: </strong>Handymen, landscapers, and other personal care professionals prefer this business type because it ensures the simple and easy delivery of services.</li>

          <li><strong>Technology & IT Services: </strong>IT specialists and tech consultants working independently choose this business type to exercise control over their projects and focus on their clients.</li>

          <li><strong>Food & Beverage: </strong>Small food businesses and food truck owners prefer sole proprietorship, allowing them to manage their businesses according to their specific needs.</li>

          <li><strong>Education & Tutoring: </strong>Coaching institutes and independent tutors prefer this business structure because it allows them to manage their coaching services more effectively.</li>

          <li><strong>Event Planning & Entertainment: </strong>Event planners and performers choose this type of business structure to ensure they manage their events without the hassle of external control.</li>

          <li><strong>Fitness and Sports: </strong>Personal trainers and fitness coaches prefer to work independently without management worries to focus on their clients and work schedules.</li>

          <li><strong>Photography & Videography: </strong>Freelance photographers and videographers choose the freedom of creative expression to manage events and schedules with a sole proprietorship.</li>

          <li><strong>Pet Services: </strong>Professional pet groomers, sitters, and walkers prefer sole proprietorships as they offer them the flexibility to work and independence to manage their services.</li>
        
        </Ul>


      
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

export default SPRegistrationProcedure;
