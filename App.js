import React from 'react';
import {MemoryRouter as Router,Switch,Route, Redirect,BrowserRouter} from "react-router-dom";

import {myData as data} from "./data";
import MiniDrawer  from "./MiniDrawer";
// import { Switch } from '@material-ui/core';

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            lightStyle:{
                backgroundColor:"#fafafa", //#170000,
                transition:".7s ease-out",
                toggle:true,
            },
            data:data,
            header:"HOME",
            selectedSection:[
                {
                id:null,
                header:null,
                paragraph:null,
                img:null
            
            }]

        }
    };
   
    handleLight=()=>{
        this.setState(prevState=>({
            lightStyle:{
                ...prevState.lightStyle,
                backgroundColor:this.state.lightStyle.toggle ? "#170000":"#fafafa",
                transition:"1s ease",
                toggle:!prevState.lightStyle.toggle,
            }
        }))
    };
    handleHeader=(header)=>{
        console.log(header)
        this.setState({
            header:header
        })
    }
    render(){
        return (
          <div>
            {/* <Router> */}
            {/* <Route path="/" render={()=> <div></div>}/> */}
            {/* <Switch> */}
            {/* <Redirect to="/home" /> */}
            {/* <Route  path="/home" render={()=> */}
                <MiniDrawer header={this.state.header}
                            handleHeader={this.handleHeader}
                            lightStyle={this.state.lightStyle}      
                            lightClick={this.handleLight}
                            image={this.state.data.cv}
                            projects={this.state.data.projects}
                            imgAbout={this.state.data.avatar}
                            skills={this.state.data.skills}
                            
                />
            {/* }/> */}
            {/* </Switch>     */}
            {/* </Router> */}
          </div>
        );
      }
};

