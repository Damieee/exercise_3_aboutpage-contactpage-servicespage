import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ContactPage from './contact_page/ContactPage';
import ServicesPage from './services_page/ServicesPage';
import AboutPage from './services_page/ServicesPage';


const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <h1>
          Exercise Three Assigned to me by{' '}
          <Link to="https://www.linkedin.com/in/desoga/">Jagaban</Link> 🫡😁
        </h1>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <Routes>
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
