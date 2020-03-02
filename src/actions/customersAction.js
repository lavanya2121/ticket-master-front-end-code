// // import axios from '../config/axios'//configured axios->base url is alredy configured

// // //synchronous action creator->send the data to the store
// // export const setCustomers=(customers)=>{
// //     return{//now we are dispatching this object-->store->goes to the first reducer in the reducers n then it goes to the customersReducer
// //         type:'SET_CUSTOMERS',
// //         payload:customers
// //     }

// // }


// // //asynchrounos action creator which will help us to get the data from the server
// // export const startSetCustomers=()=>{
// //     return(dispatch)=>{//now startSetCustomers has access to the dispatch method
// //         axios.get('/customers',{
// //             headers:{
// //                 'x-auth':localStorage.getItem('authToken')
// //         }//now we will get customer info from the server
// //         })//1)parameter is the url where it has to go 2)parameter is the token info
// //         .then((response)=>{
// //            // console.log(response.data)
// //             //when we get the data(response) from the server we put into customers variable
// //             const customers=response.data
// //             console.log('customers',customers)
// //             //dispatch() method is available to us via thunk
// //             dispatch(setCustomers(customers))//invoking the synchronous action creator

// //         })

// //     }
// // }



// import axios from '../config/axios'

// //TO LIST A CUSTOMER

// //list synchrounous action generator
// export const setCustomers=(customers)=>{
//     return {type:'SET_CUSTOMERS',payload:customers}
// }

// //list asynnchrounous action generator
// export const startSetCustomers = () => {
//      return(dispatch)=>{
//         axios.get('/customers',{
//             headers:{
//                 'x-auth':localStorage.getItem('authToken')
//             }
//         })
//         .then((response)=>{
//             console.log(response.data)
//             const customers=response.data
//             // console.log('customers',customers)
//             dispatch(setCustomers(customers))
//         })
//     }
// }

// //TO ADD A CUSTOMER

// //add synchrounous action generator
// export const addCustomer=(customer)=>{
//     return {
//         type:'ADD_CUSTOMER',
//         payload:customer
//     }
// }

// //add asynchrounous action generator
// //to send the formdata to the server
// export const startAddCustomers = (formData,redirect) => {
//     return(dispatch)=>{
//        axios.post('/customers',formData,{
//            headers:{
//                'x-auth':localStorage.getItem('authToken')
//            }
//        })
//        .then((response)=>{
//            //console.log(response.data)
//            const customer=response.data
//            console.log('customers',customer)
//            dispatch(addCustomer(customer))
//            redirect()
//        })
//    }
// }

// //TO REMOVE A CUSTOMER

// //remove synchrounous action generator
// export const removeCustomer=(id)=>{
//     return {
//         type:'REMOVE_CUSTOMERS',
//         payload:id
//     }
// }

// //remove asynchrounous action generator
// //remove based on id
// export const startRemoveCustomers = (id) => {//we are removing based on  id
//     return(dispatch)=>{
//        axios.delete(`/customers/${id}`,{
//            headers:{
//                'x-auth':localStorage.getItem('authToken')
//            }
//        })
//        .then((response)=>{
//            console.log(response.data)
//            const customer=response.data
//            console.log('customers',customer)
//            dispatch(removeCustomer(customer._id))
//            //redirect()
//        })
//    }
// }

// //TO UPDATE A CUSTOMER

// //update synchrounous action generator
// export const updateCustomer=(customer)=>{//passing the entire customer obj
//     return {
//         type:'UPDATE_CUSTOMERS',
//         payload:customer
//     }//this action gets dispatched to the store
// }

// //to update a customer
// //update asynchrounous action generator
// export const startUpdateCustomer=(formData,id,redirect)=>{
//     return(dispatch)=>{
//         axios.put(`/customers/${id}`,formData,{
//             headers:{
//                 'x-auth':localStorage.getItem('authToken')
//             }
//         })
//         .then((response)=>{
//             console.log(response.data)
//             const customer=response.data
//             dispatch(updateCustomer(customer))
//             redirect()
//         })

//     }

// }
import axios from '../config/axios'

export const setCustomers=(customers)=>{
    return {type:'SET_CUSTOMERS',payload:customers}
}
export const startSetCustomers = () => {
     return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customers=response.data
            dispatch(setCustomers(customers))
        })
    }
    }
    export const addCustomer=(customer)=>{
        return {type:'ADD_CUSTOMERS',payload:customer}
    }
export const startAddCustomer=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer=response.data
            dispatch(addCustomer(customer))
            redirect()
        })
    }
}
export const removeCustomer=(id)=>{
    return {type:'REMOVE_CUSTOMERS',payload:id}
}
export const startRemoveCustomer=(id)=>{
    return(dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const customer=response.data
            dispatch(removeCustomer(customer._id))
            // redirect()
        })
    }
}
export const updateCustomer=(customer)=>{
    return  {
        type:'UPDATE_CUSTOMERS',
        payload:customer
    }
}
export const startUpdateCustomer=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //to chk the response from the server
           console.log('res',response.data)
            const customer=response.data
            dispatch(updateCustomer(customer))
            redirect()
        })
    }
}