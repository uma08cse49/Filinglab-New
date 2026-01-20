import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import ServiceJointFranchiesBanner from "../../Sections/Banner/ServiceJointFranchiesBanner/ServiceJointFranchiesBanner";
import SaleGiftRelinquishmentContent  from "../../Sections/SaleGiftRelinquishmentContent/SaleGiftRelinquishmentContent";


const SaleGiftRelinquishment = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <ServiceJointFranchiesBanner />
       
      <SaleGiftRelinquishmentContent  />
      <FooterTwo />
    </Layout>
  );
};

export default SaleGiftRelinquishment;
