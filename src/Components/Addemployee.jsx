import React from "react";

import { useNavigate } from "react-router-dom";

import left from "../Assests/Images/left-arrow.png";
import smallright from "../Assests/Images/sm-right-arrow.png";
import avatar from "../Assests/Images/avatar.png";
import upload from "../Assests/Images/upload.png";
import down_ar from "../Assests/Images/sm-down-arrow.png";
import checked from "../Assests/Images/checked.png";

const Addemployee = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* left-arrow button top */}

      <button
        className="left-arrow"
        onClick={() => {
          navigate("/employees");
        }}
      >
        <img src={left} alt="left-ar" />
      </button>

      {/* end */}

      {/* starting main-content container */}
      <div className="container">
        {/* page-map-location */}
        <div className="addMember-top">
          <div className="sm-mapping">
            <span>Manage Users</span>
            <img src={smallright} alt="right-ar" />
            <span>Employees </span>
            <img src={smallright} alt="right-ar" />
            <span>Add Employee</span>
          </div>

          <div className="main-title">
            <h4>Add Employee</h4>
          </div>
        </div>
        {/* page-map location end */}

        {/* form starts here */}
        <form action="" className="add_employee_form">
          <div className="add_employee_container">
            {/* profile_add container starts */}
            <div className="profile_image_container left-part">
              <div className="profile_img">
                <img src={avatar} alt="profile" />
              </div>
              <div className="profile_right_container right-part">
                <h4>Profile image</h4>
                <div className="upload_profile_btn">
                  <input type="file" id="uploadBtn" />
                  <img src={upload} alt="upload" htmlFor="uploadBtn" />
                  <label htmlFor="uploadBtn">Upload Profile Image</label>
                </div>
              </div>
            </div>
            {/* profile upload container ends here */}

            <div className="basic-info-emp information-container">
              <div className="heading-basic-info left-part">
                <h4>Basic Information</h4>
              </div>
              <div className="right-basic-info-container right-part right-grid-container">
                <div className="form-control">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter Name" id="name" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    id="middle_name"
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="">Surname</label>
                  <input type="text" placeholder="Enter Surname" id="surname" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Birth Date</label>
                  <input type="date" id="dob" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Gender</label>
                  <select name="gender" id="gender">
                    <option value="" disabled>
                      Choose Gender{" "}
                      <div className="down_arrow_btn">
                        <img src={down_ar} alt="down_ar" />
                      </div>
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-control">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Enter Address" id="address" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    id="contact"
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    id="email"
                  />
                </div>
              </div>
            </div>
            {/* basic - info container ends here */}

            <div className="working-hours-container information-container">
              <div className="working-hours-heading left-part">
                <h4>Working Hours</h4>
              </div>
              <div className="working-hours-right-container right-part right-grid-container">
                <div className="form-control">
                  <label htmlFor="">Starts At</label>
                  <input type="time" id="time" />
                </div>
                <div className="form-control">
                  <label htmlFor="">Starts At</label>
                  <input type="time" id="time" />
                </div>
              </div>
            </div>
            {/* working hour container ends here */}

            <div className="jobs_container information-container">
              <div className="jobs_container_title">
                <h4>Jobs</h4>
              </div>
              <div className="jobs_right_container right-grid-container right-part">
                <div className="form-control">
                  <label htmlFor="">Job Position</label>
                  <input type="text" placeholder="Enter Job Application" />
                </div>
                <div className="form-control">
                  <label htmlFor="">Team</label>
                  <select name="team" id="team_select">
                    <option value="0">Choose Team</option>
                  </select>
                </div>
              </div>
            </div>
            {/* jobs_container ends here */}

            <div className="billable_information information-container">
              <div className="billable_information_title">
                <h4>Billable Information</h4>
              </div>
              <div className="billable_right_container">
                <div className="right_container_top">
                  <img src={checked} alt="checked" />
                  <span>This user is billable</span>
                </div>
                <div className="form-control billable_hours_btm_cont">
                  <label htmlFor="billable">Billable Hours</label>
                  <div className="flex_input_enter right-part">
                    <div className="input_and_btn">
                      <input type="text" placeholder="Enter Billiable Hours" />
                      <button>Hours</button>
                    </div>
                    <div className="enter_btn">
                      <button>Enter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* billable information ends here */}
          </div>
        </form>

        <div className="save_footer">
          <button className="save_button orange_button btn-primary">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Addemployee;
