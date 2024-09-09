import React  from 'react'
import {useEffect} from "react"



const Footer = () => {

    // useEffect(() => {
    //     window.googletag = window.googletag || {cmd: []};
    //     window.googletag.cmd.push(function() {
    //     window.googletag.defineSlot('/22731072168,22578111928/rcpt.in.Banner0.1671613869', [[300,50],[300,100],[320,50],[320,100]], 'gpt-passback-Sticky').addService(window.googletag.pubads());
    //     window.googletag.enableServices();
    //     window.googletag.pubads().set('page_url', 'rcpt.in');
    //     window.googletag.display('gpt-passback-Sticky');
    //     window.googletag.pubads().addEventListener('slotOnload', function(event) {
    //     var slotId = event.slot.getSlotElementId();
    //     if(slotId=="gpt-passback-Sticky"){
    //     document.getElementById("sticky").style.visibility='visible';
    //     document.getElementById("ad_close").onclick = function(){
    //         document.getElementById("sticky").remove();
    //     }
    //     }
    //     });
    //     });
    
    
    // }, []);
    return (
        <>
        {/* <div
  id="sticky"
  style={{
    position: "fixed",
    right: 0,
    bottom: 0,
    margin: "0 auto",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderTop: "2px solid rgba(225, 225, 225, 0.8)",
    visibility: "hidden",
    zIndex: 99999999
  }}
>
  <button
    id="ad_close"
    style={{
      color: "#000",
      backgroundColor: "hsla(0,0%,100%,.8)",
      border: "hsla(0,0%,100%,.8)",
      position: "absolute",
      left: 0,
      top: "-45px"
    }}
  >
    x
  </button>
  <div
    id="gpt-passback-Sticky"
    style={{
      minWidth: 300,
      minHeight: 50,
      textAlign: "center",
      display: "flex",
      justifyContent: "center"
    }}
  ></div>
</div> */}
            <footer className="footer  bg-dark">
              <div className='row'>
              <div className='col-8'>
                    <a  className="foot" href="#"><span>About us  |</span></a>
                    <a  className="foot" href="#"><span>  Privacy Policy | </span></a>
                    <a  className="foot" href="#"><span>Terms & Conditions</span></a>
                </div>
                <div className='col-4'>
                <h6 className="copy">2023 &copy; Rights Reserved. PYRO</h6> 
                </div>


               </div>
            </footer>
        </>
    )
}

export default Footer