import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import OtherWasteManagementTypesBanner from "../../Sections/Banner/Other-Waste-Management-TypesBanner/Other-Waste-Management-TypesBanner";
import IRDAContent  from "../../Sections/IRDA/IRDAContent";


const OtherWasteManagementTypes = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <OtherWasteManagementTypesBanner />
       
      <IRDAContent  />
      <FooterTwo />
    </Layout>
  );
};

export default OtherWasteManagementTypes;
