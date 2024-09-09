import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Notificationpop = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Notificationpop component rendered.");

    // Use URLSearchParams to extract query parameters
    const params = new URLSearchParams(search);
    const paramValue = params.get("paramt");

    console.log("paramValue:", paramValue);

    if (paramValue) {
      // Decode the URL parameter
      const decodedUrl = decodeURIComponent(paramValue);

      console.log("decodedUrl:", decodedUrl);

      // Redirect to another website
      window.location.href = decodedUrl;
    }
  }, [search, navigate]);

  return null;
};

export default Notificationpop;
