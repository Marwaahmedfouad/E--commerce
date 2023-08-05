import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
export default function Navbar() {
    return (
        <>
            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        </nav> */}

            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="container">
                    <img src={logo} alt='' width='100'></img>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Brands</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item d-flex align-items-center">
                                <i className='fab mx-2 fa-facebook'></i>
                                <i className='fab mx-2 fa-twitter'></i>
                                <i className='fab mx-2 fa-youtube'></i>
                                <i className='fab mx-2 fa-tiktook'></i>
                                <i className='fab mx-2 fa-linkedin'></i>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Logout</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
