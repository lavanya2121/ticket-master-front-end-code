// //we are making the form as an independent component becoz the same form can be used for adding n editing

// import React from 'react'
// import {withRouter} from 'react-router-dom'
// // import {startAddCustomers} from '../../actions/customersAction'
// import {connect } from 'react-redux'
// import { findCustomer } from '../../selectors/customerSelector';

// class CustomerForm extends React.Component{
//     constructor(props){
//         //console.log('customer form constructor',props)
//         super(props)
//         this.state={
//             //to get the form fields with prefilled data
//             name:props.customer? props.customer.name:'',//falsy value means set empty string,truthy value means set the name
//             email:props.customer? props.customer.email:'',
//             mobile:props.customer? props.customer.mobile:''

//         }
//     }

//     handleSubmit=(e)=>{
//         e.preventDefault();
//         const formData={
//             name:this.state.name,
//             email:this.state.email,
//             mobile:this.state.mobile
//         }
//        // console.log(formData)
//         //this formdata we need to send it to the server via action creator
//         //this.props.dispatch(startAddCustomers(formData))
//         this.props.handleSubmit(formData)//same method for both add n edit
//         //from form we are invoking a method defined in new component

//     }

//     handleChange=(e)=>{
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }

//     render(){
//         return(
//             <div>
//                 {/* <h2>Form goes here</h2> */}
//                 <form onSubmit={this.handleSubmit}>

//                 <label htmlFor="name">Name</label>
//                 <input type="text" value={this.state.name} name="name" id="name"
//                 onChange={this.handleChange }/><br/>

//                   <label htmlFor="email">Email</label>
//                 <input type="text" value={this.state.email} name="email" id="email"
//                 onChange={this.handleChange }/><br/>

//                   <label htmlFor="mobile">Mobile</label>
//                 <input type="text" value={this.state.mobile} name="mobile" id="mobile"
//                 onChange={this.handleChange }/><br/>

//                 <input type="submit" value="submit" />
//                 </form>
//             </div>
//         )
//     }
// }

// //to read data from the store
// const mapStateToProps=(state,props)=>{
//     console.log('form',props)
//     const id=props.match.params.id
//     return {
//         customer:findCustomer(state.customers,id)
//     }
// }

// export default withRouter(connect(mapStateToProps)(CustomerForm))

// //form component is embedded inside edit component n our form does not have access to history,location,n match so we need withRouter 


import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomer} from '../../selectors/customerSelector'

class CustomerForm extends React.Component{
    constructor(props){
        console.log('form props',props)
        super(props)
            this.state={
                name:props.customer? props.customer.name:'',
                email:props.customer? props.customer.email:'',
                mobile:props.customer? props.customer.mobile:''
            }
        }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.mobile
            }
            this.props.handleSubmit(formData)
        }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">name</label>
                <input type='text' value={this.state.name} name="name" 
                id="name" onChange={this.handleChange}/><br/>

                <label htmlFor="email">email</label>
                <input type='email' value={this.state.email} name="email" 
                id="email" onChange={this.handleChange}/><br/>

                <label htmlFor="mobile">mobile</label>
                <input type='text' value={this.state.mobile} name="mobile" 
                id="mobile" onChange={this.handleChange}/><br/>
                
                <input type="submit"/>
            </form>
        </div>
    )
}
}
const mapStateToProps=(state,props)=>{
    // console.log('form',props)
    const id=props.match.params.id
    return {
        customer:findCustomer(state.customers,id)
}
}
export default withRouter(connect(mapStateToProps)(CustomerForm))