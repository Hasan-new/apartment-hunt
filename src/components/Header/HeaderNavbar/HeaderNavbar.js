import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './HeaderNavbar.css'
import logo from '../../../images/logos/Logo.png'
const HeaderNavbar = () => {
   return (
      <>
         {/* bg="dark" variant="dark" */}
         <Navbar collapseOnSelect expand="lg"  className="font-weight-bold">
               <Navbar.Brand href="#home">
                  <img style={{height:"35px"}} src={logo} alt=""/>
               </Navbar.Brand>   
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="text-center ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#concern">Concern</Nav.Link>
                        <Nav.Link href="#event">Event</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Button className=" py-0 m-1 login-btn">Login</Button>
                     </Nav>
                  </Navbar.Collapse>
         </Navbar>
      </>
   );
};

export default HeaderNavbar;