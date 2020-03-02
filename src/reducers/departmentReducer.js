
const departmentsInitialState = []
const departmentReducer = (state = departmentsInitialState,action) => {
    switch(action.type) {
        case 'ADD_DEPARTMENTS':{
            return ([...state,action.payload])
        }
        case 'UPDATE_DEPARTMENTS':{
            return (state.map(department=>{
               if(department._id==action.payload._id) {
                   return action.payload//when we have a parameter
               }else{
                   return {...department}//when no parameter
               }
            }))
        }
        case'SET_DEPARTMENTS': {
            return ([...action.payload])
        }
        case 'REMOVE_DEPARTMENTS':{
            return (state.filter(department=>department._id!==action.payload))
        }
     
        default: {
            return ([...state])
        }

    }
}
export default departmentReducer