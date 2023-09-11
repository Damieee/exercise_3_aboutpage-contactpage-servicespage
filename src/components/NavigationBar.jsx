import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand>
            <h1>
            Exercise Three Assigned to me by{' '}
            <a href="https://www.linkedin.com/in/desoga/" target="_blank" rel="noopener noreferrer">
                Jagaban
            </a>{' '}
            🫡😁
            </h1>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <ul>
                <li>
                <LinkContainer to="/about">
                    <Nav.Link>AboutPage</Nav.Link>
                </LinkContainer>
                </li>
                <li>
                <LinkContainer to="/contact">
                    <Nav.Link>ContactPage</Nav.Link>
                </LinkContainer>
                </li>
                <li>
                <LinkContainer to="/services">
                    <Nav.Link>ServicesPage</Nav.Link>
                </LinkContainer>
                </li>
            </ul>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      </>
  );
};


export default NavigationBar;
