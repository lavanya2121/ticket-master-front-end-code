//to get the profile page of the user when the user is alredy logged in he can see his details
import React from 'react';
import {connect} from 'react-redux'

function Account(props){
    console.log('account',props)
    return(
        <div>
           <h2> User Account Information</h2>
           <h2>{props.user.username}</h2>
           <h2>{props.user.email}</h2>
        </div>

    )

}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Account)