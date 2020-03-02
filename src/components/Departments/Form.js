import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {findDepartment} from '../../selectors/customerSelector'

class DepartmentForm extends React.Component{
    constructor(props){
        console.log('form props',props)
        super(props)
            this.state={
                name:props.department?props.department.name:'',
                
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
        department:findDepartment(state.departments,id)
}
}
export default withRouter(connect(mapStateToProps)(DepartmentForm))