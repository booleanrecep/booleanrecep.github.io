import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route,Redirect} from "react-router-dom"
ReactDOM.render(
   <BrowserRouter>
       <Route path="/" component={App} />
       {/* <Route path="*" component={()=>"404 NO WAY"}/> */}
   </BrowserRouter>
    ,
     document.getElementById('root')
);

