import React from 'react';
import basketballImg from './basketball.png';
import './tiles.css'; 

class Basketball extends React.Component{
	//constructor(props)
	//{
	//	super(props); 
	//}
	
	render()
	{
		return(
			<div className="container">
				<img className="ball" src={basketballImg} alt="" /> 
				<h1> Basketball </h1>
				<p> Basketball is a sport where you shoot balls at a basket </p> 
			</div>
		)
	}
}

export default Basketball;