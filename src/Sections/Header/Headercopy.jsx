const Header = () => {

return(
/ - <Home />
/gst - <CustomerService />
/customer-service - <CustomerService />
/team-collaboration - <TeamCollaboration />
/sass-landing - <SassLanding />
/sass-landing-two - <SassLandingTwo />
/app-landing - <AppLanding />
/corporate - <Corporate />
/crypto-wallet-one - <CryptoWalletOne />
/crypto-wallet-two - <CryptoWalletTwo />
/crypto-token - <CryptoToken />
/defi-landing - <DefiLanding />
/newsletter - <Newsletter />
/chatbot - <Chatbot />
/business - <Business />
/finance - <Finance />
/accounting - <Accounting />
/portfolio - <Portfolio />
/about-us - <AboutUs />
/our-services - <OurServices />
/pricing-plan - <PricingPlan />
/sign-in - <SignIn />
/sign-up - <SignUp />
/forgot-password - <ForgotPassword />
/terms - <Terms />
/privacy-policy - <PrivacyPolicy />
/blog - <Blog />
/blog-details - <BlogDetails />
/contact-us - <ContactUs />
* - <Error />
/ - <HomeOneFeatures />
/fast-performance - <FastPerformancePage />)
}


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
      {/* <section style={{ background: '#002145', color: '#fff', padding: '60px 20px',borderRadius:"0px 0px 25px 25px" }}>
        <div
          style={{
            maxWidth: '1200px',
            height:'600px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
      
          <div style={{ paddingRight: '20px',width:'1000px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px',color:"orange" }}>
              GST Registration inIndia
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Get your GST Number in a simple and hassle-free way. Start your GST Registration with FilingLab today and ensure smooth compliance for your business.
            </p>
          </div>

         
        </div>
      </section> */}
      <section style={{ background: 'rgb(255, 242, 222)', color: '#fff', padding: '30px 20px' }}>
      <div style={{ maxWidth: '100%', margin: '0 70px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left Content */}
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

What’s your design vibe?

Minimal & clean like Stripe?

Colorful gradients like Web3 landing pages?

Card-based & soft glassmorphism like modern dashboards?

Should the image be backgrounded or side-by-side?

Full-screen image background?

Left-right image/content layout?

Scroll-based animation?

What do you expect when you say "best template"?

Animations on scroll?

Glassmorphism / 3D card effect?

Page-wide interaction?

Sections that animate in + background shapes?