import group from "../Assests/Images/Group.png";
import groupset from "../Assests/Images/Groupset.png";
import React from "react";

const User = () => {
  return (
    <div className="content">
      <div className="cardTitle">
        <h4>Manage Users</h4>
      </div>
      <div className="cards">
        <div className="blueCard card">
          <div className="left__box">
            <h6>Teams</h6>
            <h4>23</h4>
          </div>
          <div className="right__box">
            <img src={groupset} alt="group" />
          </div>
        </div>

        <div className="redCard card">
          <div className="left__box">
            <h6>Employees</h6>
            <h4>105</h4>
          </div>
          <div className="right__box">
            <img src={group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
