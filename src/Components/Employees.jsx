import React, { useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import img from "../Assests/Images/Bin1.png";
import edit from "../Assests/Images/Edit1.png";
import view from "../Assests/Images/view.png";

import { useNavigate } from "react-router-dom";
import DeleteEmployee from "./DeleteEmployee";
import Viewbar from "./Viewbar";

const Employees = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const modalClose = () => {
    console.log("object");
    setShowModal(false);
  };

  const [showViewbar, setShowViewbar] = useState(false);
  const CloseBar = () => {
    setShowViewbar(false);
  };

  return (
    <div className="table">
      <div className="tableTop">
        <button
          onClick={() => navigate("/")}
          className="topButton"
          id="topButton_teams"
        >
          Teams
        </button>
        <button className="topButton" id="emp_topButton">
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
        </div>
        <div>
          <button
            style={{ textDecoration: "none" }}
            className="add_team_btn btn-primary add_employee_btn"
            onClick={() => {
              navigate("/addemployee");
            }}
          >
            <AiOutlinePlus />
            Add employee
          </button>
        </div>
      </div>

      <hr className="hrtag" />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Current Team</th>
            <th>Mobile number</th>
            <th>Email Address</th>
            <th>Designation</th>
            <th>Billable Hours</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>David Doe</td>
            <td>Fabrication Team 1</td>
            <td>+61 8343 2342</td>
            <td>david33@gmail.com</td>
            <td>Electrical</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div
                  className="action_view"
                  onClick={() => {
                    setShowViewbar(true);
                  }}
                >
                  <img src={view} alt="view" />
                  {showViewbar && <Viewbar CloseBar={CloseBar} />}
                </div>
                <div
                  className="action_edit"
                  onClick={() => navigate("/editEmployee")}
                >
                  <img src={edit} alt="edit" />
                </div>
                <div className="action_bin" onClick={() => setShowModal(true)}>
                  <img src={img} alt="bin" />
                  {showModal && <DeleteEmployee ModalClose={modalClose} />}
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>02</td>
            <td>Oliver Smith</td>
            <td>Available</td>
            <td>+61 3213 1313</td>
            <td>oliver3@gmail.com</td>
            <td>Fabricator</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div className="action_view">
                  <img src={view} alt="view" />
                </div>
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
            <td>03</td>
            <td>Noah Williams</td>
            <td>Paint Team 1</td>
            <td>+61 3342 2422</td>
            <td>Noah@gmail.com</td>
            <td>Electrical</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div className="action_view">
                  <img src={view} alt="view" />
                </div>
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
            <td>04</td>
            <td>Jack Brown</td>
            <td>Fabrication Team 1</td>
            <td>+61 9248 4545</td>
            <td>jackma@gmail.com</td>
            <td>Fabricator</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div className="action_view">
                  <img src={view} alt="view" />
                </div>
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
            <td>05</td>
            <td>Henry Smith</td>
            <td>Fabrication Team 1</td>
            <td>+61 3321 9375</td>
            <td>fabrihen@gmail.com</td>
            <td>Fabricator</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div className="action_view">
                  <img src={view} alt="view" />
                </div>
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
            <td>06</td>
            <td>William John</td>
            <td>Blasting Team 1</td>
            <td>+61 8376 3974</td>
            <td>William@gmail.com</td>
            <td>Electrical</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div className="action_view">
                  <img src={view} alt="view" />
                </div>
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
            <td>07</td>
            <td>David Doe</td>
            <td>Blasting Team 1</td>
            <td>+61 2983 3424</td>
            <td>daviddo@gmail.com</td>
            <td>Paint</td>
            <td>40 hours/week</td>
            <td className="actions-data">
              <div className="action employee_action">
                <div className="action_view">
                  <img src={view} alt="view" />
                </div>
                <div className="action_edit">
                  <img src={edit} alt="edit" />
                </div>
                <div className="action_bin">
                  <img src={img} alt="bin" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
