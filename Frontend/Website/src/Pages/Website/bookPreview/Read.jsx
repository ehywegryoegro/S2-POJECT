// src/Components/PDFViewer/PDFViewer.jsx

import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './Read.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PDFViewer = () => {
    const { id } = useParams();
    const [numPages, setNumPages] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);}

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`http://localhost:4000/books/getid/${id}`, { withCredentials: true });
               
                const Pdffile = response.data.data.filename ;
                setPdfFile(Pdffile);
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
   
  return (
    <div className="pdf-viewer-overlay ">
      <button className='bg-black text-white   '>edjijijijwe</button>
      <div className="pdf-viewer-container">
        <button className="close-button" >Close</button>
        <Document file={pdfFile}  onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;

