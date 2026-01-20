import React from 'react';

const CompanyRegistrationSection = () => {
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
      <div style={headingStyle}>Types of Company Registration</div>

      <p style={paragraphStyle}>
        Understanding the various types of company registration structures in India is crucial for any business.
        Depending on your specific needs, you can choose from a range of options. The most common type is
        the Private Limited Company (Pvt Ltd). Let's delve into these structures and their benefits and
        drawbacks in the table below:
      </p>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={boldCellStyle}>Title</th>
              <th style={boldCellStyle}>Private<br />Limited<br />Company</th>
              <th style={boldCellStyle}>One<br />Person<br />Company</th>
              <th style={boldCellStyle}>Limited<br />Liability<br />Partnership</th>
              <th style={boldCellStyle}>Section 8<br />Company</th>
              <th style={boldCellStyle}>Partnership<br />Firm</th>
              <th style={boldCellStyle}>Proprietorship<br />Firm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={boldCellStyle}>Regulation</td>
              <td style={cellStyle}>Companies Act, 2013</td>
              <td style={cellStyle}>Companies Act, 2013</td>
              <td style={cellStyle}>Limited Liability Partnership Act, 2008</td>
              <td style={cellStyle}>Companies Act, 2013</td>
              <td style={cellStyle}>Partnership Act, 1932</td>
              <td style={cellStyle}>No Specific Act</td>
            </tr>
            <tr>
              <td style={boldCellStyle}>Registration</td>
              <td style={cellStyle}>Mandatory</td>
              <td style={cellStyle}>Mandatory</td>
              <td style={cellStyle}>Mandatory</td>
              <td style={cellStyle}>Mandatory</td>
              <td style={cellStyle}>Optional</td>
              <td style={cellStyle}>No</td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyRegistrationSection;
