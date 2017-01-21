import React, { Component } from 'react';
import Masthead from '../masthead/Masthead';
import Image from '../../assets/images/contact.jpg'



export default class Contact extends Component {
  render(){
    return (
      <div>
        <section className="mastheadContainer">
          <Masthead image={Image} />
            <strong className="mastheadTitle">
              Contact
            </strong>
        </section>
        <h2>Contact</h2>
        <div>Contact content</div>
      </div>
    )
  }
}