import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../Header/Header";
import FooterTwo from "../Footer/FooterTwo";
import ServiceJointFranchiesBanner from "../Banner/ServiceJointFranchiesBanner/ServiceJointFranchiesBanner";
import ServiceJointFranchiesContent  from "../ServiceJointFranchiesContent/ServiceJointFranchiesContent";


const CertificatesRegistrations = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <ServiceJointFranchiesBanner />
       
      <ServiceJointFranchiesContent  />
      <FooterTwo />
    </Layout>
  );
};

export default CertificatesRegistrations;
