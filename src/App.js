import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Baseball from './baseball.js'; 
//import baseballImg from './baseball.png';
import Basketball from './Basketball.js';
import Soccer from './soccer.js';  
import Header from './header.js'; 
import Content from './content.js'; 
import BigImage from './bigImage.js'; 
import Footer from './footer.js'; 

//<img src={baseballImg} alt="" /> 
class App extends Component {
	constructor(props)
	{
		  super(props);
		  this.classType = this.classType.bind(this); 
	}
	
	
  classType()
  {
	  
	  
	  console.log("in classType width is: " + screen.width); 
	  if (screen.width > 280)
	  {
		  return "tileContainerRow"; 
	  }
	  else
	  {
		  return "tileContainerVertical"
	  }
  }
	
  render() {
    return (
      <div className="App">
        
		<Header /> 
		<BigImage />
		<div className="tileContainer" >
			<Baseball /> 
			<Basketball /> 
			<Soccer /> 
		</div>
		
		<Content /> 
		<Footer /> 
		
      </div>
    );
  }
}

export default App;