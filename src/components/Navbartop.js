import React from 'react'
import {Navbar, Container, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App.js'
import '../App.css'
import './Navbartop.css'

const Navbartop = () => {
  return(
    <>
    <Navbar expand="lg" id="header-contain" className="cust-nav">
      <div className="container-fluid flex-row-reverse">
        {/* <Navbar.Brand className='' href="#home">Logo Here</Navbar.Brand> */}
        <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav me-auto m-2 mb-lg-0 ms-auto align-items-center">
            <Nav.Link className="nav-item " href="#header-contain">Home</Nav.Link>
            <Nav.Link className="nav-item " href="#tech-contain">Tech Journey</Nav.Link>
            <Nav.Link className="nav-item " href="#about-contain">About</Nav.Link>
            <Nav.Link className="nav-item " href="#project-contain">Projects</Nav.Link>
            <Nav.Link className="nav-item " href="#footer-contain">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
    )
}

export default Navbartop