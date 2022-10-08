import React from 'react'
import Header from '../Header/Header'
import InnerCard from '../InnerCard/InnerCard'
import './OuterCard.css'

const OuterCard = () => {
  return (
    <div className="outercard">
      <Header/>
      <div className="cards">
        <InnerCard/>
        <InnerCard/>
        <InnerCard/>
        <InnerCard/>
        <InnerCard/>
        <InnerCard/>
      </div>
    </div>
  )
}

export default OuterCard