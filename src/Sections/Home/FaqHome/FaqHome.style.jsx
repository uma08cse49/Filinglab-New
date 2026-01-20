import styled from "styled-components";

const HomeFaqStyleWrapper = styled.section`
  .faq-boxes {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
  }

  .faq-box {
    width: 350px;
    height: 550px;
    padding: 45px 40px;
    border-radius: 10px;
    border: 2px solid #e3432b;
    // background-color: #f8f0e6 !important;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // box-shadow: 4px 4px 0px 0px #e3a32b;
    transition: all 0.3s ease-in-out;
  }

  .faq-heading {
    text-align: center;
    font-size: 22px;
    margin-bottom: 15px;
    height: 60px; /* ✅ Fixed missing semicolon */
    background: transparent !important; /* 🔥 Force transparency */
  }

  .faq-content {
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
    background: transparent !important; /* ✅ Make sure it doesn't override */
  }

  .faq-content ul {
    list-style-type: none;
    padding: 0;
  }

  .faq-content li {
    position: relative;
    margin-bottom: 8px;
    font-size: 16px;
    padding-left: 30px; /* Adds space for the circle */
  }

  .faq-content li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background-color: #e3432b; 
    border-radius: 50%;
  }

  .apply-button {
    background-color: #e3432b;
    // background-color:rgb(255, 170, 22);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    align-self: center;
    font-size: 16px;
    width: 100%;
  }

  /* Leave Message Section */
  .leave-message {
    text-align: center;
    margin-top: 50px;
  }

  .leave-message-text h2 {
    font-size: 24px;
    color: #222;
    background: transparent !important; /* ✅ Prevent overriding */
  }

  .leave-message-text h3 {
    font-size: 18px;
    color: #555;
    background: transparent !important;
  }

  .text-link {
    color: #007bff;
    text-decoration: none;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
  }

  .rotate-icon {
    width: 50px;
    height: 50px;
  }

  .msg-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #ff6600;
    border-radius: 50%;
    margin-top: 10px;
  }

  .msg-btn img {
    width: 30px;
    height: 30px;
  }

  /* Media Queries */
  @media (max-width: 1024px) {
    .faq-boxes {
      flex-direction: column;
      align-items: center;
    }

    .faq-box {
      width: 90%;
      height: auto;
      padding: 30px;
    }

    .apply-button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  @media (max-width: 768px) {
    .faq-box {
      width: 100%;
      padding: 25px;
    }

    .faq-heading {
      font-size: 20px;
    }

    .faq-content li {
      font-size: 14px;
    }

    .apply-button {
      font-size: 14px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .faq-box {
      width: 100%;
      padding: 20px;
    }

    .faq-heading {
      font-size: 18px;
    }

    .faq-content li {
      font-size: 12px;
    }

    .apply-button {
      font-size: 12px;
      padding: 8px;
    }
  }
`;

export default HomeFaqStyleWrapper;
