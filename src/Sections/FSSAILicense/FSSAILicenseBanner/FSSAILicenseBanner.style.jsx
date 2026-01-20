import styled from "styled-components";

import BgImg from "../../../assets/images/bg/wave-line.png";
import CurveLineImg from "../../../assets/images/shape/curve-line.png";
import HoggleImg from "../../../assets/images/icons/hoogle-icon.svg";

const FSSAILicenseBannerStyle = styled.section`
  padding: 120px 0px 0px 0px;            // changed from 235px to 120px  165px to 0
  background-color: ${({ theme }) => theme.colors.bgHero};
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
  border-radius: 0px 0px 50px 50px;

  h1 {                         //newly added
    font-size: 26px;
}
  
  .shape-img {
    position: absolute;
    z-index: -1;
    &.img-1 {
      bottom: 0;
      right: 10%;
    }
    &.img-2 {
      bottom: 0;
      left: 10%;
    }
    &.img-3 {
      top: 0;
      left: 0;
    }
    &.img-4 {
      top: 25%;
      left: 8%;
    }
    &.img-5 {
      bottom: 20%;
      right: 5%;
    }
  }

  /*-- hero-content style --*/
  .hero-content-text {
    margin-bottom: 48px;
    .uig-banner-title {
      line-height: 1.35;
    }
    p {
      margin-top: 18px;
      font-size: 18px;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.blackColor};
    }
  }
  .hero-content-list {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    .list-item {
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.blackColor};
        position: relative;
        top: -6px;
      }
      p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.blackColor};
      }
    }
  }
    

  /*-- hero-img style --*/
  .hero-img {
    text-align: right;
    position: relative;

    &::before {
      position: absolute;
      content: url(${CurveLineImg});
      bottom: 50px;
      left: 60px;

    }

    img {
      width: 464px;        //400 to 464
      height: 443px;       // 500 to 443
      border-radius: 200px;
    }

    .overlay {
      position: absolute;
      top: -25px;
      left: 50px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }

  .get-demo-btn {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.badgeColor2};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 120px !important;
      height: 120px !important;
      animation: rotateImg 15s infinite linear;
    }
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        transition: 0.3s;
      }
    }
    &:hover {
      .icon img {
        transform: rotate(45deg);
      }
    }
  }

  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /*-- Hero-Section2 --*/
  .hero-section2 {
    min-height: 681px;
    padding-top: 245px;
  }
  .new-hoogle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 9px;
    margin-bottom: 27px;
    span {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-weight: 700;
      line-height: 14px;
      background: ${({ theme }) => theme.colors.badgeColor};
      border-radius: 15px;
      color: ${({ theme }) => theme.colors.blackColor};
      padding: 8px 12px;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.title};
      margin-top: 0px;
      position: relative;

      &:after {
        content: url(${HoggleImg});
        position: absolute;
        right: -20px;
        top: -14px;
        animation: badgeAnimate 2s infinite linear;
      }
    }
  }
  .hero-content2-text {
    .banner-title {
      margin-bottom: 16px;
      line-height: 1.3;
      & .hero-badge {
        background: ${({ theme }) => theme.colors.badgeColor2};
        border-radius: 0px 20px 0px 0px;
        margin-left: 7px;
      }
    }
    & ul {
      padding: 0;
      list-style: none;
      margin-bottom: 49px;
      & li {
        font-weight: 900;
        line-height: 36px;
        color: ${({ theme }) => theme.colors.title};
        svg {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
  }
  .hero2-img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    .hero2-image1 {
      position: absolute;
      left: 20px;
      top: -56px;
      background: ${({ theme }) => theme.colors.heroimg1Bg};
      border-radius: 85px 85px 0px 85px;
      padding: 17px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .hero2-image2 {
      position: absolute;
      left: 50px;
      top: 35%;
      background: ${({ theme }) => theme.colors.badgeColor};
      border-radius: 85px 85px 0px 85px;
      transform: rotate(-75deg);
      padding: 8px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        transform: rotate(75deg);
      }
    }
    .hero2-image3 {
      position: absolute;
      top: -50px;
      left: 60%;
      animation: jumpingDown 4.5s infinite;
    }
    .hero2-image4 {
      position: absolute;
      bottom: 100px;
      left: 100px;
      animation: jumpingUp 5s infinite;
    }
  }

  /*-- hero-section end --*/
  @media screen and (max-width: 1199px) {
    .hero-content-text {
      .uig-banner-title {
        font-size: 55px;
      }
    }
    .hero-content-text h2 {
      font-size: 55px;
      font-weight: 700;
      line-height: 80px;
    }
    .hero-img::before {
      left: 0;
    }
    .hero-img .overlay {
      left: 0px;
    }
  }
  @media screen and (max-width: 991px) {
    .hero-content {
      text-align: center;
    }
    .hero-content-text p {
      max-width: 500px;
      margin: auto;
      margin-top: 15px;
    }
    .hero-img {
      text-align: center;
      max-width: 350px;
      margin: auto;
      margin-top: 110px;
      img{
        height: auto;
        width: 100%;
      }
      .overlay {
        top: -13%;
        left: 27%;
      }
    }
    .hero-content-list {
      justify-content: center;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 150px 0px 80px;
    border-radius: 0px 0px 30px 30px;
    .hero-badge{
      &::before{
        top: -32px;
      }
    }
    .shape-img {
      width: 18%;
      &.img-2 {
        bottom: 0;
        left: -15px;
        max-width: 190px;
      }

      &.img-3 {
        bottom: 0px;
        right: -30px;
        max-width: 200px;
      }
    }
  }

  .new_service_banner .service_icons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    margin: 24px 0 48px;
}

// -----------Rating & Schedule button----------------------------

.service_icons {
    display: flex;
    align-items: center; /* Align items vertically */
    gap: 20px; /* Adjust spacing between elements */
}

.schedule_btn a {
    background-color: #1d3557; /* Adjust color as per design */
    color: white;
    padding: 10px 15px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
}

.ratings-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.rating-icon {
    height: 24px; /* Adjust as needed */
}

.rating-text {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
}

.rating-image {
    width: 50px;
    height: auto;
}


.icon_list {
    margin-top: 0;
    margin-bottom: 2rem;
    padding-left: 3rem;
}


.home-3_hero-content-stat {
    display: flex
;
    align-items: center;
    gap: 24px;
}

@media (min-width: 576px) {
    .home-3_hero-content-stat {
        flex-direction: row;
    }
}

.home-3_hero-content__customer-count {
    display: flex;
    align-items: center;
    gap: 25px;
}

.home-3_hero-content-stat p span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
}

.home-3_hero-content-stat p {
    font-weight: 900;
    letter-spacing: -.033333em;
    line-height: 1.4;
    font-size: 26px;
    margin-bottom: initial;
    color: #0a102f;
}

.home-3_hero-content__customer-count p span {
    display: block;
}

.home-3_hero-content-stat .divider {
    height: 39px;
    width: 2px;
    background-color: #0a102f;
    opacity: .1;
    border-radius: 100px;
}

.home-3_hero-content__rating-count p span {
    display: flex;
    align-items: center;
    column-gap: 5px;
}

@media (min-width: 576px) {
    .divider {
        display: block;
    }
}

@media (min-width: 480px) {
    .home-3_hero-content__customer-count {
        flex-direction: row;
    }

@media (min-width: 320px) and (max-width: 1300px) {
    .img-part {
        max-width: 90px;
    }
}

#service_scrollspy {
    border-bottom: 1px solid #f9d59e;
    background: #f7d199;
    box-shadow: 2px 9px 25px -12px rgb(0 0 0 / 75%);
    border-radius: 5px;
    padding: 0 20px;
}


scroll_spy_sec.sticky-top {
    top: 73px;
    background: transparent;
}

.sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
    top: 100px;
}


section {
    display: block;
    unicode-bidi: isolate;
}

.container {
    max-width: 100% !important;
    padding-left: 70px !important;
    padding-right: 70px !important;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y)* -1);
    margin-right: calc(var(--bs-gutter-x)* -.5);
    margin-left: calc(var(--bs-gutter-x)* -.5);
}

@media (min-width: 992px) {
    .col-lg-12 {
        flex: 0 0 auto;
        width: 100%;
    }
}

// *, *::before, *::after {
//     box-sizing: border-box;
// }

// .row {
//     row-gap: 30px;
// }

// #service_scrollspy .nav-link.active {
//     border-bottom: 1px solid #f9d59e;
//     background: #fffefe;
//     color: #efa434;
//     font-weight: 600;
//     border-radius: 5px;
//     position: relative;
// }

// #service_scrollspy .nav-link {
//     color: #212121;
//     font-family: Inter;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 24px;
//     letter-spacing: .128px;
//     padding: 8px 6px;
// }


#service_scrollspy .nav {
  justify-content: space-between;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}




`;



export default FSSAILicenseBannerStyle;
