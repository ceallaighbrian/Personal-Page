import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './footer.css';

export default class Footer extends Component {

  render() {
    return (
        <section className="footer">
          <nav>
            <IndexLink className="footerLink" to="/">
              Home
            </IndexLink>
            <Link className="footerLink" to="/resume">
              Resume
            </Link>
            <Link className="footerLink" to="/contact">
              Contact
            </Link>
          </nav>
        </section>
    );
  }
}