import React from 'react';
import { Row } from 'react-bootstrap';
import './Services.scss'
import property from '../../../images/logos/property.png'
import ServiceDetails from './ServiceDetails/ServiceDetails';
const Services = () => {
   const serviceData = [
      {
         img:property,
         title:"Wide Range of Properties",
         description:"With a robust selection of popular properties on hand, as well as leading properties from experts."
      },
      
      {
         img:property,
         title:"Wide Range of Properties",
         description:"With a robust selection of popular properties on hand, as well as leading properties from experts."
      },
      {
         img:property,
         title:"Wide Range of Properties",
         description:"With a robust selection of popular properties on hand, as well as leading properties from experts."
      },

   ]
   return (
         <div className="text-center mb-5 mt-3 service-container">
            <p className="m-0 p-2">Services</p>
            <h3 style={{fontSize:"34px"}} className="m-0 p-0 mb-5">We're an agency tailored to all <br/> clients' needs that always delivers</h3>

            <Row>
               {
                  serviceData.map((data, i)=>{
                     return <ServiceDetails key={"service"+i} data={data}></ServiceDetails>
                  })
               }
            </Row>
         </div>
   );
};

export default Services;