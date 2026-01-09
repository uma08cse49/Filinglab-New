
import { useState, useEffect } from "react";
import FSSAILicenseBannerStyle from "./FSSAILicenseBanner.style";
import { FaCheck } from "react-icons/fa6";
// import Autosuggest from 'react-autosuggest';

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
import StickyForm from "../../../Components/StickyForm";



const FSSAILicenseBanner = () => {
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
    <FSSAILicenseBannerStyle className="hero-section text-black" style={{ backgroundColor: "#f9f3eb" }}>
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
                                        FSSAI License in India
                                        {/* <span className="marketing-badge "> Incorporate your company </span>
                                        <br/>"in India" */}
                                        </h2>
                                      </div>
                  </ScrollAnimate>
                </TitleStyleWrapper>
               
                <div class="desc">Troubled by the time-consuming FSSAI registration process? Corpbiz consultants ensure quick approval for FSSAI license in India!</div>
                {/* <p style={{ color: "black" }}>Enter your details to proceed</p> */}

                  <ul class="icon_list mt_24">
                      <li>Successfully processed 10,000+ FSSAI food licenses</li>
                      <li>Receive guidance from our FSSAI License consultants</li>
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

          {/* <div class="home-3_hero-content-stat-wrapper mt-4">
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
        </div> */}



            {/* <div class="search-box">
                  <form method="post" action="service_search_index" id="search-form">
                  <div class="position-relative">	
                        <input type="search" id="searchKey" class="form-control ui-autocomplete-input" name="searchKey" value="" placeholder="FSSAI L|" autocomplete="off"/>
                        <button type="submit" fdprocessedid="2ihb3l">Search</button>
                  </div>	
                      </form>
                      </div> */}


                <div className="hero-content-button mb-30">
                   <ScrollAnimate delay={250}>
                     {/* <a href="/sign-up" className="bg-blue-btn"> */}
                     <a href="/" className="bg-blue-btn">
                       <span className="btn-inner">
                         <span className="btn-normal-text">
                           Get Started With Filinglab
                         </span>
                         {/* <span className="btn-hover-text">Get Start for Free</span> */}
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
                    {/* <a href="#" class="get-demo-btn"> */}
                      {/* <img src="https://staco-react.vercel.app/assets/get-demo-CU4oQ0QO.svg" alt="get-demo"/> */}
                      {/* <span class="icon">
                        <img src="data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.28955%206.91455L22.2894%206.91455L22.2894%2019.9144'%20stroke='%23111111'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.91406%2022.2903L21.0562%208.14815'%20stroke='%23111111'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="icon"/>
                      </span> */}
                      {/* </a> */}
                      <StickyForm/>
                      </div>

                      {/* <Player
                          autoplay
                          loop
                          src="public/images/segments/left/5.json"
                          style={{ 
                            position: 'relative',
                            width: '600px',
                            height: '600px',
                            zIndex: '-1',
                            background: 'none', // Ensure transparency
                            backgroundColor: 'transparent',// Ensure transparency
                            filter: 'brightness(1.0) contrast(0.8) saturate(0.8)' // Makes colors lighter
                          }}
                        ></Player> */}
                      {/* <img src="https://staco-react.vercel.app/assets/hero-img-CCy-DGIx.png" alt="hero-img"/> */}

                </div>
              </div>
            </div>
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
          
    </FSSAILicenseBannerStyle>
  );
};

export default FSSAILicenseBanner;


