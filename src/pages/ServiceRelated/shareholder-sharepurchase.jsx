import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout";
import Header from "../../Sections/Header/Header";
import FooterTwo from "../../Sections/Footer/FooterTwo";
import ShareHolderSharePurchaseBanner from "../../Sections/Banner/ShareHolderSharePurchaseBanner/ShareHolderSharePurchaseBanner";
import ShareHolderSharePurchaseContent  from "../../Sections/ShareHolderSharePurchaseContent/ShareHolderSharePurchaseContent";


const ShareholderPurchase = () => {
 
  return (
    <Layout pageTitle={`Filinglab-holder purchase`}>
      <Header variant="v2" />
      <ShareHolderSharePurchaseBanner />
       
      <ShareHolderSharePurchaseContent  />
      <FooterTwo />
    </Layout>
  );
};

export default ShareholderPurchase;
