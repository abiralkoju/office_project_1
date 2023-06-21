import React, { useState } from "react";
import "../Styles/Filterlist.css";

const Filterlist = ({ closeFilter }) => {
  const [range, setRange] = useState(5000);

  const handlechange = (e) => {
    setRange(e.target.value);
  };
  return (
    <>
      <div className="main-filter-container" onClick={closeFilter}></div>
      <div className="filter-content-container">
        <h5>Filter</h5>
        <h6>Choose man hour range:</h6>
        <h4>{range}</h4>
        <input
          type="range"
          onChange={handlechange}
          min={5000}
          max={20000}
          step={1000}
        />
      </div>
    </>
  );
};

export default Filterlist;
