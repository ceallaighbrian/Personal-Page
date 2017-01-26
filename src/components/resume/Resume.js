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
        <section className="contentSubsection">
        <h2 className="contentTitle"><span>Resume</span>
        </h2>
        <h3 className="contentSubtitle">
          Some of my Talents
        </h3>
        </section>
        <div className="contentContainer">
          <h4 className="resumeTitle">Technology</h4>
          <div className="col1" >
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

        <div className="contentContainer">
          <h4 className="resumeTitle">Work Experience</h4>
          <div className="col4">
            <h5 className="resumeHeader">
              Full Stack Engineer
            </h5>
            <p>Optima Global Solutions, San Francisco, October 2016 - December 2016</p>
            <ul className="resumeList ">
              <li>
                Designed and developed a fully functional API monitor using AngularJS, NodeJS & mongodb.
              </li>
              <li>
                Developed multiple Facebook Chatbot POC’s using NodeJS and API.ai.
              </li>
            </ul>
          </div>
          <div className="col4">
            <h5 className="resumeHeader">
              Full Stack Engineer
            </h5>
            <p>BearingPoint, Dublin, Ireland, July 2015 - July 2016</p>
            <ul className="resumeList ">
              <li>
                Developed Restful web services using Java Spring for a large billing and rating system for our client British Telecom.
              </li>
              <li>
                Implemented numerous user stories to expand on our core product’s functionally.
              </li>
              <li>
                Created a production ready front-end registration system in AngularJS.
              </li>
              <li>
                Worked on the creation of a new E2E testing framework using Cucumber and Selenium.
              </li>
              <li>
                Worked closely with the client throughout the development lifecycle..
              </li>
            </ul>
          </div>
          <div className="col4">
            <h5 className="resumeHeader">
              Lab Tutor
            </h5>
            <p> National University of Ireland, Galway, Ireland, January 2015 - May 2015</p>
            <ul className="resumeList ">
              <li>
                Lab Tutor for over 50 2nd year Computer Science students.
              </li>
              <li>
                Helped students with their assignments in the area of Database Development and Modelling.
              </li>
              <li>
                Corrected student’s weekly assignments and communicate any issues back to the lecturer.
              </li>
            </ul>
          </div>
        </div>

        <div className="contentContainer">
          <h4 className="resumeTitle">Education</h4>
          <div className="col4">
            <h5 className="resumeHeader">
              HDip in Software Design and Development
            </h5>
            <p>National University of Ireland Galway - 1:1 (4.0 GPA)</p>
            <ul className="resumeList ">
              <li>
                Intensive year long degree program focused on software development tools and techniques
              </li>
              <li>
                Courses Included: Programming(Java), Algorithms & Logical Methods, Databases, Artificial Intelligence, Internet
                Programming, Software Engineering Methods , Computing Architecture & Operating Systems.
              </li>
            </ul>
          </div>
          <div className="col4">
            <h5 className="resumeHeader">
              Bsc in Business Information Systems
            </h5>
            <p>National University of Ireland - Galway 2:1 (3.7 GPA)</p>
            <ul className="resumeList ">
              <li>
                4 year bachelors degree focused on software development and the use of information systems within businesses.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}