import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './../../assets/imgs/logo.jpg'
import './NavBarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowDown19, faArrowLeft, faArrowRight, faBars, faChevronDown, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import CollectionList from '../CollectionList/CollectionList';

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
  
  // Flags API

  // declaring data state
  const [data, setData] = useState([]);

  // declaring a function to fetch the data from the api
  // const handleData = () => {
  //   axios.get("https://restcountries.com/v3.1/all")
  //   .then(response => setData(response.data))
  // }

  // calling the function when the page is rendered for the first time
  // useEffect(() => {
  //   handleData();
    // let flagsBtn = document.querySelector('.flags-btn')
    // let flagsMenu = document.querySelector('.flags-menu')
    // flagsBtn.addEventListener('click', () => {
    //   flagsMenu.classList.toggle('show-flags-menu')
    // })
  // },[])
  
  // let flagsMenu = document.querySelector('.flags-menu')
  // let flagsBtn = document.querySelector('.flags-btn')
  
  // data.forEach((el) => {
  //   flagsMenu.innerHTML += `<li><p>${el.cca2}</p></li><hr/>`
  //   flagsBtn.innerHTML = `${data[0].cca2}`
  //   console.log(el)
  // })

  // let flagItems = document.querySelectorAll('.flags-menu li')
  // flagItems.forEach((item) => {
  //   item.addEventListener('click', () => {
  //     flagsBtn.innerHTML = item.children[0].innerHTML
  //   })
  // })

  // Hide and Show Collection List

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
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
              <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2"}>Home</NavLink>
              <NavLink to="#" onClick={toggleVisibility} className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2"}>Collection<FontAwesomeIcon icon={faChevronDown} className='ms-2' /></NavLink>
              <CollectionList visible={isVisible}/>
              <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Shop</NavLink>
              <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Android</NavLink>
              <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Accessories</NavLink>
              <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold mx-2" : isActive ? "active text-decoration-none text-dark fw-bold mx-2" : "text-decoration-none text-dark fw-bold mx-2" }>Memory & Storage</NavLink>
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
            <div className="flags position-relative">
              <button className='flags-btn flags-btn border-0 bg-transparent ms-2'></button>
              <ul className='flags-menu shadow list-inline rounded-4'></ul>
            </div>
          </div>
        </Container>
        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose}>
        <Button className='offcanvas-close-btn' variant="close" onClick={handleClose}></Button>
        <Offcanvas.Body className='d-flex flex-column gap-3'>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link"}>Home</NavLink>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : "text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between"}>
            Collection <FontAwesomeIcon onClick={handleShow2} icon={faArrowRight} className='mx-2 fs-3' />
            <Offcanvas show={show2}>
            <Button variant='light' onClick={handleClose2} className='d-flex d-lg-none border-0 bg-transparent'>
              <h3><FontAwesomeIcon icon={faArrowLeft} className='mx-2 fs-3' />Collection</h3> 
            </Button>
            <Offcanvas.Body className='collection-offcanvas'>
              <h3>SSD Card</h3>
              <ul className='list-inline ms-3'>
                <li>Affinity M20</li>
                <li>Affinity P40 Pro</li>
                <li>PO V40 ThinQ</li>
                <li>Tencho 7.3</li>
                <li>Tencho 8.1</li>
                <li>Nexian</li>
                <li>Ningbo</li>
                <li>Fix A Phone</li>
              </ul>
              <h3>Power Banks</h3>
              <ul className='list-inline ms-3'>
                <li>Spots 8 Lite</li>
                <li>Spots ERA 5X</li>
                <li>Tencho 8.1</li>
                <li>Phonelink</li>
                <li>Musah</li>
                <li>Connect 4</li>
                <li>Alcatel</li>
                <li>MobiAir</li>
              </ul>
              <h3>Earphone</h3>
              <ul className='list-inline ms-3'>
                <li>Spots Y93 1815</li>
                <li>Tencho F12 Pro</li>
                <li>Telefonika</li>
                <li>T-Blast</li>
                <li>Musah</li>
                <li>MOI Cell</li>
                <li>Alcatel</li>
                <li>MobiAir</li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          </NavLink>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Shop</NavLink>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Android</NavLink>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Accessories</NavLink>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link" : "text-decoration-none text-dark fw-bold offcanvas-link" }>Memory & Storage</NavLink>
          <NavLink to="#" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : isActive ? "active text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" : "text-decoration-none text-dark fw-bold offcanvas-link d-flex justify-content-between" }>
            Pages <FontAwesomeIcon onClick={handleShow3} icon={faArrowRight} className='mx-2 fs-3' />
            <Offcanvas show={show3}>
              <Button variant='light' onClick={handleClose3} className='d-flex d-lg-none border-0 bg-transparent'>
                <h3><FontAwesomeIcon icon={faArrowLeft} className='mx-2 fs-3' />Pages</h3> 
              </Button>
              <Offcanvas.Body>
                <ul className='list-inline ms-3'>
                  <li><NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark" : isActive ? "active text-decoration-none text-dark" : "text-decoration-none text-dark" }>About</NavLink></li>
                  <li><NavLink to="/courses" className={({ isActive, isPending }) => isPending ? "pending text-decoration-none text-dark" : isActive ? "active text-decoration-none text-dark" : "text-decoration-none text-dark" }>Courses</NavLink></li>
                </ul>
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