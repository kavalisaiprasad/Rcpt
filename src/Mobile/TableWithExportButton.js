import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useParams } from 'react-router-dom';

function TableWithExportButton() {
  const [rechargeData, setRechargeData] = useState([]);
  const { shortcode } = useParams();
  const tableRef = useRef(null);

  const exportTableAsPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: tableRef.current });
    doc.save('table.pdf');
  };

  useEffect(() => {
    // Define a function to fetch data from the API
    const apiEndpoint = `http://172.22.9.105:9093/rcpt-api/getrechargedetails?shortcode=${shortcode}`;

    const requestOptions = {
      method: 'POST', // Use 'GET' for retrieving data
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(apiEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRechargeData(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [shortcode]);

  return (
    <div>
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rechargeData.map((item) => (
            <tr key={item}>
              <td>{item.Date}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={exportTableAsPDF}>Export as PDF</button>
    </div>
  );
}

export default TableWithExportButton;
