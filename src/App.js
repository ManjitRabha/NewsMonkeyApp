// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        {/* <Navbar />
          <News pageSize={9} country="in" category="science" /> */}
        {/* <Switch>
            <Route path="/"> key="general" <News pageSize={9} country="in" category="general" />   </Route>
            <Route path="/business"> key="business" <News pageSize={9} country="in" category="business" />   </Route>
            <Route path="/entertainment"> key="entertainment" <News pageSize={9} country="in" category="entertainment" />   </Route>
            <Route path="/general"> key="general" <News pageSize={9} country="in" category="general" />   </Route>
            <Route path="/health"> key="health" <News pageSize={9} country="in" category="health" />   </Route>
            <Route path="/science"> key="science" <News pageSize={9} country="in" category="science" />   </Route>
            <Route path="/sports"> key="sports" <News pageSize={9} country="in" category="sports" />   </Route>
            <Route path="/technology"> key="technology" <News pageSize={9} country="in" category="technology" />   </Route>
          </Switch>
        </Router> */}
        <Router>
          <Navbar />
          <Routes><Route exact path="/" element={<News pageSize={9} country="in" category="general" />} /></Routes>
          <Routes> <Route exact path='/business' element={<News pageSize={9} country="in" category="general" />} />   </Routes>
          <Routes> <Route exact path='/entertainment' element={<News pageSize={9} country="in" category="entertainment" />} />   </Routes>
          <Routes> <Route exact path='/general' element={<News pageSize={9} country="in" category="general" />} />    </Routes>
          <Routes> <Route exact path='/health' element={<News pageSize={9} country="in" category="health" />} />    </Routes>
          <Routes> <Route exact path='/science' element={<News pageSize={9} country="in" category="science" />} />    </Routes>
          <Routes> <Route exact path='/sports' element={<News pageSize={9} country="in" category="sports" />} />    </Routes>
          <Routes> <Route exact path='/technology' element={<News pageSize={9} country="in" category="technology" />} /> </Routes>
        </Router>
      </div>
    )
  }
}
