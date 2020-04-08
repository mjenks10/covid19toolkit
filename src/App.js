import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import *  as bs from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './header'
import Campaign from './campaigns'
import Prediction from './prediction'
import Home from './home'



export default function App() {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column" style={{color:"black"}}>
        {/* Header Navigation*/}
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col md="12">
             <Header />
          </bs.Col>
        </bs.Row>


          
          {/* MidRow*/}
      <bs.Row noGutters className="flex-grow-1">
          {/* Main Page Content*/}
          <bs.Col className="MainSection" md="12">
            <Switch>
              <Route path="/campaigns">
                   <Campaign /> 
              </Route>
              <Route path="/prediction">
                 <Prediction /> 
              </Route>
              <Route path="/">
                { <Home /> }
              </Route>
            </Switch>
          </bs.Col>
          
        </bs.Row>
  
  {/* Footer*/}
        <bs.Row>
          {/* <Footer /> */}
          Footer
        </bs.Row>
      </bs.Container>
    </Router>
  );
}