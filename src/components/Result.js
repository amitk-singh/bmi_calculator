import React from 'react'

 const Result = (props) => {
    
  

    return (
        <div >
          

             <h4 style={style}>Body Mass index(BMI) = {props.value} kg/cm²</h4>
             <h4  className={props.statusColor}>{props.bmiStatus}</h4> 

           {/* <h1>{props.statusColor}</h1> */}
          
        </div>
    )
}




let style ={
    color:"white",
    fontWeight:"1px"
}

export default Result;