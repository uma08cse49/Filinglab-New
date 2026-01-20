// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const Section = styled.section`
//   background: #fffaf5;
//   padding: 80px 20px;
//   overflow: hidden;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 2.4rem;
//   color: #ed740a;
//   margin-bottom: 60px;
//   font-weight: 700;
// `;

// const CircleWrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 30px;
// `;

// const Bubble = styled(motion.div)`
//   width: 250px;
//   height: 250px;
//   background: white;
//   border: 4px solid #ed740a;
//   border-radius: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   padding: 20px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
//   transition: 0.3s ease;
//   cursor: default;

//   &:hover {
//     background: #002145;
//     color: #fff;
//     transform: scale(1.05);
//   }

//   h4 {
//     font-size: 1rem;
//     margin-bottom: 10px;
//     color: inherit;
//   }

//   p {
//     font-size: 0.85rem;
//     color: inherit;
//   }
// `;

// const mistakes = [
//   {
//     title: "Wrong Documentation",
//     desc: "Avoid incorrect invoices or bills of supply during GST filings."
//   },
//   {
//     title: "Misunderstanding Composition Scheme",
//     desc: "Understand the GST composition scheme to avoid compliance issues."
//   },
//   {
//     title: "Missing Return Deadlines",
//     desc: "Delays in filing returns can trigger penalties and disrupt operations."
//   },
//   {
//     title: "Invoice Inaccuracies",
//     desc: "GSTIN or tax errors in invoices cause non-compliance and rejection."
//   },
//   {
//     title: "GSTR-2A vs 3B Mismatch",
//     desc: "Failure to reconcile returns may lead to ITC loss or audits."
//   },
//   {
//     title: "Unverified Supplier GSTIN",
//     desc: "Incorrect or unverified GSTIN blocks your input tax credit."
//   }
// ];

// const GSTMistakesToAvoid = () => {
//   return (
//     <Section>
//       <Container>
//         <Title>Common GST Mistakes to Avoid</Title>
//         <CircleWrap>
//           {mistakes.map((m, i) => (
//             <Bubble
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h4>{m.title}</h4>
//               <p>{m.desc}</p>
//             </Bubble>
//           ))}
//         </CircleWrap>
//       </Container>
//     </Section>
//   );
// };

// export default GSTMistakesToAvoid;

import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Section = styled.section`
  background:rgb(239, 239, 239);
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  margin-top:30px
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #ed740a;
  margin-bottom: 50px;
  font-weight: 700;
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 20px;
  border-left: 4px solid #ed740a;
  max-width: 800px;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 20px;
    height: 20px;
    background: #ed740a;
    border-radius: 50%;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding: 8px 0 8px 30px;
  border-bottom: 1px dashed #ccc;
  text-align: left;

  &:last-child {
    border-bottom: none;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #002145;
    margin-bottom: 6px;
  }

  p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
  }
`;

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.12;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 0;
`;

const Bubbles = () => {
  const bubbles = [];
  const colors = ["  #ed740a", "  #002145"];

  for (let i = 0; i < 16; i++) {
    const size = Math.floor(Math.random() * 30 + 40); // slightly larger bubbles
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    bubbles.push(
      <Bubble
        key={i}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
        }}
      />
    );
  }

  return <>{bubbles}</>;
};

const warnings = [
  {
    title: "Wrong Documentation",
    desc: "Avoid maintaining incorrect invoices or bills of supply which are essential for GST compliance."
  },
  {
    title: "Misunderstanding Composition Scheme",
    desc: "Incorrect understanding of GST composition scheme can cause compliance issues."
  },
  {
    title: "Missing Return Deadlines",
    desc: "Delays in GST filings can attract heavy penalties and business disruptions."
  },
  {
    title: "Invoice Inaccuracies",
    desc: "Incorrect GSTINs or tax calculations in invoices can lead to audit triggers."
  },
  {
    title: "GSTR-2A vs 3B Mismatch",
    desc: "Reconciliation failures between returns can result in ITC denial."
  },
  {
    title: "Unverified Supplier GSTIN",
    desc: "Using unverified GSTINs blocks your eligibility for input tax credits."
  }
];

const GSTMistakesToAvoid = () => {
  return (
    <Section>
      <Bubbles />
      <Container>
        <Title>Common GST Mistakes to Avoid</Title>
        <Timeline>
          {warnings.map((item, i) => (
            <TimelineItem
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default GSTMistakesToAvoid;
