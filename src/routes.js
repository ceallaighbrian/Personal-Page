import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';
import './components/style.css';

import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Image from './homePage.jpg'




// Main component
class App extends Component {

  render(){
    return (
      <div>
        <img className="Headmast" src={Image}/>
        <Header/>
        <Jumbotron>
          <h1>Brian Kelly</h1>
        { this.props.children }
        </Jumbotron>
        <Footer/>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="resume" component={Resume}/>
    <Route path="contact" component={Contact}/>
  </Route>
)
