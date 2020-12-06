import React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Example from "./Example"
import Video from "./Video"
import SearchDates from "./SearchDates"
import Details from "./Details"
import "./App.css"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
<Navbar />

<Banner />

<Video />
<Details />
<Footer/>

    </div>
  );
}

export default App;
