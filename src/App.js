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
            userID: null,
            planId: -1
        };
        this.setLoggedIn = this.setLoggedIn.bind(this);
        this.setUser = this.setUser.bind(this);
        this.planChanged = this.planChanged.bind(this);
        this.child = React.createRef()
    }  

    setLoggedIn(tf){
        this.setState({isLoggedIn: tf});
    }

    setUser(usrID){
        this.setState({userID: usrID});
    }

    planChanged(id){
        this.setState({planId: id});
        console.log(id);
        this.child.current.update();
    }

 
    render(){ 
        return ( 
            <div className="wrapper"> 
                {this.state.isLoggedIn && <Ape ref={this.child} planId={this.state.planId} user={this.state.userID} setLoggedIn = {this.setLoggedIn} setUser = {this.setUser} planChanged={this.planChanged}/>}
                {! this.state.isLoggedIn && <Login setLoggedIn = {this.setLoggedIn} setUser = {this.setUser}/>}	 
            </div> 
        ); 
    }

} 
 
export default App;
