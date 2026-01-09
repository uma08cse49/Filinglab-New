import React, { useState, useEffect } from "react";
import CustomerServiceBannerStyle from "./CustomerServiceBanner.style";

import heroImgMen1 from "../../../assets/images/customer-service/hero-img-men-1.png";
import heroImgMen2 from "../../../assets/images/customer-service/hero-img-men-2.png";
import likeIcon from "../../../assets/images/customer-service/like.png";
import checkCoinIcon from "../../../assets/images/customer-service/check-coin.png";
import index2HeroImg from "../../../assets/images/customer-service/index2-hero-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Array containing all states and union territories of India
const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi", "Puducherry", "Jammu & Kashmir", "Ladakh"
];

const CustomerServiceBanner = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CustomerServiceBannerStyle className="hero-section2">
     
      <section style={{ background: 'rgb(239, 239, 239)', color: '#fff', padding: '30px 20px' }}>
      <div style={{ maxWidth: '100%', margin: '0 70px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <div style={{ flex: '1 1 500px', paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px',color:'  #ed740a' }}>
            GST Registration Online  Apply Now!
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6',color:'black' }}>
            Get your GST Number in a simple and hassle-free way. Start your GST Registration with Filing Lab today and ensure smooth compliance for your business.
          </p>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.6',color:'black' }}>
            <ul>
              <li></li>
              <li></li>
            </ul>

          </div>
        </div>

        {/* Right Form */}
        <div style={{ flex: '1 1 300px', background: '#fff', color: '#000', borderRadius: '8px', padding: '30px', marginTop: '20px',marginLeft:"100px" }}>
          <h3 style={{ marginBottom: '20px', color:"#ed740a" }}>Request a Callback</h3>
          <form>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="tel" placeholder="Mobile Number" style={inputStyle} />
            <select style={{ ...inputStyle, position: "relative", zIndex: 10000,overflow:'hidden'}}>
          <option value="">Select State</option>
          {statesOfIndia.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </div>
      </div>
    </section>
    </CustomerServiceBannerStyle>
  );
};


const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#002145',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
};



export default CustomerServiceBanner;
