import React from 'react'
import {connect} from 'react-redux'
import {startEditEmployee} from '../../actions/employeesAction'
import {withRouter} from 'react-router-dom'
import EmployeeForm from './Form'
import { employeeFind } from '../../selectors/customerSelector';

function EmployeeEdit(props){
    const redirect = () => {
        return props.history.push('/employee')
    }
    const id = props.match.params.id
    const handleSubmit = (formData) => {
        props.dispatch(startEditEmployee({formData,redirect,id}))
    }
    return(
        <div className="container">
            <h2>Edit employee</h2>
            <EmployeeForm handleSubmit={handleSubmit} employee={props.employee} />

        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return{
        employee : employeeFind(state.employees,id)
    }
}

export default withRouter(connect(mapStateToProps)(EmployeeEdit))