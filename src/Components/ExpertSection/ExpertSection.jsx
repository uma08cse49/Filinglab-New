// import React from "react";
// import { FaStar, FaStarHalfAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// const ExpertSection = () => {
//   const boxStyle = {
//     backgroundColor: "#01447e",
//     color: "white",
//     padding: "24px",
//     borderRadius: "12px",
//     width: "100%",
//     maxWidth: "350px",
//     textAlign: "center",
//   };

//   const buttonStyle = {
//     padding: "10px 16px",
//     borderRadius: "8px",
//     fontWeight: "600",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "8px",
//     cursor: "pointer",
//   };

//   const sectionStyle = {
//     backgroundColor: "#f8f9fa",
//     padding: "40px 20px",
//     fontFamily: "sans-serif",
//   };

//   const headingStyle = {
//     fontSize: "24px",
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: "24px",
//     borderLeft: "4px solid #fbbf24",
//     paddingLeft: "12px",
//   };

//   const stepsContainer = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: "20px",
//     marginTop: "20px",
//     width: "100%",
//   };

//   const stepCard = {
//     textAlign: "center",
//     flex: "1",
//     minWidth: "180px",
//   };

//   const badgeStyle = {
//     position: "absolute",
//     top: "-10px",
//     right: "-10px",
//     backgroundColor: "#01447e",
//     color: "white",
//     fontSize: "12px",
//     padding: "4px 8px",
//     borderRadius: "999px",
//   };

  

//   return (
//     <section style={sectionStyle}>
//       <h2 style={headingStyle}>Talk to an Expert</h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
//         {/* Left Box */}
//         <div style={boxStyle}>
//           <img
//             src="https://via.placeholder.com/80"
//             alt="Expert"
//             style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "10px" }}
//           />
//           <p style={{ marginBottom: "8px" }}>
//             Expertise in <strong>FSSAI Central</strong>
//           </p>

//           {/* Rating */}
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px" }}>
//             <FaStar color="#facc15" />
//             <FaStar color="#facc15" />
//             <FaStar color="#facc15" />
//             <FaStar color="#facc15" />
//             <FaStarHalfAlt color="#facc15" />
//             <span style={{ marginLeft: "8px" }}>(4.8)</span>
//           </div>

//           {/* Buttons */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//             <button style={{ ...buttonStyle, backgroundColor: "white", color: "#01447e" }}>
//               <FaPhoneAlt /> Call Now
//             </button>
//             <button style={{ ...buttonStyle, backgroundColor: "#25d366", color: "white" }}>
//               <FaWhatsapp /> Chat With Us
//             </button>
//           </div>
//         </div>

//         {/* Right Steps */}
//         <div style={stepsContainer}>
//           {[
//             {
//               step: "01",
//               title: "Enquiry Form",
//               desc: "Among Asia Top 100\nConsulting Firm",
//               icon: "📝",
//             },
//             {
//               step: "02",
//               title: "Get Consultation",
//               desc: "Lowest Fees\n100,000+ Clients",
//               icon: "👥",
//             },
//             {
//               step: "03",
//               title: "Service Delivery",
//               desc: "4.9 Customer Rating\n50+ Offices",
//               icon: "🚚",
//             },
//           ].map((item, idx) => (
//             <div key={idx} style={stepCard}>
//               <div style={{ position: "relative", display: "inline-block", marginBottom: "10px" }}>
//                 <div
//                   style={{
//                     width: "64px",
//                     height: "64px",
//                     backgroundColor: "#f1f5f9",
//                     borderRadius: "12px",
//                     fontSize: "28px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     margin: "0 auto",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <span style={badgeStyle}>{item.step}</span>
//               </div>
//               <h4 style={{ color: "#01447e", fontWeight: "600", fontSize: "16px", marginBottom: "6px" }}>
//                 {item.title}
//               </h4>
//               <p style={{ whiteSpace: "pre-line", color: "#555", fontSize: "14px" }}>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpertSection;


import React from "react";
import { FaStar, FaStarHalfAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ExpertSection = () => {
  const sectionStyle = {
    backgroundColor: "#f8f9fa",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "24px",
    borderLeft: "4px solid #fbbf24",
    paddingLeft: "12px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
  };

  const expertBoxStyle = {
    backgroundColor: "#01447e",
    color: "white",
    padding: "24px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "350px",
    textAlign: "center",
    flex: "1 1 300px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const stepsContainer = {
    display: "flex",
    flex: "2 1 500px",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
  };

  const stepCard = {
    textAlign: "center",
    flex: "1",
    minWidth: "150px",
  };

  const badgeStyle = {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "#01447e",
    color: "white",
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "999px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Talk to an Expert</h2>

      <div style={containerStyle}>
        {/* Expert Box */}
        <div style={expertBoxStyle}>
          <img
            src="https://via.placeholder.com/80"
            alt="Expert"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "10px",
              alignItems: "left",
            }}
          />
          <p style={{ marginBottom: "8px", fontWeight: "bold" }}>Expert</p>
          <p style={{ marginBottom: "8px" }}>
            Expertise in <strong>FSSAI Central</strong>
          </p>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <FaStar color="#facc15" />
            <FaStar color="#facc15" />
            <FaStar color="#facc15" />
            <FaStar color="#facc15" />
            <FaStarHalfAlt color="#facc15" />
            <span style={{ marginLeft: "8px" }}>(4.8)</span>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap" }}>
            <button style={{ ...buttonStyle, backgroundColor: "white", color: "#01447e" }}>
              <FaPhoneAlt /> Call Now
            </button>
            <button style={{ ...buttonStyle, backgroundColor: "#25d366", color: "white" }}>
              <FaWhatsapp /> Chat With Us
            </button>
          </div>
        </div>

        {/* Steps */}
        <div style={stepsContainer}>
          {[
            {
              step: "01",
              title: "Enquiry Form",
              desc: "Among Asia Top 100\nConsulting Firm",
              icon: "📝",
            },
            

            {
              step: "02",
              title: "Get Consultation",
              desc: "Lowest Fees\n100,000+ Clients",
              icon: "👥",
            },
            {
              step: "03",
              title: "Service Delivery",
              desc: "4.9 Customer Rating\n50+ Offices",
              icon: "🚚",
            },
          ].map((item, index) => (
            <div key={index} style={stepCard}>
              <div style={{ position: "relative", display: "inline-block", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "12px",
                    fontSize: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  {item.icon}
                </div>
                <span style={badgeStyle}>{item.step}</span>
              </div>
              <h4 style={{ color: "#01447e", fontWeight: "600", fontSize: "16px", marginBottom: "6px" }}>
                {item.title}
              </h4>
              <p style={{ whiteSpace: "pre-line", color: "#555", fontSize: "14px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
