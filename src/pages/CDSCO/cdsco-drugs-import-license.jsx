import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import CDSCOBanner from "../../Sections/Banner/CDSCOBanner/CDSCOBanner";
import CDSCOContent  from "../../Sections/CDSCO/CDSCOContent";


const CdscoDrugsImportLicense = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <CDSCOBanner />
       
      <CDSCOContent  />
      <FooterTwo />
    </Layout>
  );
};

export default CdscoDrugsImportLicense;
