import React,{ useEffect, useState, createContext} from 'react'
const States=createContext();

export const Context = ({children}) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [clicked, setClicked] = useState(true)
	useEffect(() => {
		
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
		
	},[])
	const onClick = () =>{
		console.log(clicked)
		setClicked(!clicked)
	}
  return (
	<States.Provider value={{width, setWidth, clicked, setClicked, onClick}}>
		{children}
	</States.Provider>
  )
}

export default States

