import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import slider9 from "../images/slider9.jpg"
import slider3 from "../images/slider3.jpg"
import slider6 from "../images/slider6.jpg"
import slider11 from "../images/banner1.jpeg"
import {Button} from "@material-ui/core"

import "./Example.css"




const content = [{
  title:"Switzerland",
  description:"Awesome Country to Explore",
  image:slider9,
  button:"explore now"
},
{
  title:"Switzerland",
  description:"Awesome Country to Explore",
  image:slider6,
  button:"explore now"
},
{
  title:"Switzerland",
  description:"Awesome Country to Explore",
  image:slider11,
  button:"explore now"
},





]
function Example() {
  return (
    <Slider autoplay={1000} 
    className="slider">
    {content.map((item,index)=>(
      <div key={index}
      className="slider-content"
      style={{background: `url('${item.image}') no-repeat center center`,
  


     filter:"brightness(.7)",

     
     
  }}>
      <div className="slider-details">
  
        <h1 className="title">{item.title}</h1>
        <p className="description">{item.description}</p>
        <div className="button" >
        <Button className="exploreButton"  variant="contained" size="large" style={{color:"white",
        backgroundColor:"#FF4A52",
        marginTop:"1.2rem"
        }} >{item.button}</Button>
        </div>
             </div>

      </div>

    ))}
          </Slider> 
    
   

    // <div class="content">
    // <div className="section" >
    // <h>Section 1</h>
    // </div>


    // <div className="section" >
    // <h>Section 1</h>
    // </div>

    // </div>

  );
}

export default Example;
