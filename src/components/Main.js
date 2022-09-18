import React,{useContext} from 'react'
import "./Main.css"
import MainLeft from './MainLeft'
import MainRight from './MainRight'
import States from '../Context/Context';


const Main = () => {
  const context = useContext(States);
  const {width, clicked} = context;
  return (
    <div className='main'>
      {(width>1000 || clicked) && <div className="main__left">

         <MainLeft/>

      </div>}

      {(width>1000 || !clicked) && <div className="main__right">

        <MainRight />
  
      </div>}
      
    </div>
  )
}

export default Main