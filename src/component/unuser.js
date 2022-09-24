import React from "react";
import { Context } from "../App";
export default class Guest extends React.Component{
    render(){
        return(
            <div>
               <h3>Guest</h3>
                <Context.Consumer>
                   {data=>(<p>{data}</p>)}
                </Context.Consumer> 
            </div>
        );
    }
}