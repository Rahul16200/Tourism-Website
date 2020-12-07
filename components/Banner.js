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

