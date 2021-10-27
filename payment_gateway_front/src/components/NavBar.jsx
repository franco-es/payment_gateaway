/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import {Navbar, Nav, Container, Form, FormControl, Button} from "react-bootstrap/";



const NavBar = () => {
  

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex pt-md-0 pt-sm-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/auth">Login</Nav.Link>
            <Nav.Link href="/register">Registro</Nav.Link>
            
            <Nav.Link href="/profile">
              Me
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
