import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import ServiceJointFranchiesBanner from "../../Sections/Banner/ServiceJointFranchiesBanner/ServiceJointFranchiesBanner";
import ServiceJointFranchiesContent  from "../../Sections/ServiceJointFranchiesContent/ServiceJointFranchiesContent";


const EmployementCriminalLaw = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <ServiceJointFranchiesBanner />
       
      <ServiceJointFranchiesContent  />
      <FooterTwo />
    </Layout>
  );
};

export default EmployementCriminalLaw;
