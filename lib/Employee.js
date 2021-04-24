// PARENT CLASS
class Employee {
    constructor (data) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
        this.role = 'Employee';
    }

    getName() { 
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role
     }// Returns 'Employee'
}


module.exports = Employee;