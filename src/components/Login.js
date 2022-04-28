import React, {Component} from 'react'; 
class Login extends Component {
    constructor(props) { 
        super(props); 
    }

    handleNameChanged(event){
        var name = event.target.value;
        this.setState({username: name})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.setLoggedIn(true);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                <p>Username</p>
                <input type="text" id="username" onChange={this.handleNameChanged.bind(this)}/>	
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    };

    
}

    
 
export default Login;
