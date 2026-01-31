import { useState } from "react";
import HomePricingStyleWrapper from "./HomePricing.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

import PricingShape1Image from "../../../assets/images/shape/pricing-shape1.png";
import PricingShape2Image from "../../../assets/images/shape/pricing-shape2.png";
import PricingShape3Image from "../../../assets/images/shape/pricing-shape3.png";
import Ellipse1Image from "../../../assets/images/shape/ellipse1.png";
import Ellipse2Image from "../../../assets/images/shape/ellipse2.png";
import imageleft1 from "../../../assets/images/segments/left/image-1.png";
import imageleft2 from "../../../assets/images/segments/left/price.png";
import imageleft3 from "../../../assets/images/segments/left/image-3.png";
import imageright1 from "../../../assets/images/segments/right/google.png";
import imageright2 from "../../../assets/images/segments/right/clock1.png";
import imageright3 from "../../../assets/images/segments/right/compilance.png";
// import middle from "../../../assets/images/segments/middle/large-image.PNG";
import middle from "../../../assets/images/segments/middle/img31.png";

const HomePricing = () => {
  const leftImages = [
    { src: imageleft1, title: "300+ Services", subtitle: "Relax at home, we take care of Tax/Compliance" },
    { src: imageleft2, title: "Reasonable", subtitle: "Low price with professional service delivery" },
    { src: imageleft3, title: "Customer Satisfaction", subtitle: "Prioritize client satisfaction and expectations at every step" }
  ];

  const rightImages = [
    { src: imageright1, title: "Google Reviews", subtitle: "99% of Customers rated us 5* in Google" },
    { src: imageright2, title: "Turn Around Time", subtitle: "99% of services will be delivered on within timeline" },
    { src: imageright3, title: "Compliance", subtitle: "We manage 99.9% of compliance within due date" }
  ];

  const middleImage = middle;

  return (
    <HomePricingStyleWrapper style={{marginBottom:"20px"}}>
      <div className="bg-shape">
        <div className="shape-img img-1">
          <ScrollAnimate delay={200}>
            <img src={PricingShape1Image} alt="shape1" />
          </ScrollAnimate>
        </div>
        <div className="shape-img img-2">
          <ScrollAnimate delay={200}>
            <img src={PricingShape2Image} alt="shape2" />
          </ScrollAnimate>
        </div>
        <div className="shape-img img-3">
          <ScrollAnimate delay={200}>
            <img src={PricingShape3Image} alt="shape3" />
          </ScrollAnimate>
        </div>
        <div className="shape-img img-4">
          <ScrollAnimate delay={200}>
            <img src={Ellipse1Image} alt="ellipse1" />
          </ScrollAnimate>
        </div>
        <div className="shape-img img-5">
          <ScrollAnimate delay={200}>
            <img src={Ellipse2Image} alt="ellipse2" />
          </ScrollAnimate>
        </div>
      </div>

      {/* Heading & Quote at the Top, Adjusted Higher */}
      <div className="container flex-col items-center text-center pb-8" style={{ marginTop: "-50px" }}>
        <h2 className="text-lg" style={{fontSize:"20px",color: "#cfb127"}}>Why Choose Us</h2>
        <h1 style={{color:"#000000",fontSize:'40px'}}>What makes Us <span className="mb-2" style={{color:"#cf2c27",fontSize:'65px'}}>Different</span></h1>
      </div>

      {/* Below Segment with Three Inner Segments */}
      <div className="container col-12 flex justify-center gap-8 px-8 mt-8">
        {/* Left Segment (Three Stacked Boxes) */}
        <div className="flex-col gap-4 col-4">
          {leftImages.map((img, index) => (
            <div key={index} className="p-2 rounded-lg text-center">
              <img src={img.src} alt={`Left ${index + 1}`} className="w-28 h-28 mx-auto" />
              <p style={{color:"#000000",fontSize:'25px',fontWeight:'bolder'}}>{img.title}</p>
              <p className="text-sm text-black">{img.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Middle Segment (Single Large Image) */}
        <div className="flex items-center col-4 middle-image">
          <img src={middleImage} alt="Middle" className="w-48 h-[400px] rounded-lg" />
        </div>

        {/* Right Segment (Three Stacked Boxes) */}
        <div className="flex-col gap-4 col-4">
          {rightImages.map((img, index) => (
            <div key={index} className="p-2 rounded-lg text-center">
              <img src={img.src} alt={`Right ${index + 1}`} className="w-28 h-28 mx-auto" />
              <p style={{color:"#000000",fontSize:'25px',fontWeight:'bolder'}}>{img.title}</p>
              <p className="text-sm text-black">{img.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .middle-image {
            display: none;
          }

          .col-4 {
            width: 100%;
            margin-bottom: 20px;
          }
          .container h2{
          font-size:20px:
          }
        }
      `}</style>
    </HomePricingStyleWrapper>
  );
};

export default HomePricing;
