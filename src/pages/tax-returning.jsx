import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterTwo from "../Sections/Footer/FooterTwo";
import TaxReturningBanner from "../Sections/Banner/TaxReturningBanner/TaxReturningBanner";
import TaxReturningContent  from "../Sections/TaxReturningContent/TaxReturningContent";


const TaxReturning = () => {
 
  return (
    <Layout pageTitle={`Tax Returning`}>
      <Header variant="v2" />
      <TaxReturningBanner />
       
      <TaxReturningContent  />
      <FooterTwo />
    </Layout>
  );
};

export default TaxReturning;
