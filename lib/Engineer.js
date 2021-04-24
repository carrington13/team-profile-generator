const Employee = require('./Employee.js');


class Engineer extends Employee {
    constructor (data) {
        super(data);
        this.role = 'Engineer';
        this.github = data.github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }//Overridden to return 'Engineer'S
}


module.exports = Engineer