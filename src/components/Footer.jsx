import React from 'react'
import '../styles/Footer.css'
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
function Footer() {
    return (
        <>
            <div className="footer-container">


                <div className='footer-top'>
                    <div className="footer-about-us">
                        <h2 style={{ color: 'var(--primary-color)'}}>About Us</h2>
                        <p>
                            Lörem ipsum diren vofangar emedan tevinde inklusive göbement i at om miligt och kvaside och previs dialiga för väkör, ultrav. Tel heteropp suhebel min poska pårade så betoren men netävis sapåns. Tilig exosade.
                            Lörem ipsum trett gåsamma är änas. Perugande syng benör deheten semikarade sev ör. Rer kaling mimibel.
                        </p>
                    </div>
                    <div className="footer-useful-links">
                        <h2 style={{ color: 'var(--primary-color)' }}>Useful Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Products</li>
                            <li>Services</li>
                            <li>COntact Us</li>
                        </ul>
                    </div>
                    <div className="footer-connect-with-us">
                        <h2 style={{ color: 'var(--primary-color)'}}>Connect With Us</h2>
                        <div>
                            <ul>
                                <li>
                                    <BiSolidMessageRounded/>
                                    Contact Us
                                </li>
                                <li>
                                <IoMdMail />
                                    info@yourcompany.example.com
                                </li>
                                <li>
                                    <IoCall />
                                    +1(450) 999-1111
                                </li>
                            </ul>

                            <div className="logos">

                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-bottom-content'>
                        Made With 💗 By Pankaj!
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer