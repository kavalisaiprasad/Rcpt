// import React, { useEffect, useState } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { useParams } from 'react-router-dom';
// import { baseurl } from '../Component/Baseurl';

// function ReceiptComponent() {
//   const { shortcode } = useParams();
//   const [rechargeData, setRechargeData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${baseurl}/rcpt-api/getrechargedetails?shortcode=${shortcode}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           if (Array.isArray(data) && data.length > 0) {
//             setRechargeData(data[0]);
//           }
//         } else {
//           console.error('Error fetching data:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [shortcode]);

//   useEffect(() => {
//     const splitHTMLtoMultiPagePDF = async () => {
//       const htmlWidth = document.getElementById('showtable').offsetWidth;
//       const htmlHeight = document.getElementById('showtable').offsetHeight;
//       const pdfWidth = htmlWidth + 30; // Add 15 pixels for left and right margins
//       const pdfHeight = (pdfWidth * 1.5) + 30; // Add 15 pixels for top and bottom margins

//       const doc = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);

//       const pageCount = Math.ceil(htmlHeight / pdfHeight) - 1;

//       const canvas = await html2canvas(document.getElementById('showtable'));

//       const image = canvas.toDataURL('image/png', 1.0);
//       doc.addImage(image, 'PNG', 15, 15, htmlWidth, htmlHeight);

//       for (let i = 1; i <= pageCount; i++) {
//         doc.addPage(pdfWidth, pdfHeight);
//         doc.addImage(image, 'PNG', 15, -(pdfHeight * i) + 15, htmlWidth, htmlHeight);
//       }

//       const pdfBlob = doc.output('blob');
//       const downloadLink = document.createElement('a');
//       downloadLink.href = window.URL.createObjectURL(pdfBlob);
//       downloadLink.download = 'bsnl-receipt.pdf';
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     };

//     splitHTMLtoMultiPagePDF();
//   }, []);

//   const containerStyle = {
//     border: '1px solid yellow',
//   };

//   const titleStyle = {
//     color: '#DF0101',
//   };

//   const headingStyle = {
//     fontWeight: '700',
//     fontSize: '22px',
//     marginBottom: '0px',
//   };

//   const amountStyle = {
//     fontWeight: '700',
//     fontSize: '22px',
//     marginBottom: '0px',
//     fontFamily: 'Open Sans',
//   };

//   return (
//     <div id="showtable" className="print_section">
//       <div className="col-md-12 m-1 border-top border-bottom row" style={containerStyle} id="plan-mob">
//         <div className="col-md-2 mt-2 mb-2">
//           <img src="https://rcpt.in/images/logo.jpeg" className="sai" width="100%" id="rec-logo-mob" alt="Logo" />
//         </div>
//       </div>

//       <div className="maindowresp">
//         <div className="text-center">
//           <h2>
//             <b>
//               <font className="receipttext">Recharge Receipt</font>
//             </b>
//           </h2>
//         </div>

//         <div className="mx-2 row recepitrow p-2 forbodrad" id="plan-mob">
//           <div className="col-4 col-sm-4 border-right text-center py-2">
//             <h6 id="heading">Mobile Number</h6>
//             <p style={headingStyle}><b>{rechargeData?.mobileNumber}</b></p>
//           </div>

//           <div className="col-4 col-sm-4 border-right text-center py-2">
//             <h6 id="heading">Transactions No.</h6>
//             <p style={headingStyle}><b>{rechargeData?.transactionNumber}</b></p>
//           </div>

//           <div className="col-4 col-sm-4 text-center py-2">
//             <h6 id="heading">Amount Paid</h6>
//             <p style={amountStyle}>&#x20b9; {rechargeData?.amountPaid}</p>
//           </div>
//         </div>

//         <div className="rechdeatils row mx-2 py-3" style={{ border: '2px solid #0927eb' }}>
//           <div className="col-6 rechdeatilscol1 ">
//             <h6>Recharge type</h6>
//             <h6>Validity of the Plan</h6>
//             <h6>Amount Paid :</h6>
//             <h6>Transaction Date :</h6>
//           </div>
//           <div className="col-6">
//             <h6>{rechargeData?.rechargeType}</h6>
//             <h6>{rechargeData?.validity}</h6>
//             <h6>Amount Paid :</h6>
//             <h6>{rechargeData?.transactionDate}</h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReceiptComponent;
