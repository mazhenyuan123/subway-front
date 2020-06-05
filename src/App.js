import React, {Component} from 'react';

import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import './App.css';
import MyLayout2 from "./components/MyLayout2";
import MyLogin from "./components/MyLogin";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/home/Home";
import MyContent from "./components/component/MyContent";
import MyFile from "./components/component/MyFile";
class App extends Component{
  render(){
    return(
        <Router>
            <div className="App">
                <Route path="/login" component={MyLogin}/>
                <PrivateRoute path="/home" component={MyLayout2}/>
                <PrivateRoute path='/component1' component={MyLayout2}/>
                <PrivateRoute path='/component2' component={MyLayout2}/>
                <PrivateRoute path='/component3' component={MyLayout2}/>
                <PrivateRoute path='/ledger/' component={MyLayout2}/>
                <PrivateRoute path='/danger' component={MyLayout2}/>
                <PrivateRoute path='/warning' component={MyLayout2}/>
                <PrivateRoute path='/week' component={MyLayout2}/>
                <PrivateRoute path='/month/' component={MyLayout2}/>
                <PrivateRoute path='/year' component={MyLayout2}/>
                <PrivateRoute path='/all' component={MyLayout2}/>
            </div>
        </Router>
    )
  }
}


export default App;
