import React, { useState } from "react";
import "./Header.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Form from "../Form/Form";

const Header = (props) => {
  const [selected, setSelected] = useState(false);
  const newHandler = () => {
    setSelected(!selected);
  };
  const getSubmitHandler = (name, profession, title, description) => {
    props.getSubmitHandlerOut(name, profession, title, description);
  }


  return (
    <>
      <div className="header">
        <div className="header__left">
          <div className="header__left__first">
            <button className="btn olive">Write-ups</button>
            <button className="btn">Forums</button>
          </div>
          <div className="header__left__second" onClick={newHandler}>
            <button className="btn newbtn">
              <div className="new">New</div>
              <div className="listbtn">
                <PlaylistAddIcon />
              </div>
            </button>
          </div>
        </div>
        <div className="header__right">Check OUT More Write-Ups</div>
      </div>
      <div className="form">
       {selected && <Form onSubmitHandler={getSubmitHandler}/>}
      </div>
    </>
  );
};

export default Header;
