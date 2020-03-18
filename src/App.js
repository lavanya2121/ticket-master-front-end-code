// import React from 'react';
// import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
// import Register from './components/Register'
// import Login from './components/Login'
// import {connect} from 'react-redux'
// import Account from './components/Account'
// import QuickLinks from './components/navigation/QuickLinks'
// import './App.css';
// import CustomerList from './components/Customers/CustomerList'
// import CustomerShow from './components/Customers/CustomerShow'

// function App(props) {
//   //console.log('app',props)
//   return (
//     <BrowserRouter>
//     <div>
//       <h2>Ticket Master</h2>
//       <Link to="/">Home</Link>
//       {//user is not logged in for the first time
//         Object.keys(props.user).length==0?(
//           <div>
//             <Link to="/users/register">Register</Link>
//             <Link to="/users/login">Login</Link>
//           </div>
//         ):(//user has logged in
//           <div>
//             <Link to="/customers">Customers</Link>

//              <Link to="/users/account">Account</Link>
//             <Link to="/users/logout">Logout</Link>

          
          
//           </div>
//         )
//       }
      
//       {/* embedding QuickLinks inside your app component -to display the QuickLinks*/}
//       <QuickLinks/>

//       {/* User Routes */}
//       <Switch>
//       <Route path="/users/account" component={Account} exact={true} />
//       <Route path="/users/register" component={Register} exact={true} />
//       <Route path="/users/login" component={Login} exact={true}/>
     
         
//       {/* Customer Routes */}
//       <Route path="/customers" component={CustomerList} exact={true} />
//       <Route path="/customers/:id" component={CustomerShow} />
//       </Switch>
//     </div>
//     </BrowserRouter>
//   );
// }

// const mapStateToProps=(state)=>{
//   return{
//     user:state.user
//   }

// }

// export default connect(mapStateToProps)(App);

// //install all the 6 packages

import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {startLogout} from './actions/userAction'


import Register from './components/Register'
import Login from './components/Login'
import Account from './components/Account'
import Home from './components/Home'


import CustomerList from './components/Customers/CustomerList'
import CustomerShow from './components/Customers/CustomerShow'
import CustomerNew from './components/Customers/CustomerNew'
import CustomerEdit from './components/Customers/CustomerEdit'

import DepartmentList from './components/Departments/DepartmentList'
import DepartmentShow from './components/Departments/DepartmentShow'
import DepartmentNew from './components/Departments/DepartmentNew'
import DepartmentEdit from './components/Departments/DepartmentEdit'

import EmployeeList from './components/Employees/EmployeeList'
import EmployeeShow from './components/Employees/EmployeeShow'
import EmployeeNew from './components/Employees/EmployeeNew'
import EmployeeEdit from './components/Employees/EmployeeEdit'


function App(props) {
 
    console.log('app', props)

    //logout event handler
    const handleLogout=()=>{
        props.dispatch(startLogout())//invoking
    }
    return (
        <BrowserRouter>
            <div >
                <h2>Ticket Master</h2>
                <Link to="/">Home</Link>
                {
                    Object.keys(props.user).length == 0 ? (
                        <div>
                           <Link to="/users/register">Register</Link>
                           <Link to="/users/login">Login</Link> 
                        </div>
                    ) : (
                            <div>
                                <Link to='/customers'>Customers</Link>
                                <Link to='/departments'>Departments</Link>
                                <Link to='/employees'>Employees</Link>
                                <Link to="/users/account">account</Link>
                                <Link to="#" onClick={()=>{
                                    handleLogout()//inline function
                                }}>logout</Link>
                            </div>
                        )
                }
               
                   <Switch>
                       {/* organise the routes properly */}
                     <Route path="/" component={Home} exact={true} />
                     <Route path="/users/account" component={Account} exact={true} />
                     
                     <Route path="/users/register" component={Register} exact={true} />
                     <Route path="/users/login" component={Login} exact={true}/>
     
         
                  {/* Customer Routes */}
                  <Route path="/customers" component={CustomerList} exact={true} />
                  <Route path="/customers/new" component={CustomerNew}/>
                  <Route path="/customers/edit/:id" component={CustomerEdit} />
                  {/* edit route with id should be the last route /:id must be the last route*/}
                  <Route path="/customers/:id" component={CustomerShow} />

                  {/* Departments Route */}
                  <Route path="/departments" component={DepartmentList} exact={true} />
                  <Route path="/departments/new" component={DepartmentNew}/>
                  <Route path="/departments/edit/:id" component={DepartmentEdit} />
                  <Route path="/departments/:id" component={DepartmentShow} />

                  {/* Employees Routes */}
                  <Route path="/employees" component={EmployeeList} exact={true}/>
                  <Route path="/employees/new" component={EmployeeNew} exact={true}/>
                  <Route path="/employees/edit/:id" component={EmployeeEdit} exact={true}/>
                  <Route path="/employees/:id" component={EmployeeShow}/>

                  </Switch>
            </div>
        </BrowserRouter>
    )
}
const mapStateToprops = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToprops)(App)

//whenever a route is matched once we need to break(no need to chk for further routes)
//   </Switch>=>is like a switch case whenever a condition is met we will execute some code n break