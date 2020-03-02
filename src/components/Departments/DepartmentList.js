import React from 'react' 
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveDepartment,startSetDepartments} from '../../actions/departmentsAction'

function DepartmentList(props){

const handleRemove=(id)=>{
const confirmRemove=window.confirm('are you sure')
if(confirmRemove){
props.dispatch(startRemoveDepartment(id))
}
    }
    console.log("department props",props)
    if (props.departments.length == 0 ){
        // console.log("insode if")
       props.dispatch(startSetDepartments())
    }

    return(
    <div>
        <h2>Listing departments-{props.departments.length}</h2>
        <ul>
            {props.departments.map(department=>{
                return <li key={department._id}><Link to={`/departments/${department._id}`}>{department.name}</Link>
                <button onClick={()=>{handleRemove(department._id)}}>remove</button></li>
            })}
        </ul>
        <Link to='/departments/new'>Add Department</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        departments:state.departments
}
}
export default connect(mapStateToProps)(DepartmentList)