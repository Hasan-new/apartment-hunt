import React from 'react';
import {  Button, Col } from 'react-bootstrap';
import './HouseDetails.css'
const HouseDetails = ({data}) => {
   return (
      <Col md={4} sm={6} xs={12} className="mb-5">
         <img style={{width:"100%", borderRadius:"3px"}} src={data.img} alt=""/>
         <div className="mx-2">
            <h5 className="mt-3 mb-2" style={{fontWeight:"700"}}>{data.title}</h5>
            <p style={{fontWeight:"400", fontSize:"15px"}} className="m-0 p-0">{data.location}</p>
            <div >
               <span style={{fontWeight:"400", fontSize:"15px"}}>{data.bedroom} bedroom</span>
               <span style={{fontWeight:"400", fontSize:"15px"}} className="ml-4">{data.bathroom} bathroom</span>
               <div className="mt-3" style={{display:"flex", justifyContent:"space-between"}}>
                  <h2 className="house-price">${data.price}</h2>
                  <Button  className="view-button py-0 my-1">View Details</Button>
               </div>
            </div>
            
         </div>
      </Col>
   );
};

export default HouseDetails;