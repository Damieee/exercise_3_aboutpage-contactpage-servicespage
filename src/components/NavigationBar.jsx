import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './contact_page/ContactPage';
import ServicesPage from './services_page/ServicesPage';
import AboutPage from './about_page/AboutPage';

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
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </>
  );
};


export default NavigationBar;
