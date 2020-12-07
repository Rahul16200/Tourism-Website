import React from 'react'
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import HotelIcon from '@material-ui/icons/Hotel';
import PublicIcon from '@material-ui/icons/Public';
import "./Details.css"
function Details() {

    
    
    return (
        <div className="details">
        <div className="contentOne">
        <div>
            <DirectionsTransitIcon className="trainIcon"/>
            <h1 className="head1">Comfortable Journey</h1>
            <p className="para1">A wonderful serenity has taken to the possession of my entire soul.</p>
        </div>
        
        

        </div>
        <div className="contentOne">
        <div>
            <HotelIcon  className="trainIcon"/>
            <h1 className="head1"> Luxuries Hotel</h1>
            <p className="para1">A wonderful serenity has taken to the possession of my entire soul.</p>
        </div>
        
        

        </div>
        <div className="contentOne">
        <div>
            <PublicIcon  className="trainIcon"/>
            <h1 className="head1">Travel Guide</h1>
            <p className="para1">A wonderful serenity has taken to the possession of my entire soul.</p>
        </div>
        
        

        </div>
            
        </div>
    )
}

export default Details
