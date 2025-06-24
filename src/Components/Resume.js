import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set workerSrc to load pdf.worker.js from an external CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', boxSizing: 'border-box', overflowY: 'auto', minHeight: '100vh' , marginTop: '40px' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Document
          file="/Achintya-Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading resume..."
          error="Failed to load resume."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800}
              style={{ marginBottom: '20px' }}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default Resume;
