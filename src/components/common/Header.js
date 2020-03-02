/********************Imports*************************/

import React, {PropTypes} from 'react';

// We need clickable <Link/>s to make user able to jump through different components (like pages)
// We need also to make a default dashboard with <IndexLink/> tag
import {Link, IndexLink} from 'react-router';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
/********************Components*************************/

// TODO: Make a header for all components that will not change while running the app
/**
 * NOTE:This is a STATELESS FUNCTIONAL COMPONENT called Header
 * This component will handle the header which wil be included later in the App component
 */
const Header = (props) => {
  // NOTE: we don't use render() in STATELESS FUNCTIONAL COMPONENT
  return (
    <Navbar bsStyle="default">
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">Gestion de Doc MAI</IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <IndexLink to="/" activeClassName="active">Accueil</IndexLink>
          </NavItem>
          <NavItem>
          <Link to="/tasks" activeClassName="active">Formulaire</Link>
          </NavItem>
          <NavItem>
          <Link to="/about" activeClassName="active">Consultation</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
