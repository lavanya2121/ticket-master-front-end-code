//import axios from 'axios'//we need to put the entire baseurl+other urls
//since base url remains the same we will create axios inside config folder
import axios from '../config/axios'

export const startRegister=(formData,redirect)=>{
    return ()=>{//we are not using the user object what the server sends when we register so no dispatch inside return
        axios.post('/users/register',formData)//baseurl/users/register,post ->2nd arguement->formdata
        .then((response)=>{
            //console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                redirect()
            }
        })
    }

}


//synchrounous
export const setUser=(user)=>{
    return {type:'SET_USER',payload:user}
}

export const startSetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{//sending token info to the server //for get n delete headers is the 2nd parameter n for post n put it is the 3rd parameter(2nd parameter would be ur form data) 
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
            const user=response.data
            dispatch(setUser(user))//setUser->synchrounous
           // redirect()
        })

    }
    
}


//asynchrounous
export const startLogin=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/login',formData)//baseurl/users/register,post ->2nd arguement->formdata
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('error')){//to know the error we make an api call in postman to know about the errors
                alert(response.data.error)//this error is coming from the response of the server
            }else{//no error means we get the token from the server ie user is logged in
                localStorage.setItem('authToken',response.data.token)//we store/write the token inside a local storage
                //redirect()
                //once the user is successfully logged in we are making another api call to get the user info(user object)
                axios.get('/users/account',{//sending token info to the server //for get n delete headers is the 2nd parameter n for post n put it is the 3rd parameter(2nd parameter would be ur form data) 
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    console.log(response.data)
                    const user=response.data
                    dispatch(setUser(user))//setUser->synchrounous
                    redirect()
                    //package used to redirect is react-router-dom->history is a method//to go from one to another page
                    //react-router-dom package is helping us to navigate from one page to another page
                })
             }
        })
    }

}

//hasOwnProperty() n Object.keys()-->to chk if certain proprty exist

//why we are puuting the user object inside our redux store?
//irrespective of the size of your component ie inside the application we GET THE info about the user who is logged in ,in any component
//and it is great thing to know the details of a person who has logged in ,in any of the component
//throught the application we can get to know who the user who has logged in->user info is stored in a redux store->we ca read when required


//logout
export const removeUser=()=>{
    return {
        type:'REMOVE_USER'
    }
}

export const startLogout=()=>{
    return (dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            if(response.data.notice){
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                window.location.href="/users/login"//to go to the root of your page-->redirecting
                //here we cannot do history.push becoz browserrouter is inside your app component in app.js n withrouter also does not wrk
            }
        })
    }
}