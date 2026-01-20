import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterTwo from "../Sections/Footer/FooterTwo";
import GSTBannerWithForm from "../Sections/Banner/GSTBannerWithForm/GSTBannerWithForm";
import GSTContentSection  from "../Sections/GSTContent/GSTContentSection";


const GSTRegistration = () => {
  const { city } = useParams();
  const formattedCity = city.replace(/-/g, " ");

  return (
    <Layout pageTitle={`Filing lab - GST Registration in ${formattedCity}`}>
      <Header variant="v2" />
      <GSTBannerWithForm city={formattedCity} />
       
      <GSTContentSection city={formattedCity} />
      <FooterTwo />
    </Layout>
  );
};

export default GSTRegistration;
