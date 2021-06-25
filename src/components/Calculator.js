import React, { Component } from 'react'


 class Calculator extends Component {
   state ={
        height:25,
        weight:1
   }

   handleChange = (e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
   }

   

   bmiResult = (e)=>{
       e.preventDefault();
       let {height ,weight}= this.state;
       let bmiValue = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
       console.log(height,weight);
       return this.props.report(bmiValue,this.getBmiClass(bmiValue))
   }

   getBmiClass = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue >= 18.5 && bmiValue <= 24.9) return 'Normal Weight';
    if (bmiValue >= 25 && bmiValue <= 29.9) return 'Overweight';
    if (bmiValue >= 30) return 'Obese';
  }

    render() {
        return (
            <div>
    <form onSubmit={this.bmiResult}>          
     <div style={{marginBottom:"10px"}}>
        <label style={fontColor} for="height">Height : {this.state.height} cm</label>
        <input  style={{backgroundColor:"red",overflow:"hidden"}} type="range" name="height" onChange={this.handleChange} min={25} max={272}/>
      </div>
    
    <div style={{display:"block"}}>
       <label style={fontColor} for="weight">Weight : {this.state.weight} kg</label>
       <input style={inputStyle} type="range" name="weight" onChange={this.handleChange} min={1} max={1000}/>
    </div>
       <button style={{margin:"25px",padding:"10px"}} >CHECK</button>
    
    </form>
    </div>
        )
    }
}

let fontColor = {
  color:"white"
}

let inputStyle={
  color:"orange"
}

export default Calculator;