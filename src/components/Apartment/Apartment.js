import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import myimg from '../../images/house1.png'
import headerBg from '../../images/house12.png'
import HeaderNavbar from '../Header/HeaderNavbar/HeaderNavbar';
import './Apartment.css'

const Apartment = () => {
   const apartmentData={
      img: myimg,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500,
      //below for apartment detailed info
      apartmentInfo:`3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.`,
      priceDetails:`Rent/Month: $550 (negotiable)
      Service Charge : 8,000/= Tk per month, subject to change
      Security Deposit : 3 month’s rent
      Flat Release Policy : 3 months earlier notice required`,
      propertyDetails:`Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
      Flat Size : 3000 Sq Feet.
      Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
      Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
      Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
      Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
      `
   }

   const {id}=useParams()
   console.log(id)
   return (
      <div className="apartment-container">
         <HeaderNavbar></HeaderNavbar>
         <div className="apartment-header pb-5" style={{background:`linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
            url("${headerBg}")`, backgroundSize:"cover"}}>
               <h1>Apartment</h1>
         </div>

         <div className="mt-5" style={{width:"80%", margin:"auto"}}>
            <Row>
               <Col md={8}>
                  <img style={{width:"100%", borderRadius:"3px"}} src={apartmentData.img} alt=""/>
                  <div className="mt-3" style={{display:"flex", justifyContent:"space-between"}}>
                     <h3 style={{fontWeight:"700"}}>{apartmentData.title}</h3>
                     <h2 className="apartment-price" style={{fontWeight:"700"}}>${apartmentData.price}</h2>
                  </div>
                  <p style={{fontSize:"18px"}}>{apartmentData.apartmentInfo}</p>
                  <h4 style={{fontWeight:"700"}}>Price Details-</h4>
                  <p style={{fontSize:"18px"}}>{apartmentData.priceDetails}</p>
                  <h4 style={{fontWeight:"700"}}>Property Details-</h4>
                  <p style={{fontSize:"18px"}}>{apartmentData.propertyDetails}</p>
               </Col>
               <Col>
                  <div style={{borderRadius:"7px", background:"rgba(0,0,0,0.05)"}} className="p-4">
                     <Form>
                     <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Full Name" />
                        
                     </Form.Group>

                     <Form.Group controlId="formBasicPhone">
                        <Form.Control type="text" placeholder="Phone Number" />
                     </Form.Group>

                     <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                        
                     </Form.Group>

                     <Form.Group controlId="formBasicMessage">
                        <Form.Control as="textarea" rows={4}  placeholder="Message" />
                     </Form.Group>

                        <Button className="form-button" variant="primary" type="submit">
                           Submit
                        </Button>
                     </Form>
                  </div>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default Apartment;