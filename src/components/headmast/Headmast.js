import React, { Component } from 'react';
import './headmast.css';


export default class Headmast extends Component {

  render(){
    return (
      <img className="Headmast" src={this.props.image}/>
    )
  }
}