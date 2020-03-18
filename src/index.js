// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';//==> ./ means the current folder here src is the current folder
// //import configureStore from './store/configureStore'
// import configureStore from './store/configureStore'
// import {Provider} from 'react-redux'
// // import { startSetUser } from './actions/userAction';
// import {startSetUser} from './actions/userAction';
// import {startSetCustomers} from './actions/customersAction'

// const store=configureStore()
// console.log(store.getState())
// store.subscribe(()=>{
//     console.log(store.getState())
// })



// //to handle or to prevent all the page reloads in all the components
// //when we refresh the page we get home,register n login but the user is logged in so to handle page reloads
// if(localStorage.getItem('authToken')){
//     store.dispatch(startSetUser())//preventing page reload for user by invoking startSetUser()
//     store.dispatch(startSetCustomers())////preventing page reload for user by invoking startSetCustomers()
// }

// const jsx=(
//     <Provider store={store}>
//     <App/>
//     </Provider>

// )
// ReactDOM.render(jsx, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startSetUser } from './actions/userAction'
import { startSetCustomers } from './actions/customersAction'
import {startSetDepartments} from './actions/departmentsAction'
import {startSetEmployees} from './actions/employeesAction'


const store=configureStore()
console.log(store.getState())
store.subscribe(() => {
console.log(store.getState())
})
if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
    store.dispatch(startSetDepartments())
    store.dispatch(startSetEmployees())
 
}
const jsx=(<Provider store={store}>
    <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))



