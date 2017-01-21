import React, { Component } from 'react';
import Masthead from '../masthead/Masthead';
import Image from '../../assets/images/resume.jpg'


export default class Resume extends Component {
  render(){
    return (
      <div>
        <section className="mastheadContainer">
          <Masthead image={Image} />
            <strong className="mastheadTitle">
              Resume
            </strong>
        </section>
        <h2 className="contentTitle"><span>Resume</span>
        </h2>
        <h3 className="contentSubtitle">
          Some of my Talents
        </h3>
      </div>
    )
  }
}