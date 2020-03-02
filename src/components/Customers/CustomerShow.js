// import React from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'//to read the data from the redux store
// import {findCustomer} from '../../selectors/customerSelector'

// function CustomerShow(props){
//     //object destructuring
//     //if we have truthy value then it will use props.customer
//     //if we have a falsy value then it will use  an empty object {},inside {} id,name,mobile,email will be undefined
//     const{_id,name,email,mobile}=props.customer || {}

//     return(
//         <div>
//             {
//                 //conditional rendering
//                 props.customer ?(
//             <div>     
//             <h2>Customer Show page-{_id}</h2>
//             <p>{name} {mobile} {email}</p>
//             <Link to={`/customers/edit/${_id}`}>edit</Link>
//             <br/>
//             <Link to="/customers">Back</Link>
//             </div>
//             ):(
//                     <div>
//                         Loading......
//                     </div>
//                 )
//             }
//             {/* <h2>Customer Show page-{props.customer._id}</h2>
//             <p>{props.customer.name} {props.customer.mobile} {props.customer.email}</p> */}

//         </div>
//     )
// }

// const mapStateToProps=(state,props)=>{
//     const id=props.match.params.id
// return {
//     //we should not write logic inside mapStateToProps but write it inside a selector
//    // customer:state.customers.find(customer=>customer._id==props.match.params.id)//now we have a customer but we need to find the customer based on the id
//    customer:findCustomer(state.customers,id)
//      }
// }

// export default connect(mapStateToProps)(CustomerShow)

// //dt of props is an object

import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomer} from '../../selectors/customerSelector'

function CustomerShow(props){
    const {_id,name,mobile,email}=props.customer || {}
    return(
        <div>
            {
                props.customer?(
                <div>        
                    <h2>customer show-{_id}</h2>
                    <p>{name}-{mobile}-{email}</p>
                    <Link to={`/customers/edit/${_id}`}>edit</Link><br/>
                    <Link to='/customers'>back</Link></div>
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
        customer:findCustomer(state.customers,id)
}
}
export default connect(mapStateToProps)(CustomerShow)