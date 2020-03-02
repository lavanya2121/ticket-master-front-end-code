import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findDepartment} from '../../selectors/customerSelector'

function DepartmentShow(props){
    const {_id,name}=props.department || {}
    return(
        <div>
            {
                props.department?(
                <div>        
                    <h2>Department show-{_id}</h2>
                    <p>{name}</p>
                    <Link to={`/departments/edit/${_id}`}>edit</Link><br/>
                    <Link to='/departments'>back</Link></div>
                    ):(
                        <div>loading...</div>
                    )
            }
    
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        department:findDepartment(state.departments,id)
}
}
export default connect(mapStateToProps)(DepartmentShow)