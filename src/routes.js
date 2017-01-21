import React, { Component } from 'react';
import { Route, IndexRoute} from 'react-router';
import './assets/css/style.css';

import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


// Main component
class App extends Component {

  render(){
    return (
      <div>
        <Header/>
        { this.props.children}
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
