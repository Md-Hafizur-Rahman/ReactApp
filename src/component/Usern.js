import React from "react";
import Guest from "./unuser";
export default class User extends React.Component {
    render(){
        return(
            <div>
                <h3>User</h3>
                <Guest/>
            </div>
        );
    }
}