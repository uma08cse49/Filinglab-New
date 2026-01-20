import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import SEBIBanner from "../../Sections/Banner/SEBIBanner/SEBIBanner";
import SEBIContent  from "../../Sections/SEBI/SEBIContent";


const UnderwritersRegistrationSebi = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <SEBIBanner />
       
      <SEBIContent  />
      <FooterTwo />
    </Layout>
  );
};

export default UnderwritersRegistrationSebi;
