
import { useState, useEffect } from "react";
import HomeBannerStyle from "./HomeBanner.style";
import { FaCheck } from "react-icons/fa6";

import bannerShape1 from "../../../assets/images/main-demo/banner-shape1.png";
import bannerShape2 from "../../../assets/images/main-demo/banner-shape2.png";
import bannerShape3 from "../../../assets/images/main-demo/banner-shape3.png";
import getDemoSvg from "../../../assets/images/main-demo/get-demo.svg";
import arrowRightSvg from "../../../assets/images/icons/arrow-right.svg";
import heroImg from "../../../assets/images/main-demo/hero-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import PricingShape1Image from "../../../assets/images/shape/pricing-shape1.png";
import PricingShape2Image from "../../../assets/images/shape/pricing-shape2.png";
import PricingShape3Image from "../../../assets/images/shape/pricing-shape3.png";
import Ellipse1Image from "../../../assets/images/shape/ellipse1.png";
import Ellipse2Image from "../../../assets/images/shape/ellipse2.png";
import { Player, Controls } from '@lottiefiles/react-lottie-player';



const HomeBanner = () => {
  const [lottieUrl, setLottieUrl] = useState('');
  // const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    answer: "",
  });

  const [verificationQuestion] = useState({
    question: "What is 5 + 3?",
    correctAnswer: "8",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 1 && !formData.name) return alert("Please enter your name");
    if (step === 2 && !formData.mobile) return alert("Please enter your mobile number");
    if (step === 3 && !formData.email) return alert("Please enter your email");
    if (step === 4 && formData.answer !== verificationQuestion.correctAnswer) {
      return alert("Wrong answer! Please try again.");
    }
    setStep(step + 1);
  };

  


   

  return (
    <HomeBannerStyle className="hero-section text-black" style={{ backgroundColor: "#f9f3eb" }}>
       <div className="bg-shape">
        <div className="bg-white text-black">

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
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="hero-content">
                <TitleStyleWrapper>
                  <ScrollAnimate delay={250}>
                                      <div className="section-title">
                                        {/* <span className="sub-title">Seamless Business Registration</span> */}
                                        <h2 className="title text-black ">
                                        "The Simplest way to"
                                        <br/>  
                                        <span className="marketing-badge "> Incorporate your company </span>
                                        <br/>"in India"
                                        </h2>
                                      </div>
                  </ScrollAnimate>
                </TitleStyleWrapper>
               
                <div class="desc">Begin your journey as a business owner with us - From business planning to registration, we provide the resources and support you need to turn your vision into a thriving enterprise.</div>
                {/* <p style={{ color: "black" }}>Enter your details to proceed</p> */}

                  <ul class="icon_list mt_24">
                      <li>Saved 20,00,000+ Hours of entrepreneurs PAN India</li>
                      <li>Experience zero delays in registering your dream business</li>
                  </ul>

{/*  ------------------------form Section ----------------------------------
                <div className="hero-form">
                  <input
                    type={step === 2 ? "tel" : step === 3 ? "email" : "text"}
                    name={step === 1 ? "name" : step === 2 ? "mobile" : step === 3 ? "email" : "answer"}
                    placeholder={
                      step === 1
                        ? "Enter your name"
                        : step === 2
                        ? "Enter your mobile number"
                        : step === 3
                        ? "Enter your email"
                        : verificationQuestion.question
                    }
                      
                    value={step === 1 ? formData.name : step === 2 ? formData.mobile : step === 3 ? formData.email : formData.answer}
                    onChange={handleChange}
                    style={{
                      width: "70%", 
                      padding: "6px",
                      fontSize: "16px",
                      border:"2px solid grey",
                      borderRadius:'16px 0px 0px 16px',
                      borderRight:"none"
                    }}
                  />

                  {step <= 4 && (
                    <button
                      className="bg-blue-btn"
                      onClick={nextStep}
                      style={{
                        padding: "5px 12px 4px 12px",
                        fontSize: "14px",
                        borderRadius:"0px 16px 16px 0px",
                        
                      }}
                    >
                      {step === 4 ? "Submit" : "Next"}
                    </button>
                  )}
                  {step > 4 && <p>✅ Form submitted successfully!</p>}
                </div> */}

      {/* ------------------form section ends here------------------------------------ */}

   {/* ----------------------Schedule call button--------------------------- */}
      {/* <div class="service_icons">
		     	  
            <div class="schedule_btn"> 
              <a href="javascript:void(0);" onclick="if (!window.__cfRLUnblockHandlers) return false; document.getElementById('consultationForm').submit();">Schedule a call<i class="fa fa-chevron-right ms-2"></i>
              </a> 
            </div>
         
             <div class="ratings-container"> 
              <img src="public/images/segments/rating/googlereviews.png" alt="Google 5 star rating"/> </div> */}
             {/* <div class="rw_icon2">  */}
              {/* <img src="img/trustpilot.webp" alt="Trustpilot 5 star rating"/>  */}
              {/* </div> */}
           {/* </div> */}

  {/* ----------------------Schedule call button--------------------------- */}


                {/* <p class="rating-text mt-4">
                  <a href="https://filinglab.com/" rel="nofollow" target="_blank">
                  <img src="src\assets\images\img\rating_image.png" alt="Rated at 4.9" style={{ width: "50px", height: "auto"}}></img>
                  <span>Rated at <strong>4.9</strong> By <strong>42800 +</strong> Customers Globally</span></a></p> */}

          <div class="home-3_hero-content-stat-wrapper mt-4">
            <div class="home-3_hero-content-stat">
              <div class="home-3_hero-content__customer-count">
                  <img src="https://www.kanakkupillai.com/site/assets/images/avatar.png" class="img-part" alt="hero 3 avatar"/>
                  <p>
                      1,45,685 
                      <span>   Happy Customers </span>
                  </p>
              </div>
              <div class="divider"></div>
              <div class="home-3_hero-content__rating-count">
                  <p>
                      4.5/5 
                      <span>
                          <img src="https://www.kanakkupillai.com/site/assets/images/stars.png" alt="hero 3 stars"/>
                          Rating
                      </span>
                  </p>
              </div>
            </div>   
        </div>


        



                <div className="hero-content-button mb-30">
                   <ScrollAnimate delay={250}>
                     {/* <a href="/sign-up" className="bg-blue-btn"> */}
                     <a href="/" className="bg-blue-btn">
                       <span className="btn-inner">
                         <span className="btn-normal-text">
                           Start for Free
                         </span>
                         <span className="btn-hover-text">Get Start for Free</span>
                       </span>
                      </a>
                   </ScrollAnimate>
                 </div>
                 <ScrollAnimate delay={300}>
                   {/* <ul className="hero-content-list">
                     <li>
                     <div className="list-item">
                         <FaCheck />
                         <p className="wt-700">No cards required</p>
                       </div>
                     </li>
                     <li>
                       <div className="list-item">
                         <FaCheck />
                         <p className="wt-700">30 day free trial</p>
                       </div>
                     </li>
                   </ul> */}
                 </ScrollAnimate>
               </div>
             </div>
                
            {/* </div> */}
          {/* </div> */}

            <div class="col-lg-5 col-md12">
              <div class="sc-eaUbBy iMEUBt">
                <div class="hero-img">
                  <div class="overlay">
                    <a href="#" class="get-demo-btn">
                      <img src="https://staco-react.vercel.app/assets/get-demo-CU4oQ0QO.svg" alt="get-demo"/>
                      <span class="icon">
                        <img src="data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.28955%206.91455L22.2894%206.91455L22.2894%2019.9144'%20stroke='%23111111'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.91406%2022.2903L21.0562%208.14815'%20stroke='%23111111'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="icon"/>
                      </span>
                          {/* <a className="hover-this" href="/about-us/">
                            <div className="circle-button in-bord hover-anim" style={{}}>
                              <div className="rotate-circle fz-30 text-u">
                                <svg className="textcircle" viewBox="0 0 500 500">
                                  <defs>
                                    <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path>
                                  </defs>
                                  <text>
                                    <textPath xlinkHref="#textcircle" textLength="900">
                                      Transform with Tech - Ligiotec -
                                    </textPath>
                                  </text>
                                </svg>
                              </div>
                              <div className="arrow">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </a> */}

                      </a>
                      </div>
                      {/* <img src="images/segments/left/breadcrumb_img_1.webp" alt="hero-img"/> */}
                      {/* <img src="public/images/segments/left/1.json" alt="hero-img"/> */}

                      <Player
                          autoplay
                          loop
                          src="/images/segments/left/5.json"
                          style={{ 
                            position: 'relative',
                            // top: -100,
                            // left: 0,
                            width: '600px',
                            height: '600px',
                            zIndex: '-1',
                            background: 'none', // Ensure transparency
                            backgroundColor: 'transparent',// Ensure transparency
                            filter: 'brightness(1.0) contrast(0.8) saturate(0.8)' // Makes colors lighter
                            // backgroundColor: '#FFC0CB',  // Light pink background
                            // filter: 'sepia(0.5) hue-rotate(310deg) saturate(1.5)'  // Adjust for peach tone
                          }}
                          
                          // style={{ height: '500px', width: '500px' ,zindex: "-1"}}
                        ></Player>
                      {/* <img src="https://staco-react.vercel.app/assets/hero-img-CCy-DGIx.png" alt="hero-img"/> */}

                </div>
              </div>
            </div>

            {/* ------------------------container from corpbiz-------------------- */}

            {/* <section id="scroll_spy_sec" class="sticky-top hide_mobile">
                <div class="container">
                  <nav id="service_scrollspy">
                  <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link active" href="#FEATURES">Overview</a></li>
                        <li class="nav-item"><a class="nav-link" href="#Features">Advantages</a></li>
                        <li class="nav-item"><a class="nav-link" href="#eligibility-criteria">Eligibility Criteria</a></li>
                        <li class="nav-item"><a class="nav-link" href="#documents">Documents Required</a></li>
                        <li class="nav-item"><a class="nav-link" href="#process">Process</a></li>
                        <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
                        <li class="nav-item"><a class="nav-link" href="#types">Types</a></li>
                        <li class="nav-item"><a class="nav-link" href="#faqs">FAQs</a></li>
                    </ul>
                    </div>
                    </div>
                </nav></div>
                </section>
                <p></p> */}

                 {/* ------------------------container from corpbiz-------------------- */}

          </div>
        </div>
          
        </div>
        {/* (
            <Player
              autoplay
              loop
              src={lottieUrl}
            />
          ) */}
          
    </HomeBannerStyle>
  );
};

export default HomeBanner;


