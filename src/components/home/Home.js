import React, { Component } from 'react';
import './home.css';


export default class Home extends Component {
  render(){
    return (
      <div className="content">
      <section className="contentSubsection">
          <h2 className="contentTitle">
            Brian Kelly
          </h2>
          <h3 className="contentSubtitle">
            A Little Bit About Me
          </h3>
        <div className="imageHeadshot"/>
        <p className="contentDescription">
          Highly motivated, ambitious engineer, with a passion for problem-solving and self-learning. Professional experience in full-stack development and Agile methodologies. Actively learning new languages and frameworks in addition to my work. Currently seeking a software engineer position in San Francisco.
        </p>
      </section>
      </div>
    )
  }
}