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
        color: 'gray',
        fontSize: '18px',
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
const GSTReturningContent = () => {

    
        const genericServices = [
          { label: "Income Tax Return Filing", url: "/tax-returning" },
    { label: "GST REgistration", url: "/gst" },
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
                <div style={{padding:'20px',width:'70%'}}>
                <h1 style={styles.mainHeading}>
  GST Registration in <span style={styles.accent}></span> - An Overview
</h1>

<p style={styles.paragraph}>
   is known for its high economic growth rate, stable political environment, hardworking labour pool, and infrastructure support. It is a hub for industries such as pharmaceuticals and food processing. The state offers a wide range of policies and initiatives for businesses, making it the best place to start a new venture. So, GST registration in  is essential if you are a business owner.
</p>

<p style={styles.paragraph}>
  The entire process of starting a business is not easy, and you will face many inconveniences before you can start. This includes issues related to a lack of knowledge and awareness about GST registration and its compliances.
</p>

<p style={styles.paragraph}>
  So, what are you waiting for? Secure your GST registration in  from our seasoned GST Registration Consultants today!
</p>
                </div>
                    
                <div
                    ref={formContainerRef}
                    style={{
                        flex: 1,
                        width: '300px',
                        position: isFixed ? 'fixed' : 'static',
                        top: isFixed ? '100px' : 'auto',
                        right: isFixed ? '185px' : '0px'
                    }}
                >
                    <StickyForm />
                </div>
            </div>




            <div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.6 }}>
  <h2 style={{
    fontSize: '2.2rem',
    color: '#ed740a',
    fontWeight: 700,
    marginBottom: '1rem'
  }}>
    GST Return <span style={{ color: '#002145' }}>Types</span>
  </h2>

  <p style={{ fontSize: '1rem', color: '#333', marginBottom: '2rem' }}>
    The different types of GSTR are enlisted below. Each type is tailored to different taxpayer categories, return frequencies, and data reporting needs.
  </p>

  {[
    {
      title: 'GSTR-1 – Description of Outward Supplies',
      body: 'Filed monthly by businesses to report outward supplies of goods and services. Mandatory for all registered taxpayers (except ISDs and Composition Dealers), even with no transactions.',
      due: '11th of the next month (Monthly). For QRMP, due on 13th of the month following the quarter.'
    },
    {
      title: 'GSTR-2 & GSTR-3',
      body: 'Currently suspended.'
    },
    {
      title: 'GSTR-2A',
      body: 'Auto-generated return showing purchases (inward supplies) from suppliers based on their GSTR-1 filings.',
      due: 'No specific due date (auto-filled).'
    },
    {
      title: 'GSTR-3B',
      body: 'Monthly summary return for reporting outward supplies, input tax credit (ITC), and taxes paid.',
      due: '20th of next month for turnover > ₹5 Cr; 22nd or 24th for others based on state category.'
    },
    {
      title: 'GSTR-4',
      body: 'Quarterly return for taxpayers under the Composition Scheme. Replaces GSTR-9A.',
      due: '18th of the month following each quarter.'
    },
    {
      title: 'GSTR-5',
      body: 'Filed by non-resident foreign taxpayers conducting business in India.',
      due: '20th of every month.'
    },
    {
      title: 'GSTR-6',
      body: 'Filed monthly by Input Service Distributors (ISD), detailing ITC received and distributed.',
      due: '13th of each month.'
    },
    {
      title: 'GSTR-7',
      body: 'Return for entities deducting TDS under GST.',
      due: '10th of each month.'
    },
    {
      title: 'GSTR-8',
      body: 'Filed by e-commerce operators to report supplies made and TCS collected.',
      due: '10th of each month.'
    },
    {
      title: 'GSTR-9',
      body: 'Annual return for regular taxpayers consolidating data from monthly/quarterly returns.',
      due: '31st December of the following financial year.'
    },
    {
      title: 'GSTR-9A',
      body: 'Suspended.'
    },
    {
      title: 'GSTR-9C',
      body: 'Reconciliation statement for taxpayers with turnover above ₹2 Cr.',
      due: '31st December of the following financial year.'
    },
    {
      title: 'GSTR-10',
      body: 'Final return after GST registration is cancelled or surrendered.',
      due: 'Within 3 months of cancellation or cancellation order.'
    },
    {
      title: 'GSTR-11',
      body: 'Filed by UIN holders (like embassies) to claim GST refunds.',
      due: '28th of the month following the return period.'
    }
  ].map((gstr, idx) => (
    <div
      key={idx}
      style={{
        background: '#fff',
        borderLeft: '6px solid #ed740a',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        borderRadius: '12px',
        transition: 'transform 0.2s',
      }}
    >
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#002145'
      }}>
        {gstr.title}
      </h3>
      <p style={{ color: '#444', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
        {gstr.body}
      </p>
      {gstr.due && (
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          <strong>Due Date:</strong> {gstr.due}
        </p>
      )}
    </div>
  ))}

  <div style={{
    backgroundColor: '#f5f5f5',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    fontSize: '0.95rem',
    color: '#333',
    borderLeft: '5px solid #002145'
  }}>
    <strong>Note:</strong> The following taxpayers are exempt from filing GSTR-9:
    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
      <li>Composition taxpayers</li>
      <li>Input Service Distributors</li>
      <li>Casual taxable persons</li>
      <li>Non-resident taxpayers</li>
      <li>Taxpayers paying TDS under section 51 of CGST Act</li>
    </ul>
  </div>
</div>


           

<div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.6 }}>
  <h2 style={{
    fontSize: '2.2rem',
    color: '#ed740a',
    fontWeight: 700,
    marginBottom: '1rem'
  }}>
    Benefits of <span style={{ color: '#002145' }}>GST Return Filing</span>
  </h2>

  <p style={{ fontSize: '1rem', color: '#333', marginBottom: '2rem' }}>
    The Benefits of GST Return Filing are listed below.
  </p>

  {[
    {
      title: 'GST Return Filing Through a Single Form',
      body: 'There are different types of taxes collected under the GST Act, i.e. IGST, CGST & SGST, and all the three taxes paid or collected can now be recorded in a single form. This helps to ease the complex process of GST Return Filing.'
    },
    {
      title: 'Eliminates the Cascading Effect',
      body: 'The introduction of GST into the Indian tax system has removed several other taxes like central excise duty, service tax, customs duty, and state-level value-added tax. Thus, a single GST has abolished the cascading effect of tax.'
    },
    {
      title: 'Higher Threshold Benefits',
      body: 'Before the introduction of Goods and Service Tax, VAT was applicable to every business having an annual turnover of 5 lacs. But with the introduction of GST, the amount of annual turnover has increased to 20 lakhs. This has provided higher threshold benefits to small-scale businesses.'
    },
    {
      title: 'Start-up Benefits',
      body: 'Before GST, start-ups with an annual turnover of 5 lakh had to pay VAT which was very difficult for a start-up during the initial stages. GST has replaced VAT, where businesses can set off the service tax on their sales.'
    },
    {
      title: 'Offers Higher Compliance Rating',
      body: 'To observe the compliance structure, the GST system has introduced the mechanism of compliance rating. This is where all the registered entities/individuals are provided grades based on their invariability of fulfilling the compliance and payment of taxes.'
    },
    {
      title: 'E-commerce for the Quick Supply of Goods',
      body: 'Under VAT, many types of VAT laws and compliances were required to be followed, which were very complicated and often resulted in the confiscation of goods. GST has now removed all such confusing processes and has made the E-commerce business easy.'
    },
    {
      title: 'Better Regulations and Accountability',
      body: 'Before the introduction of GST, the tax filing system was quite unorganized. GST has resulted in better regulation of tax laws and enhanced accountability of taxpayers.'
    }
  ].map((item, idx) => (
    <div
      key={idx}
      style={{
        background: '#fff',
        borderLeft: '6px solid #002145',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        borderRadius: '12px',
        transition: 'transform 0.3s',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-12px',
        left: '-12px',
        backgroundColor: '#ed740a',
        color: '#fff',
        fontSize: '0.85rem',
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: '0 8px 8px 0',
      }}>
        Benefit {idx + 1}
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#002145'
      }}>
        {item.title}
      </h3>
      <p style={{ color: '#444', fontSize: '0.95rem' }}>{item.body}</p>
    </div>
  ))}
</div>


<div style={{ width: '68%',  lineHeight: 1.6, marginTop: '3rem' }}>
  <h2 style={{
    fontSize: '2.2rem',
    color: '#ed740a',
    fontWeight: 700,
    marginBottom: '1rem'
  }}>
    Eligibility Criteria for <span style={{ color: '#002145' }}>GST Return Filing</span>
  </h2>

  <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.5rem' }}>
    The businesses whose annual turnover exceeds <strong>20 lacs or 40 lacs</strong> are eligible to file GST Return. Any person who is engaged in the below-mentioned activities is required to file the GST Return:
  </p>

  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    {['Sales', 'Purchases', 'Output Tax', 'Input Tax'].map((item, index) => (
      <li key={index} style={{
        backgroundColor: '#f9f9f9',
        borderLeft: '6px solid #ed740a',
        padding: '0.8rem 1.2rem',
        marginBottom: '1rem',
        borderRadius: '8px',
        fontSize: '1rem',
        color: '#002145',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
      }}>
        ✅ {item}
      </li>
    ))}
  </ul>
</div>


           
<div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.7, marginTop: '3rem' }}>
  <h2 style={{
    fontSize: '2.2rem',
    color: '#ed740a',
    fontWeight: 700,
    marginBottom: '1rem'
  }}>
    Important Invoices Required While <span style={{ color: '#002145' }}>Filing the GST Return</span>
  </h2>

  <p style={{ fontSize: '1rem', color: '#2e2e2e', marginBottom: '1rem' }}>
    Businesses registered under GST are required to issue <strong>GST-compliant invoices</strong> to clients for goods and services. These invoices serve as proof of transaction and allow for proper taxation and claiming of input tax credits. They can also be personalized with the company’s branding.
  </p>

  <p style={{ fontSize: '1rem', color: '#2e2e2e', marginBottom: '1.5rem' }}>
    A GST Return Filing Invoice must include the following details:
  </p>

  <ul style={{
    listStyle: 'none',
    padding: 0,
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd'
  }}>
    {[
      'Date of Invoice',
      'Customer Title',
      'Transportation and Billing Location',
      'Client and Taxpayer\'s GSTIN',
      'Area of Supply',
      'HSN / SAC Code',
      'Item Details (Classification, Quantity, Unit, Total Amount)',
      'Taxable Value and Discounts',
      'Rate and Volume of Taxes (CGST / SGST / IGST)',
      'Whether GST is Payable on the Reverse Charge Basis',
      'Signature of the Supplier'
    ].map((item, index) => (
      <li key={index} style={{
        padding: '0.75rem 0.5rem',
        borderBottom: index !== 10 ? '1px solid #eee' : 'none',
        fontSize: '1rem',
        color: '#002145',
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#ed740a',
          marginRight: '10px'
        }}></span>
        {item}
      </li>
    ))}
  </ul>
</div>


<div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.7 }}>
  <h2 style={{
    fontSize: '2.1rem',
    fontWeight: 700,
    color: '#ed740a',
    marginBottom: '1rem'
  }}>
    Essential Documents <span style={{ color: '#002145' }}>for GST Return Filing</span>
  </h2>

  <p style={{
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1.5rem',
    backgroundColor: '#fdf6f0',
    padding: '1.2rem 1.5rem',
    borderLeft: '5px solid #002145',
    borderRadius: '10px'
  }}>
    Below mentioned documents are required for GSTR Return filing:
  </p>

  <ul style={{
    paddingLeft: '1.5rem',
    listStyle: '"📄 "',
    fontSize: '1rem',
    color: '#444',
    lineHeight: '1.9',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    padding: '2.5rem',
    borderRadius: '12px'
  }}>
    <li>List of Invoices (B2B Services, B2C Services)</li>
    <li>Customer GSTIN</li>
    <li>Type of Invoice</li>
    <li>Invoice Number</li>
    <li>Place of Supply</li>
    <li>GST Rate</li>
    <li>Taxable Value</li>
    <li>Amount of CGST, SGST, IGST and GST Cess applicable</li>
    <li>Consolidated intra-state and inter-state sales</li>
    <li>HSN-wise summary details</li>
    <li>Summary of requisite Documents, i.e. Debit and Credit notes</li>
  </ul>
</div>


          

<div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.7 }}>
  <h2 style={{
    fontSize: '2.1rem',
    fontWeight: 700,
    color: '#ed740a',
    marginBottom: '1.2rem'
  }}>
    Procedure <span style={{ color: '#002145' }}>for GST Return Filing</span>
  </h2>

  <p style={{
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1.5rem',
    backgroundColor: '#f0f6fd',
    padding: '1.2rem 1.5rem',
    borderLeft: '5px solid #ed740a',
    borderRadius: '10px'
  }}>
    GST Return filing is a detailed filing process that includes the following steps to be followed by every GST Taxpayer:
  </p>

  <div style={{ borderLeft: '4px solid #002145', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
    <div style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ marginBottom: '0.4rem', color: '#002145', fontSize: '1.1rem' }}>
        1. Collecting the Documents and Invoices
      </h4>
      <p style={{ margin: 0, color: '#444' }}>
        All registered taxpayers must collect the requisite Documents and invoices for GST Return Filing.
      </p>
    </div>

    <div style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ marginBottom: '0.4rem', color: '#002145', fontSize: '1.1rem' }}>
        2. Filing the Application with the Necessary Documents
      </h4>
      <p style={{ margin: 0, color: '#444' }}>
        All the information and Documents are required to be filed by the applicant.
      </p>
    </div>

    <div style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ marginBottom: '0.4rem', color: '#002145', fontSize: '1.1rem' }}>
        3. Major Pre-Compliances Before Filing the GST Return
      </h4>
      <ul style={{
        paddingLeft: '1.2rem',
        marginTop: '0.5rem',
        color: '#444',
        lineHeight: '1.8',
        listStyle: '"✅ "'
      }}>
        <li>Review the GST filing and records before submission.</li>
        <li>Ensure that all records, invoices, and documents are accurate.</li>
      </ul>
    </div>

    <div>
      <h4 style={{ marginBottom: '0.4rem', color: '#002145', fontSize: '1.1rem' }}>
        4. Completing the GST Return Filing
      </h4>
      <p style={{ margin: 0, color: '#444' }}>
        After cross-checking all the necessary papers, the applicant can finalize the GST Return Filing.
      </p>
    </div>
  </div>
</div>


<div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.7 }}>
  <h2 style={{
    fontSize: '2.1rem',
    fontWeight: 700,
    color: '#ed740a',
    marginBottom: '1.2rem'
  }}>
    Highlights <span style={{ color: '#002145' }}>of GST Return Filing 2022</span>
  </h2>

  <p style={{
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1.5rem',
    backgroundColor: '#fdf2e9',
    padding: '1.2rem 1.5rem',
    borderLeft: '5px solid #ed740a',
    borderRadius: '10px'
  }}>
    The 47th GST Council Meeting was held in Chandigarh on the 28th and 29th of June, where the following key updates and decisions were made:
  </p>

  <div style={{ display: 'grid', gap: '1rem' }}>
    {[
      "The GST Council amended GSTR 3B to allow auto-population of most data including GSTR 9.",
      "The roadmap finalized in the 35th Council meeting was discontinued; a new GST return plan will be created.",
      "Annual return for FY 2021-22 notified with minor tweaks; turnover below ₹2 Cr exempted from GSTR 9 & 9A.",
      "GSTR 9 for FY 2017–18 deadline extended to September 30, 2023 under CGST Act Section 73.",
      "Late fee for GSTR 4 (2021-22) waived until July 28, 2022.",
      "Form CMP 08 Q1 FY 22-23 deadline extended from July 18 to July 30, 2022.",
      "E-commerce compliance relaxed; intrastate suppliers can register under composition scheme.",
      "Panel of advocates appointed by NAA to ensure justice in profiteering cases.",
      "States and Centre both empowered to issue show-cause notices across jurisdictions.",
      "Govt to appeal Supreme Court in cases where HC remanded NAA orders.",
      "Rationalization of GST rates for goods and services has been implemented."
    ].map((point, idx) => (
      <div key={idx} style={{
        background: idx % 2 === 0 ? ' #f4fbff' : ' #fff5e6',
        padding: '1rem 1.2rem',
        borderRadius: '10px',
        border: '1px solid #e0e0e0',
        boxShadow: '2px 3px 8px rgba(0, 0, 0, 0.06)',
        color: '#333',
        fontSize: '0.96rem'
      }}>
        <strong style={{ color: '#002145', marginRight: '0.5rem' }}>✔</strong> {point}
      </div>
    ))}
  </div>
</div>

<div style={{ width: '68%', fontFamily: 'Segoe UI, sans-serif', lineHeight: 1.7 }}>

<h2 style={{
  fontSize: '2.1rem',
  fontWeight: 700,
  color: ' #ed740a',
  marginBottom: '1rem'
}}>
  Penalty <span style={{ color: ' #002145' }}>for Delay in GST Return Filing</span>
</h2>

<div style={{
  backgroundColor: '#fff4f4',
  padding: '1.2rem 1.5rem',
  borderLeft: '6px solid #f44336',
  borderRadius: '10px',
  boxShadow: '2px 3px 8px rgba(244, 67, 54, 0.1)',
  marginBottom: '2rem',
  color: '#444',
  fontSize: '0.96rem'
}}>
  <p>
    Delayed GST Return Filing may lead to punitive actions. Taxpayers will incur both <strong>interest</strong> and a <strong>late fee</strong>:
  </p>
  <ul style={{ paddingLeft: '1.2rem', marginTop: '0.8rem' }}>
    <li><strong>Interest:</strong> 18% per annum on the outstanding tax amount.</li>
    <li><strong>Late Fee:</strong> ₹100 per day under CGST and ₹100 per day under SGST — totaling ₹200/day.</li>
    <li><strong>Maximum Late Fee:</strong> ₹5,000 (Not applicable under IGST).</li>
  </ul>
</div>

<h2 style={{
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#ed740a',
  marginBottom: '1rem'
}}>
  Revision <span style={{ color: '#002145' }}>of Invoices Before Filing</span>
</h2>

<div style={{
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  backgroundColor: ' #eef8f5',
  padding: '1.5rem',
  borderRadius: '12px',
  border: '1px solid #c6e8dc',
  boxShadow: '1px 2px 6px rgba(0,0,0,0.05)',
  fontSize: '0.96rem'
}}>
  <div style={{ flex: 1, minWidth: '280px' }}>
    <p>
      Taxpayers can revise invoices issued before obtaining the GST registration certificate. Under GST rules, dealers must assess provisional allocation before being registered.
    </p>
  </div>
  <div style={{ flex: 1, minWidth: '280px', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px dashed #bbb' }}>
    <strong>Key Point:</strong>
    <p style={{ marginTop: '0.5rem' }}>
      A <strong>revised invoice</strong> must be issued within <strong>1 month</strong> from the date of registration certificate issuance.
    </p>
  </div>
</div>

</div>

<div style={{ width: '68%', fontFamily: 'Arial, sans-serif', lineHeight: 1.7 }}>

  <h2 style={{
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1e2a47',
    marginBottom: '1rem'
  }}>
    FilingLab Procedure <span style={{ color: '#ed740a' }}>for GST Return Filing</span>
  </h2>

  <div style={{
    backgroundColor: '#f4f9ff',
    padding: '1.5rem 2rem',
    borderLeft: '6px solid #0056b3',
    borderRadius: '12px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    color: '#333',
    fontSize: '1rem'
  }}>
    <p>
      At FilingLab, our team of experts is here to guide you through the entire GST Return Filing process, ensuring seamless compliance and smooth functioning for your business operations in India.
    </p>
    <p>
      Our professionals are dedicated to providing you with cost-effective solutions, helping you plan and execute GST filings accurately and timely, so your business remains in full compliance.
    </p>
  </div>

  <h3 style={{
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#1e2a47',
    marginBottom: '1rem'
  }}>
    Expert Assistance Available
  </h3>

  <div style={{
    backgroundColor: '#fff6e5',
    padding: '1.3rem 1.5rem',
    borderRadius: '8px',
    border: '1px solid #edb84f',
    boxShadow: '1px 2px 8px rgba(0, 0, 0, 0.05)',
    fontSize: '1rem',
    color: '#444'
  }}>
    <p>
      To ensure accuracy and avoid any compliance gaps, it’s highly recommended to appoint an experienced professional for assistance. FilingLab experts will help you navigate the complexities of GST Return Filing with ease.
    </p>
    <p style={{
      marginTop: '1rem',
      fontWeight: 600,
      fontSize: '1.1rem',
      color: '#ed740a'
    }}>
      Purchase a Plan for Expert Assistance to streamline your GST Return Filing process and ensure hassle-free compliance.
    </p>
  </div>

</div>

<div style={{ width: '68%', fontFamily: 'Arial, sans-serif', lineHeight: 1.7 }}>

  <h2 style={{
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1e2a47',
    marginBottom: '1rem'
  }}>
    Why <span style={{ color: '#ed740a' }}>FilingLab</span>?
  </h2>

  <div style={{
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 7px rgba(0, 0, 0, 0.1)',
    color: '#333',
    fontSize: '1rem',
    marginBottom: '2rem'
  }}>
    <p>
      FilingLab is one of the best platforms designed to fulfill all your legal and financial requirements while connecting you with experienced professionals.
    </p>
    <p>
      Our clients consistently praise our legal services, highlighting our commitment to simplifying complex legal processes. We ensure regular updates to keep clients informed and satisfied throughout the journey.
    </p>
    <p>
      With FilingLab, you can always track the progress of your requests on our platform, ensuring full transparency and peace of mind. Have questions about GST Return Filing? Our expert representatives are just a call away, providing seamless communication with professionals.
    </p>
  </div>

  <h3 style={{
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#1e2a47',
    marginBottom: '1rem'
  }}>
    Simple Steps for GST Return Filing Assistance:
  </h3>

  <div style={{
    backgroundColor: '#fff6e5',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #edb84f',
    boxShadow: '1px 2px 8px rgba(0, 0, 0, 0.05)',
    fontSize: '1rem',
    color: '#444'
  }}>
    <ol style={{ marginLeft: '2rem' }}>
      <li>Purchase a Plan for Expert Assistance</li>
      <li>Add Queries Regarding GST Return Filing</li>
      <li>Provide Documents to FilingLab Expert</li>
      <li>Prepare Application for GST Return Filing and complete all Admissibility Criteria for Preliminary Screening</li>
      <li>Complete Procedural Actions</li>
      <li>Get your GST Return Filing done at your Door Step!</li>
    </ol>

    <p style={{
      marginTop: '1.5rem',
      fontWeight: 600,
      fontSize: '1.1rem',
      color: ' #ed740a'
    }}>
      Simply provide the mandatory information, and our attorneys will begin working on your request once the details and payment are received.
    </p>
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

export default GSTReturningContent;