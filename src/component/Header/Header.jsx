import React from "react";
import "./Header.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__first">
          <button className="btn olive">Write-ups</button>
          <button className="btn">Forums</button>
        </div>
        <div className="header__left__second">
          <button className="btn newbtn">
            <div className="new">New</div>
            <div className="listbtn">
              <PlaylistAddIcon  />
            </div>
          </button>
        </div>
      </div>
      <div className="header__right">Check OUT More Write-Ups</div>
    </div>
  );
};

export default Header;
