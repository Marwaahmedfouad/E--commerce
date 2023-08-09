import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (<>
  <div className='fixed-bottom'>footer</div>
  {/* <div className='fixed-bottom bg-black text-light'> */}
  {/* <footer className=" fixed-bottom footer bg-dark text-white w-80 py-2"> */}
    {/* <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p>Email: marwa.fouad102@gmail.com</p>
          <p>Phone: 01158408272</p>
          <p>Address: 123 Street, Cairo, Egypt</p>
        </div>
        <div className="col-md-4 ">
          <ul className="footericons">
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} footericons to="#">About Us</Link></li>
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} to="#">Services</Link></li>
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} to="#">Products</Link></li>
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} to="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="social-icons">
            <a href="https://www.facebook.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-facebook fa-1x"></i></a>
            <a href="https://www.twitter.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-twitter fa-1x"></i></a>
            <a href="https://www.instagram.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-instagram fa-1x"></i></a>
            <a href="https://www.tiktok.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-tiktok fa-1x"></i></a>
  
          </div>
        </div>
      </div>
    </div> */}
  {/* </footer> */}
  {/* </div> */}
  </>
  )
}
