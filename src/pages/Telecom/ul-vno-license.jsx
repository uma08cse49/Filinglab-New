import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import TelecomBanner from "../../Sections/Banner/TelecomBanner/TelecomBanner";
import TelecomContent  from "../../Sections/Telecom/TelecomContent";


const UlVnoLicense = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <TelecomBanner />
       
      <TelecomContent  />
      <FooterTwo />
    </Layout>
  );
};

export default UlVnoLicense;
