import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.hotelInfo.map((info, index) => {
        return <li key={index}>{info}</li>;
      })}
    </ul>
  );
};

export default Footer;
