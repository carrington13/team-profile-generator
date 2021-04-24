const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (managerData) {
        super(managerData);
        this.role = "Manager";
        this.officeNumber = managerData.officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role //Returns 'Manager'
    }
}

module.exports = Manager;