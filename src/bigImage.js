import React from 'react'; 
import bigImage from './homeRun.jpg'; 
import './bigImage.css';

class BigImage extends React.Component{
	render(){
		return(
			<div className="imageContainer" >
			<h4 className="imageText"> Home Run!!! </h4> 
				<img    src={bigImage} alt="" /> 
				
			</div>
		)
	}
}

export default BigImage; 