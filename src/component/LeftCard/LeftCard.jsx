import React, {  useState } from 'react'
import './LeftCard.css'
import LightbulbCircleOutlinedIcon from '@mui/icons-material/LightbulbCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const LeftCard = () => {
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(true)
  const [selected4, setSelected4] = useState(false)
  const handelClick1 = () => {
    setSelected1(!selected1);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
  }
  const handelClick2 = () => {
    setSelected2(!selected2);
    setSelected1(false);
    setSelected3(false);
    setSelected4(false);
  }
  const handelClick3 = () => {
    setSelected3(!selected3);
    setSelected1(false);
    setSelected2(false);
    setSelected4(false);
  }
  const handelClick4 = () => {
    setSelected4(!selected4);
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
  }
  return (
    <div className="leftcard">
        <div className={`leftcard__header ${selected1 && "addnote"}`} onClick={handelClick1}><LightbulbCircleOutlinedIcon/></div>
        <div className={`leftcard__header ${selected2 && "addnote"}`} onClick={handelClick2}><AddOutlinedIcon/></div>
        <div className={`leftcard__header ${selected3 && "addnote"}`} onClick={handelClick3}><NoteAddOutlinedIcon/></div>
        <div className={`leftcard__header ${selected4 && "addnote"}`} onClick={handelClick4}><NotificationsNoneOutlinedIcon/></div>
    </div>
  )
}

export default LeftCard