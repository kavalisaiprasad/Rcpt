import React, { useState, useEffect, useRef } from "react";
import Headermobile from "./Headermobile";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { baseurl } from "../Component/Baseurl";
import MM1 from "../images/MM1.webp";
import MM2 from "../images/MM2.webp";
import HH from "../images/Horoscope.webp";

import M1 from "../images/M1.webp";
import M2 from "../images/M2.webp";
import M3 from "../images/M3.webp";

function Receipt() {
  const [rechargeData, setRechargeData] = useState(null);
  const { shortcode } = useParams();
  const tableRef = useRef(null);

  useEffect(() => {
    const apiEndpoint = `${baseurl}/rcpt-api/getrechargedetails?shortcode=${shortcode}`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(apiEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRechargeData(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [shortcode]);
  console.log("rechargeData", JSON.stringify(rechargeData));

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});

    // window.googletag = window.googletag || { cmd: [] };
    // // Define a function to determine the device type
    // function isMobileDevice() {
    //   return window.innerWidth < 768; // You can adjust the threshold as needed
    // }
    // window.googletag.cmd.push(function () {
    //   var adSlot;
    //   if (isMobileDevice()) {
    //     // Define the mobile ad slot
    //     adSlot = window.googletag.defineSlot(
    //       '/22387492205,22578111928/rcpt.in-mw-banner-300x250-3',
    //       [[360, 90], [250, 90], [300, 90]],
    //       'gpt-passback-BTF'
    //     );
    //   } else {
    //     // Define the desktop ad slot
    //     adSlot = window.googletag.defineSlot(
    //       '/22387492205,22578111928/rcpt.in-mw-banner-300x250-3',
    //       ['fluid', [970, 90]],
    //       'gpt-passback-BTF'
    //     );
    //   }
    //   // Add service and enable
    //   adSlot.addService(window.googletag.pubads());
    //   window.googletag.enableServices();
    //   // Set page URL
    //   window.googletag.pubads().set('page_url', 'rcpt.in');
    //   // Display the ad slot
    //   window.googletag.display('gpt-passback-BTF');
    // });
    // window.googletag.cmd.push(function () {
    //   window.googletag
    //     .defineSlot(
    //       '/22387492205,22578111928/rcpt.in.Banner0.1698403981',
    //       [[300, 250], [320, 280], 'fluid'],
    //       'gpt-passback-rcpt.in.Banner0.1698403981'
    //     )
    //     .addService(window.googletag.pubads());
    //   window.googletag.enableServices();
    //   window.googletag.display('gpt-passback-rcpt.in.Banner0.1698403981');
    // });
    // window.googletag = window.googletag || {cmd: []};
    // window.googletag.cmd.push(function() {
    //   window.googletag.defineSlot('/22387492205,22578111928/rcpt.in.Banner0.1699248332', [[300,250],[320,280],"fluid"], 'gpt-passback-rcpt.in.Banner0.1699248332').addService(window.googletag.pubads());
    //   window.googletag.enableServices();
    //   window.googletag.display("gpt-passback-rcpt.in.Banner0.1699248332");
    //   });
    // Dynamically create and append the ad script
    // const script = document.createElement('script');
    // script.async = true;
    // script.id = 'AV63db57c0aaa1d91a15094794';
    // script.type = 'text/javascript';
    // script.src =
    //   'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=63db57c0aaa1d91a15094794&AV_PUBLISHERID=62380fd4d07fd72ecb430650';
    // Append the script to the document's body
    // document.body.appendChild(script);
  }, []);

  return (
    <div className="receipt-container">
      <Headermobile />
      {/* <div id="google_translate_element"></div> */}

      <div className="container">
        {/*
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 d-flex flex-column align-items-center justify-content-center my-ads-container">
          <p>Advertisement</p>

            <ins
              className="adsbygoogle"
              style={{
                display: "inline-block",
                width: "728px",
                height: "90px",
              }}
              data-ad-client="ca-pub-4469777092103047"
              data-ad-slot="8197804237"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
*/}
        {/* <div className='my-4' id="gpt-passback-BTF" style={{width:'100%',margin:'10px',textAlign:'center'}}> </div> */}
        <div className="card respcard mt-2 mb-2">
          <h2>
            <b>
              <span className="receipttext">Recharge Receipt</span>
            </b>
          </h2>
          <div className="card-body recepitrow">
            {rechargeData ? (
              <table className="table" ref={tableRef}>
                <tbody>
                  <tr>
                    <th>Mobile</th>
                    <th>Transaction </th>
                    <th>Amount paid</th>
                  </tr>
                  <tr>
                    <td>{rechargeData["Destination Number"]}</td>
                    <td>{rechargeData["Transaction ID"]}</td>
                    <td>{rechargeData["Recharge Value"]}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="row rechdeatils mt-2">
            {rechargeData && (
              <div className="rechdeatilscol1">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Recharge Type :</td>
                      <td>{rechargeData["Recharge Type"]}</td>
                    </tr>
                    <tr>
                      <td>Validity of the Plan :</td>
                      <td class="notranslate">
                        {" "}
                        &nbsp; {rechargeData["Validity"]} &nbsp;{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Amount Paid :</td>
                      <td>{rechargeData["Recharge Value"]}</td>
                    </tr>
                    <tr>
                      <td>Transaction Date :</td>
                      <td class="notranslate"> {rechargeData["Date"]} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="d-flex mt-3 mb-3 ml-1">
            <div className="specifwidth">
              <Link to="/Stvoffer">
                <button className="newbtn printbutton mt-2">STV Offers</button>
              </Link>
            </div>
            <div className="specifwidth">
              <Link to={`/Receiptdownload/${shortcode}`}>
                <button className="newbtn mt-2 dnbtn">
                  <i className="fa-solid fa-download" /> Receipt
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <ins class="adsbygoogle"
 
        {/* <div id="gpt-passback-rcpt.in.Banner0.1699248332" style={{width:'100%',margin:'10px',textAlign:'center'}}></div> */}
        {/* <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 my-3">
            <ins
              class="adsbygoogle"
              style={{
                display: "inline-block",
                width: "728px",
                height: "90px",
              }}              
              data-ad-client="ca-pub-4469777092103047"
              data-ad-slot="6522594635"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div> */}

        {/* <div className="row imagerow mt-3 mb-3 border-bottom border-top border-2  shadow-lg shadow-sm">
          
          <div className="col-lg col-md col-sm-12 my-3">
            <Link to="https://mobilemasala.com/movies/Tiger-3-box-office-collection-day-1-Salman-Khan-film-becomes-his-biggest-opener-earns-over-44-crore">
              <img src={MM2} alt="mm2" />
            </Link>
          </div>
        </div> */}
      </div>
      
      <div className="row imagerow mt-3 mb-3   border-1 shadow-lg shadow-sm">
        <h1 className="text-danger pe-2 border-1">Trending </h1>
        <div className="col-lg col-md-6 col-sm-12 my-2 p-3">
            <Link
              to="https://www.mobilemasala.com/film-gossip/Nick-Jonas-birthday-wish-for-Priyanka-Chopra-comes-with-kisses-and-romantic-pictures-Check-out-his-adorable-post-i281970"
              className="d-flex  flex-column p-3  border"
            >
              <div className="m-2">
                <img src={M1} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h6>
nick jonas' birthday wish for priyanka chopra comes with kisses and romantic pictures | check out his adorable post

                </h6>
                {/* <h6>
                Ram Charan hosted a Diwali party at his residence on Saturday, which was attended by the who's who of the Telugu film industry. Now, inside pictures from the Diwali party have surfaced on Instagram. In them, Ram Charan was seen with his RRR co-star Jr NTR, Mahesh Babu and Venkatesh.
                </h6> */}
              </div>
            </Link>
          </div>
          <div className="col-lg col-md-6 col-sm-12 my-2 p-3">
            <Link
              to="https://www.mobilemasala.com/film-gossip/Malaika-Arora-drops-pic-of-mystery-man-fuels-breakup-rumours-with-Arjun-Kapoor-i281956"
              className="d-flex  flex-column p-3  border"
            >
              <div className="m-2">
                <img src={M2} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h6>
malaika arora drops pic of mystery man, fuels breakup rumours with arjun kapoor

                </h6>
                {/* <h6>
                Anushka Sharma and Virat Kohli – the most popular celebrity couple on Instagram in India, are trending online today and for a lovely reason. Last evening, Virat Kohli picked up a rare wicket against Netherlands. Seeing this, Anushka Sharma – Kohli's wife who was present in the stadium – mimicked her husband’s reaction. This funny yet lovely visual has sparked hilarious social media reactions.
                </h6> */}
              </div>
            </Link>
          </div>
          {/*
          <div className="col-lg-12 col-md-12 col-sm-12 my-3 d-flex  flex-column align-items-center justify-content-center my-ads-container">
            <p>Advertisement</p>
            <ins
              class="adsbygoogle"
              style={{
                display: "inline-block",
                width: "728px",
                height: "90px",
              }}
              data-ad-client="ca-pub-4469777092103047"
              data-ad-slot="6522594635"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
*/}

          <div className="col-lg col-md-6 col-sm-12 my-2 p-3">
            <Link
              to="https://www.mobilemasala.com/fashion/Ranbir-Kapoor-wore-6-crore-Patek-Philippe-watch-adorned-with-81-emeralds-to-Anant-Ambani-Radhika-Merchants-wedding-i281950"
              className="d-flex  flex-column p-3  border"
            >
              <div className="m-2">
                <img src={M3} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h6>
ranbir kapoor wore ₹6 crore patek philippe watch adorned with 81 emeralds to anant ambani, radhika merchant's wedding

                      </h6>
             
              </div>
            </Link>
          </div>
      </div>
{/*
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 my-3 d-flex   flex-column align-items-center justify-content-center my-ads-container">
        <p>Advertisement</p>

          <ins
            class="adsbygoogle"
            style={{ display: "inline-block", width: "728px", height: "90px" }}
            data-ad-client="ca-pub-4469777092103047"
            data-ad-slot="9723473047"
            data-ad-format="auto"
            data-full-width-responsive="true"
          >
            {" "}
          </ins>
        </div>
      </div>
*/}

      <div className="row imagerow mt-3 mb-3 border-bottom border-top border-2  shadow-lg shadow-sm  d-flex justify-content-center">
        <h1 className="text-dark">Horoscope</h1>
        <div className="col-lg-6 col-md-6 col-sm-12  p-3">
          <Link
            to="https://www.mobilemasala.com/horoscope/Leo-s283"
            className="d-flex  flex-column p-3  border align-items-center justify-content-center"
          >
            <div className="m-2">
              <img src={HH} alt="mm1" className="img-fluid" />
            </div>
            <div className="m-2">
            <h1>Leo</h1>

              <h6>
              This month, Leos will experience a rejuvenation in personal and professional areas. Relationships flourish, career prospects improve, and financial stability is within reach. Health requires mindful attention.
              
          </h6>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Receipt;
