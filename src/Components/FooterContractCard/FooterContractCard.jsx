import React from 'react';
import MailIcon from "../../assets/images/icons/mail.svg";
import CallIcon from "../../assets/images/icons/call.svg";
import FooterContractStyle from './FooterContract.style';

const FooterContractCard = () => {
  return (
    <FooterContractStyle className="footer-contract-card">
      <ul>
        <li><img src={MailIcon} alt="mail" /><a href="mailto:Contact@filinglab.com">Contact@filinglab.com</a></li>
        <li><img src={CallIcon} alt="call" /><a href="tel:+91 915-005-2027">+91 915-005-2027</a></li>
      </ul>
    </FooterContractStyle>
  );
};

export default FooterContractCard;
