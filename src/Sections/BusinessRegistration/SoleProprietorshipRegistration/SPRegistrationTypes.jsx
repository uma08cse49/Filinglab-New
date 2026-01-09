import React from 'react';

const SPRegistrationTypes = () => {
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
      <div style={headingStyle}>Sole Proprietorship Vs Partnership</div>

      <p style={paragraphStyle}>
        Sole Proprietorship Vs Partnership Sole proprietorship and partnership are famous business structures available in India. While a sole proprietorship is wholly owned, managed and controlled by a single owner, the partnership is run between 2 or more partners who agree upon their responsibilities and duties in a mutual understanding. Let us explore the difference between both structures:
      </p>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={boldCellStyle}>S. No</th>
              <th style={boldCellStyle}>Assest</th>
              <th style={boldCellStyle}>Sole Proprietorship</th>
              <th style={boldCellStyle}>Partnership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={boldCellStyle}>1.</td>
              <td style={cellStyle}>	Ownership</td>
              <td style={cellStyle}>Single owner</td>
              <td style={cellStyle}>Between 2 to 50 owners</td>
            </tr>
            <tr>
              <td style={boldCellStyle}>2.</td>
              <td style={cellStyle}>	Liability</td>
              <td style={cellStyle}>Unlimited for single owner</td>
              <td style={cellStyle}>Unlimited but shared personal liability</td>
            </tr>
            <tr>
              <td style={boldCellStyle}>3.</td>
              <td style={cellStyle}>Decision-Making</td>
              <td style={cellStyle}>Fully controlled by single owner</td>
              <td style={cellStyle}>Joint decision making between partners</td>
            </tr>
            <tr>
              <td style={boldCellStyle}>4.</td>
              <td style={cellStyle}>Profit-Sharing</td>
              <td style={cellStyle}>Single owner gets the entire share</td>
              <td style={cellStyle}>Divided among partners in an agreed ratio</td>
            </tr>
             <tr>
              <td style={boldCellStyle}>5.</td>
              <td style={cellStyle}>Formation</td>
              <td style={cellStyle}>Easy, hassle-free set up</td>
              <td style={cellStyle}>Partnership Deed is a must</td>
            </tr>

             <tr>
              <td style={boldCellStyle}>6.</td>
              <td style={cellStyle}>Capital</td>
              <td style={cellStyle}>Invested by the single owner</td>
              <td style={cellStyle}>Collected by all partners</td>
            </tr>
             <tr>
              <td style={boldCellStyle}>7.</td>
              <td style={cellStyle}>Regulation</td>
              <td style={cellStyle}>Minimum regulations to follow</td>
              <td style={cellStyle}>More complex than sole proprietorship, requires legal compliances</td>
            </tr>
              <tr>
              <td style={boldCellStyle}>8.</td>
              <td style={cellStyle}>Taxation</td>
              <td style={cellStyle}>Taxed as personal income tax</td>
              <td style={cellStyle}>Taxed at 30% income tax</td>
            </tr>
            <tr>
              <td style={boldCellStyle}>9.</td>
              <td style={cellStyle}>Perpetual Succession</td>
              <td style={cellStyle}>No, ends when the owner dies or dissolves the firm</td>
              <td style={cellStyle}>May continue even in case of death of a partner</td>
            </tr>
                <tr>
              <td style={boldCellStyle}>10.</td>
              <td style={cellStyle}>Dispute Resolution</td>
              <td style={cellStyle}>No scope for conflict as it has a single owner</td>
              <td style={cellStyle}>Potential for disputes between partners</td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SPRegistrationTypes;
