import React from "react";
import *  as bs from "react-bootstrap"
import {Link} from "react-router-dom"
import './App.scss'


function Header(prop){
    return(
        <div>
        <bs.Navbar className = "HeaderStyle" >
        <i className="fas fa-notes-medical fa-3x"></i>
            <bs.Navbar.Brand style={{color:"white"}} className="PageTitle" href="/" >
                Covid-19 Toolkit</bs.Navbar.Brand>
            <bs.Nav className="mr-auto">
                    <Link style={{color:"white"}} to="/campaigns" className="nav-link">Covid-19 Fundraiser Quality</Link>
                    <Link style={{color:"white"}} to="/prediction" className="nav-link">Donation Predictor</Link>
            </bs.Nav>
        </bs.Navbar>
</div>
    )
}
export default Header