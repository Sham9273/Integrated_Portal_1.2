import React from 'react';

const Help = () => {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 24, background: '#f9f9f9', borderRadius: 8 }}>
      <h2 style={{ color: '#1976d2', fontFamily: 'Cambria, serif' }}>Help</h2>

      <section style={{ marginBottom: 24 }}>
        <h3 style={{ color: '#333', fontFamily: 'Cambria, serif' }}>Sections of this website</h3>
        <p>
          This section provides a summary of how to access, various file formats supported, etc. on Integrated Portal.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h3 style={{ color: '#333', fontFamily: 'Cambria, serif' }}>Using the Search Facility</h3>
        <p>
          Provides tips on searching information on this website in an effective way.
        </p>
      </section>

      <section>
        <h3 style={{ color: '#333', fontFamily: 'Cambria, serif' }}>Viewing Information in Various File Formats</h3>
        <p>
          The information provided by this portal is available in various file formats, such as Portable Document Format (PDF), Word, Excel, and PowerPoint. 
          To view the information properly, your browser needs to have the required plug-ins or software. For example, the Adobe Flash software is required to view Flash files. 
          In case your system does not have this software, you can download it from the Internet for free. The table below lists the required plug-ins needed to view the information in various file formats.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
          <thead>
            <tr style={{ background: '#e3f2fd' }}>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>File Format</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Required Plug-in/Software</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Download Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>PDF</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Adobe Acrobat Reader</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer">Download</a>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Word/Excel/PowerPoint</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Microsoft Office Viewer</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <a href="https://www.microsoft.com/en-us/download/details.aspx?id=4" target="_blank" rel="noopener noreferrer">Download</a>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Flash</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Adobe Flash Player</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <a href="https://get.adobe.com/flashplayer/" target="_blank" rel="noopener noreferrer">Download</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Help;