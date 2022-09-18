import React,{useContext} from 'react'
import "./CustomNumberField.css"
import States from '../Context/Context';

const CustomNumberField = ({tag,placeholder}) => {
	const context = useContext(States);
	const {width} = context;
  return (
	<div className='custom__text__bar'>
			<label>
				{tag}
				<div className={`input__bar ${width>1200?'':'margin-auto information-middle'}`}>
					<div className="input__bar input__bar__code">
					<select>
						<option value="">code</option>
					</select>
					</div>
					<input type="text" name={tag}
						placeholder={placeholder} />
				</div>
			</label>

		</div>
  )
}

export default CustomNumberField