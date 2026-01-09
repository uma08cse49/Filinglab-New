import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Sample styling container
const Section = styled.section`
  background: #efefef;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px auto;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  border-bottom: 3px solid #ed740a;
`;

const Left = styled.div`
  flex: 1 1 500px;
  padding-right: 20px;
`;

const Right = styled.div`
  flex: 1 1 300px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 100px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #002145;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
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

const TaxRegistrationBanner = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.pageYOffset > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className={isSticky ? "sticky" : ""}>
      <Left>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: " #ed740a" }}>
        TDS  <span style={{color:'#002145'}}>Return Filing</span>
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "black" }}>
TDS Return Filing        </p>
        
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

export default TaxRegistrationBanner;
