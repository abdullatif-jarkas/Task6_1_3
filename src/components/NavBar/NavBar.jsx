import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './../../assets/imgs/logo.jpg'
import './NavBarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div>
      {
        <Navbar key="lg" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2"}>Home</NavLink>
                  <NavDropdown
                    className='fw-bold'
                    title="Collection"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item>
                      <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark" : isActive ? "active text-decoration-none text-dark" : "text-decoration-none text-dark" }>About</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/courses" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark" : isActive ? "active text-decoration-none text-dark" : "text-decoration-none text-dark" }>Courses</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Shop</NavLink>
                  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Android</NavLink>
                  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Accessories</NavLink>
                  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Memory & Storage</NavLink>
                  <NavDropdown
                    className='fw-bold'
                    title="Pages"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item>
                      <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark" : isActive ? "active text-decoration-none text-dark" : "text-decoration-none text-dark" }>About</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/courses" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark" : isActive ? "active text-decoration-none text-dark" : "text-decoration-none text-dark" }>Courses</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='nav-icons'>
              <FontAwesomeIcon icon={faUserTie} className='mx-2' />
              <FontAwesomeIcon icon={faCartShopping} className='mx-2' />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-2' />
            </div>
          </Container>
        </Navbar>
      }
    </div>
  )
}

export default NavBar