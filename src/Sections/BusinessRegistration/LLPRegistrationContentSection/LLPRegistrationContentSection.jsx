// import React from "react";
import StickyForm from "../../../Components/StickyForm";
import React, { useRef, useEffect, useState } from 'react';

const LLPRegistrationContentSection = () => {

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
        question: 'What is an LLP??',
        answer: 'A Limited Liability Partnership (LLP) is a business structure that combines the benefits of a partnership with the limited liability feature of a company, making it suitable for small and medium-sized businesses.',
      },
      {
        question: 'Who can register an LLP in India?',
        answer: 'Any two or more individuals or corporate entities can register an LLP in India, provided at least one partner is a resident of India.'
      },
    
      {
        question: 'What documents are required for LLP registration?',
        answer: 'Commonly required documents include PAN cards of partners, identity proof (Aadhar, Passport, or Voter ID), address proof, passport-sized photographs, proof of registered office address, and utility bills.',
      },
      {
        question: 'Do LLPs need annual compliance?',
        answer: 'Yes, LLPs must file Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return) every year, even if they have no business activity.',
      },
      {
        question: 'How much time does it take to register an LLP in India?',
        answer: 'On average, LLP registration takes around 10–15 working days, depending on document submission, name approval, and government processing.'
      },
      {
        question: ' What is the government fee for LLP registration?',
        answer: 'The government fees vary depending on the capital contribution of the LLP, generally starting from ₹1,000 onwards, excluding professional charges.'
      },
      {
        question: 'Can an LLP be converted into a Private Limited Company?',
        answer: 'Yes, an LLP can be converted into a Private Limited Company, subject to compliance with the Companies Act, 2013.'
      },
      {
        question: 'Why choose an LLP over a Private Limited Company?',
        answer: 'An LLP is easier to manage, has fewer compliance requirements, and provides flexibility in profit-sharing, making it ideal for startups and small businesses.'
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
        { label: "Features", id: "features" },
        { label: "Types Of Registration", id: "Types" },
        { label: "Benefits", id: "benefits" },
        { label: "Documents Required", id: "requires" },
        { label: "Process", id: "process" },
        { label: "Post Compliance", id: "compliance" },
        { label: "Registration Fees", id: "fees" },
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
          LLP Registration– An Overview 
        </h1>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
        <p style={styles.paragraph}>
        Limited Liability Partnership Registration, commonly known as LLP Registration, is a business structure that combines the elements of partnerships and corporations. The basic principle of LLP is that partners have limited liability. The liability of business partners in LLP is not absolute. Partners are not personally liable for the losses or indebtedness beyond their investments in the partnership business.
        </p>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "15px" }}> */}
        <p style={styles.paragraph}>
        While LLP registration provides a partnership's flexibility and tax benefits, it also offers protection from liabilities like those of a corporation. LLP registration services are popular with professional service providers such as lawyers, consultants, and accountants. However, they are also used by businesses across different industry domains. LLPs are governed by the laws and regulations of specific jurisdictions for incorporation and operations.
        </p>
        {/* <p style={{ fontSize: "17px", lineHeight: "1.7" }}> */}
        <p style={styles.paragraph}>
        Book an appointment with our LLP registration consultants for simplified LLP registration in India and become a part of India’s revolutionary startup ecosystem.
        </p>

        <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          LLP Company Registration in India – Brief History 
        </h1>

        <p style={styles.paragraph}>
        Limited Liability Partnerships (LLPs) were introduced to India in 2008 through an act of Parliament. The Limited Liability Partnership (LLP) Act, 2008 finally came into effect on April 1, 2009. This concept modernized the business landscape by offering an alternative business structure to traditional models such as partnerships and companies. The LLP company registration in India has gained importance among the masses.
        </p>
        <p style={styles.paragraph}>
        LLPs aim to address the fault lines of conventional partnerships, such as partners' unlimited liability. The Limited Liability Partnership Registration Act pushed for greater business flexibility in India. The process also streamlined business operations and simplified management, making LLPs a successful business model.
        </p>
        <p style={styles.paragraph}>
        LLP is a commonly used business structure by professionals, small and medium-sized (SME) organizations, and startups. Besides offering limited liability, LLPs provide various tax benefits and less compliance adherence.
        </p>
        <p style={styles.paragraph}>
        The Government of India has made many modifications to the LLP Act over time to streamline the existing processes, boost transparency, and enhance the ease of doing business. Today, Limited Liability Partnership Registrations play a substantial role in India's entrepreneurial ecosystem, contributing to innovation and economic growth.
        </p>

      </section>

      <section id="features">        
        <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111"
          }}
        >
          Features of Online LLP Registration in India
        </h1>

        <p style={styles.paragraph}>
        LLP registration in India provides a flexible business structure with limited liability protection, fewer compliance needs, and an easy incorporation process. Some of the key features of online LLP registration in India include:
        </p>
        <p>1.Requires only two partners to start an LLP, making it accessible for small teams looking to benefit from the advantages of a corporate structure.</p>
        <p>2.As a separate entity, it maintains a distinct legal and corporate identity. This distinction protects the personal assets of the partners from business liabilities.</p>
        <p>3.All LLP members have limited liability that does not extend to personal assets. Liability is confined to their contribution, providing significant security for personal wealth.</p>
        <p>4.It offers more organizational flexibility, akin to a partnership, allowing partners to define their roles and responsibilities according to their needs.</p>
        <p>5.It is a perpetual entity and does not shut down due to the death or exit of any members unless done so legally. This ensures continuity of business operations regardless of changes in partnership.</p>
        <p>6.Its accounting and filing systems are similar to a company but easier. This similarity simplifies compliance for those familiar with corporate regulations while remaining less burdensome.</p>
        <p>7.LLP compliance and regulations are not rigorous. The reduced regulatory framework makes running an LLP less cumbersome, with fewer legal hurdles to manage.</p>
        <p>8.It does not need any minimum capital for incorporation, lowering barriers to entry and making it an attractive option for startups.</p>  
        <p>9.At least one partner must be an Indian citizen to start an LLP. This legal requirement ensures that the LLP maintains a connection to India's business environment.</p>
        <p>10.There is no cap on the maximum number of partners, allowing for scalability and growth as the business evolves.</p>
        <p>By understanding these features, businesses can make informed decisions about structuring their operations in a way that maximizes both flexibility and protection.</p>

      </section>


        <section id="Types">
          <h1 style={{ fontSize: "22px", fontWeight: "600", marginTop: "40px" }}>Types of Forms for LLP Registration in India</h1>
          {/* <p style={{ fontSize: "17px", lineHeight: "1.7" }}> */}
          <p style={styles.paragraph}> LLP registration in India includes different types of forms, each serving a specific purpose for incorporation and compliance. Some essential forms required for LLP registration include:</p>
         
          <p style={styles.paragraph}><strong>1. RUN-LLP (Reserve Unique Name – LLP)</strong>
          The RUN-LLP form is used for reserving the name of a Limited Liability Partnership. Before incorporation, every LLP must apply for name approval through this form. The Ministry of Corporate Affairs (MCA) checks whether the proposed name is unique and compliant with guidelines. Reserving a name through RUN-LLP ensures that no other business entity can use the same name.
          </p>
          
          <p style={styles.paragraph}><strong>2. FiLLiP (Form for Incorporation of LLP)</strong>
          FiLLiP is the primary form required for incorporating an LLP in India. This form includes details of the proposed LLP such as partners’ information, registered office address, and business activities. Applicants can also apply for a Designated Partner Identification Number (DPIN/DIN) while filing FiLLiP. Once approved, the LLP receives its Certificate of Incorporation from MCA.
          </p>
          
          <p style={styles.paragraph}><strong>3. Form 3 (LLP Agreement)</strong>
          Form 3 is used to file the LLP Agreement with the MCA. The agreement defines the mutual rights, responsibilities, and duties of partners in the LLP. It also covers profit-sharing ratios, decision-making processes, and partner contributions. Filing Form 3 is mandatory and must be completed within 30 days of LLP incorporation.
          </p>
  
          <p style={styles.paragraph}><strong>4. Form 4 (Notice of Appointment, Cessation, or Change in Partners)</strong>
          Form 4 is used whenever there is a change in the partners of an LLP. This includes the appointment of a new partner, resignation of an existing partner, or changes in partner details such as name, address, or designation. Filing this form keeps the MCA records updated regarding the LLP’s ownership and management.
          </p>

          <p style={styles.paragraph}><strong>5. Form 8 (Statement of Account & Solvency)</strong>
          Form 8 is an annual compliance requirement for LLPs in India. It contains the financial statements of the LLP, including assets, liabilities, and a declaration of solvency by the designated partners. Every LLP must file Form 8 annually, regardless of whether it has carried out business activities during the year.
          </p>

          <p style={styles.paragraph}><strong>6. Form 11 (Annual Return of LLP)</strong>
          Form 11 is another mandatory annual compliance form. It provides details of all the partners of the LLP, their contributions, and changes in partnership structure during the financial year. LLPs must file Form 11 every year to maintain compliance, even if the LLP has not undertaken any business operations.
          </p>

        <h1 style={{ fontSize: "22px", fontWeight: "600", marginTop: "40px" }}>Types of Forms for LLP Registration in India</h1>



        </section>

        <section id="benefits">

          <h1 id="benefits" style={styles.mainHeading}>LLP Registration Benefits in India</h1>
            <p>LLP registration benefits in India include limited liability, management flexibility, and less compliance needs. These benefits make LLPs attractive for small and medium-sized businesses, professionals, and startups. The benefits include:</p>
          
                <p style={styles.paragraph}>
                1.Limited Liability—One prominent LLP registration benefit is that LLPs offer limited liabilities to partners, which means their assets are protected against the LLP's debts and liabilities. Such partnerships safeguard the partners from personally being held liable for dealing with other partners.
                </p>

                <p style={styles.paragraph}>
                2.Separate Entity—Another benefit is that an LLP is not the same as its partners. It is a separate legal entity with its own identity. It can independently enter into contracts, own property, and sue others. It can also be sued in its name.
                </p>
        
                <p style={styles.paragraph}>
                3.Flexibility – LLPs offer greater flexibility in terms of management and operations. Partners can outline their internal organizational structure depending on their requirements. Since the LLP Agreement governs the rights and duties of the partners, these can be personalized to suit the business needs.
                </p>
            
                <p style={styles.paragraph}>
                4.Marginal Compliance Requirements – Unlike other business structures like companies, LLPs must meet fewer compliances. Annual filings and other regulatory requirements are simple, and their maintenance is also easy.
                </p>  

                <p style={styles.paragraph}>
                5.Tax Benefits – Another significant LLP registration benefit is that LLPs are taxed as partnerships and, hence, do not have to pay corporate tax. The profits are passed on to the partners who pay taxes at individual levels, which ultimately helps in tax savings.
                </p> 

                <p style={styles.paragraph}>
                6.Permanent Succession—LLPs continue forever. This means that the retirement, death, or bankruptcy of one of the partners does not impact their existence. LLPs continue to exist until the business is wrapped up or dissolved by the provisions of the Limited Liability Partnership Registration Act.
                </p> 

                <p style={styles.paragraph}>
                7.No Minimal Capital Requirement – Unlike companies, LLPs are not forced to maintain any capital at the time of incorporation. Partners can willingly contribute any amount of capital to start the business as agreed in the LLP agreement.
                </p>  

                <p style={styles.paragraph}>
                8.Ease of Transferability—As per the LLP agreement, LLPs offer the ease of transferring interests. They enable the business to include new partners or transfer ownership interests.
                </p> 

                <p style={styles.paragraph}>
                9.Preference by Professionals—LLPs are a preferred business structure by professionals like lawyers, consultants, architects, and accountants. They offer a professional work environment while limiting the personal liability of individual partners.
                </p>  

                <p style={styles.paragraph}>
                10.Globally Recognized—LLP is a globally recognized business structure, and it allows domestic partners to expand their operations internationally.
                </p> 

                <p style={styles.paragraph}>
                Additionally, LLP registration is straightforward, with less complex procedures and reduced registration costs. This streamlined process, combined with the requirement of only a minimum of two directors, makes LLPs appealing for those seeking a simpler path to establishing a business.
                </p> 

              <h1 style={styles.mainHeading}>Name Structure for LLP Registration</h1>

                <p style={styles.paragraph}>
                The name structure for LLP registration in India is governed by the Ministry of Corporate Affairs (MCA). Business entities must follow the guidelines set by the MCA to ensure the name is legally accepted and unique. Let us explore essential aspects of name structure for an LLP in India:
                </p> 

                <p style={styles.paragraph}>
                1.Unique Identity – A new LLP must maintain a unique identity so that its business name does not sound similar to any existing LLP. This must be done to avoid confusion and legal disputes.
                </p>

                <p style={styles.paragraph}>2.Components of the Name – The name of an LLP includes three parts:</p>

                <p>✅ Name Part – Must be unique and acceptable per the Companies Act, 2023 and LLP Act, 2008. The name can’t be similar to any existing LLP or trademark in the same industry/field. For example, if XYZ Innovations Pvt. Ltd. Is registered, then XYZ Innovations LLP will not be approved.</p>
                
                <p>✅ Object Part—LLP must include an object part, which indicates the nature of the business and defines the primary business activity undertaken by the entity. Some examples of object parts include Technology, Motors, Textiles, Hospitals, Hotels, Medicals, Travel, Energy, etc. For example, if XYZ Trading LLP exists, then XYZ Travels LLP will be permitted as their objective is different. However, XYZ LLP or XYZ Group LLP will not be allowed as the objective of the business is unclear. </p>

                <p>✅ Constitution Part – The Constitution part specifies the type of entity the name represents. LLP or Limited Liability Partnership represents Limited Liability Partnerships. </p>

                <p style={styles.paragraph}>3. MCA Guidelines Compliance – LLPs must adhere to MCA guidelines on name structure:</p>

                <p>✅ Avoid Prohibited Words—LLPs should not use prohibited words or those that require prior approval from regulatory bodies. Words like National, Bank, Exchange, Stock Exchange, Venture Capital, Mutual Funds, etc., need prior approval. </p>
                <p>✅ Avoid Offensive or Misleading Information – The business name should not be offensive or violate public order. It should also not be misleading to the public.</p>
                <p style={styles.paragraph}>4.Regulatory Approvals—If the LLP business name includes words such as Insurance, Bank, Stock Exchange, Venture Capital, Mutual Fund, etc., then it must get prior approval from relevant regulatory authorities like IRDA, SEBI, RBI, etc.</p>
                <p style={styles.paragraph}>5.Special Characters and Numbers—The authorities generally discourage LLPs from using special characters, numerals, and symbols in their business names. However, their use is permitted if they form part of the registered trademark.</p>
                <p style={styles.paragraph}>6.Trademark Concerns – LLPs must ensure their name does not infringe any existing trademarks. They must address this concern by conducting a trademark search before finalizing their business name.</p>
                <p style={styles.paragraph}>7.Name Reservation Filing—New businesses can reserve the name for their LLP by filing Form RUN-LLP (Reserve Unique Name – LLP) with the MCA. After approval, the name will be reserved for 90 days. During this time, the LLP must incorporate itself.</p>
                <p style={styles.paragraph}>8.Name Approval Rejection—If the proposed name for the new LLP business is rejected, the applicants are informed with a valid reason. They are then given a chance to submit new names.</p>

            <h1 style={styles.mainHeading}>What are the Requirements for LLP Incorporation in India?</h1>
              <p style={styles.paragraph}> Before starting your LLP business in India, it’s essential for you to understand the requirements for incorporation of LLP. Given below are the requirements for LLP Incorporation in India - </p>
              <p>✅ Minimum Number of Partners – A minimum of two partners are required to register an LLP.</p>
              <p>✅ Designated Partners—To start an LLP, at least two designated partners must be present, one of whom must be a resident of India.</p>
              <p>✅ Digital Signature Certificate (DSC)—All designated partners must obtain a Digital Signature Certificate from government-approved agencies. The DSC is essential for filing online forms when registering.</p>
              <p>✅ Registered Office – LLP must have a registered office in India, which can be a commercial, residential, or industrial property. However, proof of ownership or lease agreement must be produced at the time of registration.</p>
              <p>✅ Name – Choosing an ideal name for the LLP under the Name Guidelines recommended by the Ministry of Corporate Affairs is mandatory.</p>
              <p>✅ LLP Agreement – The LLP Agreement outlining partners' duties, rights, and responsibilities, management structure, profit-sharing ratio, and operational model stamped and notarized is a must.</p>
              <p>✅ Registration Application—Form 1 (Application for Reservation or Change of Name) and Form 2 (Incorporation Document and Statement) must be filed with the Registrar of Companies (ROC). These forms must be filed through the official portal of the Ministry of Corporate Affairs. </p>
              <p>✅ Payment of Fees – Online LLP registration incurs a registration fee based on its contribution amount.</p>
              <p>✅ Verification and Approval—After validating the application and documents, the Registrar issues a Certificate of Incorporation, which completes the approval process for incorporation.</p>
              <p>✅ Post-Incorporation Formalities—Once the registration process is complete, the LLP must acquire its official Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN). In addition, the LLP must meet other regulatory compliances, such as opening a bank account, procuring GST registration (if applicable), and maintaining books of accounts.</p>

            </section>

            <section id="requires"> 

                  <h1 id="requires"style={styles.mainHeading}>What are the Documents Required for Online LLP Registration?</h1>
                  <h2 style={styles.sectionTitle}>Documents Required for LLP Formation Certificate for Partners</h2>
                    <p> ✅ Identity Proof for Indian Partners – PAN Card, Voter ID, Passport, Driving License</p>
                    <p> ✅ Identity Proof for partners who are either foreign nationals or NRIs – Passport</p>
                    <p> ✅ Address Proof – Latest Bank Statement, Utility Bill, Telephone/Mobile Bill, Gas Bill, Aadhar Card for each partner</p>        
                    <p> ✅ Sample Signatureof each partner </p>
                    <p> ✅ Digital Signature Certificate (DSC) – One designated partner</p>
                    <p> ✅ Proof of Registered Office Address</p>
                    <p> ✅ LLP Agreement</p>
                    <p> ✅ Passport Size Photographs</p>
                  
                <h2 style={styles.sectionTitle}>Documents Needed for LLP Incorporation for Registered Office</h2>
                  <p> ✅ Utility Bill</p>
                  <p> ✅ Rent Agreement duly signed by the notary</p>
                  <p> ✅ NoC from the owner of the property</p>
                  <p> ✅ Sale Deed/ Property Deed - In case the property is self-owned</p>

                <h1 id="process"style={styles.mainHeading}>How to Apply for Incorporation of LLP in India?</h1>
                <p>In order to apply for incorporation of LLP in India, you need to know the process of LLP registration. Have a look at the procedure for LLP formation in India-  </p>
                  <p> ✅ Apply for name approval </p>
                  <p> ✅ LLP Agreement duly signed by the partners </p>
                  <p> ✅ Application for incorporation </p>
                  <p> ✅ Get the Certificate of Incorporation </p>
                  <p> ✅ Apply for PAN, TAN, and Bank Account</p>
                  <p>We hope you now have a fair overview of the LLP registration procedure followed in India.  Save time and money and experience seamless Limited Liability Partnership Registration with our business consultants.</p>
                
                <h2 style={styles.sectionTitle}>How is LLP Registration Conducted in Different States and Cities in India?</h2>
                  <p> Limited Liability Partnership (LLP) registration in India varies slightly across states and cities due to differing regional regulations and processes. However, the fundamental steps remain consistent nationwide. Here's a breakdown of how LLP registration is conducted across various states and cities.</p>
                  <h2 style={styles.sectionTitle}>LLP Registration by State</h2> 
                  <p> ✅ <strong>Maharashtra: </strong> Known for its rapid business growth, Maharashtra requires you to obtain a Designated Partner Identification Number (DPIN) and digital signature before filing for registration.</p>
                  <p> ✅ <strong>Jharkhand: </strong> In Jharkhand, after securing the DPIN, partners must submit incorporation documents via the Ministry of Corporate Affairs (MCA) portal.</p>
                  <p> ✅ <strong>Kashmir: </strong>Despite regional challenges, the process in Kashmir involves obtaining necessary approvals through online platforms facilitated by the MCA.</p>
                  <p> ✅ <strong>Puducherry, Karnataka, and Madhya Pradesh: </strong>These states follow a similar procedure emphasizing digital documentation submission and verification.</p>
                  <p> ✅ <strong>Andhra Pradesh and Himachal Pradesh: </strong>For these states, ensure all local regulations are adhered to during the submission of the LLP agreement.</p>
                  <p> ✅ <strong>Tamil Nadu and Odisha: </strong>Known for their streamlined online process, registration in these areas focuses on compliance with state-specific partnership laws.</p>

                <h2 style={styles.sectionTitle}>LLP Registration by City</h2>
                  <p> ✅ <strong>Mumbai:</strong> As a business hub, the process in Mumbai is well-structured, emphasizing timely digital filings and clearances.</p>
                  <p> ✅ <strong>Firozabad and New Delhi:</strong>In these cities, it's important to ensure all documentation is accurate, particularly regarding identity confirmations.</p>
                  <p> ✅ <strong>Srinagar: </strong>Special attention is required to ensure that local bylaws are considered during the registration process.</p>
                  <p> ✅ <strong>Bangalore and Hyderabad: </strong>Known for their tech-savvy ecosystems, these cities encourage online processes for quick approvals.</p>
                  <p> ✅ <strong>Chennai and Ahmedabad: </strong> These cities focus on strict adherence to municipal and state regulations during the incorporation phase.</p>
{/* ========================================= */}
                <h2 style={styles.sectionTitle}>Key Steps for LLP Registration</h2>
                  <p>Given below are the key steps for LLP registration-</p>
                    <p> <strong>1. Obtain a Digital Signature Certificate (DSC): </strong>Necessary for signing documents online.</p>
                    <p> <strong>2. Apply for Designated Partner Identification Number (DPIN):</strong> All partners must have this unique identifier.</p>
                    <p> <strong>3. Name Reservation:</strong> Submit the proposed name of the LLP through the MCA portal for approval.</p>
                    <p> <strong>4. Incorporation Filing:</strong> Prepare and file forms electronically, including Form 2 for incorporation and subscriber details.</p>
                    <p> <strong>5. LLP Agreement Submission:</strong> Post-registration, file the LLP agreement within 30 days through Form 3.</p>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", fontStyle: "italic" }}> Regardless of the location, following these steps will ensure a smooth LLP registration process. Always check local regulations as they can impact certain procedural aspects.</p> 
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", fontStyle: "italic" }}> Utilize government resources and consult legal advisors at Filinglab specializing in business incorporation to ensure compliance with all legal requirements.</p>
                
                
                
                <h1 style={styles.mainHeading}>What is the Checklist for the Registration of an LLP?</h1>
                  <p> When registering a Limited Liability Partnership (LLP) in India, it's vital to ensure all necessary steps and documentation are in place. Here’s a comprehensive guide to get you started:</p>
                  {/* <h2 style={styles.sectionTitle}>1. Partner Requirement</h2>
                  <p> ✅ An LLP must have a minimum of two partners. While there's no cap on the maximum number of partners, each must contribute capital to the partnership.</p> */}
                  <ol style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Partner Requirement</span>
                        <p style={{ margin: "5px 0 0 0" }}>
                        ✅ An LLP must have a minimum of two partners. While there's no cap on the
                          maximum number of partners, each must contribute capital to the partnership.
                        </p>
                      </li>

                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Digital Signature Certificate (DSC)</span>
                          <p style={{ margin: "5px 0 0 0" }}>
                          ✅ Every prospective partner must obtain a Digital Signature Certificate.
                            This is crucial for signing electronic documents throughout the registration process.
                          </p>
                      </li>
                    
                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Designated Partner Identification Number (DPIN)</span>
                          <p style={{ margin: "5px 0 0 0" }}>
                          ✅ Each partner needs a DPIN, which can be acquired by applying through the Ministry of Corporate Affairs portal.
                          </p>
                      </li>

                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Unique Name for the LLP</span>
                          <p style={{ margin: "5px 0 0 0" }}>
                          ✅ The chosen name for your LLP should be unique and not resemble any existing registered LLP name to avoid conflicts and enhance brand identity.
                          </p>
                      </li>

                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Drafting the LLP Agreement</span>
                          <p style={{ margin: "5px 0 0 0" }}>
                          ✅ The chosen name for your LLP should be unique and not resemble any existing registered LLP name to avoid conflicts and enhance brand identity.
                          </p>
                      </li>

                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Registered Office Proof</span>
                          <p style={{ margin: "5px 0 0 0" }}>
                          ✅ You’ll need to provide evidence of the official address for your LLP. Acceptable documents include utility bills or a rental agreement along with a No Objection Certificate from the property owner.
                          </p>
                      </li>

                      <li style={{ marginBottom: "15px" }}>
                        <span style={{ fontWeight: "bold" }}>Capital Contribution Documentation</span>
                          <p style={{ margin: "5px 0 0 0" }}>
                          ✅ Explicit details of the financial contributions made by each partner should be documented. This often includes bank statements or any other proof of monetary input.
                          </p>
                      </li>

                      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", fontStyle: "italic" }}>By meticulously following this checklist, you ensure a smooth registration process, laying a strong foundation for your LLP's future success.</p>

                    </ol>

            </section>

          <section id="compliance">

                <h1 style={styles.mainHeading}>Post-compliance Needs for LLP Formation in India</h1>
                  <p style={styles.paragraph}>
                  LLPs registered in India must follow various compliances directed by the Ministry of Corporate Affairs (MCA). Some of the post-compliance requirements for LLP formation in India include the following:
                  </p>

                  <ol>
                    <li> LLPs must file statutory returns with the MCA, including annual financial statements and tax returns. </li>
                    <li>LLPs with sales turnover of over INR 40 lakhs or capital over INR 25 lakhs must comply with statutory audit. </li>
                  </ol>

                <div style={{ margin: '25px 0' }}>
                    <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                        Below is a summary of fines imposed for non-compliance under the FSSAI Act:
                    </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Forms</th>
                        <th style={thStyle}>Compliance</th>
                        <th style={thStyle}>Due Date</th>
                        <th style={thStyle}>Penalty</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>DIR-3 KYC</td>
                        <td style={tdStyle}>All members with DIN</td>
                        <td style={tdStyle}>30th September</td>
                        <td style={tdStyle}>INR 5,000 in case of DIN deactivation</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>Form -11</td>
                        <td style={tdStyle}>Annual returns</td>
                        <td style={tdStyle}>30th May</td>
                        <td style={tdStyle}>INR 100/day till the date of filing</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>Form – 8</td>
                        <td style={tdStyle}>Statements of Accounts & Solvency</td>
                        <td style={tdStyle}>30th October</td>
                        <td style={tdStyle}>INR 100/day till the date of filing</td>
                    </tr>
                    </tbody>
                </table>
                </div>

                <p>LLP registration consultants at Corpbiz offer pocket-friendly solutions to help maintain your LLP compliances and save the burden of penalties incurred. One must contact us to register an LLP in India and learn about our LLP registration services. </p>

                <h1 style={styles.mainHeading}>LLP Vs Partnership Firm</h1>

                <div style={{ margin: '25px 0' }}>
                    <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                    Choosing between an LLP and a Partnership Firm depends on different factors like liability, compliance, and structure. While both offer unique benefits for small businesses, the difference between LLP and Partnership Firm is explained below:
                    </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Aspect</th>
                        <th style={thStyle}>Limited Liability Partnership (LLP)</th>
                        <th style={thStyle}>Partnership Firm</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>Liability</td>
                        <td style={tdStyle}>An LLP has a limited liability.</td>
                        <td style={tdStyle}>A partnership firm has unlimited liability.</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Legal Status</td>
                        <td style={tdStyle}>An LLP is a separate legal entity.</td>
                        <td style={tdStyle}>A partnership is not a separate legal entity.</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Registration</td>
                        <td style={tdStyle}>Registration for LLP is mandatory.</td>
                        <td style={tdStyle}>Registration for a partnership firm is not compulsory but optional.</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Management</td>
                        <td style={tdStyle}>LLPs have designated partners for management.</td>
                        <td style={tdStyle}>Partnership firms are managed by all partners.</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Compliance</td>
                        <td style={tdStyle}>LLPs have higher compliance requirements, such as mandatory audits.</td>
                        <td style={tdStyle}>Partnership firms have lower compliance requirements than LLPs.</td>
                    </tr>

                    </tbody>

                  </table>
                  </div>



                <h1 style={styles.mainHeading}>LLP Vs Private Limited Company </h1>

                <div style={{ margin: '25px 0' }}>
                    <p style={{ fontSize: '16px', marginBottom: '15px' }}>
                    Depending on your specific business needs, you can choose your business structure between an LLP and a Private Limited Company. At the same time, both structures offer unique advantages in terms of compliance, liability, and ownership. The table below explains the comparison between LLP vs Private Limited Company:
                    </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Aspect</th>
                        <th style={thStyle}>Limited Liability Partnership (LLP)</th>
                        <th style={thStyle}>Private Limited Company</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={tdStyle}>Regulating Law</td>
                        <td style={tdStyle}>Registered as per the Limited Liability Partnership Act, 2008.</td>
                        <td style={tdStyle}>Registered as per the Companies Act, 2013.</td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Limited Ownership</td>
                        <td style={tdStyle}>Partners serve as both managers and owners.</td>
                        <td style={tdStyle}>Shareholders are owners without managerial authority. Management is separate from ownership. </td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Members & Directors</td>
                        <td style={tdStyle}>At least 2 partners with an unlimited limit, but no directors exist.</td>
                        <td style={tdStyle}>Between 2 and 200 members, and the number of directors must be between 2 and 15.  </td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Compliance</td>
                        <td style={tdStyle}>
                          <ol>
                            <li>Exempt from hosting the AGM</li>
                            <li>Exempt from holding at least four board meetings annually</li>
                            <li>Statutory Audits if turnover crosses INR 40 lakhs.</li>
                            <li>File Form 8 LLP and Form 11 LLP with the ROC. </li>
                          </ol>
                        </td>
                        <td style={tdStyle}>
                          <ol>
                            <li>Annual General Meeting.</li>
                            <li>At least four board meetings per year.</li>
                            <li>Statutory audits regardless of its turnover.</li>
                            <li>File Form AOC 4 and Form MGT 7.</li>
                          </ol>
                        </td>
                    </tr>

                    <tr>
                        <td style={tdStyle}>Foreign Investment</td>
                        <td style={tdStyle}>Restricted. Needs approval from the RBI.</td>
                        <td style={tdStyle}>Allowed, under automatic route.</td>
                    </tr>

                    </tbody>

                  </table>
                  </div>

               </section>
                
            <section id="fees">

              <h1 style={styles.mainHeading}>What are LLP Registration Fees?</h1>

                <p>Our team of professional experts with over a decade of experience in LLP registration has the right kind of expertise to work in a customer-centric environment. We offer affordable, end-to-end LLP Registration services, including:</p>

                <p style={styles.paragraph}> 1. LLP Deed drafting</p>
                <p style={styles.paragraph}>2. Identification Numbers - for two designated partners</p>
                <p style={styles.paragraph}>3. Digital Signature Certificates - for two partners</p>
                <p style={styles.paragraph}>4. Incorporation Certificate</p>
                <p style={styles.paragraph}>5. Government fees up to INR 1 lakh capital contribution by designated partners</p>
                <p style={styles.paragraph}>6. Stamp duty charges up to INR 2,000 with notarization (any state in India for LLP Deed)</p>
                <p style={styles.paragraph}>7. Consultation fees start from INR 7,499 to INR 12,499</p>

              <h1 style={styles.mainHeading}>What are LLP Registration Fees?</h1>  
                <h2 style={styles.sectionTitle}>Understanding the Tax Slab for an LLP</h2>
                  <p>When discussing the tax slab for a Limited Liability Partnership (LLP) in India, it's vital to understand how the taxation structure is organized.</p>
                <h2 style={styles.sectionTitle}>Tax Rate for LLPs</h2>   
                  <p style={styles.paragraph}><strong>Flat Tax Rate</strong>LLPs are subject to a flat tax rate of 30% on their annual income, regardless of the turnover. This means that whether an LLP earns Rs. 1 crore or Rs. 250 crore, the applicable tax rate remains consistent at 30%.</p>
                <h2 style={styles.sectionTitle}>Additional Charges</h2>    
                  <p style={styles.paragraph}><strong>Surcharge:</strong>An additional surcharge of 12% is applicable if the total income exceeds Rs. 1 crore.</p> 
                  <p style={styles.paragraph}><strong>Cess:</strong>There's also a Health and Education Cess, which is 4% on the total of the income tax and surcharge, applicable to all LLPs.</p>  
                
                <h2 style={styles.sectionTitle}>Key Points</h2>
                  <p style={styles.paragraph}><strong>Standard Rate:</strong>LLPs pay a 30% tax rate on their income.</p>
                  <p style={styles.paragraph}><strong>No Turnover-Based Variation: </strong>The tax percentage does not change with turnover.</p>
                  <p style={styles.paragraph}><strong>Additional Levies: </strong>Be mindful of surcharges and cess that can impact the total tax liability.</p>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", fontStyle: "italic" }}> By understanding these elements, LLP owners can better manage their tax obligations, ensuring compliance with the prevailing tax laws.</p> 

              <h1 style={styles.mainHeading}>Timeline for Limited Liability Partnership Registration in India</h1>       
                <p style={styles.paragraph}>Depending on the application's submission, document validation, and approval, registering an LLP company takes 15 to 30 working days. Thus, the timeline for Limited Liability Partnership Registration in India is approximately 20 days. You can avoid unnecessary registration delays by getting help from LLP registration consultants like Corpbiz.</p>
              
              </section>


            {/* <section id="howtoapply">

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
                
              </section> */}

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

export default LLPRegistrationContentSection;
