import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './../../assets/imgs/logo.jpg'
import './NavBarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faBurger, faClose, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
          <Button variant='light' onClick={handleShow} className='d-flex d-lg-none border-0 bg-transparent'>
            <FontAwesomeIcon icon={faBars} className='mx-2 fs-3' />
          </Button>
          <div className="nav-body-container d-flex">
            <div className="nav-body-main-content d-none d-lg-flex">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            </div>
            <div className='nav-icons ms-4'>
              <FontAwesomeIcon icon={faUserTie} className='mx-2' />
              <FontAwesomeIcon icon={faCartShopping} className='mx-2' />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-2' />
            </div>
          </div>
        </Container>
        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose}>
        <Button className='offcanvas-close-btn' variant="close" onClick={handleClose}></Button>
        <Offcanvas.Body className='d-flex flex-column gap-3'>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link"}>Home</NavLink>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : "text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between"}>
            Collection <FontAwesomeIcon onClick={handleShow2} icon={faArrowRight} className='mx-2 fs-3' />
            <Offcanvas show={show2}>
            <Button variant='light' onClick={handleClose2} className='d-flex d-lg-none border-0 bg-transparent'>
              <FontAwesomeIcon icon={faBars} className='mx-2 fs-3' />
            </Button>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
          </NavLink>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Shop</NavLink>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Android</NavLink>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Accessories</NavLink>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Memory & Storage</NavLink>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : "text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" }>
            Pages <FontAwesomeIcon onClick={handleShow3} icon={faArrowRight} className='mx-2 fs-3' />
            <Offcanvas show={show3}>
              <Button variant='light' onClick={handleClose3} className='d-flex d-lg-none border-0 bg-transparent'>
                <FontAwesomeIcon icon={faBars} className='mx-2 fs-3' />
              </Button>
              <Offcanvas.Body>
                3
              </Offcanvas.Body>
            </Offcanvas>
          </NavLink>
        </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </div>
  )
}

export default NavBar