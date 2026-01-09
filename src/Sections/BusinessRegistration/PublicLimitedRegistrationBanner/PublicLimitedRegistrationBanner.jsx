import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import src\assets\images\handshake.png
import handshake from "../../../assets/images/icons/handshake.png";
import expertadvisoricon from "../../../assets/images/icons/expertadvisoricon.png";
import branchofficeicon from "../../../assets/images/icons/branchofficeicon.png";


// Sample styling container
// const Section = styled.section`
//   background: #efefef;
//   padding: 30px 50px;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin: 80px auto;
//   width: 100%;
//   border-radius: 0px 0px 20px 20px;
//   border-bottom: 3px solid #ed740a;
// `;

// const Left = styled.div`
//   flex: 1 1 500px;
//   padding-right: 20px;
// `;

// const Right = styled.div`
//   flex: 1 1 300px;
//   background: #fff;
//   padding: 30px;
//   border-radius: 8px;
//   margin-top: 20px;
//   margin-left: 100px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   background-color: #002145;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-weight: bold;
// `;

const Section = styled.section`
  background: #f6f6f6;
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  border-bottom: 3px solid #ed740a;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  flex: 1 1 600px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ed740a;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }

  li {
    font-size: 1rem;
    color: #333;
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: "✔";
    color: #2ecc71;
    position: absolute;
    left: 0;
    top: 0;
  }

  .cta-button {
    background-color: #5a67d8;
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-bottom: 30px;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 20px;
    align-items: start;
    justify-content: start;
    // margin-left: 1rem !important;
  }

  .stat-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.95rem;
    color: #333;
    
  }

  .stat-box img {
  width: 50px;
  height: auto;
  flex-shrink;
    }

  .stat-box span {
    font-size: 1.0rem;
    font-weight: bold;
    color: #002145;
  }
`;

const Right = styled.div`
  flex: 1 1 350px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
  max-width: 400px;

  h3 {
    color: #002145;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #ed740a;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;


const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi", "Puducherry", "Jammu & Kashmir", "Ladakh"
];

const PublicLimitedRegistrationBanner = ({ city }) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.pageYOffset > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className={isSticky ? "sticky" : ""}>
      <Left>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#ed740a" }}>
        Public Limited Company Registration 
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "black" }}>
        "Get Expert Public Limited Company Registration at 50% Off!"
        </p>
        <p>Want to register a Public Limited Company online in India but confused about the steps? No worries — at [Your Brand Name], we simplify the entire process for you. Our team has assisted 2500+ entrepreneurs in successfully registering their public limited companies since 2018.</p>
        {/* <p>What You Get with Our Package</p> */}
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "black", marginTop: "15px" }}>
          <li>10+ Years of Experience</li>
          <li>99% SLA Delivery</li>
          <li>400 + In-House CAs, CS & Lawyers</li>
          <li>10,000+ Pin codes Network in India</li>
        </ul>

        <div className="stats">
          <div className="stat-box">
            <img src={handshake} alt="Handshake" />
            <span>100000+</span>
            Happy Customers
          </div>
          <div className="stat-box">
            <img src={expertadvisoricon} alt="expertadvisoricon" />
            <span>3500+</span>
            Expert Advisors
          </div>
          <div className="stat-box">
          <img src={branchofficeicon} alt="expertadvisoricon" />
            <span>50+</span>
            Branch Offices
          </div>
          </div>
      </Left>

      <Right>
        <h3 style={{ marginBottom: "20px", color: "#ed740a" }}>Request a Callback</h3>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Mobile Number" />
          <Select>
            <option value="">Select State</option>
            {statesOfIndia.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
          <Button type="submit">Submit</Button>
        </form>
      </Right>
    </Section>
  );
};

export default PublicLimitedRegistrationBanner;