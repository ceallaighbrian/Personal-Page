import React, { Component } from 'react';
import Masthead from '../masthead/Masthead';
import Image from '../../assets/images/contact.jpg'



export default class Contact extends Component {
  render(){
    return (
      <div>
        <section className="mastheadContainer">
          <Masthead image={Image}/>
            <strong className="mastheadTitle">
              Contact
            </strong>
        </section>
        <section className="contentSubsection">
          <h2 className="contentTitle"><span>Contact Me</span>
          </h2>
          <h3 className="contentSubtitle">
            San Francisco, CA
          </h3>
          <div className="col2">
            <h5 className="contactHeader">
              Personal Information
            </h5>
            <p className="bold">
              Brian Kelly
            </p>
            <p>
              San Francisco, CA
            </p>
            <p>
              310270941
            </p>
            <p><a href="mailto:ceallaighbrian@gmail.com">
              ceallaighbrian@gmail.com
            </a>
          </p>
            <p><a href="https://www.linkedin.com/in/brian-kelly-b4549877">
              LinkedIn
            </a>
            </p>
          </div>
          <div className="col2">
            <div className="imageHeadshot"/>
          </div>
        </section>
      </div>
    )
  }
}