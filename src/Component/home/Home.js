import React, { useState,useEffect } from 'react'
import "./home.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Home = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [data, setData] = useState("");


  const Receipt = (e) => {

  }
 




  return (
    <div>
      <Header />
        <div className='container'>
        <div className="maincontain ">
          <div className='forcenter'>
          <b>
          <font className="maintext" >
          Recharge Receipt
          </font> </b>
          </div>
  
        <form>
          <input type="text" className='mobileinput' placeholder='Enter Mobile Number' onChange={(e) => setMobileNumber(e.target.value)} /><br></br>
          <button className="btn submitbtn m-2" onClick={Receipt}>Submit</button>
        </form>
        <div className='row btnsrow'>
          <div className='col-4'>
          <Link to="/Plans">
            <button className='btn showbtn  mx-3 mt-2'  >Show Available Plans</button>
            </Link>
            </div>
          <div className='col-4'>
          <Link to="/Plans">
  
            <button className='btn printrep mx-3 mt-2'>Print Receipt</button>
            </Link>
          </div>
          <div className='col-4'>
          <Link to="/Plans">
  
            <button className='btn  mx-2 mt-2'>View Bill History</button>
          </Link>
            </div>
        </div>
        </div>
        <div className='row'>
        <Link to="">
        <button className='stv'><b><font>Latest STV Offers</font></b></button>
        </Link>
        </div>
     <div className='row imagerow mt-2 mb-2'>
     <div className='col-4'>
     <img src='https://rcpt.in/images/RCPT.jpg' />
     </div>
     <div className='col-4'>
     <img src='https://rcpt.in/images/MM.jpg' />
     </div>
     <div className='col-4'>
     </div>

     </div>
        </div>
      <Footer />
    </div>
  )
}

export default Home