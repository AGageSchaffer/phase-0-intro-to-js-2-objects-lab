const employee = {
    name: "Sam",
    streetAddress: "123 Oakland St"
}
function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    const newEmployee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
    }
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = `Sam`, 
    employee.streetAddress = `12 Broadway`
    return employee
}
function deleteFromEmployeeByKey () {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name
    return employee
}