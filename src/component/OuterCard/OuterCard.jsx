import React from 'react'
import Header from '../Header/Header'
import InnerCard from '../InnerCard/InnerCard'
import './OuterCard.css'

const OuterCard = (props) => {
  const getHandlerOut = (name, profession, title, description) => {

    const data ={
      Username : name,
      Userprofession : profession,
      Usertitle : title,
      Userdescription : description,
      id : Math.random()
  }
    props.onAddUser(data);
  }
  return (
    <div className="outercard">
      <Header getSubmitHandlerOut={getHandlerOut}/>
      <div className="cards">
        {props.data.map((item)=>
        <InnerCard
          Username={item.Username}
          Userprofession={item.Userprofession}
          Usertitle={item.Usertitle}
          Userdescription={item.Userdescription}
          key={Math.random()}
        />)}
      </div>
    </div>
  )
}

export default OuterCard