import React, { useState } from "react";
import { AiOutlineSearch, AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import img from "../Assests/Images/Bin1.png";
import edit from "../Assests/Images/Edit1.png";
import qr from "../Assests/Images/QR code.jpg";

import { useNavigate } from "react-router-dom";
import DeleteTeam from "./DeleteTeam";
import Filterlist from "./Filterlist";

const Teams = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false); //to show delete container

  const [showFilter, setShowFilter] = useState(false); //to show filter container

  const closeModal = () => setShowModal(false);

  const closeFilter = () => setShowFilter(false);

  return (
    <div className="table">
      <div className="tableTop">
        <button className="topButton" id="teams_topButton">
          Teams
        </button>
        <button
          className="topButton"
          onClick={() => navigate("/employees")}
          id="topButton_emp"
        >
          Employees
        </button>
      </div>

      <div className="tableBottom">
        <div className="filter">
          <div>
            <button className="search btn-primary">
              <AiOutlineSearch />
              <input type="text" placeholder="Search item" id="search-item" />
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="filterBtn "
              onClick={() => {
                setShowFilter(true);
              }}
            >
              <AiFillFilter />
              Filter
            </button>
            {showFilter && <Filterlist displayFilter={closeFilter} />}
          </div>
        </div>
        <div>
          <button
            className="add_team_btn btn-primary-add "
            style={{ textDecoration: "none" }}
            onClick={() => {
              navigate("/addteam");
            }}
          >
            <AiOutlinePlus />
            Add team
          </button>
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
                <div
                  onClick={() => navigate("/editTeam")}
                  className="action_edit"
                >
                  <img src={edit} alt="edit" />
                </div>
                <div className="action_bin" onClick={() => setShowModal(true)}>
                  <img src={img} alt="bin" />
                </div>
                {showModal && <DeleteTeam closeModal={closeModal} />}
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
              <div
                onClick={() => navigate("/editTeam")}
                className="action_edit"
              >
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin" onClick={() => setShowModal(true)}>
                <img src={img} alt="bin" />
              </div>
              {showModal && <DeleteTeam closeModal={closeModal} />}
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
              <div
                onClick={() => navigate("/editTeam")}
                className="action_edit"
              >
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin" onClick={() => setShowModal(true)}>
                <img src={img} alt="bin" />
              </div>
              {showModal && <DeleteTeam closeModal={closeModal} />}
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
              <div
                onClick={() => navigate("/editTeam")}
                className="action_edit"
              >
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin" onClick={() => setShowModal(true)}>
                <img src={img} alt="bin" />
              </div>
              {showModal && <DeleteTeam closeModal={closeModal} />}
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
              <div
                onClick={() => navigate("/editTeam")}
                className="action_edit"
              >
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin" onClick={() => setShowModal(true)}>
                <img src={img} alt="bin" />
              </div>
              {showModal && <DeleteTeam closeModal={closeModal} />}
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
              <div
                onClick={() => navigate("/editTeam")}
                className="action_edit"
              >
                <img src={edit} alt="edit" />
              </div>
              <div className="action_bin" onClick={() => setShowModal(true)}>
                <img src={img} alt="bin" />
              </div>
              {showModal && <DeleteTeam closeModal={closeModal} />}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
