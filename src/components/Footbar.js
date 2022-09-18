import React from 'react'
import "./Footbar.css"

const Footbar = () => {
  return (
	<div className="footbar__icons">
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/Assignment Nav.svg"} width="56px"
		height="56px" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/assets/Icon feather-message-square.svg"}  />
      </div>
    </div>
  )
}

export default Footbar