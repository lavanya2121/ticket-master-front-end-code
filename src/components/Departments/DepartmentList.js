import React from 'react' 
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveDepartment,startSetDepartments} from '../../actions/departmentsAction'
import Swal from 'sweetalert2'

//material ui

function DepartmentList(props){

    const handleRemove = (id) => {
        //const confirmRemove = window.confirm("Are you sure?")
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
              props.dispatch(startRemoveDepartment(id))
            }
            
          })
    }
    if(props.departments.length == 0){
        props.dispatch(startSetDepartments())
    }
    return(
        <div>
            {
                props.departments ? (
                    <div>
                        <h2>Listing Departments-{props.departments.length}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Remove</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.departments.map(department => {
                            return <tr key={department._id}>
                                 <td>{department.name}</td>
                               <td>
                               <Link to={`/departments/${department._id}`}>
                                    <button>Show</button></Link>
                                </td>
                                <td>
                                   <button onClick={() => {
                                     handleRemove(department._id)
                                      }}>
                                          Remove
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
           <h4><Link to="/departments/new">Add Departments</Link></h4>
            </div>
    
                ) :(
                    <div>
                        <p>loading....</p>
                    </div>
                )
            }
        </div>
    )
    }
    
 const mapStateToProps = (state) => {
     return {
         departments : state.departments
     }
 } 

export default connect(mapStateToProps)(DepartmentList)