import axios from '../config/axios'

export const setDepartments=(departments)=>{
    return {type:'SET_DEPARTMENTS',payload:departments}
}
export const startSetDepartments = () => {
     return(dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const departments=response.data
            dispatch(setDepartments(departments))
        })
    }
}


export const addDepartment=(department)=>{
        return {type:'ADD_DEPARTMENTS',payload:department}
}
export const startAddDepartment=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department=response.data
            dispatch(addDepartment(department))
            redirect()
        })
    }
}
export const removeDepartment=(id)=>{
    return {type:'REMOVE_DEPARTMENTS',payload:id}
}
export const startRemoveDepartment=(id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const department=response.data
            dispatch(removeDepartment(department._id))
            // redirect()
        })
    }
}
export const updateDepartment=(department)=>{
    return  {
        type:'UPDATE_DEPARTMENTS',
        payload:department
    }
}
export const startUpdateDepartment=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/departments/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           // console.log(response.data)
            const department=response.data
            dispatch(updateDepartment(department))
            redirect()
        })
    }
}