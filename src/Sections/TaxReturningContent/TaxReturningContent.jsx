import React, { useRef, useEffect, useState } from 'react';
import StickyForm from "../../Components/StickyForm";
import styled from "styled-components";
import { Link } from "react-router-dom";


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
        color: 'black',
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '24px',
        fontWeight: '600',
        color: ' #002145',
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
    },
    docTitle: {
        fontSize: '20px',
        color: '#ed740a',
        fontWeight: '500',
        marginTop: '10px',
    },
    highlightBox: {
        width: '68%',
        backgroundColor: '  #f1f1f1',
        padding: '20px',
        borderLeft: '5px solid #ed740a',
        marginBottom: '30px',
        borderRadius: '5px',
    },
};
const SubTitle = styled.h3`
  font-size: 2.2rem;
  color: #ed740a;
  font-weight: 800;
  margin-bottom: 50px;
`;

const SectionGroup = styled.div`
  margin-bottom: 90px;
  position: relative;
`;

const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
`;

const ListItem = styled.li`
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    font-size: 1rem;
    font-weight: 500;
    color: #002145;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      background: #002145;
      color: #fff;
      transform: translateY(-5px);
    }
  }
`;
const TaxRegistrationContent = () => {

    
        const genericServices = [
          { label: "GST Returning", url: "/gst" },
    { label: "GST Return Filing", url: "/gstreturning" },
    { label: "TDS Return Filing", url: "/tds-return-filing" },
    { label: "Professional Tax Registration", url: "/tax-registration" },
        ];

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

    return (
        <div style={styles.container}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px', padding: '20px', background: '#f1f1f1' }}>
            <div style={{ padding: '20px', width: '70%' }}>
  <h1 style={styles.mainHeading}>
    Professional Tax Registration in <span style={styles.accent}></span> - An Overview
  </h1>

  <p style={styles.paragraph}>
    Professional Tax refers to the tax the State Government levies for the infrastructure it provides to its citizens to carry out their profession smoothly. This tax is levied on all kinds of professions, trades, and employment, and its applicability is based on the income of the following:
  </p>

  <ul style={styles.paragraph}>
    <li>Profession</li>
    <li>Trade</li>
    <li>Employment</li>
  </ul>

  <p style={styles.paragraph}>
    Professional Tax varies from state to state. There are different sets of rules and regulations to govern the same depending upon the state; however, all states follow a slab system based on the income to levy professional tax.
  </p>

  <p style={styles.paragraph}>
    Further, individuals carrying out freelancing business without any employees are required to obtain a Professional Tax certificate according to the pecuniary threshold, if any, provided by the respective State Authorities.
  </p>

  <p style={styles.paragraph}>
    So, what are you waiting for? Secure your Professional Tax Registration in <span style={styles.accent}></span> from our seasoned consultants today!
  </p>
</div>

                    
                <div
                    ref={formContainerRef}
                    style={{
                        flex: 1,
                        width: '300px',
                        position: isFixed ? 'fixed' : 'static',
                        top: isFixed ? '100px' : '500px',
                        right: isFixed ? '185px' : '0px'
                    }}
                >
                    <StickyForm />
                </div>
            </div>

            <div style={styles.sectionTitle}>Types of Professional Tax Certificates</div>

<div style={styles.highlightBox} className="fade-in">
  <p style={styles.docTitle}>PTEC (Professional Tax Enrolment Certificate)</p>
  <p style={styles.paragraph}>
    This type of professional tax is paid by the business entity, i.e., Private/Public Limited Company, 
    owner, or a professional like Sole Proprietor or Director through this certificate.
  </p>

  <p style={styles.docTitle}>PTRC (Professional Tax Registration Certificate)</p>
  <p style={styles.paragraph}>
    Here, the Government or Non-Government employer deducts the tax from the employee's salary and deposits 
    the same to the government.
  </p>

  <p style={{ ...styles.paragraph, fontStyle: 'italic', color: '#002145', fontWeight: 'bold' }}>
    Note: Professional tax imposed is subject to exemptions provided by respective states to particular categories.
  </p>
</div>

<div style={{ width: '68%', margin: '60px 0px' }}>
  <h2 style={{ fontSize: '30px', color: '#002145', marginBottom: '30px', textAlign: 'center' }}>
    Benefits of <span style={{ color: '#ed740a' }}>Professional Tax Registration</span>
  </h2>

  {/* 1. Minimal Restriction – Highlighted box */}
  <div style={{
    backgroundColor: '#f9f9f9',
    borderLeft: '4px solid #ed740a',
    padding: '16px 20px',
    marginBottom: '20px',
  }}>
    <h4 style={{ marginBottom: '8px', color: '#002145', fontSize: '18px' }}>Imposes Minimal Restriction</h4>
    <p style={{ margin: 0, color: '#333' }}>
      It is simple to comply with the Professional Tax Compliance, which results in a smooth registration process with minimum restrictions.
    </p>
  </div>

  {/* 2. Helps in Avoiding Penalty – Simple bordered card */}
  <div style={{
    border: '1px solid #ddd',
    padding: '16px 20px',
    marginBottom: '20px',
    borderRadius: '6px'
  }}>
    <h4 style={{ marginBottom: '8px', color: '#002145', fontSize: '18px' }}>Helps in Avoiding Penalty</h4>
    <p style={{ margin: 0, color: '#333' }}>
      It is compulsory to pay Professional tax as per the law. Hence, the timely payment of Professional tax can help avoid penalties and any punitive action against the employer or a self-employed person.
    </p>
  </div>

  {/* 3. Smooth Registration – Bulleted style */}
  <div style={{ marginBottom: '20px' }}>
    <h4 style={{ color: '#002145', fontSize: '18px', marginBottom: '10px' }}>Enables Smooth Registration Process</h4>
    <ul style={{ paddingLeft: '20px', margin: 0, color: '#333' }}>
      <li>Simple compliance process</li>
      <li>Hassle-free documentation</li>
      <li>Quick registration turnaround</li>
    </ul>
  </div>

  {/* 4. Welfare Programs – Inline block style */}
  <div style={{
    display: 'inline-block',
    backgroundColor: '#f1f1f1',
    padding: '16px 20px',
    borderRadius: '6px',
    marginBottom: '20px'
  }}>
    <h4 style={{ color: '#002145', fontSize: '18px', marginBottom: '8px' }}>
      Helps in Welfare and Development Programs
    </h4>
    <p style={{ margin: 0, color: '#333', maxWidth: '500px' }}>
      The Professional Tax acts as a revenue source for state governments, enabling the implementation of welfare and regional development schemes.
    </p>
  </div>

  {/* 5. Can Claim Deduction – Just text */}
  <div style={{ marginTop: '20px' }}>
    <h4 style={{ color: '#002145', fontSize: '18px', marginBottom: '8px' }}>Can Claim Deduction</h4>
    <p style={{ margin: 0, color: '#333' }}>
      The employer or self-employed person can claim a deduction on the previously paid professional tax.
    </p>
  </div>
</div>
     
<div style={{ width: '68%', marginTop: '60px', marginBottom: '60px' }}>
  <h2 style={{ fontSize: '30px', color: '#002145', marginBottom: '30px' }}>
    Who are <span style={{ color: '#ed740a' }}>Liable</span> for Professional Tax Registration?
  </h2>

  <p style={{ fontSize: '16px', color: '#333', marginBottom: '25px' }}>
    The liability of the payment of tax depends on the state where it is applicable. Below is a list of individuals and entities that are generally required to register for Professional Tax:
  </p>

  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px 30px',
    paddingLeft: '10px'
  }}>
    <div style={{ color: '#002145', fontWeight: '500' }}>• Individual</div>
    <div style={{ color: '#002145', fontWeight: '500' }}>• Partnership</div>
    <div style={{ color: '#002145', fontWeight: '500' }}>• Public/Private/One Person Company</div>
    <div style={{ color: '#002145', fontWeight: '500' }}>• Co-operative Society</div>
    <div style={{ color: '#002145', fontWeight: '500' }}>• Association of Person</div>
    <div style={{ color: '#002145', fontWeight: '500' }}>• HUF (Hindu Undivided Family)</div>
  </div>
</div>


<div style={{ width: '68%', padding: '20px 0' }}>
  <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#002145', marginBottom: '20px' }}>
    Essential <span style={{ color: '#ed740a' }}>Documents</span> Required for Professional Tax Registration
  </h2>

  <div style={{
    background: '#fff',
    border: '1px solid #d9d9d9',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
  }}>
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.8'
    }}>
      <li style={{ marginBottom: '14px' }}>
        <span style={{ color: '#ed740a', fontWeight: 600 }}>•</span> Completed <strong>Application Form</strong>
      </li>
      <li style={{ marginBottom: '14px' }}>
        <span style={{ color: '#ed740a', fontWeight: 600 }}>•</span> For Companies: <strong>COI, AOA, MOA, and PAN</strong> (attested by a Director)
      </li>
      <li style={{ marginBottom: '14px' }}>
        <span style={{ color: '#ed740a', fontWeight: 600 }}>•</span> <strong>Address & ID Proof</strong> of all directors + passport-size photos
      </li>
      <li style={{ marginBottom: '14px' }}>
        <span style={{ color: '#ed740a', fontWeight: 600 }}>•</span> Company’s <strong>bank account details</strong>, statement & cancelled cheque
      </li>
      <li style={{ marginBottom: '14px' }}>
        <span style={{ color: '#ed740a', fontWeight: 600 }}>•</span> <strong>Proof of registered office</strong> (rent agreement or NOC from owner)
      </li>
      <li>
        <span style={{ color: '#ed740a', fontWeight: 600 }}>•</span> <strong>Board Resolution</strong> (for company) or <strong>Partner Consent</strong> (for firm) + <strong>salary & attendance register</strong>
      </li>
    </ul>
  </div>
</div>


<div style={{ width: '68%', padding: '20px 0' }}>
  <h2 style={{
    fontSize: '30px',
    fontWeight: 700,
    color: '#002145',
    marginBottom: '20px'
  }}>
    Procedure for <span style={{ color: '#ed740a' }}>Professional Tax Registration</span>
  </h2>

  <div style={{
    background: '#fff',
    border: '1px solid #dcdcdc',
    borderRadius: '10px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  }}>
    <ol style={{
      padding: 0,
      margin: 0,
      listStyle: 'none',
      fontSize: '16px',
      color: '#333',
      counterReset: 'step-counter'
    }}>
      {[
        {
          title: "Filing the Application with Documents",
          desc: "The applicant must file the application form and the requisite Documents."
        },
        {
          title: "Submitting the Application",
          desc: "Submit the application and documents to the respective state authority and tax department."
        },
        {
          title: "Scrutinization by the Tax Authority",
          desc: "The authority verifies the application to ensure that all information provided is accurate."
        },
        {
          title: "Issue of Registration Certificate",
          desc: "Once verified, the Registration Certificate is issued by the authority."
        }
      ].map((step, index) => (
        <li key={index} style={{
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px'
        }}>
          <div style={{
            minWidth: '28px',
            height: '28px',
            backgroundColor: '#ed740a',
            color: '#fff',
            borderRadius: '50%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '28px'
          }}>
            {index + 1}
          </div>
          <div>
            <strong>{step.title}:</strong> {step.desc}
          </div>
        </li>
      ))}
    </ol>
  </div>
</div>


<div style={{ width: '68%', padding: '20px 0' }}>
  <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#002145', marginBottom: '20px' }}>
    Penalties Imposed in Case of Violation of <span style={{ color: '#ed740a' }}>Professional Tax Regulation</span>
  </h2>

  <div style={{
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    lineHeight: 1.7,
    color: '#333',
    fontSize: '16px'
  }}>
    <p>The individual who defaults in the timely payment of the professional tax is liable for a penalty by the state government if not registered, even when applicable. Penalties may vary from state to state and include:</p>

    <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: '20px 0' }}>
      <li><strong>Failure to Obtain Registration:</strong> Penalty applies for the period of unregistered status.</li>
      <li><strong>Late Deposition:</strong> Penalty due to delays in depositing the amount to the government.</li>
      <li>
        <strong>Non-Deposition of Amount:</strong> Recovery with interest and penalty from defaulter’s assets, including the power to attach bank accounts. In serious cases, prosecution may apply.
      </li>
    </ul>

    <p>Additional penalties include:</p>
    <ul style={{ listStyle: 'circle', paddingLeft: '20px', margin: '20px 0' }}>
      <li>Rs. 5/day for late registration certificate.</li>
      <li>10% of tax amount for non/late payment.</li>
      <li>Rs. 1000 for late return filing; if delayed over a month, Rs. 1000 additional penalty.</li>
    </ul>
  </div>

  <div style={{ marginTop: '40px' }}>
    <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#002145', marginBottom: '16px' }}>
      Persons Accountable to Collect and Pay <span style={{ color: '#ed740a' }}>Professional Tax</span>
    </h3>

    <div style={{
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '28px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#333'
    }}>
      <p>
        Every individual who earns income is liable to pay professional tax. However, the calculation and amount vary from state to state. The tax slab and collection method is predetermined by each state.
      </p>
      <p>
        The tax is collected by the Commercial Tax Department of the respective state, either monthly or annually, through the <strong>PTEC</strong> or <strong>PTRC Certificate</strong>. The maximum payable amount is <strong>Rs. 2500 per year</strong>.
      </p>
    </div>
  </div>
</div>

     

<div style={{width:'68%',marginTop:'30px',background:'rgb(238, 245, 248)',padding:'20px',borderRadius:'20px'}}>
    <SectionGroup>
              <SubTitle style={{ textAlign: 'center' }}>Other Similar Services</SubTitle>
              <LinkList>
                {genericServices.map((item, idx) => (
                  <ListItem key={idx}>
                    <Link to={item.url}>{item.label}</Link>
                  </ListItem>
                ))}
              </LinkList>
            </SectionGroup>

</div>



        </div>
    );
};

export default TaxRegistrationContent;