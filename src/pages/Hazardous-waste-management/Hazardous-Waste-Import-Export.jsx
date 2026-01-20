import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import HazardousWasteImportExportBanner from "../../Sections/Banner/Hazardous-Waste-Import-ExportBanner/Hazardous-Waste-Import-ExportBanner";
import IRDAContent  from "../../Sections/IRDA/IRDAContent";


const HazardousWasteImportExport = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <HazardousWasteImportExportBanner />
       
      <IRDAContent  />
      <FooterTwo />
    </Layout>
  );
};

export default HazardousWasteImportExport;
