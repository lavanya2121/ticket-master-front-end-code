//For Customer
export const findCustomer=(customers,id)=>{
    return (customers.find(customer=>customer._id==id))

}

//For Department
export const findDepartment=(departments,id)=>{
    return (departments.find(department=>department._id==id))

}

export const employeeFind=(employee,id)=>{
    return employee.find(depart=>depart._id==id)
 }