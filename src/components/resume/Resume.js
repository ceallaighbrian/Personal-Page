import React, { Component } from 'react';
import Masthead from '../masthead/Masthead';
import Image from '../../assets/images/resume.jpg';
import './resume.css';


export default class Resume extends Component {
  render(){
    return (
      <div className="content">
        <section className="mastheadContainer">
          <Masthead image={Image} />
            <strong className="mastheadTitle">
              Resume
            </strong>
        </section>
        <section className="contentSubsection text-center">
        <h2 className="contentTitle"><span>Resume</span>
        </h2>
        <h3 className="contentSubtitle">
          Some of my Talents
        </h3>
        </section>
        <div className="contentContainer">
          <h4 className="resumeTitle">Technology</h4>
          <div className="col2 right" >
            <div className="col2">
            <h5 className="resumeHeader">
              Languages/Frameworks
            </h5>
            <ul className="resumeList ">
              <li>
                Java
              </li>
              <li>
                Javascript / ES6
              </li>
              <li>
                MEAN Stack
              </li>
              <li>
                React
              </li>
              <li>
               Ruby/Rails
              </li>
              <li>
                HTML5 / CSS3
              </li>
              <li>
                Sql
              </li>
            </ul>
            </div>
            <div className="col2">
            <h5 className="resumeHeader">
              Development Tools
            </h5>
            <ul className="resumeList ">
              <li>
                Maven
              </li>
              <li>
                Git
              </li>
              <li>
                Subversion
              </li>
              <li>
                Jenkins
              </li>
              <li>
                JUnit
              </li>
              <li>
                Webpack / Babel
              </li>
              <li>
                Cucumber / Selenium
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}