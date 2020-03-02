// import {createStore,combineReducers,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'
// import userReducer from '../reducers/userReducer'//../ to go one folder back
// import customersReducer from '../reducers/customerReducer'

// const configureStore=()=>{
//     const store=createStore(combineReducers({
//         user:userReducer,
//         customers:customersReducer//customers info we will get it from the customers reducer
//     }),applyMiddleware(thunk))
//     return store//return the store object
// }

// export default configureStore

import { createStore, combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'
import departmentReducer from '../reducers/departmentReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducer,
        customers:customerReducer,
        departments:departmentReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore