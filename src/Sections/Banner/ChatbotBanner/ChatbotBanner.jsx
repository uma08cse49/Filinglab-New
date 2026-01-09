import ChatbotBannerStyle from "./ChatbotBanner.style";

import HoggleIcon from "../../../assets/images/chatbot/hoggle-icon.svg";
import WebmVideo from "../../../assets/videos/animation.webm";
// import BannerVideo from "../../../assets/videos/chatbot-banner-video.mp4";
import BannerVideo from "../../../assets/videos/herobanner.mp4";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState, useEffect } from "react";



const services = [
  "Company Registrations",
  "GST Filing",
  "FSSAI License",
  "LLP Registration",
  "TDS Return Filing",
];



const ChatbotBanner = () => {
  
  const [visibleIndex, setVisibleIndex] = useState(0);

  const [index, setIndex] = useState(0);

  const headlines = ["Complaince", "Filings", "Regulatory Support"];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % services.length);
  //   }, 2000); // change text every 2 seconds

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleIndex]);

  return (
    <ChatbotBannerStyle className="v8banner-section chatbot-banner">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="v8banner-text chatbot-banner-text">
                <div className="cd-intro m-0 uig-animate-style">
                    <h1 className="cd-headline loading-bar banner-title">
                    {/* <h1 className="title">  */}
                      A Reliable Partner for Complete Business  <br />
                      {/* <span
                        className="cd-words-wrapper"
                      > */}
                      <span className="cd-words-wrapper" style={{color: "#ff6600ff" }}>
                        {/* <img src={HoggleIcon} alt="icon" /> */}
                        {headlines.map((headline, index) => (
                          <b
                            key={index}
                            className={
                              index === visibleIndex ? "is-visible" : "is-hidden"
                            }
                          >
                            {headline}
                          </b>
                        ))}
                      </span>
                    </h1>
                  </div>

            {/* <div className="cd-intro m-0">
              <h1 className="title">
                A Reliable Partner for Complete Business  <br />
                <span style={{color: "#ff6600ff" }}>
                  Compliance
                  <img src={HoggleIcon} alt="icon" />
                </span>
              </h1>
            </div> */}
            <p>
              FilingLab supports startups, SMEs, and established businesses with
              accurate registrations, timely tax filings, regulatory compliance, and
              ongoing statutory support — delivered with clarity and confidence.
            </p>
             {/* Bullet Points */}
              <div className="trust-points">
                <div className="point">
                  <FaAngleDoubleRight className="arrow-icon" />
                  <span>Trusted by Businesses Across India</span>
                </div>

                <div className="point">
                  <FaAngleDoubleRight className="arrow-icon" />
                  <span>On-Time Filings. Zero Compliance Delays.</span>
                </div>
              </div>


              {/* Search Bar */}
              <div className="search-box">
                <input
                  type="text"
                  value={services[index]}
                  readOnly
                />
                <button>Search</button>
              </div>
            {/* <form className="start-free-form">
              <input
                className="form-input"
                type="email"
                placeholder="Email address"
              />
              <input
                className="bg-blue-btn"
                type="submit"
                defaultValue="Start for free"
              />
            </form> */}
            <ul className="hero-content-list">
              <li>
                <div className="list-item">
                  <span className="iconify" data-icon="bi:check-lg" />
                  <p>Free 14-day trial</p>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <span className="iconify" data-icon="bi:check-lg" />
                  <p>No credit card required</p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollAnimate>
      </div>
      <div className="v8banner-video chatbot-banner-video">
        <div className="chatbot-banner-video-overlay">
          <ScrollAnimate delay={300}>
            <div className="banner-chat-section">
              <video loop autoPlay playsInline muted>
                {/* <source src={WebmVideo} type="video/webm" /> */}
              </video>

               <div className="chat-overlay">
                <div className="bot-message">Hello 👋 I’m FilingLab Bot</div>
                <div className="bot-message delay-1">How can I help you?</div>
                <div className="user-message delay-2">I want GST filing</div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
        <video loop autoPlay playsInline muted>
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>
    </ChatbotBannerStyle>
  );
};

export default ChatbotBanner;
