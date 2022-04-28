import React, {Component} from 'react'; 
import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Ape from './Ape'; 
import Login from './components/Login'; 
 
class App extends Component {  
    constructor(props) {  
        super(props);
        this.state = {
            isLoggedIn: false
         };
         this.setLoggedIn = this.setLoggedIn.bind(this)
    }  

    setLoggedIn(tf){
        this.setState({isLoggedIn: tf});
    }

 
    render(){ 
        return ( 
            <div className="wrapper"> 
                {this.state.isLoggedIn && <Ape setLoggedIn = {this.setLoggedIn}/>}
                {! this.state.isLoggedIn && <Login setLoggedIn = {this.setLoggedIn} />}	 
            </div> 
        ); 
    }

} 
 
export default App;
