import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import ServiceJointFranchiesBanner from "../../Sections/Banner/ServiceJointFranchiesBanner/ServiceJointFranchiesBanner";
import ResidentialCommercialProbateContent  from "../../Sections/ResidentialCommercialProbateContent/ResidentialCommercialProbateContent";


const ResidentialCommercialProbate = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <ServiceJointFranchiesBanner />
       
      <ResidentialCommercialProbateContent  />
      <FooterTwo />
    </Layout>
  );
};

export default ResidentialCommercialProbate;
