

 import React,{useState} from 'react'

 import Youtube from 'react-youtube';
 import "./Video.css"
 import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
 
 
 function Video() {



    const [press,setPress] =useState(false)
    const handlePress = ()=>{
        setPress(!press)
    }

    

    const opts = {
        height: '390',
        width: '1500',
        playerVars: {
            // https://www.youtube.com/watch?v=SMKPKGW083c
          autoplay: 1,
        },
   
      
    };
 
    return (
        <div className="video-size">
    <div className="thumbnail" onClick={handlePress}
>
<h className="videoHead"> Enjoy the Video</h>
    <PlayCircleOutlineIcon
    className="playIcon"
    fontSize="large"
    onClick={handlePress} />    
    
    
    {press && <Youtube className="youtubeVideo" videoId="W4Ou96H-cPc" opts={opts} />} 
   
      </div>
      </div>
    )
  }
 
 
    

 
 export default Video
 


