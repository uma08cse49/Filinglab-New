import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import RBIBanner from "../../Sections/Banner/RBIBanner/RBIBanner";
import RBIContent  from "../../Sections/RBI/RBIContent";


const PeerToPeerLendingLicense = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <RBIBanner />
       
      <RBIContent  />
      <FooterTwo />
    </Layout>
  );
};

export default PeerToPeerLendingLicense;
