import React from "react";
//import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <Navbar className="main-nav" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Studier's</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/tasks/main">Tasks</Nav.Link>
        <Nav.Link href="/music">Music</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBar;
