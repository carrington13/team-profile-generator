const Employee = require('./Employee.js');


class Intern extends Employee {
    constructor (data) {
        super(data);
        this.role = 'Intern';
        this.school = data.school;
    }

    getSchool() {
        return this.school
    }
    
    getRole() {
        return this.role;
    }
    
    // Overrriden to return 'Intern'
}

module.exports = Intern