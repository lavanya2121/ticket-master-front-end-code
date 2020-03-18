// //it can be a function or class component but we will make it as a function component
// import React from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'//1)to read the value from the redux store import connect
// import { startSetCustomers, startRemoveCustomers } from '../../actions/customersAction';


// function CustomerList(props){
//     //remove
//     const handleRemove=(id)=>{
//         const confirmRemove=window.confirm("Are you Sure??")
//         if(confirmRemove){
//             props.dispatch(startRemoveCustomers(id))//invocation
//         }
//     }

//     // when the length of my array is 0 we will invoke startSetCustomers method and not when the component is loaded
//     //console.log(props)
//    if(props.customers.length==0){
//         props.dispatch(startSetCustomers())//invokin from here
//     } 
//     return(
//         <div>
//             {/* 4)now the customers info will be avilable to us via props -*/}
//             <h2>Listing Customers-{ props.customers.length}</h2>
//             <ul>
//                 {
//                     props.customers.map(customer=>{
//                         return <li key={customer._id}><Link to={`/customers/${customer._id}`}>
//                         {customer.name}</Link>
//                         <button onClick={()=>{
//                             handleRemove(customer._id)
//                         }}>Remove</button>
//                         </li>
//                     })
//                 }
//             </ul>

//             <Link to="/customers/new">Add customer</Link>
//         </div>
//     )
// }

// const mapStateToProps=(state)=>{//2)do this
//     return {
//         customers:state.customers//it must be customers n not customer becoz we want all the customers from the store
//     }
// }



// export default connect(mapStateToProps)(CustomerList)//3)pass mapStateToProps to connect hoc

// //get all the customers from the server and put into our redux store
// //1)first we must have a store
// //customers info we will get it from the customers reducer

// //5)to get customers we need to make an api call inside actions
import React from 'react' 
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetCustomers,startRemoveCustomer} from '../../actions/customersAction'
import Swal from 'sweetalert2'

function CustomerList(props){

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
          props.dispatch(startRemoveCustomer(id))
        }
        
      })
}
if(props.customers.length == 0){
    props.dispatch(startSetCustomers())
}
return(
    <div>
        {
            props.customers ? (
                <div>
                    <h2>Listing Customers-{props.customers.length}</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Actions</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.customers.map(customer => {
                        return <tr key={customer._id}>
                             <td>{customer._id}</td>
                             <td>{customer.name}</td>
                             <td>{customer.email}</td>
                             <td>{customer.mobile}</td>
                           
                           <td>
                           <Link to={`/customers/${customer._id}`}>
                                <button>Show</button></Link>
                            </td>
                            <td>
                               <button onClick={() => {
                                 handleRemove(customer._id)
                                  }}>
                                      Remove
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <h4><Link to="/customers/new">Add Customer</Link></h4>
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
    customers : state.customers
}
}

export default connect(mapStateToProps)(CustomerList)
