import React from 'react';

const GetStartedSection = () => {
  const containerStyle = {
    backgroundColor: '#004b84',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#f4a621',
    border: 'none',
    padding: '12px 24px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    float: 'right',
    marginRight: '40px',
  };

  const stepsContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '40px',
  };

  const stepItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
    margin: '10px',
  };

  const iconCircle = (bgColor) => ({
    backgroundColor: bgColor,
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: 'white',
    marginBottom: '10px',
  });

  const labelStyle = {
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Get started?</div>
      <p style={paragraphStyle}>
        We also help you market your products through an online marketplace.
      </p>
      <button style={buttonStyle}>Start My Business</button>

      <div style={stepsContainer}>
        <div style={stepItem}>
          <div style={iconCircle('#f25d5d')}>📝</div>
          <span style={labelStyle}>Fill up Application Form</span>
        </div>
        <div style={stepItem}>
          <div style={iconCircle('#2ecc71')}>💳</div>
          <span style={labelStyle}>Make Online Payment</span>
        </div>
        <div style={stepItem}>
          <div style={iconCircle('#f39c12')}>🎧</div>
          <span style={labelStyle}>Executive will Process Application</span>
        </div>
        <div style={stepItem}>
          <div style={iconCircle('#7f8c8d')}>✉️</div>
          <span style={labelStyle}>Get Confirmation Mail</span>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
