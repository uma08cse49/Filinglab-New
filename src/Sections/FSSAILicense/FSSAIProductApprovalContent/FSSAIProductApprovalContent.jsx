import React, { useRef, useEffect, useState } from 'react';
import StickyForm from "../../../Components/StickyForm";
import FSSAILicenseRelatedService from '../FSSAILicenseRelatedService/FSSAILicenseRelatedService';




const styles = {
  container: {
    width: '100%',
    margin: '0 10px',
    padding: '40px 70px',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  mainHeading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#002145',
    borderBottom: '4px solid #ed740a',
    paddingBottom: '10px',
    marginBottom: '30px',
  },
  accent: {
    color: '#ed740a',
  },
  paragraph: {
    color: 'gray',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
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

const FSSAIProductContentSection = ({ city }) => {

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
    question: 'What is FSSAI Product Approval?',
    answer: 'It’s the process where FSSAI approves a food product containing ingredients or additives that are not as per prescribed Indian standards.',
  },
  {
    question: 'Who approves food products in India?',
    answer: 'The Food Safety and Standards Authority of India (FSSAI) is the main approving authority.It implements & drafts regulations of the manufacture & sale of food products in India.',
  },
  {
    question: 'Who can apply for FSSAI License or Registration?',
    answer: 'Any person or food business operator involved in manufacturing, processing, packaging, storage, distribution, or sale of food products.',
  },
  {
    question: 'What is FSSAI Certificate?',
    answer: 'It’s a license issued by FSSAI to ensure the food business complies with safety and hygiene standards.',
  },
  {
    question: 'What are the Different Type of FSSAI License in India ?',
    answer: 'Types of FSSAI Licenses in India: FSSAI Basic License.'
                // 'FSSAI State License.',
                // 'FSSAI Central License.'
  },
  {
    question: 'Which food item or product requires product approval ?',
    answer: 'Food products including food additives or ingredients for which there are no standards informed by FSSAI will require this approval.'
  },
];

const sidebarItems = [
    { label: "Overview", id: "overview" },
    { label: "Benefit", id: "benefit" },
    { label: "Information Required", id: "info-required" },
    { label: "Registration Procedure", id: "registration" },
    { label: "FAQ", id: "faq" },
  ];

  

  
//   return (   

//     <div style={styles.container}>
//       <div style={{ display:'flex', justifyContent: 'space-between',alignItems: 'flex-start', width: '100%', marginBottom:'20px', padding:'20px', gap: '20px',background:'#f1f1f1', boxSizing: 'border-box', }}>
//         <div style={{padding:'20px',width:'70%'}}>
//             {/* Sidebar: Aligned to the left */}
//             <div style={{
//                 width: '220px',
//                 marginLeft: '40px',
//                 flexShrink: 0,
//             }}>
//                 <ul style={{ listStyle: 'none', padding: 0 }}>
//                 {["Overview", "Benefit", "Information Required", "Registration Procedure", "Faq"].map((item, index) => (
//                     <li
//                     key={index}
//                     style={{
//                         background: '#fff',
//                         marginBottom: '12px',
//                         padding: '14px 16px',
//                         borderLeft: '5px solid #ed740a',
//                         borderRadius: '6px',
//                         fontWeight: 'bold',
//                         color: '#002145',
//                         cursor: 'pointer',
//                         boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
//                     }}
//                     >
//                     {item}
//                     </li>
//                 ))}
//                 </ul>
//             </div>

// {/* 
//         <div style={{ width: '20%', minWidth: '160px' }}>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//             <li style={sidebarItemStyle}>Overview</li>
//             <li style={sidebarItemStyle}>Benefit</li>
//             <li style={sidebarItemStyle}>Information Required</li>
//             <li style={sidebarItemStyle}>Registration Procedure</li>
//             <li style={sidebarItemStyle}>Faq</li>
//             </ul>
//         </div> */}


//         <h1 style={styles.mainHeading}>
//         An Overview of FSSAI Product Approval
//         </h1>



//         <p style={styles.paragraph}>
//         FSSAI Product Approval is the process or method by which a product or item gets approved by the FSSAI or Food Safety and Standard Authority of India. FSSAI Product Approval is needed for products or items which contains additives and/or ingredients that are not as per suggested standards in the Food Safety & Standards Act and Regulations. This approval is granted at the level of the Central Government.
//         </p>

//         <p style={styles.paragraph}>If you want to apply for a Product Approval of ingredients, you can apply online. Through its online FPAS (Food Product Approval System), FSSAI has streamlined the application procedure and made it more convenient for FBOs (Food Business Operators).</p>
//         <p style={styles.paragraph}>Standards and Regulations created by FSSAI to make sure the obtainability of wholesome and safe food for consumption. To make sure the availability of safe & hygiene food for customers, FSSAI had introduced guidelines stating that, before introducing any new food items of products except standard products in the market, it's compulsory for the manufacturers to get their food approved by the FSSAI. According to the FSSAI, Product Approval is a complete validation to make products or items traded in the Indian markets. FSSAI maintains vigilance on each & every new product been launched in the market.</p>
//         <p style={styles.paragraph}>With the execution of FSSAI Regulations, it has become vital for Food Business Operators to get a valid FSSAI Registration and license for carrying out business in the food industry. Food Business Operators also need to get the FSSAI food consent before presenting any new item or food in the market for customer use.</p>

//         {/* <p style={styles.paragraph}>
//         The entire process of starting a business is not easy, and you will face many inconveniences before you can start. This includes issues related to a lack of knowledge and awareness about GST registration and its compliances.
//         </p>

//         <p style={styles.paragraph}>
//         So, what are you waiting for? Secure your GST registration in {city} from our seasoned GST Registration Consultants today!
//         </p> */}

//                 </div>

//                 <div
//                 ref={formContainerRef}
//                 style={{
//                 flex: 1,
//                 width: '300px',
//                 position: isFixed ? 'fixed' : 'static',
//                 top: isFixed ? '100px' : 'auto',
//                 // right: isFixed ? '185px' : '0px'
//                 right: 50,
//                 }}
//             >
//                 <StickyForm />
//             </div> 
//             </div>
            

            

//         <div style={styles.highlightBox}>
//         <p style={{ ...styles.paragraph, color: '#002145', fontWeight: '600' }}>
//         FSSAI Online System
//         </p>
//         <p style={styles.paragraph}>
//         The process of FSSAI Product Approval used to manual wherein the application for FSSAI Product Approval and a DD or Demand Draft for the suggested fee had to be submitted to the FSSAI Office in New Delhi. But, to cope with the increase in FSSAI Product Approval applications and bring transparency into the system, recently, FSSAI introduced the FPAS (Food Product Approval System). The application for FSSAI Product Approval can be submitted now and tracked online via the FSSAI FPAS Online System.
//         </p>
//         {/* <p style={styles.paragraph}>
//         The food business is very delicate, and before starting the business, a person must ensure that the food product being used is not harmful to the consumers. Therefore, strict rules and guidelines are issued to ensure complete food safety. The major importance of the FSSAI License is that it ensures that the food is verified substantially and there is no harm to the consumers. The Food business is unsafe for many allegations of food contamination and the use of low-priced ingredients. FSSAI license protects the food business from such allegations as it acts as proof of the fact that your food is safe and perfectly edible without any health consequences.
//         </p> */}
//         </div>

//         <h2 style={styles.sectionTitle}>When do you need FSSAI Product Approval in India?</h2>
//         <p style={styles.paragraph}>
//         Following are some points where you need FSSAI Product Approval::
//         </p>
//         <ul style={styles.list}>
//         <li>🛡️ The current license owner whose product or item safety valuation has not been performed.</li>
//         <li>🛡️ Introduction of ingredients or products which are new to the industry.</li>
//         <li>🛡️A proprietary product that needs approval before presenting to the market.</li>
//         <li>🛡️If the product's safety valuation was not performed earlier.</li>
//         <li>🛡️The product or ingredient have not been used/produced in any nation across the world.</li>
//         </ul>

//         <div style={{ width: '68%', marginTop: '40px' }}>
//         <h2 style={styles.sectionTitle}>Types of FSSAI Registration</h2>
//         {/* 
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//             <div style={{
//             flex: '1',
//             minWidth: '280px',
//             border: '1px solid #ddd',
//             borderRadius: '10px',
//             padding: '20px',
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//             }}>
//             <h3 style={{ fontSize: '20px', color: '#ed740a' }}>Basic FSSAI Registration</h3>
//             <p style={{ fontWeight: 'bold', color: '#002145', marginTop: '10px' }}>For small businesses</p>
//             <p style={styles.paragraph}>
//                 Suitable for food businesses with an annual turnover below ₹12 lakhs. Ideal for petty retailers, food vendors, and cottage industries.
//             </p>
//             </div>

//             <div style={{
//             flex: '1',
//             minWidth: '280px',
//             border: '1px solid #ddd',
//             borderRadius: '10px',
//             padding: '20px',
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//             }}>
//             <h3 style={{ fontSize: '20px', color: '#ed740a' }}>State FSSAI License</h3>
//             <p style={{ fontWeight: 'bold', color: '#002145', marginTop: '10px' }}>For mid-sized businesses</p>
//             <p style={styles.paragraph}>
//                 Required for businesses with turnover between ₹12 lakhs and ₹20 crores. Applies to medium-sized manufacturers, storage units, and distributors.
//             </p>
//             </div>

//             <div style={{
//             flex: '1',
//             minWidth: '280px',
//             border: '1px solid #ddd',
//             borderRadius: '10px',
//             padding: '20px',
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//             }}>
//             <h3 style={{ fontSize: '20px', color: '#ed740a' }}>Central FSSAI License</h3>
//             <p style={{ fontWeight: 'bold', color: '#002145', marginTop: '10px' }}>For large businesses</p>
//             <p style={styles.paragraph}>
//                 Required for large-scale operators or those operating in multiple states with turnover exceeding ₹20 crores. Also mandatory for food import/export.
//             </p>
//             </div>
//         </div> */}
//         <p style={styles.paragraph}>
//         Following are some benefits of FSSAI Product Approval:
//         </p>
//         <ul style={styles.list}>
//         <li>🛡️ Your standardised examination processes confirm the minimal loss of time & regulation risk.</li>
//         <li>🛡️ Your brand will be highly public confidence as a products' seller that is entirely safe for consumption.</li>
//         <li>🛡️As the safety & quality tests are accurate and benchmarked to global standards. Even global customers will be confident regarding the quality of your food products.</li>
//         <li>🛡️You will be profited by an enlarged network due to aggressive industry engagement across stakeholders.</li>
//         </ul>


//         </div>



//         <div style={{width:'68%'}}>
//         <h2 style={styles.sectionTitle}>Information Required for FSSAI Product Approval</h2>
//         <p style={styles.paragraph}>
//         Following are the information required for making an FSSAI Product Approval application:
//         </p>
//         <ul style={styles.list}>
//         {/* <li>
//             Any business whose aggregate turnover in a financial year exceeds ₹20 lakhs (₹10 lakhs for special category states in GST).<br />
//             <strong>Note:</strong> This clause does not apply if the entity only deals in the supply of goods/services exempt under GST.
//         </li> */}
//         <li>✅ Business Name.</li>
//         <li>✅ Business Address.</li>
//         <li>✅ Brand Name.</li>
//         <li>✅ Method of Manufacturing.</li>
//         <li>✅ Claim, if any?.</li>
//         <li>✅ Product's Shelf Life.</li>
//         <li>✅ Pack Size.</li>
//         <li>✅ Serving Details.</li>
//         <li>✅ Ingredients Details.</li>
//         <li>✅ Email.</li>
//         <li>✅ Phone Number.</li>
//         <li>✅ Manufacturers Address.</li>
//         <li>✅ Product Origin.</li>
//         <li>✅ Country of Origin.</li>
//         <li>✅ Existence in the Market.</li>
//         <li>✅ Common Name.</li>

//         <p style={styles.paragraph}>
//         Additionally, following Documents should be submitted also along with the application of FSSAI Product Approval:
//         </p>
//         <li>✅ Manufacturing method.</li>
//         <li>✅ Datasheet of real-time stability.</li>
//         <li>✅ Analysis Certificate from NABL Lab.</li>
//         <li>✅ Form-9 & Undertaking.</li>
//         <li>✅ Accelerated stability datasheet.</li>
//         <li>✅ Label for the food item or product.</li>
//         <li>✅ End-Use Declaration Document.</li>
//         </ul>
//         </div>
//         {/* 
//         <div style={{width:'68%'}}>
//         <h2 style={styles.sectionTitle}>Eligibility Criteria for GST Registration in {city}</h2>
//         <p style={styles.paragraph}>
//         Have a look at the eligibility criteria for GST registration in {city}:
//         </p>
//         <ul style={styles.list}>
//         <li>
//             Anyone filing taxes in {city} having a turnover of more than ₹40 lakhs for the sale of goods and ₹20 lakhs for the sale of services
//         </li>
//         <li>Businesses engaging in inter-state taxable supplies</li>
//         <li>Casual and Non-Resident Taxable Persons</li>
//         <li>Persons required to pay tax under the reverse charge mechanism</li>
//         <li>Voluntary registration for availing input tax credit or business expansion</li>
//         </ul>
//         </div> */}

//         <h2 style={styles.sectionTitle}>Procedure for Getting FSSAI Product Approval in India</h2>

//         <p style={styles.paragraph}>
//         Following is the procedure for getting FSSAI Product Approval:
//         </p>

//         <h3 style={styles.docTitle}><strong>Company Incorporation</strong></h3>
//         <p style={styles.paragraph}>
//         Basically, FSSAI Product Approval is an intangible asset for any business or company and it gives the business with authority to either manufacture or markets a certain type of food product in India. In addition, each product approval is granted only after a significant amount of processing time and involves payment of high processing fees to FSSAI. Therefore, it has been advised that the FSSAI Product Approval application is filed from any entity such as Private Limited Company or LLP (Limited Liability Partnership) so as to transfer the company or business easily at a later time with the FSSAI License (if needed).
//         </p>

//         <h3 style={styles.docTitle}><strong>FBO License</strong></h3>
//         <p style={styles.paragraph}>
//         A FBO or Food Business Operator License is vital for businesses that are involved in the selling, manufacturing, or handling of food items or products. A copy of the FBO License Certificate should be submitted while applying for food product approval. Hence, it is advisable that an FBO License is obtained in the business name (if required).
//         </p>

//         <h3 style={styles.docTitle}><strong>Test Reports</strong></h3>
//         <p style={styles.paragraph}>
//         The Food Product Approval application shall be submitted with certain test reports from NABL accredited labs. But, the NABL lab reports are used to authenticate the claims, label claims, and other aspects of the food product. For the food product, the type of tests to be conducted will vary based on the product's nature.
//         </p>

//         <h3 style={styles.docTitle}><strong>Label of the Product</strong></h3>
//         <p style={styles.paragraph}>
//         It's compulsory to contain a product label for FSSAI Product Approval. The label may be a prototype and need not be printed. It's vital to make sure that the food product label follows the FSSAI food product labelling standards in India.
//         </p>

//         <h3 style={styles.docTitle}><strong>Submitting the Application</strong></h3>
//         <p style={styles.paragraph}>
//         After submitting all the vital Documents, the application for FSSAI Product Approval can be made through the FPAS or Food Product Approval System. However, it's vital to have an expert while preparing & submitting the application.
//         </p>

//         <div style={{ width: '68%', marginTop: '50px' }}>
//             <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
//             {faqData.map((item, index) => (
//             <div
//                 key={index}
//                 style={{
//                 border: '1px solid #ddd',
//                 borderRadius: '8px',
//                 marginBottom: '10px',
//                 overflow: 'hidden',
//                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
//                 }}
//             >
//                 <button
//                 onClick={() => toggleFAQ(index)}
//                 style={{
//                     width: '100%',
//                     textAlign: 'left',
//                     padding: '15px 20px',
//                     background: '#f9f9f9',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     border: 'none',
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     cursor: 'pointer',
//                 }}
//                 >
//                 {item.question}
//                 <span
//                     style={{
//                     display: 'inline-block',
//                     transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
//                     transition: 'transform 0.3s ease',
//                     }}
//                 >
//                     ▼
//                 </span>
//                 </button>
//                 {openIndex === index && (
//                 <div style={{ padding: '15px 20px', backgroundColor: '#fff', color: '#444' }}>
//                     {item.answer}
//                 </div>
//                 )}
//             </div>
//             ))}
//         </div>



//     </div>



// ===========================================================================================================================================
return (  
<div style={styles.container}>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: '#f1f1f1',
        padding: '30px 0',
    }}>

    <ul style={{ listStyle: 'none', padding: 0 }}>
        {sidebarItems.map((item) => (
            <li key={item.id} style={sidebarItemStyle}>
            <a href={`#${item.id}`} style={linkStyle}>{item.label}</a>
            </li>
        ))}
    </ul>


    {/* Main Content: Centered */}
    {/* <div style={{
        flex: 1,
        maxWidth: '700px',
        margin: '0 40px',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        borderRadius: '8px',
    }}> */}
        <div style={{
            flex: 1,
            overflowY: 'auto',
            maxHeight: '100vh',
            height: '100vh',
            padding: '40px',
            backgroundColor: '#fff',
            scrollbarWidth: 'none',         // Firefox
            msOverflowStyle: 'none',        // IE/Edge
        }}>
        {/* ⬇️ Insert your actual content sections here */}
        <h1 id = "overview" style={styles.mainHeading}>An Overview of FSSAI Product Approval</h1>
            <p style={styles.paragraph}>...</p>
            <p style={styles.paragraph}>
                FSSAI Product Approval is the process or method by which a product or item gets approved by the FSSAI or Food Safety and Standard Authority of India. FSSAI Product Approval is needed for products or items which contains additives and/or ingredients that are not as per suggested standards in the Food Safety & Standards Act and Regulations. This approval is granted at the level of the Central Government.
            </p>

            <p style={styles.paragraph}>If you want to apply for a Product Approval of ingredients, you can apply online. Through its online FPAS (Food Product Approval System), FSSAI has streamlined the application procedure and made it more convenient for FBOs (Food Business Operators).</p>
            <p style={styles.paragraph}>Standards and Regulations created by FSSAI to make sure the obtainability of wholesome and safe food for consumption. To make sure the availability of safe & hygiene food for customers, FSSAI had introduced guidelines stating that, before introducing any new food items of products except standard products in the market, it's compulsory for the manufacturers to get their food approved by the FSSAI. According to the FSSAI, Product Approval is a complete validation to make products or items traded in the Indian markets. FSSAI maintains vigilance on each & every new product been launched in the market.</p>
            <p style={styles.paragraph}>With the execution of FSSAI Regulations, it has become vital for Food Business Operators to get a valid FSSAI Registration and license for carrying out business in the food industry. Food Business Operators also need to get the FSSAI food consent before presenting any new item or food in the market for customer use.</p>
            
        <h1 style={styles.mainHeading}>FSSAI Online System</h1>
            <p style={styles.paragraph}>
            The process of FSSAI Product Approval used to manual wherein the application for FSSAI Product Approval and a DD or Demand Draft for the suggested fee had to be submitted to the FSSAI Office in New Delhi. But, to cope with the increase in FSSAI Product Approval applications and bring transparency into the system, recently, FSSAI introduced the FPAS (Food Product Approval System). The application for FSSAI Product Approval can be submitted now and tracked online via the FSSAI FPAS Online System.
            </p>

        <h1 style={styles.mainHeading}>When do you need FSSAI Product Approval in India?</h1>
            <p style={styles.paragraph}>
            Following are some points where you need FSSAI Product Approval:
            </p>
            <ul style={styles.list}>
                <li>🛡️ The current license owner whose product or item safety valuation has not been performed.</li>
                <li>🛡️ Introduction of ingredients or products which are new to the industry.</li>
                <li>🛡️ A proprietary product that needs approval before presenting to the market.</li>
                <li>🛡️ If the product's safety valuation was not performed earlier.</li>
                <li>🛡️ The product or ingredient have not been used/produced in any nation across the world.</li>
            </ul>
        <h1 id="benefit" style={styles.mainHeading}>Benefits of Getting FSSAI Product Approval</h1>
            <p style={styles.paragraph}>
            Following are some benefits of FSSAI Product Approval:
            </p>
            <ul style={styles.list}>
                <li>🛡️ Your standardised examination processes confirm the minimal loss of time & regulation risk.</li>
                <li>🛡️ Your brand will be highly public confidence as a products' seller that is entirely safe for consumption.</li>
                <li>🛡️ As the safety & quality tests are accurate and benchmarked to global standards. Even global customers will be confident regarding the quality of your food products.</li>
                <li>🛡️ You will be profited by an enlarged network due to aggressive industry engagement across stakeholders.</li>
            </ul>

        <h1 id="info-required" style={styles.mainHeading}>Information Required for FSSAI Product Approval</h1>
            <p style={styles.paragraph}>
            Following are the information required for making an FSSAI Product Approval application:
            </p>
            <ul style={styles.list}>
                <li>🛡️ Business Name.</li>
                <li>🛡️ Business Address.</li>
                <li>🛡️ Brand Name.</li>
                <li>🛡️ Method of Manufacturing.</li>
                <li>🛡️ Claim, if any?.</li>
                <li>🛡️ Product's Shelf Life.</li>
                <li>🛡️ Pack Size.</li>
                <li>🛡️ Serving Details.</li>
                <li>🛡️ Ingredients Details.</li>
                <li>🛡️ Email.</li>
                <li>🛡️ Phone Number.</li>
                <li>🛡️ Manufacturers Address.</li>
                <li>🛡️ Type of Business (Manufacturer / Importer / Retailer / Marketer).</li>
                <li>🛡️ Product Origin.</li>
                <li>🛡️ Country of Origin.</li>
                <li>🛡️ Existence in the Market.</li>
                <li>🛡️ Common Name.</li>
            </ul>
            <p style={styles.paragraph}>
            Additionally, following Documents should be submitted also along with the application of FSSAI Product Approval:
            </p>
            <ul style={styles.list}>
                <li>🛡️ Manufacturing method.</li>
                <li>🛡️ Datasheet of real-time stability.</li>
                <li>🛡️ Analysis Certificate from NABL Lab.</li>
                <li>🛡️ Form-9 & Undertaking.</li>
                <li>🛡️ Accelerated stability datasheet.</li>
                <li>🛡️ Label for the food item or product.</li>
                <li>🛡️ End-Use Declaration Document.</li>
            </ul>
        <h1 id="registration" style={styles.mainHeading}>Procedure for Getting FSSAI Product Approval in India</h1>
            <p style={styles.paragraph}>
            Following is the procedure for getting FSSAI Product Approval:
            </p>
            <h2 style={styles.sectionTitle}>Company Incorporation</h2>
            <p style={styles.paragraph}>
            Basically, FSSAI Product Approval is an intangible asset for any business or company and it gives the business with authority to either manufacture or markets a certain type of food product in India. In addition, each product approval is granted only after a significant amount of processing time and involves payment of high processing fees to FSSAI. Therefore, it has been advised that the FSSAI Product Approval application is filed from any entity such as Private Limited Company or LLP (Limited Liability Partnership) so as to transfer the company or business easily at a later time with the FSSAI License (if needed).
            </p>
        <h2 style={styles.sectionTitle}>FBO License</h2>
            <p style={styles.paragraph}>
            A FBO or Food Business Operator License is vital for businesses that are involved in the selling, manufacturing, or handling of food items or products. A copy of the FBO License Certificate should be submitted while applying for food product approval. Hence, it is advisable that an FBO License is obtained in the business name (if required).
            </p>
        <h2 style={styles.sectionTitle}>Test Reports</h2>
            <p style={styles.paragraph}>
            The Food Product Approval application shall be submitted with certain test reports from NABL accredited labs. But, the NABL lab reports are used to authenticate the claims, label claims, and other aspects of the food product. For the food product, the type of tests to be conducted will vary based on the product's nature.
            </p>
        <h2 style={styles.sectionTitle}>Label of the Product</h2>
            <p style={styles.paragraph}>
            It's compulsory to contain a product label for FSSAI Product Approval. The label may be a prototype and need not be printed. It's vital to make sure that the food product label follows the FSSAI food product labelling standards in India.
            </p>
        <h2 style={styles.sectionTitle}>Submitting the Application</h2>
            <p style={styles.paragraph}>
            After submitting all the vital Documents, the application for FSSAI Product Approval can be made through the FPAS or Food Product Approval System. However, it's vital to have an expert while preparing & submitting the application.
            </p>

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

                {/* More content follows */}

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
        <FSSAILicenseRelatedService />
        </div>
  );
};

export default FSSAIProductContentSection;
