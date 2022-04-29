import React, {Component, useImperativeHandle} from 'react'; 
import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Ape from './Ape'; 
import Login from './components/Login'; 
 
class App extends Component {  
    constructor(props) {  
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: null
        };
        this.setLoggedIn = this.setLoggedIn.bind(this);
        this.setUser = this.setUser.bind(this);
    }  

    setLoggedIn(tf){
        this.setState({isLoggedIn: tf});
    }

    setUser(usrID){
        this.setState({userID: usrID});
    }

 
    render(){ 
        return ( 
            <div className="wrapper"> 
                {this.state.isLoggedIn && <Ape user={this.state.userID} setLoggedIn = {this.setLoggedIn} setUser = {this.setUser}/>}
                {! this.state.isLoggedIn && <Login setLoggedIn = {this.setLoggedIn} setUser = {this.setUser}/>}	 
            </div> 
        ); 
    }

} 
 
export default App;
