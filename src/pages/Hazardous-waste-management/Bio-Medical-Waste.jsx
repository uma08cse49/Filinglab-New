import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import BioMedicalWastesBanner from "../../Sections/Banner/Bio-Medical-WastesBanner/Bio-Medical-WastesBanner";
import IRDAContent  from "../../Sections/IRDA/IRDAContent";


const BioMedicalWaste = () => {
 
  return (
    <Layout pageTitle={`Filinglab-GSTReturning`}>
      <Header variant="v2" />
      <BioMedicalWastesBanner/>
       
      <IRDAContent  />
      <FooterTwo />
    </Layout>
  );
};

export default BioMedicalWaste;
