import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Кинохи</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/" style={{ color: "#77778c" }}>
                Все фильмы
              </Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/search" style={{ color: "#77778c" }}>
                Избранное{" "}
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
