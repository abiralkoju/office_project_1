import cross from "../Assests/Images/crossBtn-white.png";

import React from "react";

const ChipsEditEmp = (props) => {
  return (
    <>
      <li>
        <span>{props.text} </span>
        <img src={cross} alt="cross" onClick={() => props.onSelect(props)} />
      </li>
    </>
  );
};

export default ChipsEditEmp;
