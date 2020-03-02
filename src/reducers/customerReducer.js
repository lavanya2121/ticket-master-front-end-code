// const customersInitialState=[]

// const customersReducer=(state=customersInitialState,action)=>{
//     switch(action.type){
//         case 'SET_CUSTOMERS':{
//             return [...action.payload]
//         }
//         default:{
//             return [...state]
//         }

//     }

// }
// export default customersReducer

// //when the state changes components are rerendered
// const customersInitialState = []
// const customersReducer = (state = customersInitialState,action) => {
//     switch(action.type) {
//         //ADD_CUSTOMERS ->must be the 1st one
//         case 'ADD_CUSTOMERS':{
//             return [...state,action.payload]
//         } 
//         case 'UPDATE_CUSTOMERS':{
//             return state.map(customer=>{//passing the entire customer object
//                if(customer._id==action.payload._id) {
//                    return {...customer,...action.paylaod}
//                }else{
//                    return {...customer}
//                }
//             })
//         }
//         case 'SET_CUSTOMERS': {
//             return [...action.payload]
//         }
//         case 'REMOVE_CUSTOMERS':{
//             return state.filter(customer=>customer._id!==action.payload)
//         }
//         default: {
//             return [...state]
//         }

//     }
// }
// export default customersReducer

const customersInitialState = []
const customerReducer = (state = customersInitialState,action) => {
    switch(action.type) {
        case 'ADD_CUSTOMERS':{
            return ([...state,action.payload])
        }
        case 'UPDATE_CUSTOMERS':{
            return (state.map(customer=>{
               if(customer._id==action.payload._id) {
                   return {...action.payload}
               }else{
                   return customer
               }
            }))
        }
        case'SET_CUSTOMERS': {
            return ([...action.payload])
        }
        case 'REMOVE_CUSTOMERS':{
            return (state.filter(customer=>customer._id!==action.payload))
        }
     
        default: {
            return ([...state])
        }

    }
}
export default customerReducer