import React from "react"
import *  as bs from "react-bootstrap"
import {Link} from "react-router-dom"

function Home(prop){
    return(
<div style={{textAlign:"center"}}>
    <bs.Container id="MainJumbo" style={{ width:"500px", height:"500px"}}>
        <div id="MainJumboText">
            <h1>Welcome to the Covid-19 Toolkit</h1>
            <div><Link className="btn btn-primary" to="/campaigns">Covid-19 Campaign Details</Link></div>
            <div style={{paddingTop:"10px"}}><Link className="btn btn-primary" to="/prediction">Donation Prediction Calcualtor</Link></div>
        </div>
        
    </bs.Container>
</div>

    )
}
export default Home

