import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import HazardousWasteManagementAuthorizationBanner from "../../Sections/Banner/HWMABanner/HWMABanner";
import IRDAContent  from "../../Sections/IRDA/IRDAContent";


const HazardousWasteManagementAuthorization = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <HazardousWasteManagementAuthorizationBanner />
       
      <IRDAContent/>
      <FooterTwo />
    </Layout>
  );
};

export default HazardousWasteManagementAuthorization;
