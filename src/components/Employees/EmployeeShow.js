import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {employeeFind} from '../../selectors/customerSelector'

function EmployeeShow(props){
    return (
        <div>
            <h1>Show Page</h1>
              {
                props.employee ? (
                    <div>
                            <p>{props.employee._id}</p>
                        <p>{props.employee.name}</p>
                {/* <p>{props.employee.email}</p>
                <p>{props.employee.mobile}</p>
                <p>{props.employee.department.name} </p>  */}
                        <Link to={`/employees/edit/${props.employee._id}`}>edit</Link><br />
                        <Link to='/employees'>back</Link></div>
                ) : (
                        <div>loading...</div>
                    )
            }  

        </div>
    )
}

const mapStateToProps = (state,props) => {
//console.log(state)

 const id=props.match.params.id
 //console.log("id is what"+ id)
    return {
        department: state.departments,
        employee : employeeFind(state.employees,id)
   
    }
}






export default connect(mapStateToProps)(EmployeeShow)