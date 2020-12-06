import React, { useState } from 'react'
import Example from "./Example"
import Card from "./Card"
import "./Banner.css"
import {Button} from "@material-ui/core"
import SearchDates from './SearchDates'


function Banner() {
  const [search,showSearch] = useState(false)
    return (
 <div>
   <Example />
   <div className="searchDate">
     {search && <SearchDates/>}
     <Button onClick = {()=>showSearch(!search)} className="bannerButton" variant='outlined'>
       {search ? "hide" : "Book your Dream" }
     </Button>
   </div>

   <div className="card-align">

   <Card 
   src="https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/old-town-of-basel-with-munster-cathedral-switzerland.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
   title="Switzerland" />
      <Card 
   src="https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/old-town-of-basel-with-munster-cathedral-switzerland.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
   title="Switzerland" />
      <Card 
   src="https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/old-town-of-basel-with-munster-cathedral-switzerland.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
   title="Switzerland" />
   </div>
   <div className="card-align1">
   <Card 
   src="https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/old-town-of-basel-with-munster-cathedral-switzerland.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
   title="Switzerland" />
      <Card 
   src="https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/old-town-of-basel-with-munster-cathedral-switzerland.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
   title="Switzerland" />
      <Card 
   src="https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/old-town-of-basel-with-munster-cathedral-switzerland.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
   title="Switzerland" />
   </div>
   </div>


    )
}

export default Banner

        {/* <Carousel className="banner-carousel">
  <Carousel.Item className="banner-items">
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

{/* <Slider>
<div>
<img
       
       src={banner1}
       alt="name"
     />
     <h className="one">hello</h>
</div>
     
      <img
    
        src={banner2}
        alt="name"
      />
       
      <img
    
        src={banner3}
        alt="name"
      />
    </Slider> */}