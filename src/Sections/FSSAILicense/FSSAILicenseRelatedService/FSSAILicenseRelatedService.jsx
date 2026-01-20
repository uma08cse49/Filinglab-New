// import React from 'react';
// import { Link } from 'react-router-dom';


// // const relatedServices = [
// //   "Eating House License",
// //   "FSSAI License",
// //   "Food Recycling License",
// //   "FPO Mark Certification",
// //   "FSSAI Annual Return",
// //   "FSSAI License Renewal",
// //   "FSSAI State License",
// //   "Central FSSAI License",
// // ];

// const relatedServices = [
//     { label: "Eating House License", href: "/FSSAIEatingHouseLicense" },
//     { label: "FSSAI License", href: "/fssai-license" },
//     { label: "Food Recycling License", href: "/food-recycling-license" },
//     { label: "FPO Mark Certification", href: "/fpo-mark-certification" },
//     { label: "FSSAI Annual Return", href: "/fssai-annual-return" },
//     { label: "FSSAI License Renewal", href: "/fssai-license-renewal" },
//     { label: "FSSAI State License", href: "/fssai-state-license" },
//     { label: "Central FSSAI License", href: "/central-fssai-license" },
//     { label: "FSSAI Product Approval", href: "/FSSAIproductapproval" },

//   ];
  

// const RelatedServices = () => {
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Related Services</h2>
//       <div style={styles.grid}>
//         {/* {relatedServices.map((service, index) => (
//           <div
//             key={index}
//             style={styles.card}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#e8f0fa';
//               e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = '#f2f2f2';
//               e.currentTarget.style.boxShadow = 'none';
//             }}
//           >
//             <span style={styles.arrow}>➤</span>
//             <span>{service}</span>
//           </div>
//         ))} */}
        

//         {relatedServices.map((service, index) => (
//         <Link
//             key={index}
//             to={service.href}
//             style={{ textDecoration: 'none' }}
//         >
//             <div style={styles.card}>
//             <span style={styles.arrow}>➤</span>
//             <span>{service.label}</span>
//             </div>
//         </Link>
//         ))}

//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '60px auto',
//     padding: '0 20px',
//   },
//   heading: {
//     fontSize: '28px',
//     textAlign: 'center',
//     fontWeight: '700',
//     marginBottom: '30px',
//     color: '#002145',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '20px',
//   },
//   card: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//     padding: '14px 18px',
//     borderRadius: '6px',
//     borderLeft: '5px solid #003566',
//     fontWeight: '600',
//     color: '#002145',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
//   arrow: {
//     marginRight: '12px',
//     fontSize: '18px',
//   },
// };

// export default RelatedServices;


// ===========================================================================================

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const relatedServices = [
  { label: "Eating House License", href: "/FSSAIEatingHouseLicense" },
  { label: "FSSAI License", href: "/fssai-license" },
  { label: "Food Recycling License", href: "/food-recycling-license" },
  { label: "FPO Mark Certification", href: "/fpo-mark-certification" },
  { label: "FSSAI Annual Return", href: "/fssaiannualreturn" },
  { label: "FSSAI License Renewal", href: "/fssai-license-renewal" },
  { label: "FSSAI State License", href: "/fssaistatelicense" },
  { label: "Central FSSAI License", href: "/fssaicentrallicense" },
  { label: "FSSAI Product Approval", href: "/FSSAIproductapproval" },
];

const RelatedServices = () => {
  const location = useLocation();

  // Filter out the current page's service
  const filteredServices = relatedServices.filter(
    (service) => service.href.toLowerCase() !== location.pathname.toLowerCase()
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Related Services</h2>
      <div style={styles.grid}>
        {filteredServices.map((service, index) => (
          <Link
            key={index}
            to={service.href}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e8f0fa';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f2f2f2';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={styles.arrow}>➤</span>
              <span>{service.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '28px',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#002145',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '14px 18px',
    borderRadius: '6px',
    borderLeft: '5px solid #003566',
    fontWeight: '600',
    color: '#002145',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  arrow: {
    marginRight: '12px',
    fontSize: '18px',
  },
};

export default RelatedServices;
