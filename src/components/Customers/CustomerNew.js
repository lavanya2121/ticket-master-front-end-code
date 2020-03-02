// import React from 'react'
// import CustomerForm from './Form'
// import {connect} from 'react-redux'
// import {startAddCustomers} from '../../actions/customersAction'

// function CustomerNew(props){
//     //method defined in parent
//     const handleSubmit=(formData)=>{
//         const redirect=()=>props.history.push('/customers')
//         props.dispatch(startAddCustomers(formData,redirect))
//     }
//     return(
//         <div>
//             <h2>Add Customer</h2>
//             {/* CustomerNew->parent,CustomerForm->child component */}
//             {/* //passing method down to the child component */}
//             <CustomerForm handleSubmit={handleSubmit}/>
//         </div>
//     )

// }
// export default connect()(CustomerNew)

import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from './Form'
import {startAddCustomer} from '../../actions/customersAction'

function CustomerNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
        props.dispatch(startAddCustomer(formData,redirect))
    }
    return <div>
       <h2>Add Customer</h2> 
       <CustomerForm handleSubmit={handleSubmit}/>
    </div>
}
export default connect()(CustomerNew)