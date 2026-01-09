import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import LegalMetrologyBanner from "../../Sections/Banner/LegalMetrologyBanner/LegalMetrologyBanner";
import LegalMetrologyContent  from "../../Sections/LegalMetrology/LegalMetrologyContent";


const PackagedCommodityRegistration = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <LegalMetrologyBanner />
       
      <LegalMetrologyContent  />
      <FooterTwo />
    </Layout>
  );
};

export default PackagedCommodityRegistration;
