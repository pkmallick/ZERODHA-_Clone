/*import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;*/

import React from "react";
import Menu from "./Menu";

const TopBar = () => {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="topbar-container">

      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* Menu */}
      <Menu />

      {/* Logout Button */}
      <button
        onClick={logout}
        style={{
          marginLeft: "20px",
          padding: "6px 12px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  );
};

export default TopBar;