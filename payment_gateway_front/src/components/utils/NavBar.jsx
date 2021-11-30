/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import getCategory from "../../services/category/getCategory";

const NavBar = (props) => {
  const [auth, setAuth] = React.useState(props.authUser);
  const [isAdmin, setIsAdmin] = React.useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(localStorage.getItem("token"));
    } else {
      setAuth(null);
    }
    getAdminProfile();
  });

  const getAdminProfile = async () => {
    await getCategory(localStorage.getItem("token")).then((res) => {
      if (res.data.category === "ADMIN") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  };
  const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    props.history.push("/auth");
    setAuth(null);
    console.log("cerrando secion");
  };

  return auth !== null ? (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand ">
            Payment-Gateway
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item className="">
            <NavLink className="btn  mr-2" to="/" exact>
              Inicio
            </NavLink>
          </Nav.Item>

          <Nav.Item className="">
            <NavLink className="btn  mr-2" to="/profile" exact>
              Me
            </NavLink>
          </Nav.Item>
          {isAdmin === true ? (
            <Nav.Item className="">
              <NavLink className="btn  mr-2" to="/administration" exact>
                Admin
              </NavLink>
            </Nav.Item>
          ) : null}

          <Nav.Item>
            <button className="btn" onClick={signOut}>
              Cerrar Secion
            </button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  ) : (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand ">
            Payment-Gateway
          </Link>
        </Navbar.Brand>
        <div className="">
          <div className="d-flex">
            <NavLink className="btn  mr-2" to="/" exact>
              Inicio
            </NavLink>
            <NavLink className="btn justify-content-end" to="/auth">
              <i className="far fa-user"></i>
            </NavLink>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default withRouter(NavBar);
