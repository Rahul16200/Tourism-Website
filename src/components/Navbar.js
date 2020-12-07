import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import travelLogo from "../images/unnamed.png"
import Logo from "../images/logo.png"

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          handleShow(true);
          console.log(show)
        } else {
          handleShow(false);
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);
    return (
        <div className={`header ${show && "navScroll"}`}>
<div className="header-logo">
<img src={Logo} alt="name"></img>


</div>

<div >
<ul className="header-pins">
    <li> Home</li>
    <li>
        Destinations
    </li> 
    <li>Contact Us</li>
</ul>

</div>


            
        </div>
    )
}

export default Navbar
