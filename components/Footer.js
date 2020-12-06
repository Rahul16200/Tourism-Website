import React from 'react'
import Logo from "../images/logo.png"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./Footer.css"

function Footer() {
    return (
        <div>
        <div className="footerTop">
        <div className="footer1">
        <div className="content">
            <img src={Logo} alt=""/>
            <p className="address">5th flora, 700/D kings road, green
lane New York-1782
+10 367 826 2567
contact@carpenter.com</p>
        </div>
        
        </div>
        <div className="footer2">
            <p className="head1"> Company</p>
            <div className="about">
            <p>Pricing</p>
            <p>About</p>
            <p> Gallery</p>
            <p>Contact</p>
            </div>
        </div>
        <div className="footer3">
        <div className="icons">
        <FacebookIcon className="footerIcon"/>
        <TwitterIcon className="footerIcon"/>
        <InstagramIcon className="footerIcon"/>
        <PinterestIcon className="footerIcon"/>
        <YouTubeIcon className="footerIcon"/>




        </div>
        
        </div>
       
       
        </div>
        <div className="bottom">
        <div className="border-bottom"></div>
        <p> Copyright ©2020 All rights reserved</p>

        </div>
        </div>
    )
}

export default Footer
