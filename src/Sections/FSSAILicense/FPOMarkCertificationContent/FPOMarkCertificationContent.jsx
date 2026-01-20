// import React from "react";
import StickyForm from "../../../Components/StickyForm";
import React, { useRef, useEffect, useState } from 'react';

const FPOMarkCertificationContentSection = () => {

  const formContainerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [formTop, setFormTop] = useState(0);

  useEffect(() => {

      const updateFormTop = () => {
        if (formContainerRef.current) {
          setFormTop(formContainerRef.current.offsetTop);
        }
      };
    
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsFixed(scrollY >= formTop - 20);
      };
    
      updateFormTop(); // set initially
    
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateFormTop);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateFormTop);
      };
    }, [formTop]);


    const [openIndex, setOpenIndex] = useState(null); // initially no FAQ open

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    
    const faqData = [
      {
        question: 'What is FPO certification?',
        answer: 'The FPO(Fruit Products Order) certification is a mandatory certification that must be obtained by businesses in the processed fruit industry to run their operations legally in India. FSSAI issues the FPO mark certification for businesses to comply with the government-mandated quality and safety standards. Any business with FPO marks on its products symbolizes compliance with regulatory and legal norms and that processed fruit items have been produced under safe and hygienic conditions.',
      },
      {
        question: 'Who needs FPO Certification?',
        answer: 'Any manufacturer, processor, or seller involved in the production or packaging of fruit and vegetable products in India must obtain FPO Certification.'
      },
    
      {
        question: ' Why is FPO Certification important?',
        answer: 'It ensures your products comply with safety regulations, builds consumer trust, and is often mandatory for selling products through retail and export channels.',
      },
      {
        question: 'What are the documents required for FPO Certification?',
        answer: '1.Business registration proof \n 2.List of products \n 3. Manufacturing process details \n 4.Food safety management plan \n 5.Test reports of products \n 6.Identity and address proof of the applicant',
      },
      {
        question: ' What is the name of legislation dealing with Food waste?',
        answer: 'Food waste is dealt with under the Waste Management (Food Waste) Regulations, 2009.'
      },
      {
        question: ' What is meant by the Food Recycling License?',
        answer: 'The food recycling license means a NOC from the concerned SPCB, i.ee. Consent to Establish or Consent to Operate.'
      },
    ];


    const styles = {
      container: {
        width: '100%',
        margin: '0 10px',
        padding: '40px 70px',
        backgroundColor: 'white',
        fontFamily: 'Arial, sans-serif',
      },
      mainHeading: {
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#002145',
        // borderBottom: '4px solid #ed740a',
        paddingBottom: '0 px',
        marginBottom: '5 px',
      },
      accent: {
        color: '#ed740a',
      },
      paragraph: {
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.6',
        marginBottom: '20px',
        // lineHeight: '1.4'
      },
      sectionTitle: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#002145',
        borderLeft: '4px solid #ed740a',
        paddingLeft: '10px',
        marginBottom: '10px',
        marginTop: '30px',
      },
      list: {
        color: 'gray',
        fontSize: '16px',
        marginLeft: '20px',
        marginBottom: '20px',
        listStyleType: 'none', // ✅ This removes the bullet
      },
      docTitle: {
        fontSize: '20px',
        color: '#ed740a',
        fontWeight: '500',
        marginTop: '10px',
      },
      highlightBox: {
        width:'68%',
        backgroundColor: '  #f1f1f1',
        padding: '20px',
        borderLeft: '5px solid #ed740a',
        marginBottom: '30px',
        borderRadius: '5px',
      },
    };

    const sidebarItemStyle = {
        padding: '12px 16px',
        marginBottom: '8px',
        backgroundColor: '#f9f9f9',
        borderRadius: '4px',
        fontWeight: '600',
        color: '#002145',
        cursor: 'pointer',
        borderLeft: '4px solid #ed740a',
      };
      
      const linkStyle = {
        textDecoration: 'none',
        color: '#002145',
        display: 'block',
        fontWeight: 'bold',
        };

    const thStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
        };
        
    const tdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    verticalAlign: 'top',
    };



    const sidebarItems = [
        { label: "Overview", id: "overview" },
        { label: "Types Of FPO Certification", id: "Types" },
        { label: "Benefits", id: "benefits" },
        { label: "Require FPO", id: "requires" },
        { label: "Eligibility", id: "eligibility" },
        { label: "Documents", id: "documents" },
        { label: "How To Apply", id: "howtoapply" },
        // { label: "FilingLab Support", id: "filinglabsupport" },
        { label: "FAQ", id: "faq" },
      ];
      // const [isFixed, setIsFixed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        boxSizing: "border-box"
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          position: "sticky",
          top: "100px",
          alignSelf: "flex-start",
          backgroundColor: "#f8f8f8",
          borderRight: "1px solid #ddd",
          padding: "0",
        }}
      >
        {sidebarItems.map((item, index) => (
          <a
          key={index}
          href={`#${item.id}`}
          style={{
            display: "block",
            padding: "15px 20px",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#001F3F",
            borderBottom: "1px solid #e0e0e0",
            textDecoration: "none",
            cursor: "pointer"
          }}
        >
          {item.label}
        </a>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingLeft: "30px" }}>
        <section id="overview">
        <h1 id="overview"
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          FPO Certification – An Overview
        </h1>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
        <p style={styles.paragraph}>
          Are you engaged in the manufacturing or selling of processed fruit products in India? If
          yes, apply for FPO certification with Corpbiz expert consultants. FPO Mark certification
          guarantees the quality, safety, and hygiene of the processed fruits and vegetables
          available for consumption in India. FPO Certification, also known as Fruit Products Order
          Certification, is issued by the Ministry of Food Processing Industries (MoFPI) of the
          Government of India.
        </p>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
        <p style={styles.paragraph}>
          Regulated by FSSAI, FPO certification was introduced in 1955 to safeguard the interests of
          the consumers. This certificate is mandatory for various products, including dairy, honey,
          edible oils, biscuits, and fruit-based items, and businesses must obtain it to operate
          legally. The FPO mark symbolizes compliance, credibility, trust and fair trade practices.
        </p>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7" }}> */}
        <p style={styles.paragraph}>
          Are hurdles in the path of successful FPO certification troubling you? Let Corpbiz
          consultants remove the hurdles and streamline your fruits products order certification
          journey.
        </p>
        </section>


        <section id="Types">
          <h1 style={{ fontSize: "22px", fontWeight: "600", marginTop: "40px" }}>Types Of FPO Certification</h1>
          {/* <p style={{ fontSize: "17px", lineHeight: "1.7" }}> */}
          <p style={styles.paragraph}>
            Anyone in the processed fruit business must understand that different types of FPO certification are available in India. This certification is essential to running the business legally as it helps maintain compliance with safety standards across various categories such as fruits, vegetables, beverages, dairy, etc. Different types of FPO certification in India are below:</p>
        
          <h2 style={styles.sectionTitle}>1. Fruit-Based Products Certification</h2>
              <p style={styles.paragraph}>
               Fruit-based product FPO certification is required for products that include fruit items like jams, fruit concentrates, jellies, preserves and squashes. This certificate assures quality and compliance with food safety standards.
               </p>
             <h2 style={styles.sectionTitle}>2. Vegetable-Based Products Certification</h2>
               <p style={styles.paragraph}>
              Vegetable-based product certification is required for businesses that deal with pickles, canned vegetables, sauces, and other vegetable-derived products. Businesses can apply for FPO mark certification to ensure the genuineness and hygiene of their products.
              </p>
             <h2 style={styles.sectionTitle}>3. Beverages Certification</h2>
               <p style={styles.paragraph}>
               Beverages certification is required by businesses dealing in processed products, including syrups, fruit juices, and fruit-based drinks. This certification validates product compliance with quality and safety standards during manufacturing.
               </p>
             <h2 style={styles.sectionTitle}>4. Canned Fruit Products Certification</h2>
               <p style={styles.paragraph}>
               Businesses dealing with canned fruits, vegetables, and pulps must obtain this FPO certification in India. This certificate reflects the business's commitment to following hygiene standards during manufacturing.
               </p>
             <h2 style={styles.sectionTitle}>5. Frozen Fruit Products Certification</h2>
               <p style={styles.paragraph}>
               Frozen fruit products certification is a mandatory FPO certification required by businesses dealing with frozen fruits, vegetables, and purees. This certificate ensures the customers that adequate quality measures were followed throughout the freezing and storage processes.
               </p>
             <h2 style={styles.sectionTitle}>6. Dehydrated Products Certification</h2>
               <p style={styles.paragraph}>
               Businesses dealing with products such as dried fruits, vegetables, and powders must obtain this certificate to ensure compliance with the production of dehydrated food items.
              </p>
             <h2 style={styles.sectionTitle}>7. Edible Oils and Fats Certification</h2>
               <p style={styles.paragraph}>
              All manufacturers of edible oils, ghee, and butter must obtain this FPO certification, ensuring that safety and quality norms are followed during the manufacturing process.
               </p>

             <h2 style={styles.sectionTitle}>8. Honey Certification</h2>
               <p style={styles.paragraph}>
               This FPO mark certification is required for businesses involved in producing and processing honey. The FPO certificate ensures the purity of honey and guarantees compliance with all the necessary norms.
               </p>

             <h2 style={styles.sectionTitle}>9. Dairy Products Certification</h2>
               <p style={styles.paragraph}>
               Businesses that deal with milk products, such as butter, cream, and cheese, require FPO certification to operate hassle-free. This certificate is an assurance that dairy products are processed hygienically at the facility.
               </p>

             <h2 style={styles.sectionTitle}>10. Miscellaneous Processed Food Certification</h2>
               <p style={styles.paragraph}>
               Processed foods like biscuits and ready-to-eat meals are mandated to apply for fruit products order certification. This certificate ensures compliance with requirements and facilitates seamless access to the market.
               </p>      
        
        </section>

        <section id="benefits">

          <h1 id="benefits" style={styles.mainHeading}>Benefits of Obtaining Fruit Products Order Certification</h1>
            <p>Businesses must obtain fruit products order certification to ensure food quality, guarantee safety, and meet regulatory compliance. The FPO certification helps a business boost its goodwill, penetrate markets, and run its operations seamlessly. Businesses can conveniently apply for FPO mark certification and leverage the numerous benefits it offers, including:</p>
            
            <h2 style={styles.sectionTitle}>1. Ensures Product Quality</h2>
                <p style={styles.paragraph}>
                FPO certification ensures adherence to strict quality standards throughout the process of processed fruit production. One of the most important benefits of the FPO mark is that it guarantees hygiene, which in turn helps businesses earn the trust of their consumers.
                </p>

            <h2 style={styles.sectionTitle}>2. Compliance with Regulations</h2>
                <p style={styles.paragraph}>
                Businesses with FPO marks fulfil the FSSAI regulations, which helps them avoid penalties and boost credibility. Such businesses work within the country's legal frameworks, complying with norms to operate hassle-free.
                </p>
            <h2 style={styles.sectionTitle}>3. Boosts Consumer Trust</h2>
                <p style={styles.paragraph}>
                The FPO certification is a symbol of safety and hygienic manufacturing protocols. This certificate builds consumer confidence in the brand and improves brand loyalty amongst consumers, helping the business boost its profits and scale operations.
                </p>
            <h2 style={styles.sectionTitle}>4. Facilitates Market Expansion</h2>
                <p style={styles.paragraph}>
                Businesses with FPO Certification comply with mandatory regulations and norms, facilitating them to expand their operations across different domestic and international markets. Adherence to internationally accepted food safety standards helps them expand their consumer base easily.
                </p>  

            <h2 style={styles.sectionTitle}>5. Improves Product Labelling</h2>
                <p style={styles.paragraph}>
                Products certified with FPO mark certification in India are easily recognized and trusted by consumers for their compliance with norms. Such products are considered dependable for their quality, safety, and authenticity, giving the business a competitive edge to boost profitability.
                </p>  

            <h2 style={styles.sectionTitle}>6. Simplifies Export Opportunities</h2>
                <p style={styles.paragraph}>
                Fruit products order certification is mandatory for businesses keen to venture into exports. Since the FPO certification aligns with global food safety norms, it enables such businesses to trade seamlessly in international markets.
                </p> 

            <h2 style={styles.sectionTitle}>7. Streamlined Online Certification</h2>
                <p style={styles.paragraph}>
                Online FPO products certification enables businesses to apply for the certificate online, facilitating a smooth process by simplifying complex and exhaustive process requirements such as heavy paperwork. The online application makes it easy for businesses to get quick approvals from the authorities.
                </p> 

            <h2 style={styles.sectionTitle}>8. Enhances Brand Value</h2>
                <p style={styles.paragraph}>
                The FPO mark certification in India reflects the business's commitment to quality and safety, which is the backbone of success in this industry. This certificate outlines the efforts to stay competitive by delivering qualitative products, helping earn customer loyalty to drive profitability.
                </p> 

            <h2 style={styles.sectionTitle}>9. Encourages Hygienic Practices</h2>
                <p style={styles.paragraph}>
                FPO Mark Certification encourages businesses to adopt hygienic manufacturing practices, which helps safeguard consumers' health. It also places such businesses as responsible manufacturers, strengthening their reputation.
                </p>

            <h2 style={styles.sectionTitle}>10. Supports Long-Term Growth</h2>
                <p style={styles.paragraph}>
                Businesses that voluntarily apply for FPO mark certification follow universally accepted best industry practices, follow efficient production techniques, fulfil consumer expectations, and promote sustainable growth models in their daily operations.
                </p>

            </section>

            <section id="requires"> 

                  <h1 id="requires"style={styles.mainHeading}>Fruit Products that Require FPO Certification</h1>
                  <p style={styles.paragraph}>
                  Various fruit products are mandated to obtain FPO certification to ensure compliance with food safety norms, quality and safety standards. These products include a wide range of processed items, including jams, dairy products, and beverages. Let us explore the other important products below:
                  </p>

                <h2 style={styles.sectionTitle}>1. Fruit-Based Products</h2>
                  <p> ✅ Jams, jellies, marmalades - Like pineapple jam and orange marmalade</p>
                  <p> ✅ Fruit concentrates and squashes - Like strawberry-flavoured squash</p>
                  <p> ✅ Preserves, chutneys, fruit pulp - Watermelon preserves and mint chutney</p>
                  
                <h2 style={styles.sectionTitle}>2. Vegetable-Based Products</h2>
                  <p> ✅ Sauces and pickles - Like tomato sauce and mixed veg pickles</p>
                  <p> ✅ Preserved and Canned vegetables - Like baked beans</p>
                  <p> ✅ Vegetable pastes and purees - Like ginger-garlic paste and tomato puree</p>
                  
                <h2 style={styles.sectionTitle}>3. Beverages</h2>
                  <p> ✅ Fruit juices and nectars - Like mango juice</p>
                  <p> ✅ Syrups and fruit-based drinks - Like grape-flavoured drinks</p>
                  <p> ✅ Carbonated fruit beverages - Like pineapple basil seed drink</p>

                <h2 style={styles.sectionTitle}>4. Canned Fruit Products</h2>
                  <p> ✅ Canned fruits and vegetables - Like baked beans</p>
                  <p> ✅ Canned fruit pulps and purees - Like tomato puree</p>
                
                <h2 style={styles.sectionTitle}>5. Frozen Fruit Products</h2>
                  <p> ✅ Frozen fruits and vegetables - Like frozen peas</p>
                  <p> ✅ Frozen fruit purees and concentrates - Like frozen raspberry puree</p>

                <h2 style={styles.sectionTitle}>6. Dehydrated Products</h2>
                  <p> ✅ Dried fruits and vegetables - Like almonds, walnuts and raisins</p>
                  <p> ✅ Fruit and vegetable powders - Like lemon powder</p>

                <h2 style={styles.sectionTitle}>7. Edible Oils and Fats</h2>
                  <p> ✅ Refined and processed oils - Like sunflower and canola oil</p>
                  <p> ✅ Ghee and butter - Like A2 cow ghee and garlic-flavoured butter</p>

                <h2 style={styles.sectionTitle}>8. Dairy-Based Products</h2>
                  <p> ✅ Milk-based beverages - Like toned milk and buttermilk</p>
                  <p> ✅ Paneer and other dairy products - Like cottage cheese and soy cheese</p>

                <h2 style={styles.sectionTitle}>9. Honey and Sweeteners</h2>
                  <p> ✅ Honey and honey-based products</p>

                <h2 style={styles.sectionTitle}>10. Miscellaneous Processed Foods</h2>
                  <p> ✅ Biscuits and bakery products - Like dry fruit cakes</p>
                  <p> ✅ Ready-to-eat and packaged foods - Like chips and potato bites</p>

            </section>

          <section id="eligibility">

                <h1 style={styles.mainHeading}>Eligibility Criteria for FPO Certification in India</h1>
                  <p style={styles.paragraph}>
                  It is important for businesses to maintain the eligibility criteria if they want to apply for FPO mark certification. Fruit product order certification is a mark of quality, ensuring that available products are safe for consumption. Applicants are mandated to fulfil various criteria for FPO certification, including the ones mentioned below:
                  </p>

                  <h2 style={styles.sectionTitle}>1. Registered Business Entity</h2>
                    <p> One of the most important criteria is that the applicant should be a registered business entity. Any legally registered business such as sole proprietorship, partnership, private or public limited companies and even cooperatives are eligible for FPO certification.</p>

                  <h2 style={styles.sectionTitle}>2. FSSAI License</h2>
                    <p> Applicants must first consider applying for an FSSAI license if they don't have it when applying for FPO certification. FSSAI license is a mandatory prerequisite, implying adherence to food safety regulations.</p>
              
                  <h2 style={styles.sectionTitle}>3. Manufacturing Facility</h2>
                    <p> It is mandatory for applicants to own or have a leased manufacturing facility equipped to produce processed fruit products in compliance with safety and hygienic benchmarks outlined by FSSAI.</p>

                  <h2 style={styles.sectionTitle}>4. Product Category</h2>
                    <p> Businesses that want to apply for FPO mark certification should ensure their products fulfil the product category to be eligible to proceed with the application process. Enterprises dealing with products, including fruits, vegetables and processed food items, such as jams, juices, pickles and canned products, can apply for FPO certification.</p>

                  <h2 style={styles.sectionTitle}>5. Quality Control System</h2>
                    <p> Businesses that apply for FPO mark certification in India should have robust quality assurance measures in place, such as processes for regular testing. They must also fulfil the required safety protocols in processed fruit production.</p>

                  <h2 style={styles.sectionTitle}>6. Infrastructure Compliance</h2>
                    <p> Any business applying for online FPO products certification should meet the infrastructure compliance eligibility criteria. All such manufacturing units should be readily prepared to operate food handling, processing, storage and packaging procedures safely.</p>

                  <h2 style={styles.sectionTitle}>7. Employee Health</h2>
                    <p> Manufacturing facilities should ensure that workers involved in production maintain valid health certificates as mandated by the guidelines to facilitate health and hygiene standards.</p>

                  <h2 style={styles.sectionTitle}>8. Record Maintenance</h2>
                    <p> Businesses that apply for FPO certification must maintain proper records of their operational dealings, such as sources of raw material, production processes, and quality testing inspection reports.</p>

                  <h2 style={styles.sectionTitle}>9. Trademark Registration (if applicable)</h2>
                    <p> Businesses that operate under a unique brand name or logo must ensure to file for trademark registration. Businesses can legally use their logo on fruit products to establish their brand identity. However, registering their logo or brand name under the trademark validates the same.</p>

                  <h2 style={styles.sectionTitle}>10. Application Submission</h2>
                    <p> Applicants must fill out the application form and enter accurate details. They must also attach all the required documents to be able to submit their FPO certification application for quick processing.</p>

               </section>
                
            <section id="documents">

              <h1 style={styles.mainHeading}>Documents Required to Apply for FPO Mark Certification</h1>

                <p>Any business that wants to apply for FPO mark certification must submit various documents to the relevant authorities as a part of the application process. Documents needed for verification include the following:</p>

                <p style={styles.paragraph}> <strong>1. Application Form - </strong> Duly filled application form along with the stipulated.</p>
                <p style={styles.paragraph}>2. Business Registration Certificate - Validating the registration of the business as a legal entity.</p>
                <p style={styles.paragraph}><strong>3. PAN Card & GST Registration -</strong> Help verify the business's adherence to tax laws and regulations.</p>
                <p style={styles.paragraph}><strong>4. FSSAI License - </strong>A valid FSSAI license is mandated to operate the manufacturing unit legally.</p>
                <p style={styles.paragraph}><strong>5. Food Safety Management Plan - </strong>Outlines details of hygienic practices and safety standards followed during food processing.</p>
                <p style={styles.paragraph}><strong>6. Manufacturing Facility Details - </strong>Design and layouts of the manufacturing plant and the production process.</p>
                <p style={styles.paragraph}><strong>7. List of Equipment & Machinery - </strong>Details about equipment and machinery used and stock of machines to meet compliance requirements.</p>
                <p style={styles.paragraph}><strong>8. List of Ingredients -  </strong>Detailed list of all the ingredients required and used during manufacturing.</p>
                <p style={styles.paragraph}><strong>9. Product Details -  </strong>Details about the fruit products being manufactured, including the composition, ingredients used, and labels displaying essential product details in line with FPO norms.</p>
                <p style={styles.paragraph}><strong>10. Quality Control Reports -  </strong>Reports of lab tests and in-house test results verifying product safety and compliance.</p>
                <p style={styles.paragraph}><strong>11. Quality Assurance Plan -  </strong>Documents that outline the quality control benchmarks executed during the manufacturing process.</p>
                <p style={styles.paragraph}><strong>12. Labelling Details -   </strong> Product labels displaying important product information, including name, address, and compliance.</p>
                <p style={styles.paragraph}><strong>13. Ownership or Lease Documents -  </strong>Documents proving the manufacturer's ownership over the facility, including sale deed, lease agreement or rental agreement.</p>
                <p style={styles.paragraph}><strong>14. Employee Health Certificates -  </strong>Medical certificates of staff members involved in the manufacturing process.</p>
                <p style={styles.paragraph}><strong>15. Trademark Registration (if applicable) -  </strong>Proof of trademark registration for the fruit products.</p>

              </section>


            <section id="howtoapply">

              <h1 style={styles.mainHeading}>How to Apply for FPO Mark Certification in India?</h1>
                  <p style={styles.paragraph}>
                  The process to apply for FPO mark certification in India follows various steps that businesses must follow to ensure compliance with regulations and food safety norms. Following a step-by-step procedure facilitates a quick turnaround time in getting the approvals for FPO certification. It includes the following:
                  </p>
                  <h2 style={styles.sectionTitle}>1. Determine Eligibility</h2>
                    <p> The first step in the process of FPO certification is to meet the eligibility criteria, such as business registration, FSSAI license and fulfilling hygiene and safety norms.</p>

                  <h2 style={styles.sectionTitle}>2. Prepare Required Documents</h2>
                    <p> The next step involves collecting the necessary paperwork to proceed further. Documents include application forms, business registration certificates, FSSAI licenses, manufacturing unit details - blueprints and layouts, product details, and quality control reports.</p>

                  <h2 style={styles.sectionTitle}>3. Online Registration</h2>
                    <p> Once documents are collected, the next step comprises visiting the official website of FSSAI to commence the online FPO products certification application process. You can also contact FPO certification consultants to help you with the application process.</p>
                  
                  <h2 style={styles.sectionTitle}>4. Fill Application Form</h2>
                    <p> Next, you must fill out the application form and ensure it contains no mistakes. Filling accurate details saves time and helps you manage quick approvals. You must verify your business details before submitting the online form and fix any discrepancies.</p>
                  
                  <h2 style={styles.sectionTitle}>5. Submit Documents</h2>
                    <p> Once you have filled out the application form, you must also upload the relevant documents for submission along with the form and ensure that all the details are filled in as per the FSSAI guidelines.</p>
                  
                  <h2 style={styles.sectionTitle}>6. Pay the Fee</h2>
                    <p> You must pay the prescribed fee along with the online application or as per the instructions mentioned by the certification authority. You must save the payment receipt for future use and reference.</p>
                  
                  <h2 style={styles.sectionTitle}>7. Facility Inspection</h2>
                    <p> Once the application is submitted and the fee is paid, FSSAI officially schedules the inspection of your manufacturing unit to validate its compliance with the required hygiene and safety norms and production criteria.</p>

                  <h2 style={styles.sectionTitle}>8. Product Testing</h2>
                    <p> You must submit some product samples for testing at the labs approved by FSSAI. This is necessary to ensure hygiene compliance and that the products are safe for consumption.</p>

                  <h2 style={styles.sectionTitle}>9. Verification and Approval</h2>
                    <p> Once the above steps are complete, FSSAI reviews the application, inspection reports and test results to determine if your manufacturing unit is fit to produce food items as per regulatory and safety compliance. If satisfied, FSSAI grants you the FPO certification, enabling you to launch your food processing business in India legally.</p>

                  <h2 style={styles.sectionTitle}>10. Receive Certification</h2>
                    <p> Once your application is approved, FSSAI issues an FPO certification, making it eligible for you to officially use the FPO mark on your fruit products.</p>

                  <h2 style={styles.sectionTitle}>11. Renew Certification</h2>
                    <p> You need to ensure the validity of your FPO certification. You must renew the application per the renewal guidelines to stay compliant and use the FPO mark without legal issues or hassles.</p>
                
              </section>

              <section id="faq">
                <div style={{ width: '100%', marginTop: '50px' }}>
                          <h2 id="faq"style={styles.sectionTitle}>Frequently Asked Questions</h2>
                      {faqData.map((item, index) => (
                          <div
                              key={index}
                              style={{
                              border: '1px solid #ddd',
                              borderRadius: '8px',
                              marginBottom: '10px',
                              overflow: 'hidden',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                              }}
                          >
                              <button
                              onClick={() => toggleFAQ(index)}
                              style={{
                                  width: '100%',
                                  textAlign: 'left',
                                  padding: '15px 20px',
                                  background: '#f9f9f9',
                                  fontSize: '16px',
                                  fontWeight: '600',
                                  border: 'none',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                              }}
                              >
                              {item.question}
                              <span
                                  style={{
                                  display: 'inline-block',
                                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s ease',
                                  }}
                              >
                                  ▼
                              </span>
                              </button>
                              {openIndex === index && (
                              <div style={{ padding: '15px 20px', backgroundColor: '#fff', color: '#444' }}>
                                  {item.answer}
                              </div>
                              )}
                          </div>
                          ))}
                      </div>
              </section>


        </div>

            {/* Sticky Form: Right Side */}
            <div style={{
                  width: '350px',
                  marginRight: '40px',
                  flexShrink: 0,
                  position: isFixed ? 'sticky' : 'relative',
                  top: isFixed ? '100px' : 'auto',
              }}>
                  <StickyForm />
                  {/* <FSSAILicenseRelatedService /> */}
              </div>
              

          

    </div>

    

    
  );
};

export default FPOMarkCertificationContentSection;
