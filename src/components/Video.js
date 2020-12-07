

 import React,{useState} from 'react'

 import movieTrailer from "movie-trailer"
 import Youtube from 'react-youtube';
 import "./Video.css"
 import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
 import slider6 from "../images/slider6.jpg"
 
 function Video() {
     const vd = "https://www.youtube.com/watch?v=SMKPKGW083c"

    const [trailer,setTrailer] = useState("")
    const [press,setPress] =useState(false)
    const handlePress = ()=>{
        setPress(!press)
    }

    const handleClick = ()=>{
        if(trailer){
            setTrailer("")
        }
        else{
            movieTrailer("https://www.youtube.com/watch?v=SMKPKGW083c")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailer(urlParams.get("v"));
              })
              .catch((error) => console.log(error));
        }
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
    
    
    {press && <Youtube className="youtubeVideo" videoId="SMKPKGW083c" opts={opts} />} 
   
      </div>
      </div>
    )
  }
 
 
    

 
 export default Video
 


