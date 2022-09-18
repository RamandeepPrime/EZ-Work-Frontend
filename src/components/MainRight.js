import CustomTextBar from './CustomTextBar'
import CustomNumberField from './CustomNumberField'
import "./MainRight.css"
import React,{useContext} from 'react'
import States from '../Context/Context';
import Footbar from './Footbar';


const MainRight = () => {
	const context = useContext(States);
	const {width, onClick} = context;
	const info = {
		FirstName: {
			tag: "First Name",
			placeholder: "First Name"
		},
		LastName: {
			tag: "Last Name",
			placeholder: "Last Name"
		},
		EmailAddress: {
			tag: "Email",
			placeholder: "Email Address"
		},
		Organization: {
			tag: "Organization",
			placeholder: "Organization Name"
		}
	}
	
	const numbers = ["Phone Number", "WhatsApp Number"]
	return (
		<>	
			<div className="main__right__container">
				<div className="topbar pointer" onClick={onClick}>
					&#8678; Profile Information 
				</div>
				<div className={`main_container ${(width<1200)&&'flex-direction-column'} ${width<765 && 'mobile__main__right'}`}>
					<div className={`profile_pic ${width<1200?'margin-auto mobile__profile_pic':''}`}>
						{width>1200 && <img src={process.env.PUBLIC_URL + "assets/female-face-girl-posing-outdoors-in-natural-light_f0dboln (1).png"}
							width="238px"
							height="238px"
						/>
						}
						{width<1200 &&
						<img src={process.env.PUBLIC_URL + "assets/female-face-girl-posing-outdoors-in-natural-light_f0dboln (1).png"}
							width="162px"
							height="162px"
						/>
						}
						<div className={`edit ${width<1200 && 'mobile__edit'}`}>

							<img src={process.env.PUBLIC_URL + "assets/Icon material-edit.svg"} />
						</div>
					</div>
					<div className={`information information-middle`}>


						{Object.keys(info).map((key) => {
							const tag = info[key]["tag"];
							const placeholder = info[key]["placeholder"];
							return <CustomTextBar tag={tag} placeholder={placeholder} />
						})}

						{numbers.map(key =>
							<CustomNumberField tag={key} placeholder='Number' code='code' />
						)}


					</div>
					<div className={`buttons ${(width<1200)?'flex-direction-row space-between':''}`}>
						<div className="btn cancel">cancel</div>
						<div className="btn save">save</div>
					</div>
				</div>
				<div className="footbar">
				{width<701 && <Footbar/>}

			</div>
			</div>
		</>
	)
}

export default MainRight