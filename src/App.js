import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Listing from './components/Listing'

// import './Style/App.css';

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path = "/" render={Home}/>
          {/* <Route exact path = "/form" render={(props) => <Form {...props}/>}/> */}
          <Route exact path = "/listing" render={(props) => <Listing {...props}/>}/>
          {/* <Route exact path = "/listing" render={<Listing />}/> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App