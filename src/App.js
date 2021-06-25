import React, { Component } from 'react'
import './App.css';
import Calculator from './components/Calculator';
import Result from './components/Result';

class App extends Component {

 state={
   value:10.5,
   status:"Normal Weight"
 }

 report = (val,bmiClass)=>{
   this.setState({
      value:val,
      status:bmiClass
   })
   console.log(bmiClass)
 }

statusColor = ()=>{
    let status = this.state.status;
   if(status === "Underweight"){
     return "Underweight"
   }
   else if(status === "Normal Weight"){
     return "Normal"
   }
   else if(status === "Overweight"){
    return "Overweight"
  }
  else {
    return "Obese"
  }
}

  render(){
  return (
    <div className="App">
     <div className="container" style={{width:"35%",margin:"0 auto"}} >
      <div style={{backgroundColor:"#f6830f"}}>
      <h2 style={{color:"#FFFFFF",marginBottom:"0",fontSize:"27px",padding:"10px",fontWeight:"8px"}}>BMI Healthy Weight Calculator</h2> 

      </div> 
     <div style={{backgroundColor:"#253238",border:"5px solid #f6830f"}}>
        <Result value={this.state.value} bmiStatus={this.state.status} statusColor={this.statusColor()} />
        <Calculator report={this.report} />
     </div>
     </div>
    </div>
  );
  }
}

export default App;
