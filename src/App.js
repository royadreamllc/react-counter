import React, { Component } from 'react';
import Shape from "./Shape.js";
import "./App.css";

class Selector extends Component{
  constructor (){
    super();
    this.state= selectedShape: "square"
    }
  }
     render (){
       return(
selectShape= (selectShape)=>{
  this.setstate ({
    selectedShape:selectShape
  })
}
          <div className="container">
          <div className="navbar">
          <div> selected: <span> this.state.selectedShape</span></div>
          </div>
          <div className='shape-list'>
          <Shape shape="shape-list"/>

          <Shape  shape="circle"selectShape={this.selectShape/>
          <Shape  shape="circle"selectShape={this.selectShape/>
          <Shape  shape="square"selectShape={this.selectShape} />
          <Shape  shape="triangle"/>

         </div>
         </div>
       )
     }
}


export default Selector;
