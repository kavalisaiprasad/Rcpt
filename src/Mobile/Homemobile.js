import React, { useEffect, useState } from "react";
import Headermobile from "./Headermobile";
import Footer from "./Footer";
import { Link,useNavigate} from "react-router-dom";
import Modal from "react-modal";
import M1 from "../images/M1.webp";
import M2 from "../images/M2.webp";
import M3 from "../images/M3.webp";

import logo from "../images/game.png";

import MM1 from "../images/MM1.webp";
import MM2 from "../images/MM2.webp";
import HH from "../images/Horoscope.webp";
import { baseurl } from "../Component/Baseurl";
// import Card from "./Card";

function Homemobile() {
  const [mobileNumber, setMobileNumber] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  // countapi

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(`${baseurl}/rcpt-api/homepage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Adjust the content type as needed
        },
        // You can send an empty object in the request body or omit it if not needed.
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData); // "hi" should be logged to the console
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  useEffect(() => {
    fetchDataFromApi();
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleGenerateOTP = () => {
    // You would typically make an API request to your backend here to send the OTP
    // For this example, we'll just set otpSent to true and open the modal.
    setOtpSent(true);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const verifyOtp = () => {
    // You would typically make an API request to your backend to verify the OTP here
    // For this example, we'll simulate OTP verification by checking if the OTP is '1234'.
    if (otp === "1234") {
      setOtpVerified(true);
      closeModal();
    } else {
      // Handle OTP verification failure, show an error message, etc.
      alert("Invalid OTP. Please try again.");
    }
  };
const navigate=useNavigate();


  return (
    <>
      <Headermobile />
      <div className="container-fluid">
      {/*  <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 border-1  d-flex  flex-column align-items-center justify-content-center   my-ads-container">
            <p>Advertisement</p>
            <ins
              className="adsbygoogle"
              style={{
                display: "inline-block",
                width: "728px",
                height: "90px",
              }}
              data-ad-client="ca-pub-4469777092103047"
              data-ad-slot="7472552521"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
            </div> */}
        <div className="row">
          <div className="maincontentbox print-content">
            <div className="forcenter forgap">
              <b>
                <font className="mobilemaintext ">Recharge Receipt</font>{" "}
              </b>
            </div>

            <form>
              <div className="row fromrow">
                <input
                  type="text"
                  className="col-8 mainput"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                />
                <button
                  className="btns submitbtns  col-4"
                  onClick={handleGenerateOTP}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="d-flex mt-3 mb-3 ml-1">
              <div className="specifwidth ">
                <Link to="/Plans">
                  <button style={{ marginLeft: "0px" }} className="newbtn mt-2">
                    Plans
                  </button>
                </Link>
              </div>
              <div className="specifwidth">
                <Link to="/Stvoffer">
                  <button className="newbtn printbutton mt-2">
                    {" "}
                    STV Offers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      

        {/* Conditionally Render QuizComponent */}
       
        {/* <div className="container">
          <div className="row imagerow  mb-3 shadow-lg shadow-sm border-2">
            <div className="col-lg col-md col-sm  my-2">
              <Link to="https://mobilemasala.com/movies/Tiger-3-box-office-collection-day-1-Salman-Khan-film-becomes-his-biggest-opener-earns-over-44-crore">
                <img src={MM2} alt="mm2" />
              </Link>
            </div>
          </div>
        </div> */}
 <div className="row imagerow  mb-3 mt-3 shadow-lg shadow-sm border-2">
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
              </div>
            </Link>
          </div>
          {/* <div className="col-12 d-flex flex-column justify-content-center align-items-center my-ads-container ">
          <p>Advertisement</p>

            <ins
              class="adsbygoogle"
              style={{display:"inline-block",width:"350px",height:"90px"}}
              data-ad-client="ca-pub-4469777092103047"
              data-ad-slot="9715572485"
            ></ins>
          </div> */}
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
          <div className="col-lg-12 col-sm-12 col-md-12 d-flex flex-column  align-items-center justify-content-center my-ads-container">
                      <p>Advertisement</p>

            <ins
              class="adsbygoogle"
              style={{
                display: "inline-block",
                width: "728px",
                height: "90px",
              }}
              data-ad-client="ca-pub-4469777092103047"
              data-ad-slot="9524000798"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
            </div> */}

        <div className="row imagerow mt-3 mb-3 shadow-lg shadow-sm border-2 d-flex justify-content-center">
          <h1 className="text-dark">Horoscope</h1>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3 p-3 ">
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


                This month, Leos will experience a rejuvenation in personal and professional areas. Relationships flourish, career prospects improve, and financial stability is within reach. Health requires mindful attention.                      </h6>   
                      </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="OTP Modal"
      >
        <h2>Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
        <button onClick={verifyOtp}>Verify OTP</button>
        {otpVerified && <p>OTP verified successfully!</p>}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Homemobile;
