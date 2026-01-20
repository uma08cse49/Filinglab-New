import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterTwo from "../Sections/Footer/FooterTwo";
import ServiceJointFranchiesBanner from "../Sections/Banner/ServiceJointFranchiesBanner/ServiceJointFranchiesBanner";
import GSTReturningContent  from "../Sections/GSTReturningContent/GSTReturningContent";


const ServiceJointFranchies = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <ServiceJointFranchiesBanner />
       
      <GSTReturningContent  />
      <FooterTwo />
    </Layout>
  );
};

export default ServiceJointFranchies;
