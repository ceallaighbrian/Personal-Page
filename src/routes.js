import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { Navbar, Nav, NavItem, Jumbotron, Grid, } from 'react-bootstrap';
import './components/style.css';

import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'



// Main component
class App extends Component {

  render(){
    return (
      <div>

        <Navbar inverse fixedTop>
          <Nav pullRight>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem> <Link to="/about">About</Link></NavItem>
            <NavItem> <Link to="/resume">Resume</Link></NavItem>
            <NavItem> <Link to="/contact">Contact</Link></NavItem>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1>Brian Kelly</h1>
        { this.props.children }
        </Jumbotron>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="resume" component={Resume}/>
    <Route path="contact" component={Contact}/>
  </Route>
)