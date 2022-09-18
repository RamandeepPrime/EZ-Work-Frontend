import React,{useContext} from 'react';
import "./CustomTextBar.css"
import States from '../Context/Context';

const CustomTextBar = ({ tag, placeholder}) => {
	const context = useContext(States);
	const {width} = context;
	return (
		<div className='custom__text__bar'>
			<label>
				{tag}
				<div className={`input__bar ${width>1200?'':'margin-auto information-middle'}`}>
					<input type="text" name={tag}
						placeholder={placeholder} />
				</div>
			</label>

		</div>
	);
}

export default CustomTextBar
