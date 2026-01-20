import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import FEMABanner from "../../Sections/Banner/FEMABanner/FEMABanner";
import FEMAContent  from "../../Sections/FEMA/FEMAContent";


const BranchOfficeRegistration = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <FEMABanner />
       
      <FEMAContent  />
      <FooterTwo />
    </Layout>
  );
};

export default BranchOfficeRegistration;
