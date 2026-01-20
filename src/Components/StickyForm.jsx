// components/StickyForm.js
import React, { useEffect, useState } from "react";

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

const StickyForm = () => {
  const [isSticky, setSticky] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 150);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div style=
    {{
      width: "350px", 
      marginRight:"-50px",
      flexshrink: 0,
      position: "sticky",
      top: "100px",
    }}>
      <div 
        style={{
          // position: "relative",
          // top: isSticky ? "100px" : "700px",
          right: "40px",
          // right:"-20",
          width: "350px",
          zIndex: 9999, // Higher z-index
          background: "#fff",
          color: "#000",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: " #ed740a" }}>
          Request a Callback
        </h3>
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
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
    </div>
  </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "14px",
  // zIndex: 10000,
};

const buttonStyle = {
  backgroundColor: "#002145",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default StickyForm;
