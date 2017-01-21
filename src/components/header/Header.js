import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './header.css';

export default class PageHeader extends Component {

  render() {
    return (
      <header className="header">
        <nav className>
          <IndexLink className="headerLink" activeClassName="active" to="/">
            Home
          </IndexLink>
          <Link className="headerLink" activeClassName="active" to="/resume">
            Resume
          </Link>
          <Link className="headerLink" activeClassName="active" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
    );
  }
}

