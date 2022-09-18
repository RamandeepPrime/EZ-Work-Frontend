import React from 'react'
import "./Sidebar.css"

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__firsticon">
        <img src={process.env.PUBLIC_URL + "/assets/Assignment Nav.svg"} width="56px"
	height="56px" />
      </div>
      <div className="sidebar__second">
        <img src={process.env.PUBLIC_URL + "/assets/Icon feather-message-square.svg"}  />
      </div>
    </div>
  )
}

export default sidebar