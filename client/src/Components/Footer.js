import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
    <div className="footer">
        <div className="footer-left">
            <p className='footer-left-copyright'>© 2022 BlueCover, Inc.</p>
            <p className="footer-left-text">Privacy</p>
            <p className="footer-left-text">Terms</p>
            <p className="footer-left-text">Sitemap</p>
        </div>
        <div className="footer-right">
            <i class="fa-solid fa-globe"></i>
            <p class="footer-right-text">English</p>
            <p class="footer-right-text">(US)</p>
            <p class="footer-right-text">$</p>
            <p class="footer-right-text">USD</p>
            <a href="https://www.youtube.com/watch?v=kLUmDhD5QA8" class="footer-right-a"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://mobile.twitter.com/GaryVee_Quotes"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/garyvee/?hl=en"><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>)
}

export default Footer;