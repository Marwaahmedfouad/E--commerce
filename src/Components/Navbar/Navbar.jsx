import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link } from 'react-router-dom'





export default function Navbar() {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to={""}>Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to={'home'}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'About'}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'Gallary'}>Gallary</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'Products'}>Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'Contacts'}>Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  */}

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                <Link className="nav-link" to="/"><img src={logo} alt='' width='100' /></Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="carts">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="brands">Brands</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item d-flex align-items-center">
                            {/* <Link className="nav-link" to="https://www.facebook.com/"><i className='fab mx-2 fa-facebook'></i></Link> */}
                                <i className='fab mx-2 fa-facebook'></i>
                                <i className='fab mx-2 fa-twitter'></i>
                                <i className='fab mx-2 fa-youtube'></i>
                                <i className='fab mx-2 fa-tiktok'></i>
                                <i className='fab mx-2 fa-linkedin'></i>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="logout">Logout</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
