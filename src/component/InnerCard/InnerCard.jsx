import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./innercard.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

const InnerCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log(open);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="innercard">
      <div className="innercard__header">
        <div className="innercard__header__left">
          <Avatar
            alt="Profile pic"
            src="https://avatars.githubusercontent.com/u/65569156?v=4"
          />
          <div className="person__details">
            <div className="person__details__left">
              <div className="name">Prashant Srivastava</div>
              <div className="job__role">Full Stack Developer</div>
            </div>
            <div className="person__details__right">
              <VerifiedIcon className="verified" />
            </div>
          </div>
        </div>
        <div className="innercard__header__right">
          
          <div
            className="dot"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            •••
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}><SaveAltOutlinedIcon/> <span style={{marginLeft:"8px"}}> Save  </span></MenuItem>
            <MenuItem onClick={handleClose}><AddOutlinedIcon/><span style={{marginLeft:"6px"}}> Follow </span></MenuItem>
            <MenuItem onClick={handleClose}><BlockOutlinedIcon style={{color:"rgb(159, 48, 48)"}}/><span style={{marginLeft:"8px"}}> Block </span></MenuItem>
            <MenuItem onClick={handleClose}><ReportGmailerrorredOutlinedIcon style={{color:"rgb(159, 48, 48)"}}/><span style={{marginLeft:"8px"}}> Report </span></MenuItem>
          </Menu>
        </div>
      </div>
      <div className="innercard__title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit?
        <br />
      </div>
      <div className="innercard__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        similique culpa, fugit mollitia neque natus amet aperiam repellat,
        quidem laudantium voluptas tempore molestiae, nostrum impedit.
        <br />
      </div>
      <div className="innercard__footer">
        <div className="innercar__footer__left">
          <button>Like 201</button>
          <button>Views 12k</button>
        </div>
        <div className="innercar__footer__right">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default InnerCard;
