import React, { useState } from 'react'
import Example from "./Example"
import Card from "./Card"
import "./Banner.css"
import {Button} from "@material-ui/core"
import SearchDates from './SearchDates'
import slider4 from "../images/slider4.jpg"
import slider3 from "../images/slider3.jpg"
import slider1 from "../images/slider1.jpg"
import slider2 from "../images/slider2.jpg"
import slider5 from "../images/slider5.jpg"
import slider8 from "../images/slider8.jpg"



function Banner() {
  const [search,showSearch] = useState(false)
    return (
 <div>
   <Example />
   <div className="searchDate">
     {search && <SearchDates/>}
     <Button onClick = {()=>showSearch(!search)} className="bannerButton"  size="large">
       {search ? "hide" : "Book your Dream" }
     </Button>
   </div>

   <div className="card-align">

   <Card 
   src= "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
   title="Switzerland" />
      <Card 
   src="https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
   title="Switzerland" />
      <Card 
   src="https://images.unsplash.com/photo-1508608725026-673848eb006c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
   title="Switzerland" />
   </div>
   <div className="card-align1">
   <Card 
   src="https://images.unsplash.com/photo-1591804736695-0e347cf2349f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
   title="Switzerland" />
      <Card 
   src="https://images.unsplash.com/photo-1528105954683-809221c66f5c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTg3fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
   title="Switzerland" />
      <Card 
   src="https://images.unsplash.com/photo-1498315025595-6d9a0b9b79a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
   title="Switzerland" />
   </div>
   </div>


    )
}

export default Banner

