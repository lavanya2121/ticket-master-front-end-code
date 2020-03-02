//here both register and login are class components becoz it is a form

import React from 'react'
import {connect } from 'react-redux'
import { startRegister } from '../actions/userAction';
import Swal from 'sweetalert2'


class Register extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            email:'',
            password:'',
            //confirmPassword:'',
            //showPassword:false
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
            username:this.state.username,
            password:this.state.password,
            email:this.state.email
        }
       // console.log(formData)
        //this.props.dispatch(startRegister(formData,redirect))//redirect is a function which is passed as an arguement to startRegister

        const redirect=()=>{//to go from one page to another page programatically--react-router-dom using history.push('specify the components url')
         return this.props.history.push('/users/login')
        }

        this.props.dispatch(startRegister(formData,redirect))//redirect is a higher order function (pass by reference)function which is passed as an arguement to startRegister

        //this.props.history.push('/users/login')//we need to go to this page once we get the success response from the server
        //now we are sending the formdata to the server in action creator
    }

    render(){
        return(
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>

                {/* username input field */}
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" 
                value={this.state.username} onChange={this.handleChange}/><br/>

             {/* email input field */}
             <label htmlFor="email">email:</label>
                <input type="text" id="email" name="email" 
                value={this.state.email} onChange={this.handleChange}/><br/>

                {/* password input field */}
             <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" 
                value={this.state.password} onChange={this.handleChange}/><br/>

                 {/* submit input field */}
                 <input type="submit" value="Register"/>

            {/*this form data we need to send to the server-->that part we do it inside action generator*/}
                </form>
            </div>
        )

        
    }

}

export default connect()(Register)