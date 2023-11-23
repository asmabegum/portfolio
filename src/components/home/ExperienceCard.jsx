import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data,imgSize }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" 
        src={data.companylogo} 
        alt=""
        width={imgSize}
        height={imgSize} />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;