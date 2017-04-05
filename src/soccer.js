import React from 'react'; 
import soccerBallImg from './soccerBall.png'; 
import './tiles.css'; 

class Soccer extends React.Component{
	render()
	{
		return(
			<div className="container">
				<img className="ball" src={soccerBallImg} alt="" /> 
				<h1>Soccer</h1>
				<p>Soccer is a sport where you lie down on the ground and cry </p>
			</div> 
		)
	}
}

export default Soccer; 