import { useEffect, useRef } from "react";
import HomeMarketingStyleWrapper from "./HomeMarketing.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TitleWithBadge from "../../../Components/Title/TitleWithBadge";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import CustomPieProgress from "../../../Components/CustomPieProgress";

import ChartImage from "../../../assets/images/shape/chart-1.svg";
import EmojiIconsImage from "../../../assets/images/shape/emoji.svg";
import Star1Image from "../../../assets/images/shape/star1.svg";
import Star2Image from "../../../assets/images/shape/star2.svg";
import Star3Image from "../../../assets/images/shape/star3.svg";
import M1Image from "../../../assets/images/main-demo/m1.png";
import Ellipse1Image from "../../../assets/images/main-demo/ellipse1.png";
import Ellipse2Image from "../../../assets/images/main-demo/ellipse2.png";
import Ellipse3Image from "../../../assets/images/main-demo/ellipse3.png";
import Ellipse4Image from "../../../assets/images/main-demo/ellipse4.png";
import ManImage from "../../../assets/images/main-demo/man.png";
import M2Image from "../../../assets/images/main-demo/m2.png";
import Star4Image from "../../../assets/images/shape/star-4.svg";
import ItemShapeImage from "../../../assets/images/shape/item-shape.svg";
import WaveShapeImage from "../../../assets/images/shape/wave-shape.svg";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HomeOneMarketingSection = () => {
  // counter up
  const sectionRef = useRef(null);

  useEffect(() => {
    let isAnimated = 0;
    function counterUp() {
      if (isAnimated == 0) {
        const counterItem = document.querySelectorAll(".counter");
        counterItem.forEach((item) => {
          var counterText = item.innerText;
          item.innerText = "0";
          const updateCounter = () => {
            let dataTarget = +item.getAttribute("datatarget");
            if (dataTarget > 999) {
              dataTarget = dataTarget / 1000;
            }
            counterText = +item.innerText;
            let increment = dataTarget / 1000;
            if (counterText < dataTarget) {
              item.innerText = `${Math.ceil(counterText + increment)}`;
              setTimeout(updateCounter, 1);
            }
          };
          updateCounter();
        });
      }
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const x = sectionRef.current.offsetTop - 400;
      if (y > x && y < x + window.innerHeight) {
        counterUp();
        isAnimated++;
      } else {
        isAnimated = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeMarketingStyleWrapper>
      {/* marketing section start */}
      <div className="marketing-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <ScrollAnimate delay={200}>
                <div className="marketing-img">
                  <div className="overlay">
                    <div className="overlay-item chart">
                      <img src={ChartImage} alt="chart-img" />
                    </div>
                    <div className="overlay-item emoji-icons">
                      <img src={EmojiIconsImage} alt="emoji-icons" />
                    </div>
                    <div className="overlay-item star-1">
                      <img src={Star1Image} alt="star" />
                    </div>
                    <div className="overlay-item star-2">
                      <img src={Star2Image} alt="star" />
                    </div>
                    <div className="overlay-item star-3">
                      <img src={Star3Image} alt="star" />
                    </div>
                  </div>
                  <img src={M1Image} alt="marketing-img" />
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="marketing-content">
                <div className="marketing-content-title">
                  <TitleStyleWrapper>
                    <ScrollAnimate delay={250}>
                      <div className="section-title">
                        <span className="sub-title">Seamless Business Registration</span>
                        <h2 className="title">
                        Effortless, Fast 
                          <br />& Reliable
                          <span className="marketing-badge">Solutions</span>
                        </h2>
                      </div>
                    </ScrollAnimate>
                  </TitleStyleWrapper>
                </div>
                <div className="marketing-content-body">
                  <ScrollAnimate delay={300}>
                    <p>
                    Starting a business should be exciting, not stressful.
                    That’s why we offer end-to-end registration services, handling everything from legal documentation to compliance with accuracy.
                    Our team ensures swift processing and error-free submissions, helping you meet deadlines without hassle. 
                    With our reliable support, you can focus on building your business while we take care of the formalities.
                    </p>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">High-Quality screen</p>
                        </div>
                      </li>
                    </ul>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="marketing-section marketing-section2 md-pt-60"
        ref={sectionRef}
      >
        <div className="container" style={{backgroundColor:"#f3f3f3",padding:"20px",borderRadius:"25px"}}>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div className="marketing-content">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    subtitle="Empower Your Business with Expert Guidance"
                    title="Reliable Support, Every Step of the Way"
                    parentClass="md-mb-0"
                  />
                </ScrollAnimate>

                <div className="marketing-content-body">
                  <ScrollAnimate delay={250}>
                    <div className="mb-30">
                      <p>
                      Navigating business regulations can be complex, but you’re not alone. Our dedicated professionals provide personalized assistance, ensuring your company stays compliant with the latest regulations. From registration to post-launch support, we offer tailored solutions to help you grow with confidence. Let us handle the complexities while you focus on your vision.
                      </p>
                    </div>
                  </ScrollAnimate>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <div className="marketing-img v2">
                <img src={M2Image} alt="marketing-img" />
                <div className="overlay">
                  <div className="overlay-item reduction-time">
                    <div className="reduction-time-top">
                      <h2>
                        <span className="counter" datatarget="40">
                          40
                        </span>
                        %
                      </h2>
                      <img src={Star4Image} alt="star" />
                    </div>
                    <p>Reduction in time</p>
                  </div>
                  <div className="overlay-item success-rate">
                    <img
                      className="rotate-icon"
                      src={ItemShapeImage}
                      alt="icon"
                    />
                    <div className="success-rate-content">
                      <div className="progress pie_progress">
                        <CustomPieProgress
                          Text="Success rate"
                          TextColor="#444444"
                          Percentage={99}
                          ValueColor="#000000"
                          PathColor="#00CEC9"
                          TrailColor="rgba(0, 206, 201, 0.2)"
                        />
                        <p>Success rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="overlay-item wave-shape">
                    <img src={WaveShapeImage} alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto fw-bold horizontalLine" style={{margin:"1rem",width:"65%",height: "2px",backgroundColor: "black",border:"none"}}></hr>

      {/* marketing section end */}
    </HomeMarketingStyleWrapper>
  );
};

export default HomeOneMarketingSection;
