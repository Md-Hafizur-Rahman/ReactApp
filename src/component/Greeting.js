import React from "react";
import UserGreeting from "./User";
import GuestGreeting from "./Gest";

const Greeting=props=>{
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }

export default Greeting;
