import React from "react";

import pencil from "../Assests/Images/filter.png";
import profile from "../Assests/Images/profile.png";
import cross from "../Assests/Images/crossBtn.png";

export default function Viewbar({ CloseBar }) {
  return (
    <>
      <div className="employee_info_wrapper">
        <div className="top-info-container">
          <div className="left_profile_employee_info">
            <h3>Employee Information</h3>
            <div className="img_info_profile">
              <img src={profile} alt="profile" />
              <div className="green-pencil">
                <img src={pencil} alt="edit" />
              </div>

              <h4>Chadwick Boseman</h4>
              <h6>chad@gmail.com</h6>
              <div className="employee_blue_btn">
                <button className="emp_blue_btn">Employee</button>
              </div>
            </div>
          </div>
          <div className="right-info-cross">
            <img src={cross} alt="cross" onClick={CloseBar} />
          </div>
        </div>

        <div className="middle-info-container">
          <div className="info-list">
            <h5>Designation</h5>
            <h5>Fabricator</h5>
          </div>
          <div className="info-list">
            <h5>Contact</h5>
            <h5>0453 343 342</h5>
          </div>
          <div className="info-list">
            <h5>Address</h5>
            <h5>Paramatta,Sydney,Australia</h5>
          </div>
        </div>

        <div className="bottom-info-container">
          <div className="info-list">
            <h5>Start Date</h5>
            <h5>15/18/2022</h5>
          </div>
          <div className="info-list">
            <h5>Role</h5>
            <h5>Staff</h5>
          </div>
          <div className="info-list">
            <h5>Billable Status</h5>
            <h5>User is Billable</h5>
          </div>
          <div className="info-list">
            <h5>Billable Hours</h5>
            <h5>40 Hours/Week</h5>
          </div>
        </div>

        <div className="bottom-btn-container">
          <button>
            <img src={pencil} alt="edit" />
            <div>Edit Profile</div>
          </button>
        </div>
      </div>
    </>
  );
}
