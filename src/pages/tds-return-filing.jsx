import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterTwo from "../Sections/Footer/FooterTwo";
import TDSReturningBanner from "../Sections/Banner/TDSReturningBanner/TDSReturningBanner";
import TDSReturningContent  from "../Sections/TDSReturningContent/TDSReturningContent";


const TaxReturning = () => {
 
  return (
    <Layout pageTitle={`TDS Registration`}>
      <Header variant="v2" />
      <TDSReturningBanner />
       
      <TDSReturningContent  />
      <FooterTwo />
    </Layout>
  );
};

export default TaxReturning;
