import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetails = ({data}) => {
   console.log(data)
   return (
      <Col md={4} sm={6} xs={12} className="mb-5">
         <img style={{width:"90px"}} src={data.img} alt=""/>
         <div className="px-3">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
         </div>
      </Col>
   );
};

export default ServiceDetails;