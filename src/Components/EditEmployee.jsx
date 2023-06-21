import React from "react";

import { Link } from "react-router-dom";

import left from "../Assests/Images/left-arrow.png";
import smallright from "../Assests/Images/sm-right-arrow.png";
import down_ar from "../Assests/Images/sm-down-arrow.png";
import checked from "../Assests/Images/checked.png";
import profile from "../Assests/Images/profile.png";

const EditEmployee = () => {
  return (
    <>
      {/* left-arrow button top */}
      <Link to="/employees">
        <button className="left-arrow">
          <img src={left} alt="left-ar" />
        </button>
      </Link>
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
            <span>Edit Employee</span>
          </div>

          <div className="main-title">
            <h4>Edit Employee</h4>
          </div>
        </div>
        {/* page-map location end */}

        {/* form starts here */}
        <form action="" className="add_employee_form">
          <div className="add_employee_container">
            {/* profile_add container starts */}
            <div className="profile_image_container left-part">
              <div className="profile_img">
                <img src={profile} alt="profile" />
              </div>
              <div className="profile_right_container right-part">
                <h4>Chadwick Boseman</h4>
                <div
                  style={{
                    fontSize: ".8rem",
                    color: "var(--grey)",
                    marginTop: "-2px",
                  }}
                >
                  chad@gmail.com
                </div>
                <div
                  className="super_admin"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "var(--blue)",
                    textAlign: "center",
                    padding: "5px",
                    width: "6.5rem",
                    marginTop: "5px",
                  }}
                >
                  <h5 style={{ color: "white" }}>Super Admin</h5>
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
                  <input type="text" placeholder="Chadwick" id="name" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Middle Name</label>
                  <input type="text" placeholder="Booseman" id="middle_name" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Surname</label>
                  <input type="text" placeholder="Chad" id="surname" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Birth Date</label>
                  <input type="date" id="dob" value={"1985/05/06"} />
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
                  <input
                    type="text"
                    placeholder="Paramata,Sydney,Australia"
                    id="address"
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="">Phone Number</label>
                  <input type="number" placeholder="4356 7890" id="contact" />
                </div>

                <div className="form-control">
                  <label htmlFor="">Email Address</label>
                  <input type="email" placeholder="chad@gmail.com" id="email" />
                </div>
              </div>
            </div>
            {/* basic - info container ends here */}

            <div className="working-hours-container information-container">
              <div className="working-hours-heading left-part">
                <h4>Password</h4>
              </div>
              <div className="working-hours-right-container right-part right-grid-container">
                <div className="form-control">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="32487@45t"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    id="cpassword"
                    placeholder="32487@45t"
                  />
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
                  <input type="text" placeholder="Fabricator" />
                </div>
                <div className="form-control">
                  <label htmlFor="">User Role</label>
                  <select name="team" id="team_select">
                    <option value="0">Staff</option>
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
          <button
            className="save_button orange_button btn-primary"
            style={{ width: "6.9rem" }}
          >
            Save & update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
