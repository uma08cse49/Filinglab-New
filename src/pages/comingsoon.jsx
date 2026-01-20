import { NavLink } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Comingsoonimage from "../assets/images/comingsoon/comingsoon.png";

const Comingsoon = () => {
  return (
    <Layout pageTitle="Filing lab -GST">
      <Header variant="v2" />

      <div style={styles.container}>
        <img
          src={Comingsoonimage}
          alt="Coming Soon"
          style={styles.image}
        />
        

        <NavLink to="/" style={styles.button}>
          Go to Homepage
        </NavLink>
      </div>

      <FooterTwo />
    </Layout>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "210px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
  },
  image: {
    width: "300px",
    maxWidth: "90%",
    marginBottom: "30px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    padding: "10px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default Comingsoon;
