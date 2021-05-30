import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
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
    //     <div className="collapse navbar-collapse" id="navbarLeft">
    //       <div className="navbar-nav ms-2 d-flex">
    //         <NavLink className="nav-link" to="/tasks/main">
    //           Tasks
    //         </NavLink>
    //         <NavLink className="nav-link" to="/cites">
    //           Cites
    //         </NavLink>
    //         <NavLink className="nav-link" to="/music">
    //           Music
    //         </NavLink>
    //       </div>
    //     </div>
    //     <div
    //       className="collapse navbar-collapse justify-content-end"
    //       id="navbarRight"
    //     >
    //       <div className="navbar-nav ms-2 d-flex">
    //         <NavLink
    //           className="nav-link login"
    //           to="/login"
    //           data-bs-toggle="tooltip"
    //           data-bs-placement="bottom"
    //           title="Login"
    //         >
    //           <i className="fa fa-sign-in"></i>
    //         </NavLink>
    //         <NavLink
    //           className="nav-link register"
    //           to="/register"
    //           data-bs-toggle="tooltip"
    //           data-bs-placement="bottom"
    //           title="Register"
    //         >
    //           <i className="fa fa-user-plus"></i>
    //         </NavLink>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
