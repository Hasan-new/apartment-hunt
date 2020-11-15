import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
// import './Header.scss'
const Header = () => {
   return (
      <div>
         {/* bg="dark" variant="dark" */}
         <Navbar collapseOnSelect expand="lg"  className="d-flex justify-content-between font-weight-bold">
            <div>
               <Navbar.Brand className="brandNav" href="#home">React-Bootstrap</Navbar.Brand>   
            </div>
            <div>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#concern">Concern</Nav.Link>
                        <Nav.Link href="#event">Event</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Button className="btn btn-sm py-0 m-1">Login</Button>
                     </Nav>
                  </Navbar.Collapse>
            </div>
         </Navbar>
      </div>
   );
};

export default Header;