import React from 'react'; 
import logo from './logo.jpg'; 
import './logo.css'; 


class Header extends React.Component{
	render()
	{
		return(
			<div className="header"> 
				<img className="logo" src={logo} alt=""/> 
				 
			</div> 
		)
	}	
	
}

export default Header; 