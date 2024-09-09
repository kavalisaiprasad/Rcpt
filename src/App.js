
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plans from "./Mobile/Plans";
import Plan from "./Mobile/Plan";

import Receipt from "./Mobile/Receipt";
import Homemobile from "./Mobile/Homemobile";
import Home from "./Component/home/Home";
import Stvoffer from "./Mobile/Stvoffer";
import ReceiptComponent from "./Mobile/ReceiptComponent";
import Receiptdownload from "./Mobile/Receiptdownload";
import { FirebaseToken } from "./Notification/FirebaseToken";
import { getToken } from "firebase/messaging";
import Dynamicpage from "./Mobile/Dynamicpage";
import NotificationForm from "./NotificationForm";
import { baseurl } from "./Component/Baseurl";
import Notificationpop from "./Notificationpop";
import "./App.css";

function App() {
 
  useEffect(() => {
    
    const tokenSent = localStorage.getItem('tokenSent'); // Check if the token has been sent

    if (!tokenSent) {
      requestPermission();
    }
    
  }, []);

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(FirebaseToken);
      sendTokenToApi(token);
      console.log( token);
      localStorage.setItem('tokenSent', 'true');
    } else if (permission === "denied") {
      // alert("You denied the notification");
    }
  }

  async function sendTokenToApi(token) {
    try {
      //  const decodedToken = jwt.decode(token, { complete: true });

       const base64Token = btoa(JSON.stringify(token));
      //  console.log( 'sfgg' + base64Token);
      //  const vase=atob(base64Token);
      //  console.log(vase);
      console.log(base64Token);
      const response = await fetch(`${baseurl}/rcpt-api/rcptinsertToken?token=${base64Token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        console.log("Token sent to the API successfully.");
      } else {
        console.error("Failed to send token to the API.");
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homemobile />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Plan" element={<Plan />} />

        <Route path="/Notification" element={<NotificationForm />} />
   
        <Route path="/notificationpop" element={<Notificationpop />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Stvoffer" element={<Stvoffer />} />
        <Route path="/ReceiptComponent" element={<ReceiptComponent />} />
        <Route path="/Receiptdownload/:shortcode" element={<Receiptdownload />} />
        <Route path="/Receipt/:shortcode" element={<Receipt />} />
        <Route path="/:shortcode" element={<Dynamicpage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

