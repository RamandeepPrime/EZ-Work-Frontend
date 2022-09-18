import React, { useContext } from 'react'
import "./MainLeft.css"
import States from '../Context/Context';
import Footbar from './Footbar';

const MainLeft = () => {
	const context = useContext(States);
	const { width, onClick } = context;
	return (
		
		<div className="main__left__container">
			{width<1000 && <div className="main__left__content1__mobile font__size__24" >
				Account
			</div>}
			<div className="main__left__content1 pointer" onClick={onClick}>
				Profile Information
			</div>
			<div className="main__left__content2">
				Change Password
			</div>
			<div className="footbar">
				{width<701 && <Footbar/>}

			</div>
		</div>
	)
}

export default MainLeft