import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './HeaderNavbar.css'
import logo from '../../../images/logos/Logo.png'
import { Link } from 'react-router-dom';
const HeaderNavbar = () => {
   return (
      <>
         {/* bg="dark" variant="dark" */}
         <Navbar style={{position:"sticky", top:"0", background:"white", zIndex:"15"}}  collapseOnSelect expand="lg"  className="font-weight-bold">
               <Navbar.Brand href="#home">
                  <Link to="/"><img style={{height:"35px"}} src={logo} alt=""/></Link>
               </Navbar.Brand>   
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="text-center ml-auto">
                        
                     <Nav.Link href='#home'><Link className="p-0 m-0 text-secondary" to="/">Home</Link></Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#house">House</Nav.Link>
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