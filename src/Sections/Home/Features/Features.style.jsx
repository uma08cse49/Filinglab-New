import styled from "styled-components";

const HomeIntegrateStyleWrapper = styled.section`
  .container {
    width: 100%;
    max-width: 1300px;
    // margin: 0 auto;
    padding: 60px 20px;
    background:    #f3f3f3;
    border-radius:20px;
    margin-top:20px
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .integrate-card {
    width: 100%;
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    color: white;
    cursor: pointer;

    /* Box shadows applied to color classes */
    &.color-0 {
      background: #eaf1ff;
      box-shadow: 4px 4px 0px 0px  rgb(165, 194, 223); /* Blue shadow */
    }
    &.color-1 {
      background: #f8f0e6;
      box-shadow: 4px 4px 0px 0px   rgb(208, 170, 93); /* Golden shadow */
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 8px 8px 18px rgba(0, 0, 0, 0.2);
    }

    .card-content {
      h3 {
        font-size: 20px; 
        font-weight: 1200;
        margin-bottom: 8px;
      }

      p {
        font-size: 14px;
        line-height: 1.5;
        color: rgb(0, 0, 0);
      }
    }
  }

  /* Responsive Design */
  @media screen and (max-width: 992px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }

    .integrate-card {
      height: 140px;
    }
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }

    .integrate-card {
      height: 130px;
    }

    .card-content h3 {
      font-size: 16px;
    }

    .card-content p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    .integrate-card {
      height: 120px;
      padding: 15px;
    }

    .card-content h3 {
      font-size: 14px;
    }

    .card-content p {
      font-size: 12px;
    }
  }
`;

export default HomeIntegrateStyleWrapper;
