export const findCustomer=(customers,id)=>{
    return (customers.find(customer=>customer._id==id))

}

export const findDepartment=(departments,id)=>{
    return (departments.find(department=>department._id==id))

}

