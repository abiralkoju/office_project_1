import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import Teams from "./Components/Teams";
import Addteam from "./Components/Addteam";
import Addemployee from "./Components/Addemployee";
import Employees from "./Components/Employees";
import EditTeam from "./Components/EditTeam";
import EditEmployee from "./Components/EditEmployee";

import "./Styles/App.css";
import "./Styles/Sidebar.css";
import "./Styles/colors.css";
import "./Styles/Navbar.css";
import "./Styles/User.css";
import "./Styles/Teams.css";
import "./Styles/Addteam.css";
import "./Styles/Addemployee.css";
import "./Styles/Employees.css";
import "./Styles/DeleteTeam.css";
import "./Styles/Viewbar.css";
import "./Styles/EditTeam.css";

const MyRoutes = () => (
  <Router>
    <div className="viewport">
      <Sidebar />
      <div className="mainContent">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <User /> <Teams />{" "}
              </>
            }
          />
          <Route
            path="/employees"
            element={
              <>
                <User /> <Employees />{" "}
              </>
            }
          />
          <Route path="/addteam" element=<Addteam /> />
          <Route path="/addemployee" element=<Addemployee /> />
          <Route path="/editTeam" element=<EditTeam /> />
          <Route path="/editEmployee" element=<EditEmployee /> />
        </Routes>
      </div>
    </div>
  </Router>
);

export default MyRoutes;
