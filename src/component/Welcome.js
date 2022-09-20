import React from "react";
const Welcome=props=>{
  return(
    <div>
      <h1>Name: {props.name} - {props.lastname}</h1>
      {props.children}
    </div>
  );
}
export default Welcome;