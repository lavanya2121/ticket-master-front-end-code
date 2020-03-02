import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from './Form'
import {startAddCustomer} from '../../actions/customersAction'
import { startAddDepartment } from '../../actions/departmentsAction';

function DepartmentNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/departments')
        props.dispatch(startAddDepartment(formData,redirect))
    }
    return <div>
       <h2>Add Department</h2> 
       <DepartmentForm handleSubmit={handleSubmit}/>
    </div>
}
export default connect()(DepartmentNew)