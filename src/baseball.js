import React from 'react'; 
import baseballImg from './baseball.png'; 
import './tiles.css'; 
//<img src={baseballImg} alt=""/>
class Baseball extends React.Component{
	//constructor(props)
	//{
	//	super(props); 
		
	//}
	
	render()
	{
		return(
		 <div className="container">
			<img className="ball" src={baseballImg} alt=""/>
			<h1>Baseball</h1>
			<p>Baseball is a sport where you hit balls with a bat</p>
		 </div>
		)
	}
}

export default Baseball; 