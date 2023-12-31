import React from "react";
import { Link } from "react-router-dom";

import left from "../Assests/Images/left-arrow.png";
import smallright from "../Assests/Images/sm-right-arrow.png";
import qr_img from "../Assests/Images/qr-code2.png";
import printer from "../Assests/Images/printer.png";
import download from "../Assests/Images/download.png";

const Addteam = () => {
  return (
    <>
      {/* left-arrow button top */}
      <Link to="/">
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
            <span>Teams </span>
            <img src={smallright} alt="right-ar" />
            <span>Add Team</span>
          </div>

          <div className="main-title">
            <h4>Add Team</h4>
          </div>
        </div>
        {/* page-map location end */}

        {/* form starts here */}
        <form>
          <div className="form-data">
            {/* basic information column starts here */}
            <div className="basic-info">
              <h4>Basic Information</h4>
              <div className="personal-info">
                <div className="personal-info-container">
                  <div className="team-name">
                    <label htmlFor="teamName">Team Name</label>
                    <input type="text" placeholder="Enter Team Name" />
                  </div>
                  <div className="team-password">
                    <label htmlFor="teamPassword">Team Password</label>
                    <input type="password" placeholder="Team Password" />
                  </div>
                </div>
              </div>
            </div>
            {/* basic information column ends here */}

            {/* members column starts here */}
            <div className="members">
              <div className="members-title">
                <h4>Members</h4>
              </div>
              <div className="right__team_member">
                <div className="selectMenu-title">
                  <label htmlFor="teamMembers">Team Members</label>
                </div>
                <div className="selectMenu">
                  <select id="select">
                    <option value="Select Employees" disabled selected>
                      Select Employees
                    </option>
                    <option value="John">John Doe - Electrical</option>
                    <option value="Marcus">Marcus Brownlee - Painting</option>
                    <option value="Jane">Jane Jackson - Blasting</option>
                    <option value="Thomas">Thomas Humfrey - Electrical</option>
                  </select>
                </div>
                {/* select employee ends here */}

                <div className="billable_hours">
                  <div className="billable_hours_title">
                    <label htmlFor="billable">Billable Hours</label>
                  </div>

                  <div className="billable_input_container">
                    <div className="billable_hours_input">
                      <input type="text" placeholder="Enter Billable Hours" />
                    </div>
                    <button type="submit">Hours</button>
                  </div>
                </div>
                {/* billable_hours ends here */}
              </div>
              {/* right side team member container ends here */}
            </div>
            {/* whole member container ends here */}

            <div className="team_qr_container">
              <div className="left_side_qr_container">
                <h4>Team QR</h4>
              </div>

              <div className="right_side_qr_container">
                <div className="team_qr_img">
                  <img src={qr_img} alt="qr_img" />
                </div>

                <div className="qr_team_btns">
                  <div className="div_print_button button_qr">
                    <button className="print_button acc_button">
                      <img src={printer} alt="printer" /> Print
                    </button>
                  </div>

                  <div className="div_download_button button_qr">
                    <button className="download_button acc_button">
                      <img src={download} alt="download" /> Download
                    </button>
                  </div>
                </div>
              </div>
              {/* right_side qr container ends here */}
            </div>
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

export default Addteam;
