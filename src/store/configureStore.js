
import { createStore, combineReducers,applyMiddleware} from 'redux'
import userReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'
import departmentReducer from '../reducers/departmentReducer'
import employeeReducer from '../reducers/employeeReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducer,
        customers:customerReducer,//customers info we will get it from the customers reducer
        departments:departmentReducer,
        employees:employeeReducer
    }),applyMiddleware(thunk))
    return store//return the store object
}
export default configureStore