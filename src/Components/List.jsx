import React from "react";
import { AiOutlineSearch, AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import img from "../Assests/Images/Bin1.png";
import edit from "../Assests/Images/Edit1.png";
import qr from "../Assests/Images/QR code.jpg";

import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="list">
      <div className="listTop">
        <button className="topButton">Teams</button>
        <button className="topButton">Employees</button>
      </div>
      <hr className="hrtag" />

      <div className="listBottom">
        <div className="filter">
          <div>
            <button className="search btn-primary">
              <AiOutlineSearch />
              <input type="text" placeholder="Search item" id="search-item" />
            </button>
          </div>
          <div>
            <button type="submit" className="filterBtn">
              <AiFillFilter />
              Filter
            </button>
          </div>
        </div>
        <div>
          <Link to="/addteam" style={{ textDecoration: "none" }}>
            <button className="add_team_btn btn-primary">
              <AiOutlinePlus />
              Add team
            </button>
          </Link>
        </div>
      </div>

      <hr className="hrtag" />

      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Members</th>
            <th>QR Details</th>
            <th>Total Man Hours</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Fabrication Team</td>
            <td>Lucas White , Thomas Wilson & 15 more</td>
            <td className="qr-code">
              <img src={qr} alt="qr" />
            </td>
            <td>27,000</td>
            <td>
              <div className="action">
                <div className="action_edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="action_bin">
                  <img src={img} alt="bin" />
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>Fabrication Team 1</td>
            <td>Charlie Brown, Thomas Clark & 15 more</td>
            <td className="qr-code">
              <img src={qr} alt="qr" />
            </td>
            <td>27,000</td>
            <td className="action">
              <div className="action_edit">
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin">
                <img src={img} alt="bin" />
              </div>
            </td>
          </tr>

          <tr>
            <td>Licensing Team 1</td>
            <td>Mia White, Lucas Anderson & 15 more</td>
            <td className="qr-code">
              <img src={qr} alt="qr" />
            </td>
            <td>27,000</td>
            <td className="action">
              <div className="action_edit">
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin">
                <img src={img} alt="bin" />
              </div>
            </td>
          </tr>

          <tr>
            <td>Licensing Team 2</td>
            <td>Levi Roberts, Luca Hall & 15 more</td>
            <td className="qr-code">
              <img src={qr} alt="qr" />
            </td>
            <td>27,000</td>
            <td className="action">
              <div className="action_edit">
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin">
                <img src={img} alt="bin" />
              </div>
            </td>
          </tr>

          <tr>
            <td>Invoicing Team 2</td>
            <td>Harry McDonald, Ethan Robinson & 15 more</td>
            <td className="qr-code">
              <img src={qr} alt="qr" />
            </td>
            <td>27,000</td>
            <td className="action">
              <div className="action_edit">
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin">
                <img src={img} alt="bin" />
              </div>
            </td>
          </tr>

          <tr>
            <td>Licensing Team 2</td>
            <td>Levi Roberts, Luca Hall & 15 more</td>
            <td className="qr-code">
              <img src={qr} alt="qr" />
            </td>
            <td>27,000</td>
            <td className="action">
              <div className="action_edit">
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin">
                <img src={img} alt="bin" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
