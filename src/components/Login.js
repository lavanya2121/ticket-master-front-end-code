//here both register and login are class components becoz it is a form

import React from 'react'
import {connect } from 'react-redux'
import { startLogin } from '../actions/userAction';


class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            //setState() becoz we are doing redux and not react
            [e.target.name]:e.target.value

        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            password:this.state.password,
            email:this.state.email
        }
        const redirect=()=>this.props.history.push('/')
        this.props.dispatch(startLogin(formData,redirect))
       
    }

    render(){
        return(
            <div>
                <h2>Login with us</h2>
                <form onSubmit={this.handleSubmit}>

             {/* email input field */}
             <label htmlFor="email">email:</label>
                <input type="text" id="email" name="email" 
                value={this.state.email} onChange={this.handleChange}/><br/>

                {/* password input field */}
             <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" 
                value={this.state.password} onChange={this.handleChange}/><br/>

                 {/* submit input field */}
                 <input type="submit" value="Login"/>

            {/*this form data we need to send to the server-->that part we do it inside action generator*/}
                </form>
            </div>
        )

        
    }

}

export default connect()(Login)