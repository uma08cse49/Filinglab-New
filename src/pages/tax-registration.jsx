import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterTwo from "../Sections/Footer/FooterTwo";
import TaxRegistrationBanner from "../Sections/Banner/TaxRegistrationBanner/TaxRegistrationBanner";
import TaxRegistrationContent  from "../Sections/TaxRegistrationContent/TaxRegistrationContent";


const TaxRegistration = () => {
 
  return (
    <Layout pageTitle={`Tax Registration`}>
      <Header variant="v2" />
      <TaxRegistrationBanner />
       
      <TaxRegistrationContent  />
      <FooterTwo />
    </Layout>
  );
};

export default TaxRegistration;
