// import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle } from "lucide-react";

// export default function WhyChooseUs() {
//   const features = [
//     "Affordable",
//     "Compliance Ensured",
//     "Simplified Process",
//     "On-time Service",
//     "Instant Response",
//     "Industry Experts",
//   ];

//   return (
//     <div className="bg-blue-50 p-10 flex flex-col md:flex-row items-center">
//       {/* Left Side: Image & Ratings */}
//       <div className="relative flex flex-col items-center">
//         <img
//           src="/your-image.jpg"
//           alt="Professional"
//           className="w-64 md:w-72 rounded-lg shadow-lg"
//         />
//         <div className="absolute bottom-0 left-5 bg-white p-4 rounded-xl shadow-md">
//           <p className="text-lg font-bold">100+ Ratings</p>
//           <p className="text-sm text-gray-600">Trusted by <span className="font-semibold">20,000+</span> clients</p>
//         </div>
//       </div>

//       {/* Right Side: Text & Features */}
//       <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
//         <h2 className="text-2xl md:text-3xl font-bold text-orange-500">WHY CHOOSE US</h2>
//         <p className="text-gray-600 mt-2">
//           Our All-In-One Platform And Team Of Experts Will Help Direct You In The
//           Right Path And Ensure That Your Business Starts The Right Way In Record Time.
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//           {features.map((feature, index) => (
//             <Card key={index} className="flex items-center p-3">
//               <CheckCircle className="text-orange-500 mr-2" />
//               <CardContent className="p-0">{feature}</CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Clients from "../../assets/images/client-worldwide.png"
import Rating from "../../assets/images/google-customer-rating.png"
import Customercare from "../../assets/images/customercare.png"
import team from "../../assets/images/team.png"


const WhyChooseFilingLab = () => {
  const containerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "sans-serif",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const subHeadingStyle = {
    fontSize: "18px",
    color: "#777",
    marginBottom: "40px",
  };

  const cardsWrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.08)",
    padding: "30px",
    width: "260px",
    textAlign: "center",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
    marginBottom: "15px",
  };

  const highlightText = {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "5px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#222",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Why Choose FilingLab for Your Compliance Needs?</h2>
      <p style={subHeadingStyle}>
        We make business compliance smooth, affordable, and reliable.
      </p>
      <div style={cardsWrapper}>
        <div style={cardStyle}>
          <img src = {Clients} alt="Clients" style={iconStyle} />
          <div style={{ ...highlightText, color: "#6C63FF" }}>50,000+</div>
          <div style={textStyle}>Clients Across India</div>
        </div>

        <div style={cardStyle}>
          <img src={Rating} alt="Rating" style={iconStyle} />
          <div style={{ ...highlightText, color: "#f4b400" }}>Rated 4.8+</div>
          <div style={textStyle}>By 30,000+ Customers</div>
        </div>

        <div style={cardStyle}>
          <img src={team} alt="Professionals" style={iconStyle} />
          <div style={{ ...highlightText, color: "red" }}>Top 5%</div>
          <div style={textStyle}>Compliance Experts</div>
        </div>

        <div style={cardStyle}>
          <img src={Customercare} alt="Support" style={iconStyle} />
          <div style={{ ...highlightText, color: "green" }}>100%</div>
          <div style={textStyle}>Satisfaction Guaranteed</div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFilingLab;