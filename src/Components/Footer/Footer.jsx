import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (<>
  
  {/* <div className='fixed-bottom bg-black text-light'> */}
  <footer className="footer bg-dark text-white w-80">
    <div className="container p-3">
      <div className="row">
        <div className="col-md-4">
          {/* <h3>Contact Us</h3> */}
          <p>Email: marwa.fouad102@gmail.com</p>
          <p>Phone: 01158408272</p>
          <p>Address: 123 Street, Cairo, Egypt</p>
        </div>
        <div className="col-md-4 ">
           {/* <h3>Useful Links</h3> */}
          <ul className="footericons">
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} footericons to="#">About Us</Link></li>
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} to="#">Services</Link></li>
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} to="#">Products</Link></li>
            <li><Link style={{textDecoration: 'none', color:'aliceblue'}} to="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          {/* <h3>Follow Us</h3> */}
          <div className="social-icons">
            <a href="https://www.facebook.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.twitter.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.tiktok.com/" style={{color:'aliceblue'}} className="m-1"><i className="fab fa-tiktok fa-2x"></i></a>
  
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* </div> */}
  </>
  )
}
