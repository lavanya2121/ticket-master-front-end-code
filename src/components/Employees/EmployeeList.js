import React from 'react' 
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetEmployees,StartRemoveEmployee} from '../../actions/employeesAction'

import Swal from 'sweetalert2'

function EmployeeList(props){
    
    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              props.dispatch(StartRemoveEmployee(id))
            }
            
          })
    }
    console.log("employees props", props)
    if (props.employee.length == 0) {
        // console.log("insode if")
        props.dispatch(startSetEmployees())
    }
    return(
        <div>
            <h2>Listing employees-{props.employee.length}</h2>
         
            <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Department</th>
                    <th>Actions</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employee.map(employee => {
                        return <tr key={employee._id}>
                             <td>{employee._id}</td>
                             <td>{employee.name}</td>
                             <td>{employee.email}</td>
                             <td>{employee.mobile}</td>
                             <td>{employee.department.name}
                        
                           {/* {console.log("dept",employee.department.name)} */}
{/* {(props.departments.find(department => department._id == employee.department._id)).name } */}
                            </td>
                            <td>
                            <Link to={`/employees/${employee._id}`}>
                                <button>Show</button></Link>
                            </td>
                            <td>
                               <button onClick={ () => {
                               handleRemove(employee._id)
                                }}>Remove</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
           <Link to='/employees/new'>Add Employee</Link>
        </div>
    )


    }
 const mapStateToProps = (state) => {
    return {
        employee: state.employees
   }

}
export default connect(mapStateToProps)(EmployeeList)
