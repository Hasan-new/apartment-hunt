import React, { useEffect, useState } from 'react';
import './Houses.css'
import myimg from '../../../images/house1.png'
import myimg2 from '../../../images/house2.png'
import myimg3 from '../../../images/house3.png'
import {  Row } from 'react-bootstrap';
import HouseDetails from './HouseDetails/HouseDetails';

// const fakeData =[
//    {
//       img: myimg,
//       title: "Washington Avenue",
//       location: "Nasirabad H/S, Chattogram",
//       bedroom: 3,
//       bathroom: 2,
//       price: 500,
//       //below for apartment detailed info
//       apartmentInfo:`3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.`,
//       priceDetails:`Rent/Month: $550 (negotiable)
//       Service Charge : 8,000/= Tk per month, subject to change
//       Security Deposit : 3 month’s rent
//       Flat Release Policy : 3 months earlier notice required`,
//       propertyDetails:`Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
//       Flat Size : 3000 Sq Feet.
//       Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
//       Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
//       Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
//       Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
//       `
//    },
   
//    {
//       img: myimg2,
//       title: "Washington Avenue",
//       location: "Nasirabad H/S, Chattogram",
//       bedroom: 3,
//       bathroom: 2,
//       price: 500
//    },
   
//    {
//       img: myimg3,
//       title: "Washington Avenue",
//       location: "Nasirabad H/S, Chattogram",
//       bedroom: 3,
//       bathroom: 2,
//       price: 500
//    },
//    {
//       img: myimg,
//       title: "Washington Avenue",
//       location: "Nasirabad H/S, Chattogram",
//       bedroom: 3,
//       bathroom: 2,
//       price: 500
//    },
   
//    {
//       img: myimg2,
//       title: "Washington Avenue",
//       location: "Nasirabad H/S, Chattogram",
//       bedroom: 3,
//       bathroom: 2,
//       price: 500
//    },
   
//    {
//       img: myimg3,
//       title: "Washington Avenue",
//       location: "Nasirabad H/S, Chattogram",
//       bedroom: 3,
//       bathroom: 2,
//       price: 500
//    },
   

// ]

const Houses = () => {
   const [apartmentData, setApartmentData] = useState([])
   useEffect(() => {
      fetch(`http://localhost:3001/apartments`)
      .then(res => res.json())
      .then(data => setApartmentData(data))
   }, [])
   return (
      <div id="house" className="houses-container ">
         <div className="text-center mb-5 mt-3">
            <p className="m-0 p-2">House Rent</p>
            <h3 style={{fontSize:"34px"}} className="m-0 p-0">Discover the latest Rent <br/> available today</h3>
         </div>

         <Row >
            {
               apartmentData?.map( (data,i)=>{
                  return <HouseDetails key={"house"+i} data={data}></HouseDetails>
               })
            }
         </Row>
      </div>
   );
};

export default Houses;