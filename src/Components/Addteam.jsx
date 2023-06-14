import React from "react";
import { Link } from "react-router-dom";

import left from "../Assests/Images/left-arrow.png";
import smallright from "../Assests/Images/sm-right-arrow.png";
import down_ar from "../Assests/Images/sm-down-arrow.png";
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
        <div className="addTeam-top">
          <div className="sm-mapping">
            <span>Manage Users</span>
            <span>
              <img src={smallright} alt="right-ar" />
            </span>
            <span>Teams </span>
            <span>
              <img src={smallright} alt="right-ar" />
            </span>
            <span>Add Team</span>
          </div>

          <div className="main-title">
            <h4>Add Team</h4>
          </div>
        </div>
        {/* page-map location end */}

        {/* form starts here */}
        <form>
          <div className="basic-info">
            <h4>Basic Information</h4>
            <div className="personal-info">
              <div className="team-name">
                <h5>Team Name</h5>
                <input type="text" placeholder="Enter Team Name" />
              </div>
              <div className="team-password">
                <h5>Team Password</h5>
                <input type="password" placeholder="Team Password" />
              </div>
            </div>
          </div>

          {/* members column starts here */}
          <div className="members">
            <div className="members-title">
              <h4>Members</h4>
            </div>
            <div className="right__team_member">
              <div className="selectMenu-title">
                <h5>Team Members</h5>
              </div>
              <div className="selectMenu">
                <select id="select">
                  <option
                    value="Select Employees"
                    id="disabled_select"
                    disabled
                    selected
                  >
                    Select Employees
                    <div className="left__select">
                      <img src={down_ar} alt="down_arr" />
                    </div>
                  </option>
                  <option value="John">
                    <div className="left__select">
                      <h5>John Doe</h5> <span>Electrical</span>
                    </div>
                    <div className="right__select">Not Available</div>
                  </option>
                  <option value="Marcus">
                    <div className="left__select">
                      <h5>Marcus Brownlee</h5> <span>Painting</span>
                    </div>
                    <div className="right__select">Not Available</div>
                  </option>
                  <option value="Jane">
                    <div className="left__select">
                      <h5>Jane Jackson</h5> <span>Blasting</span>
                    </div>
                    <div className="right__select">Not Available</div>
                  </option>
                  <option value="Thomas">
                    <div className="left__select">
                      <h5>Thomas Humfrey</h5> <span>Electrical</span>
                    </div>
                    <div className="right__select">Not Available</div>
                  </option>
                </select>
              </div>
              {/* select employee ends here */}

              <div className="billable_hours">
                <div className="billable_hours_title">
                  <h5>Billable Hours</h5>
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
                <div className="print_button button_qr">
                  <button>
                    <img src={printer} alt="printer" /> Print
                  </button>
                </div>

                <div className="download_button button_qr">
                  <button>
                    <img src={download} alt="download" /> Download
                  </button>
                </div>
              </div>
            </div>
            {/* right_side qr container ends here */}
          </div>
        </form>

        <div className="save_footer">
          <button className="save_button orange_button">Save</button>
        </div>
      </div>
    </>
  );
};

export default Addteam;
