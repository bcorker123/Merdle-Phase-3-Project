import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavHeader() {
  return (
    <div className="navigation">
      <Navbar bg="bbcolors" variant="dark" fixed="top" className="navbar py-4">
        <Navbar.Brand className="nav-link">Meme-Mentality</Navbar.Brand>

        {/* <Nav>
          <Nav className="nav-link">Home</Nav>
          <Nav>
            <Link className="nav-link" to="play">
              Play
            </Link>
          </Nav>
        </Nav> */}
        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/play">
            Daily Discovery
          </Link>
        </Nav>
      </Navbar>
    </div>
  )
}
export default NavHeader
