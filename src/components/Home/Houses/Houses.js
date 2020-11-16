import React from 'react';
import './Houses.css'
import myimg from '../../../images/house1.png'
import myimg2 from '../../../images/house2.png'
import myimg3 from '../../../images/house3.png'
import {  Row } from 'react-bootstrap';
import HouseDetails from './HouseDetails/HouseDetails';
const fakeData =[
   {
      img: myimg,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500
   },
   
   {
      img: myimg2,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500
   },
   
   {
      img: myimg3,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500
   },
   {
      img: myimg,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500
   },
   
   {
      img: myimg2,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500
   },
   
   {
      img: myimg3,
      title: "Washington Avenue",
      location: "Nasirabad H/S, Chattogram",
      bedroom: 3,
      bathroom: 2,
      price: 500
   },
   

]

const Houses = () => {
   return (
      <div className="houses-container ">
         <div className="text-center mb-5 mt-3">
            <p className="m-0 p-2">House Rent</p>
            <h3 className="m-0 p-0">Discover the latest Rent <br/> available today</h3>
         </div>

         <Row >
            {
               fakeData.map( data=>{
                  return <HouseDetails data={data}></HouseDetails>
               })
            }
         </Row>
      </div>
   );
};

export default Houses;