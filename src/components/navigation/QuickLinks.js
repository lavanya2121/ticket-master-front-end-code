import React from 'react'
import {Link,withRouter} from 'react-router-dom'

function QuickLinks(props){
    console.log(props)
    return(
        <div>
            <Link to="/"></Link>
        </div>
    )

}

export default withRouter(QuickLinks)

//inside your quicklinks you dont have access to history,location and match becoz we are embedding QuickLinks compnent in app
//but all the Routes have access to history,location and match ,if we have it via Routes then all the 3 properties will be injected
//since QuickLinks is not a part of routes it does not have history,location and match 
//if we want to take the user from QuickLinks to some other component we should import withRouter
//now to make QuickLinks also to have history,location and match properties we must import withRouter


//withRouter->it is a higher order component
//since withRouter is a hoc now they are injecting history,location and match properties
//whenever your components are not rendered via the Route component but we are embedding it directly but inside QuickLinks components we need access to the history,location, n match properties so we use withRouter HOC
//The Main adv of using HOC is that they can inject something to your props-they r injecting history,location n match properties which was originally not there in QuickLinks