

import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {username:'', email: '', password: '', role:'', country:'', city:''};
        this.userChange = this.userChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.roleChange = this.roleChange.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
      }
      userChange(e){
        this.setState({
            username: e.target.value
        })
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
      roleChange(e){
        this.setState({
            role: e.target.value
        })
      }
      countryChange(e){
        this.setState({
            country: e.target.value
        })
      }
      cityChange(e){
        this.setState({
            city: e.target.value
        })
      }
      onRegister(e){
        e.preventDefault();
        const login_auths = {
         username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          role: this.state.role,
          country: this.state.country,
          city: this.state.city,
        }
        let uri = 'http://127.0.0.1:8000/api/user/register';
        axios.post(uri, login_auths).then((response) => {
            if(response.data.success==0){
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
                window.location.reload();
            }
          
        });
      }
    
  render(){
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
            
                <h1>Register Form</h1>
                <form onSubmit={this.onRegister}>

                <input type="text" placeholder="User Name" className="form-control" onChange={this.userChange}/>
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.emailChange}/>
                <input type="password" placeholder="Password" className="form-control" onChange={this.passwordChange}/>
                <select className="form-control" onChange={this.roleChange}>
                    <option value="">Select Role</option>
                    <option value="1">Student</option>
                    <option value="2">Teacher</option>
                    <option value="3">Institude</option>
                </select>
                <input type="text" placeholder="Country" className="form-control" onChange={this.countryChange}/>
                <input type="text" placeholder="City" className="form-control" onChange={this.cityChange}/>
                <button type="submit" className="btn btn-primary">Register</button>
                </form>
        </div>
      </div>
    )
  }
}




