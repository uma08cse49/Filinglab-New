import React from 'react';

const OPCTypes = () => {
  const sectionStyle = {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
  };

  const tableContainerStyle = {
    overflowX: 'auto',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    minWidth: '800px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const headerRowStyle = {
    backgroundColor: '#1D4A7C',
    color: 'white',
  };

  const cellStyle = {
    padding: '12px 16px',
    border: '1px solid #ccc',
    textAlign: 'center',
  };

  const boldCellStyle = {
    ...cellStyle,
    fontWeight: 'bold',
  };

  return (
    <div style={sectionStyle}>
      <div style={headingStyle}>One Person Company Vs Sole Proprietorship</div>

      <p style={paragraphStyle}>
        However, both one person company and sole proprietorship are single person company registered in India, there exists a clear difference between the two business lines.
      </p>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={boldCellStyle}>S.no.</th>
              <th style={boldCellStyle}>Aspect</th>
              <th style={boldCellStyle}>One<br />Person<br />Company</th>
              <th style={boldCellStyle}>Sole <br />Proprietorship</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={boldCellStyle}>1.</td>
              <td style={cellStyle}>Registered</td>
              <td style={cellStyle}>Under the Ministry of Corporate Affairs and Companies Act, 2013</td>
              <td style={cellStyle}>Not a registered entity</td>
            </tr>
            <tr>
              <td style={boldCellStyle}>2.</td>
              <td style={cellStyle}>Legal Status</td>
              <td style={cellStyle}>Distinct/ Separate Legal Entity</td>
              <td style={cellStyle}>No Separate Legal Entity</td>
            </tr>

            <tr>
              <td style={boldCellStyle}>3.</td>
              <td style={cellStyle}>Liability</td>
              <td style={cellStyle}>Limited Liability</td>
              <td style={cellStyle}>Unlimited Liability</td>
            </tr>

            <tr>
              <td style={boldCellStyle}>4.</td>
              <td style={cellStyle}>Management Structure</td>
              <td style={cellStyle}>Separate Management Structure</td>
              <td style={cellStyle}>No Separate Management Structure</td>
            </tr>

             <tr>
              <td style={boldCellStyle}>5.</td>
              <td style={cellStyle}>Compliance</td>
              <td style={cellStyle}>Greater Compliance</td>
              <td style={cellStyle}>Less Compliance</td>
            </tr>
             <tr>
              <td style={boldCellStyle}>6.</td>
              <td style={cellStyle}>Perpetual Succession</td>
              <td style={cellStyle}>Perpetual Existence</td>
              <td style={cellStyle}>Limited Period Existence</td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OPCTypes;
