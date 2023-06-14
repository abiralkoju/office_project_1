import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import List from "./Components/List";
import Addteam from "./Components/Addteam";

import "./Styles/App.css";
import "./Styles/Sidebar.css";
import "./Styles/colors.css";
import "./Styles/Navbar.css";
import "./Styles/User.css";
import "./Styles/List.css";
import "./Styles/Addteam.css";

const MyRoutes = () => {
  return (
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
                  <User /> <List />{" "}
                </>
              }
            />
            <Route path="/addteam" element=<Addteam /> />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MyRoutes;
