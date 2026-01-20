import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import BISBanner from "../../Sections/Banner/BISBanner/BISBanner";
import BISContent  from "../../Sections/BIS/BISContent";


const BisCrsCertificationPowerBanks = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <BISBanner />
       
      <BISContent  />
      <FooterTwo />
    </Layout>
  );
};

export default BisCrsCertificationPowerBanks;
