import React, { Component } from 'react';
import './masthead.css';


export default class Masthead extends Component {

  render(){
    return (
      <img className="masthead" src={this.props.image}/>
    )
  }
}