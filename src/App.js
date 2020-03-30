import React from 'react';
import {MemoryRouter as Router,Route, Redirect} from "react-router-dom";

import {myData as data} from "./data";
import MiniDrawer  from "./MiniDrawer";

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            lightStyle:{
                backgroundColor:"#fafafa", //#170000,
                transition:"1s ease-out",
                toggle:true,
            },
            data:data,
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
    }
    render(){
        return (
          <div>
            <Router>
                {/* <Redirect to="/about" /> */}
                <Route path="/" render={()=>
                    <MiniDrawer header={this.state.selectedSection.header}
                                lightStyle={this.state.lightStyle}
                                lightClick={this.handleLight}
                                image={this.state.data.cv}
                                projects={this.state.data.projects}
                                imgAbout={this.state.data.avatar}
                                skills={this.state.data.skills}
                    />
                }/>
            </Router>
          </div>
        );
      }
};

