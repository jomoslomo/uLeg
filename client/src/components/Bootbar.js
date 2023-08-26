import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ULegislateLogo from "./ULegislate_BetaLogo.svg";
import './styles/Bootbar.css'

const Bootbar = () => {

    return (
        <Navbar expand="lg" className="bootbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={ULegislateLogo}
              height="36"
              className="d-inline-block align-top"
              alt="ULegislate Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="options" href="/">Home</Nav.Link>
              <Nav.Link className="options" href="/draft">Draft Legislation</Nav.Link>
              <Nav.Link className="options" href="/draftlist">Draft List</Nav.Link>
              <Nav.Link className="options" href="/reviewdraft">Review Draft</Nav.Link>
            </Nav>
            {/* This Navbar.Text object is a placeholder until we have a sign-in component. */}
            <Navbar.Text className="justify-content-end">
                Welcome, &#60;Username&#62;! 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Bootbar;