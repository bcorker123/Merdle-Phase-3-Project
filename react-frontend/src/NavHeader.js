import React from "react";
import { Nav, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavHeader({ currentUser }) {
  return (
    <div className="navigation">
      <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar py-4">
        <Navbar.Brand className="nav-link">Merdle</Navbar.Brand>

        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/play">
            Play
          </Link>
          <Link className="nav-link" to="/scores">
            Scores
          </Link>
        </Nav>
        <Badge pill bg="info">
          Current User: {currentUser ? currentUser : "none"}
        </Badge>
      </Navbar>
    </div>
  );
}
export default NavHeader;
