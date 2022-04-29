import React, {Component} from 'react'; 
class Login extends Component {
    constructor(props) { 
        super(props); 
    }

    handleNameChanged(event){
        var name = event.target.value;
        this.setState({username: name})
    }

    handlePassChanged(event){
        var pass = event.target.value;
        this.setState({password: pass})
    }

    handleSubmit(event){

        event.preventDefault();
        fetch("http://judah.cedarville.edu/~jthomas/vJosh/proj5/login.php", {
            // Adding method type
            method: "POST",
            //mode: 'no-cors',
            // Adding body or contents to send
            body: JSON.stringify({
                'username': this.state.username,
                'password': this.state.password,
                'action': "login",
            })
        })
        .then(response => response.json())
	    .then(data => {
            if(data.result){
                this.props.setUser(data.userId);
                this.props.setLoggedIn(true);
            }
        });

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                <p>Username</p>
                <input type="text" id="username" name="username" onChange={this.handleNameChanged.bind(this)}/>	
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={this.handlePassChanged.bind(this)} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    };

    
}

    
 
export default Login;
