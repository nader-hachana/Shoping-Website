import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Clothes from "../Clothes.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Link to="/#home">
        <Navbar.Brand>
          <img
            src={Clothes}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{marginLeft:20}}
          />
          Clothes Store
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto"></Nav>

      <Navbar.Collapse className="justify-content-end">
        <nav>
          <Link style={{ marginRight: "30px" }} to="/">
            Home
          </Link>

          <Link style={{ marginRight: "30px" }} to="/men">
            Men
          </Link>

          <Link style={{ marginRight: "30px" }} to="/women">
            Women
          </Link>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
