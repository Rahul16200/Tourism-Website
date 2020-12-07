import { Height } from '@material-ui/icons'
import React from 'react'
import "./Card.css"

function Card({src,title}) {
    return (

        <div className="card-top"style={{backgroundImage:`url(${src} )`,
        width:"400px",
        height:"300px",
        padding:"1rem",
        filter: "brightness(.7)",
        marginLeft:2,
        marginRight:2,
       
        
        

    }}>


   

     
        <div>
        <h1 className="card-head" >{title}</h1>
        </div>
       
</div>

     
     
     
    )
}

export default Card
