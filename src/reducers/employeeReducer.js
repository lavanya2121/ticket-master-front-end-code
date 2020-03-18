const employeeInitialState = []
const employeeReducer = (state = employeeInitialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE': {
            return [...state, action.payload]
        }
        case 'SET_EMPLOYEE': {
            return [...action.payload]
        }

        case 'REMOVE_EMPLOYEE': {
            return state.filter(employee => employee._id !== action.payload)
        }

        case 'EDIT_EMPLOYEE' : {
            return state.map(emp=>{
                if(emp._id == action.payload._id){
                    return action.payload
                }
                else{
                    return emp
                }
            })
        }
        default: {
            return [...state]
        }

    }
}
export default employeeReducer