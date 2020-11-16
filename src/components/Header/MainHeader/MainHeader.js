import React from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';
import './MainHeader.css'
import headerBg from '../../../images/house12.png'
const MainHeader = () => {
   return (
      <div className="main-header pb-5" style={{background:`linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
       url("${headerBg}")`, backgroundSize:"cover"}}>
         <h1 className="text-white mb-4">Find Your House Rent</h1>
         <div className="search-field">
            <Form.Group inline style={{display:"flex", justifyContent:"center"}}>
               <Form.Control className="search-box" type="text" placeholder="Search..." />
               <Button className="submit-button ml-1">Submit</Button>
            </Form.Group>
         </div>
      </div>
   );
};

export default MainHeader;