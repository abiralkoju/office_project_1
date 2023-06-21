import { useEffect } from "react";
import ReactDOM from "react-dom";

import crossBtn from "../Assests/Images/crossBtn.png";

const DeleteEmployee = ({ modalClose }) => {
  useEffect(() => {
    document.body.style = "hidden";
    return () => {
      document.body.style = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="main-container" onClick={modalClose}></div>
      <div className="content-wrapper">
        <div className="content-wrapper-flex">
          <h2>Delete Employee</h2>
          <p>
            Are you sure you want to delete Fabrication Team 1 from the list?
          </p>
          <div className="deleteButtons">
            <button id="deleteBtn" onClick={modalClose}>
              Delete
            </button>
            <button id="cancelBtn" onClick={modalClose}>
              Cancel
            </button>
          </div>
        </div>
        <button id="cross-btn" onClick={modalClose}>
          <img src={crossBtn} alt="cross" />
        </button>
      </div>
    </>,
    document.querySelector(".createPortaldiv")
  );
};

export default DeleteEmployee;
