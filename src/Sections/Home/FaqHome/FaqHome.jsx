import { useEffect, useRef, useState } from "react";
import HomeFaqStyleWrapper from "./FaqHome.style";
import { GoArrowRight } from "react-icons/go";
import { faqData } from "../../../assets/data/HomeData/FaqData";
import ShapeMsgImage from "../../../assets/images/icons/shape-msg.svg";
import SmsTrackingImage from "../../../assets/images/icons/sms-tracking.svg";

const dataLists = [
  {
    title: "Pvt Ltd Company Registration",
    color: "white",
    items: [
      "DSC - 2 Nos. (2yrs validity)",
      "Director Identification Number - 2 Nos.",
      "Name Approval for Company",
      "Incorporation of Pvt Ltd Company",
      "PAN & TAN for the Company",
      
    ],
  },
  {
    title: "LLP Registration Online",
    color: "white",
    items: [
      "DSC - 2 Nos. (2yrs validity)",
      "DPIN - 2 Nos.",
      "Name Approval for LLP",
      "Preparation of LLP Agreement",
      "Incorporation of LLP",
      "Form-3 Filing",
      "PAN & TAN for the LLP",
    ],
  },
  {
    title: "Sole Proprietorship Registration",
    color: "white",
    items: [
      "MSME Registration Certificate",
      "GST Registration Certificate",
      "Current Account Opening - ICICI Bank",
    ],
  },
];

const FaqHome = () => {
  const faqSectionRef = useRef(null);
  const rotateIconRef = useRef(null);
  const rotateIconRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!faqSectionRef.current || !rotateIconRef.current || !rotateIconRef2.current) return;

      const y = window.scrollY;
      const x = faqSectionRef.current.offsetTop - 200;
      let animationValue = (y - x) / 4;
      const animationStop = 45;
      animationValue = Math.max(0, Math.min(animationValue, animationStop));
      rotateIconRef.current.style.transform =
        y > x ? `rotate(-${animationValue}deg)` : `rotate(${animationValue}deg)`;

      const x2 = faqSectionRef.current.offsetTop + 400;
      let animationValue2 = (y - x2) / 4;
      animationValue2 = Math.max(0, Math.min(animationValue2, animationStop));
      rotateIconRef2.current.style.transform =
        y > x ? `rotate(-${animationValue2}deg)` : `rotate(${animationValue2}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeFaqStyleWrapper ref={faqSectionRef}>
      {/* <div className="container" style={{marginBottom:"40px"}}>
        <div className="row faq-boxes">
          {dataLists.map((box, index) => (
            <div key={index} className="faq-box" style={{ backgroundColor: box.color }}>
              <h2 className="faq-heading">{box.title}</h2>
              <div className="faq-content">
                <ul>
                  {box.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <button className="apply-button">Apply</button>
            </div>
          ))}
        </div>

        
        
      </div> */}
    </HomeFaqStyleWrapper>
  );
};

export default FaqHome;
