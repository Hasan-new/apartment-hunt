import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import myimg from '../../images/house1.png'
import headerBg from '../../images/house12.png'
import HeaderNavbar from '../Header/HeaderNavbar/HeaderNavbar';
import './Apartment.css';
import { useForm } from "react-hook-form";

const Apartment = () => {
   

   const {id}=useParams()

   const [singleApartment, setSingleApartment] = useState({})
   useEffect(() => {
      fetch(`http://localhost:3001/apartment/${id}`)
      .then(res => res.json())
      .then(data => setSingleApartment(data))
   }, [])

   const staticInfo={
      apartmentInfo:`3000 sq-ft., ${singleApartment.bedroom} Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.`,
      priceDetails:`Rent/Month: $${singleApartment.price} (negotiable)
      Service Charge : 8,000/= Tk per month, subject to change
      Security Deposit : 3 month’s rent
      Flat Release Policy : 3 months earlier notice required`,
      propertyDetails:`Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
      Flat Size : 3000 Sq Feet.
      Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
      Room Category : ${singleApartment.bedroom} Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
      Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
      Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
      `
   }

   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
      const newData = data;
        newData.previousId = id;
        newData.title = singleApartment.title;
        newData.price = singleApartment.price;
        newData.status = "Pending";
        fetch(`http://localhost:3001/book-apartment`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedCount){
                alert('Your request has been submitted. Wait for them to contact you.')
               //  history.replace(from);
            }
        })
   };
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
                  <img style={{width:"100%", borderRadius:"3px"}} src={singleApartment.img} alt=""/>
                  <div className="mt-3" style={{display:"flex", justifyContent:"space-between"}}>
                     <h3 style={{fontWeight:"700"}}>{singleApartment.title}</h3>
                     <h2 className="apartment-price" style={{fontWeight:"700"}}>${singleApartment.price}</h2>
                  </div>
                  <p style={{fontSize:"18px"}}>{staticInfo.apartmentInfo}</p>
                  <h4 style={{fontWeight:"700"}}>Price Details-</h4>
                  <p style={{fontSize:"18px"}}>{staticInfo.priceDetails}</p>
                  <h4 style={{fontWeight:"700"}}>Property Details-</h4>
                  <p style={{fontSize:"18px"}}>{staticInfo.propertyDetails}</p>
               </Col>
               <Col>
                  <div style={{borderRadius:"7px", background:"rgba(0,0,0,0.05)"}} className="p-4">
                     <Form onSubmit={handleSubmit(onSubmit)}>
                     <Form.Group controlId="formBasicName">
                        <Form.Control type="text" name="fullname" placeholder="Full Name" ref={register} required/>
                        
                     </Form.Group>

                     <Form.Group controlId="formBasicPhone">
                        <Form.Control type="text" name="phone" placeholder="Phone Number" ref={register} required/>
                     </Form.Group>

                     <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Email" ref={register} required/>
                        
                     </Form.Group>

                     <Form.Group controlId="formBasicMessage">
                        <Form.Control as="textarea" rows={4} name="message"  placeholder="Message" ref={register} required/>
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