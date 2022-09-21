import React from "react";
const Welcome=props=>{

  const numbers = props.numbers;
  const listItems = numbers.map((number,index) => 
    <li key={index}>{number}</li>
  );
  return (
    <div>
      <h1>Helo {props.name}-{props.lastname}</h1>
      <ul>{listItems}</ul>
    </div>
    
  );
}

export default Welcome;