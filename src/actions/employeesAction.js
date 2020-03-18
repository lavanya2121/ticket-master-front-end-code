import axios from '../config/axios'

//list
export const setemployees = (employees) => {
    return { type: 'SET_EMPLOYEE', payload: employees }
}

export const startSetEmployees = () => {
    return (dispatch) => {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {

                const employees = response.data
                dispatch(setemployees(employees))
            })
    }
}

//add
export const addEmployee= (employee) => {
    return { type: 'ADD_EMPLOYEE', payload: employee }
}

export const StartAddEmployee = (formData,redirect) => {
    return (dispatch) => {
        axios.post('/employees', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                const employee = response.data
                console.log(response.data)
                dispatch(addEmployee(employee))
                redirect()
            })
    }
}

//remove
export const removeEmployee = (id) => {
    return { type: 'REMOVE_EMPLOYEE', payload: id }
}
export const StartRemoveEmployee = (id) => {
    return (dispatch) => {
        axios.delete(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                console.log(response.data)
                const employee = response.data
                dispatch(removeEmployee(employee._id))
                // redirect()
            })
    }
}

export const updateEmployee = (employee) => {
    return { type: 'UPDATE_EMPLOYEE', payload: employee }
}
export const StartUpdateEmployee = (formData, id, redirect) => {
    console.log(formData)
    console.log(id)
    return(dispatch)=>{
        console.log("inside didpa")
        axios.put(`/employees/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                console.log('employee',response.data)

                const employee = response.data
                dispatch(updateEmployee(employee))
                redirect()
            })
    }
}

//edit
export const editEmployee = (employee) => {
    return {type : "EDIT_EMPLOYEE" , payload : employee}
}

export const startEditEmployee=(obj)=>{
    return(dispatch)=>{
        axios.put(`/employees/${obj.id}`,obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
          
            // dispatch(startGetEmployeee())
            dispatch(editEmployee(response.data))
            obj.redirect()
        })
    }
}