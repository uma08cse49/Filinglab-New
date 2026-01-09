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
const LegalMetrologyContent = () => {

    
        const genericServices = [
          { label: "Income Tax Return Filing", url: "/tax-returning" },
    { label: "GST Return Filing", url: "/gstreturning" },
    { label: "TDS Return Filing", url: "/tds-return-filing" },
    { label: "GST Registration", url: "/gst" },
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
            <div style={{ width: '68%', padding: '20px 0' }}>
  <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#002145', marginBottom: '20px' }}>
    Overview of <span style={{ color: '#ed740a' }}>Key Business Agreements</span>
  </h2>

  <div style={{
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    lineHeight: 1.7,
    fontSize: '16px',
    color: '#333'
  }}>
    <p><strong>1. Service Level Agreement (SLA)</strong></p>
    <p>
      A Service Level Agreement is a formal agreement between a service provider and a customer that defines the level and quality of service expected. SLAs are often output-based and aim to clarify the nature, scope, and performance metrics of the services provided. In simple terms, it is a contract that sets clear expectations for service delivery between a provider and an end-user.
    </p>

    <p><strong>2. Franchise Agreement</strong></p>
    <p>
      A Franchise Agreement is a legally binding contract between a franchisor and a franchisee. It grants the franchisee the right to operate a business using the franchisor’s brand, business model, and proprietary systems. This agreement outlines key aspects such as the franchise term, fees, operational guidelines, and conditions regarding penalties, compensation, and termination. It serves to maintain a professional and cooperative relationship between both parties and supports the growing Indian franchising landscape.
    </p>

    <p><strong>3. Joint Venture Agreement</strong></p>
    <p>
      A Joint Venture Agreement is entered into by two or more entities that collaborate by pooling resources—such as assets, manpower, and intellectual property—to achieve a shared business objective. This arrangement may result in the creation of a new business entity or remain a contractual collaboration. The agreement formalizes the roles, contributions, and responsibilities of each party involved.
    </p>
  </div>
</div>



                    
                <div
                    ref={formContainerRef}
                    style={{
                        flex: 1,
                        width: '300px',
                        position: isFixed ? 'fixed' : 'static',
                        top: isFixed ? '100px' : '500px',
                        right: isFixed ? '185px' : '0px',
                        marginLeft:'27px',
                        // marginTop:'83px'
                    }}
                >
                    <StickyForm />
                </div>
            </div>

            <div style={{
  width: '68%',
  background: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
  borderRadius: '16px',
  padding: '40px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#333'
}}>

  <h2 style={{
    fontSize: '34px',
    fontWeight: 800,
    color: '#002145',
    marginBottom: '30px',
    borderBottom: '3px solid #ed740a',
    paddingBottom: '10px'
  }}>
    Benefits of <span style={{ color: '#ed740a' }}>Key Business Agreements</span>
  </h2>

  {/* Joint Venture */}
  <div style={{ marginBottom: '35px' }}>
    <h3 style={{
      fontSize: '26px',
      color: '#002145',
      borderLeft: '5px solid #ed740a',
      paddingLeft: '15px',
      marginBottom: '20px'
    }}>🤝 Joint Venture Agreement</h3>

    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
      {[
        'Pooling resources boosts production capacity and efficiency.',
        'Shared operations help lower production and service delivery costs.',
        'Enables seamless entry into domestic and international markets.',
        'Collaboration fosters product, technological, and marketing innovations.',
        'Smaller firms gain access to proprietary technology of larger firms.',
        'Capital responsibilities are divided, easing financial pressure.',
        'Association with a well-known brand enhances reputation and trust.',
        'Allows exchange of expertise and know-how among partners.',
        'Encourages cooperation over competition to achieve common goals.',
        'Agreements can be tailored to meet the specific goals and needs of all parties.'
      ].map((item, i) => (
        <li key={i} style={{ marginBottom: '10px' }}>
          <span style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            backgroundColor: '#ed740a',
            borderRadius: '50%',
            textAlign: 'center',
            color: '#fff',
            fontSize: '12px',
            lineHeight: '20px',
            marginRight: '10px'
          }}>✓</span>{item}
        </li>
      ))}
    </ul>
  </div>

  {/* Franchise Agreement */}
  <div style={{ marginBottom: '35px' }}>
    <h3 style={{
      fontSize: '26px',
      color: '#002145',
      borderLeft: '5px solid #ed740a',
      paddingLeft: '15px',
      marginBottom: '20px'
    }}>🏢 Franchise Agreement</h3>

    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
      {[
        'Legal use of established brand name, trademarks, and proven business model.',
        'Access to franchisor’s marketing strategies and product knowledge.',
        'Franchisor sets clear guidelines to ensure consistent brand quality and governance.'
      ].map((item, i) => (
        <li key={i} style={{ marginBottom: '10px' }}>
          <span style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            backgroundColor: '#ed740a',
            borderRadius: '50%',
            textAlign: 'center',
            color: '#fff',
            fontSize: '12px',
            lineHeight: '20px',
            marginRight: '10px'
          }}>✓</span>{item}
        </li>
      ))}
    </ul>
  </div>

  {/* SLA */}
  <div>
    <h3 style={{
      fontSize: '26px',
      color: '#002145',
      borderLeft: '5px solid #ed740a',
      paddingLeft: '15px',
      marginBottom: '20px'
    }}>📜 Service Level Agreement (SLA)</h3>

    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
      {[
        'Clearly defined SLAs reduce misunderstandings and set realistic service expectations.',
        'Translates technical service metrics into user-friendly outcomes and clearly outlines issue resolution paths.'
      ].map((item, i) => (
        <li key={i} style={{ marginBottom: '10px' }}>
          <span style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            backgroundColor: '#ed740a',
            borderRadius: '50%',
            textAlign: 'center',
            color: '#fff',
            fontSize: '12px',
            lineHeight: '20px',
            marginRight: '10px'
          }}>✓</span>{item}
        </li>
      ))}
    </ul>
  </div>

</div>


<div style={{
  width: '68%',
  backgroundColor: '#ffffff',
  border: '1px solid #eee',
  borderRadius: '12px',
  padding: '40px',
  fontFamily: 'Calibri, sans-serif',
  color: '#333',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  marginTop:'20px'
}}>
  <h2 style={{
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#002145',
    borderBottom: '2px solid #ed740a',
    paddingBottom: '12px',
    marginBottom: '30px'
  }}>
    Why is <span style={{ color: '#ed740a' }}>Service Level Agreement</span> Essential?
  </h2>

  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '25px'
  }}>
    {[
      "Provides precise, clear, and unambiguous information pertaining to the service.",
      "Describes problems and their severity, including expected response times.",
      "Outlines consequences if performance targets are missed.",
      "Explains expertise, hierarchy, and procedures followed by the service provider.",
      "Defines service coverage areas and any exclusions.",
      "Includes customer rights and associated penalties for non-compliance.",
      "Strengthens trust by ensuring transparency and accountability.",
      "Details the commitments the provider must fulfill to ensure customer satisfaction."
    ].map((item, i) => (
      <div key={i} style={{
        backgroundColor: '#f9f9f9',
        borderLeft: '4px solid #ed740a',
        padding: '16px 20px',
        borderRadius: '8px',
        fontSize: '16px',
        lineHeight: '1.5'
      }}>
        {item}
      </div>
    ))}
  </div>
</div>

<div style={{
  width: '68%',
  backgroundColor: '#fff',
  padding: '40px',
  borderLeft: '6px solid #ed740a',
  fontFamily: "'Georgia', serif",
  color: '#002145',
  lineHeight: '1.6',
  marginTop:'20px'
}}>

  <h2 style={{
    fontSize: '32px',
    color: '#002145',
    marginBottom: '30px',
    borderBottom: '2px dotted #ed740a',
    paddingBottom: '10px'
  }}>
    Important Aspects of a <span style={{ color: '#ed740a' }}>Joint Venture Agreement</span>
  </h2>

  {[
    {
      title: "Defining the Object and Purpose",
      desc: "Clearly define why the joint venture is being created and what objectives the parties aim to achieve."
    },
    {
      title: "Financial Aspects",
      desc: "Clarify profit/loss sharing ratios, capital investment, cost responsibilities, and strategies for future funding."
    },
    {
      title: "Management",
      desc: "Detail management structure, company representation, and decision-making responsibilities."
    },
    {
      title: "Confidentiality",
      desc: "Include clauses to safeguard sensitive information shared between parties."
    },
    {
      title: "Non-Compete Provision",
      desc: "Prevent parties from using shared knowledge to gain unfair competitive advantages."
    },
    {
      title: "Indemnity",
      desc: "Define compensation obligations in the event of a contract breach."
    },
    {
      title: "Dispute Resolution",
      desc: "Specify mechanisms to resolve conflicts and avoid costly litigation."
    }
  ].map((item, i) => (
    <div key={i} style={{
      position: 'relative',
      paddingLeft: '30px',
      marginBottom: '25px'
    }}>
      <div style={{
        position: 'absolute',
        left: '0',
        top: '5px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#ed740a'
      }}></div>
      <h4 style={{ margin: '0 0 6px 0', fontSize: '18px' }}>{item.title}</h4>
      <p style={{ margin: 0, fontSize: '16px', color: '#333' }}>{item.desc}</p>
    </div>
  ))}

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

export default LegalMetrologyContent;