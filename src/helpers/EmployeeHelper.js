import { Component } from 'react'

export class EmployeeHelper extends Component {

    static getFullName(employee) {
        return (employee ? employee.name + " " + employee.surname : "");
    }

}

export default EmployeeHelper
