

import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
      }
      emailChange(e){
        this.setState({
            email: e.target.value
        })
      }
      passwordChange(e){
        this.setState({
            password: e.target.value
        })
      }
      onLogin(e){
        e.preventDefault();
        const login_auths = {
          email: this.state.email,
          password: this.state.password
        }
        let uri = 'http://127.0.0.1:8000/api/user/login';
        axios.post(uri, login_auths).then((response) => {
            if(response.data.success==0){
                alert(response.data.message);
            }
            else{
                alert(response.data.message+', You are the '+response.data.data.role.name);
            }
          
        });
      }
    
  render(){
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
            
                <h1>Login Form</h1>
                <form onSubmit={this.onLogin}>

                
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.emailChange}/>
                <input type="password" placeholder="Password" className="form-control" onChange={this.passwordChange}/>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
        </div>
      </div>
    )
  }
}
