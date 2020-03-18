import React from 'react'
import {connect} from 'react-redux'
import EmployeeForm from './Form'
import {StartAddEmployee} from '../../actions/employeesAction'

function EmployeeNew(props){
    const handleSubmit = (formData) => {
        console.log("new page", formData)

        const redirect = () => props.history.push('/employees')
        props.dispatch(StartAddEmployee(formData, redirect))
    }
    return <div>
        <h2>Add Employees</h2>

        <EmployeeForm handleSubmit={handleSubmit} />
    </div>
}

export default connect()(EmployeeNew)