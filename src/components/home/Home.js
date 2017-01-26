import React, { Component } from 'react';
import Masthead from '../masthead/Masthead';
import Image from '../../assets/images/cliffs.jpg'
import './home.css';


export default class Home extends Component {
  render(){
    return (
      <div className="content">
        <section className="mastheadContainer">
          <Masthead image={Image}/>
          <strong className="mastheadTitle">
            Full Stack Engineer
          </strong>
        </section>
      <section className="contentSubsection">
          <h2 className="contentTitle"><span>Brian Kelly</span>
          </h2>
          <h3 className="contentSubtitle">
            A Little Bit About Me
          </h3>
        <div className="imageHeadshot"/>
        <p className="contentDescription">
          I graduated from NUI Galway in 2014 with a degree in Business Information Systems. Following this I wanted to move into software development so I did a postgraduate degree in Computer Science also in NUI Galway. Finishing this degree I began working in BearingPoint as a fullstack engineer. I worked for over year and then had the opportunity to get a Visa to work in USA, which brought me to San Francisco. After working for 3 months as a MEAN stack engineer in Optima Global Solutions I'm currently looking for work in Bay Area. I'm continuously trying to refine my skills and I currently have a focus on React.
        </p>
      </section>
      </div>
    )
  }
}