import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import IRDABanner from "../../Sections/Banner/IRDABanner/IRDABanner";
import IRDAContent  from "../../Sections/IRDA/IRDAContent";


const InsuranceCompanyLicense = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <IRDABanner />
       
      <IRDAContent  />
      <FooterTwo />
    </Layout>
  );
};

export default InsuranceCompanyLicense;
