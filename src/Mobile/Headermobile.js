import React from 'react'
import App  from '../App.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.webp'
function Headermobile() {
  return (
    <>
      <div className="header">
   
      <Link to='/'>
        <img className="logo" src={logo} alt='BSNLLOGO' />
      </Link>
    </div>
    </>
  )
}

export default Headermobile
