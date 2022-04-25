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
  pageSize = 15
  render() {
    return (
      <div>
        {/* <Router> */}
        {/* <Navbar />
          <News pageSize={this.pageSize} country="in" category="science" /> */}
        {/* <Switch>
            <Route path="/"> key="general" <News pageSize={this.pageSize} country="in" category="general" />   </Route>
            <Route path="/business"> key="business" <News pageSize={this.pageSize} country="in" category="business" />   </Route>
            <Route path="/entertainment"> key="entertainment" <News pageSize={this.pageSize} country="in" category="entertainment" />   </Route>
            <Route path="/general"> key="general" <News pageSize={this.pageSize} country="in" category="general" />   </Route>
            <Route path="/health"> key="health" <News pageSize={this.pageSize} country="in" category="health" />   </Route>
            <Route path="/science"> key="science" <News pageSize={this.pageSize} country="in" category="science" />   </Route>
            <Route path="/sports"> key="sports" <News pageSize={this.pageSize} country="in" category="sports" />   </Route>
            <Route path="/technology"> key="technology" <News pageSize={this.pageSize} country="in" category="technology" />   </Route>
          </Switch>
        </Router> */}
        <Router>
          <Navbar />
          <Routes><Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general" />} /></Routes>
          <Routes> <Route exact path='/business' element={<News pageSize={this.pageSize} country="in" category="general" />} />   </Routes>
          <Routes> <Route exact path='/entertainment' element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />   </Routes>
          <Routes> <Route exact path='/general' element={<News pageSize={this.pageSize} country="in" category="general" />} />    </Routes>
          <Routes> <Route exact path='/health' element={<News pageSize={this.pageSize} country="in" category="health" />} />    </Routes>
          <Routes> <Route exact path='/science' element={<News pageSize={this.pageSize} country="in" category="science" />} />    </Routes>
          <Routes> <Route exact path='/sports' element={<News pageSize={this.pageSize} country="in" category="sports" />} />    </Routes>
          <Routes> <Route exact path='/technology' element={<News pageSize={this.pageSize} country="in" category="technology" />} /> </Routes>
        </Router>
      </div>
    )
  }
}
