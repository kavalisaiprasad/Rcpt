import React from 'react'
import M1 from "../images/M1.webp";
import M2 from "../images/M2.webp";
import M3 from "../images/M3.webp";
import M4 from "../images/M4.webp";
import MM1 from "../images/MM1.webp";
import MM2 from "../images/MM2.webp";
import { Link } from "react-router-dom";
import HH from "../images/RCPT Horoscope banner.webp";


const Card = () => {
  return (
    <>
    <div className="row imagerow  mb-3 mt-3 shadow-lg shadow-sm border-2">
          <h1 className="text-danger pe-2 border-1">Trending </h1>
          <div className="col-lg col-md-6 col-sm-12 my-2 p-3">
            <Link
              to="https://mobilemasala.com/movie-review/Sam-Bahadur-review---Salute-to-Vicky-Kaushal-but-Meghna-Gulzar-makes-us-run-through-the-index-of-this-biopic"
              className="d-flex  flex-column p-3  border"
            >
              <div className="m-2">
                <img src={M1} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h6>
               Sam Bahadur review - Salute to Vicky Kaushal but Meghna Gulzar makes us run through the index of this biopic{" "}
                </h6>
                {/* <h6>
                Ram Charan hosted a Diwali party at his residence on Saturday, which was attended by the who's who of the Telugu film industry. Now, inside pictures from the Diwali party have surfaced on Instagram. In them, Ram Charan was seen with his RRR co-star Jr NTR, Mahesh Babu and Venkatesh.
                </h6> */}
              </div>
            </Link>
          </div>
          <div className="col-lg col-md-6 col-sm-12 my-2 p-3">
            <Link
              to="https://mobilemasala.com/movie-review/Animal-celeb-Review-Alia-Bhatt-lauds-husband-Ranbir-Kapoors-film-reacts-in-ONE-word-after-Animal-special-screening-WATCH-video"
              className="d-flex  flex-column p-3  border"
            >
              <div className="m-2">
                <img src={M2} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h6>
                Animal celeb Review – Alia Bhatt lauds husband Ranbir Kapoor’s film, reacts in ONE word after Animal special screening | WATCH video
                </h6>
                {/* <h6>
                Anushka Sharma and Virat Kohli – the most popular celebrity couple on Instagram in India, are trending online today and for a lovely reason. Last evening, Virat Kohli picked up a rare wicket against Netherlands. Seeing this, Anushka Sharma – Kohli's wife who was present in the stadium – mimicked her husband’s reaction. This funny yet lovely visual has sparked hilarious social media reactions.
                </h6> */}
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
              to="https://mobilemasala.com/film-gossip/Lowes-Beerus-Rashmika-Mandana-Vijay-Deverakonda-Wear-Against-Wear-Pics-Go-Viral"
              className="d-flex  flex-column p-3  border"
            >
              <div className="m-2">
                <img src={M3} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h6>
                Love birds Rashmika Mandanna-Vijay Deverakonda wear same outfit, pics go viral
                </h6>
                {/* <h6>
                Anushka Sharma and Virat Kohli – the most popular celebrity couple on Instagram in India, are trending online today and for a lovely reason. Last evening, Virat Kohli picked up a rare wicket against Netherlands. Seeing this, Anushka Sharma – Kohli's wife who was present in the stadium – mimicked her husband’s reaction. This funny yet lovely visual has sparked hilarious social media reactions.
                </h6> */}
              </div>
            </Link>
          </div>
        </div>

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
        </div>

        <div className="row imagerow mt-3 mb-3 shadow-lg shadow-sm border-2">
          <h1 className="text-dark">Horoscope</h1>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3 p-3 ">
            <Link
              to="https://mobilemasala.com/horoscope/Scorpio"
              className="d-flex  flex-column p-3  border align-items-center justify-content-center"
            >
              <div className="m-2">
                <img src={HH} alt="mm1" className="img-fluid" />
              </div>
              <div className="m-2">
                <h1>Scorpio</h1>
                <h6>


Scorpios, the astrological seers are pointing towards an eventful December for you! The constellation alignments will force you into a reflective state and make you examine your current life situation more intimately than you have in the past months. You will spend a considerable part of this month observing your emotional reactions, understanding what you truly yearn for, and working towards those yearnings.
                </h6>
              </div>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Card