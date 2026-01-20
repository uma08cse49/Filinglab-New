import TermsAndPrivacy from "./TermsAndPrivacy";
import Data from "../../assets/data/terms";
import ScrollAnimate from "../../Components/ScrollAnimate";

const Terms = () => {
  return (
    <TermsAndPrivacy title="Terms of Service" data={Data}>
      <ScrollAnimate delay={200}>
        <p>
          Welcome to Filing Lab. These Terms of Service ("<b>Terms</b>") govern your use of our website (the "<b>Service</b>") and any related products or services. By accessing or using the Service, you agree to comply with these Terms.  
          Some features require a paid subscription ("<b>Subscription(s)</b>"), billed in advance on a recurring basis according to your selected plan.
        </p>
      </ScrollAnimate>
      
      <ScrollAnimate delay={250}>
        <p>
          If you do not agree with any part of these Terms, you may not access or use the Service.
        </p>
      </ScrollAnimate>
    </TermsAndPrivacy>
  );
};

export default Terms;
