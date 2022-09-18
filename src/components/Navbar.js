import React,{useContext} from 'react'
import States from '../Context/Context';
import "./Navbar.css"
import profile_pic from "../assets/female-face-girl-posing-outdoors-in-natural-light_f0dboln (1).png"
import logo from "../assets/logo.webp"


const Navbar = () => {
  const context = useContext(States);
  const {width} = context;
  return (
	<div className="navbar">
    <div className="navbar__left">
      <img src={logo} width="50px" height="50px"/>
      {width>1000 &&<div className="navbar__left__text">
        Account
      </div>}
    </div>
    <div className="navbar__right">
      <div className="navbar__right__text">
        Hi Dana,
      </div>
      <div className="navbar__right__image">
      <img src={profile_pic}
						width="50px" height="50px"/>
      </div>
    </div>
  </div>
  )
}

export default Navbar