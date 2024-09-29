import React from 'react'
import '../styles/Navbar.css'
import LEARNLOGO from '../images/LEARNLOGO.png'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <img src={LEARNLOGO} />
                </div>
                <div className='links-container'>
                    <ul>
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/carrier">Carrier</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <button>Login</button>
                        <button>Sign Up</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar