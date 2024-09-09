import React from 'react'
import download from "../images/download.png"
import  "./header.css";

const Header = () => {
  return (
    <div>
    <div className="header">
   <div></div>
    <img className="logo" src={download} />
    
    </div>
    </div>
  )
}

export default Header