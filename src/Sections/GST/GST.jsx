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
      <section style={{ background: '#002145', color: '#fff', padding: '60px 20px',borderRadius:"0px 0px 25px 25px" }}>
        <div
          style={{
            maxWidth: '1200px',
            height:'600px',
            margin: '0 auto',
            // display: 'flex',
            // flexWrap: 'wrap',
            // alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          {/* Left Content */}
          <div style={{ paddingRight: '20px',width:'1000px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px',color:"orange" }}>
              GST Registration inIndia
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Get your GST Number in a simple and hassle-free way. Start your GST Registration with FilingLab today and ensure smooth compliance for your business.
            </p>
          </div>

         
        </div>
      </section>
    </CustomerServiceBannerStyle>
  );
};



export default CustomerServiceBanner;
